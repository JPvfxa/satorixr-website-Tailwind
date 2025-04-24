import React from "react";

const LeadershipCard = ({ image, name, title, description, reverseLayout }) => {
  return (
    <div
      className={`flex ${reverseLayout ? "lg:flex-row-reverse" : "lg:flex-row"} items-center justify-center gap-[18px] flex-col sm:flex-row`}
    >
      <img
        src={image}
        alt={name}
        className="w-[200px] sm:w-[250px] lg:w-[300px] rounded-full object-cover"
      />
      <div className="text-center sm:text-left">
        <h3 className="text-3xl sm:text-4xl text-gradient font-normal text-transparent bg-clip-text mt-4 sm:mt-0">
          {name}
        </h3>
        <p className="text-base sm:text-lg text-white opacity-60 font-normal mt-2">
          {title}
        </p>
        <p className="text-sm sm:text-base text-white opacity-90 mt-4 font-light">
          {description}
        </p>
      </div>
    </div>
  );
};

export default LeadershipCard;