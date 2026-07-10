import React from 'react';

export default function CanvasStage() {
  return (
    <>
      <div id="h-progress"><div id="h-progress-bar"></div></div>
      <div id="canvas"><div id="stage"></div></div>
      <canvas id="glcanvas"></canvas>
    </>
  );
}
