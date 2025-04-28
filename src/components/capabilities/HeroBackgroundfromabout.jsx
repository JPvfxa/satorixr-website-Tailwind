// src/components/HeroBackgroundfromabout.jsx
import React from "react";
import lightsL from "../assets/lights-l.png";
import lightsR from "../assets/lights-r.png";
//import satoriCircle from "../../components/HeroSection/assets/satori-circle.svg";
import stars2 from "../assets/stars-2.svg";
import stars3 from "../assets/stars-3.svg";
import stars4 from "../assets/stars-4.svg";
import stars5 from "../assets/stars-5.svg";
import starsS from "../assets/stars-s.png";
import stars from "../assets/stars.svg";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Right Light */}
      <img
        src={lightsR}
        alt="Lights Right"
        className="absolute w-[220px] sm:w-[300px] md:w-1/2 max-w-[600px] top-[30%] left-1/2 translate-x-[40%] -translate-y-1/2 object-contain"
      />

      {/* Left Light */}
      <img
        src={lightsL}
        alt="Lights Left"
        className="absolute w-[200px] sm:w-[280px] md:w-1/2 max-w-[550px] top-[35%] left-0 -translate-y-1/2 object-contain"
      />

      {/* Stars S */}
      <img
        src={starsS}
        alt="Stars S"
        className="absolute w-[85%] sm:w-[80%] max-w-[750px] top-[45%] left-1/2 -translate-x-1/2"
      />

      {/* Smaller Stars */}
      <img
        src={stars}
        alt="Stars"
        className="absolute w-2 top-[25%] left-[15%]"
      />
      <img
        src={stars5}
        alt="Stars5"
        className="hidden sm:block absolute w-3 top-[50%] left-[2%]"
      />
      <img
        src={stars2}
        alt="Stars2"
        className="absolute w-4 top-[10%] right-[10%]"
      />
      <img
        src={stars3}
        alt="Stars3"
        className="hidden sm:block absolute w-2.5 top-[12%] left-[10%]"
      />
      <img
        src={stars4}
        alt="Stars4"
        className="hidden sm:block absolute w-4 top-[30%] right-[5%]"
      />
    </div>
  );
};

export default HeroBackground;

