import React from "react";

export const PrimaryButton = ({ className }) => {
  return (
    <button
      className={`group inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#FFD900] to-[#64591B] text-white text-base font-medium font-nav-bar transition-all duration-300 ease-in-out ${className}`}
    >
      <span className="transition-all duration-300 ease-in-out">Get Started</span>
      <span className="overflow-hidden transition-all duration-300 ease-in-out max-w-0 group-hover:max-w-[24px] ml-0 group-hover:ml-2">
        <svg
          className="w-[16px] h-[10px] transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.59 0L9.17 1.41 12.75 5 9.17 8.59 10.59 10 16 5.00001 10.59 0ZM0 4V6H14V4H0Z"
            fill="white"
          />
        </svg>
      </span>
    </button>
  );
};
