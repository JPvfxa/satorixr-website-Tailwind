import React from "react";
import lightsL from "./assets/lights-l.png";
import lightsR from "./assets/lights-r.png";
import stars from "./assets/stars.svg";
import stars2 from "./assets/stars-2.svg";
import stars3 from "./assets/stars-3.svg";
import stars4 from "./assets/stars-4.svg";
import stars5 from "./assets/stars-5.svg";
import starsS from "./assets/stars-s.png";

const HeroBackground = () => {
  return (
    
    <div className="absolute w-full h-full top-0 left-0 overflow-hidden pointer-events-none">
      {/* Glow Ellipse */}
      <div className="absolute w-[80%] max-w-[1267px] h-[70%] max-h-[925px] top-0 left-1/2 -translate-x-1/2 rounded-full blur-[142px] bg-[radial-gradient(50%_60%_at_50%_5%,rgba(226,226,226,0.7)_0%,rgba(0,0,0,0.4)_100%)]" />

      {/* Lights */}
      <img
        src={lightsR}
        className="absolute w-[35vw] max-w-[593px] h-auto top-[30%] right-0 md:top-[0%] sm:top-[50%]"
        alt="Right Light"
      />
      <img
        src={lightsL}
        className="absolute w-[30vw] max-w-[559px] h-auto bottom-0 left-0"
        alt="Left Light"
      />

      {/* Background Stars */}
      <img
        src={starsS}
        className="absolute w-full h-auto max-h-[532px] bottom-0 left-0"
        alt="StarsS"
      />

      {/* Foreground Stars */}
      <div className="absolute w-full max-w-[1136px] h-[473px] bottom-[5%] left-1/2 -translate-x-1/2">
        <img
          src={stars}
          className="absolute w-2 h-2 top-[43%] left-[12%]"
          alt="Star"
        />
        <img
          src={stars2}
          className="absolute w-[17px] h-[17px] top-[10%] left-[72%]"
          alt="Star2"
        />
        <img
          src={stars3}
          className="absolute w-2.5 h-2.5 top-0 left-0"
          alt="Star3"
        />
        <img
          src={stars4}
          className="absolute w-[17px] h-[17px] top-[30%] left-[98%]"
          alt="Star4"
        />
        <img
          src={stars5}
          className="absolute w-2 h-2 bottom-0 right-[10%]"
          alt="Star5"
        />
      </div>
      {/* Fade effect at bottom to blend with next section */}
<div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />

    </div>
  );
};

export default HeroBackground;
