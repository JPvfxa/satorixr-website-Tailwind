import React, { useRef, useEffect, useState } from "react";
import HeroBackground from "../components/HeroBackground";
import maskGroup from "../components/capabilities/mask-group.png";
//import { Automotive } from "../pages/Industries/automotive";
//import { PlatformSolutions } from "../components/PlatformSolutions";
import CaseStudySection from "../components/CaseStudyTab/CaseStudySection";
import automotiveManufacturingCs from "../components/CaseStudyTab/Automotive & Manufacturing-CS.png";

const Capabilities = () => {
  const sectionRef = useRef(null);
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    const updateHeight = () => {
      if (sectionRef.current) {
        setHeight(`${sectionRef.current.scrollHeight}px`);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Tab Data for CaseStudySection
  const tabsData = [
    {
      title: "Automotive & Manufacturing",
      description:
        "Let buyers visualize vehicles, machinery, and components remotely before making a purchase.",
      image: automotiveManufacturingCs,
    },
    {
      title: "E-Commerce & Retail",
      description:
        "Transform your retail business with virtual product experiences.",
      image: automotiveManufacturingCs,
    },
    {
      title: "B2B Equipment Sales",
      description:
        "Enhance the sales process for industrial equipment and machinery.",
      image: automotiveManufacturingCs,
    },
    {
      title: "Trade Shows & Events",
      description:
        "Showcase products and services interactively at trade shows and events.",
      image: automotiveManufacturingCs,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex items-center justify-center bg-black overflow-hidden px-4 pt-[40px] md:pt-[80px]"
    >
      {/* Dynamically stretching background */}
      <div className="absolute inset-0 z-0" style={{ height }}>
        <HeroBackground />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full max-w-[970px] flex flex-col items-center justify-start pb-20">
        <div className="relative w-full flex flex-col items-center">
          {/* Title and description */}
          <div className="flex flex-col items-center gap-6 px-4 z-10">
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52.8px] leading-snug text-center font-light bg-gradient-to-r from-[#FFD900] to-[#64591B] bg-clip-text text-transparent font-['Montserrat']">
              Platform Capabilities
            </h1>
            <p className="text-sm sm:text-base md:text-[15px] leading-relaxed text-[#ffffff99] text-center font-['Montserrat'] max-w-[500px]">
              SatoriXR leverages cutting-edge Augmented Reality, Virtual
              Reality, Web, and Digital Twin technologies to drive immersive
              sales, training, and industrial transformation.
            </p>
          </div>

          {/* Mask Group Image */}
          <img
            className="mt-2 w-full h-auto object-contain max-w-[970px]"
            alt="Mask group"
            src={maskGroup}
          />
          <CaseStudySection title="New Amazing Case Studies" tabs={tabsData} />
        </div>
      </div>

      {/* Platform Solutions Component *
      <PlatformSolutions /> {/* Here is where you add the new component */}
    </section>
  );
};

export default Capabilities;
