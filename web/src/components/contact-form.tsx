"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    null | "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="cf-name" className="text-sm text-gray-700 block mb-1">
          Name
        </label>
        <input
          id="cf-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="cf-email" className="text-sm text-gray-700 block mb-1">
          Email
        </label>
        <input
          id="cf-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="cf-message"
          className="text-sm text-gray-700 block mb-1"
        >
          Message
        </label>
        <textarea
          id="cf-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 resize-none"
          placeholder="Tell us about your project or question"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full px-5 py-2 bg-gradient-to-r from-emerald-200 to-cyan-200 text-sm font-semibold shadow hover:scale-[1.01] transition-transform disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>

        {status === "success" && (
          <span className="text-sm text-emerald-600">
            Message sent — we’ll be in touch.
          </span>
        )}
        {status === "error" && (
          <span className="text-sm text-red-600">
            Something went wrong. Try again later.
          </span>
        )}
      </div>
    </form>
  );
}
