import { ArrowRight, Activity } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-white dark:bg-[#121212] min-h-[85vh] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-[7vw] items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Main Headline */}
            <h1 className="font-inter font-extrabold text-[32px] md:text-[42px] lg:text-[72px] leading-tight text-black dark:text-white">
              AI-Powered Medical
              <br className="hidden md:block" />
              Diagnosis at Your
              <br className="hidden md:block" />
              Fingertips
            </h1>

            {/* Supporting Copy */}
            <p className="font-inter text-[14px] md:text-[16px] lg:text-[18px] leading-[160%] text-[#6F6F6F] dark:text-gray-300 max-w-lg">
              Enter your symptoms and get instant AI-powered insights about possible medical conditions. Our advanced machine learning algorithms analyze symptom patterns to provide preliminary diagnostic suggestions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-2">
              <a
                href="/diagnosis"
                className="inline-flex items-center justify-center gap-2 bg-[#0B66FF] dark:bg-blue-500 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-inter font-semibold text-[14px] lg:text-[16px] hover:bg-[#0952CC] dark:hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0B66FF] dark:focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 w-full sm:w-auto"
              >
                Start Diagnosis
                <ArrowRight size={16} />
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center bg-[#F7F8FA] dark:bg-[#1E1E1E] text-black dark:text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-inter font-semibold text-[14px] lg:text-[16px] hover:bg-[#E8E9EB] dark:hover:bg-[#262626] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0B66FF] dark:focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 w-full sm:w-auto"
              >
                Learn more
              </a>
            </div>

            {/* Medical Disclaimer */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-6">
              <p className="text-[12px] md:text-[14px] text-yellow-800 dark:text-yellow-200 font-inter">
                <strong>Medical Disclaimer:</strong> This AI tool provides preliminary insights only. Always consult qualified healthcare professionals for proper medical diagnosis and treatment.
              </p>
            </div>
          </div>

          {/* Right Column - Medical Illustration */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full max-w-[400px] lg:max-w-[500px] mx-auto">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-full p-8 lg:p-12">
                <Activity size={200} className="w-full h-auto text-blue-600 dark:text-blue-400 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}