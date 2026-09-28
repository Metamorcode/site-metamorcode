import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-6 py-32 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-purple-500">Erro 404</p>
      <h1 className="mt-4 text-3xl font-extrabold md:text-4xl">Esta página não existe</h1>
      <p className="mt-4 text-base opacity-80">
        O endereço pode ter mudado ou estar escrito de forma diferente.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" className="rounded-full bg-purple-700 px-6 py-3 font-bold text-white hover:bg-purple-800">
          Voltar ao início
        </Link>
        <Link to="/suporte" className="rounded-full border border-purple-700 px-6 py-3 font-bold hover:bg-purple-700/10">
          Falar com a equipa
        </Link>
      </div>
    </section>
  );
}
