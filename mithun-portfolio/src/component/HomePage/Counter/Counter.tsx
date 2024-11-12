// components/Counter/Counter.tsx
import { useState, useEffect } from 'react';

type CounterProps = {
  endValue: number;
  suffix?: string;
  duration?: number;
};

const Counter: React.FC<CounterProps> = ({ endValue, suffix = '', duration = 3000 }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let startValue = 0;
    const increment = endValue / (duration / 50);

    const counterInterval = setInterval(() => {
      startValue += increment;
      if (startValue >= endValue) {
        setCount(endValue);
        clearInterval(counterInterval);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 50);

    return () => clearInterval(counterInterval);
  }, [endValue, duration]);

  return (
    <>
      <h3>{count} <span>{suffix} </span> </h3>
    </>
  );
};

export default Counter;