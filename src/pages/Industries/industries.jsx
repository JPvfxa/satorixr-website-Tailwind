import React from "react";
import WhySatorixr from "../../components/whysatorixr.jsx";
import { RequestADemo } from "../../components/RequestADemo";
import TrustedPartners from "../../components/trustedpartners";
import Footer from "../../components/footer/footer";
import ScrollytellingComponent from "../../components/AutomotiveScrollXRCanvascomponent.jsx";
import IndustryBanner from "../../components/IndustryBanner/Industriesbannercomponent.jsx";
//scroll commponent images
import TabletFrame from "./Tab.png";
import Screen1 from "./Screen1.png";
import Screen2 from "./Screen2.png";
import Screen3 from "./Screen3.png";
import Screen4 from "./Screen4.png";

//component for scroll control
const tabletFrame = TabletFrame;
const screens = [Screen1, Screen2, Screen3, Screen4];
const titles = [
  "Automotive Innovation",
  "Manufacturing Efficiency",
  "Healthcare Transformation",
  "Retail Revolution",
];
const descriptions = [
  "XR drives automotive design, training, and customer experiences to new heights.",
  "Boost productivity and safety with immersive simulations and visualizations.",
  "Empower medical professionals and patients with XR-driven healthcare experiences.",
  "Revolutionize shopping with virtual try-ons, interactive showrooms, and more.",
];
const screenImages = screens;

const Industries = () => {
  return (
    <div className="bg-black text-white w-full">
      <IndustryBanner />
      <ScrollytellingComponent
        screens={screens}
        tabletFrameImage={tabletFrame}
        titles={titles}
        descriptions={descriptions}
        screenImages={screenImages}
      />

      <WhySatorixr />
      <TrustedPartners />
      <RequestADemo />
      <Footer />
    </div>
  );
};

export default Industries;
