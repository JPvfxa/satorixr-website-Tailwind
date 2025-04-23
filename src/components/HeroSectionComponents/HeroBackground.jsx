
import React from "react";
import lightsL from "./assets/lights-l.png";
import lightsR from "./assets/lights-r.png";
import stars from "./assets/stars.svg";
import stars2 from "./assets/stars-2.svg";
import stars3 from "./assets/stars-3.svg";
import stars4 from "./assets/stars-4.svg";
import stars5 from "./assets/stars-5.svg";
import starsS from "./assets/stars-s.png";
import image from "./assets/image.svg";

const HeroBackground = () => {
  return (
    <div className="absolute w-full h-full top-0 left-0 overflow-hidden pointer-events-none">
      <div className="absolute w-[1267px] h-[925px] top-0 left-1/2 -translate-x-1/2 rounded-full blur-[142px] bg-[radial-gradient(50%_50%_at_36%_49%,rgba(226,226,226,0.4)_0%,rgba(0,0,0,0.4)_100%)]" />
      <img src={lightsR} className="absolute w-[593px] h-[583px] top-[670px] right-0" alt="Right Light" />
      <img src={lightsL} className="absolute w-[559px] h-[421px] top-[849px] left-0" alt="Left Light" />
      <img src={starsS} className="absolute w-full h-[532px] top-[692px] left-0" alt="StarsS" />
      <div className="absolute w-[1136px] h-[473px] top-[773px] left-[188px]">
        <img src={stars} className="absolute w-2 h-2 top-[202px] left-[140px]" alt="Star" />
        <img src={image} className="absolute w-[13px] h-[13px] top-[387px] left-[7px]" alt="Image Star" />
        <img src={stars2} className="absolute w-[17px] h-[17px] top-5 left-[811px]" alt="Star2" />
        <img src={stars3} className="absolute w-2.5 h-2.5 top-0 left-0" alt="Star3" />
        <img src={stars4} className="absolute w-[17px] h-[17px] top-[136px] left-[1119px]" alt="Star4" />
        <img src={stars5} className="absolute w-2 h-2 top-[465px] left-[927px]" alt="Star5" />
      </div>
    </div>
  );
};

export default HeroBackground;
