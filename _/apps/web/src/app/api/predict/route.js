import sql from "@/app/api/utils/sql";

// Simple disease prediction logic based on symptom patterns
function predictDisease(symptoms) {
  const symptomLower = symptoms.map(s => s.toLowerCase().replace(/\s+/g, '_'));
  
  // Define symptom-disease mappings (simplified ML logic)
  const diseasePatterns = {
    'Common Cold': ['runny_nose', 'sore_throat', 'cough', 'fatigue'],
    'Influenza': ['fever', 'muscle_aches', 'fatigue', 'headache', 'cough'],
    'Pneumonia': ['fever', 'cough', 'shortness_of_breath', 'chest_pain'],
    'Migraine': ['headache', 'nausea', 'blurred_vision'],
    'Food Poisoning': ['nausea', 'vomiting', 'diarrhea', 'abdominal_pain'],
    'Allergic Reaction': ['skin_rash', 'itching', 'swelling', 'shortness_of_breath'],
    'Gastroenteritis': ['nausea', 'vomiting', 'diarrhea', 'abdominal_pain', 'fever'],
    'Asthma': ['shortness_of_breath', 'cough', 'chest_pain'],
    'Bronchitis': ['cough', 'chest_pain', 'fatigue', 'fever'],
    'Sinusitis': ['headache', 'runny_nose', 'sore_throat']
  };
  
  let bestMatch = { disease: 'Unknown Condition', confidence: 0 };
  
  for (const [disease, pattern] of Object.entries(diseasePatterns)) {
    const matches = pattern.filter(symptom => symptomLower.includes(symptom)).length;
    const confidence = matches / pattern.length;
    
    if (confidence > bestMatch.confidence) {
      bestMatch = { disease, confidence };
    }
  }
  
  // If confidence is too low, suggest general advice
  if (bestMatch.confidence < 0.3) {
    bestMatch = { disease: 'Unclear Diagnosis', confidence: 0.1 };
  }
  
  return bestMatch;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { symptoms, userSession } = body;
    
    if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
      return Response.json({ error: 'Symptoms array is required' }, { status: 400 });
    }
    
    // Get prediction
    const prediction = predictDisease(symptoms);
    
    // Store prediction in database
    const result = await sql`
      INSERT INTO predictions (user_session, symptoms_input, predicted_disease, confidence_score)
      VALUES (
        ${userSession || 'anonymous'}, 
        ${symptoms.join(', ')}, 
        ${prediction.disease}, 
        ${prediction.confidence}
      )
      RETURNING id, prediction_date
    `;
    
    return Response.json({
      prediction: {
        disease: prediction.disease,
        confidence: Math.round(prediction.confidence * 100),
        symptoms: symptoms,
        predictionId: result[0].id,
        timestamp: result[0].prediction_date
      }
    });
  } catch (error) {
    console.error('Error making prediction:', error);
    return Response.json({ error: 'Failed to make prediction' }, { status: 500 });
  }
}