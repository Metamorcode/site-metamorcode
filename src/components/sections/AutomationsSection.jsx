import { MessageCircle, RefreshCw } from "lucide-react";
import { automations } from "@/data/automations";

const icons = { MessageCircle, RefreshCw };

export default function AutomationsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Motor de automações & comunicação
          </span>
          <h2 className="mt-3 font-display text-3xl text-slate-900 lg:text-4xl">
            O Workforce ERP que fala com a sua equipa
          </h2>
        </div>

        <div className="mt-12 flex justify-center">
          {automations.map((a) => {
            const Icon = icons[a.icon];
            return (
              <div
                key={a.name}
                className="w-full max-w-md rounded-xl border border-white/10 bg-surface p-8 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl text-white">{a.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {a.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
