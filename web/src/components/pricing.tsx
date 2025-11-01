"use client";
import React, { useState } from "react";

type Plan = {
  id: string;
  name: string;
  priceMonth: number;
  priceYear?: number;
  description?: string;
  features: string[];
  recommended?: boolean;
};

const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    priceMonth: 9,
    priceYear: 90,
    description: "For personal projects",
    features: ["1 project", "Email support", "Basic analytics"],
  },
  {
    id: "pro",
    name: "Pro",
    priceMonth: 29,
    priceYear: 290,
    description: "For small teams",
    features: [
      "Unlimited projects",
      "Priority support",
      "Advanced analytics",
      "Team seats",
    ],
    recommended: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceMonth: 99,
    priceYear: 990,
    description: "For large organizations",
    features: ["Dedicated support", "SSO", "Custom integrations"],
  },
];

const LIGHT_THEME = {
  // removed page background
  pageBg: "",
  headerText: "text-gray-900",
  subText: "text-gray-600",
  // reduced lime/green saturation and softer shadows
  cardBg:
    "border border-emerald-100/30 bg-gradient-to-br from-white via-gray-100 to-emerald-100 shadow-sm shadow-emerald-50/30 backdrop-blur-md transition-all duration-300 hover:shadow-emerald-100/20 hover:scale-[1.01]",
  recommendedCard:
    "border border-emerald-200 bg-gradient-to-br from-white via-gray-100 to-emerald-100 shadow-md shadow-emerald-100/25 backdrop-blur-md transition-all duration-300 hover:shadow-emerald-100/18 hover:scale-[1.02]",

  // shift accent toward sky tones and away from lime
  accentFrom: "from-[#9ae5b6]",
  accentTo: "to-[#84dcc7]",
  accentText: "text-sky-700",
 btnSoft:
  "text-gray-600 bg-gradient-to-r from-[#FFFFFF] via-[#E4E4E7] to-[#9AE5B6] hover:from-[#F4F4F5] hover:via-[#84DCC7] hover:to-[#E4E4E7] transition-all duration-300 shadow-[0_4px_14px_#9AE5B680] rounded-full px-4 py-2 font-medium backdrop-blur-sm",
  check: "text-emerald-300",
};

export default function Pricing() {
  const [billing, setBilling] = useState<"month" | "year">("month");

  const t = LIGHT_THEME;

  return (
    <div
      className={`min-h-screen p-8 flex justify-center font-sans ${t.pageBg}`}
    >
      <div className="max-w-4xl w-full">
        <header className="text-center mb-8">
          <h1
            className={`text-2xl md:text-3xl font-extrabold ${t.headerText} mb-2`}
          >
            Choose Your Perfect Plan
          </h1>
          <p className={`${t.subText} text-sm`}>
            Simple, transparent pricing — find the perfect fit for your needs.
          </p>

          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="inline-flex bg-white/60 backdrop-blur-sm border border-white/30 rounded-full p-1">
              <button
                aria-pressed={billing === "month"}
                onClick={() => setBilling("month")}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-focus focus:outline-none ${
                  billing === "month"
                    ? `bg-gradient-to-r ${t.accentFrom} ${t.accentTo} text-white shadow-md`
                    : `bg-white/10 text-gray-700`
                }`}
              >
                Monthly
              </button>
              <button
                aria-pressed={billing === "year"}
                onClick={() => setBilling("year")}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-focus focus:outline-none ${
                  billing === "year"
                    ? `bg-gradient-to-r ${t.accentFrom} ${t.accentTo} text-white shadow-md`
                    : `bg-white/10 text-gray-700`
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </header>

        <main className="flex flex-row justify-center gap-6">
          {PLANS.map((plan) => {
            const price =
              billing === "month"
                ? plan.priceMonth
                : plan.priceYear ?? plan.priceMonth * 10;

            const cardClass = plan.recommended ? t.recommendedCard : t.cardBg;
            const badgeGradient = `bg-gradient-to-r ${t.accentFrom} ${t.accentTo}`;

            return (
              <div
                key={plan.id}
                className={`relative w-72 flex flex-col gap-3 p-6 rounded-2xl border transition-transform transform hover:-translate-y-1 ${cardClass}`}
              >
                {plan.recommended && (
                  <>
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 ${t.accentFrom} rounded-t-md`}
                    />
                    <span
                      className={`${badgeGradient} text-white px-3 py-1 rounded-full text-xs font-semibold self-start`}
                    >
                      Most Popular
                    </span>
                  </>
                )}

                <h2 className={`${t.headerText} text-lg font-bold mb-0`}>
                  {plan.name}
                </h2>
                <p className={`${t.subText} text-sm mb-0`}>
                  {plan.description}
                </p>

                <div className={`${t.headerText} text-2xl font-bold`}>
                  ${price}
                  <span className={`${t.subText} text-sm font-medium ml-2`}>
                    /{billing === "month" ? "mo" : "yr"}
                  </span>
                </div>

                <ul className={`${t.subText} mt-2 text-sm space-y-2`}>
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className={`${t.check} font-bold mt-[2px]`}>✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-auto rounded-full px-4 py-3 font-semibold text-sm transition ${
                    plan.recommended
                      ? `bg-gradient-to-r ${t.accentFrom} ${t.accentTo} text-white shadow-md hover:opacity-95`
                      : `${t.btnSoft}`
                  }`}
                  onClick={() => alert(`Selected ${plan.name}`)}
                >
                  Choose {plan.name}
                </button>
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
}
