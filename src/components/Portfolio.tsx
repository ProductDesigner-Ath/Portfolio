'use client';
import React, { useRef } from 'react';

import Loader from './Loader';
import Cursor from './Cursor';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';
import Filter from './Filter';
import CanvasStage from './CanvasStage';
import ProjectView from './ProjectView';
import AboutOverlay from './AboutOverlay';

import { usePortfolioAnimations } from '../hooks/usePortfolioAnimations';

export default function Portfolio() {
  const container = useRef<HTMLDivElement>(null);

  // Initialize all DOM-based animations and logic
  usePortfolioAnimations(container);

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
