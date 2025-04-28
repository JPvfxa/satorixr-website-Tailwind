import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Textcard } from "/src/components/Textcard/textcard";
import myImage from "./sales-xtreme.png"; // ✅ FIXED
import "./style.css";

const totalFrames = 101;
const imagePath = (index) =>
  new URL(`./car_frames/car_${String(index).padStart(5, "0")}.png`, import.meta.url).href;

export const ScrollImageSequence = () => {
  const containerRef = useRef();
  const [frame, setFrame] = useState(1);

  const preloadImages = () => {
    for (let i = 1; i <= 5; i++) {
      const img = new Image();
      img.src = imagePath(i);
    }
  };

  useEffect(() => {
    preloadImages();

    const handleScroll = () => {
      const element = containerRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const scrollTop = window.scrollY + rect.top;
      const scrollPos = window.scrollY - scrollTop;
      const scrollFraction = Math.min(1, Math.max(0, scrollPos / window.innerHeight));
      const index = Math.min(totalFrames, Math.ceil(scrollFraction * totalFrames));

      setFrame(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-image-sequence-wrapper" ref={containerRef}>
      <div className="scroll-image-sequence-section">
        <motion.h2
          className="scroll-image-sequence-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Platform Solutions
        </motion.h2>

        <img
          className="scroll-image-sequence-canvas"
          src={imagePath(frame)}
          alt={`Frame ${frame}`}
          loading="lazy"
        />

        <motion.div
          className="scroll-image-sequence-ellipse"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        />

        <motion.div
          className="scroll-image-sequence-textcard"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Textcard
            imageSrc={myImage}
            altText="Sales Xtreme"
            text="Revolutionizing Product Sales with Immersive XR Technologies"
            buttonText="Explore"
            onClick={() => console.log("Button clicked!")}
          />
        </motion.div>
      </div>
    </div>
  );
};
