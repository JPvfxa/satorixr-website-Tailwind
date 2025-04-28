import React from "react";

import HeroSection from "../components/HeroSection/HeroSection";
import LabelSection from "../components/aboutpagecomponents/LabelSection"
import { Team } from "../components/aboutpagecomponents/team";
import { RequestADemo } from "../components/RequestADemo";


import image28 from "../components/assets/about-banner.png";

const AboutPage = () => {
  return (
    <div className="bg-black text-white w-full">
      <HeroSection />
      <LabelSection />
      <section className="w-full flex items-center justify-center px-4 py-8 bg-variable-collection-black">
      <div className="relative w-full max-w-[896px] h-[418px]">
        <img
          src={image28}
          alt="Immersive Showcase"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>
    </section>
      <Team />
      
    

    

    <RequestADemo />


  

     
    </div>
  );
};

export default AboutPage;


