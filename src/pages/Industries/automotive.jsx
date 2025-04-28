import React from "react";
import AutomotiveScrollEffect from "../../components/AutomotiveScrollXRCanvas";


export const Automotive = () => {
  return (
    <section className="w-full bg-black text-white px-6 py-16 flex flex-col items-center gap-16">
      {/* Header Section */}
      <div className="text-center">
        <p className="text-xs text-[#e0cb52] font-normal">INDUSTRY SOLUTIONS</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#e0cb52] mt-1">Automotive</h2>
      </div>

      {/* Intro Section */}
      <div className="max-w-4xl text-center flex flex-col gap-4">
        <p className="text-2xl md:text-3xl font-normal bg-gradient-to-r from-[#ffd900] to-[#64591b] bg-clip-text text-transparent">
          Transforming Automotive Sales, Training &amp; Manufacturing with XR
        </p>
        <p className="text-base font-light">
          SatoriXR revolutionizes automotive sales, manufacturing, training,
          and support through 3D, AR, and VR solutions that streamline
          operations and enhance customer experiences.
        </p>
      </div>

      <AutomotiveScrollEffect />
    </section>
  );
};
