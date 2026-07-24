import { CalendarClock, Banknote, Wallet, Building2 } from "lucide-react";
import { modules } from "@/data/modules";

const icons = { CalendarClock, Banknote, Wallet, Building2 };

export default function ModulesGrid() {
  return (
    <section className="bg-surface py-20" id="modulos">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-accent">
            Plataforma SaaS
          </span>
          <h2 className="mt-3 font-display text-3xl text-white lg:text-4xl">
            Funcionalidades core do software
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {modules.map((m) => {
            const Icon = icons[m.icon];
            return (
              <div
                key={m.slug}
                className="rounded-xl border border-slate-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl text-slate-900">{m.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {m.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
