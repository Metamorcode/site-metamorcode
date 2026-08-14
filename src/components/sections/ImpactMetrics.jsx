import { Clock, ShieldCheck, Recycle } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import CompareBars from "./CompareBars";
import RadialStat from "./RadialStat";

export default function ImpactMetrics() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-accent">
            Resultados reais, não projeções
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-white lg:text-5xl">
            Dores reais, sanadas por soluções reais
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Estes números não são uma estimativa de marketing — são a
            operação da Cuidar de Si, medida antes e depois da adoção do
            MetaSenior e do MetaBox.
          </p>
        </Reveal>

        <div className="mt-20 space-y-24">
          {/* Bloco 1 — Folha de pagamento */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-accent">
                <Clock className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-3xl text-white lg:text-4xl">
                O fecho da folha de pagamento caiu de{" "}
                <span className="text-accent">8 para 2 dias úteis</span>
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Antes, fechar o processamento salarial de toda a equipa
                exigia quase uma semana inteira de trabalho manual —
                cruzando picagens em papel, escalas e valores a pagar, cliente
                a cliente. Com a integração do MetaBox, esse cruzamento
                passou a ser automático, e o que ocupava 8 dias úteis do mês
                passou a ocupar 2.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <CompareBars
                eyebrow="Fecho da folha de pagamento"
                badge="-75%"
                before={8}
                after={2}
                unit="dias úteis"
                max={8}
              />
            </Reveal>
          </div>

          {/* Bloco 2 — Erros de alocação (invertido) */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className="order-2 lg:order-1">
              <div className="flex justify-center gap-10 rounded-2xl border border-white/10 bg-surface px-6 py-10">
                <RadialStat value={15} label="Antes — erros de alocação" tone="gold" />
                <RadialStat
                  value={0.99}
                  decimals={2}
                  label="Hoje — apenas erro humano"
                  tone="accent"
                />
              </div>
            </Reveal>
            <Reveal delay={120} className="order-1 lg:order-2">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-accent">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-3xl text-white lg:text-4xl">
                Erros de alocação caíram de{" "}
                <span className="text-accent">15% para 0,99%</span>
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Sem visibilidade de onde cada colaborador estava alocado, era
                comum a mesma pessoa acabar escalada para dois turnos ao
                mesmo tempo — gerando atrito com colaboradores e clientes.
                Hoje esse tipo de conflito é sinalizado antes de a escala
                fechar, e o pouco que ainda acontece já não é falha do
                sistema — é exceção humana.
              </p>
            </Reveal>
          </div>

          {/* Bloco 3 — Papel utilizado */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-accent">
                <Recycle className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-3xl text-white lg:text-4xl">
                <span className="text-accent">70% menos papel</span> em
                circulação na operação
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                As folhas de ponto preenchidas à mão em cada cliente, os
                mapas de escala impressos, os registos de férias e baixas em
                papel — grande parte disso deixou de existir. Menos papel a
                imprimir, a arquivar e a perder.
              </p>
            </Reveal>
            <Reveal delay={120} className="flex justify-center">
              <RadialStat value={70} label="Redução de papel utilizado" tone="accent" size={200} />
            </Reveal>
          </div>
        </div>

        {/* Faixa de prova final */}
        <Reveal>
          <div className="mt-20 grid gap-8 rounded-2xl border border-white/10 bg-surface px-8 py-10 sm:grid-cols-3">
            <div className="text-center">
              <span className="font-display text-4xl font-bold text-white">
                <CountUp end={75} suffix="%" />
              </span>
              <p className="mt-2 text-xs uppercase tracking-wide text-white/50">
                mais rápido a fechar a folha
              </p>
            </div>
            <div className="border-white/10 text-center sm:border-x sm:px-8">
              <span className="font-display text-4xl font-bold text-white">
                <CountUp end={93} suffix="%" />
              </span>
              <p className="mt-2 text-xs uppercase tracking-wide text-white/50">
                menos erros de alocação
              </p>
            </div>
            <div className="text-center">
              <span className="font-display text-4xl font-bold text-white">
                <CountUp end={70} suffix="%" />
              </span>
              <p className="mt-2 text-xs uppercase tracking-wide text-white/50">
                menos papel utilizado
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
