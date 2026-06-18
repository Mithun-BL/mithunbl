"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

type CounterProps = {
  endValue: number;
  suffix?: string;
  duration?: number;
};

const Counter: React.FC<CounterProps> = ({
  endValue,
  suffix = "",
  duration = 2,
}) => {
  // Set initial state to endValue for SEO/SSR friendliness.
  // This will prevent layout shift and help search engines read the final statistic.
  const [count, setCount] = useState<number>(endValue);

  useEffect(() => {
    // Set counting target object
    const obj = { val: 0 };
    setCount(0); // Start the count-up from 0 on the client side

    const tween = gsap.to(obj, {
      val: endValue,
      duration: duration,
      ease: "power2.out", // Exponential ease-out (fast start, slow smooth finish)
      onUpdate: () => {
        setCount(Math.floor(obj.val));
      },
    });

    return () => {
      tween.kill();
    };
  }, [endValue, duration]);

  return (
    <span className="font-bold">
      {count}
      <span className="font-medium text-current opacity-70 ml-1">{suffix}</span>
    </span>
  );
};

export default Counter;