import type { Metadata } from 'next';
import RamdootCaseStudy from '../../../components/RamdootCaseStudy';

export const metadata: Metadata = {
  title: 'Ramdoot Restore — Case Study | Atharv Kelwadkar',
  description: 'A case study of a digital magazine experience for Ramdoot Restore.',
};

export default function RamdootPage() {
  return <RamdootCaseStudy />;
}
