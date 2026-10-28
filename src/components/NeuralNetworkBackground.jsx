import { useEffect, useRef } from 'react';

const TOTAL = 160;
const CONNECT_DIST = 130;
const MOUSE_DIST = 160;
const MOUSE_PUSH = 120;
const BASE_SPEED = 0.35;

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export default function NeuralNetworkBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999, vx: 0, vy: 0, px: -9999, py: -9999 });
  const nodesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    let W = window.innerWidth;
    let H = window.innerHeight;

    function initNodes() {
      nodesRef.current = Array.from({ length: TOTAL }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * BASE_SPEED,
        vy: (Math.random() - 0.5) * BASE_SPEED,
        ox: 0,
        oy: 0,
        r: Math.random() * 1.4 + 0.5,
        bright: Math.random(),
      }));
    }

    function resize() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes();
    }

    function drawFrame() {
      animationRef.current = requestAnimationFrame(drawFrame);
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, W, H);

      const mouse = mouseRef.current;
      mouse.vx = mouse.x - mouse.px;
      mouse.vy = mouse.y - mouse.py;
      mouse.px = mouse.x;
      mouse.py = mouse.y;
      const mSpeed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);

      for (const n of nodesRef.current) {
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);

        if (d < MOUSE_PUSH && d > 0) {
          const strength = (1 - d / MOUSE_PUSH) * (2.5 + mSpeed * 0.08);
          n.ox += (dx / d) * strength * 0.18;
          n.oy += (dy / d) * strength * 0.18;
        }

        n.ox *= 0.9;
        n.oy *= 0.9;
        n.x += n.vx + n.ox;
        n.y += n.vy + n.oy;

        if (n.x < -10) n.x = W + 10;
        if (n.x > W + 10) n.x = -10;
        if (n.y < -10) n.y = H + 10;
        if (n.y > H + 10) n.y = -10;
      }

      for (let i = 0; i < nodesRef.current.length; i += 1) {
        const a = nodesRef.current[i];

        if (mouse.x > 0) {
          const mdx = a.x - mouse.x;
          const mdy = a.y - mouse.y;
          const md = Math.sqrt(mdx * mdx + mdy * mdy);
          if (md < MOUSE_DIST) {
            const t = 1 - md / MOUSE_DIST;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(180,130,255,${t * 0.55})`;
            ctx.lineWidth = t * 1.0;
            ctx.stroke();
          }
        }

        for (let j = i + 1; j < nodesRef.current.length; j += 1) {
          const b = nodesRef.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < CONNECT_DIST) {
            const t = 1 - d / CONNECT_DIST;
            const mda = Math.sqrt((a.x - mouse.x) ** 2 + (a.y - mouse.y) ** 2);
            const mdb = Math.sqrt((b.x - mouse.x) ** 2 + (b.y - mouse.y) ** 2);
            const nearMouse = Math.max(0, 1 - Math.min(mda, mdb) / (MOUSE_DIST * 1.5));
            const push = Math.sqrt((a.ox + b.ox) ** 2 + (a.oy + b.oy) ** 2) * 0.5;
            const alpha = Math.min(t * 0.18 + nearMouse * 0.45 + push * 0.12, 0.75);
            const r = Math.round(lerp(100, 200, nearMouse + t * 0.3));
            const g = Math.round(lerp(20, 100, nearMouse * 0.4));
            const bv = Math.round(lerp(180, 255, nearMouse + t * 0.2));

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${r},${g},${bv},${alpha})`;
            ctx.lineWidth = 0.4 + t * 0.5 + nearMouse * 0.6;
            ctx.stroke();
          }
        }
      }

      for (const n of nodesRef.current) {
        const push = Math.sqrt(n.ox * n.ox + n.oy * n.oy);
        const mdn = Math.sqrt((n.x - mouse.x) ** 2 + (n.y - mouse.y) ** 2);
        const near = mouse.x > 0 ? Math.max(0, 1 - mdn / MOUSE_DIST) : 0;
        const rad = n.r + push * 0.6 + near * 1.5;
        const rr = Math.round(lerp(120, 220, near + n.bright * 0.3));
        const gg = Math.round(lerp(20, 80, near * 0.5));
        const bb = Math.round(lerp(200, 255, near + n.bright * 0.2));
        const al = lerp(0.35, 0.95, near + n.bright * 0.2);
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, rad * 7);
        grd.addColorStop(0, `rgba(${rr},${gg},${bb},${al})`);
        grd.addColorStop(0.35, `rgba(${rr},${gg},${bb},${al * 0.3})`);
        grd.addColorStop(1, `rgba(${rr},${gg},${bb},0)`);

        ctx.beginPath();
        ctx.arc(n.x, n.y, rad * 7, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(rad * 0.55, 0.8), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rr},${gg},${bb},${al + 0.15})`;
        ctx.fill();
      }
    }

    function handleMouseMove(e) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    }

    function handleTouchMove(e) {
      if (e.touches && e.touches[0]) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
      }
    }

    function handleMouseLeave() {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    animationRef.current = requestAnimationFrame(drawFrame);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="neural-network-background fixed inset-0 -z-10 pointer-events-none"
      style={{ backgroundColor: '#000' }}
      aria-hidden="true"
    />
  );
}
