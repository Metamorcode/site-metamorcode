import { useEffect, useRef, useState } from "react";
import CountUp from "@/components/CountUp";

/**
 * Anel de progresso circular animado (SVG), com número a subir no centro.
 * `value` em percentagem (0–100). `decimals` controla casas decimais do CountUp.
 */
export default function RadialStat({
  value,
  decimals = 0,
  label,
  tone = "accent",
  size = 168,
  stroke = 12,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.min(value, 100) / 100) * circumference;

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
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const strokeColor = tone === "accent" ? "var(--color-accent)" : "var(--color-gold)";

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={visible ? offset : circumference}
            style={{ transition: "stroke-dashoffset 1.3s cubic-bezier(0.16,1,0.3,1)" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-3xl font-bold text-white">
            {visible ? (
              <CountUp end={value} decimals={decimals} suffix="%" duration={1300} />
            ) : (
              `0%`
            )}
          </span>
        </div>
      </div>
      <p className="mt-4 max-w-[10rem] text-center text-xs font-medium leading-relaxed text-white/60">
        {label}
      </p>
    </div>
  );
}
