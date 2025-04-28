import React from "react";
import dLogo1 from "./assets/3d-logo.png";
import dMobile1 from "./assets/3d-mobile.png";
import dVr1 from "./assets/3d-vr.png";
import bg1 from "./assets/bg.png";

const WhySatorixr = () => {
  return (
    <section className="w-full bg-black text-white px-6 py-20 flex flex-col items-center gap-6 relative overflow-hidden">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-normal bg-gradient-to-r from-[#ffd900] to-[#64591b] bg-clip-text text-transparent text-center">
        Why SatoriXR?
      </h2>

      {/* Graphics + Content */}
      <div className="relative flex flex-col-reverse lg:flex-row items-center lg:items-center justify-center max-w-7xl w-full gap-12 px-4">
        {/* Background + Icons */}
        <div className="relative w-full max-w-[645px] h-auto aspect-[645/388]">
          <img src={bg1} alt="Background Grid" className="absolute inset-0 w-full h-full object-cover" />
          <img src={dMobile1} alt="Mobile Icon" className="absolute w-[106px] h-[186px] top-[88px] left-[115px]" />
          <img src={dLogo1} alt="Logo Icon" className="absolute w-[157px] h-[156px] top-[127px] left-[286px]" />
          <img src={dVr1} alt="VR Icon" className="absolute w-[200px] h-[209px] top-[125px] left-[464px]" />
        </div>

        {/* Content Block */}
        <div className="max-w-md text-left flex flex-col gap-6">
          <h3 className="text-2xl md:text-4xl font-normal text-white">Multi-Platform Compatibility</h3>
          <p className="text-base md:text-xl font-light text-white">
            Works across AR, VR, Web, and Digital Twin environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySatorixr;