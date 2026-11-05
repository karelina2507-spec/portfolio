import { profile, copy, projects } from './content.js';
import { escapeHtml as e, icon, safeUrl, externalLink, projectVisual, sectionHeading } from './ui.js';
import { initialFilters } from './demo.js';
import { renderCase, renderDashboard } from './dashboard.js';

const app = document.querySelector('#app');
const url = new URL(window.location.href);
let storedLanguage = null;
try { storedLanguage = localStorage.getItem('portfolio-language'); } catch { /* Storage may be disabled. */ }
const state = {
  lang: [url.searchParams.get('lang'), storedLanguage].find((value) => ['es','en'].includes(value)) || 'es',
  category: 'all', activeCase: 0, filters: {...initialFilters}, projectId: null,
};
let sectionObserver;
let lastProjectTrigger;

function header(t) {
  return `<a class="skip-link" href="#main">${t.skip}</a><header class="site-header"><div class="container header-inner"><a class="brand" href="#inicio" aria-label="Karelina Fabra"><span class="brand-symbol">kf<span>·</span></span><span>Karelina <b>Fabra</b></span></a><nav class="desktop-nav" aria-label="${state.lang==='es'?'Navegación principal':'Main navigation'}"><a href="#proyectos">${t.nav[0]}</a><a href="#datos">${t.nav[1]}</a><a href="#sobre-mi">${t.nav[2]}</a></nav><div class="header-actions"><div class="language-switch" role="group" aria-label="${t.language}"><button data-language="es" aria-label="Ver en español" aria-pressed="${state.lang==='es'}" lang="es">ES</button><span aria-hidden="true">/</span><button data-language="en" aria-label="View in English" aria-pressed="${state.lang==='en'}" lang="en">EN</button></div><a class="button button-small header-contact" href="#contacto">${t.contact}${icon('diagonal')}</a><button class="mobile-menu-button" aria-label="${t.menu}" aria-expanded="false" aria-controls="mobile-nav">${icon('menu')}</button></div></div><nav id="mobile-nav" class="mobile-nav" aria-label="${state.lang==='es'?'Navegación móvil':'Mobile navigation'}" hidden><a href="#proyectos">${t.nav[0]}</a><a href="#datos">${t.nav[1]}</a><a href="#sobre-mi">${t.nav[2]}</a><a href="#contacto">${t.contact}</a></nav></header>`;
}

function hero(t) {
  return `<section class="hero container" id="inicio" aria-labelledby="hero-title"><div class="hero-copy"><p class="eyebrow"><span class="eyebrow-dot"></span>${t.eyebrow}</p><p class="hero-name">Karelina Fabra</p><h1 id="hero-title">${t.heroLead}<br><span>${t.heroAccent}</span><br>${t.heroEnd}</h1><p class="hero-description">${t.heroBody}</p><div class="hero-actions"><a class="button button-primary" href="#proyectos">${t.viewProjects}${icon('arrow')}</a><a class="text-link" href="#datos">${t.viewData}${icon('diagonal')}</a></div><p class="hero-note"><span></span>${t.heroNote}</p></div><figure class="hero-system"><div class="system-topline"><span>${t.systemLabel}</span>${icon('spark')}</div><h2>${t.systemTitle}</h2><div class="system-map" aria-hidden="true"><div class="map-grid"></div><div class="map-orbit orbit-a"></div><div class="map-orbit orbit-b"></div><div class="map-line line-top"></div><div class="map-line line-bottom"></div><div class="map-line line-left"></div><div class="map-line line-right"></div><div class="map-input"><span class="tiny-dot"></span>${t.diagramInput}${icon('diagonal')}</div><div class="map-node map-process">${icon('layers')}<span>${t.systemTags[0]}</span></div><div class="map-core">${icon('spark')}<span>KF</span></div><div class="map-node map-data">${icon('chart')}<span>${t.systemTags[1]}</span></div><div class="map-ai">${icon('spark')}<span>${t.systemTags[2]}</span></div><div class="map-output">${icon('check')}<span>${t.diagramOutput}</span></div><span class="map-point point-a"></span><span class="map-point point-b"></span></div><figcaption><span class="tiny-dot"></span>${t.diagramCaption}</figcaption></figure></section><div class="expertise-ribbon"><div class="container">${t.ribbon.map((label,i)=>`<span>${icon(['layers','grid','spark','chart'][i])}${label}</span>`).join('')}</div></div>`;
}

function projectCards() {
  const t=copy[state.lang];
  const filtered = projects.filter(p=>state.category==='all'||p.category===state.category);
  return filtered.map(p=>{
    const c=p[state.lang];
    return `<article class="project-card"><button class="project-open" data-project="${p.id}" aria-label="${e(t.details)}: ${e(c.title)}">${projectVisual(p,state.lang,t.concept)}<div class="project-card-content"><div class="project-card-topline"><span>${e(c.category)}</span>${icon('diagonal')}</div><h3>${e(c.title)}</h3><p>${e(c.summary)}</p><span class="project-detail-link">${t.details}${icon('arrow')}</span></div></button></article>`;
  }).join('') || `<p>${t.emptyProjects}</p>`;
}

function projectSection(t) {
  return `<section id="proyectos" class="section container" aria-labelledby="projects-title"><div class="projects-intro">${sectionHeading(t.projectsEyebrow,t.projectsTitle,t.projectsBody,'projects-title')}<span class="section-index" aria-hidden="true">↘</span></div><div class="project-filters" role="group" aria-label="${state.lang==='es'?'Categorías de proyectos':'Project categories'}">${['all','process','commerce','ai'].map((cat,i)=>`<button data-category="${cat}" aria-pressed="${state.category===cat}">${t.filters[i]}${cat==='all'?'<span>06</span>':''}</button>`).join('')}</div><div class="projects-grid" id="projects-grid">${projectCards()}</div><p id="project-status" class="sr-only" aria-live="polite"></p></section>`;
}

function dataSection(t) {
  return `<section id="datos" class="data-section section" aria-labelledby="data-title"><div class="container"><div class="data-intro"><div><p class="eyebrow">${t.dataEyebrow}</p><h2 id="data-title">${t.dataTitle}<br><span>${t.dataAccent}</span></h2></div><div><p>${t.dataBody}</p><div class="tool-chips">${t.dataTags.map(tag=>`<span>${tag}</span>`).join('')}</div></div></div><div class="case-tabs" role="tablist" aria-label="${state.lang==='es'?'Casos de análisis':'Analysis cases'}">${t.dataCases.map((label,i)=>`<button role="tab" id="case-tab-${i}" aria-controls="case-panel" aria-selected="${state.activeCase===i}" tabindex="${state.activeCase===i?0:-1}" data-case="${i}"><span>0${i+1}</span>${label}</button>`).join('')}</div><div id="case-panel" role="tabpanel" aria-labelledby="case-tab-${state.activeCase}" tabindex="0"><div class="case-story" id="case-story">${renderCase(state.lang,state.activeCase)}</div><div class="dashboard" id="dashboard">${renderDashboard(state.lang,state.filters,state.activeCase)}</div></div><p id="dashboard-status" class="sr-only" aria-live="polite" aria-atomic="true"></p></div></section>`;
}

function aboutSection(t) {
  return `<section id="sobre-mi" class="section container about-section" aria-labelledby="about-title"><div class="about-visual"><div class="about-monogram" aria-hidden="true">kf<span>·</span><div class="monogram-orbit"></div><span class="monogram-point"></span></div><span class="about-caption">${t.aboutCaption}</span><p>${e(t.aboutCallout).replace('\n','<br>')}</p></div><div class="about-copy"><p class="eyebrow">${t.aboutEyebrow}</p><h2 id="about-title">${t.aboutTitle}<br><span>${t.aboutAccent}</span></h2><p class="about-lead">${t.aboutP1}</p><p>${t.aboutP2}</p><p>${t.aboutP3}</p><a class="text-link" href="#metodo">${t.methodsLink}${icon('arrow')}</a></div></section>`;
}

function methodSection(t) {
  return `<section id="metodo" class="method-section section" aria-labelledby="method-title"><div class="container">${sectionHeading(t.methodEyebrow,t.methodTitle,'','method-title')}<div class="method-grid">${t.steps.map((step,i)=>`<article class="method-step"><div class="step-number"><span>0${i+1}</span>${i<3?icon('arrow'):icon('check')}</div><h3>${step.title}</h3><p>${step.text}</p></article>`).join('')}</div><div class="toolbox"><h3>${t.toolbox}</h3><div class="toolbox-grid">${t.tools.map(([title,desc],i)=>`<div>${icon(['chart','spark','layers','grid'][i])}<div><strong>${title}</strong><span>${desc}</span></div></div>`).join('')}</div></div></div></section>`;
}

function contactSection(t) {
  const email=safeUrl(profile.email,{email:true});
  const cv=safeUrl(profile.cv[state.lang],{local:true});
  return `<section id="contacto" class="contact-section section" aria-labelledby="contact-title"><div class="container contact-inner"><div><p class="eyebrow">${t.contactEyebrow}</p><h2 id="contact-title">${t.contactTitle}<br><span>${t.contactAccent}</span></h2><p>${t.contactBody}</p></div><div class="contact-actions">${email?`<a class="contact-email" href="${e(email)}">${e(profile.email)}${icon('diagonal')}</a>`:''}<div class="contact-socials">${externalLink(profile.github,t.githubCta,'social-link','github')}${externalLink(profile.linkedin,t.linkedinCta,'social-link','linkedin')}${cv?`<a class="social-link cv-link" href="${e(cv)}" download>${t.cvCta}${icon('download')}</a>`:''}</div></div></div></section><footer class="site-footer"><div class="container"><a class="footer-brand" href="#inicio">Karelina Fabra<span>© ${new Date().getFullYear()}</span></a><p>${t.footer}</p><a href="#inicio" class="back-top">${t.backTop}${icon('arrow')}</a></div></footer>`;
}

function projectModalContent(project) {
  const t=copy[state.lang], c=project[state.lang];
  const detail=(label,value)=> value?`<section class="project-detail-section"><h3>${e(label)}</h3><p>${e(value)}</p></section>`:'';
  const links=[externalLink(project.repository,t.repo,'button button-outline','github'),externalLink(project.demo,t.demo,'button button-outline'),externalLink(project.video,t.video,'button button-outline')].filter(Boolean);
  return `<div class="modal-topbar"><span>${e(c.category)}</span><button class="modal-close" aria-label="${t.close}" data-close-project>${icon('close')}</button></div><div class="modal-intro"><span class="eyebrow">${project.evidence==='pending-material'?t.scopePending:t.scopeShared}</span><h2 id="project-dialog-title">${e(c.title)}</h2><p>${e(c.summary)}</p></div>${projectVisual(project,state.lang,t.concept)}<div class="project-detail-body">${detail(t.projectLabels.context,c.context)}${detail(t.projectLabels.users,c.users)}${detail(t.projectLabels.role,project.role?.[state.lang])}${detail(t.projectLabels.solution,c.solution)}${c.features.length?`<section class="project-detail-section"><h3>${t.projectLabels.features}</h3><ul class="feature-list">${c.features.map(feature=>`<li>${icon('check')}${e(feature)}</li>`).join('')}</ul></section>`:''}${project.technologies.length?`<section class="project-detail-section"><h3>${t.projectLabels.technologies}</h3><div class="tool-chips">${project.technologies.map(tech=>`<span>${e(tech)}</span>`).join('')}</div></section>`:''}${detail(t.projectLabels.ai,c.ai)}${detail(t.projectLabels.result,project.result?.[state.lang])}${detail(t.projectLabels.purpose,c.purpose)}${project.screenshots.length?`<section class="project-detail-section"><h3>${t.projectLabels.media}</h3>${project.screenshots.map(shot=>{const src=safeUrl(shot.src,{local:true});return src?`<img class="project-screenshot" src="${e(src)}" alt="${e(shot.alt[state.lang])}" loading="lazy">`:'';}).join('')}</section>`:''}${links.length?`<div class="project-modal-links">${links.join('')}</div>`:''}<p class="project-evidence-note">${project.evidence==='pending-material'?t.independentNote:t.projectNote}</p><button class="text-link next-project" data-next-project>${t.nextProject}${icon('arrow')}</button></div>`;
}

function openProject(id, trigger) {
  const project=projects.find(p=>p.id===id);
  if(!project) return;
  const dialog=document.querySelector('#project-dialog');
  state.projectId=id;
  lastProjectTrigger=trigger||lastProjectTrigger;
  dialog.innerHTML=projectModalContent(project);
  dialog.setAttribute('aria-labelledby','project-dialog-title');
  dialog.showModal();
  dialog.scrollTop=0;
  document.body.classList.add('modal-open');
  const nextUrl=new URL(location.href); nextUrl.searchParams.set('project',id); history.replaceState(null,'',nextUrl);
}

function closeProject() {
  const dialog=document.querySelector('#project-dialog');
  if(dialog.open) dialog.close();
  state.projectId=null;
  document.body.classList.remove('modal-open');
  const nextUrl=new URL(location.href);nextUrl.searchParams.delete('project');history.replaceState(null,'',nextUrl);
  if(lastProjectTrigger?.isConnected) lastProjectTrigger.focus({preventScroll:true});
}

function refreshDashboard(focusKey) {
  const previousDetails=document.querySelector('.data-table-details')?.open||false;
  document.querySelector('#dashboard').innerHTML=renderDashboard(state.lang,state.filters,state.activeCase,previousDetails);
  if(focusKey) document.querySelector(`[data-filter="${focusKey}"]`)?.focus({preventScroll:true});
  document.querySelector('#dashboard-status').textContent=`${copy[state.lang].resultCount}: ${[...document.querySelectorAll('.dashboard-metric')].map(el=>el.textContent).join('. ')}`;
}

function activateCase(index, focus=false) {
  state.activeCase=(index+3)%3;
  document.querySelectorAll('[data-case]').forEach(button=>{const active=Number(button.dataset.case)===state.activeCase;button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});
  document.querySelector('#case-panel').setAttribute('aria-labelledby',`case-tab-${state.activeCase}`);
  document.querySelector('#case-story').innerHTML=renderCase(state.lang,state.activeCase);
  refreshDashboard();
  if(focus)document.querySelector(`[data-case="${state.activeCase}"]`).focus();
}

function closeMenu() {
  const button=document.querySelector('.mobile-menu-button');
  button.setAttribute('aria-expanded','false');button.setAttribute('aria-label',copy[state.lang].menu);
  document.querySelector('#mobile-nav').hidden=true;
}

function setupSectionObserver() {
  sectionObserver?.disconnect();
  if(!('IntersectionObserver' in window))return;
  sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting) document.querySelectorAll('.desktop-nav a').forEach(a=>{if(a.hash===`#${entry.target.id}`)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}),{rootMargin:'-15% 0px -60% 0px'});
  document.querySelectorAll('#proyectos,#datos,#sobre-mi').forEach(el=>sectionObserver.observe(el));
}

function render() {
  const t=copy[state.lang];
  document.documentElement.lang=state.lang;document.title=t.title;
  document.querySelector('meta[name="description"]').content=t.description;
  document.querySelector('meta[property="og:title"]').content=t.title;
  document.querySelector('meta[property="og:description"]').content=t.description;
  app.innerHTML=`${header(t)}<main id="main" tabindex="-1">${hero(t)}${projectSection(t)}${dataSection(t)}${aboutSection(t)}${methodSection(t)}${contactSection(t)}</main><dialog id="project-dialog" class="project-dialog" aria-label="${e(t.details)}"></dialog>`;
  document.querySelector('#project-dialog').addEventListener('cancel',event=>{event.preventDefault();closeProject();});
  document.querySelector('#project-dialog').addEventListener('click',event=>{if(event.target===event.currentTarget){const bounds=event.currentTarget.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)closeProject();}});
  setupSectionObserver();
}

app.addEventListener('click',event=>{
  const target=event.target.closest('button,a');if(!target)return;
  if(target.matches('[data-language]')) {
    const lang=target.dataset.language;if(lang===state.lang)return;
    const scrollPosition=window.scrollY; const currentProject=state.projectId;
    state.lang=lang;try{localStorage.setItem('portfolio-language',lang);}catch{/* Preference is optional. */}
    const nextUrl=new URL(location.href);nextUrl.searchParams.set('lang',lang);history.replaceState(null,'',nextUrl);
    render();window.scrollTo({top:scrollPosition,behavior:'instant'});
    document.querySelector(`[data-language="${lang}"]`).focus({preventScroll:true});
    if(currentProject)openProject(currentProject);
  } else if(target.matches('[data-category]')) {
    state.category=target.dataset.category;
    document.querySelectorAll('[data-category]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.category===state.category)));
    document.querySelector('#projects-grid').innerHTML=projectCards();
    const count=document.querySelectorAll('.project-card').length;document.querySelector('#project-status').textContent=state.lang==='es'?`${count} proyectos mostrados`:`${count} projects shown`;
  } else if(target.matches('[data-project]')) openProject(target.dataset.project,target);
  else if(target.matches('[data-close-project]')) closeProject();
  else if(target.matches('[data-next-project]')) {const i=projects.findIndex(p=>p.id===state.projectId);openProject(projects[(i+1)%projects.length].id);}
  else if(target.matches('[data-case]')) activateCase(Number(target.dataset.case));
  else if(target.matches('[data-reset-filters]')) {state.filters={...initialFilters};refreshDashboard();document.querySelector('[data-reset-filters]').focus({preventScroll:true});}
  else if(target.matches('.mobile-menu-button')) {const expanded=target.getAttribute('aria-expanded')!=='true';target.setAttribute('aria-expanded',String(expanded));target.setAttribute('aria-label',expanded?copy[state.lang].closeMenu:copy[state.lang].menu);document.querySelector('#mobile-nav').hidden=!expanded;}
  else if(target.matches('#mobile-nav a'))closeMenu();
});

app.addEventListener('change',event=>{
  if(event.target.matches('[data-filter]')){const key=event.target.dataset.filter;state.filters[key]=event.target.value;refreshDashboard(key);}
});
app.addEventListener('keydown',event=>{
  if(event.target.matches('[role="tab"]')&&['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) {event.preventDefault();activateCase(event.key==='Home'?0:event.key==='End'?2:state.activeCase+(event.key==='ArrowRight'?1:-1),true);}
  if(event.key==='Escape'&&document.querySelector('.mobile-menu-button').getAttribute('aria-expanded')==='true'){closeMenu();document.querySelector('.mobile-menu-button').focus();}
});
window.addEventListener('resize',()=>{if(window.innerWidth>850)closeMenu();});
render();
const requestedProject=url.searchParams.get('project');
if(requestedProject)openProject(requestedProject);
if(location.hash&&/^#[\w-]+$/.test(location.hash))requestAnimationFrame(()=>document.querySelector(location.hash)?.scrollIntoView({behavior:'instant'}));
