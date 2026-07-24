import { Link } from 'react-router-dom';
import { modules } from '@/data/modules';
import { metabox } from '@/data/metabox';
import logo from '@/assets/logo.png';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_2fr] break-words">
          <div>
            <Link to="/" className="mb-3 flex items-center gap-2.5">
              <img src={logo} alt="Metamorcode" width={30} height={30} />
              <span className="font-display text-xl text-white">
                Metamorcode
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/50">
              O ERP operacional multi-empresa para equipas de cuidado sénior.
              <br />
              Porto, Portugal.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <div className="mb-3 text-sm font-semibold text-white">
                Módulos e Soluções
              </div>
              <div className="flex flex-col gap-2">
                {modules.map((m) => (
                  <Link
                    key={m.slug}
                    to={`/modulos-e-solucoes/${m.slug}`}
                    className="text-sm text-white/50 hover:text-accent"
                  >
                    {m.name}
                  </Link>
                ))}
                <Link
                  to={`/modulos-e-solucoes/${metabox.slug}`}
                  className="text-sm text-white/50 hover:text-accent"
                >
                  {metabox.name}
                </Link>
              </div>
            </div>

            <div>
              <div className="mb-3 text-sm font-semibold text-white">
                Empresa
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  to="/empresa"
                  className="text-sm text-white/50 hover:text-accent"
                >
                  A Empresa
                </Link>
                <Link
                  to="/precos"
                  className="text-sm text-white/50 hover:text-accent"
                >
                  Preços e Planos
                </Link>
                <Link
                  to="/blog"
                  className="text-sm text-white/50 hover:text-accent"
                >
                  Artigos
                </Link>
              </div>
            </div>

            <div>
              <div className="mb-3 text-sm font-semibold text-white">
                Suporte
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  to="/suporte#faq"
                  className="text-sm text-white/50 hover:text-accent"
                >
                  FAQ
                </Link>
                <Link
                  to="/suporte#contacto"
                  className="text-sm text-white/50 hover:text-accent"
                >
                  Contacte-nos
                </Link>
              </div>
            </div>

            <div>
              <div className="mb-3 text-sm font-semibold text-white">
                Contacto
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:leonardo.almonfrey@metamorcode.com"
                  className="text-sm text-white/50 hover:text-accent"
                >
                  leonardo.almonfrey@metamorcode.com
                </a>
                <a
                  href="https://wa.me/351934340600"
                  className="text-sm text-white/50 hover:text-accent"
                >
                  +351 934 340 600
                </a>
                <span className="text-sm text-white/50">Porto, Portugal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Metamorcode · Todos os direitos reservados</span>
          <span>MetaSenior ERP é um produto da Metamorcode</span>
        </div>
      </div>
    </footer>
  );
}
