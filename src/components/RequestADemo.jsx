
import React from "react";
import { SecondaryButton } from "../components/SecondaryButton"; // Adjust path if needed

export const RequestADemo = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#FFD900] to-[#64591B] py-10 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center gap-[25px]">
        <h2 className="text-white text-2xl md:text-4xl font-normal text-center font-[Montserrat]">
          Let’s Build the Future Together
        </h2>
        <SecondaryButton className="text-white text-lg font-medium rounded-full border border-[#E0CB52] px-8 py-4 hover:bg-[#E0CB52]/10 transition">
          Request a Demo
        </SecondaryButton>
      </div>
    </section>
  );
};
