// LabelSection.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LabelSection = () => {
  const gradientRef = useRef(null);

  useEffect(() => {
    const gradient = gradientRef.current;

    gsap.to(gradient, {
      y: "-50%",
      ease: "none",
      scrollTrigger: {
        trigger: gradient,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      {/* Sticky wrapper */}
      <div className="relative  max-w-4xl px-6 text-center">
      <div className="relative w-full h-[260vh] overflow-hidden">
  {/* GRADIENT BACKGROUND WITH BLEND */}
  <div
    ref={gradientRef}
    className="absolute inset-0 h-full mix-blend-darken pointer-events-none z-10"
    style={{
      backgroundImage:
        "linear-gradient(#000000 12%, #351073 26%, #c958de 38%, #fbb1f7 50%, #c958de 64%, #351073 76%, #000000 88%)",
    }}
  >
    {/* OVERLAP DIV TO INTENSIFY DARKNESS */}
    <div
      className="absolute w-full h-full"
      style={{
        backgroundColor: "#000",
        inset: "auto 0% 100%", // you can tweak this if necessary
      }}
    />
  </div>

  {/* TEXT CONTENT (WHITE, SHARP, ON TOP) */}
  <div className="relative text-center px-4 pt-20 max-w-5xl mx-auto">
    <h2 className="text-[22.5px] leading-[25.5px] font-normal font-['Montserrat'] text-white">
      SatoriXR draws inspiration from the Japanese term Satori (悟り), meaning enlightenment — a moment of true understanding.
      <br />
      <br />
      Our platform uses immersive 3D, XR, and Digital Twin technologies to help visualize and deeply understand complex phenomena, products, and principles.
    </h2>
  </div>
</div>




        
      </div>

      {/* Gradient moving background */}
      
    </section>
  );
};

export default LabelSection;