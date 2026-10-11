import type { Metadata } from 'next';
import Gallery from '../../components/Gallery';

export const metadata: Metadata = {
  title: 'Gallery | Atharv Kelwadkar',
  description: 'A drag-to-explore gallery of design work by Atharv Kelwadkar.',
};

export default function GalleryPage() {
  return <Gallery />;
}
