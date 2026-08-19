import Link from "next/link";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/ui/SocialIcons";
import { AsciiGlitchRipple } from "@/components/ui/ascii-glitch-ripple";
import { Box } from "@/components/ui/box";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/data";

const socials = [
  { href: SITE.socials.instagram, icon: InstagramIcon, label: "Instagram" },
  { href: SITE.socials.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: SITE.socials.github, icon: GithubIcon, label: "GitHub" },
];

export function CtaBand() {
  return (
    <section className="section-pad relative overflow-hidden border-t border-white/10" style={{ background: "rgba(0,0,0,0.6)" }}>
      <div className="container-mission relative">
        <Reveal>
          <Box className="flex flex-col items-start justify-between gap-10 !p-8 sm:!p-12 lg:flex-row lg:items-center" glow>
            <div className="max-w-xl">
              <p className="hud-label mb-3 text-white/70">Join the mission</p>
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Follow Our Mission
              </h2>
              <p className="mt-3 text-white/85">
                Track flight tests, firmware drops, and competition updates or
                partner with us for rocketry, drones, and CanSat.
              </p>
              <div className="mt-6 flex gap-3">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center border border-white/30 text-white/80 transition hover:border-white hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 sm:items-end">
              <Link href="/sponsorship" className="btn-primary shrink-0">
                Partner With Us
              </Link>
              <AsciiGlitchRipple
                as="a"
                href="/sponsorship"
                className="font-mono text-xs tracking-wider text-white/80 hover:text-white"
              >
                Open sponsorship brief →
              </AsciiGlitchRipple>
            </div>
          </Box>
        </Reveal>
      </div>
    </section>
  );
}
