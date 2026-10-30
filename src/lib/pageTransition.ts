import gsap from 'gsap';

// Home → case-study page transition.
// leave(): the clicked image lifts out of the canvas and grows to the centre while a paper-coloured
//          cover fades in; then we navigate. The cover lives on <body>, so it survives client-side routing.
// enter(): on the case-study page the cover and image dissolve and the intro rises in.

const COVER_ID = 'page-transition';
const EASE = 'expo.inOut';
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function leave(fromImg: HTMLImageElement | null, navigate: () => void) {
  if (reduced() || !fromImg) { navigate(); return; }
  document.getElementById(COVER_ID)?.remove();

  const cover = document.createElement('div');
  cover.id = COVER_ID;
  cover.style.cssText = 'position:fixed;inset:0;z-index:9998;background:#fcfcfa;opacity:0;pointer-events:all;';

  const r = fromImg.getBoundingClientRect();
  const clone = fromImg.cloneNode() as HTMLImageElement;
  clone.removeAttribute('loading');
  clone.style.cssText = `position:fixed;z-index:9999;left:${r.left}px;top:${r.top}px;width:${r.width}px;height:${r.height}px;margin:0;object-fit:cover;border-radius:2px;will-change:transform,left,top,width,height;box-shadow:0 30px 80px rgba(36,38,34,.18);`;
  cover.appendChild(clone);
  document.body.appendChild(cover);
  fromImg.style.visibility = 'hidden';
  gsap.to('#cursor, #cursor-coords', { opacity: 0, duration: 0.3, ease: 'power1.out' });

  // Target: centred, ~62% of the viewport width, keeping the image's aspect ratio.
  const aspect = r.width / r.height || 1.43;
  let w = Math.min(window.innerWidth * 0.62, 1040), h = w / aspect;
  if (h > window.innerHeight * 0.7) { h = window.innerHeight * 0.7; w = h * aspect; }

  let done = false;
  const go = () => { if (!done) { done = true; navigate(); } };
  gsap.timeline({ onComplete: go })
    .to(cover, { opacity: 1, duration: 0.9, ease: 'power2.inOut' }, 0)
    .to(clone, { left: (window.innerWidth - w) / 2, top: (window.innerHeight - h) / 2, width: w, height: h, duration: 1.05, ease: EASE }, 0);

  // Safety net: never leave the cover up if navigation stalls.
  window.setTimeout(() => { if (document.getElementById(COVER_ID) === cover) cover.remove(); }, 6000);
}

export function enter(root: HTMLElement | null) {
  const cover = document.getElementById(COVER_ID);
  const intro = root?.querySelectorAll<HTMLElement>('.cs-intro > *') ?? [];
  if (reduced()) { cover?.remove(); return; }

  const tl = gsap.timeline({ delay: cover ? 0.12 : 0, onComplete: () => cover?.remove() });
  tl.fromTo(intro, { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'expo.out', stagger: 0.07, clearProps: 'transform,opacity' }, cover ? 0.25 : 0);
  if (cover) {
    const clone = cover.querySelector('img');
    if (clone) tl.to(clone, { opacity: 0, scale: 1.04, duration: 0.7, ease: 'power2.out' }, 0);
    tl.to(cover, { opacity: 0, duration: 0.9, ease: 'power2.inOut' }, 0.1);
  }
}
