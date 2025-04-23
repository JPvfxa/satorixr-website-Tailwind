
import React from "react";
import { motion } from "framer-motion";

export const SecondaryButton = ({ text = "Secondary", className = "" }) => {
  return (
    <motion.button
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`rounded-full px-[28.04px] py-[11.54px] text-[13.2px] font-medium font-[Montserrat] text-white bg-gradient-to-r from-[rgba(255,217,0,1)] to-[rgba(100,89,27,1)] ${className}`}
    >
      {text}
    </motion.button>
  );
};

export default SecondaryButton;
