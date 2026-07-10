'use client';
import React, { useState, useEffect } from 'react';

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCat, setActiveCat] = useState<string | null>(null);

  const categories = [
    { id: 'brand', label: 'Brand Identity' },
    { id: 'landing', label: 'Landing Page' },
    { id: 'graphic', label: 'Graphic Design' },
    { id: 'app', label: 'App Design' },
    { id: 'packaging', label: 'Packaging' },
    { id: 'saas', label: 'SaaS Design' },
    { id: 'product', label: 'Product Design' },
  ];

  useEffect(() => {
    // Apply filtering to the dynamically created photos
    const photos = document.querySelectorAll<HTMLElement>('.photo');
    const filterCol = document.getElementById('filter-col');
    
    if (activeCat) {
      filterCol?.classList.add('has-active');
      photos.forEach(el => {
        el.classList.toggle('cat-hidden', el.dataset.cat !== activeCat);
      });
    } else {
      filterCol?.classList.remove('has-active');
      photos.forEach(el => el.classList.remove('cat-hidden'));
    }
  }, [activeCat]);

  // Handle ESC key to close filter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div id="bottom-right" style={{ pointerEvents: 'none' }}>
      <div className={`filter-col ${activeCat ? 'has-active' : ''}`} id="filter-col" style={{ pointerEvents: 'auto' }}>
        {categories.map((cat, i) => (
          <button
            key={cat.id}
            className={`cat-btn ${isOpen ? 'show' : ''} ${activeCat === cat.id ? 'active' : ''}`}
            data-cat={cat.id}
            style={{ transitionDelay: isOpen ? `${(categories.length - 1 - i) * 45}ms` : '0ms' }}
            onClick={() => setActiveCat(prev => prev === cat.id ? null : cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="filter-toggle-wrap" style={{ pointerEvents: 'auto' }}>
        <button 
          id="filter-toggle-btn" 
          className={isOpen ? 'is-open' : ''} 
          onClick={() => setIsOpen(!isOpen)}
        >
          [FILTER]
        </button>
      </div>
    </div>
  );
}
