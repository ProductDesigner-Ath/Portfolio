'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import FluidImageCanvas from './FluidImageCanvas';

const screens = [
  { src: '/images/Ramdoot-PD/1.png', alt: 'Ramdoot library and magazine issue screen' },
  { src: '/images/Ramdoot-PD/2.png', alt: 'Ramdoot mobile magazine experience' },
  { src: '/images/Ramdoot-PD/3.png', alt: 'Ramdoot account creation and magazine cover' },
  { src: '/images/Ramdoot-PD/4.png', alt: 'Ramdoot reader and issue detail views' },
  { src: '/images/Ramdoot-PD/5.png', alt: 'Ramdoot creator and payout screens' },
  { src: '/images/Ramdoot-PD/6.png', alt: 'Ramdoot dashboard and administration screens' },
];

export default function RamdootCaseStudy() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setActiveImage(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <main className="ramdoot-page">
      <header className="case-nav">
        <Link href="/" className="case-nav-link">[ BACK TO PORTFOLIO ]</Link>
        <span className="case-wordmark">ATHARV</span>
        <span className="case-status">[ IN DEVELOPMENT ]</span>
      </header>

      <section className="case-hero case-section">
        <p className="case-kicker">RAMDOOT RESTORE / PRODUCT DESIGN / 2025</p>
        <div className="hero-grid">
          <h1>A magazine made<br />to be <em>passed on.</em></h1>
          <div className="hero-intro">
            <p>Turning a printed publication about India’s temple heritage into a digital reading experience people can access, share, and return to.</p>
            <dl><div><dt>ROLE</dt><dd>Volunteer design lead</dd></div><div><dt>SCOPE</dt><dd>Product, web, mobile &amp; visual design</dd></div><div><dt>STATUS</dt><dd>Approved V2 · in development</dd></div></dl>
          </div>
        </div>
        <button className="hero-screen image-trigger" onClick={() => setActiveImage(0)} aria-label="Open Ramdoot library screen">
          <img src={screens[0].src} alt="" />
          <span>OPEN SCREEN ↗</span>
        </button>
      </section>

      <section className="case-section context-section">
        <p className="case-index">01 / CONTEXT</p>
        <div className="case-copy wide"><h2>From a physical magazine<br />to a shared digital library.</h2><p>Ramdoot Restore is a community-funded initiative restoring 108 temples across India. Its printed magazine was already reaching readers, but distribution limited who could find it. The digital product needed to keep the seriousness of the material while making each edition easier to purchase, read, and share with family.</p></div>
        <div className="case-rule" />
        <div className="three-facts"><p><b>The publication</b>One or two issues released every month.</p><p><b>The audience</b>History-curious younger readers, with an accessible path for existing readers.</p><p><b>The access model</b>Monthly subscription, single-issue purchase, and intended family access.</p></div>
      </section>

      <section className="case-section insight-section">
        <p className="case-index">02 / AUDIENCE LEARNING</p>
        <div className="insight-layout"><p className="insight-number">01</p><div><p className="case-kicker">THE PIVOT</p><h2>Our first assumption<br />was too narrow.</h2><p className="case-copy">We expected existing older readers to adopt the digital format first. Conversations with readers and observations during offline selling pointed elsewhere: younger readers were actively looking for factual, well-organised context around the history they were encountering.</p><p className="source-note">METHOD NOTE — Designer-reported conversations with existing readers and observations during offline selling. This is qualitative evidence, not an adoption metric.</p></div></div>
      </section>

      <section className="case-section access-section">
        <p className="case-index">03 / ACCESS MODEL</p>
        <div className="case-copy"><h2>Two ways in.<br />One reading home.</h2><p>I retained both access paths because a regular reader and an occasional buyer should not have to make the same commitment.</p></div>
        <div className="purchase-grid">
          <figure><button className="image-trigger" onClick={() => setActiveImage(2)}><img src={screens[2].src} alt="Account creation and issue access" /></button><figcaption><b>SUBSCRIBE</b><span>Ongoing access to the issue library.</span></figcaption></figure>
          <figure><button className="image-trigger" onClick={() => setActiveImage(3)}><img src={screens[3].src} alt="Single magazine issue purchase" /></button><figcaption><b>BUY ONE ISSUE</b><span>A clear path for an occasional reader.</span></figcaption></figure>
        </div>
      </section>

      <section className="case-section reading-section">
        <p className="case-index">04 / DISCOVERY &amp; READING</p>
        <div className="reading-heading"><h2>The reading experience<br />starts before the PDF.</h2><p>The edition page gives readers a reason to begin, while the reader stays focused on the original magazine format. AI summaries and personalised entry points are being developed to help readers decide where to start.</p></div>
        <div className="screen-mosaic"><button className="image-trigger mosaic-a" onClick={() => setActiveImage(1)}><img src={screens[1].src} alt="Mobile Ramdoot reading journey" /></button><button className="image-trigger mosaic-b" onClick={() => setActiveImage(3)}><img src={screens[3].src} alt="Ramdoot issue discovery screen" /></button></div>
      </section>

      <section className="case-section ai-section">
        <p className="case-index">05 / AI-ASSISTED WORKFLOW</p>
        <div className="case-copy"><h2>AI helped me move faster.<br />It did not make the decision.</h2><p>I used Claude, GPT, a local MCP connection, and a custom project workspace to keep client notes, approvals, design references, and constraints accessible while I explored alternatives.</p></div>
        <div className="decision-map" aria-label="Decision path for equal access model"><div><span>01</span><b>Context</b><p>Reader may subscribe or purchase a single issue.</p></div><i>→</i><div><span>02</span><b>AI proposed</b><p>Lead with subscription and lower the single-issue option.</p></div><i>→</i><div className="decision-final"><span>03</span><b>I decided</b><p>Keep both choices visible: commitment should match reading intent.</p></div></div>
        <p className="source-note">DRAFT SCENARIO — This worked example is an assumed reconstruction. Replace it with a documented exchange before publishing as evidence.</p>
      </section>

      <section className="case-section visual-section">
        <p className="case-index">06 / VISUAL DESIGN</p>
        <div className="visual-title"><h2>Quiet interface.<br />The covers carry<br />the character.</h2><p>The reading environment stays intentionally restrained so a dense, illustrated editorial product can lead. Clear type, generous white space, and simple controls aim to reduce friction without competing with the magazine.</p></div>
        <button className="visual-image image-trigger" onClick={() => setActiveImage(4)}><img src={screens[4].src} alt="Ramdoot visual interface and administration design" /><span>OPEN SCREEN ↗</span></button>
      </section>

      <footer className="case-footer"><p>RAMDOOT RESTORE / 2025</p><p>Approved V2 · development in progress</p><Link href="/">RETURN TO PORTFOLIO ↗</Link></footer>

      {activeImage !== null && <div className="image-viewer" role="dialog" aria-modal="true" aria-label="Expanded Ramdoot design screen" onClick={() => setActiveImage(null)}>
        <button className="viewer-close" onClick={() => setActiveImage(null)} aria-label="Close expanded image">[ CLOSE ]</button>
        <div className="viewer-webgl" onClick={(event) => event.stopPropagation()}><FluidImageCanvas src={screens[activeImage].src} alt={screens[activeImage].alt} /></div>
        <p>ESC TO CLOSE · {String(activeImage + 1).padStart(2, '0')} / {String(screens.length).padStart(2, '0')}</p>
      </div>}
    </main>
  );
}
