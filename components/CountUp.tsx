"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  from?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
}

export default function CountUp({
  target,
  from = 0,
  prefix = "",
  suffix = "",
  duration = 1800,
  decimals = 0,
}: CountUpProps) {
  const [value, setValue] = useState(from);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Trigger when element scrolls into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Run the count-up animation
  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [started, target, duration, decimals]);

  const display =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.floor(value).toLocaleString();

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}
