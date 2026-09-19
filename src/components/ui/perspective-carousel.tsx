"use client";

import * as React from "react";
import { motion, type Transition } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PerspectiveCarouselItem {
  src: string;
  title: string;
  subtitle?: string;
  alt?: string;
  /** Optional video to show instead of the image (path relative to /public) */
  video?: string;
}

export interface PerspectiveCarouselProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  items: PerspectiveCarouselItem[];
  activeIndex?: number;
  defaultActiveIndex?: number;
  onActiveIndexChange?: (index: number) => void;
  loop?: boolean;
  slideWidth?: number;
  rotationStep?: number;
  inactiveScale?: number;
  transition?: Transition;
  showControls?: boolean;
  showDots?: boolean;
  /** Show caption label under the active slide */
  showLabels?: boolean;
  /** Auto-advance slides */
  autoPlay?: boolean;
  /** Interval in ms between auto-advances (default: 2800) */
  autoPlayInterval?: number;
  viewportClassName?: string;
  slideClassName?: string;
  imageClassName?: string;
  labelClassName?: string;
  controlsClassName?: string;
}

const DEFAULT_TRANSITION: Transition = {
  type: "spring",
  bounce: 0.14,
  duration: 0.9,
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export function PerspectiveCarousel({
  items,
  activeIndex,
  defaultActiveIndex = 0,
  onActiveIndexChange,
  loop = true,
  slideWidth = 200,
  rotationStep = 60,
  inactiveScale = 0.85,
  transition = DEFAULT_TRANSITION,
  showControls = true,
  showDots = true,
  showLabels = true,
  autoPlay = false,
  autoPlayInterval = 2800,
  viewportClassName,
  slideClassName,
  imageClassName,
  labelClassName,
  controlsClassName,
  className,
  onKeyDown,
  tabIndex,
  ...props
}: PerspectiveCarouselProps) {
  const maxIndex = Math.max(0, items.length - 1);
  const [uncontrolledIndex, setUncontrolledIndex] = React.useState(() =>
    clamp(defaultActiveIndex, 0, maxIndex)
  );
  const currentIndex = clamp(activeIndex ?? uncontrolledIndex, 0, maxIndex);
  const safeSlideWidth = Math.max(96, slideWidth);
  const safeInactiveScale = clamp(inactiveScale, 0.5, 1);
  const pausedRef = React.useRef(false);

  const selectSlide = React.useCallback(
    (nextIndex: number) => {
      if (!items.length) return;

      const resolvedIndex = loop
        ? (nextIndex + items.length) % items.length
        : clamp(nextIndex, 0, maxIndex);

      if (activeIndex === undefined) {
        setUncontrolledIndex(resolvedIndex);
      }

      onActiveIndexChange?.(resolvedIndex);
    },
    [activeIndex, items.length, loop, maxIndex, onActiveIndexChange]
  );

  // Auto-play
  React.useEffect(() => {
    if (!autoPlay || items.length < 2) return;
    const id = setInterval(() => {
      if (!pausedRef.current) {
        selectSlide((activeIndex ?? uncontrolledIndex) + 1);
      }
    }, autoPlayInterval);
    return () => clearInterval(id);
  }, [autoPlay, autoPlayInterval, selectSlide, activeIndex, uncontrolledIndex, items.length]);

  if (!items.length) return null;

  const isPreviousDisabled = !loop && currentIndex === 0;
  const isNextDisabled = !loop && currentIndex === maxIndex;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectSlide(currentIndex - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectSlide(currentIndex + 1);
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Perspective image carousel"
      tabIndex={tabIndex ?? 0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
      className={cn("relative isolate h-full w-full overflow-hidden", className)}
      {...props}
    >
      <div
        className={cn("absolute inset-0 overflow-hidden", viewportClassName)}
        style={{ perspective: "1200px" }}
      >
        <motion.div
          className="absolute flex w-fit items-center"
          style={{ top: "50%", left: "50%", y: "-50%" }}
          animate={{ x: -(currentIndex * safeSlideWidth + safeSlideWidth / 2) }}
          transition={transition}
        >
          {items.map((item, index) => {
            const isActive = currentIndex === index;

            return (
              <div
                key={`${item.src}-${index}`}
                className="shrink-0"
                style={{ width: safeSlideWidth, perspective: "1200px" }}
              >
                <motion.div
                  className={cn(
                    "flex w-full flex-col items-center gap-3 will-change-transform",
                    slideClassName
                  )}
                  animate={{
                    rotateY: (currentIndex - index) * rotationStep,
                    scale: isActive ? 1 : safeInactiveScale,
                  }}
                  transition={transition}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <button
                    type="button"
                    aria-label={`Show ${item.title}`}
                    aria-current={isActive ? "true" : undefined}
                    className="aspect-3/4 w-full cursor-pointer"
                    onClick={() => selectSlide(index)}
                  >
                    {item.video ? (
                      <video
                        src={item.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        draggable={false}
                        className={cn(
                          "h-full w-full select-none rounded-sm object-cover shadow-xl shadow-black/40",
                          imageClassName
                        )}
                      />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.src}
                        alt={item.alt ?? item.title}
                        draggable={false}
                        className={cn(
                          "h-full w-full select-none rounded-sm object-cover object-[center_20%] shadow-xl shadow-black/40",
                          imageClassName
                        )}
                      />
                    )}
                  </button>

                  {showLabels && (
                    <motion.div
                      className={cn(
                        "pointer-events-none mt-2 min-h-14 w-full text-center",
                        labelClassName
                      )}
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={transition}
                      aria-hidden={!isActive}
                    >
                      {isActive && (
                        <>
                          <p className="font-display text-base font-bold leading-tight text-white sm:text-lg">
                            {item.title}
                          </p>
                          {item.subtitle ? (
                            <p className="mt-1 font-mono text-[10px] leading-snug tracking-wider text-white/70 sm:text-[11px]">
                              {item.subtitle}
                            </p>
                          ) : null}
                        </>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {showControls && (
        <div
          className={cn(
            "absolute inset-x-0 bottom-5 z-10 mx-auto flex w-fit items-center justify-center gap-3 rounded-full border border-moon/30 bg-void/70 px-2 text-frost shadow-sm backdrop-blur-sm",
            controlsClassName
          )}
        >
          <button
            type="button"
            aria-label="Show previous slide"
            disabled={isPreviousDisabled}
            className="inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-indigo/30 disabled:cursor-not-allowed disabled:opacity-35"
            onClick={() => selectSlide(currentIndex - 1)}
          >
            <ChevronLeft className="size-5" />
          </button>

          {showDots && (
            <div className="flex items-center justify-center gap-2">
              {items.map((item, index) => (
                <button
                  key={`${item.title}-${index}`}
                  type="button"
                  aria-label={`Show slide ${index + 1}: ${item.title}`}
                  aria-current={currentIndex === index ? "true" : undefined}
                  className={cn(
                    "h-2 rounded-full bg-moon transition-[width,opacity] duration-300",
                    currentIndex === index
                      ? "w-7 opacity-100"
                      : "w-2 opacity-30"
                  )}
                  onClick={() => selectSlide(index)}
                />
              ))}
            </div>
          )}

          <button
            type="button"
            aria-label="Show next slide"
            disabled={isNextDisabled}
            className="inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-indigo/30 disabled:cursor-not-allowed disabled:opacity-35"
            onClick={() => selectSlide(currentIndex + 1)}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      )}
    </div>
  );
}

export default PerspectiveCarousel;
