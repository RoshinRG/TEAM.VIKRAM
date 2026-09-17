"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Handshake,
  Rocket,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/ui/BrandLogo";

const leftItems = [
  { label: "HOME", href: "/", icon: Home },
  { label: "TEAM", href: "/team", icon: Users },
  { label: "SPONSORSHIP", href: "/sponsorship", icon: Handshake },
];

const rightItems = [
  { label: "PROJECT", href: "/project", icon: Rocket },
  { label: "CONTACT", href: "/contact", icon: Mail },
];

function NavLink({
  href,
  icon: Icon,
  label,
  active,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-1.5 whitespace-nowrap font-mono text-[11px] tracking-[0.18em] transition-colors",
        active
          ? "text-white font-semibold"
          : "text-white/70 hover:text-white"
      )}
    >
      <Icon className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100" />
      <span>{label}</span>
    </Link>
  );
}

export function NotchNavbar({
  className,
  logo,
}: {
  className?: string;
  logo?: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  // Hide navbar during MissionSplash on first visit; show immediately on return visits
  useEffect(() => {
    let seenSplash = false;
    try {
      seenSplash = sessionStorage.getItem("tv-splash-seen") === "1";
    } catch { /* private mode */ }

    const delay = seenSplash ? 150 : 2950; // match MissionSplash MAX_MS + exit fade
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 16);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const surface = scrolled || isMobileMenuOpen
    ? "bg-black/90 backdrop-blur-md"
    : "bg-black/80 backdrop-blur-md";

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={cn("fixed inset-x-0 top-0 z-50 flex h-20 px-0", className)}
      >
        <div className={cn("relative z-20 h-10 min-w-0 flex-1", surface)}>
          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="39.5"
              x2="100%"
              y2="39.5"
              stroke="#8C8C8C"
              strokeOpacity={0.18}
              strokeWidth={0.5}
            />
            <line
              x1="0"
              y1="36.5"
              x2="100%"
              y2="36.5"
              stroke="#2E2E2E"
              strokeOpacity={0.35}
              strokeWidth={0.5}
            />
          </svg>
        </div>

        <div className="relative z-10 -ml-px flex h-20 shrink-0">
          <div className="relative h-full w-12.5 shrink-0">
            <div
              className={cn("absolute inset-0", surface)}
              style={{ clipPath: "path('M0 0 H50 V80 C25 80 25 40 0 40 Z')" }}
            />
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 50 80"
            >
              <path
                d="M0 39.5 C25 39.5 25 79.5 50 79.5"
                fill="none"
                stroke="#8C8C8C"
                strokeOpacity={0.2}
                strokeWidth={0.5}
              />
              <path
                d="M0 36.5 C25 36.5 25 76.5 50 76.5"
                fill="none"
                stroke="#2E2E2E"
                strokeOpacity={0.45}
                strokeWidth={0.5}
              />
            </svg>
          </div>

          <div className="relative -ml-px h-full min-w-0 flex-1">
            <div className={cn("absolute inset-0", surface)}>
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
              >
                <line
                  x1="0"
                  y1="79.5"
                  x2="100%"
                  y2="79.5"
                  stroke="#8C8C8C"
                  strokeOpacity={0.2}
                  strokeWidth={0.5}
                />
                <line
                  x1="0"
                  y1="76.5"
                  x2="100%"
                  y2="76.5"
                  stroke="#2E2E2E"
                  strokeOpacity={0.4}
                  strokeWidth={0.5}
                />
              </svg>
            </div>

            <div className="relative flex h-full w-full items-center justify-between px-4 md:px-8">
              <nav className="hidden shrink-0 gap-6 lg:flex">
                {leftItems.map((item) => (
                  <NavLink
                    key={item.label}
                    {...item}
                    active={isActive(item.href)}
                  />
                ))}
              </nav>

              <button
                type="button"
                className="p-1 text-moon/70 transition-colors hover:text-moon lg:hidden"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>

              <div className="mx-2 flex shrink-0 items-center justify-center md:mx-1">
                {logo || <BrandLogo height={92} priority className="scale-110 sm:scale-125 transition-transform" />}
              </div>

              <nav className="hidden shrink-0 items-center gap-6 lg:flex">
                {rightItems.map((item) => (
                  <NavLink
                    key={item.label}
                    {...item}
                    active={isActive(item.href)}
                  />
                ))}
                <Link
                  href="/sponsorship"
                  className="ml-2 rounded-sm bg-frost px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.16em] text-void transition hover:bg-frost-muted"
                >
                  PARTNER
                </Link>
              </nav>

              <div className="mb-1 w-9 lg:hidden" aria-hidden />
            </div>
          </div>

          <div className="relative -ml-px h-full w-12.5 shrink-0">
            <div
              className={cn("absolute inset-0", surface)}
              style={{ clipPath: "path('M0 0 H50 V40 C25 40 25 80 0 80 Z')" }}
            />
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 50 80"
            >
              <path
                d="M0 79.5 C25 79.5 25 39.5 50 39.5"
                fill="none"
                stroke="#8C8C8C"
                strokeOpacity={0.2}
                strokeWidth={0.5}
              />
              <path
                d="M0 76.5 C25 76.5 25 36.5 50 36.5"
                fill="none"
                stroke="#2E2E2E"
                strokeOpacity={0.45}
                strokeWidth={0.5}
              />
            </svg>
          </div>
        </div>

        <div className={cn("relative z-20 -ml-px h-10 min-w-0 flex-1", surface)}>
          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="39.5"
              x2="100%"
              y2="39.5"
              stroke="#8C8C8C"
              strokeOpacity={0.18}
              strokeWidth={0.5}
            />
            <line
              x1="0"
              y1="36.5"
              x2="100%"
              y2="36.5"
              stroke="#2E2E2E"
              strokeOpacity={0.35}
              strokeWidth={0.5}
            />
          </svg>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-moon/15 bg-void/95 p-4 shadow-lg shadow-black/40 backdrop-blur-md lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {[...leftItems, ...rightItems].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 rounded-sm p-3 transition-colors hover:bg-surface-elev/60"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5 text-moon/70" />
                  <span className="font-mono text-xs tracking-[0.18em] text-frost">
                    {item.label}
                  </span>
                </Link>
              ))}
              <div className="my-2 h-px bg-moon/15" />
              <Link
                href="/sponsorship"
                className="flex items-center justify-center rounded-sm bg-frost p-3 font-mono text-xs tracking-[0.18em] text-void"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PARTNER WITH US
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NotchNavbar;
