import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { modules } from '@/data/modules';
import { metabox } from '@/data/metabox';
import logo from '@/assets/logo a.png';
import logoHover from '@/assets/logo b.png';

const moduleLinks = [...modules, metabox];

const navLinks = [
  { to: '/precos', label: 'Preços e Planos' },
  { to: '/empresa', label: 'Empresa' },
  { to: '/suporte', label: 'Suporte' },
];

export default function Header() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentLogo, setCurrentLogo] = useState(logo);

  return (
    <header className="z-50 bg-black">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 py-3">
        {/* Grupo esquerdo: logótipo + navegação, tudo alinhado à esquerda */}
        <div className="flex items-center gap-10">
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setMobileOpen(false)}
          >
            {/*logótipo */}
            <span
              className="relative flex shrink-0 items-center justify-center"
              onMouseEnter={() => setCurrentLogo(logoHover)}
              onMouseLeave={() => setCurrentLogo(logo)}
            >
              <img
                src={currentLogo}
                alt="Metamorcode"
                width={250}
                height={70}
                className="relative z-10 "
              />
            </span>
            {/* <span className="text-2xl font-bold text-white transition-colors hover:text-purple-300">
              Metamorcode
            </span> */}
          </Link>

          {/* Nav desktop */}
          <nav className="hidden items-center gap-1 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <Link
                to="/modulos-e-solucoes"
                className="flex items-center gap-1 rounded-full px-4 py-2 text-base font-bold text-white transition-colors hover:text-purple-300"
              >
                Módulos e Soluções
                <ChevronDown className="h-3.5 w-3.5" />
              </Link>

              {productsOpen && (
                <div className="absolute left-0 top-full w-96 pt-3">
                  <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-lg">
                    {moduleLinks.map((m) => (
                      <Link
                        key={m.slug}
                        to={`/modulos-e-solucoes/${m.slug}`}
                        className="block rounded-xl p-3 transition-colors hover:bg-primary-50"
                      >
                        <strong className="text-sm text-slate-900">
                          {m.name}
                        </strong>
                        <span className="mt-0.5 block text-xs text-slate-500">
                          {m.tagline}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-base font-bold transition-colors hover:text-purple-300 ${
                    isActive ? 'text-purple-300' : 'text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="hidden lg:block">
          <div className="group/cta relative inline-block overflow-hidden rounded-full p-[2px]">
            <div
              className="absolute inset-[-150%] opacity-0 transition-opacity duration-300 group-hover/cta:opacity-100"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, transparent 260deg, #e9c6f5 300deg, #a94fc4 330deg, transparent 360deg)",
                animation: "ctaSpin 1.6s linear infinite",
              }}
            />
            <Button
              asChild
              className="relative rounded-full border-2 border-accent bg-black text-white shadow-[0_0_16px_rgba(169,79,196,0.45)] transition-shadow duration-300 hover:bg-accent/10 group-hover/cta:shadow-[0_0_30px_rgba(169,79,196,0.8)]"
            >
              <Link to="/suporte#contacto">Agendar Demonstração</Link>
            </Button>
          </div>
        </div>

        {/* Botão mobile */}
        <button
          className="text-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-4 lg:hidden">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/40">
            Módulos e Soluções
          </div>
          <div className="mb-4 flex flex-col">
            {moduleLinks.map((m) => (
              <Link
                key={m.slug}
                to={`/modulos-e-solucoes/${m.slug}`}
                className="py-2 text-sm text-white/70"
                onClick={() => setMobileOpen(false)}
              >
                {m.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col border-t border-white/10 pt-3">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-2 text-sm font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Button
            asChild
            className="mt-4 w-full rounded-full border-2 border-accent bg-transparent text-white shadow-[0_0_16px_rgba(169,79,196,0.45)] hover:bg-accent/10"
          >
            <Link to="/suporte#contacto" onClick={() => setMobileOpen(false)}>
              Agendar Demonstração
            </Link>
          </Button>
        </div>
      )}

      <style>{`
        @keyframes ctaSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="ctaSpin"] { animation: none !important; }
        }
      `}</style>
    </header>
  );
}
