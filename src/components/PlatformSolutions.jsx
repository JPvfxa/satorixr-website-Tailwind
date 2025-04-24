import React from "react";
import { TertiaryButton } from "./TertiaryButton/tertiarybutton";
import car from "./assets/car.png";
import salesXtreme from "./assets/sales-xtreme.png";

const PlatformSolutions = () => {
  return (
    <section className="w-full px-4 py-12 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left Panel Card */}
        <div className="flex flex-col gap-4 p-8 rounded-2xl backdrop-blur-md bg-[radial-gradient(50%_50%_at_75%_50%,rgba(95,95,95,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.01)_100%)] max-w-md text-white">
          <img
            src={salesXtreme}
            alt="Sales Xtreme"
            className="w-48 h-auto object-contain"
          />
          <p className="text-2xl font-light leading-snug">
            Revolutionizing Product Sales with Immersive XR Technologies
          </p>
          <TertiaryButton className="w-32 mt-2" />
        </div>

        {/* Right Image (Car) */}
        <div className="w-full lg:w-2/3 flex justify-center">
          <img src={car} alt="Car" className="w-full max-w-4xl object-contain" />
        </div>
      </div>

      {/* Background Blur Glow */}
      <div className="absolute w-[933px] h-[512px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white opacity-30 blur-[150px] rounded-full z-0" />

      {/* Heading */}
      <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FFD900] to-[#64591B] text-3xl sm:text-4xl font-[Montserrat] leading-snug absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        Platform Solutions
      </h2>
    </section>
  );
};

export default PlatformSolutions;
