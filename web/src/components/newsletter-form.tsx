"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    null | "idle" | "sending" | "ok" | "error"
  >("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) setStatus("ok");
      else setStatus("error");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={submit} className="flex items-center gap-3">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="rounded-full px-4 py-2 border border-gray-200 text-sm"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full px-4 py-2 bg-gradient-to-r from-amber-100 to-emerald-100 text-sm font-semibold"
      >
        {status === "sending"
          ? "Joining…"
          : status === "ok"
          ? "Joined"
          : "Join"}
      </button>
      {status === "error" && (
        <div className="text-sm text-red-600">Try again</div>
      )}
    </form>
  );
}
