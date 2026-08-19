"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/data";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-moon/15 border border-moon/20 bg-black/80 backdrop-blur-md rounded-sm">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-indigo/15"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-display text-sm font-semibold text-frost sm:text-base">
                {item.q}
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-indigo-glow transition ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <p className="px-5 pb-5 text-sm leading-relaxed text-moon/75">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
