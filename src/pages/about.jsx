import React from "react";
import anuRamamurthy from "../components/assets/anu-ramamurthy.png";
import jayanthPurushottam from "../components/assets/jayanth-purushottam.png";
import maheshRamamurthy from "../components/assets/mahesh-ramamurthy.png";
import LeadershipCard from "../components/aboutpagecomponents/LeadershipCard"; // Import the LeadershipCard component
import HeroSection from "../components/HeroSection/HeroSection";
import LabelSection from "../components/aboutpagecomponents/LabelSection"


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

    <section>
    <div className="flex flex-col w-full items-center gap-[18px] py-8 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
      {/* Section Title */}
      <div className="flex flex-col items-center gap-[10.5px]">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gradient font-normal text-center tracking-[0] leading-[normal]">
          Our Leadership
        </h2>
        <p className="text-white text-base sm:text-lg md:text-xl px-6 sm:px-12 lg:px-24 text-center font-light">
          With decades of association with industry, product design, manufacturing know-how, proven experience in cross-cultural project execution and deployment, an appreciation of change management and adoption of software in manufacturing systems from shop-floor to top-floor, we proudly present our leadership team.
        </p>
      </div>

      {/* Leadership Cards */}
      <div className="flex flex-col gap-[18px] w-full">
        <LeadershipCard
          image={maheshRamamurthy}
          name="Mahesh Ramamurthy"
          title="Chief Executive Officer"
          description="Serial tech entrepreneur with 26 years in product design and technology in the automotive industry."
          reverseLayout={false}
        />
        <LeadershipCard
          image={jayanthPurushottam}
          name="Jayanth Purushottam"
          title="Chief Technology Officer"
          description="26 years in software product development and technology."
          reverseLayout={true}
        />
        <LeadershipCard
          image={anuRamamurthy}
          name="Anu Ramamurthy"
          title="Marketing Director"
          description="17 years in marketing communication."
          reverseLayout={false}
        />
      </div>
    </div>
    </section>


  

     
    </div>
  );
};

export default AboutPage;



