"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const REASONS = ["Sponsorship", "Media", "Collaboration", "General"] as const;

export function ContactForm() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">(
    "idle"
  );
  const [error, setError] = useState("");
  const [reason, setReason] = useState("");

  useEffect(() => {
    const q = searchParams.get("reason");
    if (q && (REASONS as readonly string[]).includes(q)) {
      setReason(q);
    }
  }, [searchParams]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      mobile: String(data.get("mobile") || ""),
      reason: String(data.get("reason") || ""),
      message: String(data.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Submission failed");
      }

      setStatus("ok");
      form.reset();
      setReason("");
    } catch (err) {
      setStatus("err");
      setError(
        err instanceof Error
          ? err.message
          : "Unable to send message. Please email us directly."
      );
    }
  }

  const inputClass =
    "w-full border border-moon/25 bg-surface-elev/80 px-4 py-3 text-sm text-frost outline-none transition placeholder:text-moon/40 focus:border-frost-muted [color-scheme:dark]";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block" htmlFor="name">
          <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-moon/60">
            Name
          </span>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Your name"
          />
        </label>
        <label className="block" htmlFor="email">
          <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-moon/60">
            Email
          </span>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@organization.com"
          />
        </label>
      </div>

      <label className="block" htmlFor="mobile">
        <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-moon/60">
          Mobile Number
        </span>
        <input
          id="mobile"
          name="mobile"
          type="tel"
          required
          autoComplete="tel"
          className={inputClass}
          placeholder="+91 98765 43210"
        />
      </label>

      <label className="block" htmlFor="reason">
        <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-moon/60">
          Reason
        </span>
        <select
          id="reason"
          name="reason"
          required
          className={inputClass}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        >
          <option value="">Select a reason</option>
          {REASONS.map((r) => (
            <option key={r} value={r} className="bg-void text-frost">
              {r}
            </option>
          ))}
        </select>
      </label>

      <label className="block" htmlFor="message">
        <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-moon/60">
          Message
        </span>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-y`}
          placeholder="How can we collaborate?"
        />
      </label>


      {status === "ok" && (
        <p className="border border-moon/30 bg-surface/80 px-4 py-3 text-sm text-moon">
          Message received. We&apos;ll respond shortly.
        </p>
      )}
      {status === "err" && (
        <p className="border border-moon/40 bg-moon/10 px-4 py-3 text-sm text-moon">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary disabled:opacity-60"
      >
        {status === "loading" ? "Transmitting…" : "Send Message"}
      </button>
    </form>
  );
}
