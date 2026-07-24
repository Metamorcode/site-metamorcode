import FAQSection from "@/components/sections/FAQSection";

export default function FAQPage() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
          Suporte
        </span>
        <h1 className="mt-3 font-display text-4xl text-ink">
          Perguntas frequentes
        </h1>
      </div>
      <FAQSection showHeading={false} />
    </section>
  );
}
