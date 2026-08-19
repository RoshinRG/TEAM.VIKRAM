import { NextResponse } from "next/server";

const APPS_SCRIPT_URL =
  process.env.NEXT_PUBLIC_APPS_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbwvLKKVLKCuyap2xa-scdvJ4JRjTsv91dljjN3HWsWD9sY0jbC9t3KNzspjIRTGWVyk/exec";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, mobile, reason, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Build URL-encoded payload (Apps Script expects form fields)
    const params = new URLSearchParams();
    params.append("name", name);
    params.append("email", email);
    params.append("mobile", mobile || "");
    params.append("reason", reason || "");
    params.append("message", message);
    params.append("source", "team-vikram-website");

    // Server-side fetch no CORS restriction, can read the response properly
    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
      redirect: "follow",
    });

    // Apps Script typically returns 200 with a JSON body on success
    if (!res.ok) {
      console.error("Apps Script error:", res.status, await res.text());
      return NextResponse.json(
        { ok: false, error: "Submission failed. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to submit. Please try again." },
      { status: 500 }
    );
  }
}
