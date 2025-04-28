import React, { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import screen1 from "./assets/Screen1.png";
import screen2 from "./assets/Screen2.png";
import screen3 from "./assets/Screen3.png";
import screen4 from "./assets/Screen4.png";
import tabletFrame from "./assets/Tab.png";

const screens = [screen1, screen2, screen3, screen4];
const titles = [
  "Virtual Showroom & 3D Product Catalogs",
  "Immersive Training for Technicians",
  "Digital Twin for Factory Optimization",
  "Remote Maintenance & Support",
];
const descriptions = [
  "Let customers explore vehicle models interactively in Augmented Reality (AR), eliminating the need for physical showrooms.",
  "Use XR-powered simulations to train mechanics and assembly-line workers in a risk-free, interactive environment.",
  "Optimize assembly lines and factory layouts through XR-driven factory planning.",
  "Enable technicians to diagnose and fix automotive issues using AR-assisted work instructions.",
];

gsap.registerPlugin(ScrollTrigger);

export const AutomotiveScrollytelling = () => {
  const containerRef = useRef(null);
  const introRef = useRef(null);
  const stickyContentRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth <= 768);

  // Function to handle window resize and update device detection
  useLayoutEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    if (!isSmallDevice) {
      const ctx = gsap.context(() => {
        gsap.to(introRef.current, {
          opacity: 0,
          y: -100,
          ease: "power1.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "top+=250",
            scrub: true,
          },
        });

        gsap.to(stickyContentRef.current, {
          y: "-30vh",
          ease: "power1.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "top+=250",
            scrub: true,
          },
        });

        const sections = gsap.utils.toArray(".step");
        sections.forEach((step, index) => {
          ScrollTrigger.create({
            trigger: step,
            start: "top center+=150",
            end: "bottom center",
            onEnter: () => setActiveIndex(index),
            onEnterBack: () => setActiveIndex(index),
            scrub: 0.5,
          });
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, [isSmallDevice]);

  useLayoutEffect(() => {
    if (!isSmallDevice) {
      const ctx = gsap.context(() => {
        gsap.to(".tablet-screen", {
          opacity: (i) => (i === activeIndex ? 1 : 0),
          scale: (i) => (i === activeIndex ? 1 : 0.95),
          duration: 1.5,
          ease: "power4.out",
          overwrite: true,
        });

        gsap.to(".text-block", {
          opacity: (i) => (i === activeIndex ? 1 : 0),
          y: (i) => (i === activeIndex ? 0 : 40),
          duration: 1.5,
          delay: 0.2,
          ease: "power4.out",
          overwrite: true,
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, [activeIndex, isSmallDevice]);

  return (
    <div ref={containerRef} className="bg-black text-white w-full px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-40">
          {/* Sticky content removed for smaller screens */}
          <div
            className={`${
              isSmallDevice ? "static" : "sticky top-24 h-[90vh]"
            } w-full`}
          >
            <div
              ref={stickyContentRef}
              className="flex flex-col items-center w-full max-w-[1280px] mx-auto gap-20"
            >
              

              <div className="flex justify-center items-start gap-20 w-full">
                {/* Tablet frame - only visible on medium and larger screens (for sticky tablet frame is still visible on screens larger than 768px issue*/}
                <div
                  className={`relative w-[672px] h-[434px] ${
                    isSmallDevice ? "hidden" : "block"
                  }`}
                >
                  <img
                    src={tabletFrame}
                    alt="Tablet Frame"
                    className="w-full h-full object-cover"
                  />
                  {screens.map((screen, index) => (
                    <img
                      key={index}
                      src={screen}
                      alt={`Tablet Screen ${index}`}
                      className="tablet-screen absolute top-[11px] left-[140px] object-cover opacity-0 w-[358px] h-[270px]"
                    />
                  ))}
                </div>
                {/* Tablet frame - only visible on medium and larger screens 
                <div className="relative w-[672px] h-[434px] hidden md:block">
                  <img
                    src={tabletFrame}
                    alt="Tablet Frame"
                    className="w-full h-full object-cover"
                  />
                  {screens.map((screen, index) => (
                    <img
                      key={index}
                      src={screen}
                      alt={`Tablet Screen ${index}`}
                      className="tablet-screen absolute top-[11px] left-[140px] object-cover opacity-0 w-[358px] h-[270px]"
                    />
                  ))}
                </div> */}

                {/* Text Content (always visible) */}
                <div className="w-full md:w-[600px] text-left relative">
                  {titles.map((title, index) => (
                    <div
                      key={index}
                      className="text-block absolute top-0 left-0 opacity-0"
                    >
                      <h3 className="text-4xl font-light bg-gradient-to-r from-yellow-300 to-yellow-800 bg-clip-text text-transparent leading-tight">
                        {title}
                      </h3>
                      <p className="text-2xl font-light mt-6">
                        {descriptions[index]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Render sections for small devices */}
          {isSmallDevice
            ? titles.map((_, index) => (
                <div
                  key={index}
                  className="step h-auto w-full flex flex-col gap-8 items-center"
                >
                  <div className="relative w-full max-w-[90%]">
                    <img
                      src={tabletFrame}
                      alt="Tablet Frame"
                      className="w-full h-auto object-cover"
                    />
                    <img
                      src={screens[index]}
                      alt={`Tablet Screen ${index}`}
                      className="absolute top-[11px] left-[140px] w-[358px] h-[270px] object-cover"
                      style={{
                        width: "60%", // Adjusted for better mobile display
                        top: "10%", // Adjust to fit correctly
                        left: "20%",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className="text-left w-full max-w-[600px]">
                    <h3 className="text-4xl font-light bg-gradient-to-r from-yellow-300 to-yellow-800 bg-clip-text text-transparent leading-tight">
                      {titles[index]}
                    </h3>
                    <p className="text-2xl font-light mt-6">
                      {descriptions[index]}
                    </p>
                  </div>
                </div>
              ))
            : titles.map((_, index) => (
                <div key={index} className="step h-[100vh] w-full" />
              ))}
        </div>
      </div>
    </div>
  );
};

export default AutomotiveScrollytelling;
