export default function Blog() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
          Artigos
        </span>
        <h1 className="mt-3 font-display text-4xl text-ink">Blog Metamorcode</h1>
        <p className="mt-4 text-ink-soft">
          {/* TODO: buscar posts de um CMS/array e listar em cards, como os
              cards de produto em EcosystemGrid.jsx */}
          Em breve: artigos sobre gestão de RH, cuidado sénior e AgeTech em
          Portugal.
        </p>
      </div>
    </section>
  );
}
