import AboutTeaser from "@/components/sections/AboutTeaser";
import Testimonial from "@/components/sections/Testimonial";

export default function Empresa() {
  return (
    <>
      <section className="bg-white py-16 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            A Metamorcode
          </span>
          <h1 className="mt-3 font-display text-4xl text-ink">
            A nossa história e o nosso fundador
          </h1>
          <p className="mt-4 text-ink-soft">
            {/* TODO: adicionar aqui a história completa do fundador e da empresa */}
            Conte aqui a jornada de quem fundou a Metamorcode e o porquê do
            ecossistema Harmony Senior existir.
          </p>
        </div>
      </section>
      <AboutTeaser />
      <Testimonial
        quote="Já não sei o que é ficar até tarde da noite a conferir todas as folhas de ponto dos colaboradores, para poder concluir o financeiro a tempo."
        author="Edu Marques"
        role="Fundador, Cuidar de Si"
        initials="EM"
      />
    </>
  );
}
