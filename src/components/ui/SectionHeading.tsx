import { type ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <p className="hud-label mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-bold text-frost sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-frost-muted sm:text-lg">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
