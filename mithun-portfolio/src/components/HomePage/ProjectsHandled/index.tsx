"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS, Project } from '@/data/projects';

const ProjectCard: React.FC<{ project: Project; isGlobalDark: boolean }> = ({ project, isGlobalDark }) => {
  const textColor = isGlobalDark ? "text-white" : "text-black-clr";
  const subTextColor = isGlobalDark ? "text-white/50" : "text-black-clr/55";

  return (
    <div className="group flex flex-col w-full text-left">

      {/* Project Mockup Image Wrapper */}
      <Link href={`/projects/${project.slug}`} className="block relative w-full aspect-[16/10] overflow-hidden rounded-[24px] bg-black/5 dark:bg-white/5 border border-black/[0.05] dark:border-white/[0.05]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-w-768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority
        />
        {/* Subtle dark overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>

      {/* Card Details (Placed cleanly below the image) */}
      <div className="flex flex-col mt-4">

        {/* Tag & Timeline Line */}
        <div className="flex items-center gap-2 text-xs font-medium  tracking-wider">
          <span className={` ${isGlobalDark ? 'text-white' : 'text-black'}`}>
            {project.tags[0]}
          </span>
          <span className={`opacity-30 ${isGlobalDark ? 'text-white' : 'text-black-clr'}`}>•</span>
          <span className={subTextColor}>
            {project.timeline}
          </span>
        </div>

        {/* Title */}
        <Link href={`/projects/${project.slug}`}>
          <h3 className={`text-lg md:text-xl font-bold mt-2.5 mb-1.5 transition-colors duration-300 hover:text-violet-500 dark:hover:text-violet-400 ${textColor}`}>
            {project.title}
          </h3>
        </Link>

        {/* Role Subheading */}
        <p className={`text-xs font-semibold ${subTextColor}`}>
          {project.role}
        </p>

      </div>
    </div>
  );
};

const ProjectsHandled = () => {
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

  return (
    <section id="Projects" className="mb-16 px-4 md:px-8 overflow-hidden pt-12">
      <div className="container max-w-6xl mx-auto flex flex-col items-center">

        {/* Grid Header aligning Title/Subtitle to the left, and "View all Projects" to the right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 w-full border-b border-black/5 dark:border-white/5 pb-8 transition-colors duration-1000 items-end">
          <div className="flex flex-col gap-2.5 text-left md:col-span-8 lg:col-span-9">
            {/* Title */}
            <h2 className={`text-3xl md:text-5xl font-black leading-tight tracking-tight transition-colors duration-1000 ${isGlobalDark ? 'text-white' : 'text-black-clr'}`}>
              Featured Projects
            </h2>
            <p className={`max-w-2xl text-base font-medium transition-colors duration-1000 ${isGlobalDark ? 'text-white/60' : 'text-black-clr/60'}`}>
              A handpicked selection of production-ready web applications, SaaS tools, and dashboards I have engineered.
            </p>
          </div>

          <div className="flex justify-start md:justify-end md:col-span-4 lg:col-span-3">
            <Link
              href="/projects"
              className={`underline underline-offset-4 font-semibold text-sm hover:opacity-75 transition-opacity whitespace-nowrap mb-1 ${isGlobalDark ? 'text-white' : 'text-black-clr'
                }`}
            >
              View all Projects
            </Link>
          </div>
        </div>

        {/* Projects Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 w-full">
          {PROJECTS.slice(0, 3).map((project, index) => (
            <ProjectCard key={index} project={project} isGlobalDark={isGlobalDark} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsHandled;