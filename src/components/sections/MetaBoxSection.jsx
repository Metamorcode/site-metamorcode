import { Nfc, MonitorSmartphone, ShieldCheck } from "lucide-react";
import { metaboxFeatures } from "@/data/metabox";

const icons = { Nfc, MonitorSmartphone, ShieldCheck };

export default function MetaBoxSection() {
  return (
    <section className="bg-black py-20" id="metabox">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <span className="rounded-full bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
              Ecossistema de hardware premium
            </span>
            <h2 className="mt-4 font-display text-3xl text-white lg:text-4xl">
              MetaBox
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">
              O terminal físico que liga a operação no terreno ao MetaSenior
              ERP, em tempo real.
            </p>

            <div className="mt-8 space-y-6">
              {metaboxFeatures.map((f) => {
                const Icon = icons[f.icon];
                return (
                  <div key={f.name} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg text-white">{f.name}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/50">
                        {f.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mock visual do dispositivo */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-5 shadow-2xl">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-center justify-between text-[10px] text-slate-400">
                  <span>MetaBox · Kiosk</span>
                  <span>09:41</span>
                </div>
                <div className="rounded-xl bg-primary-50 p-4 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white mx-auto">
                    <Nfc className="h-6 w-6" />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-slate-900">
                    Aproxime o seu cartão
                  </p>
                  <p className="text-xs text-slate-500">Entrada registada às 08:02</p>
                </div>
                <div className="mt-3 space-y-2">
                  {["Turno 08:00–16:00", "Cliente: R. das Flores, 21", "Próxima visita: 16:30"].map(
                    (t) => (
                      <div key={t} className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600">
                        {t}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
