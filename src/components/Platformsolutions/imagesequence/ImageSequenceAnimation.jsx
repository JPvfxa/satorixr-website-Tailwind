// ImageSequenceCanvas.js
import React, { useRef, useEffect } from "react";

const ImageSequenceCanvas = ({ imageCount, folderPath }) => {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const frameIndexRef = useRef(0);

  // Preload all images
  useEffect(() => {
    for (let i = 0; i < imageCount; i++) {
      const img = new Image();
      img.src = `${folderPath}car_${(10001 + i).toString().padStart(5, "0")}.png`;
      imagesRef.current.push(img);
    }
  }, [imageCount, folderPath]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.75;
      render();
    };

    const render = () => {
      const img = imagesRef.current[frameIndexRef.current];
      if (!img) return;

      context.clearRect(0, 0, canvas.width, canvas.height);
      const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width * scale / 2);
      const y = (canvas.height / 2) - (img.height * scale / 2);
      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    const updateFrame = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min(scrollY / totalHeight, 1);
      const frameIndex = Math.floor(scrollPercent * (imageCount - 1));
      frameIndexRef.current = frameIndex;
      render();
    };

    window.addEventListener("scroll", updateFrame);
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener("scroll", updateFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [imageCount]);

  return <canvas ref={canvasRef} className="image-sequence-canvas" style={{ width: "100%", display: "block" }} />;
};

export default ImageSequenceCanvas;
