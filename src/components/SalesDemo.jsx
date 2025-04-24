import React, { useState, useRef, useEffect } from "react";
import { PrimaryButton } from "./PrimaryButton";
import satoriSymbol from "./assets/satori-symbol.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = ["Automotive", "Edutech", "Manufacturing"];
const roles = ["Sales", "Manager", "Admin"];

const Dropdown = ({ label, options, selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full sm:w-auto" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="bg-[radial-gradient(50%_50%_at_89%_50%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.01)_100%)] text-white px-4 py-3 rounded-full shadow-md flex items-center justify-between text-left backdrop-blur-[6px] backdrop-brightness-100 min-h-[52px] w-full"
      >
        <span className="px-1 text-center whitespace-nowrap">{selected || label}</span>
        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
          <g filter="url(#filter0_di_1083_1659)">
            <path d="M9.48201 10.4176C8.94074 11.3551 7.58758 11.3551 7.04631 10.4176L2.78384 3.03479C2.24258 2.09729 2.91916 0.925415 4.00169 0.925415L12.5266 0.925416C13.6092 0.925416 14.2857 2.09729 13.7445 3.03479L9.48201 10.4176Z" fill="url(#paint0_linear_1083_1659)" />
          </g>
          <defs>
            {/* SVG defs omitted for brevity */}
          </defs>
        </svg>
      </button>
      {open && (
        <ul className="absolute z-10 mt-2 w-full bg-black/70 rounded-[16px] shadow-lg max-h-60 overflow-auto text-white">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="cursor-pointer px-4 py-2 hover:bg-white/10"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const SalesDemo = () => {
  const [industry, setIndustry] = useState(null);
  const [role, setRole] = useState(null);
  const containerRef = useRef();

  useEffect(() => {
    const el = containerRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center bg-black text-white overflow-hidden px-4 py-12"
    >
      {/* Glowing ellipse */}
      <div className="absolute top-[5%] left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-30 blur-3xl" />

      {/* Satori symbol */}
      <img
        className="absolute w-[241px] h-[236px] top-[28%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
        alt="Satori symbol"
        src={satoriSymbol}
      />

      {/* Dropdown container */}
      <div className="relative z-10 w-auto px-8 py-6 mt-[20%] flex flex-wrap items-center justify-center gap-6 rounded-[16px] backdrop-blur-[6px] backdrop-brightness-100 bg-[radial-gradient(50%_50%_at_50%_8%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.18)_40%,rgba(0,0,0,0.3)_100%),linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%)] scale-100">
        <p className="text-2xl sm:text-xl font-light text-center">Are you a -</p>

        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-center">
          <Dropdown
            label="Select Industry"
            options={industries}
            selected={industry}
            setSelected={setIndustry}
          />
          <Dropdown
            label="Select Role"
            options={roles}
            selected={role}
            setSelected={setRole}
          />
        </div>

        <div className="flex justify-center sm:justify-start">
          <PrimaryButton text="Get Started" className="w-full sm:w-auto min-w-[160px]" />
        </div>
      </div>
    </section>
  );
};

export default SalesDemo;
