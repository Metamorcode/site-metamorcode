import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const pillars = [
  {
    title: "Nascidos no setor",
    text: "Construído junto de instituições reais, para problemas reais.",
  },
  {
    title: "Software + consultoria",
    text: "Tecnologia acompanhada de apoio humano especializado.",
  },
  {
    title: "Compromisso local",
    text: "Equipa portuguesa, pensada para a legislação portuguesa.",
  },
];

export default function AboutTeaser() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Quem somos
          </span>
          <h2 className="mt-3 font-display text-3xl text-ink lg:text-4xl">
            Tecnologia feita por quem entende cuidados sénior
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            A Metamorcode nasceu no Porto, da vontade de mudar a forma como as
            instituições de cuidado sénior trabalham. Depois de conhecer de
            perto os desafios reais de quem gere equipas de cuidados —
            escalas feitas à mão, madrugadas perdidas a fechar o
            processamento salarial, informação espalhada por cadernos e
            ficheiros soltos — construímos o <strong>MetaSenior ERP</strong>:
            um sistema único que gere toda a equipa, do contrato à fatura.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-card-border bg-white p-4">
                <h3 className="font-display text-lg text-ink">{p.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{p.text}</p>
              </div>
            ))}
          </div>

          <Link
            to="/empresa"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-primary"
          >
            Conhecer a nossa história e o nosso fundador
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center justify-center rounded-3xl border border-card-border bg-white p-14">
          <div className="text-center">
            <img src={logo} alt="Metamorcode" className="mx-auto h-24 w-24" />
            <h3 className="mt-4 font-display text-2xl text-ink">Metamorcode</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
