'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { GALLERY } from '../data/gallery';
import Navigation from './Navigation';

type Mode = 'canvas' | 'grid';

const isVideo = (src: string) => /\.(mp4|webm|mov|m4v)$/i.test(src);

// Videos play muted on loop in the gallery; images render as usual.
function Media({ src, alt, lazy = true }: { src: string; alt: string; lazy?: boolean }) {
  return isVideo(src)
    ? <video src={src} autoPlay muted loop playsInline preload="metadata" aria-label={alt} />
    : <img src={src} alt={alt} draggable={false} loading={lazy ? 'lazy' : undefined} />;
}

// Seeded random so the canvas layout is the same on every visit.
function rng(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

const CANVAS_RATIOS = [1, 4 / 5, 16 / 10, 3 / 4, 16 / 9];

function CanvasView({ onOpen }: { onOpen: (i: number) => void }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const dispRef = useRef<SVGFEDisplacementMapElement>(null);
  const turbRef = useRef<SVGFETurbulenceElement>(null);
  const tileRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const moved = useRef(false);

  useEffect(() => {
    const stage = stageRef.current!;
    const world = worldRef.current!;
    let vw = window.innerWidth;
    let vh = window.innerHeight;
    let W = 0, H = 0;
    let layout: { x: number; y: number; w: number; h: number; z: number }[] = [];

    // Jittered grid inside one block; the block repeats endlessly in every direction.
    const build = () => {
      vw = window.innerWidth; vh = window.innerHeight;
      W = Math.max(vw + 800, 2400);
      H = Math.max(vh + 700, 1800);
      const n = GALLERY.length;
      const cols = Math.ceil(Math.sqrt((n * W) / H));
      const rows = Math.ceil(n / cols);
      const cw = W / cols, ch = H / rows;
      const r = rng(7);
      layout = GALLERY.map((_, i) => {
        const ratio = CANVAS_RATIOS[Math.floor(r() * CANVAS_RATIOS.length)];
        const w = Math.min(Math.max(cw * (0.42 + r() * 0.22), 150), vw < 700 ? 190 : 320);
        const h = w / ratio;
        const cx = (i % cols) * cw + cw / 2 + (r() - 0.5) * cw * 0.35;
        const cy = Math.floor(i / cols) * ch + ch / 2 + (r() - 0.5) * ch * 0.35;
        return { x: cx - w / 2, y: cy - h / 2, w, h, z: (r() - 0.5) * 6 };
      });
      layout.forEach((l, i) => {
        const el = tileRefs.current[i];
        if (el) { el.style.width = `${l.w}px`; el.style.height = `${l.h}px`; }
      });
    };
    build();

    let ox = 0, oy = 0, vx = 0, vy = 0;
    let dragging = false, lastX = 0, lastY = 0, startX = 0, startY = 0;
    let raf = 0, t = 0;
    const wrap = (v: number, size: number, view: number) => (((v % size) + size) % size) - (size - view) / 2;

    const tick = () => {
      if (!dragging) { ox += vx; oy += vy; vx *= 0.93; vy *= 0.93; }
      const speed = Math.min(Math.hypot(vx, vy), 40);
      layout.forEach((l, i) => {
        const el = tileRefs.current[i];
        if (!el) return;
        const x = wrap(l.x + ox, W, vw);
        const y = wrap(l.y + oy, H, vh);
        const nx = (x + l.w / 2 - vw / 2) / (vw / 2);
        const ny = (y + l.h / 2 - vh / 2) / (vh / 2);
        const s = 1 - Math.min(Math.hypot(nx, ny), 1.6) * 0.06;
        el.style.transform = `translate3d(${x}px,${y}px,0) rotateY(${nx * -14}deg) rotateX(${ny * 10}deg) rotateZ(${l.z}deg) scale(${s})`;
      });
      // Subtle ripple that only appears on fast drags.
      t += 0.02;
      if (speed > 1.5) {
        world.style.filter = 'url(#gallery-ripple)';
        dispRef.current?.setAttribute('scale', String(Math.min(speed * 0.6, 16)));
        turbRef.current?.setAttribute('baseFrequency', `${0.008 + Math.sin(t) * 0.002} ${0.016 + Math.cos(t) * 0.003}`);
      } else if (world.style.filter) {
        world.style.filter = '';
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const down = (e: PointerEvent) => {
      dragging = true; moved.current = false;
      lastX = startX = e.clientX; lastY = startY = e.clientY;
      vx = vy = 0;
      stage.classList.add('is-dragging');
    };
    const move = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX, dy = e.clientY - lastY;
      ox += dx; oy += dy; vx = dx; vy = dy;
      lastX = e.clientX; lastY = e.clientY;
      if (Math.hypot(e.clientX - startX, e.clientY - startY) > 6) moved.current = true;
    };
    const up = () => { dragging = false; stage.classList.remove('is-dragging'); };
    const wheel = (e: WheelEvent) => { e.preventDefault(); vx -= e.deltaX * 0.08; vy -= e.deltaY * 0.08; };

    stage.addEventListener('pointerdown', down);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    stage.addEventListener('wheel', wheel, { passive: false });
    window.addEventListener('resize', build);
    return () => {
      cancelAnimationFrame(raf);
      stage.removeEventListener('pointerdown', down);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      stage.removeEventListener('wheel', wheel);
      window.removeEventListener('resize', build);
    };
  }, []);

  return (
    <div className="gal-stage" ref={stageRef}>
      <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
        <filter id="gallery-ripple">
          <feTurbulence ref={turbRef} type="fractalNoise" baseFrequency="0.008 0.016" numOctaves="1" seed="3" />
          <feDisplacementMap ref={dispRef} in="SourceGraphic" scale="0" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <div className="gal-world" ref={worldRef}>
        {GALLERY.map((g, i) => (
          <button
            key={g.src}
            ref={(el) => { tileRefs.current[i] = el; }}
            className="gal-tile"
            onClick={() => !moved.current && onOpen(i)}
            aria-label={`Open ${g.title}`}
          >
            <Media src={g.src} alt={g.title} lazy={false} />
          </button>
        ))}
      </div>
      <p className="gal-hint">DRAG TO EXPLORE</p>
    </div>
  );
}

// Editorial index (after gilhuybrecht.com): an even column grid where every
// image keeps its natural shape and rows align to the top, each with a number.
function GridView({ onOpen }: { onOpen: (i: number) => void }) {
  return (
    <div className="gal-scroll">
      <div className="gal-grid">
        {GALLERY.map((g, i) => (
          <figure className="gal-item" key={g.src}>
            <figcaption>{i + 1}</figcaption>
            <button className="gal-cell" onClick={() => onOpen(i)} aria-label={`Open image ${i + 1}`}>
              <Media src={g.src} alt={g.title} />
            </button>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  const [mode, setMode] = useState<Mode>('canvas');
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close]);

  useEffect(() => {
    document.documentElement.classList.toggle('gal-lock', mode === 'canvas' || open !== null);
    return () => document.documentElement.classList.remove('gal-lock');
  }, [mode, open]);

  return (
    <main className={`gallery-page mode-${mode}`}>
      <div className="gal-bg" />
      <Navigation home={false} />

      {mode === 'canvas' ? <CanvasView onOpen={setOpen} /> : <GridView onOpen={setOpen} />}

      <div className="gal-switch" role="tablist" aria-label="Gallery view">
        <button role="tab" aria-selected={mode === 'canvas'} className={mode === 'canvas' ? 'active' : ''} onClick={() => setMode('canvas')}>CANVAS</button>
        <button role="tab" aria-selected={mode === 'grid'} className={mode === 'grid' ? 'active' : ''} onClick={() => setMode('grid')}>GRID</button>
      </div>

      {open !== null && (
        <div className="gal-lightbox" role="dialog" aria-modal="true" aria-label={GALLERY[open].title} onClick={close}>
          <button className="gal-close" onClick={close} aria-label="Close image">[ ✕ CLOSE ]</button>
          {isVideo(GALLERY[open].src)
            ? <video src={GALLERY[open].src} controls autoPlay playsInline onClick={(e) => e.stopPropagation()} />
            : <img src={GALLERY[open].src} alt={GALLERY[open].title} onClick={(e) => e.stopPropagation()} />}
          <p>ESC TO CLOSE · {String(open + 1).padStart(2, '0')} / {String(GALLERY.length).padStart(2, '0')}</p>
        </div>
      )}
    </main>
  );
}
