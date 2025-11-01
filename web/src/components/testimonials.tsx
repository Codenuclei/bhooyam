"use client";
import { useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    name: "Dr. Meera Rao",
    title: "Hydroponics Researcher",
    text: "Bhooyam's system turned our lab trials into predictable yields — the AI catches subtle patterns we used to miss.",
  },
  {
    name: "Ravi K.",
    title: "Urban Farmer",
    text: "My balcony produces twice as much and tastes better — and I never touch the dosing anymore.",
  },
  {
    name: "GreenCity Labs",
    title: "Institutional Pilot",
    text: "Deployment was smooth and monitoring via app keeps our team in sync. The anomaly alerts saved a crop already.",
  },
];

export default function Testimonials({
  interval = 4000,
}: {
  interval?: number;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setI((x) => (x + 1) % TESTIMONIALS.length),
      interval
    );
    return () => clearInterval(id);
  }, [interval]);

  const t = TESTIMONIALS[i];

  return (
    <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
      <p className="text-gray-700 italic">“{t.text}”</p>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <div className="font-semibold text-gray-900">{t.name}</div>
          <div className="text-sm text-gray-600">{t.title}</div>
        </div>
        <div className="text-sm text-gray-500">
          {i + 1}/{TESTIMONIALS.length}
        </div>
      </div>
    </div>
  );
}
