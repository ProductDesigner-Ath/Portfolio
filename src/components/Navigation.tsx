import React from 'react';

export default function Navigation() {
  return (
    <nav id="main-nav">
      <div className="nav-left">
        <button className="nav-item" id="nav-about-btn">[About]</button>
        <button className="nav-item" id="nav-casestudy-btn">[Case studies]</button>
      </div>
      <a href="#" className="nav-logo">ATHARV</a>
      <div className="nav-right">
        <a href="https://drive.google.com/file/d/1breHhutnikcF8RlMtDVYWgE5Oh_5RH3O/view?usp=sharing" className="nav-item" id="nav-resume-btn" target="">[Resume]</a>
        <a href="mailto:hire@atharv.space" className="nav-item" id="nav-contact-btn">[Contact]</a>
      </div>
      <span className="nav-item" id="nav-proj-title"></span>
    </nav>
  );
}
