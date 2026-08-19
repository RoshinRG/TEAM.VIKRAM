import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type BoxProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  as?: "div" | "article" | "section";
  /** Stronger edge glow */
  glow?: boolean;
  /** Padless useful for media tiles */
  flush?: boolean;
};

/**
 * Shared monochrome glass/metal panel used across card sections.
 */
export function Box({
  children,
  className,
  as: Comp = "div",
  glow = false,
  flush = false,
  ...props
}: BoxProps) {
  return (
    <Comp
      className={cn(
        "group relative overflow-hidden border border-white/20 bg-black/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-md transition duration-300",
        "hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
        glow && "border-white/40 shadow-[0_0_28px_-8px_rgba(255,255,255,0.2)]",
        !flush && "p-5 sm:p-6",
        className
      )}
      {...props}
    >
      {/* Brushed-metal sheen */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent, transparent 2px, rgba(196,196,196,0.35) 2px, rgba(196,196,196,0.35) 3px)",
        }}
        aria-hidden
      />
      {/* Soft mono corner accent */}
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-moon/15 blur-2xl transition group-hover:bg-moon/25"
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </Comp>
  );
}
