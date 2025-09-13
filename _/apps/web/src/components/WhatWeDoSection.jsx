import { ArrowRight, Activity, Brain, Heart } from "lucide-react";

export default function WhatWeDoSection() {
  const features = [
    {
      id: 1,
      title: "Symptom Pattern Analysis",
      description:
        "Advanced machine learning algorithms analyze your symptom combinations to identify potential medical conditions. Our system recognizes complex patterns between symptoms and provides detailed diagnostic insights with confidence scores.",
      icon: Activity,
      reverse: false,
    },
    {
      id: 2,
      title: "AI-Powered Disease Prediction",
      description:
        "Using Random Forest classification trained on extensive medical datasets, our AI system predicts possible diseases based on your symptom input. Get instant preliminary diagnoses with scientific accuracy and confidence ratings.",
      icon: Brain,
      reverse: true,
    },
    {
      id: 3,
      title: "Comprehensive Medical Insights",
      description:
        "Access detailed information about predicted conditions, severity levels, and recommended next steps. Our platform provides holistic health insights while emphasizing the importance of professional medical consultation.",
      icon: Heart,
      reverse: false,
    },
  ];

  return (
    <section className="bg-white dark:bg-[#121212] py-16 lg:py-24 xl:py-28">
      <div className="max-w-[1140px] mx-auto px-6 lg:px-8">
        {/* Section Eyebrow */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-inter font-semibold text-[14px] text-[#0068FF] dark:text-blue-400 tracking-wider uppercase mb-2">
            What We Do
          </h2>
        </div>

        {/* Feature Rows */}
        <div className="space-y-16 lg:space-y-[90px]">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center ${feature.reverse ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Text Content */}
                <div
                  className={`space-y-4 lg:space-y-6 ${feature.reverse ? "lg:col-start-2" : ""} order-2 lg:order-none`}
                >
                  <h3 className="font-inter font-semibold text-[24px] lg:text-[28px] xl:text-[36px] leading-[1.1] text-[#161616] dark:text-white max-w-[540px]">
                    {feature.title}
                  </h3>
                  <p className="font-inter text-[14px] lg:text-[15px] xl:text-[16px] leading-[1.6] lg:leading-[1.75] xl:leading-[2] text-[#5F5F5F] dark:text-gray-300 max-w-[540px]">
                    {feature.description}
                  </p>
                  <div className="pt-2">
                    <a
                      href="/diagnosis"
                      className="inline-flex items-center gap-2 bg-[#0068FF] dark:bg-blue-500 text-white px-6 lg:px-7 py-3 rounded-full font-inter text-[14px] lg:text-[15px] hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-700"
                    >
                      Try it now
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>

                {/* Icon Content */}
                <div
                  className={`${feature.reverse ? "lg:col-start-1" : ""} order-1 lg:order-none`}
                >
                  <div className="relative max-w-[460px] lg:max-w-[520px] mx-auto">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-[30px] border border-gray-200 dark:border-gray-700 p-16 lg:p-20 flex items-center justify-center">
                      <IconComponent size={120} className="text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}