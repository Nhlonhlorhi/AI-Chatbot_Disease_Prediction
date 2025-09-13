import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import CommittedToPrecisionSection from "../components/CommittedToPrecisionSection";
import JoinUsSection from "../components/JoinUsSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection />
      <CommittedToPrecisionSection />
      <JoinUsSection />
      <Footer />
    </div>
  );
}