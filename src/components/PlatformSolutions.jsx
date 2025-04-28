import React from "react";
import car from "./assets/car.png";
import salesxtreme from "./assets/sales-xtreme.png";

const PlatformSOlutions = () => {
  return (
    <section className="w-full h-[734px] mx-auto relative overflow-hidden z-[9]">
      <div className="relative max-w-[1244px] h-[613px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Glow background */}
        <div className="absolute w-[1019px] h-[559px] top-[41px] left-1/2 -translate-x-1/2 bg-white rounded-[509px/280px] blur-[150px] opacity-30" />

        {/* Car Image */}
        <img
          src={car}
          alt="Car"
          className="absolute w-[1166px] h-[492px] top-[120px] left-[60%] -translate-x-1/2 object-contain z-[9]"
        />

        {/* Left Card */}
        <div className="absolute top-0 left-0 flex flex-col w-full max-w-[483px] h-auto gap-4 p-[43px_31px] rounded-2xl backdrop-blur-[6px] bg-[radial-gradient(50%_50%_at_75%_50%,rgba(95,95,95,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.01)_100%)] bg-variable-collection-black">
          <img
            src={salesxtreme}
            alt="Sales Xtreme"
            className="w-[200px] h-[80px] object-contain mb-4"
          />

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-medium text-variable-collection-white font-['Montserrat'] leading-normal">
              Revolutionizing Sales with XR
            </h2>
            <p className="text-[17px] font-light text-variable-collection-white font-['Montserrat'] leading-normal">
              Transform traditional sales processes with interactive,
              data-driven XR experiences.
            </p>
          </div>

          <button className="all-[unset] inline-flex items-center justify-center mt-4 px-7 py-3 rounded-full border border-variable-collection-satori-gold">
            <span className="text-[13px] font-medium text-variable-collection-satori-gold font-['Montserrat'] leading-normal text-center">
              Get Started
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default PlatformSOlutions;