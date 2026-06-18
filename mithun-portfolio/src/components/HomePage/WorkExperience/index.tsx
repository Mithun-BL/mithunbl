"use client";

import React, { useState, useEffect } from 'react';

interface TimelineItem {
  title: string;
  subtitle: string;
  location: string;
  period: string;
  details: string;
  tags: string[];
  logoText: string;
  logoGradient: string;
}

const EXPERIENCE_DATA: TimelineItem[] = [
  {
    title: 'Software Engineer - III',
    subtitle: 'Terralogic Software Solutions Pvt Ltd',
    location: 'Bangalore, Karnataka',
    period: 'June 2022 - Present',
    details: 'Led front-end development of high-performance React and Next.js applications. Refactored state systems and integrated REST APIs with strict TypeScript contracts, optimizing page speeds.',
    tags: ['React', 'Next.js', 'TypeScript', 'REST APIs', 'Performance'],
    logoText: 'T',
    logoGradient: 'from-violet-600 to-indigo-600'
  },
  {
    title: 'Junior Software Engineer',
    subtitle: 'Codehive IT Solutions Pvt Ltd',
    location: 'Ballari, Karnataka',
    period: 'June 2021 - May 2022',
    details: 'Built modular user interface components using HTML5, CSS3, JavaScript, and Bootstrap. Collaborated with design teams to deliver pixel-perfect responsive web layouts.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive'],
    logoText: 'C',
    logoGradient: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Freelance Web Developer',
    subtitle: 'Self-Employed / Open Source',
    location: 'Remote, India',
    period: 'Oct 2020 - May 2021',
    details: 'Designed and developed responsive landing pages, custom React user interfaces, and custom CSS layouts for local businesses. Contributed to open-source libraries, improving code structure and UI animations.',
    tags: ['React', 'CSS Grid', 'Sass', 'Git', 'UI Design'],
    logoText: 'F',
    logoGradient: 'from-indigo-600 to-blue-500'
  }
];

const EDUCATION_DATA: TimelineItem[] = [
  {
    title: 'Education - BE',
    subtitle: 'Proudhadevaraya Institute of Technology',
    location: 'Hosapete, Karnataka',
    period: 'Sep 2016 - Oct 2020',
    details: 'Bachelor of Engineering in Computer Science. Studied core engineering concepts, data structures, algorithm design, OOP, and database systems.',
    tags: ['Computer Science', 'Data Structures', 'OOP', 'Algorithms'],
    logoText: 'P',
    logoGradient: 'from-purple-500 to-indigo-600'
  },
  {
    title: 'Education - PUC',
    subtitle: 'Ballari independent PU College',
    location: 'Ballari, Karnataka',
    period: 'June 2014 - April 2016',
    details: 'Pre-University Certificate (PCMCs) focusing on Mathematics, Physics, Chemistry, and Computer Science.',
    tags: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'],
    logoText: 'B',
    logoGradient: 'from-indigo-500 to-violet-600'
  },
  {
    title: 'Education - 10th / SSLC',
    subtitle: 'St\' Marys High School',
    location: 'HD Kote - Mysore, Karnataka',
    period: 'June 2013 - April 2014',
    details: 'Secondary School Leaving Certificate. Built foundational analytical capabilities and early interest in software logic.',
    tags: ['General Science', 'Mathematics', 'Logic Foundations'],
    logoText: 'S',
    logoGradient: 'from-blue-600 to-indigo-700'
  }
];

const TimelineCard: React.FC<{ item: TimelineItem; isGlobalDark: boolean; isLast?: boolean }> = ({ item, isGlobalDark, isLast = false }) => {
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
    ? "bg-slate-900/25 border-white/[0.06] hover:bg-slate-900/40" 
    : "bg-white border-black/[0.04] hover:bg-slate-50/50";

  const shadowStyle = isHovered 
    ? (isGlobalDark ? `0 25px 50px -12px rgba(139, 92, 246, 0.25)` : `0 25px 50px -12px rgba(99, 102, 241, 0.15)`)
    : isGlobalDark ? 'none' : '0 10px 30px rgba(0, 0, 0, 0.01)';

  const borderStyle = isHovered
    ? (isGlobalDark ? `rgba(139, 92, 246, 0.3)` : `rgba(99, 102, 241, 0.25)`)
    : isGlobalDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';

  return (
    <div className="relative pl-8 sm:pl-10 pb-12 group last:pb-0">
      {/* Vertical Timeline Track Line - Perfect Center Alignment */}
      {!isLast && (
        <div 
          className={`absolute left-[10px] sm:left-[15px] top-3 bottom-0 w-[2px] transition-all duration-500 ${
            isHovered
              ? "bg-gradient-to-b from-violet-500 via-indigo-500 to-blue-500"
              : "bg-slate-200 dark:bg-slate-800"
          }`}
        />
      )}

      {/* Timeline Node Dot - Perfect Center Alignment */}
      <div 
        className={`absolute left-1 sm:left-2 top-3 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
          isHovered
            ? "border-violet-500 bg-background scale-110 shadow-[0_0_10px_rgba(139,92,246,0.4)]"
            : "border-slate-300 dark:border-slate-700 bg-background"
        }`}
      >
        <div 
          className={`w-1.5 h-1.5 rounded-full transition-transform duration-500 ${
            isHovered ? "bg-violet-500" : "bg-transparent"
          }`}
        />
      </div>

      {/* Card Content */}
      <div
        className={`relative flex flex-col p-6 sm:p-7 rounded-[28px] border ${cardBg} transition-all duration-500 hover:-translate-y-1.5 overflow-hidden`}
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
            background: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.08), transparent 85%)`,
          }}
        />

        {/* Backdrop Ambient Corner Glow */}
        <div
          className="absolute -right-16 -top-16 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none bg-violet-500"
        />

        {/* Date and Location row with micro inline SVG icons */}
        <div className="flex flex-wrap items-center gap-2 mb-5 relative z-10">
          <span className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-semibold ${
            isGlobalDark 
              ? 'bg-violet-500/10 border-violet-500/20 text-violet-400' 
              : 'bg-indigo-600/10 border-indigo-600/20 text-indigo-600'
          }`}>
            <svg 
              className="w-3 h-3 mr-1.5 shrink-0" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {item.period}
          </span>
          <span className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-semibold ${
            isGlobalDark 
              ? 'bg-white/5 border-white/5 text-gray-400' 
              : 'bg-black/5 border-black/5 text-gray-600'
          }`}>
            <svg 
              className="w-3 h-3 mr-1.5 shrink-0" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {item.location}
          </span>
        </div>

        {/* Header content with Institution Logo Avatar */}
        <div className="flex gap-4 items-start mb-4 relative z-10">
          <div className={`w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br ${item.logoGradient} text-white flex items-center justify-center font-black text-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-transform duration-300 ring-1 ring-white/10 dark:ring-white/20`}>
            {item.logoText}
          </div>
          <div>
            <h3 className={`text-lg sm:text-xl font-bold tracking-tight mb-0.5 transition-colors duration-300 ${isGlobalDark ? 'text-white' : 'text-black-clr'}`}>
              {item.title}
            </h3>
            <h4 className={`text-xs font-semibold opacity-70 transition-colors duration-300 ${isGlobalDark ? 'text-white/75' : 'text-black-clr/75'}`}>
              {item.subtitle}
            </h4>
          </div>
        </div>

        {/* Details text */}
        <p className={`text-sm leading-relaxed mb-5 relative z-10 transition-colors duration-300 ${isGlobalDark ? 'text-white/60' : 'text-black-clr/60'}`}>
          {item.details}
        </p>

        {/* Technology/Skills tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto relative z-10">
          {item.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className={`text-[10px] font-semibold px-2.5 py-1 rounded-md border transition-colors ${
                isGlobalDark 
                  ? 'bg-slate-900 border-white/[0.05] text-gray-400 hover:border-violet-500/35 hover:text-violet-400 hover:bg-violet-500/5' 
                  : 'bg-slate-100 border-black/[0.04] text-slate-600 hover:border-indigo-600/30 hover:text-indigo-600 hover:bg-indigo-500/5'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Work = () => {
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

  const titleAccentClass = isGlobalDark 
    ? "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300" 
    : "text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-600";

  return (
    <section id="Experience" className="mb-16 px-4 md:px-8 overflow-hidden pt-12">
      <div className="container max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Journey Pill Badge */}
        <div className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-600 dark:text-violet-400 mb-6 select-none animate-pulse`}>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Journey</span>
        </div>

        {/* Title */}
        <h2 className={`text-3xl md:text-5xl font-black text-center mb-4 leading-tight tracking-tight transition-colors duration-1000 ${isGlobalDark ? 'text-white' : 'text-black-clr'} max-w-3xl mx-auto`}>
          Education & <span className={titleAccentClass}>Hands-On Experience</span>
        </h2>
        
        <p className={`text-center max-w-xl mx-auto mb-16 text-base font-medium transition-colors duration-1000 ${isGlobalDark ? 'text-white/60' : 'text-black-clr/60'}`}>
          A timeline of my academic background and professional engineering milestones in the IT industry.
        </p>

        {/* Dual Timelines Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full items-start">
          
          {/* Work Experience Section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8 border-b pb-4 border-black/5 dark:border-white/5">
              <div className={`p-2 rounded-xl ${isGlobalDark ? 'bg-violet-500/10 text-violet-400' : 'bg-indigo-600/10 text-indigo-600'}`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 className={`text-2xl font-black ${isGlobalDark ? 'text-white' : 'text-black-clr'}`}>
                Professional Experience
              </h3>
            </div>
            
            <div className="flex flex-col relative pl-2">
              {EXPERIENCE_DATA.map((item, index) => (
                <TimelineCard 
                  key={index} 
                  item={item} 
                  isGlobalDark={isGlobalDark} 
                  isLast={index === EXPERIENCE_DATA.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8 border-b pb-4 border-black/5 dark:border-white/5">
              <div className={`p-2 rounded-xl ${isGlobalDark ? 'bg-violet-500/10 text-violet-400' : 'bg-indigo-600/10 text-indigo-600'}`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className={`text-2xl font-black ${isGlobalDark ? 'text-white' : 'text-black-clr'}`}>
                Academic Background
              </h3>
            </div>
            
            <div className="flex flex-col relative pl-2">
              {EDUCATION_DATA.map((item, index) => (
                <TimelineCard 
                  key={index} 
                  item={item} 
                  isGlobalDark={isGlobalDark} 
                  isLast={index === EDUCATION_DATA.length - 1}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Work;
