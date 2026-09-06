import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/ui/SocialIcons";
import { ContactForm } from "@/components/contact/ContactForm";
import { FaqAccordion } from "@/components/contact/FaqAccordion";
import { Box } from "@/components/ui/box";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.name} for sponsorship, media, or collaboration.`,
};

const socials = [
  { href: SITE.socials.instagram, icon: InstagramIcon, label: "Instagram" },
  { href: SITE.socials.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: SITE.socials.github, icon: GithubIcon, label: "GitHub" },
];

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="section-pad border-b border-white/10" style={{ background: "rgba(0,0,0,0.65)" }}>
        <div className="container-mission">
          <Reveal>
            <SectionHeading
              eyebrow="Contact & Collaboration"
              title="Open a channel"
              description="Sponsorship, industry collaboration, or media inquiries for our Rocketry, Drone Tech, and CanSat satellite divisions send a mission brief and we'll respond."
            />
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <Box className="p-6! sm:p-8!">
                <Suspense
                  fallback={
                    <p className="font-mono text-xs tracking-wider text-white/60">
                      Loading form…
                    </p>
                  }
                >
                  <ContactForm />
                </Suspense>
              </Box>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-2">
              <Box className="space-y-8 p-6! sm:p-8!">
                <div>
                  <p className="hud-label mb-4 text-white/70">Direct</p>
                  <ul className="space-y-4 text-sm text-white/85">
                    <li className="flex gap-3">
                      <Mail size={18} className="shrink-0 text-white/60" />
                      <a
                        href={`mailto:${SITE.email}`}
                        className="transition hover:text-white"
                      >
                        {SITE.email}
                      </a>
                    </li>
                    <li className="flex gap-3">
                      <Phone size={18} className="shrink-0 text-white/60" />
                      <span>{SITE.phone}</span>
                    </li>
                    <li className="flex gap-3">
                      <Globe size={18} className="shrink-0 text-white/60" />
                      <a
                        href={SITE.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-white"
                      >
                        teamvikram.in
                      </a>
                    </li>
                    <li className="flex gap-3">
                      <MapPin size={18} className="shrink-0 text-white/60" />
                      <span>
                        {SITE.college}
                        <br />
                        {SITE.location}
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="hud-label mb-4 text-white/70">Social</p>
                  <ul className="mb-4 space-y-2 text-sm text-white/85">
                    <li>
                      Instagram:{" "}
                      <a
                        href={SITE.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-white"
                      >
                        {SITE.handles.instagram}
                      </a>
                    </li>
                    <li>
                      LinkedIn:{" "}
                      <a
                        href={SITE.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-white"
                      >
                        {SITE.handles.linkedin}
                      </a>
                    </li>
                  </ul>
                  <div className="flex gap-3">
                    {socials.map(({ href, icon: Icon, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-10 w-10 items-center justify-center border border-white/20 text-white/70 transition hover:border-white/60 hover:text-white"
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="aspect-video overflow-hidden border border-white/20 bg-black/80">
                  <iframe
                    title="Institution map"
                    className="h-full w-full opacity-80 grayscale invert-[0.85] contrast-125"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://maps.google.com/maps?q=Rajalakshmi+Engineering+College+Thandalam+Tamil+Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  />
                </div>
              </Box>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-mission max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions"
              description="Quick answers for sponsors and media."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <FaqAccordion />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
