"use client";
import React, { useState } from "react";

export default function FAQGlassMint() {
    const faqs = [
        {
            question: "What does Bhooyam build?",
            answer:
                "Bhooyam creates AI-powered hydroponic systems that automate nutrient dosing, climate control, and anomaly detection for hands-free farming.",
        },
        {
            question: "Who can use the autonomous hydroponic system?",
            answer:
                "The system is designed for home growers, institutions, and commercial farms, offering scalable configurations for each use case.",
        },
        {
            question: "How is the product priced?",
            answer:
                "Bhooyam follows a hardware plus subscription model with home systems starting at ₹5000 and custom pricing for commercial deployments.",
        },
        {
            question: "What features come with the software subscription?",
            answer:
                "The optional subscription unlocks cloud monitoring, predictive analytics, and personalized crop support through the Bhooyam platform.",
        },
        {
            question: "How does Bhooyam handle privacy?",
            answer:
                "Only essential personal and payment data is stored, and transactions are processed via Razorpay’s encrypted gateway in line with the privacy policy.",
        },
        {
            question: "What is the refund and cancellation policy?",
            answer:
                "Orders are cancelable within 24 hours before dispatch, refunds take up to seven business days after approval, and defective units qualify for replacements or refunds.",
        },
        {
            question: "How can I contact Bhooyam?",
            answer:
                "Reach Bhooyam Agritech at support@bhooyam.in, call +91-7355499429, or visit the office at Bhupiyamau Chauraha, Pratapgarh, Uttar Pradesh.",
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <div className="min-h-screen font-sans  flex flex-col items-center justify-center p-4">
            <div className="text-center mb-6">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full bg-emerald-100 text-emerald-700 shadow-sm">
                    Support Center
                </span>
                <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-slate-900">
                    Frequently Asked Questions
                </h2>
                <p className="mt-2 text-slate-500 text-sm md:text-base">
                    Quick answers to common questions. Tap a question to reveal the details.
                </p>
            </div>

            <div className="w-full max-w-xl bg-white/15 backdrop-blur-3xl drop-shadow-lg shadow-black rounded-2xl p-3 md:p-4 space-y-2">
                {faqs.map((item, i) => {
                    const isOpen = openIndex === i;
                    return (
                        <div
                            key={i}
                            className={`rounded-xl border transition-all duration-300 ${
                                isOpen
                                    ? "border-slate-200 bg-white/15 shadow-[0_6px_16px_rgba(15,23,42,0.04)] backdrop-blur"
                                    : "border-slate-100 bg-white/10 hover:bg-white/60"
                            }`}
                        >
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex justify-between items-center px-4 py-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-200 rounded-xl"
                            >
                                <span
                                    className={`text-sm md:text-base font-medium transition-colors ${
                                        isOpen ? "text-slate-700" : "text-slate-600"
                                    }`}
                                >
                                    {item.question}
                                </span>
                                <svg
                                    className={`w-4 h-4 transform transition-transform duration-300 ${
                                        isOpen ? "rotate-180 text-slate-500" : "text-slate-400"
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                                </svg>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                                    isOpen ? "max-h-36 opacity-100" : "max-h-0 opacity-0"
                                }`}
                            >
                                <p className="px-4 pb-4 text-slate-500 text-sm md:text-md leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
