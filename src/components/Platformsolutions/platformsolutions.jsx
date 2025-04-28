import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageSequenceAnimation from "./imagesequence/ImageSequenceAnimation";

gsap.registerPlugin(ScrollTrigger);

const PlatformSolutions = ({ imageCount, folderPath }) => {
  const headingRef = useRef(null);
  const carRef = useRef(null);
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        });

      gsap.fromTo(carRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: carRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        });

      gsap.fromTo(cardRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full py-16 bg-[#0F172A] text-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Text Card */}
        <div ref={cardRef} className="max-w-lg bg-[#1E293B] p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Your Title</h3>
          <p className="text-base text-gray-300">
            Description of the platform and its capabilities.
          </p>
        </div>

        {/* Car Animation */}
        <div ref={carRef} className="w-full max-w-xl">
          <ImageSequenceAnimation imageCount={imageCount} folderPath={folderPath} />
        </div>
      </div>

      {/* Heading */}
      <h2
        ref={headingRef}
        className="absolute top-8 left-1/2 transform -translate-x-1/2 text-3xl lg:text-5xl font-bold text-center"
      >
        Platform Capabilities
      </h2>
    </section>
  );
};

export default PlatformSolutions;
