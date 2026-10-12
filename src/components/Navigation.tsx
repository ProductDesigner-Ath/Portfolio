'use client';

import React, { useEffect, useRef } from 'react';
import NameMark from './NameMark';

const SCRAMBLE_CHARS = '!<>—_\\/[]{}=+*^?#@$%&';

// Hover effect: scramble the label, then settle back (same feel as the About text).
function scramble(el: HTMLElement, label: string) {
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

  return (
    <nav id="main-nav" ref={navRef} className={home ? undefined : 'nav-standalone'}>
      <div className="nav-left">
        {home ? <button className="nav-item" id="nav-about-btn">[About]</button> : <a href="/" className="nav-item">[About]</a>}
        {home ? <button className="nav-item" id="nav-casestudy-btn">[Case studies]</button> : <a href="/" className="nav-item">[Case studies]</a>}
        <a href="/gallery" className="nav-item" id="nav-gallery-btn">[Gallery]</a>
        <a href="/document/resume.pdf" className="nav-item" id="nav-resume-btn" target="_blank" rel="noopener noreferrer">[Resume]</a>
        <a href="mailto:hire@atharv.space" className="nav-item" id="nav-contact-btn">[Contact]</a>
      </div>
      <a href={home ? '#' : '/'} className="nav-logo" aria-label="Atharv, home"><NameMark className="nav-logo-mark" /></a>
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
