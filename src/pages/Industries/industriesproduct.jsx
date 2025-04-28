import React from "react";
import dicon1 from "./3dicon.png";

export const IndustriesProduct = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 px-4 py-12 lg:gap-[29px] lg:px-[80px] lg:py-[89px] bg-black">
      {/* Card 1 */}
      <div className="flex flex-col items-center gap-6 px-6 py-8 rounded-2xl w-full max-w-[360px] backdrop-blur-[6px] backdrop-brightness-[100%] bg-[radial-gradient(50%_50%_at_89%_50%,rgba(255,217,0,0.12)_0%,rgba(255,255,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.01)_100%)]">
        <img src={dicon1} alt="3D Icon" className="w-[194px] h-48 object-cover" />
        <div className="flex flex-col items-start gap-2">
          <h3 className="text-white text-2xl font-normal leading-[28px] font-['Montserrat']">
            "Your Products, Anytime, Anywhere."
          </h3>
          <p className="text-white text-base font-light leading-normal font-['Montserrat']">
            Forget brochures. Forget costly trade show setups. With SalesXtreme, your customers can explore
            products in full 3D, rotate, interact, and even see them in their own space using Augmented Reality.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center gap-6 px-6 py-8 rounded-2xl w-full max-w-[360px] backdrop-blur-[6px] backdrop-brightness-[100%] bg-[radial-gradient(50%_50%_at_89%_50%,rgba(255,217,0,0.12)_0%,rgba(255,255,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.01)_100%)]">
        <h2 className="text-[120px] leading-none bg-gradient-to-r from-yellow-400 to-[#64591b] bg-clip-text text-transparent font-['Montserrat'] font-medium tracking-tight text-center">
          6X
        </h2>
        <p className="text-white text-3xl font-light text-center font-['Montserrat']">
          Increase in Sales Conversion
        </p>
      </div>

      {/* Card 3 */}
      <div class="flex flex-col gap-6 w-full max-w-[360px] md:flex-row lg:flex-col">
  <div class="flex items-center justify-center h-[225px] px-10 py-12 rounded-2xl backdrop-blur-[6px] backdrop-brightness-[100%] bg-[radial-gradient(50%_50%_at_89%_50%,rgba(255,217,0,0.12)_0%,rgba(255,255,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.01)_100%)]">
    <p class="text-white text-3xl font-light text-center font-['Montserrat']">Reduce Travel &amp; Demo Costs</p>
  </div>

  <div class="flex items-center justify-center h-[225px] px-10 py-12 rounded-2xl backdrop-blur-[6px] backdrop-brightness-[100%] bg-[radial-gradient(50%_50%_at_89%_50%,rgba(255,217,0,0.12)_0%,rgba(255,255,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.01)_100%)]">
    <p class="text-white text-3xl font-light text-center font-['Montserrat']">Track Customer Interactions &amp; Interests</p>
  </div>
</div>



    </div>
  );
};