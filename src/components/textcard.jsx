import React from "react";
import { TertiaryButton } from "./Tertiarybutton/tertiarybutton";

export const PlatformCard = ({ logo, description }) => {
  return (
    <div className="w-full max-w-md p-8 rounded-2xl backdrop-blur-[6px] bg-[radial-gradient(75%_70%_at_25%_40%,rgba(95,95,95,0.75)_0%,rgba(0,0,0,0.5)_100%)] bg-blend-overlay text-variable-collection-white z-10">
      <img
        src={logo}
        alt="Platform solution logo"
        className="w-[200px] h-auto mb-6 object-contain"
      />
      <p className="text-xl font-p3 mb-6">{description}</p>
      <TertiaryButton className="!w-[130px]" property1="default" />
    </div>
  );
};
