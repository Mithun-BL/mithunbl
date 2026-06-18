"use client";

import React, { useState, useEffect } from 'react';

interface SkillItem {
  title: string;
  description: string;
  glowColor: string;
  icon: React.ReactNode;
}

const SKILLS_DATA: SkillItem[] = [
  {
    title: 'HTML',
    description: 'Building semantic, SEO-friendly, and fully accessible standard website structures.',
    glowColor: '241, 101, 41', // Orange
    icon: (
      <svg className="w-8 h-8 text-[#F16529]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2zm17 5.4H7.5l.2 2.6H18l-.5 5.7-5.5 1.5-5.5-1.5-.4-3.8H3.7l.6 6.3L12 20.3l7.7-2.1z"/>
      </svg>
    )
  },
  {
    title: 'CSS',
    description: 'Styling complex, fluid grid columns, flexboxes, and animations across devices.',
    glowColor: '38, 77, 228', // Blue
    icon: (
      <svg className="w-8 h-8 text-[#264de4]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2zm17 5.4H5.3l.3 3h12.5l-.3 3.5H5.8l.2 3.1h9.3l-.3 3.3-3 1-3-1-.2-2.1H5.8l.4 5.3 5.8 1.9 5.8-1.9.9-11.1z"/>
      </svg>
    )
  },
  {
    title: 'SCSS',
    description: 'Organizing clean stylesheet codebases with custom variables, mixins, and nested tags.',
    glowColor: '207, 100, 154', // Sass Pink
    icon: (
      <svg className="w-8 h-8 text-[#cf649a]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.9 2.5c-2.3 0-4.5.9-6.1 2.5-1.6 1.6-2.5 3.8-2.5 6.1s.9 4.5 2.5 6.1c1.6 1.6 3.8 2.5 6.1 2.5 2.2 0 4.3-.8 5.8-2.3l-2.1-2.1c-.9.9-2.3 1.4-3.7 1.4-2.8 0-5.1-2.3-5.1-5.1s2.3-5.1 5.1-5.1c1.4 0 2.8.5 3.7 1.4l2.1-2.1c-1.5-1.5-3.6-2.3-5.8-2.3zm8.9 4.3v4.3h-4.3v1.8h4.3v4.3h1.8v-4.3h4.3v-1.8h-4.3v-4.3h-1.8z" />
      </svg>
    )
  },
  {
    title: 'Bootstrap',
    description: 'Prototyping responsive web layouts with mobile-first grid layouts and clean templates.',
    glowColor: '112, 44, 241', // Bootstrap Purple
    icon: (
      <svg className="w-8 h-8 text-[#7952b3]" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.8 14.5h-2.1v-9h2.95c1.47 0 2.29.69 2.29 1.95 0 .93-.53 1.54-1.37 1.74v.05c1.08.15 1.76.84 1.76 1.95 0 1.45-1.04 2.31-2.6 2.31H10.2zm.8-6.15h.69c.8 0 1.25-.33 1.25-.87s-.45-.87-1.25-.87H11v1.74zm0 3.16h.89c.89 0 1.39-.37 1.39-.98s-.5-1-1.39-1H11v1.98z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: 'Tailwind',
    description: 'Crafting modern designs rapidly with lightweight, utility-first CSS layout classes.',
    glowColor: '56, 189, 248', // Tailwind Cyan
    icon: (
      <svg className="w-8 h-8 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M12 16c-3.333 0-5.333-1.667-6-5 1.333-1 2.667-1 4 0-.667.667-1 .667-1 0 .667-2.667 2.667-3.333 6-2-.667 3.333.667 4 4 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: 'JavaScript',
    description: 'Powering rich, interactive frontends with synchronous, modern ES6+ features.',
    glowColor: '247, 223, 30', // JS Yellow
    icon: (
      <svg className="w-8 h-8 text-[#F7DF1E]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 0H0v24h24V0zM11.9 16.5c0 1.8-1 2.7-3 2.7-1.7 0-2.6-.8-3-2.1l1.6-1c.3.7.7 1.1 1.4 1.1.8 0 1.3-.4 1.3-1.2V9.3h1.8v7.2zm7.1 2.7c-2 0-3.3-1.1-3.3-2.9h1.8c.1.9.7 1.3 1.5 1.3.7 0 1.2-.3 1.2-.9 0-1.3-3.2-1-3.2-3.8 0-1.5 1.2-2.7 3.1-2.7 1.8 0 3 .9 3.2 2.4h-1.8c-.1-.7-.6-1-1.3-1-.6 0-1.1.2-1.1.7 0 1.1 3.2.8 3.2 3.7.1 1.7-1.1 2.8-3.4 2.8z"/>
      </svg>
    )
  },
  {
    title: 'ReactJS',
    description: 'Orchestrating modular UI views with complex state systems and standard lifecycle hooks.',
    glowColor: '97, 218, 251', // React Cyan
    icon: (
      <svg className="w-8 h-8 text-[#61DAFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    title: 'NextJS',
    description: 'Configuring fully optimized dynamic routes, layouts, server actions, and SSR processes.',
    glowColor: '148, 163, 184', // Next Slate
    icon: (
      <svg className="w-8 h-8 text-black dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M7.5 16.5V7.5L16 16.5V7.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: 'TypeScript',
    description: 'Scaling large React products with type validation, helper utility templates, and generics.',
    glowColor: '49, 120, 198', // TS Blue
    icon: (
      <div className="w-8 h-8 bg-[#3178C6] text-white flex items-center justify-center rounded-[6px] text-xs font-black tracking-tighter shadow-sm select-none">TS</div>
    )
  }
];

const SkillCard: React.FC<{ skill: SkillItem; isGlobalDark: boolean }> = ({ skill, isGlobalDark }) => {
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
    ? `0 20px 40px -15px rgba(${skill.glowColor}, 0.15)`
    : isGlobalDark ? 'none' : '0 10px 30px rgba(0, 0, 0, 0.01)';

  const borderStyle = isHovered
    ? `rgba(${skill.glowColor}, 0.35)`
    : isGlobalDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';

  return (
    <div
      className={`group relative flex flex-col p-8 rounded-[30px] border ${cardBg} transition-all duration-500 hover:-translate-y-2 select-none overflow-hidden`}
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
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, rgba(${skill.glowColor}, 0.15), transparent 85%)`,
        }}
      />

      {/* Backdrop Ambient Corner Orb */}
      <div
        className="absolute -right-16 -top-16 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
        style={{ backgroundColor: `rgb(${skill.glowColor})` }}
      />

      {/* Icon & Title Header */}
      <div className="flex items-center justify-between mb-5 relative z-10">
        <div 
          className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/5 border border-black/5 dark:border-white/5 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1"
          style={{
            boxShadow: isHovered ? `0 10px 20px -5px rgba(${skill.glowColor}, 0.2)` : ''
          }}
        >
          {skill.icon}
        </div>
        
        {/* Decorative Subtle Background Index */}
        <span className={`text-4xl font-black opacity-[0.03] dark:opacity-[0.05] tracking-tighter ${isGlobalDark ? 'text-white' : 'text-black'}`}>
          {skill.title.slice(0, 2)}
        </span>
      </div>

      {/* Details */}
      <h3 className={`text-xl font-bold tracking-tight mb-2 relative z-10 transition-colors duration-300 ${isGlobalDark ? 'text-white' : 'text-black-clr'}`}>
        {skill.title}
      </h3>
      <p className={`text-sm leading-relaxed relative z-10 transition-colors duration-300 ${isGlobalDark ? 'text-white/60' : 'text-black-clr/60'}`}>
        {skill.description}
      </p>
    </div>
  );
};

const Skills = () => {
  const [showMore, setShowMore] = useState(false);
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

  const visibleSkills = showMore ? SKILLS_DATA : SKILLS_DATA.slice(0, 6);

  return (
    <section id="Skills" className="mb-16 px-4 md:px-8 overflow-hidden pt-12">
      <div className="container max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Tech Stack Glowing Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-600 dark:text-violet-400 mb-6 select-none animate-pulse">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Tech Stack</span>
        </div>

        {/* Typographic Title */}
        <h2 className={`text-3xl md:text-5xl font-black text-center mb-4 leading-tight tracking-tight transition-colors duration-1000 ${isGlobalDark ? 'text-white' : 'text-black-clr'} max-w-3xl mx-auto`}>
          Skills Behind My <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500">Web Creations</span>
        </h2>
        
        <p className={`text-center max-w-xl mx-auto mb-16 text-base font-medium transition-colors duration-1000 ${isGlobalDark ? 'text-white/60' : 'text-black-clr/60'}`}>
          A curated suite of modern technologies, libraries, and frameworks I use to create stunning, high-performance web applications.
        </p>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {visibleSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} isGlobalDark={isGlobalDark} />
          ))}
        </div>

        {/* Toggle Button */}
        <div className="text-center mt-14">
          <button
            onClick={() => setShowMore(!showMore)}
            className={`group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-[0.1em] border transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] ${
              isGlobalDark
                ? "border-white/10 text-white bg-white/5 hover:bg-white/10 hover:border-white/20"
                : "border-black/10 text-black bg-black/5 hover:bg-black/10 hover:border-black/20"
            }`}
          >
            <span>{showMore ? 'View Less' : 'View More'}</span>
            <svg 
              className={`w-3.5 h-3.5 transition-transform duration-300 ${showMore ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Skills;