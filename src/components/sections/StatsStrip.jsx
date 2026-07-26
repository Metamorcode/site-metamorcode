import desorganizacaoEmpresarial from '@/assets/desorganização-empresarial.mp4';
import filaPicagemPonto from '@/assets/fila-picagem-ponto.mp4';
import operacaoFeliz from '@/assets/operacao-feliz.mp4';

function Video({ src }) {
  return (
    <div className="overflow-hidden rounded-2xl">
      <video
        className="h-full min-h-[420px] w-full object-cover"
        src={src}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}

export default function StatsStrip() {
  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-7xl space-y-16 px-6">
        {/* Bloco 1: o caos operacional do dia a dia */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              Chega de caos operacional
            </span>
            <h2 className="mt-2 font-display text-5xl font-bold text-white lg:text-6xl">
              Pare de perder horas, dinheiro e colaboradores a gerir tudo à mão
            </h2>
            <p className="mt-6 text-lg text-white/80 lg:text-xl">
              Todos os dias, gestores de empresas, instituições seniores, ERPIs e apoio domiciliário
              perdem horas a montar escalas em folhas de cálculo, a corrigir
              erros de assiduidade e a recalcular manualmente quanto pagar a
              cada colaborador. O resultado? Noites a fechar a folha salarial,
              colaboradores insatisfeitos com pagamentos errados, e zero tempo
              sobrando para o que realmente importa: cuidar de quem precisa
              de cuidados.
            </p>
          </div>

          <Video src={desorganizacaoEmpresarial} />
        </div>

        {/* Bloco 2: MetaBox, o registo de ponto com prova de presença */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <Video src={filaPicagemPonto} />
          </div>

          <div className="order-1 text-center lg:order-2 lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              Registo de ponto sem fricção
            </span>
            <h2 className="mt-2 font-display text-5xl font-bold text-white lg:text-6xl">
              Assiduidade registada com prova, não com desculpas
            </h2>
            <p className="mt-6 text-lg text-white/80 lg:text-xl">
              Com o <strong className="text-white">MetaBox</strong>, cada
              entrada e saída fica registada com{' '}
              <strong className="text-white">
                prova inequívoca de presença
              </strong>
              , eliminando de vez a papelada, as marcações fraudulentas e as
              discrepâncias entre escala e realidade que tanto custam a
              resolver.
            </p>
          </div>
        </div>

        {/* Bloco 3: organização que beneficia empresa e colaboradores */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              Organização que se sente no dia a dia
            </span>
            <h2 className="mt-2 font-display text-5xl font-bold text-white lg:text-6xl">
              Sistemas que trabalham para a empresa e para quem lá está
            </h2>
            <p className="mt-6 text-lg text-white/80 lg:text-xl">
              O <strong className="text-white">MetaSenior</strong> junta tudo
              isto num só lugar:{' '}
              <strong className="text-white">
                escalas complexas criadas em minutos
              </strong>
              , assiduidade controlada em tempo real e valores a pagar
              calculados automaticamente — feriados municipais, turnos
              noturnos, múltiplos locais de trabalho — sem margem para erro
              humano.
            </p>
            <p className="mt-4 text-lg text-white/80 lg:text-xl">
              O resultado é uma operação mais previsível para a gestão e{' '}
              <strong className="text-white">
                pagamentos certos e a tempo
              </strong>{' '}
              para os colaboradores.{' '}
              <strong className="text-white">
                Mais tempo para gerir equipas, tomar decisões e fazer crescer
                o seu negócio
              </strong>{' '}
              — com a tranquilidade de saber que nada está a escapar por
              entre os dedos.
            </p>
          </div>

          <Video src={operacaoFeliz} />
        </div>
      </div>
    </section>
  );
}
