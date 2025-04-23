import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import lightsL from "./assets/lights-l.png";
import lightsR from "./assets/lights-r.png";
import satoriCircle from "./assets/satori-circle.svg";
import stars2 from "./assets/stars-2.svg";
import stars3 from "./assets/stars-3.svg";
import stars4 from "./assets/stars-4.svg";
import stars5 from "./assets/stars-5.svg";
import starsS from "./assets/stars-s.png";
import stars from "./assets/stars.svg";

const HeroSection = () => {
  const heroRef = useRef(null);
  const loopRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".fade-in", { opacity: 0 }, { opacity: 1, duration: 1.5 });

      const words = gsap.utils.toArray(loopRef.current.children);
      const wordHeight = loopRef.current.offsetHeight / words.length;

      // Slowing down the animation by adjusting the duration
      gsap.to(loopRef.current, {
        y: `-=${wordHeight * words.length}`,
        duration: words.length * 2, // Increased duration to make it slower
        ease: "none",
        repeat: -1, // Looping infinitely
        modifiers: {
          y: gsap.utils.unitize((y) => parseFloat(y) % (wordHeight * words.length)), // Ensuring continuous loop
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden px-4"
    >
      {/* Background Visuals */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={lightsR}
          alt="Lights Right"
          className="absolute w-1/2 max-w-[600px] top-1/2 left-1/2 translate-x-[40%] -translate-y-1/2"
        />
        <img
          src={lightsL}
          alt="Lights Left"
          className="absolute w-1/2 max-w-[550px] top-2/3 left-0 -translate-y-1/2"
        />
        <img
          src={starsS}
          alt="Stars S"
          className="absolute w-[80%] max-w-[750px] top-[65%] left-1/2 -translate-x-1/2"
        />
        <img
          src={satoriCircle}
          alt="Satori Circle"
          className="absolute w-[300px] md:w-[500px] lg:w-[620px] top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <img src={stars} alt="Stars" className="absolute w-2 top-[45%] left-[15%]" />
        <img src={stars5} alt="Stars5" className="absolute w-3 top-[75%] left-[2%]" />
        <img src={stars2} alt="Stars2" className="absolute w-4 top-[20%] right-[10%]" />
        <img src={stars3} alt="Stars3" className="absolute w-2.5 top-[15%] left-[10%]" />
        <img src={stars4} alt="Stars4" className="absolute w-4 top-[50%] right-[5%]" />
      </div>

      {/* Hero Text */}
      <div className="relative text-center text-white z-10 px-4 max-w-4xl mx-auto fade-in">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-[#FFD900] to-[#64591B] bg-clip-text text-transparent mb-4">
          SATORI XR
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal font-['Montserrat'] leading-tight mb-4">
          EMPOWERING
        </h1>

        {/* Animated Word Loop */}
        <div className="h-[48px] md:h-[72px] lg:h-[90px] overflow-hidden relative mb-6">
          <div ref={loopRef} className="flex flex-col items-center">
            {["EDUCATION", "TRAINING", "SALES"].map((word, i) => (
              <div
                key={i}
                className="h-[48px] md:h-[72px] lg:h-[90px] flex items-center justify-center text-4xl md:text-6xl lg:text-7xl font-normal font-['Montserrat'] text-[#E0CC54]"
              >
                {word}
              </div>
            ))}
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal font-['Montserrat'] leading-tight">
          WITH IMMERSIVE XR
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
