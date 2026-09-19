import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Image height in pixels (ignored when fillWidth is set) */
  height?: number;
  /** Make logo scale to parent width */
  fillWidth?: boolean;
  /** Wrap in home link */
  linked?: boolean;
  priority?: boolean;
};

export function BrandLogo({
  className,
  height = 36,
  fillWidth = false,
  linked = true,
  priority = false,
}: BrandLogoProps) {
  const image = fillWidth ? (
    <Image
      src="/images/vikram-logo-white.png"
      alt="Team Vikram"
      width={1024}
      height={1024}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      className={cn(
        "h-auto w-full object-contain object-center mix-blend-screen",
        className
      )}
    />
  ) : (
    <Image
      src="/images/vikram-logo-white.png"
      alt="Team Vikram"
      width={1024}
      height={1024}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      className={cn(
        "object-contain object-center mix-blend-screen",
        className
      )}
      style={{ height, width: "auto" }}
    />
  );

  if (!linked) return image;

  return (
    <Link
      href="/"
      className="inline-flex items-center transition hover:opacity-90"
      aria-label="Team Vikram home"
    >
      {image}
    </Link>
  );
}
