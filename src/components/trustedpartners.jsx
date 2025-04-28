import React from "react";
import ashokLeyland from "./assets/ashok-leyland.png";
import benz from "./assets/benz.png";
import grameen from "./assets/grameen.png";
import murugappa from "./assets/murugappa.png";
import sankar from "./assets/sankar.png";
import vibromech from "./assets/vibromech.png";

const TrustedPartners = () => {
  return (
    <section className="bg-black py-12 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-medium text-transparent bg-gradient-to-r from-yellow-400 to-yellow-700 bg-clip-text text-center">
          Trusted Partners
        </h2>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-10">
          
          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 border-y border-[#1f1f1f] py-6">
            <img src={sankar} alt="Sankar" className="w-36 h-auto mx-auto" />
            <img src={ashokLeyland} alt="Ashok Leyland" className="w-36 h-auto mx-auto" />
            <img src={grameen} alt="Grameen" className="w-36 h-auto mx-auto" />
            <img src={benz} alt="Benz" className="w-36 h-auto mx-auto" />
            <img src={murugappa} alt="Murugappa" className="w-36 h-auto mx-auto" />
            <img src={vibromech} alt="Vibromech" className="w-36 h-auto mx-auto" />
          </div>

          {/* Testimonial */}
          <div className="text-center max-w-md text-white">
            <p className="text-lg font-light mb-4">
              “ As a demanding client with precision expectations, I am pleased that they rise to the challenge each time we challenge them. If you're looking for a professional, dedicated, digital development partner, I highly recommend SatoriXR. ”
            </p>
            <p className="text-[#e0cb52] text-xl font-light">Jaisankar Unnithan</p>
            <p className="text-sm text-white mt-1">Sankar Sealings</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;