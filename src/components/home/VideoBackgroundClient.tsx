"use client";

import dynamic from "next/dynamic";

const VideoBackground = dynamic(
  () => import("@/components/home/VideoBackground").then((m) => m.VideoBackground),
  { ssr: false }
);

export function VideoBackgroundClient(props: React.HTMLAttributes<HTMLDivElement>) {
  return <VideoBackground {...props} />;
}
