"use client";

import React, { useState, useEffect } from 'react';
import ImageSlider from '../ImageSlider';

const AboutContent = () => {
    const [isGlobalDark, setIsGlobalDark] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

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

    const textSecondary = isGlobalDark ? "text-gray-400" : "text-gray-600";
    const textMuted = isGlobalDark ? "text-gray-500" : "text-gray-400";
    const cardBg = isGlobalDark 
        ? "bg-slate-950/40 border border-white/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]" 
        : "bg-slate-50 border border-black/[0.05] shadow-[0_10px_30px_rgba(0,0,0,0.01)]";

    return (
        <section className="mb-16 px-4 md:px-8">
            <div className="container max-w-[1200px] mx-auto">
                {/* Section Header */}
                <div className="text-center md:text-left mb-16">
                    <h6 className="text-xs tracking-[3px] font-bold text-violet-500 uppercase mb-3">ABOUT ME</h6>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-[900px] mb-6">
                        Designing & developing interactive web experiences.
                    </h1>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Image Comparison Slider */}
                    <div className="lg:col-span-5 flex justify-center w-full max-w-[420px] mx-auto lg:max-w-none">
                        <ImageSlider imageSrc="/images/mithun_profile.png" />
                    </div>

                    {/* Right Column: Personal Story and Stats */}
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        <div className="flex flex-col gap-5 text-base md:text-lg leading-relaxed">
                            <p className="font-semibold text-violet-500 dark:text-violet-400">
                                Hello! I&apos;m Mithun BL, a passionate web developer based in Bangalore, India. I specialize in crafting elegant, responsive, and performance-oriented web applications.
                            </p>
                            <p className={textSecondary}>
                                With years of front-end experience, I bridge the gap between creative visual design and robust code architecture. My philosophy is simple: build interfaces that feel alive, load instantly, and are accessible to everyone.
                            </p>
                            <p className={textSecondary}>
                                I work extensively with **Next.js**, **React**, and modern CSS architectures to deliver interactive digital interfaces that keep users engaged. Whether it is custom layouts, web application dashboards, or parallax scroll portfolios, I bring structural precision and visual excellence to every line of code.
                            </p>
                        </div>

                        {/* Interactive Philosophy Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                            <div className={`p-6 rounded-2xl ${cardBg} transition-all duration-300`}>
                                <span className="text-xl mb-2 block">⚡</span>
                                <h4 className="font-bold mb-1.5 text-sm">Interaction Focus</h4>
                                <p className={`text-xs leading-normal ${textSecondary}`}>
                                    Websites shouldn&apos;t just be static brochures. I build micro-interactions and scroll animations that make browsing a delightful user experience.
                                </p>
                            </div>

                            <div className={`p-6 rounded-2xl ${cardBg} transition-all duration-300`}>
                                <span className="text-xl mb-2 block">🎯</span>
                                <h4 className="font-bold mb-1.5 text-sm">Performance First</h4>
                                <p className={`text-xs leading-normal ${textSecondary}`}>
                                    Clean build traces, optimized bundle splits, and image preloading translate into fast page render metrics and solid Core Web Vitals.
                                </p>
                            </div>
                        </div>

                        {/* Direct contact details prompt */}
                        <div className="flex flex-wrap items-center gap-4 mt-2">
                            <span className={`text-xs font-semibold ${textMuted}`}>Interested in what I do?</span>
                            <a 
                                href="/contact-us" 
                                className="btn_black text-sm hover:scale-[0.98] transition-transform"
                            >
                                Let&apos;s Work Together
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutContent;
