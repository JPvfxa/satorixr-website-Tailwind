import React, { useState, useEffect } from "react";
import { PrimaryButton } from "./PrimaryButton";
import logo from "../assets/logo.svg";
import { Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import gsap from "gsap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Capabilities", path: "/capabilities" },
    { name: "Solutions", path: "/solutions" },
    { name: "Industries", path: "/industries" },
    { name: "About", path: "/about" },
    { name: "Resources", path: "/resources" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b border-[#ffffff33] backdrop-blur-[142px] backdrop-brightness-100 bg-[#05050503] transition-all duration-300 ${scrolled ? "shadow-[0_1px_10px_rgba(224,204,84,0.4)]" : ""}`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4">
        

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 font-nav-bar text-white text-sm">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-colors duration-300 hover:text-[rgba(224,204,84,1)] ${
                location.pathname === link.path ? "text-[rgba(224,204,84,1)]" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[151px] h-[23px]" />
        </Link>

        {/* Right Side - Button and Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.slice(4).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold transition-colors duration-300 hover:text-[rgba(224,204,84,1)] text-white ${
                location.pathname === link.path ? "text-[rgba(224,204,84,1)]" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <PrimaryButton className="!flex-shrink-0" />
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 px-6 space-y-3 font-nav-bar text-white text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block transition-colors duration-300 hover:text-[rgba(224,204,84,1)] ${
                location.pathname === link.path ? "text-[rgba(224,204,84,1)]" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <PrimaryButton className="mt-2" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
