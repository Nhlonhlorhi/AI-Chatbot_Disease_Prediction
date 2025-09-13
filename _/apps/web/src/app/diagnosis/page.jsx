"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Plus, X, AlertCircle, CheckCircle, Activity } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function DiagnosisPage() {
  const [symptoms, setSymptoms] = useState([]);
  const [availableSymptoms, setAvailableSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load available symptoms on component mount
  useEffect(() => {
    fetchSymptoms();
  }, []);

  const fetchSymptoms = async () => {
    try {
      const response = await fetch('/api/symptoms');
      if (!response.ok) {
        throw new Error('Failed to fetch symptoms');
      }
      const data = await response.json();
      setAvailableSymptoms(data.symptoms || []);
    } catch (error) {
      console.error('Error fetching symptoms:', error);
      setError('Failed to load symptoms. Please try again.');
    }
  };

  const filteredSymptoms = availableSymptoms.filter(symptom =>
    symptom.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !selectedSymptoms.find(selected => selected.id === symptom.id)
  );

  const addSymptom = (symptom) => {
    setSelectedSymptoms([...selectedSymptoms, symptom]);
    setSearchTerm("");
  };

  const removeSymptom = (symptomId) => {
    setSelectedSymptoms(selectedSymptoms.filter(s => s.id !== symptomId));
  };

  const handlePredict = async () => {
    if (selectedSymptoms.length === 0) {
      setError('Please select at least one symptom');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const symptomNames = selectedSymptoms.map(s => s.name);
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          symptoms: symptomNames,
          userSession: 'web-user-' + Date.now()
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get prediction');
      }

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Error getting prediction:', error);
      setError('Failed to get prediction. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSelectedSymptoms([]);
    setPrediction(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-inter font-extrabold text-[32px] md:text-[48px] lg:text-[56px] leading-tight text-black dark:text-white mb-4">
            AI Medical Diagnosis
          </h1>
          <p className="font-inter text-[16px] lg:text-[18px] text-[#6F6F6F] dark:text-gray-300 max-w-2xl mx-auto">
            Select your symptoms below and our AI will analyze them to provide preliminary diagnostic insights.
          </p>
        </div>

        {/* Medical Disclaimer */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-yellow-600 dark:text-yellow-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-inter font-semibold text-[16px] text-yellow-800 dark:text-yellow-200 mb-2">
                Important Medical Disclaimer
              </h3>
              <p className="text-[14px] text-yellow-700 dark:text-yellow-300 font-inter leading-relaxed">
                This AI tool provides preliminary insights only and should not replace professional medical advice. 
                Always consult qualified healthcare professionals for proper diagnosis, treatment, and medical decisions. 
                In case of emergency, contact emergency services immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Symptom Selection */}
        <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 rounded-[20px] p-8 mb-8">
          <h2 className="font-inter font-semibold text-[24px] text-black dark:text-white mb-6">
            Select Your Symptoms
          </h2>

          {/* Search Input */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search symptoms (e.g., fever, headache, cough)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-50 dark:bg-[#2A2A2A] border border-gray-200 dark:border-gray-600 rounded-full px-6 py-3 font-inter text-[16px] text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Search Results */}
          {searchTerm && filteredSymptoms.length > 0 && (
            <div className="mb-6">
              <h3 className="font-inter font-medium text-[16px] text-gray-700 dark:text-gray-300 mb-3">
                Available Symptoms:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredSymptoms.slice(0, 9).map((symptom) => (
                  <button
                    key={symptom.id}
                    onClick={() => addSymptom(symptom)}
                    className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-2 text-left transition-colors duration-200"
                  >
                    <Plus size={16} className="text-blue-600 dark:text-blue-400" />
                    <span className="font-inter text-[14px] text-blue-700 dark:text-blue-300">
                      {symptom.name.replace(/_/g, ' ')}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Selected Symptoms */}
          {selectedSymptoms.length > 0 && (
            <div className="mb-6">
              <h3 className="font-inter font-medium text-[16px] text-gray-700 dark:text-gray-300 mb-3">
                Selected Symptoms ({selectedSymptoms.length}):
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedSymptoms.map((symptom) => (
                  <div
                    key={symptom.id}
                    className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full px-4 py-2"
                  >
                    <span className="font-inter text-[14px] text-green-700 dark:text-green-300">
                      {symptom.name.replace(/_/g, ' ')}
                    </span>
                    <button
                      onClick={() => removeSymptom(symptom.id)}
                      className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handlePredict}
              disabled={loading || selectedSymptoms.length === 0}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-full font-inter font-semibold text-[16px] transition-colors duration-200"
            >
              {loading ? (
                <>
                  <Activity size={16} className="animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  Get AI Diagnosis
                  <ArrowRight size={16} />
                </>
              )}
            </button>
            
            {(selectedSymptoms.length > 0 || prediction) && (
              <button
                onClick={resetForm}
                className="flex items-center justify-center bg-gray-100 dark:bg-[#2A2A2A] hover:bg-gray-200 dark:hover:bg-[#333333] text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full font-inter font-semibold text-[16px] transition-colors duration-200"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-8">
            <div className="flex items-center gap-3">
              <AlertCircle size={20} className="text-red-600 dark:text-red-400" />
              <p className="text-red-700 dark:text-red-300 font-inter text-[14px]">
                {error}
              </p>
            </div>
          </div>
        )}

        {/* Prediction Results */}
        {prediction && (
          <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 rounded-[20px] p-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle size={24} className="text-green-600 dark:text-green-400" />
              <h2 className="font-inter font-semibold text-[24px] text-black dark:text-white">
                AI Diagnosis Result
              </h2>
            </div>

            <div className="space-y-6">
              {/* Predicted Disease */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <h3 className="font-inter font-semibold text-[18px] text-blue-800 dark:text-blue-200 mb-2">
                  Predicted Condition
                </h3>
                <p className="font-inter text-[20px] font-bold text-blue-900 dark:text-blue-100 mb-2">
                  {prediction.disease}
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-inter text-[14px] text-blue-700 dark:text-blue-300">
                    Confidence Score:
                  </span>
                  <span className="font-inter text-[16px] font-bold text-blue-800 dark:text-blue-200">
                    {prediction.confidence}%
                  </span>
                </div>
              </div>

              {/* Analyzed Symptoms */}
              <div>
                <h3 className="font-inter font-semibold text-[16px] text-gray-700 dark:text-gray-300 mb-3">
                  Analyzed Symptoms:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {prediction.symptoms.map((symptom, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 dark:bg-[#2A2A2A] px-3 py-1 rounded-full font-inter text-[14px] text-gray-700 dark:text-gray-300"
                    >
                      {symptom.replace(/_/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <h3 className="font-inter font-semibold text-[16px] text-yellow-800 dark:text-yellow-200 mb-2">
                  Recommended Next Steps
                </h3>
                <ul className="list-disc list-inside space-y-1 text-[14px] text-yellow-700 dark:text-yellow-300 font-inter">
                  <li>Consult with a qualified healthcare professional for proper diagnosis</li>
                  <li>Share these results with your doctor during your appointment</li>
                  <li>Monitor your symptoms and seek immediate care if they worsen</li>
                  <li>Follow any existing treatment plans from your healthcare provider</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}