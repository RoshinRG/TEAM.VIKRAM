"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const VideoBackground = dynamic(
  () => import("@/components/home/VideoBackground").then((m) => m.VideoBackground),
  { ssr: false }
);

export function VideoBackgroundClient(props: React.HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname();
  if (pathname?.startsWith("/videos")) {
    return null;
  }
  return <VideoBackground {...props} />;
}

