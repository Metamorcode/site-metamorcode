import {
  CalendarPlus, Search, Mail, FileDown, ListX, History, Activity, Repeat,
  HeartPulse, CalendarHeart, BarChart3, Cake,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import NovidadesSection from "@/components/sections/NovidadesSection";
import { rhEscalasFeatures, rhEscalasUpcoming } from "@/data/rhEscalas";

const icons = {
  CalendarPlus, Search, Mail, FileDown, ListX, History, Activity, Repeat,
  HeartPulse, CalendarHeart, BarChart3, Cake,
};

export default function RhEscalasFeatures() {
  return (
    <>
      <section className="bg-black py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                Funcionalidades em detalhe
              </span>
              <h2 className="mt-3 font-display text-3xl text-white lg:text-4xl">
                Tudo o que já corre hoje na sua escala
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {rhEscalasFeatures.map((f, i) => {
              const Icon = icons[f.icon];
              return (
                <Reveal key={f.name} delay={(i % 4) * 50}>
                  <div className="flex h-full gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
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
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <NovidadesSection
        title={rhEscalasUpcoming.title}
        intro={rhEscalasUpcoming.intro}
        items={rhEscalasUpcoming.items}
        icons={icons}
      />
    </>
  );
}
