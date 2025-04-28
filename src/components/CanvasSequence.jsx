import React from "react";
import { useEffect, useRef } from "react";

const CanvasSequence = ({ canvasRef, frameCount = 101, path, filePrefix = "car_", fileExtension = "png" }) => {
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrame = (index) =>
    `${path}/${filePrefix}${(10001 + index).toString().padStart(5, "0")}.${fileExtension}`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    // Initial canvas styling
    canvas.style.opacity = "0";
    canvas.style.filter = "blur(10px)";
    canvas.width = 1920;
    canvas.height = 1080;

    const img = new Image();
    img.src = currentFrame(0);
    imagesRef.current[0] = img;

    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      imagesRef.current[i] = img;
    }
  }, [canvasRef, frameCount, path, filePrefix, fileExtension]);

  useEffect(() => {
    const updateImage = (index) => {
      const context = contextRef.current;
      const image = imagesRef.current[index];
      if (image && context) {
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        context.drawImage(image, 0, 0);
      }
    };

    let frame = 0;
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const maxScrollTop = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      frame = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
      requestAnimationFrame(() => updateImage(frame));
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [frameCount]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />;
};

export default CanvasSequence;
