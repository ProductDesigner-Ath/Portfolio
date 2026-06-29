const fs = require('fs');
let html = fs.readFileSync('legacy/index.html', 'utf8');
let js = fs.readFileSync('legacy/script.js', 'utf8');
html = html.substring(html.indexOf('<body>') + 6, html.lastIndexOf('<script src=')).trim();

const comp = `'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Portfolio() {
  const container = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    window.gsap = gsap;
    let ctx = gsap.context(() => {
      try {
        ${js}
      } catch(e) { console.error("Script Error:", e); }
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} dangerouslySetInnerHTML={{ __html: \`${html.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
  );
}
`;

fs.writeFileSync('src/components/Portfolio.tsx', comp);
