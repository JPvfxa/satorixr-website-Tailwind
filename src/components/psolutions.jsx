import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PlatformCard } from "./textcard";
import CanvasSequence from "./CanvasSequence";
import salesXtreme from "./assets/sales-xtreme.png";

gsap.registerPlugin(ScrollTrigger);

export const PSolutions = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const glowRef = useRef(null);
  const titleRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top+=0 top", // Adjust this to account for sticky header
          end: "+=1800",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1. Car sequence fade in
      tl.fromTo(
        canvasRef.current,
        { opacity: 0, filter: "blur(20px)", y: 100 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1.2,
          ease: "power2.out",
        }
      );

      // 2. Glow background
      tl.fromTo(
        glowRef.current,
        { opacity: 0, filter: "blur(0px)" },
        {
          opacity: 0.3,
          filter: "blur(100px)",
          duration: 1,
          ease: "power2.out",
        }
      );

      // 3. Title fade in
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        }
      );

      // 4. Card slide in from left
      tl.fromTo(
        cardRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Platform Solutions"
      className="relative w-full min-h-screen bg-variable-collection-black overflow-hidden py-24"
    >
      {/* Glow Background */}
      <div
        ref={glowRef}
        className="absolute top-[30%] left-[35%] w-[933px] h-[400px] bg-white rounded-full blur-[100px] opacity-30 z-0"
      />

      {/* Title */}
      <h2
        ref={titleRef}
        className="absolute top-10 left-1/2 transform -translate-x-1/2 text-transparent bg-clip-text bg-gradient-to-r from-[#FFD900] to-[#64591B] text-4xl font-[Montserrat] text-center z-20"
      >
        Platform Solutions
      </h2>

      {/* Car Sequence Canvas */}
      <CanvasSequence canvasRef={canvasRef} path="/car_frames"  />

      {/* Text Card */}
      <div
        ref={cardRef}
        className="absolute top-[25%] left-[10%] z-30"
      >
        <PlatformCard
          logo={salesXtreme}
          description="Revolutionizing Product Sales with Immersive XR Technologies"
        />
      </div>
    </section>
  );
};
