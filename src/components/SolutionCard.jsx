import React from "react";
import { TertiaryButton } from "./TertiaryButton/tertiarybutton";

const SolutionCard = ({ image, description }) => {
  return (
    <div className="p-6 rounded-2xl backdrop-blur-md bg-black/60 text-white max-w-md w-full space-y-4">
      <img src={image} alt="Solution" className="w-48 h-auto object-contain" />
      <p className="text-lg font-light">{description}</p>
      <TertiaryButton className="mt-4" property1="default" />
    </div>
  );
};

export default SolutionCard;