import React, { useState, useEffect } from "react";
//import automotiveManufacturingCs from "/src/components/CaseStudyTab/Automotive & Manufacturing-CS.png";
import casestudyLine from "../CaseStudyTab/casestudy-line.png";

const CaseStudySection = ({ title = "Case Study", tabData = [] }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // NEW: Pause/Play control
  const [isMobile, setIsMobile] = useState(false);

  /*const tabsData = [
    {
      title: "Automotive & Manufacturing",
      description:
        "Let buyers visualize vehicles, machinery, and components remotely before making a purchase.",
      image: automotiveManufacturingCs,
    },
    {
      title: "E-Commerce & Retail",
      description:
        "Transform your retail business with virtual product experiences.",
      image: automotiveManufacturingCs,
    },
    {
      title: "B2B Equipment Sales",
      description:
        "Enhance the sales process for industrial equipment and machinery.",
      image: automotiveManufacturingCs,
    },
    {
      title: "Trade Shows & Events",
      description:
        "Showcase products and services interactively at trade shows and events.",
      image: automotiveManufacturingCs,
    },
  ]; */

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || isPaused) return; // If paused, do nothing.

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Move to next tab
          setActiveTab((prevTab) => (prevTab + 1) % tabData.length);
          return 0;
        }
        return prev + 0.5; // progress increases slowly (you can tweak speed here)
      });
    }, 100); // 40ms = slower animation (4s total to 100%)

    return () => clearInterval(progressInterval);
  }, [activeTab, isPaused, isMobile, tabData.length]);

  if (!tabData.length) return null; /*don't render if no tab data */

  /* if (!tabs || tabData.length === 0) {
    return null; // Don't render anything if no tabs are passed
  }*/

  return (
    <section className="flex flex-col items-center w-full px-4 py-12 bg-variable-collection-black">
      {/* Main Heading */}
      <h2 className="text-[32px] sm:text-[40px] leading-[48px] sm:leading-[62px] text-center bg-gradient-to-r from-[#FFD900] to-[#64591B] bg-clip-text text-transparent font-normal font-[Montserrat]">
        {title}
      </h2>

      {/* Content Card */}
      <div className="mt-8 max-w-[1260px] w-full bg-gradient-to-br from-[rgba(224,204,84,0.12)] via-transparent to-transparent backdrop-blur-md rounded-2xl p-8 flex flex-col gap-10 sm:gap-8">
        {/* Stack All Tabs on Mobile */}
        {isMobile ? (
          tabData.map((tab, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="text-yellow-500 font-light text-lg">
                {tab.title}
              </div>
              <p className="text-variable-collection-white font-light text-base leading-relaxed">
                {tab.description}
              </p>
              <div className="flex justify-center items-center">
                <img
                  src={tab.image}
                  alt={tab.title}
                  className="w-full h-auto object-contain max-h-[400px] mix-blend-lighten"
                />
              </div>
              <div className="w-full h-[1px] bg-gray-500 my-6" />
            </div>
          ))
        ) : (
          // Tabs + Active Image for Desktop
          <div className="flex flex-col lg:flex-row gap-10 sm:gap-8">
            {/* Left Side Tabs */}
            <div className="flex flex-col gap-6 sm:gap-4 w-full lg:w-[30%]">
              {tabData.map((tab, index) => (
                <React.Fragment key={index}>
                  {index === activeTab ? (
                    <div className="flex flex-col gap-4">
                      {/* Active Tab - Expanded */}
                      <div
                        className="text-yellow-500 font-light text-base sm:text-lg cursor-pointer break-words"
                        onClick={() => {
                          setActiveTab(index);
                          setProgress(0);
                        }}
                      >
                        {tab.title}
                      </div>
                      <p className="text-variable-collection-white font-light text-sm sm:text-base leading-relaxed">
                        {tab.description}
                      </p>

                      {/* Pause/Play Button + Progress Bar */}
                      <div className="flex items-center gap-3 mt-2">
                        {/* Pause/Play Button */}
                        <button
                          className="flex items-center justify-center w-10 h-10 sm:w-8 sm:h-[1.8rem] rounded-full bg-yellow-500"
                          onClick={() => setIsPaused(!isPaused)}
                        >
                          {isPaused ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              //stroke="currentColor"
                              className="w-5 h-5 sm:w-4 sm:h-4 text-black"
                            >
                              {/* Play Icon */}
                              <path d="M8 5v14l11-7L8 5z" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5 sm:w-4 sm:h-4 text-black" // proper svg size
                            >
                              {/* Pause Icon */}
                              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                            </svg>
                          )}
                        </button>

                        {/* New Progress Bar with casestudyLine */}
                        <div className="relative w-full h-2 overflow-hidden">
                          {/* Static background line */}
                          <img
                            src={casestudyLine}
                            alt="Divider Line"
                            className="w-full h-full object-contain"
                          />

                          {/* Animated progress overlay */}
                          <div
                            className="absolute top-[3px] left-0 h-[30%] bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500"
                            style={{
                              width: `${progress}%`,
                              transition: "width 0.1s linear",
                              mixBlendMode: "screen", // makes gradient blend nicely with background
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="text-variable-collection-white font-light text-base sm:text-lg cursor-pointer hover:text-yellow-500 transition-colors duration-300 break-words"
                      onClick={() => {
                        setActiveTab(index);
                        setProgress(0);
                      }}
                    >
                      {tab.title}
                    </div>
                  )}
                  {/* Divider Line (only for inactive tabs) */}
                  {index !== activeTab && (
                    <img
                      src={casestudyLine}
                      alt="Divider Line"
                      className="w-full h-px my-2"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
            {/* {Separate Progress Bar which is separate from casestudyLine}
                  <div className="w-full h-1 bg-gray-700 mt-2 relative overflow-hidden rounded-full">
                    <div
                      //className="h-full bg-yellow-500 absolute top-0 left-0" (solid yellow color)
                      className="h-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 animate-gradientMove absolute top-0 left-0" /*moving gradient color
                      style={{
                        width: `${progress}%`,
                        transition: "width 0.1s linear",
                      }}
                    ></div>
                  </div>
                </div>
              ) : (
                <div
                  className="text-variable-collection-white font-light text-lg cursor-pointer hover:text-yellow-500 transition-colors duration-300"
                  onClick={() => {
                    setActiveTab(index);
                    setProgress(0);
                  }}
                >
                  {tab.title}
                </div>
              )}
              {/* Divider Line }
              <img
                src={casestudyLine}
                alt="Divider Line"
                className="w-full h-px my-2"
              />
            </React.Fragment>
          ))}
        </div> */}

            {/* Right Side Image */}
            <div className="flex justify-center items-center w-full lg:w-[70%]">
              <img
                src={tabData[activeTab].image}
                alt={`${tabData[activeTab].title} Case Study`}
                className="w-full h-auto object-contain max-h-[500px] mix-blend-lighten"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudySection;
