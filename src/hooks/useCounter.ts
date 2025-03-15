import { useState, useEffect } from "react";

interface UseCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  shouldStart?: boolean;
}

export const useCounter = ({
  end,
  duration = 2000,
  delay = 0,
  shouldStart = false,
}: UseCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      setCount(0);
      return;
    }

    let startTime: number;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(progress * end);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration, delay, shouldStart]);

  return Math.round(count * 10) / 10;
};
