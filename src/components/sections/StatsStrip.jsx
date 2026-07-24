import desorganizacaoEmpresarial from '@/assets/desorganização-empresarial.mp4';

const stats = [
  { value: '7+', label: 'perfis profissionais geridos num só lugar' },
  { value: '3', label: 'regimes de encargo calculados automaticamente' },
  { value: '0', label: 'lançamentos manuais na contabilidade' },
  { value: '100%', label: 'conforme legislação laboral PT' },
];

export default function StatsStrip() {
  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              Gestão operacional complexa com tecnologia
            </span>
            <h2 className="mt-2 font-display text-5xl font-bold text-white lg:text-6xl">
              Deixe de gerir o seu negócio de forma manual
            </h2>
            <p className="mt-6 text-lg text-white/80 lg:text-xl">
              O <strong className="text-white">MetaSenior ERP</strong> centraliza e
              automatiza toda a gestão operacional da sua empresa, desde o
              onboarding dos colaboradores até ao processamento salarial.
            </p>
            <p className="mt-4 text-lg text-white/80 lg:text-xl">
              <strong className="text-white">
                Crie escalas em minutos, controle assiduidade e horários
              </strong>
              , valide folhas de presença, calcule automaticamente os valores
              a pagar aos colaboradores e tenha total apoio na gestão
              financeira da operação.
            </p>
            <p className="mt-4 text-lg text-white/80 lg:text-xl">
              Em conjunto com o <strong className="text-white">MetaBox</strong>,
              garante um{' '}
              <strong className="text-white">
                registo de ponto transparente e fiável
              </strong>
              , eliminando erros, papelada e tarefas repetitivas.
            </p>
            <p className="mt-4 text-lg text-white/80 lg:text-xl">
              Menos tempo com processos administrativos.{' '}
              <strong className="text-white">
                Mais tempo para gerir equipas, tomar decisões e fazer crescer o
                seu negócio.
              </strong>
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <video
              className="h-full min-h-[420px] w-full object-cover"
              src={desorganizacaoEmpresarial}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}