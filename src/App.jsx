import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import AboutPage from "./pages/about";

const HomePage = () => (
  <>
    <HeroBanner />
    <section className="h-screen bg-gray-800 flex items-center justify-center text-white">
      <p className="text-xl font-[Montserrat]">Start building your sections here</p>
    </section>
  </>
);

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
