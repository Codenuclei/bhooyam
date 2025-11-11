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
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="cf-name" className="text-sm text-gray-300 block mb-1 font-medium">
          Full name
        </label>
        <input
          id="cf-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-[#2e4e3f] bg-[#ffffff] text-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-500 shadow-sm"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="cf-email" className="text-sm text-gray-300 block mb-1 font-medium">
          Email
        </label>
        <input
          id="cf-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-[#2e4e3f] bg-[#ffffff] text-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-500 shadow-sm"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="cf-message" className="text-sm text-gray-300 block mb-1 font-medium">
          Project details
        </label>
        <textarea
          id="cf-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="w-full rounded-xl border border-[#2e4e3f] bg-[#ffffff] text-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-500 shadow-sm resize-none"
          placeholder="Tell us about your project or question"
        />
      </div>

      <div className="flex items-center gap-3 mt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full px-6 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white text-base font-semibold shadow-lg hover:from-green-500 hover:to-green-700 transition-all duration-150 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {status === "sending" ? "Sending…" : "Submit inquiry"}
        </button>

        {status === "success" && (
          <span className="text-sm text-green-400">
            Message sent — we’ll be in touch.
          </span>
        )}
        {status === "error" && (
          <span className="text-sm text-red-500">
            Something went wrong. Try again later.
          </span>
        )}
      </div>
    </form>
  );
}
