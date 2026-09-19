import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/", "/_next/image/"],
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.teamvikram.in/sitemap.xml",
  };
}

