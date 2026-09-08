/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/videos/TeamVIkramrocket.mp4",
        destination: "/videos/rocket-bg.mp4",
      },
      {
        source: "/videos/TeamVikramrocket.mp4",
        destination: "/videos/rocket-bg.mp4",
      },
    ];
  },
};

export default nextConfig;
