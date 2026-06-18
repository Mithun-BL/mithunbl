"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Accessibility & Mobile Optimization: Disable custom cursor on touch devices
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      (window.matchMedia && window.matchMedia("(pointer: coarse)").matches);

    if (isTouchDevice) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Show cursor elements once we confirm it's a desktop device
    gsap.set([dot, ring], { opacity: 1 });

    // 2. Hide default cursor globally on desktop
    const style = document.createElement("style");
    style.innerHTML = `
      body, a, button, input, select, textarea, [role="button"], .clickable {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    // Set initial position out of view
    gsap.set(dot, { xPercent: -50, yPercent: -50, x: -100, y: -100 });
    gsap.set(ring, { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    // 3. Initialize GSAP QuickTo for 60fps+ tracking
    // Inner dot has a fast response time (almost instant tracking, but slightly glides)
    const xDotTo = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power2.out" });
    const yDotTo = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power2.out" });

    // Outer ring has a slower, spring-like response time (smooth lagging effect)
    const xRingTo = gsap.quickTo(ring, "x", { duration: 0.6, ease: "power2.out" });
    const yRingTo = gsap.quickTo(ring, "y", { duration: 0.6, ease: "power2.out" });

    // Track mouse coordinates
    const onMouseMove = (e: MouseEvent) => {
      xDotTo(e.clientX);
      yDotTo(e.clientY);
      xRingTo(e.clientX);
      yRingTo(e.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);

    // 4. Hover states - Event delegation for performance and support of dynamic elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [role='button'], input, select, textarea, .clickable")
      ) {
        // Expand ring, add light background, shrink dot slightly
        gsap.to(ring, {
          scale: 1.6,
          backgroundColor: "rgba(43, 71, 252, 0.08)",
          borderColor: "#2b47fc",
          duration: 0.45,
          ease: "power2.out",
        });
        gsap.to(dot, {
          scale: 0.7,
          backgroundColor: "#2b47fc",
          duration: 0.45,
          ease: "power2.out",
        });
      } else {
        // Reset to default styling
        gsap.to(ring, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "#2b47fc",
          duration: 0.45,
          ease: "power2.out",
        });
        gsap.to(dot, {
          scale: 1,
          backgroundColor: "#2b47fc",
          duration: 0.45,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mouseover", onMouseOver);

    // 5. Active / Clicking feedback
    const onMouseDown = () => {
      gsap.to(ring, { scale: 0.8, duration: 0.15, ease: "power2.out" });
      gsap.to(dot, { scale: 1.2, duration: 0.15, ease: "power2.out" });
    };

    const onMouseUp = () => {
      gsap.to(ring, { scale: 1.0, duration: 0.15, ease: "power2.out" });
      gsap.to(dot, { scale: 1.0, duration: 0.15, ease: "power2.out" });
    };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // 6. Viewport Boundary Handling: Fade out when cursor leaves, fade in when it returns
    const onMouseLeaveWindow = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.25 });
    };

    const onMouseEnterWindow = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.25 });
    };

    document.addEventListener("mouseleave", onMouseLeaveWindow);
    document.addEventListener("mouseenter", onMouseEnterWindow);

    // Clean up all events and restore default cursor on unmount
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeaveWindow);
      document.removeEventListener("mouseenter", onMouseEnterWindow);
      style.remove();
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#2b47fc] pointer-events-none z-[9999] opacity-0"
      />
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-[#2b47fc] pointer-events-none z-[9999] opacity-0"
      />
    </>
  );
}
