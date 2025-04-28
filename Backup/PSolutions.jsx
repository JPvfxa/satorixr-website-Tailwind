
import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PlatformCard } from "./textcard";
import CanvasSequence from "./CanvasSequence";
import salesXtreme from "./assets/sales-xtreme.png";

gsap.registerPlugin(ScrollTrigger);

export const PSolutions = () => {

    const titleRef = useRef(null);

  // Animate Title (already added in Step 1)
    useEffect(() => {
        gsap.fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: .5,
            delay: 0, // slight delay
            ease: "power2.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              toggleActions: "play reverse play reverse", // allows reverse on scroll up
            },
          }
        );
      }, []);

      // Animate Car Canvas + Glow
  useEffect(() => {
    gsap.fromTo(
      canvasRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: canvasRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      glowRef.current,
      { opacity: 0, filter: "blur(0px)" },
      {
        opacity: 0.3,
        filter: "blur(100px)",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: glowRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
      

  return (
    <section
      aria-label="Platform Solutions"
      className="relative w-full min-h-screen py-16 bg-variable-collection-black overflow-hidden"
    >
      {/* Title */}
      <h2
        ref={titleRef}
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD900] to-[#64591B] text-3xl sm:text-4xl text-center font-[Montserrat] leading-snug z-20">
        Platform Solutions
        </h2>

      {/* Spacer below title */}
      <div className="mt-20"></div>

       {/* Background Glow */}
       <div
        ref={glowRef}
        className="absolute top-[30%] left-[30%] w-[933px] h-[400px] bg-white rounded-full blur-[100px] opacity-30 z-0"
      />
      
       {/* Car Canvas */}
       <CanvasSequence ref={canvasRef} />

      {/* Platform Text Box */}
      <div className="absolute top-[20%] right-[55%]">
        <PlatformCard
          logo={salesXtreme}
          description="Revolutionizing Product Sales with Immersive XR Technologies"
        />
      </div>
    </section>
  );
};
