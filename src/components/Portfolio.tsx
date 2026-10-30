'use client';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

import Loader from './Loader';
import Cursor from './Cursor';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';
import Filter from './Filter';
import CanvasStage from './CanvasStage';
import ProjectView from './ProjectView';
import AboutOverlay from './AboutOverlay';

import { usePortfolioAnimations } from '../hooks/usePortfolioAnimations';
import { PHOTOS } from '../data/photos';
import '../app/postcards.css';

export default function Portfolio() {
  const container = useRef<HTMLDivElement>(null);

  const router = useRouter();

  // Case-study pages are prefetched so the click transition lands on a ready page
  useEffect(() => { PHOTOS.forEach(p => router.prefetch(`/case-studies/${p.slug}`)); }, [router]);

  // Initialize all DOM-based animations and logic
  usePortfolioAnimations(container, router.push);

  return (
    <div ref={container}>
      <Loader />
      <div className="grid-bg" id="home-grid-bg"></div>
      <Cursor />
      <Navigation />
      <SocialLinks />
      <Filter />
      <CanvasStage />
      <ProjectView />
      <AboutOverlay />
    </div>
  );
}
