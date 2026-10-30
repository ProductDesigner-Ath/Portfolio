import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CaseStudyPage from '../../../components/CaseStudyPage';
import { PHOTOS } from '../../../data/photos';

// Ramdoot has its own page at /case-studies/ramdoot
export function generateStaticParams() {
  return PHOTOS.filter(p => p.slug !== 'ramdoot').map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = PHOTOS.find(x => x.slug === slug);
  return p ? { title: `${p.title} — Case Study | Atharv Kelwadkar`, description: p.overview } : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = PHOTOS.find(x => x.slug === slug);
  if (!p) notFound();
  return <CaseStudyPage project={p} />;
}
