import { copy } from './content.js';
import { escapeHtml as e, icon, projectVisual, externalLink, safeUrl } from './ui.js';

function chips(items, className = 'tool-chips') {
  return `<div class="${className}">${items.map(item => `<span>${e(item)}</span>`).join('')}</div>`;
}

function workflow(items, title) {
  return `<div class="project-workflow"><h4>${e(title)}</h4><ol>${items.map((step, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><p>${e(step)}</p>${index < items.length - 1 ? icon('arrow') : icon('check')}</li>`).join('')}</ol></div>`;
}

export function renderProjectCard(project, lang, index) {
  const t = copy[lang], c = project[lang];
  return `<article class="project-card project-case" id="case-${e(project.id)}" aria-labelledby="case-title-${e(project.id)}">
    <div class="project-case-visual">
      <div class="project-case-number"><span>${String(index + 1).padStart(2,'0')} / ${e(c.category)}</span>${icon('diagonal')}</div>
      ${projectVisual(project, lang, t.concept)}
      ${workflow(c.workflow, t.workflowLabel)}
    </div>
    <div class="project-case-content">
      <p class="eyebrow">${e(c.category)}</p>
      <h3 id="case-title-${e(project.id)}">${e(c.title)}</h3>
      <p class="project-case-summary">${e(c.summary)}</p>
      <div class="case-ownership"><span>${icon('user')}${t.projectLabels.role}</span><p>${e(c.roleSummary)}</p></div>
      <div class="project-case-need"><h4>${t.challenge}</h4><p>${e(c.context)}</p></div>
      <div class="project-case-features"><h4>${t.whatBuilt}</h4><ul>${c.features.map(feature => `<li>${icon('check')}<span>${e(feature)}</span></li>`).join('')}</ul></div>
      <div class="project-case-value"><h4>${t.value}</h4><p>${e(c.purpose)}</p></div>
      ${chips(project.technologies)}
      <button class="button button-outline project-case-open" data-project="${e(project.id)}" aria-label="${e(t.details)}: ${e(c.title)}">${t.details}${icon('arrow')}</button>
    </div>
  </article>`;
}

export function renderProjectDetails(project, lang) {
  const t = copy[lang], c = project[lang];
  const section = (label, value) => value ? `<section class="project-detail-section"><h3>${e(label)}</h3><p>${e(value)}</p></section>` : '';
  const list = (label, items) => items?.length ? `<section class="project-detail-section"><h3>${e(label)}</h3><ul class="case-detail-list">${items.map(item=>`<li>${icon('check')}<span>${e(item)}</span></li>`).join('')}</ul></section>` : '';
  const links = [externalLink(project.repository, t.repo, 'button button-outline','github'), externalLink(project.demo, t.demo, 'button button-outline'), externalLink(project.video, t.video, 'button button-outline')].filter(Boolean);
  return `<div class="modal-topbar"><span>${e(c.category)}</span><button class="modal-close" aria-label="${t.close}" data-close-project>${icon('close')}</button></div>
    <div class="modal-intro"><span class="eyebrow">${t.scopeShared}</span><h2 id="project-dialog-title">${e(c.title)}</h2><p>${e(c.summary)}</p></div>
    ${projectVisual(project,lang,t.concept)}
    <div class="project-detail-body">
      <div class="case-detail-ownership"><span class="eyebrow">${t.ownership}</span><p>${e(project.role[lang])}</p>${chips(t.roleStages,'role-stage-chips')}</div>
      ${section(t.projectLabels.context,c.context)}
      ${section(t.projectLabels.users,c.users)}
      ${section(t.projectLabels.solution,c.solution)}
      <section class="project-detail-section"><h3>${t.caseModules}</h3><div class="case-module-list">${c.modules.map((module,index)=>`<article><span>0${index+1}</span><div><h4>${e(module.title)}</h4><p>${e(module.text)}</p></div></article>`).join('')}</div></section>
      ${workflow(c.workflow,t.workflowLabel)}
      ${list(t.contribution,c.contributions)}
      ${list(t.decisions,c.decisions)}
      ${section(t.projectLabels.ai,c.ai)}
      <section class="project-detail-section"><h3>${t.projectLabels.technologies}</h3>${chips(project.technologies)}</section>
      ${section(t.value,c.purpose)}
      ${section(t.projectLabels.result,project.result?.[lang])}
      ${project.screenshots.length?`<section class="project-detail-section"><h3>${t.projectLabels.media}</h3>${project.screenshots.map(shot=>{const src=safeUrl(shot.src,{local:true});return src?`<img class="project-screenshot" src="${e(src)}" alt="${e(shot.alt[lang])}" loading="lazy">`:'';}).join('')}</section>`:''}
      ${links.length?`<div class="project-modal-links">${links.join('')}</div>`:''}
      <aside class="project-evidence-note"><strong>${t.scope}</strong><p>${e(c.scopeNote)}</p></aside>
      <button class="text-link next-project" data-next-project>${t.nextProject}${icon('arrow')}</button>
    </div>`;
}
