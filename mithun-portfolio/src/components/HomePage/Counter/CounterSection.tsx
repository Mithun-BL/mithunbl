"use client";

import Counter from './Counter';
import { useState, useRef, useEffect } from 'react';

const CountersSection: React.FC = () => {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setStartCounting(true);
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      { threshold: 0.5 }
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

  return (
    <section ref={sectionRef} className="bg-[#E3FF73] py-20 md:py-[200px] mb-[100px] text-black">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="text-center">
            {startCounting && <Counter endValue={4} />}
            <p className="text-[20px] font-medium mt-2">Years of Experience</p>
          </div>
          <div className="text-center">
            {startCounting && <Counter endValue={15} suffix=" + " />}
            <p className="text-[20px] font-medium mt-2">Projects Completed</p>
          </div>
          <div className="text-center">
            {startCounting && <Counter endValue={3000} suffix=" + " />}
            <p className="text-[20px] font-medium mt-2">Code Commits</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountersSection;