import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

/**
 * Seção de destaque de um produto.
 * Props:
 * - eyebrow, title, description: textos principais
 * - bullets: lista de strings (check-list)
 * - ctaLabel, ctaTo: botão principal
 * - reverse: inverte a ordem texto/visual
 * - visual: nó React customizado (gráfico, mock, etc.)
 */
export default function ProductSpotlight({
  eyebrow,
  title,
  description,
  bullets = [],
  ctaLabel,
  ctaTo,
  reverse = false,
  visual,
}) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`grid gap-14 lg:grid-cols-2 lg:items-center ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              {eyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl text-slate-900 lg:text-4xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-500">
              {description}
            </p>

            {bullets.length > 0 && (
              <ul className="mt-6 space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary">
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {ctaLabel && (
              <Button className="mt-8 bg-primary hover:bg-primary-hover text-white rounded-full" asChild>
                <Link to={ctaTo}>{ctaLabel}</Link>
              </Button>
            )}
          </div>

          <div>{visual}</div>
        </div>
      </div>
    </section>
  );
}
