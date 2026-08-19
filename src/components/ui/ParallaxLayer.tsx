"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";

/** Lightweight parallax layer for section backgrounds */
export function ParallaxLayer({
  className,
  children,
  speed = 0.25,
}: {
  className?: string;
  children?: React.ReactNode;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current || typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const el = ref.current;
    const tween = gsap.to(el, {
      yPercent: speed * -40,
      ease: "none",
      scrollTrigger: {
        trigger: el.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [speed, reduce]);

  return (
    <div ref={ref} className={className} aria-hidden>
      {children}
    </div>
  );
}
