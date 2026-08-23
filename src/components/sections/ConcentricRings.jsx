/**
 * ConcentricRings — Elemento visual de assinatura para a MetaBox.
 *
 * Anéis concêntricos em `accent`, a expandir e a desvanecer a partir do
 * ícone do terminal (passo 1 da linha do tempo do registo de ponto),
 * como o sinal de um leitor NFC a emitir. CSS puro (mais leve que canvas
 * para um padrão geométrico simples e repetitivo). Requer que o pai
 * tenha `position: relative`.
 */
export default function ConcentricRings() {
  return (
    <span
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
      aria-hidden="true"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="absolute h-full w-full rounded-full border border-accent/60 motion-reduce:hidden"
          style={{
            animation: "metaboxRingExpand 3.6s ease-out infinite",
            animationDelay: `${i * 1.2}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes metaboxRingExpand {
          0% { transform: scale(1); opacity: 0.55; }
          100% { transform: scale(2.8); opacity: 0; }
        }
      `}</style>
    </span>
  );
}
