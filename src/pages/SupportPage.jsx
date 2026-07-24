import FAQSection from "@/components/sections/FAQSection";
import ContactForm from "@/components/sections/ContactForm";
import Reveal from "@/components/Reveal";

export default function SupportPage() {
  return (
    <>
      <section className="bg-black py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              Suporte
            </span>
            <h1 className="mt-3 font-display text-4xl text-white lg:text-5xl">
              Estamos aqui para ajudar
            </h1>
            <p className="mt-4 text-slate-300">
              Consulte as perguntas mais frequentes ou fale diretamente com a
              nossa equipa.
            </p>
          </Reveal>
        </div>
      </section>

      <div id="faq">
        <FAQSection />
      </div>
      <div id="contacto">
        <ContactForm />
      </div>
    </>
  );
}
