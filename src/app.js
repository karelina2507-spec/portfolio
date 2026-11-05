import { profile, copy, projects } from './content.js';
import { career } from './career.js';
import { renderHeroScene } from './hero-scene.js';
import { escapeHtml as e, icon, safeUrl, externalLink, sectionHeading } from './ui.js';
import { initialFilters } from './demo.js';
import { renderCase, renderDashboard } from './dashboard.js';
import { renderProjectCard, renderProjectDetails } from './project-case.js';

const app = document.querySelector('#app');
const url = new URL(window.location.href);
let storedLanguage = null;
try { storedLanguage = localStorage.getItem('portfolio-language'); } catch { /* Storage may be disabled. */ }
const state = {
  lang: [url.searchParams.get('lang'), storedLanguage].find((value) => ['es','en'].includes(value)) || 'es',
  category: 'all', activeCase: 0, filters: {...initialFilters}, projectId: null,
};
let sectionObserver;
let revealObserver;
let lastProjectTrigger;

function header(t) {
  return `<a class="skip-link" href="#main">${t.skip}</a><header class="site-header"><div class="container header-inner"><a class="brand" href="#inicio" aria-label="Karelina Fabra"><span class="brand-symbol">kf<span>·</span></span><span>Karelina <b>Fabra</b></span></a><nav class="desktop-nav" aria-label="${state.lang==='es'?'Navegación principal':'Main navigation'}"><a href="#proyectos">${t.nav[0]}</a><a href="#datos">${t.nav[1]}</a><a href="#sobre-mi">${t.nav[2]}</a></nav><div class="header-actions"><div class="language-switch" role="group" aria-label="${t.language}"><button data-language="es" aria-label="Ver en español" aria-pressed="${state.lang==='es'}" lang="es">ES</button><span aria-hidden="true">/</span><button data-language="en" aria-label="View in English" aria-pressed="${state.lang==='en'}" lang="en">EN</button></div><a class="button button-small header-contact" href="#contacto">${t.contact}${icon('diagonal')}</a><button class="mobile-menu-button" aria-label="${t.menu}" aria-expanded="false" aria-controls="mobile-nav">${icon('menu')}</button></div></div><nav id="mobile-nav" class="mobile-nav" aria-label="${state.lang==='es'?'Navegación móvil':'Mobile navigation'}" hidden><a href="#proyectos">${t.nav[0]}</a><a href="#datos">${t.nav[1]}</a><a href="#sobre-mi">${t.nav[2]}</a><a href="#contacto">${t.contact}</a></nav></header>`;
}

function hero(t) {
  const cv = safeUrl(profile.cv[state.lang], {local:true});
  return `<div class="hero-wrap"><section class="hero container" id="inicio" aria-labelledby="hero-title"><div class="hero-copy"><p class="eyebrow"><span class="eyebrow-dot"></span>${t.eyebrow}</p><div class="hero-identity"><span class="hero-name">Karelina Fabra</span><span class="identity-divider"></span><span class="hero-role">${t.heroRole}</span></div><h1 id="hero-title"><span class="hero-lead">${t.heroLead}</span><span class="hero-accent">${t.heroAccent}</span><span class="hero-end">${t.heroEnd}</span></h1><p class="hero-description">${t.heroBody}</p><div class="hero-actions"><a class="button button-primary" href="#proyectos">${t.viewProjects}${icon('diagonal')}</a>${cv?`<a class="button button-outline hero-cv" href="${e(cv)}" download title="${e(t.cvBilingual)}">${t.cvCta}${icon('download')}</a>`:''}</div><a class="hero-data-link text-link" href="#datos">${t.viewData}${icon('arrow')}</a></div>${renderHeroScene(t)}<dl class="hero-stats">${t.heroStats.map(stat=>`<div><dt>${e(stat.label)}</dt><dd>${e(stat.value)}</dd></div>`).join('')}</dl><p class="hero-location">${icon('globe')}${t.heroLocation}<span> / </span>${t.heroNote}</p></section></div><div class="expertise-ribbon"><div class="container">${t.ribbon.map((label,i)=>`<span>${icon(['layers','grid','spark','chart'][i])}${label}<i aria-hidden="true">✳</i></span>`).join('')}</div></div>`;
}

function projectCards() {
  const t=copy[state.lang];
  const filtered = projects.filter(p=>state.category==='all'||p.category===state.category);
  return filtered.map((project,index)=>renderProjectCard(project,state.lang,index)).join('') || `<p>${t.emptyProjects}</p>`;
}

function projectSection(t) {
  return `<section id="proyectos" class="section container" aria-labelledby="projects-title"><div class="projects-intro">${sectionHeading(t.projectsEyebrow,t.projectsTitle,t.projectsBody,'projects-title')}<span class="section-index" aria-hidden="true">↘</span></div><div class="ownership-banner"><div><span class="eyebrow">${t.ownership}</span><h3>${t.ownershipTitle}</h3></div><div><p>${t.ownershipBody}</p><div class="role-stage-chips">${t.roleStages.map(stage=>`<span>${e(stage)}</span>`).join('')}</div></div></div><div class="project-filters" role="group" aria-label="${state.lang==='es'?'Categorías de proyectos':'Project categories'}">${['all','process','commerce','ai'].map((cat,i)=>`<button data-category="${cat}" aria-pressed="${state.category===cat}">${t.filters[i]}${cat==='all'?'<span>06</span>':''}</button>`).join('')}</div><div class="projects-grid project-cases" id="projects-grid">${projectCards()}</div><p id="project-status" class="sr-only" aria-live="polite"></p></section>`;
}

function dataSection(t) {
  return `<section id="datos" class="data-section section" aria-labelledby="data-title"><div class="container"><div class="data-intro"><div><p class="eyebrow">${t.dataEyebrow}</p><h2 id="data-title">${t.dataTitle}<br><span>${t.dataAccent}</span></h2></div><div><p>${t.dataBody}</p><div class="tool-chips">${t.dataTags.map(tag=>`<span>${tag}</span>`).join('')}</div></div></div><div class="case-tabs" role="tablist" aria-label="${state.lang==='es'?'Casos de análisis':'Analysis cases'}">${t.dataCases.map((label,i)=>`<button role="tab" id="case-tab-${i}" aria-controls="case-panel" aria-selected="${state.activeCase===i}" tabindex="${state.activeCase===i?0:-1}" data-case="${i}"><span>0${i+1}</span>${label}</button>`).join('')}</div><div id="case-panel" role="tabpanel" aria-labelledby="case-tab-${state.activeCase}" tabindex="0"><div class="case-story" id="case-story">${renderCase(state.lang,state.activeCase)}</div><div class="dashboard" id="dashboard">${renderDashboard(state.lang,state.filters,state.activeCase)}</div></div><p id="dashboard-status" class="sr-only" aria-live="polite" aria-atomic="true"></p></div></section>`;
}

function aboutSection(t) {
  const cv=safeUrl(profile.cv[state.lang],{local:true});
  return `<section id="sobre-mi" class="section container about-section" aria-labelledby="about-title"><div class="about-visual profile-card"><div class="profile-topline"><span>KARELINA FABRA</span>${icon('spark')}</div><div class="profile-monogram" aria-hidden="true"><span>KF<span>·</span></span><i class="profile-orbit"></i><i class="profile-orbit orbit-alt"></i></div><div class="profile-caption"><span class="eyebrow">${t.aboutCaption}</span><p>${e(t.aboutCallout).replace('\n','<br>')}</p></div><div class="profile-study">${icon('layers')}<span>${e(career[state.lang].degree)}<small>${e(career[state.lang].degreeDetail)}</small></span></div></div><div class="about-copy"><p class="eyebrow">${t.aboutEyebrow}</p><h2 id="about-title">${t.aboutTitle}<br><span>${t.aboutAccent}</span></h2><p class="about-lead">${t.aboutP1}</p><p>${t.aboutP2}</p><p>${t.aboutP3}</p><div class="about-actions">${cv?`<a class="button button-outline" href="${e(cv)}" download>${t.cvCta}${icon('download')}</a>`:''}<a class="text-link" href="#metodo">${t.methodsLink}${icon('arrow')}</a></div></div></section>`;
}

function careerSection() {
  const c=career[state.lang];
  return `<section id="trayectoria" class="career-section container" aria-labelledby="career-title"><div class="career-intro"><p class="eyebrow">${e(c.eyebrow)}</p><h2 id="career-title">${e(c.title)}</h2><p>${e(c.description)}</p></div><div class="career-grid"><div class="career-timeline">${c.roles.map((role,i)=>`<article class="timeline-item${i===0?' current-role':''}"><span class="timeline-dot"></span><p class="timeline-date">${e(role.date)}</p><div class="timeline-content"><span class="timeline-company">${e(role.company)}</span><h3>${e(role.title)}</h3><p>${e(role.summary)}</p></div></article>`).join('')}</div><aside class="education-card"><span class="eyebrow">${e(c.educationLabel)}</span><h3>${e(c.educationTitle)}</h3><div class="education-degree">${icon('spark')}<div><h4>${e(c.degree)}</h4><p>${e(c.degreeDetail)}</p></div></div><ul>${c.education.map(item=>`<li>${icon('check')}<span>${e(item)}</span></li>`).join('')}</ul><div class="career-languages"><p>${e(c.languages)}</p><span>${e(c.community)}</span></div></aside></div></section>`;
}

function methodSection(t) {
  return `<section id="metodo" class="method-section section" aria-labelledby="method-title"><div class="container">${sectionHeading(t.methodEyebrow,t.methodTitle,'','method-title')}<div class="method-grid">${t.steps.map((step,i)=>`<article class="method-step"><div class="step-number"><span>0${i+1}</span>${i<3?icon('arrow'):icon('check')}</div><h3>${step.title}</h3><p>${step.text}</p></article>`).join('')}</div><div class="toolbox"><h3>${t.toolbox}</h3><div class="toolbox-grid">${t.tools.map(([title,desc],i)=>`<div>${icon(['spark','layers','grid','chart','user','globe'][i])}<div><strong>${title}</strong><span>${desc}</span></div></div>`).join('')}</div></div></div></section>`;
}

function contactSection(t) {
  const email=safeUrl(profile.email,{email:true});
  const cv=safeUrl(profile.cv[state.lang],{local:true});
  return `<section id="contacto" class="contact-section section" aria-labelledby="contact-title"><div class="container contact-inner"><div><p class="eyebrow">${t.contactEyebrow}</p><h2 id="contact-title">${t.contactTitle}<br><span>${t.contactAccent}</span></h2><p>${t.contactBody}</p></div><div class="contact-actions">${email?`<a class="contact-email" href="${e(email)}">${e(profile.email)}${icon('diagonal')}</a>`:''}<div class="contact-socials">${externalLink(profile.github,t.githubCta,'social-link','github')}${externalLink(profile.linkedin,t.linkedinCta,'social-link','linkedin')}${cv?`<a class="social-link cv-link" href="${e(cv)}" download>${t.cvCta}${icon('download')}</a>`:''}</div></div></div></section><footer class="site-footer"><div class="container"><a class="footer-brand" href="#inicio">Karelina Fabra<span>© ${new Date().getFullYear()}</span></a><p>${t.footer}</p><a href="#inicio" class="back-top">${t.backTop}${icon('arrow')}</a></div></footer>`;
}


function openProject(id, trigger) {
  const project=projects.find(p=>p.id===id);
  if(!project) return;
  const dialog=document.querySelector('#project-dialog');
  state.projectId=id;
  lastProjectTrigger=trigger||lastProjectTrigger;
  dialog.innerHTML=renderProjectDetails(project,state.lang);
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
  document.querySelectorAll('#inicio,#proyectos,#datos,#sobre-mi,#contacto').forEach(el=>sectionObserver.observe(el));
}

function setupRevealAnimations() {
  revealObserver?.disconnect();
  if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('is-revealed');revealObserver.unobserve(entry.target);}
  }),{threshold:0.04,rootMargin:'0px 0px 35px 0px'});
  document.querySelectorAll('.project-case:not(.is-revealed), .data-intro:not(.is-revealed), .about-copy:not(.is-revealed), .method-step:not(.is-revealed), .timeline-item:not(.is-revealed), .education-card:not(.is-revealed)').forEach(element=>{element.classList.add('reveal-target');revealObserver.observe(element);});
}

function render() {
  const t=copy[state.lang];
  document.documentElement.lang=state.lang;document.title=t.title;
  document.querySelector('meta[name="description"]').content=t.description;
  document.querySelector('meta[property="og:title"]').content=t.title;
  document.querySelector('meta[property="og:description"]').content=t.description;
  app.innerHTML=`${header(t)}<main id="main" tabindex="-1">${hero(t)}${projectSection(t)}${dataSection(t)}${aboutSection(t)}${careerSection()}${methodSection(t)}${contactSection(t)}</main><dialog id="project-dialog" class="project-dialog" aria-label="${e(t.details)}"></dialog>`;
  document.querySelector('#project-dialog').addEventListener('cancel',event=>{event.preventDefault();closeProject();});
  document.querySelector('#project-dialog').addEventListener('click',event=>{if(event.target===event.currentTarget){const bounds=event.currentTarget.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)closeProject();}});
  setupSectionObserver();
  setupRevealAnimations();
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
    setupRevealAnimations();
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
