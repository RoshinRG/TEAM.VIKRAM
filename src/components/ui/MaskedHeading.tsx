"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";

type HeadingTagName = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";

export type MaskedHeadingProps = {
  text?: string;
  tag?: HeadingTagName;
  mediaType?: "image" | "video";
  src?: string;
  poster?: string;
  fillScale?: number;
  parallax?: number;
  drift?: number;
  reveal?: "rise" | "wipe" | "fade" | "none";
  trigger?: "view" | "mount" | "hover";
  brightness?: number;
  saturation?: number;
  grayscale?: boolean;
  duration?: number;
  stagger?: number;
  align?: "left" | "center" | "right";
  weight?: number;
  tracking?: number;
  lineHeight?: number;
  textScale?: number;
  className?: string;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function MaskedHeading({
  text = "Designed in the details",
  tag = "h2",
  mediaType = "image",
  src = "",
  poster = "",
  fillScale = 1.25,
  parallax = 26,
  drift = 18,
  reveal = "rise",
  trigger = "view",
  brightness = 1,
  saturation = 1,
  grayscale = false,
  duration = 1.1,
  stagger = 0.09,
  align = "center",
  weight = 700,
  tracking = -0.03,
  lineHeight = 1.06,
  textScale = 0.115,
  className,
}: MaskedHeadingProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(rootRef, { once: true, amount: 0.35 });
  const [hovered, setHovered] = useState(false);
  const pointer = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const words = useMemo(
    () => text.trim().split(/\s+/).filter(Boolean),
    [text]
  );

  const shouldReveal =
    reduce ||
    reveal === "none" ||
    trigger === "mount" ||
    (trigger === "view" && inView) ||
    (trigger === "hover" && hovered);

  const filterCss = `brightness(${brightness}) saturate(${saturation}) grayscale(${
    grayscale ? 1 : 0
  })`;

  const tick = useCallback(() => {
    const el = mediaRef.current;
    if (!el) return;

    const px = pointer.current.x * (parallax || 0);
    const py = pointer.current.y * (parallax || 0);
    const t = performance.now() / 1000;
    const dx = reduce || !drift ? 0 : Math.sin(t * 0.55) * drift;
    const dy = reduce || !drift ? 0 : Math.cos(t * 0.4) * drift * 0.65;

    el.style.transform = `translate3d(calc(-50% + ${px + dx}px), calc(-50% + ${
      py + dy
    }px), 0) scale(${fillScale})`;

    if (!reduce && drift > 0 && typeof document !== "undefined" && !document.hidden) {
      rafRef.current = requestAnimationFrame(tick);
    }
  }, [drift, fillScale, parallax, reduce]);

  useEffect(() => {
    tick();
    const handleVisibility = () => {
      if (typeof document !== "undefined" && !document.hidden && !reduce && drift > 0) {
        tick();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [tick, reduce, drift]);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || !parallax || !rootRef.current) return;
    const rect = rootRef.current.getBoundingClientRect();
    pointer.current = {
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    };
    if (!drift) tick();
  };

  const onPointerLeave = () => {
    pointer.current = { x: 0, y: 0 };
    setHovered(false);
    if (!drift) tick();
  };

  const justify =
    align === "left"
      ? "justify-start"
      : align === "right"
        ? "justify-end"
        : "justify-center";

  const textAlign =
    align === "left" ? "left" : align === "right" ? "right" : "center";

  const HeadingTag = tag;
  const fontSize = `clamp(2.5rem, ${textScale * 100}vw, 8.75rem)`;

  const wordVariants: Variants = {
    hidden: {
      y: reveal === "rise" ? "115%" : 0,
      opacity: reveal === "fade" || reveal === "wipe" ? 0 : 1,
      clipPath: reveal === "wipe" ? "inset(0 100% 0 0)" : "inset(0 0 0 0)",
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      clipPath: "inset(0 0 0 0)",
      transition: {
        duration: reduce ? 0 : duration,
        ease: EASE,
        delay: reduce || reveal === "none" ? 0 : i * stagger,
      },
    }),
  };

  const svgMask = useMemo(() => {
    const escaped = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

    const anchor =
      align === "left" ? "start" : align === "right" ? "end" : "middle";
    const x = align === "left" ? "0%" : align === "right" ? "100%" : "50%";

    // Split into up to 2 visual lines for long headings
    const mid = Math.ceil(words.length / 2);
    const line1 = words.slice(0, mid).join(" ");
    const line2 = words.slice(mid).join(" ");
    const dual = words.length > 3 && line2.length > 0;

    const svg = dual
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="520">
          <text x="${x}" y="42%" text-anchor="${anchor}" font-family="Space Grotesk, Inter, system-ui, sans-serif" font-size="160" font-weight="${weight}" letter-spacing="${tracking * 160}" fill="white">${line1}</text>
          <text x="${x}" y="82%" text-anchor="${anchor}" font-family="Space Grotesk, Inter, system-ui, sans-serif" font-size="160" font-weight="${weight}" letter-spacing="${tracking * 160}" fill="white">${line2}</text>
        </svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="320">
          <text x="${x}" y="70%" text-anchor="${anchor}" font-family="Space Grotesk, Inter, system-ui, sans-serif" font-size="180" font-weight="${weight}" letter-spacing="${tracking * 180}" fill="white">${escaped}</text>
        </svg>`;

    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }, [align, text, tracking, weight, words]);

  const maskBoxStyle: CSSProperties = {
    WebkitMaskImage: svgMask,
    maskImage: svgMask,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskPosition: textAlign,
    maskPosition: textAlign,
  };

  return (
    <div
      ref={rootRef}
      className={cn("relative w-full select-none", className)}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onPointerEnter={() => setHovered(true)}
    >
      {/* Accessible / SEO text + rise reveal of solid moonstone fallback for reduced motion / no src */}
      <HeadingTag
        className={cn(
          "relative z-20 mb-0 flex w-full flex-wrap gap-x-[0.28em] font-display",
          justify,
          src ? "text-transparent" : "text-frost"
        )}
        style={{
          fontWeight: weight,
          letterSpacing: `${tracking}em`,
          lineHeight,
          fontSize,
        }}
        aria-label={text}
      >
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="relative inline-block overflow-hidden pb-[0.05em]"
          >
            <motion.span
              className="inline-block"
              custom={i}
              initial={reveal === "none" || reduce ? "visible" : "hidden"}
              animate={shouldReveal ? "visible" : "hidden"}
              variants={wordVariants}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </HeadingTag>

      {/* Media plane clipped to letterforms */}
      {src && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
          style={maskBoxStyle}
          initial={
            reveal === "none" || reduce
              ? false
              : { opacity: 0, y: reveal === "rise" ? 28 : 0 }
          }
          animate={
            shouldReveal
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: reveal === "rise" ? 28 : 0 }
          }
          transition={{ duration: reduce ? 0 : duration, ease: EASE }}
        >
          <div
            ref={mediaRef}
            className="absolute left-1/2 top-1/2 h-[160%] w-[160%] will-change-transform"
            style={{ filter: filterCss }}
          >
            {mediaType === "video" ? (
              <video
                src={src}
                poster={poster || undefined}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={src}
                alt=""
                draggable={false}
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export { MaskedHeading };
