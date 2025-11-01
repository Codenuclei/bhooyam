"use client";
import { useEffect, useState } from "react";

export default function AnimatedCount({
  to,
  duration = 1200,
}: {
  to: number;
  duration?: number;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const from = 0;
    const diff = to - from;

    function step(ts: number) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.floor(from + diff * progress));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [to, duration]);

  return <span className="font-extrabold text-2xl text-gray-900">{value}</span>;
}
