import sql from "@/app/api/utils/sql";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userSession = searchParams.get('userSession');
    const limit = parseInt(searchParams.get('limit')) || 10;
    
    let predictions;
    
    if (userSession) {
      predictions = await sql`
        SELECT id, symptoms_input, predicted_disease, confidence_score, prediction_date
        FROM predictions 
        WHERE user_session = ${userSession}
        ORDER BY prediction_date DESC
        LIMIT ${limit}
      `;
    } else {
      predictions = await sql`
        SELECT id, symptoms_input, predicted_disease, confidence_score, prediction_date
        FROM predictions 
        ORDER BY prediction_date DESC
        LIMIT ${limit}
      `;
    }
    
    return Response.json({ predictions });
  } catch (error) {
    console.error('Error fetching predictions:', error);
    return Response.json({ error: 'Failed to fetch predictions' }, { status: 500 });
  }
}