import type { Metadata } from "next";
import { Space_Grotesk, Inter, Orbitron } from "next/font/google";
import type { ReactNode } from "react";
import { NotchNavbar } from "@/components/ui/notch-navbar";
import { Footer } from "@/components/layout/Footer";
import { VideoBackgroundClient } from "@/components/home/VideoBackgroundClient";
import { ThreeTimerInit } from "@/components/ThreeTimerInit";
import { SITE } from "@/lib/data";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-orbitron",
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://www.teamvikram.in"),
  title: {
    default: `${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.tagline,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Team Vikram",
    "CanSat",
    "IN-SPACe",
    "student satellite",
    "aerospace",
    "telemetry",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: `${SITE.name}`,
    description: SITE.tagline,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    images: [{ url: "/images/vikram-logo-icon.png", width: 512, height: 512, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name}`,
    description: SITE.tagline,
    images: ["/images/vikram-logo-icon.png"],
  },
  verification: {
    google: "_HhJug2y9ga_KqIKp0gd6NC8DSW9kk6pJLXeTzkEUQM",
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: "https://www.teamvikram.in",
  logo: {
    "@type": "ImageObject",
    url: "https://www.teamvikram.in/images/vikram-logo-icon.png",
    width: 512,
    height: 512,
  },
  image: "https://www.teamvikram.in/images/vikram-logo-icon.png",
  sameAs: [
    SITE.socials.instagram,
    SITE.socials.linkedin,
    SITE.socials.github,
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE.email,
    telephone: SITE.phone.split("/")[0].trim(),
    contactType: "general inquiries",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: "https://www.teamvikram.in",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.teamvikram.in/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="bg-void text-frost" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-48x48.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${orbitron.variable} min-h-screen bg-transparent font-body antialiased`}
      >
        {/* Global SpaceX Starship background video with audio controls */}
        <ThreeTimerInit />
        <VideoBackgroundClient className="fixed inset-0 z-0" />
        <NotchNavbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
