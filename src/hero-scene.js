import { escapeHtml as e, icon } from './ui.js';

// An abstract map of the practice, not a live system or a performance dashboard.
export function renderHeroScene(t) {
  return `<figure class="hero-system intelligence-scene">
    <div class="scene-caption"><span class="scene-symbol">✳</span><span>${e(t.systemLabel)}</span><span class="scene-code" aria-hidden="true">KF / 01</span></div>
    <div class="intelligence-field" aria-hidden="true">
      <div class="scene-glow"></div><div class="scene-grid"></div>
      <svg class="signal-network" viewBox="0 0 520 430" fill="none">
        <defs>
          <linearGradient id="signal-gradient" x1="50" y1="40" x2="460" y2="390" gradientUnits="userSpaceOnUse"><stop stop-color="#6dd9f5"/><stop offset=".5" stop-color="#a982ff"/><stop offset="1" stop-color="#ef8bc9"/></linearGradient>
          <radialGradient id="core-gradient"><stop stop-color="#a88aff" stop-opacity=".17"/><stop offset="1" stop-color="#a88aff" stop-opacity="0"/></radialGradient>
        </defs>
        <circle cx="260" cy="217" r="185" fill="url(#core-gradient)"/>
        <g class="signal-orbit orbit-slow"><ellipse cx="260" cy="217" rx="180" ry="78" transform="rotate(-34 260 217)" stroke="url(#signal-gradient)" stroke-opacity=".65"/><circle cx="110" cy="303" r="4" fill="#75ddf8"/><circle cx="405" cy="132" r="3" fill="#dbadff"/></g>
        <g class="signal-orbit orbit-reverse"><ellipse cx="260" cy="217" rx="177" ry="78" transform="rotate(36 260 217)" stroke="url(#signal-gradient)" stroke-opacity=".35" stroke-dasharray="2 7"/><circle cx="119" cy="133" r="3" fill="#c3a6ff"/><circle cx="403" cy="302" r="4" fill="#ef8bc9"/></g>
        <circle cx="260" cy="217" r="132" stroke="#bba4f9" stroke-opacity=".1"/>
        <path class="signal-flow" d="M80 217H174M346 217H440M260 56V132M260 300V376" stroke="url(#signal-gradient)" stroke-dasharray="3 8" stroke-opacity=".7"/>
        <path d="M80 217H174M346 217H440M260 56V132M260 300V376" stroke="#ad9be0" stroke-opacity=".13"/>
        <circle cx="260" cy="217" r="81" fill="#121320" stroke="url(#signal-gradient)" stroke-opacity=".7"/>
        <circle cx="260" cy="217" r="72" stroke="#9e7cf1" stroke-opacity=".12"/>
        <path class="intelligence-star" d="M260 176L270 204L298 214L270 224L260 252L250 224L222 214L250 204L260 176Z" fill="url(#signal-gradient)"/>
        <circle cx="260" cy="217" r="3" fill="#fff"/>
      </svg>
      <div class="scene-node node-business">${icon('layers')}<span>${e(t.systemTags[0])}</span><i></i></div>
      <div class="scene-node node-data">${icon('chart')}<span>${e(t.systemTags[1])}</span><i></i></div>
      <div class="scene-node node-ai">${icon('spark')}<span>${e(t.systemTags[2])}</span><i></i></div>
      <div class="scene-input"><span class="node-pin"></span>${e(t.diagramInput)}</div>
      <div class="scene-output">${icon('check')}<span>${e(t.diagramOutput)}</span>${icon('diagonal')}</div>
      <span class="scene-cross cross-one">+</span><span class="scene-cross cross-two">+</span><span class="scene-coordinate">01 — 04</span>
    </div>
    <figcaption><span class="scene-footer-line"></span>${e(t.diagramCaption)}</figcaption>
  </figure>`;
}
