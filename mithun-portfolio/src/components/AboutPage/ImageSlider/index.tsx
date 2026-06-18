"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  imageSrc: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ imageSrc }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleMove(e.clientX);
    setIsDragging(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
      setIsDragging(true);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      className="relative w-full aspect-square md:aspect-[4/5] rounded-[32px] overflow-hidden select-none border border-black/[0.06] dark:border-white/[0.06] shadow-xl cursor-ew-resize"
    >
      {/* Background Layer: Color Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={imageSrc} 
          alt="Mithun BL Portrait Color" 
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover pointer-events-none"
        />
      </div>

      {/* Overlay Layer: Grayscale Image (Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
        }}
      >
        <Image 
          src={imageSrc} 
          alt="Mithun BL Portrait Black and White" 
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover grayscale pointer-events-none"
        />
      </div>

      {/* Vertical Slider Bar Indicator */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle Button */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white text-black shadow-[0_4px_20px_rgba(0,0,0,0.25)] border border-gray-100 flex items-center justify-center pointer-events-auto z-30 transition-transform hover:scale-105 active:scale-95 cursor-ew-resize"
        >
          {/* Arrow icons (< | >) */}
          <div className="flex items-center gap-1 select-none font-semibold text-gray-700 text-xs">
            <span>&#9664;</span>
            <span>&#9654;</span>
          </div>
        </div>
      </div>

      {/* Badges pointing out light/color states */}
      <span className="absolute bottom-4 left-4 bg-black/60 text-white text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm pointer-events-none z-10 border border-white/10 uppercase">
        Grayscale
      </span>
      <span className="absolute bottom-4 right-4 bg-black/60 text-white text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm pointer-events-none z-10 border border-white/10 uppercase">
        Color
      </span>
    </div>
  );
};

export default ImageSlider;
