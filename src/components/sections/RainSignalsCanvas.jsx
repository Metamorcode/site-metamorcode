import { useEffect, useRef } from 'react';

/**
 * RainSignalsCanvas — Elemento visual de assinatura para RH & Escalas.
 *
 * Gotas caindo em roxo accent e gold, representando notificações de WhatsApp
 * a chegarem aos colaboradores elegíveis. Animação 30fps, ciclo fechado,
 * só activa quando visível (IntersectionObserver).
 *
 * Implementação: Canvas com pré-alocação de posições/tempos fixos entre renders,
 * para evitar flickering e manter performance consistente.
 */
export default function RainSignalsCanvas() {
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

    // Pré-gerar posições/tempos fixos das gotas (não aleatórias a cada render)
    const DROP_COUNT = 12;
    const CYCLE_DURATION = 8000; // 8 segundos para ciclo completo
    const CANVAS_WIDTH = canvas.width / dpr;
    const CANVAS_HEIGHT = canvas.height / dpr;

    const drops = Array.from({ length: DROP_COUNT }, (_, i) => ({
      id: i,
      x: (i / DROP_COUNT) * CANVAS_WIDTH,
      startTime: (i / DROP_COUNT) * CYCLE_DURATION,
      color: i % 2 === 0 ? '#a94fc4' : '#d9a441', // Roxo accent ou gold
      size: 2 + Math.random() * 2,
      speed: 20 + Math.random() * 10, // px/ms
    }));

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

      // Tempo dentro do ciclo (0 a CYCLE_DURATION)
      const cycleTime = (currentTime - cycleStart) % CYCLE_DURATION;

      // Limpar canvas
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Desenhar cada gota
      drops.forEach((drop) => {
        // Tempo desde o início desta gota (relativo ao seu startTime)
        const dropElapsed =
          (cycleTime - drop.startTime + CYCLE_DURATION) % CYCLE_DURATION;

        // Progresso da gota: 0 a 1 (0% no topo, 100% no fundo + dissolve)
        const progress = dropElapsed / CYCLE_DURATION;

        // Se ainda não começou, skip
        if (progress < 0 || progress > 1) {
          return;
        }

        // Posição Y: do topo (-CANVAS_HEIGHT * 0.1) até ao fundo (CANVAS_HEIGHT * 1.15)
        const startY = -CANVAS_HEIGHT * 0.1;
        const endY = CANVAS_HEIGHT * 1.15;
        const y = startY + (endY - startY) * progress;

        // Alpha: fade-in no início (0% a 15%), mantém-se, fade-out no fim (85% a 100%)
        let alpha = 1;
        if (progress < 0.15) {
          alpha = progress / 0.15; // Fade-in
        } else if (progress > 0.85) {
          alpha = 1 - (progress - 0.85) / 0.15; // Fade-out
        }

        // Desenhar gota (gota d'água)
        const dropX = drop.x;
        const dropY = y;
        const baseSize = drop.size;

        // Glow ao redor da gota
        const glowRadius = baseSize * 1.5;
        const gradient = ctx.createRadialGradient(
          dropX,
          dropY,
          0,
          dropX,
          dropY,
          glowRadius,
        );
        gradient.addColorStop(0, `${drop.color}40`); // Cor base com alpha 25%
        gradient.addColorStop(0.7, `${drop.color}20`); // Intermédio
        gradient.addColorStop(1, `${drop.color}00`); // Transparente

        ctx.fillStyle = gradient;
        ctx.globalAlpha = alpha * 0.6;
        ctx.beginPath();
        ctx.arc(dropX, dropY, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Corpo da gota (gota d'água com forma)
        ctx.globalAlpha = alpha;
        ctx.fillStyle = drop.color;
        ctx.beginPath();
        // Forma de gota: semicírculo no topo + ponta no fundo
        ctx.arc(dropX, dropY - baseSize * 0.3, baseSize, 0, Math.PI * 2);
        ctx.moveTo(dropX, dropY + baseSize * 1.2);
        ctx.lineTo(dropX + baseSize * 0.5, dropY + baseSize * 0.3);
        ctx.lineTo(dropX - baseSize * 0.5, dropY + baseSize * 0.3);
        ctx.closePath();
        ctx.fill();

        // Small glow na base (quando se dissolve, ~progress > 85%)
        if (progress > 0.85) {
          const glowIntensity = (progress - 0.85) / 0.15; // 0 a 1
          const dissolveBrightness = Math.max(0, 1 - glowIntensity);
          ctx.globalAlpha = dissolveBrightness * 0.3;
          ctx.fillStyle = drop.color;
          const dissolvePulseRadius = baseSize * (1 + glowIntensity * 2);
          ctx.beginPath();
          ctx.arc(dropX, dropY, dissolvePulseRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    // IntersectionObserver para só animar quando visível
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

  // Respeitar prefers-reduced-motion: se ativo, não mostrar canvas
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{
        opacity: prefersReducedMotion ? 0.1 : 0.8,
        background: 'transparent',
      }}
      aria-hidden="true"
    />
  );
}
