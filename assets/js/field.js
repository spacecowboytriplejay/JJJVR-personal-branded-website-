/* ============================================================
   field.js — the motion engine.
   One file, six effects, all progressive enhancement.
   A canvas declares its effect: <canvas data-effect="pixels">.
   Crawlers, no-JS readers, and reduced-motion users get the
   complete site without any of this. Content never lives here.

   pixels  — Osmantic-style dithered fragment wave (home hero)
   city    — Tron light-trails over the Mind city image (post hero)
   neural  — firing network (intelligence page)
   bits    — dissolving bit-grid rain (bits page)
   atom    — nucleus + orbiting electrons (atoms page)
   current — energy lines with traveling pulses (electrons page)
   ============================================================ */

document.documentElement.classList.add("js");

/* reveal on scroll */
(() => {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("in")); return; }
  const io = new IntersectionObserver(
    (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));
})();

(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const canvases = document.querySelectorAll("canvas[data-effect]");
  if (!canvases.length) return;

  const CYAN = "140,200,255", MAG = "255,90,200", AMBER = "255,180,80", WHITE = "244,244,246";
  const rnd = (a, b) => a + Math.random() * (b - a);

  /* 4x4 Bayer matrix for ordered dithering */
  const BAYER = [0,8,2,10, 12,4,14,6, 3,11,1,9, 15,7,13,5].map((v) => v / 16);

  const EFFECTS = {

    /* Osmantic clone: coarse monochrome fragment field, a slow wave
       moving through a dithered grid, rare cyan sparks. */
    pixels(ctx, w, h, t) {
      const cell = 8;
      const cols = Math.ceil(w / cell), rows = Math.ceil(h / cell);
      for (let gy = 0; gy < rows; gy++) {
        for (let gx = 0; gx < cols; gx++) {
          const x = gx * cell, y = gy * cell;
          const v =
            0.5 + 0.28 * Math.sin(gx * 0.16 + t * 0.0006) * Math.cos(gy * 0.21 - t * 0.0004) +
            0.22 * Math.sin((gx + gy) * 0.09 + t * 0.0009);
          const d = BAYER[(gy % 4) * 4 + (gx % 4)];
          if (v > 0.62 + d * 0.34) {
            const spark = v > 1.02;
            ctx.fillStyle = spark ? `rgba(${CYAN},0.5)` : `rgba(${WHITE},${(0.05 + (v - 0.62) * 0.16).toFixed(3)})`;
            ctx.fillRect(x, y, cell - 1.5, cell - 1.5);
          }
        }
      }
    },

    /* Light-trails across the city: horizontal traffic lanes with
       glowing heads and fading tails, plus a slow scan shimmer. */
    city(ctx, w, h, t, S) {
      if (!S.trails) {
        S.trails = Array.from({ length: 9 }, () => ({
          y: rnd(0.35, 0.92), x: Math.random(), v: rnd(0.05, 0.22) * (Math.random() < 0.5 ? 1 : -1),
          c: [CYAN, CYAN, MAG, AMBER][Math.floor(Math.random() * 4)], len: rnd(0.06, 0.16), w: rnd(1, 2.2),
        }));
      }
      for (const tr of S.trails) {
        tr.x += tr.v * 0.004;
        if (tr.x > 1.25) { tr.x = -0.25; tr.y = rnd(0.35, 0.92); }
        if (tr.x < -0.25) { tr.x = 1.25; tr.y = rnd(0.35, 0.92); }
        const y = tr.y * h, x = tr.x * w, L = tr.len * w * Math.sign(tr.v);
        const g = ctx.createLinearGradient(x - L, y, x, y);
        g.addColorStop(0, `rgba(${tr.c},0)`);
        g.addColorStop(1, `rgba(${tr.c},0.55)`);
        ctx.strokeStyle = g; ctx.lineWidth = tr.w;
        ctx.beginPath(); ctx.moveTo(x - L, y); ctx.lineTo(x, y); ctx.stroke();
        ctx.fillStyle = `rgba(${WHITE},0.9)`;
        ctx.beginPath(); ctx.arc(x, y, tr.w * 0.9, 0, Math.PI * 2); ctx.fill();
      }
      /* scan shimmer */
      const sy = ((t * 0.02) % (h * 1.6)) - h * 0.3;
      const sg = ctx.createLinearGradient(0, sy, 0, sy + 80);
      sg.addColorStop(0, "rgba(140,200,255,0)");
      sg.addColorStop(0.5, "rgba(140,200,255,0.045)");
      sg.addColorStop(1, "rgba(140,200,255,0)");
      ctx.fillStyle = sg; ctx.fillRect(0, sy, w, 80);
    },

    /* Firing network: fixed nodes, pulses traveling along edges. */
    neural(ctx, w, h, t, S) {
      if (!S.nodes) {
        S.nodes = Array.from({ length: 26 }, () => ({ x: Math.random() * w, y: Math.random() * h }));
        S.edges = [];
        for (let i = 0; i < S.nodes.length; i++) {
          for (let j = i + 1; j < S.nodes.length; j++) {
            const a = S.nodes[i], b = S.nodes[j];
            if (Math.hypot(a.x - b.x, a.y - b.y) < Math.min(w, h) * 0.32 && Math.random() < 0.5)
              S.edges.push({ a, b, p: Math.random(), v: rnd(0.002, 0.007) });
          }
        }
      }
      ctx.strokeStyle = "rgba(255,255,255,0.05)"; ctx.lineWidth = 1;
      for (const e of S.edges) {
        ctx.beginPath(); ctx.moveTo(e.a.x, e.a.y); ctx.lineTo(e.b.x, e.b.y); ctx.stroke();
      }
      for (const e of S.edges) {
        e.p += e.v; if (e.p > 1) e.p = 0;
        const x = e.a.x + (e.b.x - e.a.x) * e.p, y = e.a.y + (e.b.y - e.a.y) * e.p;
        ctx.fillStyle = `rgba(${CYAN},0.8)`;
        ctx.beginPath(); ctx.arc(x, y, 1.6, 0, Math.PI * 2); ctx.fill();
      }
      for (const n of S.nodes) {
        ctx.fillStyle = `rgba(${WHITE},0.65)`;
        ctx.beginPath(); ctx.arc(n.x, n.y, 2, 0, Math.PI * 2); ctx.fill();
      }
    },

    /* Bit rain: columns of square cells flickering down, dithered. */
    bits(ctx, w, h, t, S) {
      const cell = 12;
      if (!S.cols) {
        S.cols = Array.from({ length: Math.ceil(w / cell) }, () => ({ y: Math.random() * h, v: rnd(0.4, 1.6) }));
      }
      for (let i = 0; i < S.cols.length; i++) {
        const c = S.cols[i];
        c.y += c.v; if (c.y > h + 80) { c.y = -rnd(0, 200); c.v = rnd(0.4, 1.6); }
        for (let k = 0; k < 7; k++) {
          const y = c.y - k * cell;
          if (y < -cell || y > h) continue;
          const on = Math.sin(i * 7 + k * 3 + t * 0.004) > 0;
          const a = (1 - k / 7) * (k === 0 ? 0.75 : 0.28);
          ctx.fillStyle = k === 0 ? `rgba(${CYAN},${a})` : `rgba(${WHITE},${a * (on ? 1 : 0.35)})`;
          ctx.fillRect(i * cell, y, cell - 2, cell - 2);
        }
      }
    },

    /* The atom: nucleus, three tilted shells, orbiting electrons. */
    atom(ctx, w, h, t, S) {
      if (!S.e) S.e = [0, 1, 2].map((i) => ({ a: rnd(0, Math.PI * 2), s: 0.008 + i * 0.004, rx: Math.min(w, h) * (0.18 + i * 0.09), tilt: (i * Math.PI) / 3.2 }));
      const cx = w / 2, cy = h / 2;
      ctx.beginPath(); ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${WHITE},0.95)`; ctx.shadowColor = `rgba(${CYAN},0.9)`; ctx.shadowBlur = 22; ctx.fill(); ctx.shadowBlur = 0;
      for (const e of S.e) {
        e.a += e.s;
        ctx.save(); ctx.translate(cx, cy); ctx.rotate(e.tilt);
        ctx.strokeStyle = "rgba(255,255,255,0.07)";
        ctx.beginPath(); ctx.ellipse(0, 0, e.rx, e.rx * 0.38, 0, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.arc(Math.cos(e.a) * e.rx, Math.sin(e.a) * e.rx * 0.38, 2.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${CYAN},0.95)`; ctx.shadowColor = `rgba(${CYAN},0.9)`; ctx.shadowBlur = 12; ctx.fill(); ctx.shadowBlur = 0;
        ctx.restore();
      }
    },

    /* Current: horizontal conductors with electron pulses. */
    current(ctx, w, h, t, S) {
      if (!S.lines) {
        S.lines = Array.from({ length: 7 }, (_, i) => ({
          y: (h / 8) * (i + 1), pulses: Array.from({ length: 2 }, () => ({ p: Math.random(), v: rnd(0.003, 0.01) })),
        }));
      }
      for (const l of S.lines) {
        ctx.strokeStyle = "rgba(255,255,255,0.06)"; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(0, l.y); ctx.lineTo(w, l.y); ctx.stroke();
        for (const p of l.pulses) {
          p.p += p.v; if (p.p > 1) p.p = 0;
          const x = p.p * w;
          const g = ctx.createLinearGradient(x - 60, l.y, x, l.y);
          g.addColorStop(0, `rgba(${AMBER},0)`); g.addColorStop(1, `rgba(${AMBER},0.6)`);
          ctx.strokeStyle = g; ctx.lineWidth = 1.6;
          ctx.beginPath(); ctx.moveTo(x - 60, l.y); ctx.lineTo(x, l.y); ctx.stroke();
          ctx.fillStyle = `rgba(${WHITE},0.9)`;
          ctx.beginPath(); ctx.arc(x, l.y, 1.8, 0, Math.PI * 2); ctx.fill();
        }
      }
    },
  };

  for (const canvas of canvases) {
    const fx = EFFECTS[canvas.dataset.effect];
    if (!fx) continue;
    const ctx = canvas.getContext("2d");
    const state = {};
    let w, h, raf;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = (canvas.parentElement || canvas).getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      for (const k of Object.keys(state)) delete state[k];
    };

    const loop = (t) => { ctx.clearRect(0, 0, w, h); fx(ctx, w, h, t, state); raf = requestAnimationFrame(loop); };
    const start = () => { cancelAnimationFrame(raf); resize(); raf = requestAnimationFrame(loop); };

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(raf); else raf = requestAnimationFrame(loop);
    });
    let rT; window.addEventListener("resize", () => { clearTimeout(rT); rT = setTimeout(start, 150); });
    start();
  }
})();
