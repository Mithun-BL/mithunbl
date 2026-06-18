"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS, Project } from '@/data/projects';

const ProjectCard: React.FC<{ project: Project; isGlobalDark: boolean }> = ({ project, isGlobalDark }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const cardBg = isGlobalDark 
    ? "bg-slate-950/45 border-white/[0.05] hover:bg-slate-950/70" 
    : "bg-white border-black/[0.04] hover:bg-white/80";

  const shadowStyle = isHovered 
    ? `0 20px 40px -15px rgba(${project.glowColor}, 0.15)`
    : isGlobalDark ? 'none' : '0 10px 30px rgba(0, 0, 0, 0.01)';

  const borderStyle = isHovered
    ? `rgba(${project.glowColor}, 0.35)`
    : isGlobalDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';

  return (
    <div
      className={`group relative flex flex-col rounded-[32px] border ${cardBg} transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
      style={{
        borderColor: borderStyle,
        boxShadow: shadowStyle,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interactive Radial Follow-Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
        style={{
          background: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, rgba(${project.glowColor}, 0.12), transparent 85%)`,
        }}
      />

      {/* Backdrop Ambient Corner Orb */}
      <div
        className="absolute -right-20 -top-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
        style={{ backgroundColor: `rgb(${project.glowColor})` }}
      />

      {/* Project Mockup Image Wrapper */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/5 dark:bg-white/5 border-b border-black/[0.05] dark:border-white/[0.05]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-w-768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority
        />
        
        {/* Soft dark overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Card Details */}
      <div className="flex flex-col p-8 relative z-10 flex-grow">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className={`text-[9px] font-black uppercase tracking-[0.1em] px-2.5 py-1 rounded-full border ${
                isGlobalDark 
                  ? 'bg-white/5 border-white/5 text-white/50' 
                  : 'bg-black/5 border-black/5 text-black-clr/50'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className={`text-xl font-bold tracking-tight mb-2 transition-colors duration-300 ${isGlobalDark ? 'text-white' : 'text-black-clr'}`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-6 flex-grow transition-colors duration-300 ${isGlobalDark ? 'text-white/60' : 'text-black-clr/60'}`}>
          {project.description}
        </p>

        {/* Action Link CTA */}
        <Link 
          href={`/projects/${project.slug}`}
          className={`group/link inline-flex items-center gap-1 text-xs font-black uppercase tracking-widest ${
            isGlobalDark ? 'text-violet-400 group-hover:text-violet-300' : 'text-violet-600 group-hover:text-violet-500'
          } transition-colors duration-300 self-start`}
        >
          <span>Explore Case Study</span>
          <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default function ProjectsPage() {
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

  return (
    <>
      <article className="aboveWebSpacing"></article>
      <section className="mb-16 px-4 md:px-8">
        <div className="container max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Back Button */}
          <div className="w-full flex justify-start mb-6">
            <Link 
              href="/" 
              className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-opacity duration-300 ${
                isGlobalDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
              }`}
            >
              <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-600 dark:text-violet-400 mb-6 select-none">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Portfolio</span>
          </div>

          {/* Title */}
          <h1 className={`text-4xl md:text-6xl font-black text-center mb-4 leading-tight tracking-tight transition-colors duration-1000 ${isGlobalDark ? 'text-white' : 'text-black-clr'} max-w-3xl mx-auto`}>
            All Case Studies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500">Created Projects</span>
          </h1>
          
          <p className={`text-center max-w-xl mx-auto mb-16 text-base font-medium transition-colors duration-1000 ${isGlobalDark ? 'text-white/60' : 'text-black-clr/60'}`}>
            A comprehensive look into detailed client applications, responsive frontends, and analytical developer tooling I have engineered.
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} isGlobalDark={isGlobalDark} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
