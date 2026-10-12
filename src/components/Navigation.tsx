import React from 'react';
import NameMark from './NameMark';

export default function Navigation() {
  return (
    <nav id="main-nav">
      <div className="nav-left">
        <button className="nav-item" id="nav-about-btn">[About]</button>
        <button className="nav-item" id="nav-casestudy-btn">[Case studies]</button>
        <a href="/gallery" className="nav-item" id="nav-gallery-btn">[Gallery]</a>
        <a href="/document/resume.pdf" className="nav-item" id="nav-resume-btn" target="_blank" rel="noopener noreferrer">[Resume]</a>
        <a href="mailto:hire@atharv.space" className="nav-item" id="nav-contact-btn">[Contact]</a>
      </div>
      <a href="#" className="nav-logo" aria-label="Atharv, home"><NameMark className="nav-logo-mark" /></a>
      <div className="nav-right"></div>
      <span className="nav-item" id="nav-proj-title"></span>
      <div id="open-strip" aria-label="Open to work: remote roles, based in Bombay, working with US, UK and EU teams">
        <div className="open-strip-track" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>OPEN TO WORK <b>✦</b> REMOTE ROLES <b>✦</b> BASED IN BOMBAY <b>✦</b> US / UK / EU <b>✦</b> </span>
          ))}
        </div>
      </div>
    </nav>
  );
}
