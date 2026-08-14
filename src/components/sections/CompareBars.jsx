import { useEffect, useRef, useState } from "react";

function Bar({ label, value, max, unit, tone, delay }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const pct = Math.max((value / max) * 100, 6);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-white/50">
          {label}
        </span>
        <span className="font-display text-lg text-white">
          {value}
          <span className="ml-1 text-xs font-normal text-white/50">{unit}</span>
        </span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full rounded-full transition-all ease-out ${
            tone === "accent" ? "bg-accent" : "bg-white/25"
          }`}
          style={{
            width: visible ? `${pct}%` : "0%",
            transitionDuration: "1100ms",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

/**
 * Cartão com duas barras horizontais comparando "antes" e "hoje",
 * mais um badge de variação percentual no canto.
 */
export default function CompareBars({ eyebrow, badge, before, after, unit, max }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-surface p-8">
      <div className="mb-7 flex items-start justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-accent">
          {eyebrow}
        </span>
        {badge && (
          <span className="shrink-0 rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent">
            {badge}
          </span>
        )}
      </div>
      <div className="space-y-6">
        <Bar label="Antes" value={before} max={max} unit={unit} tone="faint" delay={0} />
        <Bar label="Hoje" value={after} max={max} unit={unit} tone="accent" delay={150} />
      </div>
    </div>
  );
}
