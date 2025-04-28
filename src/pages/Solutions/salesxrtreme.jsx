import React from "react";
import PlatformSolutions from "../../components/PlatformSolutions";
import AutomotiveScrollytelling from "../../components/AutomotiveScrollXRCanvas";
import automotiveManufacturingCs from "../../components/CaseStudyTab/Automotive & Manufacturing-CS.png";
import CaseStudySection from "../../components/CaseStudyTab/CaseStudySection";
import WhySatorixr from "../../components/whysatorixr";
import TrustedPartners from "../../components/trustedpartners";
import { RequestADemo } from "../../components/RequestADemo";
import Footer from "../../components/footer/footer";

function Salesxrtreme() {
  // Tab Data for CaseStudySection
  const tabsData = [
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
  ];

  return (
    <>
      {/* Other sections */}
      <PlatformSolutions />
      <AutomotiveScrollytelling />
      <CaseStudySection />
      <WhySatorixr />
      <TrustedPartners />
      <RequestADemo />
      <Footer />
    </>
  );
}

export default Salesxrtreme;
