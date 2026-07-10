import React from 'react';

export default function Loader() {
  return (
    <div id="loader">
      <div id="ldr-wordmark">
        <span id="ldr-wordmark-inner">AK — Portfolio</span>
      </div>
      <div id="ldr-body">
        <div className="ldr-line" id="ldr-line-wrap"></div>
        <div id="ldr-sub" style={{ overflow: 'hidden', marginTop: '14px' }}>
          <div id="ldr-sub-wrap" style={{ display: 'flex', gap: '0.18em', justifyContent: 'center' }}></div>
        </div>
      </div>
      <div id="ldr-bottom">
        <div id="ldr-location">
          <span id="ldr-location-inner">Bombay, India</span>
        </div>
        <div id="ldr-pct-wrap">
          <span id="ldr-pct">0%</span>
        </div>
      </div>
    </div>
  );
}
