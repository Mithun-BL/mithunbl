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
      className={`w-10 h-10 rounded-[12px] p-[3px] flex items-center justify-center transition-all duration-300  hover:scale-105 active:scale-95 ${ddValue
        ? " "
        : ""
        }`}
      aria-label="Toggle theme"
    >
      <div
        className={`w-full h-full rounded-[9px] flex items-center justify-center relative overflow-hidden transition-all duration-300 ${ddValue
          ? ""
          : ""
          }`}
      >
        {/* Sun Icon */}
       <Image
          src={SunIcon}
          alt="light theme"
          width={20}
          height={20}
          className={`absolute transition-all duration-500 ease-in-out ${
            ddValue
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
          className={`absolute transition-all duration-500 ease-in-out text-white ${
            ddValue
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
        <nav className="flex items-center justify-between p-3 rounded-2xl bg-background  shadow-lg transition-all duration-300">
          {/* Logo */}
          <Link href="/" className="text-[60px] tracking-wider hover:opacity-80 transition-opacity">
            <span className='block font-bold leading-none'>m</span>
            {/* <span className='text-[16px] block font-normal leading-none tracking-[0.07em]'>A passionate web developer</span> */}
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#Skills" className="text-sm font-medium hover:opacity-75 transition-opacity">About</a>
            <a href="#Experience" className="text-sm font-medium hover:opacity-75 transition-opacity">Experience</a>
            <a href="#Projects" className="text-sm font-medium hover:opacity-75 transition-opacity">Projects</a>
          </div>

          {/* Theme Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link className="btn_black" href="/contact-us">
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
        </nav>

        {/* Mobile menu dropdown */}
        <div className={`md:hidden mt-2 bg-background border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-60 p-5' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col space-y-4">
            <a onClick={() => setIsOpen(false)} href="#Skills" className="text-base font-medium hover:opacity-75 transition-opacity">About</a>
            <a onClick={() => setIsOpen(false)} href="#Experience" className="text-base font-medium hover:opacity-75 transition-opacity">Experience</a>
            <a onClick={() => setIsOpen(false)} href="#Projects" className="text-base font-medium hover:opacity-75 transition-opacity">Projects</a>
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