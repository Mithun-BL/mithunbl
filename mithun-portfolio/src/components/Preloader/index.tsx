"use client";

import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Lock scrolling on page load
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400); // 1.4s active loading

    const removeTimer = setTimeout(() => {
      setShouldRender(false);
      document.body.style.overflow = '';
    }, 1900); // 1.9s complete animation duration (includes 500ms fadeout)

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030014] transition-all duration-500 ease-in-out ${isLoading
          ? "opacity-100 scale-100"
          : "opacity-0 scale-105 pointer-events-none"
        }`}
    >
      {/* Dynamic Keyframes for loading bar and pulsing logo */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes preloaderBar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(-30%); }
          100% { transform: translateX(0%); }
        }
        @keyframes preloaderPulse {
          0%, 100% { transform: scale(0.96); opacity: 0.8; }
          50% { transform: scale(1.04); opacity: 1; }
        }
        @keyframes rainbowShift {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .animate-preloader-bar {
          background: linear-gradient(
            to right,
            #ef4444,
            #f97316,
            #eab308,
            #22c55e,
            #06b6d4,
            #3b82f6,
            #a855f7,
            #ec4899,
            #ef4444
          );
          background-size: 200% auto;
          animation: preloaderBar 1.4s cubic-bezier(0.65, 0.05, 0.36, 1) forwards, rainbowShift 3s linear infinite;
        }
        .animate-preloader-logo {
          background: linear-gradient(
            to right,
            #ef4444,
            #f97316,
            #eab308,
            #22c55e,
            #06b6d4,
            #3b82f6,
            #a855f7,
            #ec4899,
            #ef4444
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: rainbowShift 3s linear infinite, preloaderPulse 1.8s ease-in-out infinite;
        }
      `}} />

      {/* Decorative ambient background orb */}
      <div className="absolute w-[300px] h-[300px] rounded-full blur-[120px] bg-violet-600/15 animate-pulse pointer-events-none" />

      {/* Centered Logo Container */}
      <div className="flex flex-col items-center relative z-10 select-none">

        {/* Glowing "m" logo */}
        <div className="text-[120px] font-black leading-none tracking-wider animate-preloader-logo">
          m
        </div>

        {/* Minimal loading progress track */}
        {/* <div className="w-24 h-[3px] bg-white/[0.08] rounded-full overflow-hidden mt-8 relative">
          <div className="absolute inset-0 animate-preloader-bar" />
        </div> */}

      </div>
    </div>
  );
};

export default Preloader;
