import PricingSection from "@/components/sections/PricingSection";
import Reveal from "@/components/Reveal";

export default function PricingPage() {
  return (
    <>
      <section className="bg-black py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              Preços e Planos
            </span>
            <h1 className="mt-3 font-display text-4xl text-white lg:text-5xl">
              Um preço justo, para o tamanho da sua equipa
            </h1>
            <p className="mt-4 text-slate-300">
              Sem letras pequenas: taxa de ativação fixa, custo por
              colaborador de acordo com o tier, e hardware MetaBox opcional.
              Simule abaixo o valor exato da sua mensalidade.
            </p>
          </Reveal>
        </div>
      </section>

      <PricingSection />
    </>
  );
}
