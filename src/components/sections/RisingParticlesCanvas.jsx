import { useEffect, useRef } from 'react';

/**
 * RisingParticlesCanvas — Elemento visual de assinatura para Financeiro & Billing.
 *
 * Partículas em gold e roxo accent sobem de baixo para cima, atrás do widget
 * da calculadora — direção oposta à "Chuva de Sinais" de RH & Escalas, para
 * reforçar a identidade própria desta página. Animação 30fps, ciclo fechado,
 * só ativa quando visível (IntersectionObserver).
 *
 * `intensity` (0 a 1) permite ligar a densidade/velocidade das partículas ao
 * valor recalculado da calculadora: sobe quando o valor sobe, desce quando desce.
 */
export default function RisingParticlesCanvas({ intensity = 0.5 }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const isVisibleRef = useRef(false);
  const intensityRef = useRef(intensity);

  useEffect(() => {
    intensityRef.current = Math.min(1, Math.max(0, intensity));
  }, [intensity]);

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

    // Pré-gerar posições/tempos fixos das partículas (não aleatórias a cada render)
    const PARTICLE_COUNT = 12;
    const CYCLE_DURATION = 8000; // 8 segundos para ciclo completo
    const CANVAS_WIDTH = canvas.width / dpr;
    const CANVAS_HEIGHT = canvas.height / dpr;

    const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      x: (i / PARTICLE_COUNT) * CANVAS_WIDTH,
      startTime: (i / PARTICLE_COUNT) * CYCLE_DURATION,
      color: i % 2 === 0 ? '#d9a441' : '#a94fc4', // Gold ou roxo accent
      size: 2 + Math.random() * 2,
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

      // Intensidade (0 a 1) acelera ligeiramente o ciclo, sem o encurtar demasiado
      const speedFactor = 0.85 + intensityRef.current * 0.3;
      const cycleTime =
        ((currentTime - cycleStart) * speedFactor) % CYCLE_DURATION;

      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      particles.forEach((particle) => {
        const particleElapsed =
          (cycleTime - particle.startTime + CYCLE_DURATION) % CYCLE_DURATION;
        const progress = particleElapsed / CYCLE_DURATION;

        if (progress < 0 || progress > 1) {
          return;
        }

        // Posição Y: do fundo (CANVAS_HEIGHT * 1.1) até ao topo (-CANVAS_HEIGHT * 0.15)
        const startY = CANVAS_HEIGHT * 1.1;
        const endY = -CANVAS_HEIGHT * 0.15;
        const y = startY + (endY - startY) * progress;

        // Densidade: com intensidade baixa, só metade das partículas fica visível
        const densityThreshold = 0.4 + intensityRef.current * 0.6;
        if ((particle.id % PARTICLE_COUNT) / PARTICLE_COUNT > densityThreshold) {
          return;
        }

        let alpha = 1;
        if (progress < 0.15) {
          alpha = progress / 0.15; // Fade-in
        } else if (progress > 0.85) {
          alpha = 1 - (progress - 0.85) / 0.15; // Fade-out
        }

        const particleX = particle.x;
        const particleY = y;
        const baseSize = particle.size * (0.85 + intensityRef.current * 0.3);

        // Glow ao redor da partícula
        const glowRadius = baseSize * 1.6;
        const gradient = ctx.createRadialGradient(
          particleX,
          particleY,
          0,
          particleX,
          particleY,
          glowRadius,
        );
        gradient.addColorStop(0, `${particle.color}45`);
        gradient.addColorStop(0.7, `${particle.color}20`);
        gradient.addColorStop(1, `${particle.color}00`);

        ctx.fillStyle = gradient;
        ctx.globalAlpha = alpha * 0.6;
        ctx.beginPath();
        ctx.arc(particleX, particleY, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Corpo da partícula
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particleX, particleY, baseSize, 0, Math.PI * 2);
        ctx.fill();
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
