"use client";

import React, { useState, useEffect } from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@/data/projects';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

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

  const cardBg = isGlobalDark 
    ? "bg-slate-950/45 border-white/[0.06] shadow-2xl" 
    : "bg-white border-black/[0.04] shadow-[0_20px_40px_rgba(0,0,0,0.015)]";

  const panelBg = isGlobalDark
    ? "bg-white/[0.02] border-white/[0.05]"
    : "bg-black/[0.02] border-black/[0.04]";

  const textColor = isGlobalDark ? "text-white" : "text-black-clr";
  const subTextColor = isGlobalDark ? "text-white/60" : "text-black-clr/60";
  const tagColor = isGlobalDark 
    ? "bg-white/5 border-white/5 text-white/50" 
    : "bg-black/5 border-black/5 text-black-clr/50";

  return (
    <>
      <article className="aboveWebSpacing"></article>
      <section className="mb-16 px-4 md:px-8">
        <div className="container max-w-5xl mx-auto">
          
          {/* Back Navigation Row */}
          <div className="flex justify-between items-center mb-10">
            <Link 
              href="/projects" 
              className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-opacity duration-300 ${
                isGlobalDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
              }`}
            >
              <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <span>Back to Projects</span>
            </Link>
            
            <Link 
              href="/" 
              className={`text-xs font-bold uppercase tracking-wider transition-opacity duration-300 ${
                isGlobalDark ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'
              }`}
            >
              Home
            </Link>
          </div>

          {/* Project Main Showcase Card */}
          <div className={`${cardBg} rounded-[40px] p-6 md:p-10 border transition-all duration-500 overflow-hidden relative mb-12`}>
            
            {/* Corner Decorative Ambient Orb */}
            <div 
              className="absolute -right-24 -top-24 w-48 h-48 rounded-full blur-3xl opacity-15 dark:opacity-25 pointer-events-none"
              style={{ backgroundColor: `rgb(${project.glowColor})` }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Info Column */}
              <div className="lg:col-span-7 flex flex-col items-start relative z-10">
                {/* Showcase Pill */}
                <div 
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6 text-[10px] font-black uppercase tracking-widest"
                  style={{
                    borderColor: `rgba(${project.glowColor}, 0.35)`,
                    backgroundColor: `rgba(${project.glowColor}, 0.08)`,
                    color: isGlobalDark ? '#d8b4fe' : '#6366f1'
                  }}
                >
                  Case Study
                </div>

                {/* Title */}
                <h1 className={`text-3xl md:text-5xl font-black mb-4 tracking-tight leading-none ${textColor} transition-colors duration-1000`}>
                  {project.title}
                </h1>

                {/* Subtitle Details */}
                <div className="flex flex-wrap gap-4 text-xs font-semibold mb-6">
                  <span className={subTextColor}>Role: <strong className={textColor}>{project.role}</strong></span>
                  <span className="opacity-30">|</span>
                  <span className={subTextColor}>Timeline: <strong className={textColor}>{project.timeline}</strong></span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={`text-[10px] font-bold px-3 py-1 rounded-full border ${tagColor}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn_black inline-flex items-center gap-2 text-xs py-3 px-6 rounded-full hover:scale-105 active:scale-98 transition-transform"
                  >
                    <span>Visit Live Site</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`inline-flex items-center gap-2 text-xs font-bold py-3 px-6 rounded-full border transition-all duration-300 hover:scale-105 active:scale-98 ${
                      isGlobalDark 
                        ? 'border-white/10 hover:bg-white/5 text-white' 
                        : 'border-black/10 hover:bg-black/5 text-black'
                    }`}
                  >
                    <span>Source Code</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Graphic Mockup Column */}
              <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 shadow-inner">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-w-768px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

          </div>

          {/* Detailed Project Story & Challenges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Long Story Column */}
            <div className="md:col-span-2 flex flex-col gap-8">
              
              <div className={`${cardBg} rounded-3xl p-6 md:p-8 border`}>
                <h2 className={`text-xl font-bold mb-4 ${textColor}`}>Project Overview</h2>
                <p className={`text-sm md:text-base leading-relaxed ${subTextColor}`}>
                  {project.longDescription}
                </p>
              </div>

              <div className={`${cardBg} rounded-3xl p-6 md:p-8 border`}>
                <h2 className={`text-xl font-bold mb-4 ${textColor}`}>Key Features Implemented</h2>
                <ul className="flex flex-col gap-3.5 pl-0 list-none">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex gap-3 text-sm items-start">
                      <span 
                        className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[10px] font-black mt-0.5"
                        style={{
                          backgroundColor: `rgba(${project.glowColor}, 0.1)`,
                          color: `rgb(${project.glowColor})`
                        }}
                      >
                        ✓
                      </span>
                      <span className={subTextColor}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Side Column: Technical Challenges & Solutions */}
            <div className="flex flex-col gap-8">
              
              <div className={`${cardBg} rounded-3xl p-6 border flex flex-col gap-4`}>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-rose-500 mb-2">The Challenge</h3>
                  <p className={`text-xs md:text-sm leading-relaxed ${subTextColor}`}>
                    {project.challenges}
                  </p>
                </div>
                
                <hr className="border-black/5 dark:border-white/5" />
                
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-emerald-500 mb-2">The Solution</h3>
                  <p className={`text-xs md:text-sm leading-relaxed ${subTextColor}`}>
                    {project.solutions}
                  </p>
                </div>
              </div>

              <div className={`${panelBg} rounded-3xl p-6 border flex flex-col gap-4 text-center items-center justify-center`}>
                <span className="text-2xl animate-bounce">💡</span>
                <h4 className={`font-bold text-sm ${textColor}`}>Need custom integrations?</h4>
                <p className={`text-xs leading-normal ${subTextColor}`}>
                  Let&apos;s build a secure and fast web experience tailored to your metrics.
                </p>
                <Link href="/contact-us" className="btn_black text-xs py-2 px-5 hover:scale-95 transition-transform">
                  Start a Chat
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}
