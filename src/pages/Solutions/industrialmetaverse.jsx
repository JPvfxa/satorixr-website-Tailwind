import React from "react";
import CaseStudySection from "../../components/CaseStudyTab/CaseStudySection"; // adjust path if needed
import PlatformSolutions from "../../components/PlatformSolutions"
import WhySatorixr from "../../components/whysatorixr";
import TrustedPartners from "../../components/trustedpartners";
import { RequestADemo } from "../../components/RequestADemo";
import Footer from "../../components/footer/footer";

const Industrialmetaverse = () => {
  return (
    <div className="min-h-screen bg-black py-12 px-6">
        <PlatformSolutions />
        <CaseStudySection />
        <WhySatorixr />
        <TrustedPartners />
        <RequestADemo />
        <Footer />
    </div>
  );
};

export default Industrialmetaverse;