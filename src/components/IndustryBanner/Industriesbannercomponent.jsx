// src/components/AutomotiveIndustrySection.jsx
//import React from "react";
//import maskGroup from "./automotive.png";

// src/components/AutomotiveIndustrySection.jsx
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import maskGroup from "./automotive.png";

gsap.registerPlugin(ScrollTrigger);

const IndustryBanner = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", // when section's top hits 80% of viewport
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black text-white overflow-hidden px-6 py-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center relative">
        {/* Title */}
        <h2 className="text-3xl md:text-[52.8px] leading-tight md:leading-[61px] font-light text-center bg-gradient-to-r from-[#FFD900] to-[#64591B] bg-clip-text text-transparent whitespace-nowrap mb-12">
          Automotive Industry
        </h2>

        {/* Center Text and Image */}
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-xl md:text-[32px] font-normal bg-gradient-to-r from-[#FFD900] to-[#64591B] bg-clip-text text-transparent max-w-[320px] md:max-w-[600px] leading-tight">
            Transforming Automotive Sales, Training &amp; Manufacturing with XR
          </p>

          <p className="text-sm md:text-base font-light text-white max-w-[300px] md:max-w-[500px] leading-relaxed">
            SatoriXR revolutionizes automotive sales, manufacturing, training,
            and support through 3D, AR, and VR solutions that streamline
            operations and enhance customer experiences.
          </p>
        </div>

        {/* Image */}
        <div className="relative mt-16 w-full flex justify-center">
          <img
            src={maskGroup}
            alt="Automotive Mask Group"
            className="w-full max-w-[970px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default IndustryBanner;
