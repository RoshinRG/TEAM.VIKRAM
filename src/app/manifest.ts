import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Team Vikram",
    short_name: "Team Vikram",
    description:
      "Student-led aerospace engineering — Rocketry, Drone Tech & CanSat",
    start_url: "/",
    display: "standalone",
    background_color: "#050508",
    theme_color: "#050508",
    icons: [
      {
        src: "/images/logo-light.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/logo-dark.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
