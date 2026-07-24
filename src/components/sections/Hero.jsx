import HeroModulesShowcase from './HeroModulesShowcase';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-28 text-center lg:py-5">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
          ERP Operacional Multi-Empresa
        </span>

        <h1 className="mt-8 font-display text-7xl font-bold leading-[0.95] text-white lg:text-5xl">
          MetaSenior<span className="text-accent"> ERP</span>
        </h1>

        <p className="mx-auto mt-17 mt-6 max-w-2xl text-xl leading-relaxed text-white">
          A Metamorcode oferece o primeiro ERP operacional que conecta escalas, dispositivo de picagem de ponto e a sua contabilidade.
        </p>

      </div>

      <HeroModulesShowcase />
    </section>
  );
}
