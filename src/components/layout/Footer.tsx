import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/ui/SocialIcons";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { NAV_LINKS, SITE } from "@/lib/data";

const socials = [
  { href: SITE.socials.instagram, icon: InstagramIcon, label: "Instagram" },
  { href: SITE.socials.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: SITE.socials.github, icon: GithubIcon, label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10" style={{ background: "rgba(5,5,8,0.97)" }}>
      <div className="container-mission section-pad py-14!">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <BrandLogo height={56} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Student aerospace team — Rocketry, Drone Tech &amp; CanSat —
              competing at IN-SPACe Student Competitions and Spaceport America Cup.
            </p>
          </div>

          <div>
            <p className="hud-label mb-4 text-white/50">Quick Links</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/65 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 transition hover:text-white"
                >
                  SITEMAP
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="hud-label mb-4 text-white/50">Contact</p>
            <ul className="space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-white/50" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0 text-white/50" />
                <span>{SITE.phone}</span>
              </li>
              <li>
                <a
                  href={SITE.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  teamvikram.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-white/50" />
                <span>
                  {SITE.college}
                  <br />
                  {SITE.location}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p className="hud-label mb-4 text-white/50">Follow Mission</p>
            <div className="flex gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-white/20 text-white/60 transition hover:border-white/60 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-moon/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] tracking-wider text-white/35">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="font-mono text-[10px] tracking-wider text-white/35">
            Built for {SITE.competition}
          </p>
        </div>
      </div>
    </footer>
  );
}
