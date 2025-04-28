import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import AboutPage from "./pages/about";
import SalesDemo from "./components/SalesDemo";
import Platform from "./components/Platform";
import { PSolutions } from "./components/psolutions";
import { RequestADemo } from "./components/RequestADemo";
import TrustedPartners from "./components/trustedpartners";
import Footer from "./components/footer/footer";
import { ImageOff } from "lucide-react";
import Capabilities from "./pages/capabilities";
import Industries from "./pages/Industries/industries";
import Salesxrtreme from "./pages/Solutions/salesxrtreme";
//import Engagexrtreme from "./pages/Solutions/engagexrtreme";
//import Industrialmetaverse from "./pages/Solutions/industrialmetaverse";

const HomePage = () => (
  <>
    <HeroBanner />
    <SalesDemo />
    <Platform />
    <PSolutions />
    <RequestADemo />
    <TrustedPartners />
    <Footer />
  </>
);

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/Solutions" element={<Salesxrtreme />} />
      </Routes>
    </div>
  );
}

export default App;
