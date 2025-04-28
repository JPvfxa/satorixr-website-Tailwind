
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frameCount = 101;
const imagePath = (index) =>
  `./assets/car_frames/car_${(10001 + index).toString().padStart(5, "0")}.png`;

const CanvasSequence = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const frameRef = useRef(0);
  const images = useRef([]);
  const animationFrame = useRef(null);

  // Preload frames
  useEffect(() => {
    const loadImages = () => {
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = imagePath(i);
        images.current.push(img);
      }
    };
    loadImages();
  }, []);

  // Animate sequence on scroll
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 1920;
    canvas.height = 1080;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    const render = () => {
      const img = images.current[frameRef.current];
      if (img && img.complete) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
      animationFrame.current = requestAnimationFrame(render);
    };

    render();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: canvas,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    timeline.to(frameRef, {
      current: frameCount - 1,
      snap: "current",
      ease: "none",
      onUpdate: () => {
        frameRef.current = Math.round(frameRef.current);
      },
    });

    return () => cancelAnimationFrame(animationFrame.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-auto absolute bottom-0 right-0 z-10 pointer-events-none"
    />
  );
};

export default CanvasSequence;
