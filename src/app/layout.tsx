import type { Metadata } from "next";
import { Space_Grotesk, Inter, Orbitron } from "next/font/google";
import type { ReactNode } from "react";
import { NotchNavbar } from "@/components/ui/notch-navbar";
import { Footer } from "@/components/layout/Footer";
import { VideoBackgroundClient } from "@/components/home/VideoBackgroundClient";
import { SITE } from "@/lib/data";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://teamvikram.example.com"),
  title: {
    default: `${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.tagline,
  keywords: [
    "Team Vikram",
    "CanSat",
    "IN-SPACe",
    "student satellite",
    "aerospace",
    "telemetry",
  ],
  icons: {
    icon: [{ url: "/images/vikram-logo.png", type: "image/png" }],
    apple: [{ url: "/images/vikram-logo.png" }],
  },
  openGraph: {
    title: `${SITE.name}`,
    description: SITE.tagline,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    images: [{ url: "/images/vikram-logo.png", width: 512, height: 512, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name}`,
    description: SITE.tagline,
    images: ["/images/vikram-logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="bg-void text-frost">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${orbitron.variable} min-h-screen bg-transparent font-body antialiased`}
      >
        {/* Global SpaceX Starship background video with audio controls */}
        <VideoBackgroundClient className="fixed inset-0 z-0" />
        <NotchNavbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
