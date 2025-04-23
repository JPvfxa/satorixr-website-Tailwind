
import React from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import HeroBackground from "./HeroBackground";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden flex items-center justify-center px-4">
      <HeroBackground />
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl gap-6">
        <h2 className="text-white text-[18.1px] font-semibold font-[Montserrat]">Satori XR</h2>
        <h1 className="text-transparent text-[52.8px] font-light leading-[61px] bg-clip-text bg-gradient-to-r from-[rgba(255,217,0,1)] to-[rgba(100,89,27,1)] font-[Montserrat]">
          unlock the power of XR for Sales, Engagement & Industry 4.0
        </h1>
        <p className="text-[#ffffff99] text-[15px] font-normal leading-[23.1px] max-w-xl font-[Montserrat]">
          Immersive solutions for marketing, sales, training, and industrial optimization
        </p>
        <div className="flex gap-4 mt-4">
          <PrimaryButton text="Try Demo" />
          <SecondaryButton text="Try It Virtually" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
