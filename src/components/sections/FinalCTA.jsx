import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  return (
    <section className="bg-black py-24 text-center">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <h2 className="font-display text-3xl text-white lg:text-4xl">
            Pronto para simplificar a gestão da sua equipa?
          </h2>
          <p className="mt-4 text-slate-300">
            Veja quanto custa para o tamanho da sua operação ou fale
            diretamente com a nossa equipa.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-white rounded-full" asChild>
              <Link to="/precos">Ver Preços e Planos</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10"
              asChild
            >
              <Link to="/suporte#contacto">Falar com a Equipa</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
