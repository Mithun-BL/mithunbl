"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const BannerData = {
  Greetings: "Hi I'm Mithun BL",
  TitleStart: 'A passionate web developer who loves to build',
  TitleHighlight: 'Creative as well as Interactive',
  TitleEnd: 'websites',
  Links: [
    { Text: 'My Work', TextUrl: '/projects' },
    { Text: 'About Me', TextUrl: '/about-us' }
  ]
};

const HomeBanner = () => {
  const [isGlobalDark, setIsGlobalDark] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Detect root background property setting
    const checkDarkTheme = () => {
      const rootBg = document.documentElement.style.getPropertyValue("--background");
      const hasDarkVariable = rootBg === "#000000" || rootBg === "#000" || rootBg.trim() === "rgb(0, 0, 0)";
      setIsGlobalDark(hasDarkVariable);
    };

    checkDarkTheme();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "style") {
          checkDarkTheme();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
  }, []);

  const activeAccent = {
    id: "violet",
    glowRgb: "139, 92, 246",
  };

  const bannerBg = isGlobalDark
    ? "bg-slate-950/45 border-white/[0.06] shadow-sm"
    : "bg-white/80 border-black/[0.04] shadow-sm";

  // Dynamic Theme Colors
  const textTitleColor = isGlobalDark ? "text-white" : "text-black-clr";

  const primaryHoverShadow = isGlobalDark
    ? `hover:shadow-[0_0_25px_rgba(${activeAccent.glowRgb},0.2)]`
    : `hover:shadow-[0_12px_24px_rgba(${activeAccent.glowRgb},0.18)]`;

  return (
    <section className="relative text-center mt-12 mb-16 px-4 md:px-8 overflow-hidden pt-12">
      {/* Custom Styles block for text gradient */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes textGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text-gradient {
          background-size: 200% auto;
          animation: textGradient 6s linear infinite;
        }
      `}} />

      <div className="container relative z-10 max-w-6xl mx-auto">
        <div className={`relative ${bannerBg} py-[110px] px-8 rounded-[50px] transition-all duration-1000 overflow-hidden border`}>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

            {/* Greetings Badge (Light grey/blue footer style, 4px border-radius) */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[20px] border border-black/[0.06] dark:border-white/[0.08] bg-slate-100 dark:bg-[#f1f1f1] transition-all duration-300 mb-8 select-none">
              <span className="text-xs font-bold tracking-[0.05em] text-black dark:text-black">
                {BannerData.Greetings}
              </span>
            </div>

            {/* Stunning Typographic Title */}
            <h1 className={`text-4xl md:text-5xl font-bold lg:text-6xl font-black leading-[1.15] tracking-tight ${textTitleColor} transition-colors duration-1000 max-w-4xl mx-auto`}>
              {BannerData.TitleStart}{" "}
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#de2966] to-[#eb4f27] animate-text-gradient">
                {BannerData.TitleHighlight}
              </span>{" "}
              {BannerData.TitleEnd}
            </h1>

            {/* Premium subheading */}
            {/* <p className={`text-base md:text-lg max-w-2xl mx-auto mt-6 font-medium ${textSubColor} leading-relaxed transition-colors duration-1000`}>
              Specialized in crafting high-performance Next.js web applications with pixel-perfect responsive designs, clean typescript architecture, and fluid interactive user experiences.
            </p> */}

            {/* Interactive Call to Action buttons */}
            <div className="flex justify-center gap-5 mt-10 flex-wrap">
              <Link
                href={BannerData.Links[0].TextUrl}
                className={`group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.1em] transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] ${isGlobalDark
                  ? "bg-white text-black hover:bg-white/95"
                  : "bg-black text-white hover:bg-black/90"
                  } ${primaryHoverShadow}`}
              >
                <span>{BannerData.Links[0].Text}</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Link>
              <Link
                href={BannerData.Links[1].TextUrl}
                className={`group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.1em] transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] border ${isGlobalDark
                  ? "border-white/10 text-white bg-white/5 hover:bg-white/10 hover:border-white/20"
                  : "border-black/10 text-black bg-black/5 hover:bg-black/10 hover:border-black/20"
                  }`}
              >
                <span>{BannerData.Links[1].Text}</span>
                <svg className="w-3.5 h-3.5 opacity-60 group-hover:scale-115 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;