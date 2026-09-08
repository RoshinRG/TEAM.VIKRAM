"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type AnimatedCounterProps = {
  value: number | string;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function AnimatedCounter({
  value,
  suffix = "",
  duration = 1.6,
  className,
}: AnimatedCounterProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState<number | string>(reduce ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (typeof value === "string" || reduce) {
      setDisplay(value);
      if (textRef.current) textRef.current.textContent = String(value);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const numValue = typeof value === "number" ? value : Number(value);

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(numValue * eased);

      // Render-critical direct text update; avoids triggering React reconciliation on every frame
      if (textRef.current) {
        textRef.current.textContent = String(current);
      }

      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        // Defer non-critical React state sync to the next task
        setTimeout(() => {
          setDisplay(numValue);
        }, 0);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration, reduce]);

  return (
    <span ref={containerRef} className={className}>
      <span ref={textRef}>{display}</span>
      {suffix}
    </span>
  );
}

