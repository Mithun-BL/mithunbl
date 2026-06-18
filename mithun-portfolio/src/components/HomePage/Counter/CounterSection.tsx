"use client";

import { useState, useRef, useEffect } from "react";
import Counter from "./Counter";

type StatItem = {
  endValue: number;
  suffix?: string;
  label: string;
  delay: string;
  icon: React.ReactNode;
};

interface ThemeConfig {
  id: string;
  name: string;
  badgeBg: string;
  badgeBorder: string;
  sectionBgDark: string;
  sectionBgLight: string;
  gradientText: string;
  accentText: string;
  iconBgHoverDark: string;
  iconBgHoverLight: string;
  iconTextHover: string;
  glowRgb: string;
  cardBorderHoverDark: string;
  cardBorderHoverLight: string;
  cardShadowHoverDark: string;
  cardShadowHoverLight: string;
}

const THEMES: ThemeConfig[] = [
  {
    id: "lime",
    name: "Lime Neon",
    badgeBg: "bg-[#E3FF73]",
    badgeBorder: "border-[#E3FF73]",
    sectionBgDark: "bg-[#090C02]",
    sectionBgLight: "bg-[#FAFDF0]",
    gradientText: "from-[#E3FF73] to-[#A8FF35]",
    accentText: "text-[#E3FF73]",
    iconBgHoverDark: "group-hover:bg-[#E3FF73]/10",
    iconBgHoverLight: "group-hover:bg-[#E3FF73]/20",
    iconTextHover: "group-hover:text-[#88A300] dark:group-hover:text-[#E3FF73]",
    glowRgb: "227, 255, 115",
    cardBorderHoverDark: "group-hover:border-[#E3FF73]/40",
    cardBorderHoverLight: "group-hover:border-[#E3FF73]/60",
    cardShadowHoverDark: "group-hover:shadow-[0_0_30px_rgba(227,255,115,0.15)]",
    cardShadowHoverLight: "group-hover:shadow-[0_15px_30px_rgba(227,255,115,0.25)]",
  },
  {
    id: "violet",
    name: "Midnight Aurora",
    badgeBg: "bg-[#8B5CF6]",
    badgeBorder: "border-[#8B5CF6]",
    sectionBgDark: "bg-[#0B0816]",
    sectionBgLight: "bg-[#F5F2FF]",
    gradientText: "from-[#C084FC] to-[#8B5CF6]",
    accentText: "text-[#8B5CF6]",
    iconBgHoverDark: "group-hover:bg-[#8B5CF6]/15",
    iconBgHoverLight: "group-hover:bg-[#8B5CF6]/10",
    iconTextHover: "group-hover:text-[#6D28D9] dark:group-hover:text-[#C084FC]",
    glowRgb: "139, 92, 246",
    cardBorderHoverDark: "group-hover:border-[#8B5CF6]/40",
    cardBorderHoverLight: "group-hover:border-[#8B5CF6]/40",
    cardShadowHoverDark: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]",
    cardShadowHoverLight: "group-hover:shadow-[0_15px_30px_rgba(139,92,246,0.15)]",
  },
  {
    id: "orange",
    name: "Sunset Flare",
    badgeBg: "bg-[#F97316]",
    badgeBorder: "border-[#F97316]",
    sectionBgDark: "bg-[#140802]",
    sectionBgLight: "bg-[#FFF6F0]",
    gradientText: "from-[#FDBA74] to-[#F97316]",
    accentText: "text-[#F97316]",
    iconBgHoverDark: "group-hover:bg-[#F97316]/15",
    iconBgHoverLight: "group-hover:bg-[#F97316]/10",
    iconTextHover: "group-hover:text-[#C2410C] dark:group-hover:text-[#FDBA74]",
    glowRgb: "249, 115, 22",
    cardBorderHoverDark: "group-hover:border-[#F97316]/40",
    cardBorderHoverLight: "group-hover:border-[#F97316]/40",
    cardShadowHoverDark: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.18)]",
    cardShadowHoverLight: "group-hover:shadow-[0_15px_30px_rgba(249,115,22,0.15)]",
  },
  {
    id: "teal",
    name: "Teal Matrix",
    badgeBg: "bg-[#14B8A6]",
    badgeBorder: "border-[#14B8A6]",
    sectionBgDark: "bg-[#020C0A]",
    sectionBgLight: "bg-[#F0FDFB]",
    gradientText: "from-[#2DD4BF] to-[#14B8A6]",
    accentText: "text-[#14B8A6]",
    iconBgHoverDark: "group-hover:bg-[#14B8A6]/15",
    iconBgHoverLight: "group-hover:bg-[#14B8A6]/10",
    iconTextHover: "group-hover:text-[#0F766E] dark:group-hover:text-[#2DD4BF]",
    glowRgb: "20, 184, 166",
    cardBorderHoverDark: "group-hover:border-[#14B8A6]/40",
    cardBorderHoverLight: "group-hover:border-[#14B8A6]/40",
    cardShadowHoverDark: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.2)]",
    cardShadowHoverLight: "group-hover:shadow-[0_15px_30px_rgba(20,184,166,0.15)]",
  },
  {
    id: "pink",
    name: "Sakura Dream",
    badgeBg: "bg-[#EC4899]",
    badgeBorder: "border-[#EC4899]",
    sectionBgDark: "bg-[#16040C]",
    sectionBgLight: "bg-[#FFF1F6]",
    gradientText: "from-[#F472B6] to-[#EC4899]",
    accentText: "text-[#EC4899]",
    iconBgHoverDark: "group-hover:bg-[#EC4899]/15",
    iconBgHoverLight: "group-hover:bg-[#EC4899]/10",
    iconTextHover: "group-hover:text-[#BE185D] dark:group-hover:text-[#F472B6]",
    glowRgb: "236, 72, 153",
    cardBorderHoverDark: "group-hover:border-[#EC4899]/40",
    cardBorderHoverLight: "group-hover:border-[#EC4899]/40",
    cardShadowHoverDark: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.18)]",
    cardShadowHoverLight: "group-hover:shadow-[0_15px_30px_rgba(236,72,153,0.15)]",
  },
];

const CountersSection: React.FC = () => {
  const activeTheme = THEMES[1]; // Static Violet Theme config
  const [startCounting, setStartCounting] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setStartCounting(true);
          setHasEntered(true);
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      { threshold: 0.15 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const stats: StatItem[] = [
    {
      endValue: 4,
      suffix: "",
      label: "Years of Experience",
      delay: "100ms",
      icon: (
        <svg
          className="w-7 h-7 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      endValue: 15,
      suffix: "+",
      label: "Projects Completed",
      delay: "250ms",
      icon: (
        <svg
          className="w-7 h-7 transition-transform duration-500 group-hover:scale-110 group-hover:stroke-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      ),
    },
    {
      endValue: 3000,
      suffix: "+",
      label: "Code Commits",
      delay: "400ms",
      icon: (
        <svg
          className="w-7 h-7 transition-transform duration-500 group-hover:scale-110 group-hover:stroke-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v4.5m0 9V21M3 12h4.5m9 0H21"
          />
        </svg>
      ),
    },
  ];

  // Dynamic Theme Styling Mappings (Always dark / black UI)
  const sectionBg = activeTheme.sectionBgDark;
  const headerTextColor = "text-white";
  const descTextColor = "text-white/60";

  
  // Card elements
  const cardBg = "bg-white/[0.02] hover:bg-white/[0.04]";
  const cardBorder = "border-white/5";
  const cardBorderHover = activeTheme.cardBorderHoverDark;
  const cardShadowHover = activeTheme.cardShadowHoverDark;
  const cardTopBorder = "via-white/10";
  const iconBg = "bg-white/5 text-white/70";
  const iconBgHover = activeTheme.iconBgHoverDark;
  
  // Glow settings
  const mixBlendMode = "mix-blend-screen";
  const glowOpacity = "opacity-30";
  const cursorGlowIntensity = 0.12;

  // Text values
  const textValueColor = "text-white";
  const labelTextColor = "text-white/45 group-hover:text-white/80";

  return (
    <section
      ref={sectionRef}
      className={`relative ${sectionBg} py-24 md:py-36 mb-16 overflow-hidden transition-colors duration-1000 ease-in-out`}
    >

      {/* Glowing Backdrop Orbs */}
      <div
        className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full blur-[130px] transition-all duration-[1000ms] pointer-events-none ${glowOpacity} ${mixBlendMode}`}
        style={{ backgroundColor: `rgba(${activeTheme.glowRgb}, 0.25)` }}
      />
      <div
        className={`absolute top-1/3 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[150px] transition-all duration-[1000ms] pointer-events-none ${glowOpacity} ${mixBlendMode}`}
        style={{ backgroundColor: `rgba(${activeTheme.glowRgb}, 0.2)` }}
      />

      <div className="container relative z-10 px-4 mx-auto">
        {/* Header & Journey Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-16 max-w-6xl mx-auto border-b border-white/5 pb-8 transition-colors duration-1000">
          <div>
            <h2 className={`text-3xl md:text-5xl font-extrabold tracking-tight ${headerTextColor} mb-3 transition-colors duration-1000`}>
              My Coding Journey
            </h2>
            <p className={`${descTextColor} text-sm md:text-base max-w-xl transition-colors duration-1000`}>
              Proven track record of building performant products, shipping clean code, and solving complex problems.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`group relative flex flex-col items-center justify-center p-10 rounded-[32px] border ${cardBorder} ${cardBg} backdrop-blur-md shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 overflow-hidden ${cardBorderHover} ${cardShadowHover} ${
                hasEntered
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: stat.delay }}
              onMouseMove={handleMouseMove}
            >
              {/* Cursor tracking glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(${activeTheme.glowRgb}, ${cursorGlowIntensity}), transparent 85%)`,
                }}
              />

              {/* Top border highlight line */}
              <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent ${cardTopBorder} to-transparent`} />

              {/* Animated Icon Container */}
              <div className={`mb-6 p-4 rounded-2xl ${iconBg} ${iconBgHover} ${activeTheme.iconTextHover} transition-all duration-500 shadow-md group-hover:scale-110 group-hover:-translate-y-1`}>
                {stat.icon}
              </div>

              {/* Smooth Animated Count Value */}
              <h3 className={`text-6xl md:text-[80px] font-black tracking-tighter leading-none ${textValueColor} transition-colors duration-500 select-none`}>
                {startCounting ? (
                  <Counter endValue={stat.endValue} suffix={stat.suffix} />
                ) : (
                  <span>0</span>
                )}
              </h3>

              {/* Styled Stat Label */}
              <p className={`text-xs font-bold tracking-[0.2em] uppercase mt-5 ${labelTextColor} transition-colors duration-500 text-center select-none`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountersSection;