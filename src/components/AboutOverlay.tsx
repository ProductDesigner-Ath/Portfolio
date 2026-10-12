import React from 'react';

const EXPERIENCE = [
  { years: '2025 — Now', org: 'Kraftelite', role: 'Founder & Design Lead', note: '4-person studio · 15 projects for 12 clients · $400K+ client revenue · TEDxGateway sold out twice · Shred: 18K signups in 48h' },
  { years: '2024 — 25', org: 'Quranium', role: 'Senior UX/UI Designer', note: 'Designed v1 of the Qsafe quantum-resistant wallet · website V2 & V3 · campaigns with 400K–1M+ views' },
  { years: '2024', org: 'Independent', role: 'Freelance UX/UI & Webflow', note: 'Boomtown, Pulse War, Titan Blaze, Tide · discovery to launch, solo' },
  { years: '2021 — 24', org: 'RapidInnovation', role: 'Webflow Dev → UX/UI Designer', note: 'Design systems · NFT marketplace UX research · led a 3-person team on PulseChain' },
  { years: '2020 — 21', org: 'Twinkle Star Infotech', role: 'Design Associate', note: 'Full Webflow & WordPress builds, research to launch' },
  { years: '2019 — 20', org: 'Mntra', role: 'Design Intern', note: 'CMS, animations and integrations on new site builds' },
];

export default function AboutOverlay() {
  return (
    <div id="about-overlay">
      <button id="about-close-x">[CLOSE]</button>
      <div className="about-headline-block">
        <h1 className="about-headline">
          <em>Hello,</em> My name is Atharv. I am a Product designer<br />
          Based in <em>*BOMBAY</em>,<br />
          with a passion for exploration.<br />
          Multi&#8202;&mdash;&#8202;Disciplinary.<br />
          Currently designing @<br />
          <span className="hl-link"><span className="hl-arrow">&#8599;</span>kraftelite</span>
        </h1>
      </div>
      <div className="about-body-block">
        <p id="about-bio-1"></p>
        <p id="about-bio-2"></p>
      </div>
      <div className="about-photo-block">
        <img className="about-photo"
          src="https://raw.githubusercontent.com/ProductDesigner-Ath/Protfolio/9188cd54b642b0a987b8061805cc9275672e3073/images/Upscale-me.png"
          alt="Atharv Kelwadkar"/>
      </div>
      <p className="about-exp-cue">EXPERIENCE ↓</p>
      <section className="about-exp" aria-labelledby="about-exp-title">
        <h2 id="about-exp-title">Experience</h2>
        <ol>
          {EXPERIENCE.map((e) => (
            <li key={e.org} className="exp-row" tabIndex={0}>
              <span className="exp-years">{e.years}</span>
              <span className="exp-org">{e.org}</span>
              <span className="exp-role">{e.role}</span>
              <span className="exp-note">{e.note}</span>
            </li>
          ))}
        </ol>
      </section>
      <div className="about-footnote">
        * Synthesist&thinsp;/&thinsp;sin-thuh-sist/<br />
        means <em>one who turns complexity into clarity</em>.
      </div>
    </div>
  );
}
