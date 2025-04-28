import React from "react";
import maheshRamamurthy1 from "../assets/mahesh-ramamurthy.png";
import JayanthPurushottam from "../assets/jayanth-purushottam.png";
import AnuRamamurthy from "../assets/anu-ramamurthy.png";
export const Team = () => {
  return (
    <section className="w-full px-4 py-10 flex flex-col items-center bg-transparent">
      {/* Header */}
      <div className="text-center max-w-3xl mb-10">
        <h2 className="text-[32px] font-normal text-transparent bg-clip-text bg-gradient-to-r from-[rgba(255,217,0,1)] to-[rgba(100,89,27,1)] font-nav-bar">
          Our Leadership
        </h2>
        <p className="text-white text-sm opacity-90 font-p3">
          With decades of association with industry, product design,
          manufacturing know-how, proven experience in cross cultural project
          execution and deployment, an appreciation of change management and
          adoption of software in manufacturing systems from shop-floor to top
          floor, we proudly present our leadership team
        </p>
      </div>

      {/* Mahesh Card */}
      <div className="relative w-full max-w-[1260px] h-auto lg:h-[522px] mx-auto">
        {/* Background glow */}
        <div className="absolute top-[148px] w-full h-[365px] rounded-[10.5px] backdrop-blur-[6px] backdrop-brightness-100 bg-[radial-gradient(50%_50%_at_60%_25%,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%)]  z-0" />

        {/* Content */}
        <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch w-full h-full z-10 px-0 lg:px-[53px] gap-6">
          {/* Image */}
          <img
            src={maheshRamamurthy1}
            alt="Mahesh Ramamurthy"
            className="w-full lg:w-[529px] h-auto lg:h-full object-cover rounded-lg"
          />

          {/* Text Panel */}
          <div className="flex flex-col justify-center gap-[18px] px-4 lg:pt-[5%] w-full lg:w-[400px] text-white">
            <h3 className="text-3xl font-normal bg-gradient-to-r from-[#FFD900] to-[#64591B] bg-clip-text text-transparent font-nav-bar">
              Mahesh Ramamurthy
            </h3>

            <div className="text-[22.5px] text-variable-collection-white opacity-60 font-nav-bar">
              Chief Executive Officer
            </div>

            <p className="text-[16.9px] text-white opacity-90 font-p3 leading-normal">
              Serial tech entrepreneur with 26 years in product design and
              technology in automotive industry.
            </p>
          </div>
        </div>
      </div>

      {/* Jayanth Card */}
      <div className="relative w-full max-w-[1260px] h-auto lg:h-[522px] mx-auto">
        {/* Background glow */}
        <div className="absolute top-[148px] w-full h-[365px] rounded-[10.5px] backdrop-blur-[6px] backdrop-brightness-100 bg-[radial-gradient(50%_50%_at_60%_25%,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%)]  z-0" />

        {/* Content */}
        <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch w-full h-full z-10 px-0 lg:px-[53px] gap-6">
          

          {/* Text Panel */}
          <div className="flex flex-col justify-center gap-[18px] px-4 lg:pt-[5%] w-full lg:w-[400px] text-white">
            <h3 className="text-3xl font-normal bg-gradient-to-r from-[#FFD900] to-[#64591B] bg-clip-text text-transparent font-nav-bar">
            Jayanth Purushottam
            </h3>

            <div className="text-[22.5px] text-variable-collection-white opacity-60 font-nav-bar">
            Chief Technology Officer
            </div>

            <p className="text-[16.9px] text-white opacity-90 font-p3 leading-normal">
            26 years in software product ​development and technology
            </p>

            
          </div>
          {/* Image */}
          <img
            src={JayanthPurushottam}
            alt="Jayanth Purushottam"
            className="w-full lg:w-[529px] h-auto lg:h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Anu Card */}
      <div className="relative w-full max-w-[1260px] h-auto lg:h-[522px] mx-auto">
        {/* Background glow */}
        <div className="absolute top-[148px] w-full h-[365px] rounded-[10.5px] backdrop-blur-[6px] backdrop-brightness-100 bg-[radial-gradient(50%_50%_at_60%_25%,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%)]  z-0" />

        {/* Content */}
        <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch w-full h-full z-10 px-0 lg:px-[53px] gap-6">
          {/* Image */}
          <img
            src={AnuRamamurthy}
            alt="Anu Ramamurthy"
            className="w-full lg:w-[529px] h-auto lg:h-full object-cover rounded-lg"
          />

          {/* Text Panel */}
          <div className="flex flex-col justify-center gap-[18px] px-4 lg:pt-[5%] w-full lg:w-[400px] text-white">
            <h3 className="text-3xl font-normal bg-gradient-to-r from-[#FFD900] to-[#64591B] bg-clip-text text-transparent font-nav-bar">
            Anu Ramamurthy
            </h3>

            <div className="text-[22.5px] text-variable-collection-white opacity-60 font-nav-bar">
            Marketing Director
            </div>

            <p className="text-[16.9px] text-white opacity-90 font-p3 leading-normal">
            17 years in marketing communication.
            </p>
          </div>
        </div>
      </div>

      
    </section>
  );
};
