import type { Metadata } from 'next';
import AboutPage from '../../components/AboutPage';

export const metadata: Metadata = {
  title: 'About | Atharv Kelwadkar',
  description: 'Product designer and no-code developer based in Bombay. Skills, experience and background.',
};

export default function About() {
  return <AboutPage />;
}
