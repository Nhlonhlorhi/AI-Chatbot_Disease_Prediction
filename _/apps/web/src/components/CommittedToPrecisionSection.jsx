import { Brain, Activity, Lock } from "lucide-react";

export default function CommittedToPrecisionSection() {
  const valuePillars = [
    {
      id: 1,
      icon: Brain,
      title: "AI Innovation",
      description:
        "State-of-the-art machine learning algorithms that continuously evolve to improve diagnostic accuracy. Our Random Forest models are trained on extensive medical datasets to deliver unprecedented precision in symptom analysis.",
      ariaLabel: "AI innovation in medical diagnosis",
    },
    {
      id: 2,
      icon: Activity,
      title: "Healthcare Access",
      description:
        "Making preliminary medical insights accessible to everyone, everywhere. Our platform empowers individuals to make informed healthcare decisions while bridging the gap between symptoms and professional medical care.",
      ariaLabel: "Healthcare accessibility and patient empowerment",
    },
    {
      id: 3,
      icon: Lock,
      title: "Data Privacy",
      description:
        "Enterprise-grade security protocols ensure that all medical information remains confidential and secure. We comply with healthcare privacy standards to protect sensitive patient data at all times.",
      ariaLabel: "Medical data privacy and security",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#121212] py-24 lg:py-32">
      <div className="max-w-[1220px] mx-auto px-6 lg:px-8">
        {/* Main Headline */}
        <div className="text-center mb-14">
          <h2 className="font-inter font-extrabold text-[32px] lg:text-[44px] xl:text-[56px] leading-[40px] lg:leading-[52px] xl:leading-[64px] text-[#0A0A0A] dark:text-white max-w-4xl mx-auto">
            Committed to Precision and Privacy in AI Healthcare
          </h2>
        </div>

        {/* Three-Column Feature Grid */}
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-16">
          {valuePillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="text-center lg:text-left space-y-8"
              >
                {/* Icon */}
                <div className="flex justify-center lg:justify-start">
                  <IconComponent
                    size={26}
                    className="text-[#0062FF] dark:text-blue-400"
                    aria-label={pillar.ariaLabel}
                  />
                </div>

                {/* Feature Heading */}
                <h3 className="font-inter font-semibold text-[18px] lg:text-[20px] text-[#0A0A0A] dark:text-white">
                  {pillar.title}
                </h3>

                {/* Supporting Copy */}
                <p className="font-inter text-[15px] lg:text-[16px] leading-[150%] text-[#555E6A] dark:text-gray-300">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}