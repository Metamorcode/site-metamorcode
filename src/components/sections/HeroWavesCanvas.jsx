import { useEffect, useRef } from 'react';

// Paleta oficial do site (src/index.css): banda 1 em ciano de destaque,
// banda 2 na rampa de roxo da marca Metamorcode.
const CYAN = ['#22d3ee', '#a94fc4'];
const PURPLE = ['#a94fc4', '#7a1f96', '#5b0073', '#7a1f96', '#46005a'];

function pickColor(bandIdx, i) {
  const pal = bandIdx === 0 ? CYAN : PURPLE;
  return pal[i % pal.length];
}

// Loop perfeito: todas as velocidades são múltiplos inteiros de (2π / LOOP),
// então em t = LOOP a animação volta exatamente ao estado de t = 0.
const LOOP = 26;
const UNIT = (Math.PI * 2) / LOOP;

function rndInt(a, b) {
  return a + Math.floor(Math.random() * (b - a + 1));
}

function buildLines() {
  const LINES = [];
  const N_PER_BAND = 7;
  const bands = [
    { sign: 1, k: 0.0021 },
    { sign: -1, k: 0.0021 },
  ];

  bands.forEach((band, bIdx) => {
    for (let i = 0; i < N_PER_BAND; i++) {
      const tpos = i / (N_PER_BAND - 1);
      const idx = bIdx * N_PER_BAND + i;
      const smoky = idx % 4 === 1;
      LINES.push({
        band: bIdx,
        sign: band.sign,
        color: pickColor(bIdx, i),
        smoky,
        baseAmp: 130 + (tpos - 0.5) * 40,
        ampScale: 0.82 + Math.random() * 0.32,
        offset: (tpos - 0.5) * 70,
        phase: (tpos - 0.5) * 0.55 + Math.random() * Math.PI * 2,
        speed: UNIT * rndInt(3, 6),
        k: band.k * (0.95 + Math.random() * 0.1),
        k2: 0.006 + Math.random() * 0.004,
        amp2: smoky ? 18 + Math.random() * 16 : 10 + Math.random() * 14,
        w2: UNIT * rndInt(4, 9),
        phase2: Math.random() * Math.PI * 2,
        flickerSpeed: UNIT * rndInt(3, 8),
        flickerPhase: Math.random() * Math.PI * 2,
        width: smoky ? 2.4 + Math.random() * 1.4 : 1 + tpos * 0.6 + Math.random() * 0.6,
      });
    }
  });

  return LINES;
}

function waveY(line, x, t, midY) {
  const main =
    line.baseAmp * line.ampScale * line.sign *
    Math.sin(x * line.k + t * line.speed + line.phase);
  const tex = line.amp2 * Math.sin(x * line.k2 + t * line.w2 + line.phase2);
  return midY + line.offset + main + tex;
}

export default function HeroWavesCanvas({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    const off = document.createElement('canvas');
    const octx = off.getContext('2d');

    let W = 0;
    let H = 0;
    let DPR = 1;

    function resize() {
      // DPR alto com um canvas full-width fica caro para redesenhar a
      // ~60fps (shadowBlur é O(raio²)); 1x já é nítido o bastante aqui.
      DPR = Math.min(window.devicePixelRatio || 1, 1);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = off.width = W * DPR;
      canvas.height = off.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      octx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const LINES = buildLines();
    const t0 = performance.now();
    let rafId = null;
    let visible = true;

    // Pausa o loop quando a seção sai da viewport, para não gastar CPU
    // (e travar o scroll) enquanto o utilizador já passou por ela.
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && rafId === null && !reduceMotion) {
          rafId = requestAnimationFrame(frame);
        }
      },
      { rootMargin: '200px 0px' }
    );
    io.observe(canvas);

    const FRAME_INTERVAL = 1000 / 30; // limita a ~30fps
    let lastDraw = 0;

    function frame(now) {
      if (!visible) {
        rafId = null;
        return;
      }
      if (now - lastDraw < FRAME_INTERVAL) {
        rafId = requestAnimationFrame(frame);
        return;
      }
      lastDraw = now;

      const t = ((now - t0) / 1000) % LOOP;
      const midY = H * 0.5;

      octx.clearRect(0, 0, W, H);
      octx.globalCompositeOperation = 'lighter';

      const step = Math.max(10, Math.round(W / 140));

      LINES.filter((l) => l.smoky).forEach((line) => {
        const flicker = 0.55 + 0.45 * Math.sin(t * line.flickerSpeed + line.flickerPhase);
        octx.beginPath();
        for (let x = -40; x <= W + 40; x += step) {
          const y = waveY(line, x, t, midY);
          if (x === -40) octx.moveTo(x, y);
          else octx.lineTo(x, y);
        }
        octx.lineWidth = line.width * (1.6 + 0.8 * flicker);
        octx.strokeStyle = line.color;
        octx.shadowColor = line.color;
        octx.shadowBlur = 16 + 14 * flicker;
        octx.globalAlpha = 0.22 + 0.18 * flicker;
        octx.stroke();
      });

      LINES.forEach((line) => {
        const flicker = 0.55 + 0.45 * Math.sin(t * line.flickerSpeed + line.flickerPhase);
        octx.beginPath();
        for (let x = -40; x <= W + 40; x += step) {
          const y = waveY(line, x, t, midY);
          if (x === -40) octx.moveTo(x, y);
          else octx.lineTo(x, y);
        }
        octx.lineWidth = line.width * (0.75 + 0.5 * flicker);
        octx.strokeStyle = line.color;
        octx.shadowColor = line.color;
        octx.shadowBlur = (line.smoky ? 8 : 5) + 6 * flicker;
        octx.globalAlpha = (line.smoky ? 0.35 : 0.55) + 0.45 * flicker;
        octx.stroke();
      });
      octx.globalAlpha = 1;

      octx.globalCompositeOperation = 'destination-in';
      const grad = octx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0.0, 'rgba(0,0,0,0)');
      grad.addColorStop(0.28, 'rgba(0,0,0,1)');
      grad.addColorStop(0.72, 'rgba(0,0,0,1)');
      grad.addColorStop(1.0, 'rgba(0,0,0,0)');
      octx.fillStyle = grad;
      octx.fillRect(0, 0, W, H);
      octx.globalCompositeOperation = 'source-over';

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#050508';
      ctx.fillRect(0, 0, W, H);

      const vg = ctx.createRadialGradient(
        W / 2, H / 2, 0,
        W / 2, H / 2, Math.max(W, H) * 0.5
      );
      vg.addColorStop(0, 'rgba(90,70,160,0.16)');
      vg.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, W, H);

      ctx.drawImage(off, 0, 0, W, H);

      if (!reduceMotion) rafId = requestAnimationFrame(frame);
      else rafId = null;
    }
    if (!reduceMotion) rafId = requestAnimationFrame(frame);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
