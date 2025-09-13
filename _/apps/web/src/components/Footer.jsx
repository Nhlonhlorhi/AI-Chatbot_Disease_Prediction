import { useState } from "react";
import { Activity } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState("EN");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // Handle newsletter subscription
      setIsSubscribed(true);
      setEmail("");
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = ["Home", "AI Diagnosis", "About", "Contact"];
  const socialLinks = ["LinkedIn", "Twitter", "GitHub", "Research"];
  const legalLinks = ["Privacy", "Terms & Conditions", "Medical Disclaimer"];

  return (
    <footer className="bg-blue-600 dark:bg-[#0A0A0A] text-white mt-16 lg:mt-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Hero + Subscribe Section */}
        <div className="grid lg:grid-cols-[60%_40%] gap-12 lg:gap-16 pt-[72px] pb-[56px]">
          {/* Left Column - Headline */}
          <div>
            <h2 className="font-inter font-semibold text-[36px] lg:text-[60px] leading-[1.12] text-white">
              Advancing Healthcare with
              <br />
              Artificial Intelligence
            </h2>
          </div>

          {/* Right Column - Newsletter Signup */}
          <div className="space-y-2">
            <label className="block font-inter text-[14px] lg:text-[18px] text-white/80 mb-2">
              Get updates on AI healthcare innovations
            </label>

            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-blue-600 dark:bg-[#1E1E1E] border border-white/60 dark:border-gray-600 focus:border-white dark:focus:border-gray-300 focus:border-2 rounded-full py-[18px] px-6 text-white placeholder-white/70 dark:placeholder-gray-400 font-inter focus:outline-none transition-all duration-200"
                required
              />
              <button
                type="submit"
                className="bg-white dark:bg-gray-200 text-blue-600 dark:text-gray-800 font-inter font-semibold px-8 py-[18px] rounded-full hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-blue-600 dark:focus:ring-offset-gray-800"
              >
                {isSubscribed ? "Subscribed!" : "Submit"}
              </button>
            </form>
          </div>
        </div>

        {/* Link & Info Columns */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-[56px]">
          {/* Contact Us Column */}
          <div className="space-y-4">
            <h3 className="font-inter font-medium text-[20px] text-white mb-4">
              Contact us
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:support@mediai.com"
                className="block font-inter text-[16px] text-white/90 hover:text-white hover:underline transition-colors duration-200"
              >
                support@mediai.com
              </a>
              <a
                href="tel:+1234567890"
                className="block font-inter text-[16px] text-white/90 hover:text-white hover:underline transition-colors duration-200"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="font-inter font-medium text-[20px] text-white mb-4">
              Quick links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href={link === "AI Diagnosis" ? "/diagnosis" : `/${link.toLowerCase()}`}
                  className="block font-inter text-[16px] text-white/90 hover:text-white hover:underline transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Follow Us Column */}
          <div className="space-y-4">
            <h3 className="font-inter font-medium text-[20px] text-white mb-4">
              Follow us
            </h3>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block font-inter text-[16px] text-white/90 hover:text-white hover:underline transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/15 mb-[40px]"></div>

        {/* Legal Row */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-[40px] gap-4">
          {/* Left Side - Logo and Legal Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <Activity size={20} className="text-white" />
              <span className="font-inter text-[16px] text-white font-semibold">
                MediAI
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              {legalLinks.map((link, index) => (
                <div key={link} className="flex items-center gap-6">
                  <a
                    href="#"
                    className="font-inter text-[14px] text-white/90 hover:text-white hover:underline transition-colors duration-200"
                  >
                    {link}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="hidden md:block w-1 h-1 bg-white/60 rounded-full"></span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Language & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            {/* Language Selector */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveLanguage("EN")}
                className={`font-inter text-[14px] transition-colors duration-200 ${
                  activeLanguage === "EN"
                    ? "text-white underline"
                    : "text-white/70 hover:text-white"
                }`}
              >
                EN
              </button>
              <span className="w-1 h-1 bg-white/60 rounded-full"></span>
              <button
                onClick={() => setActiveLanguage("ES")}
                className={`font-inter text-[14px] transition-colors duration-200 ${
                  activeLanguage === "ES"
                    ? "text-white underline"
                    : "text-white/70 hover:text-white"
                }`}
              >
                ES
              </button>
            </div>

            {/* Copyright */}
            <span className="font-inter text-[14px] text-white/90">
              © 2024 MediAI
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}