import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";

const AboutPage = () => {
  return (
    <div className="bg-black text-white w-full">
      <HeroSection />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-[#E0CC54]">
          About Satori XR
        </h2>
        <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-white">
          At Satori XR, we empower industries with immersive training, virtual simulations,
          and real-time collaboration through cutting-edge XR technologies. Our solutions
          are designed to transform capabilities and enhance operational excellence.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
