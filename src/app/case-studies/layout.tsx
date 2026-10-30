import localFont from 'next/font/local';

// Case-study type: Manrope for copy, Space Mono for labels (Ramdoot Figma). Self-hosted latin subsets, OFL.
const manrope = localFont({ src: './fonts/Manrope.woff2', weight: '400 500', variable: '--cs-sans', display: 'swap' });
const spaceMono = localFont({ src: './fonts/SpaceMono-400.woff2', weight: '400', variable: '--cs-mono', display: 'swap' });

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${manrope.variable} ${spaceMono.variable}`}>{children}</div>;
}
