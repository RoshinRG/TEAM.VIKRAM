import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Pure Black main backgrounds */
        void: "rgb(0 0 0 / <alpha-value>)",
        surface: {
          /* Charcoal cards & panels */
          DEFAULT: "rgb(26 26 26 / <alpha-value>)",
          /* Graphite elevated surfaces / borders */
          elev: "rgb(46 46 46 / <alpha-value>)",
          /* Void Black softer dark sections */
          deep: "rgb(10 10 10 / <alpha-value>)",
        },
        /* Accent remapped to mono tones (keeps existing class names) */
        indigo: {
          DEFAULT: "rgb(46 46 46 / <alpha-value>)" /* Graphite */,
          dim: "rgb(26 26 26 / <alpha-value>)" /* Charcoal */,
          glow: "rgb(242 242 242 / <alpha-value>)" /* Off-White accent */,
          soft: "rgb(140 140 140 / <alpha-value>)" /* Silver */,
        },
        moon: {
          DEFAULT: "rgb(140 140 140 / <alpha-value>)" /* Silver */,
          muted: "rgb(77 77 77 / <alpha-value>)" /* Ash Gray */,
          dim: "rgb(196 196 196 / <alpha-value>)" /* Light Gray */,
        },
        frost: {
          DEFAULT: "rgb(255 255 255 / <alpha-value>)" /* Pure White */,
          muted: "rgb(242 242 242 / <alpha-value>)" /* Off-White */,
          dim: "rgb(196 196 196 / <alpha-value>)" /* Light Gray */,
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-orbitron)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-hud":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-void":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(46,46,46,0.55), transparent 55%)",
        "hero-glow":
          "radial-gradient(ellipse 70% 55% at 65% 35%, rgba(46,46,46,0.5), transparent 55%), radial-gradient(ellipse 45% 40% at 20% 75%, rgba(26,26,26,0.45), transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05), transparent 35%)",
        nebula:
          "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(46,46,46,0.4), transparent 60%), radial-gradient(circle at 30% 60%, rgba(26,26,26,0.35), transparent 40%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        scan: "scan 6s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
