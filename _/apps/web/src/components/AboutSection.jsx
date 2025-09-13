export default function AboutSection() {
  return (
    <section className="bg-white dark:bg-[#121212] py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top Row - Title and Mission */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Section Title */}
          <div>
            <h2 className="font-inter text-[32px] md:text-[44px] leading-[110%] text-black dark:text-white font-semibold">
              About MediAI
            </h2>
          </div>

          {/* Mission Statement */}
          <div className="max-w-[450px]">
            <p className="font-inter text-[16px] md:text-[18px] leading-[150%] text-[#4D4D4D] dark:text-gray-300">
              At MediAI, we're revolutionizing healthcare through artificial intelligence. Our mission is to democratize medical insights by providing instant, AI-powered preliminary diagnoses based on symptom patterns, making healthcare more accessible to everyone.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Card A - Our Mission */}
          <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 rounded-[30px] p-8 lg:p-12">
            {/* Content */}
            <div className="space-y-4">
              <h3 className="font-inter text-[20px] md:text-[24px] leading-[120%] font-semibold text-[#0A63FF] dark:text-blue-400">
                Our Mission
              </h3>
              <p className="font-inter text-[16px] leading-[160%] text-[#7A7A7A] dark:text-gray-300 max-w-[65ch]">
                We believe that everyone should have access to preliminary medical insights. Our AI system analyzes symptom patterns using machine learning algorithms trained on extensive medical datasets to provide instant diagnostic suggestions that can guide healthcare decisions.
              </p>
            </div>
          </div>

          {/* Card B - How It Works */}
          <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 rounded-[30px] p-8 lg:p-12">
            {/* Content */}
            <div className="space-y-4">
              <h3 className="font-inter text-[20px] md:text-[24px] leading-[120%] font-semibold text-[#0A63FF] dark:text-blue-400">
                How It Works
              </h3>
              <p className="font-inter text-[16px] leading-[160%] text-[#7A7A7A] dark:text-gray-300 max-w-[65ch]">
                Our system uses Random Forest classification algorithms to analyze symptom combinations and predict possible medical conditions. The AI model has been trained on comprehensive medical datasets to recognize patterns between symptoms and diseases, providing confidence scores for each prediction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}