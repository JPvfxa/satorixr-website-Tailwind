import React, { useRef, useState, useEffect } from "react";
import CapabilityCard from "./CapabilityCard";
import ARIcon1 from "./assets/aricon.png";
import { motion } from "framer-motion";

const capabilities = [
  {
    image: ARIcon1,
    title: "Augmented Reality",
    description: "Bringing Products & Processes to Life",
  },
  {
    image: ARIcon1,
    title: "Digital Twin",
    description: "Real-Time Virtual Replicas of Assets",
  },
  {
    image: ARIcon1,
    title: "Simulation",
    description: "Test Ideas Before Physical Production",
  },
  {
    image: ARIcon1,
    title: "Remote Assistance",
    description: "Empower Frontline Workers Instantly",
  },
];

const fadeVariants = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  },
});

const Platform = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleScroll = () => {
    const scrollLeft = carouselRef.current.scrollLeft;
    const width = carouselRef.current.clientWidth;
    const index = Math.round(scrollLeft / (width * 0.7)); // closer to card width
    setActiveIndex(index);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    carousel?.addEventListener("scroll", handleScroll);
    return () => carousel?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 px-4 py-12">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD900] to-[#64591B] text-3xl sm:text-4xl text-center font-[Montserrat] leading-snug">
        Platform Capabilities
      </h2>

      {/* Desktop Grid */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {capabilities.map((capability, index) => (
          <motion.div
            key={index}
            variants={fadeVariants(index * 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <CapabilityCard
              image={capability.image}
              title={capability.title}
              description={capability.description}
            />
          </motion.div>
        ))}
      </div>

      {/* Mobile Carousel - 1.5 Card View */}
      <div
        ref={carouselRef}
        className="sm:hidden flex overflow-x-auto space-x-4 snap-x snap-mandatory px-4 w-full scrollbar-hide"
      >
        {capabilities.map((capability, index) => (
          <motion.div
            key={index}
            className="snap-start shrink-0 w-[280px]"
            variants={fadeVariants(index * 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <CapabilityCard
              image={capability.image}
              title={capability.title}
              description={capability.description}
            />
          </motion.div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex sm:hidden justify-center mt-4 space-x-2">
        {capabilities.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              activeIndex === index ? "bg-yellow-400" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Platform;
