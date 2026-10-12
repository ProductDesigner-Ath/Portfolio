'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import NameMark from './NameMark';

const SCRAMBLE_CHARS = '!<>—_\\/[]{}=+*^?#@$%&';

// Hover effect: scramble the label, then settle back (same feel as the About text).
export function scramble(el: HTMLElement, label: string) {
  const queue = [...label].map((to, i) => { const start = Math.floor(i * 1.1); return { to, start, end: start + 5 + Math.floor(Math.random() * 12), char: '' }; });
  let frame = 0;
  const prev = Number(el.dataset.raf || 0);
  cancelAnimationFrame(prev);
  const tick = () => {
    let html = '', done = 0;
    for (const q of queue) {
      if (frame >= q.end) { done++; html += q.to; }
      else if (frame >= q.start) { if (!q.char || Math.random() < 0.3) q.char = SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]; html += `<span class="scramble-char">${q.to === ' ' ? ' ' : q.char}</span>`; }
      else html += q.to === ' ' ? ' ' : '<span class="scramble-char">_</span>';
    }
    el.innerHTML = html;
    if (done < queue.length) { frame++; el.dataset.raf = String(requestAnimationFrame(tick)); }
  };
  tick();
}

// `home` renders the full home-page menu (About/Case studies open panels there,
// plus the open-to-work strip). Elsewhere those items link back to the home page.
export default function Navigation({ home = true }: { home?: boolean }) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = [...navRef.current!.querySelectorAll<HTMLElement>('.nav-item:not(#nav-proj-title)')];
    const offs = items.map((el) => {
      const label = el.textContent || '';
      const on = () => scramble(el, label);
      el.addEventListener('mouseenter', on);
      return () => el.removeEventListener('mouseenter', on);
    });
    return () => offs.forEach((off) => off());
  }, []);

  // Hide the menu while scrolling down, bring it back on any scroll up.
  // Listens in the capture phase so it also catches scrolling inside panels
  // (About page, gallery grid), not just the window.
  useEffect(() => {
    const nav = navRef.current!;
    const last = new WeakMap<EventTarget, number>();
    const onScroll = (e: Event) => {
      const el = e.target === document ? document.scrollingElement : (e.target as HTMLElement);
      if (!el || !(el instanceof HTMLElement)) return;
      const y = el.scrollTop;
      const prev = last.get(el) ?? 0;
      last.set(el, y);
      if (Math.abs(y - prev) < 4) return;
      nav.classList.toggle('nav-hidden', y > prev && y > 80);
    };
    document.addEventListener('scroll', onScroll, { capture: true, passive: true });
    return () => document.removeEventListener('scroll', onScroll, { capture: true });
  }, []);

  return (
    <nav id="main-nav" ref={navRef} className={home ? undefined : 'nav-standalone'}>
      <div className="nav-left">
        <Link href="/about" className="nav-item" id="nav-about-link">[About]</Link>
        {home ? <button className="nav-item" id="nav-casestudy-btn">[Case studies]</button> : <Link href="/" className="nav-item">[Case studies]</Link>}
        <a href="/gallery" className="nav-item" id="nav-gallery-btn">[Gallery]</a>
        <a href="/document/resume.pdf" className="nav-item" id="nav-resume-btn" target="_blank" rel="noopener noreferrer">[Resume]</a>
        <a href="mailto:hire@atharv.space" className="nav-item" id="nav-contact-btn">[Contact]</a>
      </div>
      {home
        ? <a href="#" className="nav-logo" aria-label="Atharv, home"><NameMark className="nav-logo-mark" /></a>
        : <Link href="/" className="nav-logo" aria-label="Atharv, home"><NameMark className="nav-logo-mark" /></Link>}
      <div className="nav-right"></div>
      {home && <span className="nav-item" id="nav-proj-title"></span>}
      {home && (
        <div id="open-strip" aria-label="Open to work: remote roles, based in Bombay, working with US, UK and EU teams">
          <div className="open-strip-track" aria-hidden="true">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i}>OPEN TO WORK <b>✦</b> REMOTE ROLES <b>✦</b> BASED IN BOMBAY <b>✦</b> US / UK / EU <b>✦</b> </span>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
