import Link from 'next/link';
import { PHOTOS } from '../data/photos';
import { CARDS } from '../data/cards';
import { CASE_STUDIES } from '../data/caseStudies';
import '../app/case-study.css';

type Project = (typeof PHOTOS)[number];

const CAT_LABELS: Record<string, string> = { brand: 'Brand Identity', landing: 'Landing Page Design', graphic: 'Graphic Design', app: 'App Design', packaging: 'Packaging Design', saas: 'SaaS Design', product: 'Product Design' };

// Shared case-study template, following the Ramdoot Figma layout (atharv.space)
export default function CaseStudyPage({ project: p }: { project: Project }) {
  const cs = CASE_STUDIES[p.id] || {};
  const results = cs.results || CARDS[p.id]?.results;
  const summary = cs.oneLiner || CARDS[p.id]?.summary || p.overview.split('. ')[0] + '.';
  const [hero, ...rest] = p.images;
  const index = PHOTOS.findIndex(x => x.id === p.id);
  const next = PHOTOS[(index + 1) % PHOTOS.length];

  return (
    <main className="cs">
      <header className="cs-top">
        <Link href="/">← ATHARV / PRODUCT DESIGN</Link>
        <span>{p.title.toUpperCase()} · CASE STUDY {String(index + 1).padStart(2, '0')}</span>
      </header>

      <section className="cs-intro">
        <p className="cs-eyebrow">{p.role.toUpperCase()} / {p.year}</p>
        <h1>{p.title}</h1>
        <p className="cs-lede">{summary}</p>
        <dl className="cs-meta">
          <div><dt>ROLE</dt><dd>{p.role}</dd></div>
          <div><dt>CATEGORY</dt><dd>{CAT_LABELS[p.cat] || p.cat}</dd></div>
          <div><dt>YEAR</dt><dd>{cs.started || p.year}</dd></div>
        </dl>
        <figure className="cs-frame"><img src={hero} alt={`${p.title} overview`} /></figure>
      </section>

      {results && (
        <section className="cs-section">
          <p className="cs-eyebrow">RESULTS</p>
          <ul className="cs-results">{results.map(([k, v]) => <li key={k}><b>{v}</b><span>{k}</span></li>)}</ul>
        </section>
      )}

      <section className="cs-section cs-split">
        <div><p className="cs-eyebrow">01 / OVERVIEW</p><h2>The context.</h2></div>
        <p>{p.overview}</p>
      </section>

      {rest[0] && <figure className="cs-frame cs-wide"><img src={rest[0]} alt={`${p.title} screen 2`} /></figure>}

      <section className="cs-section cs-split">
        <div><p className="cs-eyebrow">02 / PROCESS</p><h2>How I approached it.</h2></div>
        <p>{p.process}</p>
      </section>

      {rest.length > 1 && (
        <div className="cs-grid">{rest.slice(1).map((src, i) => <figure className="cs-frame" key={src}><img src={src} alt={`${p.title} screen ${i + 3}`} /></figure>)}</div>
      )}

      <section className="cs-section cs-split">
        <div><p className="cs-eyebrow">03 / OUTCOME</p><h2>Where it landed.</h2></div>
        <p>{p.outcome}</p>
      </section>

      <section className="cs-section">
        <ul className="cs-tags">{p.tags.map(t => <li key={t}>{t}</li>)}</ul>
      </section>

      <footer className="cs-footer">
        <span>{p.title.toUpperCase()} / {p.year}</span>
        <Link href={`/case-studies/${next.slug}`}>NEXT: {next.title.toUpperCase()} →</Link>
      </footer>
    </main>
  );
}
