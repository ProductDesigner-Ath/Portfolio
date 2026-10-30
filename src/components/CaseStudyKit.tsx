'use client';

// Building blocks for every case study, measured from the Ramdoot Figma frame (1440 wide, 96px gutters).
import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import FluidImageCanvas from './FluidImageCanvas';
import Navigation from './Navigation';
import { enter } from '../lib/pageTransition';
import '../app/case-study.css';

export type Img = { src: string; alt: string };

const Viewer = createContext<(img: Img) => void>(() => {});

export function CaseStudy({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<Img | null>(null);
  const show = useCallback((img: Img) => setOpen(img), []);
  const main = useRef<HTMLElement>(null);

  // Finish the home → case-study transition (or a gentle intro on direct visits) before first paint.
  useLayoutEffect(() => enter(main.current), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <Viewer.Provider value={show}>
      <Navigation home={false} />
      <main className="cs" ref={main}>
        {children}
      </main>
      {open && (
        <div className="cs-viewer" role="dialog" aria-modal="true" aria-label={open.alt} onClick={() => setOpen(null)}>
          <button className="cs-viewer-close" onClick={() => setOpen(null)} aria-label="Close expanded image">[CLOSE]</button>
          <div className="cs-viewer-media" onClick={e => e.stopPropagation()}><FluidImageCanvas src={open.src} alt={open.alt} /></div>
          <p>ESC TO CLOSE</p>
        </div>
      )}
    </Viewer.Provider>
  );
}

/** A design screen. Clicking it opens the full-screen viewer. */
export function Shot({ img, className = '' }: { img: Img; className?: string }) {
  const show = useContext(Viewer);
  return (
    <button type="button" className={`cs-shot ${className}`} onClick={() => show(img)} aria-label={`Expand: ${img.alt}`}>
      <img src={img.src} alt={img.alt} loading="lazy" />
    </button>
  );
}

// Figma line breaks; the space keeps words apart where small screens drop the <br>.
const lines = (text: string) => text.split('\n').flatMap((l, i) => (i ? [' ', <br key={i} />, l] : [l]));
/** Figma gap above an element, in px at 1440 (scaled down on small screens by the stylesheet). */
const gap = (mt?: number) => (mt === undefined ? undefined : ({ '--mt': `${mt}px` } as CSSProperties));
type Mt = { mt?: number };

export const Eyebrow = ({ children, className = '', mt }: { children: ReactNode; className?: string } & Mt) => <p className={`cs-eyebrow ${className}`} style={gap(mt)}>{children}</p>;
export const Heading = ({ text, size = 40, className = '', mt }: { text: string; size?: 40 | 42 | 46; className?: string } & Mt) => <h2 className={`cs-h2 cs-h2-${size} ${className}`} style={gap(mt)}>{lines(text)}</h2>;
export const Body = ({ text, size = 20, muted, className = '', mt }: { text: string; size?: 16 | 17 | 18 | 20 | 22 | 23; muted?: boolean; className?: string } & Mt) => <p className={`cs-body cs-body-${size} ${muted ? 'cs-muted' : ''} ${className}`} style={gap(mt)}>{lines(text)}</p>;
export const Notice = ({ text, mt }: { text: string } & Mt) => <p className="cs-notice" style={gap(mt)}>{text}</p>;

export function Intro({ tags, title, lede, action, meta, showcase, caption }: {
  tags: string[]; title: string; lede: string; action?: ReactNode; meta: [string, string][]; showcase: ReactNode; caption: string;
}) {
  return (
    <section className="cs-intro">
      <Eyebrow>{tags.map(t => `[${t}]`).join('  ')}</Eyebrow>
      <h1>{lines(title)}</h1>
      <p className="cs-lede">{lede}</p>
      {action && <div className="cs-intro-action">{action}</div>}
      <dl className="cs-meta">{meta.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
      {showcase}
      <p className="cs-eyebrow cs-caption">{caption}</p>
    </section>
  );
}

/** Desktop screen with an optional phone screen beside it, on a grey panel. */
export function Showcase({ desktop, mobile }: { desktop: Img; mobile?: Img }) {
  return (
    <div className={`cs-showcase ${mobile ? '' : 'cs-showcase-single'}`}>
      <Shot img={desktop} className="cs-r4" />
      {mobile && <Shot img={mobile} className="cs-r4 cs-showcase-phone" />}
    </div>
  );
}

const FRAG = `precision mediump float;
uniform vec2 r;uniform float t;uniform float h;
void main(){
  vec2 uv=gl_FragCoord.xy/r;vec2 p=uv*vec2(r.x/r.y,1.);float s=t*.4;
  float n=sin(p.x*1.7+s*2.)+sin(p.y*3.3-s*1.6)+sin((p.x+p.y)*2.1+s*1.2)+sin(length(p-vec2(1.6+sin(s)*1.2,.5+cos(s*.8)*.4))*4.2-s*2.4);
  n=n*.125+.5;
  vec3 ink=vec3(.141,.149,.133),moss=vec3(.306,.345,.271),orange=vec3(.88,.40,.09);
  vec3 c=mix(ink,moss,smoothstep(.2,.8,n));c=mix(c,orange,smoothstep(.6,1.,n)*.62);
  c+=h*.05;
  float g=fract(sin(dot(gl_FragCoord.xy+t,vec2(12.9898,78.233)))*43758.5453);c+=(g-.5)*.04;
  gl_FragColor=vec4(c,1.);
}`;

/** Rectangular portfolio button with a live flowing-gradient shader behind the label (CSS gradient fallback). */
export function ShaderButton({ href, label }: { href: string; label: string }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const hover = useRef(0);

  useEffect(() => {
    const c = canvas.current;
    const gl = c?.getContext('webgl', { antialias: false, premultipliedAlpha: false });
    if (!c || !gl) return;
    const sh = (type: number, src: string) => { const x = gl.createShader(type)!; gl.shaderSource(x, src); gl.compileShader(x); return x; };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, 'attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}'));
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const a = gl.getAttribLocation(prog, 'a'); gl.enableVertexAttribArray(a); gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0);
    const uR = gl.getUniformLocation(prog, 'r'), uT = gl.getUniformLocation(prog, 't'), uH = gl.getUniformLocation(prog, 'h');
    c.parentElement!.classList.add('has-shader');

    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0, visible = true, time = Math.random() * 20, last = performance.now(), h = 0;
    const draw = (now: number) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2), w = Math.round(c.clientWidth * dpr), ht = Math.round(c.clientHeight * dpr);
      if (c.width !== w || c.height !== ht) { c.width = w; c.height = ht; gl.viewport(0, 0, w, ht); }
      h += (hover.current - h) * 0.08;
      time += ((now - last) / 1000) * (1 + h * 2.2); last = now;
      gl.uniform2f(uR, w, ht); gl.uniform1f(uT, time); gl.uniform1f(uH, h);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (visible && !still) raf = requestAnimationFrame(draw);
    };
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; cancelAnimationFrame(raf); if (visible) { last = performance.now(); raf = requestAnimationFrame(draw); } });
    io.observe(c);
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, []);

  return (
    <a className="cs-shader-btn" href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => (hover.current = 1)} onMouseLeave={() => (hover.current = 0)} onFocus={() => (hover.current = 1)} onBlur={() => (hover.current = 0)}>
      <canvas ref={canvas} aria-hidden="true" />
      <span className="cs-shader-label">[{label}]</span>
      <span className="cs-shader-arrow" aria-hidden="true">↗</span>
    </a>
  );
}

/** pt / pb: Figma padding above the first label and below the last element. */
export const Section = ({ children, pt = 64, pb = 0 }: { children: ReactNode; pt?: number; pb?: number }) => (
  <section className="cs-section" style={{ '--pt': `${pt}px`, '--pb': `${pb}px` } as CSSProperties}>{children}</section>
);

/** Headline on the left, paragraphs on the right (Context, Visual design). */
export function Split({ heading, paragraphs, variant = 'context', mt }: { heading: string; paragraphs: string[]; variant?: 'context' | 'visual' } & Mt) {
  return (
    <div className={`cs-split cs-split-${variant}`} style={gap(mt)}>
      <Heading text={heading} />
      <div className="cs-split-copy">{paragraphs.map(p => <Body key={p} text={p} />)}</div>
    </div>
  );
}

/** Grey panel with a mono label and a larger statement. */
export function Panel({ label, text, tone = 'grey', size = 25, mt }: { label: string; text: string; tone?: 'grey' | 'green'; size?: 25 | 26 | 28 | 30 } & Mt) {
  return (
    <div className={`cs-panel cs-panel-${tone}`} style={gap(mt)}>
      <Eyebrow>{label}</Eyebrow>
      <p className={`cs-panel-text cs-panel-${size}`}>{lines(text)}</p>
    </div>
  );
}

/** Two panels joined by an arrow: before ↔ after (pivot), proposed → decided (decision). */
export function Compare({ from, to, variant, mt }: { from: { label: string; text: string }; to: { label: string; text: string }; variant: 'pivot' | 'decision' } & Mt) {
  const pivot = variant === 'pivot';
  return (
    <div className={`cs-compare cs-compare-${variant}`} style={gap(mt)}>
      <Panel label={from.label} text={from.text} size={pivot ? 28 : 26} />
      <span className={`cs-arrow ${pivot ? 'cs-arrow-both' : ''}`} aria-hidden="true" />
      <Panel label={to.label} text={to.text} tone="green" size={pivot ? 30 : 26} />
    </div>
  );
}

/** Mono label on the left, sentence on the right. */
export function Row({ label, text, size = 18, mt }: { label: string; text: string; size?: 18 | 22 | 27 } & Mt) {
  return (
    <div className={`cs-row cs-row-${size}`} style={gap(mt)}>
      <Eyebrow>{label}</Eyebrow>
      <p>{text}</p>
    </div>
  );
}

/** Two equal columns, each with an optional label + line above a screen and its caption. */
export function Pair({ items, mt }: { items: { label?: string; text?: string; img: Img; caption: string }[] } & Mt) {
  return (
    <div className="cs-pair" style={gap(mt)}>
      {items.map(it => (
        <div key={it.caption} className="cs-pair-col">
          {it.label && <Eyebrow>{it.label}</Eyebrow>}
          {it.text && <p className="cs-pair-text">{it.text}</p>}
          <Shot img={it.img} className="cs-pair-shot" />
          <Eyebrow className="cs-pair-caption">{it.caption}</Eyebrow>
        </div>
      ))}
    </div>
  );
}

/** Desktop + phone screens side by side (Reader journey, Visual design). Without a phone screen the desktop one spans the row. */
export function Screens({ desktop, mobile, variant, mt }: { desktop: Img; mobile?: Img; variant: 'journey' | 'visual' } & Mt) {
  return (
    <div className={`cs-screens cs-screens-${variant} ${mobile ? '' : 'cs-screens-single'}`} style={gap(mt)}>
      <Shot img={desktop} className="cs-r4" />
      {mobile && <Shot img={mobile} className="cs-r4" />}
    </div>
  );
}

/** Large screen with a side panel of short notes. */
export function Feature({ img, label, items, mt }: { img: Img; label: string; items: { title: string; text: string }[] } & Mt) {
  return (
    <div className="cs-feature" style={gap(mt)}>
      <Shot img={img} className="cs-r4" />
      <aside className="cs-feature-side">
        <Eyebrow>{label}</Eyebrow>
        {items.map(it => <div key={it.title} className="cs-feature-item"><h3>{it.title}</h3><p>{it.text}</p></div>)}
      </aside>
    </div>
  );
}

/** Three grey cards joined by arrows. */
export function Steps({ steps, mt }: { steps: { label: string; text: string }[] } & Mt) {
  return (
    <div className="cs-steps" style={gap(mt)}>
      {steps.map((s, i) => (
        <div key={s.label} className="cs-step-wrap">
          {i > 0 && <span className="cs-arrow" aria-hidden="true" />}
          <div className="cs-step"><Eyebrow>{s.label}</Eyebrow><p>{lines(s.text)}</p></div>
        </div>
      ))}
    </div>
  );
}

/** Three columns with a rule above each (Where the project stands). */
export function Columns({ items, mt }: { items: { label: string; text: string }[] } & Mt) {
  return (
    <div className="cs-columns" style={gap(mt)}>
      {items.map(it => <div key={it.label}><Eyebrow>{it.label}</Eyebrow><p>{it.text}</p></div>)}
    </div>
  );
}

export function Footer({ left, right }: { left: string; right: ReactNode }) {
  return (
    <footer className="cs-footer">
      <hr className="cs-divider" />
      <div className="cs-footer-row">
        <span>{left}</span>
        <span>{right}</span>
      </div>
    </footer>
  );
}
