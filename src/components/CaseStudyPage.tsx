import Link from 'next/link';
import { PHOTOS } from '../data/photos';
import { CARDS } from '../data/cards';
import { CASE_STUDIES } from '../data/caseStudies';
import { Body, CaseStudy, Columns, Eyebrow, Footer, Heading, Intro, Pair, Screens, Section, Showcase, Split, type Img } from './CaseStudyKit';

type Project = (typeof PHOTOS)[number];

const CAT_LABELS: Record<string, string> = { brand: 'Brand Identity', landing: 'Landing Page Design', graphic: 'Graphic Design', app: 'App Design', packaging: 'Packaging Design', saas: 'SaaS Design', product: 'Product Design' };

const sentences = (text: string) => text.match(/[^.!?]+[.!?]+(\s|$)/g)?.map(s => s.trim()) ?? [text];

/** Overview sentences split into two paragraphs, as in the Ramdoot context section. */
function twoParagraphs(text: string) {
  const s = sentences(text);
  if (s.length < 2) return [text];
  const half = Math.ceil(s.length / 2);
  return [s.slice(0, half).join(' '), s.slice(half).join(' ')];
}

// Shared case-study page in the Ramdoot Figma layout, filled from each project's data.
export default function CaseStudyPage({ project: p }: { project: Project }) {
  const cs = CASE_STUDIES[p.id] || {};
  const results = cs.results || CARDS[p.id]?.results;
  const summary = cs.oneLiner || CARDS[p.id]?.summary || sentences(p.overview)[0];
  const category = CAT_LABELS[p.cat] || p.cat;
  const index = PHOTOS.findIndex(x => x.id === p.id);
  const next = PHOTOS[(index + 1) % PHOTOS.length];
  const shot = (i: number): Img | undefined => p.images[i] ? { src: p.images[i], alt: `${p.title} screen ${String(i + 1).padStart(2, '0')}` } : undefined;
  const pair = [1, 2].map(shot).filter((x): x is Img => !!x);
  const more = [4, 5].map(shot).filter((x): x is Img => !!x);
  const feature = shot(3);
  const caption = (i: number) => `SCREEN ${String(i).padStart(2, '0')} / ${p.title.toUpperCase()}`;

  const status = results
    ? results.map(([k, v]) => ({ label: k.toUpperCase(), text: v }))
    : [{ label: 'ROLE', text: p.role }, { label: 'CATEGORY', text: category }, { label: 'TOOLS & FOCUS', text: p.tags.join(', ') }];

  return (
    <CaseStudy>
      <Intro
        tags={[p.title.toUpperCase(), category.toUpperCase(), p.year]}
        title={p.title}
        lede={summary}
        meta={[['ROLE', p.role], ['CATEGORY', category], ['YEAR', cs.started || p.year]]}
        showcase={<Showcase desktop={shot(0)!} />}
        caption={p.tags.join(' · ')}
      />

      <Section pt={64} pb={64}>
        <Eyebrow>01 / CONTEXT</Eyebrow>
        <Split mt={36} heading={'The brief.\nWhere it started.'} paragraphs={twoParagraphs(p.overview)} />
      </Section>

      <Section pt={58} pb={95}>
        <Eyebrow>[02 / PROCESS]</Eyebrow>
        <Heading mt={29} text="How I approached it." />
        <Body mt={32} size={22} className="cs-w1210" text={p.process} />
        {pair.length > 0 && <Pair mt={41} items={pair.map((img, i) => ({ img, caption: caption(i + 2) }))} />}
      </Section>

      {feature && (
        <Section pt={64} pb={35}>
          <Eyebrow>03 / THE DESIGN</Eyebrow>
          <Heading mt={30} text={'Selected screens\nfrom the work.'} />
          <Screens mt={49} variant="journey" desktop={feature} />
          {more.length > 0 && <Pair mt={36} items={more.map((img, i) => ({ img, caption: caption(i + 5) }))} />}
        </Section>
      )}

      <Section pt={64}>
        <Eyebrow>{feature ? '04' : '03'} / OUTCOME</Eyebrow>
        <Heading mt={30} text={'Where it landed.'} />
        <Body mt={70} className="cs-w1190" text={p.outcome} />
        <Columns mt={72} items={status} />
      </Section>

      <Footer
        left={`${p.title.toUpperCase()} / ${p.role.toUpperCase()}`}
        right={<Link href={`/case-studies/${next.slug}`}>NEXT: {next.title.toUpperCase()} →</Link>}
      />
    </CaseStudy>
  );
}
