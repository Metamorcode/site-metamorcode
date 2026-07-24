import { useEffect } from "react";
import { X } from "lucide-react";
import { accentClasses } from "@/data/seasons";

export default function SeasonToast({ season, onClose }) {
  useEffect(() => {
    if (!season) return;
    const t = setTimeout(onClose, 8000);
    return () => clearTimeout(t);
  }, [season, onClose]);

  if (!season) return null;
  const accent = accentClasses[season.accent];

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 w-[calc(100%-3rem)] max-w-sm rounded-xl border border-white/10 bg-slate-900 p-4 shadow-2xl ring-1 ${accent.ring} animate-in`}
      role="status"
    >
      <div className="flex items-start gap-3">
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg ${accent.bg}`}>
          {season.icon}
        </span>
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
            Campanha {season.label}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-white">{season.toast}</p>
        </div>
        <button onClick={onClose} className="text-white/40 hover:text-white" aria-label="Fechar">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
