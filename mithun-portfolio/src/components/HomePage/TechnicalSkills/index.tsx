"use client";

import React, { useState } from 'react';

const Skills = () => {
  const [showMore, setShowMore] = useState(false);

  const skills = [
    { title: 'HTML', description: 'Building the structure of websites' },
    { title: 'CSS', description: 'Creating responsive, visually appealing layouts' },
    { title: 'SCSS', description: 'Writing cleaner and more maintainable CSS' },
    { title: 'Bootstrap', description: 'Building mobile-first, responsive designs' },
    { title: 'Tailwind', description: 'Utility-first CSS framework' },
    { title: 'JavaScript', description: 'Making websites interactive and dynamic' },
    { title: 'ReactJS', description: 'Building fast, reusable UI components' },
    { title: 'NextJS', description: 'Framework for building full-stack web applications' },
    { title: 'TypeScript', description: 'Adding type safety to JavaScript' },
  ];

  const visibleSkills = showMore ? skills : skills.slice(0, 6);

  return (
    <section id="Skills" className="mb-[100px] px-4 md:px-8">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 pb-3">
          Tech Stacks & Skills Behind My Web Creations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleSkills.map((skill, index) => (
            <div
              key={index}
              className="group relative overflow-hidden z-0 p-8 rounded-[20px] bg-white text-black border border-[#d8dce4] shadow-[0_5px_5px_0_rgba(233,240,243,0.5)] transition-all duration-[800ms] ease-in-out hover:text-white"
            >
              {/* Sliding background */}
              <div className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-[#2f2f91] transition-all duration-[800ms] ease-in-out -z-10"></div>
              
              <h4 className="text-xl font-bold mb-2 transition-colors duration-[800ms]">
                {skill.title}
              </h4>
              <p className="text-sm opacity-80 min-h-[48px] line-clamp-2 transition-colors duration-[800ms]">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => setShowMore(!showMore)}
            className="btn_bdr text-decoration-none focus:outline-none"
          >
            {showMore ? 'View Less' : 'View More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;