import { useEffect, useRef } from 'react';

/**
 * CostFlowLinesCanvas — Elemento visual de assinatura para Tesouraria & Opex.
 *
 * Linhas finas e curvas, em roxo accent com segmentos em gold, atravessam o
 * espaço na horizontal (rasto de luz), da esquerda (origem do lançamento)
 * até à direita (o destino: empresa/cliente/colaborador) — movimento lateral
 * e direcionado, ao contrário da "chuva" (RH & Escalas, vertical descendente)
 * e das "partículas a subir" (Financeiro & Billing, vertical ascendente).
 * Animação 30fps, ciclo fechado, só ativa quando visível (IntersectionObserver).
 */
export default function CostFlowLinesCanvas() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Pré-gerar posições/tempos fixos das linhas (não aleatórias a cada render)
    const LINE_COUNT = 9;
    const CYCLE_DURATION = 9000; // 9 segundos para ciclo completo
    const TRAIL_POINTS = 16;
    const CANVAS_WIDTH = canvas.width / dpr;
    const CANVAS_HEIGHT = canvas.height / dpr;

    const lines = Array.from({ length: LINE_COUNT }, (_, i) => ({
      id: i,
      baseY: ((i + 0.5) / LINE_COUNT) * CANVAS_HEIGHT,
      amplitude: 10 + ((i * 7) % 22),
      frequency: 1 + (i % 3) * 0.4,
      phase: (i / LINE_COUNT) * Math.PI * 2,
      startTime: (i / LINE_COUNT) * CYCLE_DURATION,
      color: i % 3 === 0 ? '#d9a441' : '#a94fc4', // gold a cada 3ª linha, roxo accent nas restantes
      width: 1 + (i % 2) * 0.5,
    }));

    function pointAt(line, progress) {
      const x = -0.12 * CANVAS_WIDTH + progress * 1.24 * CANVAS_WIDTH;
      const y =
        line.baseY +
        Math.sin(progress * Math.PI * 2 * line.frequency + line.phase) * line.amplitude;
      return { x, y };
    }

    let lastFrameTime = performance.now();
    let cycleStart = performance.now();

    const animate = (currentTime) => {
      if (!isVisibleRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const deltaTime = currentTime - lastFrameTime;
      lastFrameTime = currentTime;

      // Limitar a 30fps (~33.3ms por frame)
      if (deltaTime < 33.3) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const cycleTime = (currentTime - cycleStart) % CYCLE_DURATION;
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      lines.forEach((line) => {
        const lineElapsed =
          (cycleTime - line.startTime + CYCLE_DURATION) % CYCLE_DURATION;
        const headProgress = lineElapsed / CYCLE_DURATION;

        // Desenha o rasto: TRAIL_POINTS amostras atrás da cabeça, alpha crescente
        for (let t = TRAIL_POINTS - 1; t >= 0; t--) {
          const segProgress = headProgress - t * 0.006;
          if (segProgress < 0 || segProgress > 1) continue;

          const a = pointAt(line, segProgress);
          const b = pointAt(line, segProgress + 0.006);
          const alpha = (1 - t / TRAIL_POINTS) * 0.55;

          ctx.strokeStyle = line.color;
          ctx.globalAlpha = alpha;
          ctx.lineWidth = line.width;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }

        // Ponto de cabeça, com leve glow
        if (headProgress >= 0 && headProgress <= 1) {
          const head = pointAt(line, headProgress);
          const glowRadius = 5;
          const gradient = ctx.createRadialGradient(
            head.x, head.y, 0,
            head.x, head.y, glowRadius,
          );
          gradient.addColorStop(0, `${line.color}80`);
          gradient.addColorStop(1, `${line.color}00`);
          ctx.fillStyle = gradient;
          ctx.globalAlpha = 1;
          ctx.beginPath();
          ctx.arc(head.x, head.y, glowRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisibleRef.current = true;
          if (!animationRef.current) {
            lastFrameTime = performance.now();
            cycleStart = performance.now();
            animationRef.current = requestAnimationFrame(animate);
          }
        } else {
          isVisibleRef.current = false;
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(canvas);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      observer.disconnect();
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{
        opacity: prefersReducedMotion ? 0.1 : 0.7,
        background: 'transparent',
      }}
      aria-hidden="true"
    />
  );
}
