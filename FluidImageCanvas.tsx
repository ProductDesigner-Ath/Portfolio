'use client';

import { useEffect, useRef, useState } from 'react';

export default function FluidImageCanvas({ src, alt }: { src: string; alt: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const gl = canvas.getContext('webgl', { alpha: false, antialias: true }); if (!gl) return;
    const make = (type: number, source: string) => { const s = gl.createShader(type)!; gl.shaderSource(s, source); gl.compileShader(s); return s; };
    const p = gl.createProgram()!;
    gl.attachShader(p, make(gl.VERTEX_SHADER, 'attribute vec2 a;varying vec2 v;void main(){v=(a+1.0)*.5;gl_Position=vec4(a,0.,1.);}'));
    gl.attachShader(p, make(gl.FRAGMENT_SHADER, 'precision mediump float;varying vec2 v;uniform sampler2D t;uniform float p;void main(){float e=sin(3.14159*p);vec2 uv=vec2(v.x+sin(v.y*18.+p*10.)*.006*e,v.y+sin(v.x*12.-p*8.)*.004*e);gl_FragColor=texture2D(t,uv);}'));
    gl.linkProgram(p); gl.useProgram(p);
    const b = gl.createBuffer()!; gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
    const a = gl.getAttribLocation(p, 'a'); gl.enableVertexAttribArray(a); gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0);
    const image = new Image(); let frame = 0; let cancelled = false;
    image.onload = () => { if (cancelled) return; const scale = Math.min(1, 1600 / Math.max(image.naturalWidth, image.naturalHeight)); canvas.width = Math.round(image.naturalWidth * scale); canvas.height = Math.round(image.naturalHeight * scale); gl.viewport(0, 0, canvas.width, canvas.height); const texture = gl.createTexture()!; gl.bindTexture(gl.TEXTURE_2D, texture); gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image); const uniform = gl.getUniformLocation(p, 'p'); const start = performance.now(); const draw = (now: number) => { const progress = Math.min(1, (now - start) / 850); gl.uniform1f(uniform, 1 - Math.pow(1 - progress, 4)); gl.drawArrays(gl.TRIANGLES, 0, 6); if (progress < 1) frame = requestAnimationFrame(draw); }; setReady(true); frame = requestAnimationFrame(draw); };
    image.src = src;
    return () => { cancelled = true; cancelAnimationFrame(frame); };
  }, [src]);
  return <><canvas ref={canvasRef} className={ready ? 'fluid-canvas ready' : 'fluid-canvas'} aria-label={alt} role="img" /><img className={ready ? 'fluid-fallback hidden' : 'fluid-fallback'} src={src} alt={alt} /></>;
}
