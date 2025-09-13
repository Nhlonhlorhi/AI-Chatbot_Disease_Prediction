import { ArrowRight } from "lucide-react";

export default function JoinUsSection() {
  return (
    <section className="bg-white dark:bg-[#121212] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Content */}
        <div className="text-center space-y-4 lg:space-y-6 xl:space-y-8">
          {/* Main Headline */}
          <h2 className="font-inter font-bold text-[28px] lg:text-[32px] xl:text-[48px] leading-tight text-[#1A1A1A] dark:text-white">
            Start Your AI Health Journey
          </h2>

          {/* Sub-copy */}
          <p className="font-inter text-[14px] lg:text-[16px] xl:text-[18px] text-[#5E636A] dark:text-gray-300 max-w-[480px] mx-auto leading-relaxed">
            Experience the future of preliminary medical diagnosis with our advanced AI-powered platform. Get instant insights from your symptoms.
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <a
              href="/diagnosis"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white px-6 lg:px-8 xl:px-10 py-3 lg:py-4 xl:py-5 rounded-full font-inter font-semibold text-[14px] lg:text-[16px] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-700 w-full sm:w-auto"
            >
              Try AI Diagnosis
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}