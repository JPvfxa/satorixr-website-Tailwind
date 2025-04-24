import React from "react";
import { TertiaryButton } from "./TertiaryButton/tertiarybutton";

const CapabilityCard = ({ image, title, description }) => {
  return (
    <div className="w-full sm:w-[284px] h-auto p-6 rounded-2xl backdrop-blur-lg bg-[radial-gradient(50%_50%_at_89%_50%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.01)_100%)] flex flex-col items-start text-left">
      <img src={image} alt={title} className="w-[106px] h-[185px] object-contain mb-6 self-center" />
      <h3 className="text-2xl font-normal mb-2">{title}</h3>
      <p className="text-base font-light mb-4">{description}</p>
      <TertiaryButton className="w-[130px] h-[24px]" />
    </div>
  );
};

export default CapabilityCard;
