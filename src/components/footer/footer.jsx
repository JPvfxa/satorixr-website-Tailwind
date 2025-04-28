import PropTypes from "prop-types";
import React from "react";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import logo from "../assets/logo.svg";
import youtube from "../assets/youtube.svg";

export const Footer = ({ className = "", href = "tel:+919600233525", href1 = "mailto:marketing@satorixr.com" }) => {
  return (
    <footer
      className={`w-full px-6 md:px-12 lg:px-[120px] pt-12 pb-5 border-t border-[#ffffff0f] backdrop-blur-[6px] backdrop-brightness-100 [border-image:linear-gradient(0deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)_1] [background:radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.01)_100%)] text-shades-0 ${className}`}
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-[90px] justify-between">
        {/* Left Section */}
        <div className="flex flex-col gap-10 lg:gap-[70px]">
          <div className="flex flex-col gap-6">
            <a href="/" aria-label="Home">
              <img src={logo} alt="Logo" className="w-[180px] h-[28px]" />
            </a>

            <div className="flex flex-col gap-2">
              <p className="text-sm opacity-40 font-normal">
                Address: IIT Madras Research Park, Taramani, Chennai, India
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline opacity-40"
                >
                  +91 9600233525
                </a>

                <a
                  href={href1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline opacity-40"
                >
                  marketing@satorixr.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs opacity-40">Follow us</span>
              <a
                href="https://www.facebook.com/Satorixr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img src={facebook} alt="Facebook" className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC4x8uxNERAnsnM_kHa0A6Bg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <img src={youtube} alt="YouTube" className="w-8 h-[23px]" />
              </a>
              <a
                href="https://www.instagram.com/satorixr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img src={instagram} alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>

          <p className="text-xs opacity-40">© 2025 — SatoriXR Pvt Ltd.</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-10 w-full lg:w-[687px]">
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-[60px]">
            {/* Platform Capabilities */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs opacity-40 font-medium">Platform Capabilities</h4>
              <ul className="flex flex-col gap-1.5 text-sm font-medium">
                <li>Augmented Reality</li>
                <li>Virtual Reality</li>
                <li>Web</li>
                <li>Digital Twin</li>
              </ul>
            </div>

            <div className="hidden md:block w-px h-[130px] bg-white/10" />

            {/* Platform Solutions */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs opacity-40 font-medium">Platform Solutions</h4>
              <ul className="flex flex-col gap-1.5 text-sm font-medium">
                <li>Sales Xtreme</li>
                <li>Engage Xtreme</li>
                <li>Industrial Metaverse</li>
                <li>Professional Service</li>
              </ul>
            </div>

            <div className="hidden md:block w-px h-[130px] bg-white/10" />

            {/* Other Links */}
            <div className="flex flex-col gap-4">
              <ul className="flex flex-col gap-1.5 text-sm font-medium">
                <li>About us</li>
                <li>Industries</li>
                <li>Resources</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>

          <p className="text-xs opacity-40 text-right">Copyright Privacy All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  href: PropTypes.string,
  href1: PropTypes.string,
};

export default Footer;
