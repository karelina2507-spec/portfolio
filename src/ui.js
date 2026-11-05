export function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

const paths = {
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  diagonal: '<path d="M7 17 17 7M7 7h10v10"/>',
  down: '<path d="m6 9 6 6 6-6"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z"/>',
  chart: '<path d="M4 4v16h16M8 15v-4m5 4V7m5 8v-6"/>',
  layers: '<path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5"/>',
  spark: '<path d="m12 3 2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4L12 3Z"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  ticket: '<path d="M3 5h18v5a2 2 0 0 0 0 4v5H3v-5a2 2 0 0 0 0-4V5Zm11 0v3m0 3v2m0 3v3"/>',
  bag: '<path d="M5 7h14l2 14H3L5 7Zm3 0V5a4 4 0 0 1 8 0v2"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
  github: '<path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-3c3-.3 6-1.5 6-6a4.7 4.7 0 0 0-1.3-3.3 4.3 4.3 0 0 0-.1-3.3S17.5 2 15 3.7a11.4 11.4 0 0 0-6 0C6.5 2 5.4 2.4 5.4 2.4a4.3 4.3 0 0 0-.1 3.3A4.7 4.7 0 0 0 4 9c0 4.5 3 5.7 6 6a3.5 3.5 0 0 0-1 3v4"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7m0-11v.5M11 17v-7m0 3a3 3 0 0 1 6 0v4"/>',
};

export function icon(name, className = '') {
  return `<svg class="icon ${escapeHtml(className)}" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
}

export function safeUrl(value, { local = false, email = false } = {}) {
  if (typeof value !== 'string' || !value.trim()) return null;
  if (local && /^\/(?!\/)[\w./-]+(?:\.pdf|\.webp|\.png|\.jpg|\.svg)$/i.test(value)) return value;
  if (email && /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/.test(value)) return `mailto:${value}`;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password ? url.href : null;
  } catch { return null; }
}

export function externalLink(url, label, className = '', iconName = 'diagonal') {
  const destination = safeUrl(url);
  return destination ? `<a class="${escapeHtml(className)}" href="${escapeHtml(destination)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}${icon(iconName)}</a>` : '';
}

export function projectVisual(project, lang, caption) {
  const en = lang === 'en';
  const l = (es, english) => en ? english : es;
  let inside = '';
  if (project.visual === 'tickets') {
    inside = `<div class="mini-sidebar">${icon('ticket')}<i></i><i></i><i></i></div><div class="mini-main"><div class="mini-heading"><b>${l('Centro de operaciones', 'Operations center')}</b><span>${icon('grid')}</span></div><div class="kanban">${[l('Abierto', 'Open'), l('En curso', 'In progress'), l('Resuelto', 'Resolved')].map((label, i) => `<div class="kanban-column"><small><em class="dot dot-${i}"></em>${label}</small><div class="mini-ticket"><span class="skeleton w-80"></span><span class="skeleton w-50"></span><span class="mini-pill"></span></div>${i < 2 ? '<div class="mini-ticket secondary"><span class="skeleton w-70"></span><span class="skeleton w-50"></span></div>' : ''}</div>`).join('')}</div></div>`;
  } else if (project.visual === 'commercial') {
    inside = `<div class="mini-sidebar">${icon('chart')}<i></i><i></i><i></i></div><div class="mini-main"><div class="mini-heading"><b>AGS <span>URUGUAY</span></b>${icon('chart')}</div><div class="commercial-head"><span>${l('Gestión comercial', 'Commercial management')}</span><span class="mini-pill"></span></div><div class="mini-table"><div class="mini-table-head"><span>${l('Pedidos', 'Orders')}</span><span>${l('Precios', 'Prices')}</span><span>${l('Comisiones', 'Commissions')}</span></div>${[0,1,2].map(() => '<div class="mini-table-row"><span class="skeleton w-70"></span><span class="skeleton w-50"></span><span class="mini-pill"></span></div>').join('')}</div></div>`;
  } else if (project.visual === 'store') {
    inside = `<div class="store-main"><div class="mini-heading"><b>AGS <span>URUGUAY</span></b>${icon('bag')}</div><div class="store-heading">${l('Descubrí nuestros productos.', 'Discover our products.')}</div><div class="product-previews">${[1,2,3].map((i) => `<div class="product-preview"><div class="product-object product-object-${i}"><span></span></div><span class="skeleton w-70"></span><span class="skeleton w-50"></span></div>`).join('')}</div></div>`;
  } else if (project.visual === 'portal') {
    inside = `<div class="mini-sidebar">${icon('user')}<i></i><i></i><i></i></div><div class="mini-main"><div class="mini-heading"><b>${l('Mi espacio', 'My workspace')}</b><span class="avatar-dot">${icon('user')}</span></div><div class="portal-greeting">${l('Todo, en un mismo lugar.', 'Everything, in one place.')}</div><div class="portal-options">${[l('Solicitudes', 'Requests'), l('Licencias', 'Leave'), l('Mis estados', 'My statuses')].map((s, i) => `<div>${icon(['layers','user','check'][i])}<small>${s}</small></div>`).join('')}</div><div class="portal-status"><span class="skeleton w-50"></span><span class="mini-pill"></span></div></div>`;
  } else if (project.visual === 'agh') {
    inside = `<div class="agh-art"><div class="agh-orbit orbit-one"></div><div class="agh-orbit orbit-two"></div><div class="agh-mark">AGH<span>${l('PORTAL INDEPENDIENTE', 'INDEPENDENT PORTAL')}</span></div><div class="agh-point p1"></div><div class="agh-point p2"></div><div class="agh-point p3"></div></div>`;
  } else {
    inside = `<div class="agents-art"><div class="agent-node agent-left">${icon('ticket')}<span>${l('Ticketera', 'Ticketing')}</span></div><span class="agent-wire wire-left"></span><div class="agent-center">${icon('spark')}<b>Codex</b></div><span class="agent-wire wire-right"></span><div class="agent-node agent-right">${icon('layers')}<span>${l('Portal', 'Portal')}</span></div><div class="agent-orbit"></div></div>`;
  }
  return `<figure class="project-visual visual-${escapeHtml(project.visual)}"><div class="visual-art" aria-hidden="true">${inside}</div><figcaption>${escapeHtml(caption)}</figcaption></figure>`;
}

export function sectionHeading(eyebrow, title, body = '', id = '') {
  return `<div class="section-heading"><p class="eyebrow">${escapeHtml(eyebrow)}</p><h2${id ? ` id="${escapeHtml(id)}"` : ''}>${escapeHtml(title)}</h2>${body ? `<p class="section-description">${escapeHtml(body)}</p>` : ''}</div>`;
}
