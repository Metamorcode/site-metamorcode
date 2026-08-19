import AboutTeaser from '@/components/sections/AboutTeaser';
import ImpactMetrics from '@/components/sections/ImpactMetrics';
import Testimonial from '@/components/sections/Testimonial';
import Reveal from '@/components/Reveal';
import founderImg from '@/assets/founder.png';

export default function Empresa() {
  return (
    <>
      <section className="bg-white py-16 text-center">
        <div className="mx-auto max-w-6xl px-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            A nossa história
          </span>
          <h1 className="mt-3 font-display text-4xl text-ink lg:text-5xl">
            Tudo começou com o pedido de um cliente: "ajudem-me a gerir as
            escalas da minha equipa"
          </h1>

          <Reveal className="mt-8 space-y-5 text-justify text-base leading-relaxed text-ink-soft lg:text-lg">
            <p>
              A Metamorcode não começou como uma ideia à procura de mercado.
              Começou com um pedido concreto: o Edu, fundador da Cuidar de Si,
              precisava de gerir as escalas dos seus profissionais e sentia, no
              dia a dia, o custo de fazer isso à mão — tempo perdido, erros,
              falta de visibilidade. Foi esse problema real que deu origem ao
              que hoje é o <strong>MetaSenior</strong>.
            </p>
            <p>
              Desde o primeiro dia, este projeto foi construído a par de quem
              conhece o setor por dentro. Enquanto a Metamorcode trouxe a
              engenharia, a Cuidar de Si trouxe a experiência de quem gere
              equipas de cuidado sénior todos os dias — o que falha, o que
              consome tempo, o que realmente faz diferença na operação. Essa
              combinação, entre especialistas em tecnologia e quem realmente
              entende do negócio, moldou cada módulo do MetaSenior — não como
              funcionalidades genéricas escolhidas de um catálogo, mas como
              respostas a problemas que já existiam na prática, antes de existir
              código.
            </p>
            <p>
              O sistema cresceu módulo a módulo, sempre a partir de conversas
              reais com quem o usa — nunca ao contrário. Foi essa proximidade
              que deu origem, por exemplo, ao <strong>MetaBox</strong>: quando
              percebemos que a conferência do ponto dos colaboradores continuava
              a ser feita em papel, à mão, cliente a cliente, construímos um
              dispositivo físico com leitura NFC para resolver exatamente esse
              problema. Não nasceu numa prateleira de produto — nasceu de uma
              dor vista de perto.
            </p>
            <p>
              É assim que continuamos a construir: perto de quem opera no
              terreno, a resolver problemas concretos antes de os transformar em
              produto.
            </p>
          </Reveal>

          <Reveal
            delay={120}
            className="mt-10 rounded-2xl border border-card-border bg-primary-50 p-6"
          >
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
              <img
                src={founderImg}
                alt="Leonardo Almonfrey, fundador da Metamorcode"
                className="h-90 w-72 flex-shrink-0 rounded-3xl object-cover sm:h-100 sm:w-90"
              />
              <div className="text-justify">
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Sobre o fundador
                </span>
                <p className="mt-3 text-sm leading-7 text-ink-soft">
                  Por trás da Metamorcode está{' '}
                  <strong>Leonardo Almonfrey</strong>. Formado em Engenharia
                  Química, fez a transição para a tecnologia através de uma
                  pós-graduação em Business Analytics no ISCAP e outra em
                  Desenvolvimento Web na PUC-RS — uma combinação que une visão
                  de negócio e capacidade técnica, e que se reflete diretamente
                  na forma como a Metamorcode constrói produto: sempre a partir
                  do problema real, nunca da tecnologia pela tecnologia.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* <AboutTeaser /> */}
      {/* <ImpactMetrics /> */}
      {/* <Testimonial /> */}
    </>
  );
}
