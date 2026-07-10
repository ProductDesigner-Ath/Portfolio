import React from 'react';

export default function AboutOverlay() {
  return (
    <div id="about-overlay">
      <button id="about-close-x">[CLOSE]</button>
      <div className="about-headline-block">
        <h1 className="about-headline">
          <em>Hello,</em> My name is Atharv. I am a Product designer<br />
          Based in <em>*BOMBAY</em>,<br />
          with a passion for exploration.<br />
          Multi&#8202;&mdash;&#8202;Disciplinary.<br />
          Currently designing @<br />
          <span className="hl-link"><span className="hl-arrow">&#8599;</span>kraftelite</span>
        </h1>
      </div>
      <div className="about-body-block">
        <p id="about-bio-1"></p>
        <p id="about-bio-2"></p>
      </div>
      <div className="about-photo-block">
        <img className="about-photo"
          src="https://raw.githubusercontent.com/ProductDesigner-Ath/Protfolio/9188cd54b642b0a987b8061805cc9275672e3073/images/Upscale-me.png"
          alt="Atharv Kelwadkar"/>
      </div>
      <div className="about-footnote">
        * Synthesist&thinsp;/&thinsp;sin-thuh-sist/<br />
        means <em>one who turns complexity into clarity</em>.
      </div>
    </div>
  );
}
