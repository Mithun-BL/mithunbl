"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SunIcon from '../../../public/images/sun.svg';
import MoonIcon from '../../../public/images/moon.svg';

const Header = () => {
  const [ddValue, setDdValue] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const ThemeToggle = () => (
    <button
      onClick={() => {
        const newValue = !ddValue;
        setDdValue(newValue);
        console.log("Checkbox state updated:", newValue);

        // Define CSS variables based on checkbox state
        const cssVariables = newValue
          ? {
            "--background": "#000000",
            "--black-clr": "#ffffff",
          }
          : {
            "--background": "#ffffff",
            "--black-clr": "#000000",
          };
        // Set CSS variables
        for (const [property, value] of Object.entries(cssVariables)) {
          document.documentElement.style.setProperty(property, value);
        }
      }}
      className="w-10 h-10 rounded-[12px] p-[3px] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
      aria-label="Toggle theme"
    >
      <div className="w-full h-full rounded-[9px] flex items-center justify-center relative overflow-hidden transition-all duration-300">
        {/* Sun Icon */}
        <Image
          src={SunIcon}
          alt="light theme"
          width={20}
          height={20}
          className={`absolute transition-all duration-500 ease-in-out ${ddValue
            ? "opacity-0 rotate-90 scale-50"
            : "opacity-100 rotate-0 scale-100"
            }`}
        />

        {/* Moon Image */}
        <Image
          src={MoonIcon}
          alt="dark theme"
          width={20}
          height={20}
          className={`absolute transition-all duration-500 ease-in-out text-white ${ddValue
            ? "opacity-100 rotate-0 scale-100 invert"
            : "opacity-0 -rotate-90 scale-50"
            }`}
        />
      </div>
    </button>
  );

  return (
    <header className="fixed w-full top-0 z-50 mt-5 px-4 md:px-8">
      <div className="container">
        <nav className="flex items-center p-4 rounded-2xl bg-background shadow-lg transition-all duration-300">
          {/* Logo Section */}
          <div className="flex-1 flex justify-start items-center">
            <Link href="/" className="text-[50px] font-bold tracking-wider hover:opacity-85 transition-opacity flex items-center  select-none">
              <span className="leading-none">m</span>
            </Link>
          </div>

          {/* Desktop Navigation Links (Centered) */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            <Link href="/about-us" className="text-sm font-medium hover:opacity-75 transition-opacity">About</Link>
            <Link href="/projects" className="text-sm font-medium hover:opacity-75 transition-opacity">Projects</Link>
            <Link href="/#skills" className="text-sm font-medium hover:opacity-75 transition-opacity">Skills</Link>
          </div>

          {/* Theme Toggle & CTA Section */}
          <div className="flex-1 flex justify-end items-center">
            <div className="hidden md:flex items-center space-x-5">
              <ThemeToggle />
              <Link className="btn_black flex items-center justify-center" href="/contact-us" style={{ padding: '12px 24px', fontSize: '14px' }}>
                Get in Touch
              </Link>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-black-clr transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-black-clr transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-black-clr transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        <div className={`md:hidden mt-2 bg-background border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-60 p-5' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col space-y-4">
            <Link href="/about-us" className="text-base font-medium hover:opacity-75 transition-opacity">About</Link>
            <Link href="/projects" className="text-base font-medium hover:opacity-75 transition-opacity">Projects</Link>
            <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-900">
              <ThemeToggle />
              <Link onClick={() => setIsOpen(false)} className="btn_black text-sm" href="/contact-us">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;