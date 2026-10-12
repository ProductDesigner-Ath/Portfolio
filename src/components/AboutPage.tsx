'use client';

import { useEffect, useRef } from 'react';
import Navigation, { scramble } from './Navigation';
import { EXPERIENCE, SKILLS } from '../data/about';

const BIO = [
  'With 6+ years in design, I have worked with industry-leading web3 projects and consumer startups, across brand identity, SaaS products, landing pages and mobile apps.',
  'I design and build: Figma to Webflow, Framer and Shopify. Clients include TEDxGateway, PulseChain, Quranium and Shred.',
];

// Replace with a black-and-white portrait in /public/images (e.g. '/images/atharv.jpg').
const PHOTO: string | null = '/images/atharv-about.webp';

export default function AboutPage() {
  const bioRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    bioRefs.current.forEach((el, i) => el && setTimeout(() => scramble(el, BIO[i]), 300 + i * 320));
    const rows = [...document.querySelectorAll<HTMLElement>('.ab-hover')];
    const offs = rows.map((el) => {
      const label = el.textContent || '';
      const on = () => scramble(el, label);
      el.addEventListener('mouseenter', on);
      return () => el.removeEventListener('mouseenter', on);
    });
    return () => offs.forEach((off) => off());
  }, []);

  return (
    <main className="about-page">
      <div className="gal-bg" />
      <Navigation home={false} />

      <p className="ab-tagline"><em>Multi-disciplinary design, from interface to build.</em></p>
      <p className="ab-word" aria-hidden="true">about</p>

      <div className="ab-col">
        <h1 className="ab-intro">Product designer based in Bombay, focused on interfaces that look considered and actually convert.</h1>
        {BIO.map((_, i) => <p key={i} className="ab-bio" ref={(el) => { bioRefs.current[i] = el; }} />)}

        <figure className="ab-photo">
          {PHOTO ? <img src={PHOTO} alt="Atharv Kelwadkar" /> : <span>Photo coming soon</span>}
        </figure>

        <section className="ab-section" aria-labelledby="ab-skills">
          <h2 id="ab-skills">Skills</h2>
          <dl className="ab-skills">
            {SKILLS.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items.map((it, i) => <span key={it}><span className="ab-hover">{it}</span>{i < s.items.length - 1 ? ' · ' : ''}</span>)}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="ab-section about-exp" aria-labelledby="ab-exp">
          <h2 id="ab-exp">Work experience</h2>
          <ol>
            {EXPERIENCE.map((e) => (
              <li key={e.org} className="exp-row" tabIndex={0}>
                <span className="exp-years">{e.years}</span>
                <span className="exp-org ab-hover">{e.org}</span>
                <span className="exp-role">{e.role}</span>
                <span className="exp-note">{e.note}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div className="ab-social">
        <a href="https://www.linkedin.com/in/atharv-kelwadkar" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://x.com/AtharvUXUI" target="_blank" rel="noreferrer">X</a>
        <a href="mailto:hire@atharv.space">Email</a>
      </div>
    </main>
  );
}
