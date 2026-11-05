import { copy, cases } from './content.js';
import { escapeHtml, icon } from './ui.js';
import { filterData, aggregate, hourlyData, infrastructureData, formatNumber, formatPercent, getInsight, initialFilters } from './demo.js';

const statusColors = { approved: '#a287f6', rejected: '#f28ab5', noResponse: '#69d8f0', reversals: '#edc67e' };

function selectFilter(name, label, options, value) {
  return `<label class="filter-field"><span>${escapeHtml(label)}</span><select data-filter="${name}" name="${name}">${options.map(([key, text]) => `<option value="${key}" ${key === value ? 'selected' : ''}>${escapeHtml(text)}</option>`).join('')}</select></label>`;
}

function volumeChart(rows, t, lang) {
  const width = 780, height = 246, left = 45, top = 18, chartHeight = 182, chartWidth = 718;
  const max = Math.max(1, ...rows.map((r) => r.total)) * 1.12;
  const slot = chartWidth / Math.max(1, rows.length);
  let chart = '';
  for (let tick = 0; tick < 4; tick++) {
    const y = top + chartHeight - tick / 3 * chartHeight;
    chart += `<line x1="${left}" y1="${y}" x2="${width - 17}" y2="${y}" stroke="#2b2e44"/><text x="${left - 9}" y="${y + 4}" text-anchor="end" class="axis-text">${formatNumber(max * tick / 3, lang)}</text>`;
  }
  rows.forEach((row, i) => {
    let y = top + chartHeight;
    for (const key of ['approved', 'rejected', 'reversals', 'noResponse']) {
      const barHeight = row[key] / max * chartHeight;
      y -= barHeight;
      chart += `<rect x="${left + i * slot + slot * 0.2}" y="${y}" width="${slot * 0.6}" height="${barHeight}" rx="1" fill="${statusColors[key]}"><title>${String(row.hour).padStart(2,'0')}:00 · ${escapeHtml(t[{approved:'approved',rejected:'rejected',noResponse:'noResponse',reversals:'reversals'}[key]])}: ${formatNumber(row[key],lang)}</title></rect>`;
    }
    if (i % (rows.length > 12 ? 3 : 2) === 0 || i === rows.length - 1) chart += `<text x="${left + i * slot + slot / 2}" y="${height - 18}" text-anchor="middle" class="axis-text">${String(row.hour).padStart(2,'0')}:00</text>`;
  });
  return `<svg class="data-chart" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="volume-chart-title volume-chart-desc"><title id="volume-chart-title">${escapeHtml(t.chartVolume)}</title><desc id="volume-chart-desc">${escapeHtml(t.demoDisclaimer)} ${escapeHtml(t.chartVolumeA11y)}. ${escapeHtml(t.viewTable)}.</desc>${chart}</svg>`;
}

function comparisonChart(records, t, lang) {
  const rows = infrastructureData(records);
  return `<div class="infrastructure-chart">${rows.map((row) => `<div class="infrastructure-row"><div class="infrastructure-label"><span>${row.infrastructure === 'local' ? t.local : t.aws}</span><strong>${formatPercent(row.approvalRate, lang)}</strong></div><div class="infrastructure-track"><span style="width:${row.approvalRate.toFixed(3)}%" class="bar-${row.infrastructure}"></span></div><small>${formatNumber(row.total,lang)} ${t.transactionCount.toLowerCase()}</small></div>`).join('')}<div class="infrastructure-axis"><span>0%</span><span>50%</span><span>100%</span></div></div>`;
}

function alertsChart(rows, t, lang) {
  const width = 780, height = 246, left = 45, top = 18, chartHeight = 182, chartWidth = 718;
  const max = Math.max(1,...rows.map((r)=>Math.max(r.rejected, r.noResponse))) * 1.2;
  const x = (i) => left + i * chartWidth / Math.max(1, rows.length - 1);
  const y = (value) => top + chartHeight - value / max * chartHeight;
  let chart = '';
  for (let i = 0; i <= 3; i++) chart += `<line x1="${left}" y1="${y(max * i / 3)}" x2="${width - 17}" y2="${y(max * i / 3)}" stroke="#2b2e44"/><text x="${left - 9}" y="${y(max * i / 3) + 4}" text-anchor="end" class="axis-text">${formatNumber(max * i / 3,lang)}</text>`;
  for (const key of ['rejected', 'noResponse']) chart += `<polyline points="${rows.map((r,i)=>`${x(i)},${y(r[key])}`).join(' ')}" fill="none" stroke="${statusColors[key]}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>${rows.map((r,i)=>`<circle cx="${x(i)}" cy="${y(r[key])}" r="3" fill="${statusColors[key]}"><title>${r.hour}:00 · ${escapeHtml(key === 'rejected' ? t.rejected : t.noResponse)}: ${formatNumber(r[key],lang)}</title></circle>`).join('')}`;
  rows.forEach((row,i) => { if (i % (rows.length > 12 ? 3 : 2) === 0 || i === rows.length - 1) chart += `<text x="${x(i)}" y="${height-18}" text-anchor="middle" class="axis-text">${String(row.hour).padStart(2,'0')}:00</text>`; });
  return `<svg class="data-chart" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="alerts-chart-title alerts-chart-desc"><title id="alerts-chart-title">${escapeHtml(t.chartAlerts)}</title><desc id="alerts-chart-desc">${escapeHtml(t.demoDisclaimer)} ${escapeHtml(t.viewTable)}.</desc>${chart}</svg>`;
}

export function renderCase(lang, activeCase) {
  const t = copy[lang], item = cases[lang][activeCase];
  return `<div class="case-question"><span class="eyebrow">${t.caseQuestion}</span><h3>${escapeHtml(item.question)}</h3></div><div class="case-explanation"><div><span class="eyebrow">${t.caseAnalysis}</span><p>${escapeHtml(item.analysis)}</p></div><div><span class="eyebrow">${t.caseDecision}</span><p>${escapeHtml(item.decision)}</p></div></div>`;
}

export function renderDashboard(lang, filters, activeCase, tableOpen = false) {
  const t = copy[lang], en = lang === 'en';
  const records = filterData(filters), stats = aggregate(records), rows = hourlyData(records);
  const all = [['all',t.all]];
  const columns = [t.hours,t.total,t.approved,t.rejected,t.reversals,t.noResponse];
  const chartTitle = [t.chartVolume,t.chartInfrastructure,t.chartAlerts][activeCase];
  const metrics = [[t.transactionCount,formatNumber(stats.total,lang)], [t.approvedRate,formatPercent(stats.approvalRate,lang)], [t.rejectedRate,formatPercent(stats.rejectionRate,lang)], [t.noResponse,formatNumber(stats.noResponse,lang)], [t.reversals,formatNumber(stats.reversals,lang)]];
  const legend = activeCase === 1 ? '' : `<div class="chart-legend">${(activeCase === 2 ? ['rejected','noResponse'] : ['approved','rejected','noResponse','reversals']).map(key=>`<span><i style="background:${statusColors[key]}"></i>${t[key === 'approved' ? 'approved' : key]}</span>`).join('')}</div>`;
  return `<div class="dashboard-header"><div><span class="dashboard-kicker">${icon('chart')} ELASTICSEARCH / KIBANA</span><h3>${t.dashboardTitle}</h3><p>${t.dashboardSubtitle}</p></div><span class="demo-badge"><span></span>${t.demoLabel}</span></div>
    <p class="demo-disclaimer">${icon('layers')}${t.demoDisclaimer}</p>
    <div class="dashboard-filters">
    ${selectFilter('period', t.timeFilter, [['24',t.last24],['12',t.last12]], filters.period)}
    ${selectFilter('acquirer', t.acquirerFilter, [...all,...['A','B'].map(v=>[v,`${en?'Acquirer':'Adquirente'} ${v}`])], filters.acquirer)}
    ${selectFilter('terminal', t.terminalFilter, [...all,...['01','02'].map(v=>[v,`T-${v}`])], filters.terminal)}
    ${selectFilter('merchant', t.merchantFilter, [...all,...['A','B'].map(v=>[v,`${en?'Merchant':'Comercio'} ${v}`])], filters.merchant)}
    ${selectFilter('network', t.networkFilter, [...all,...['A','B'].map(v=>[v,`${en?'Network':'Red'} ${v}`])], filters.network)}
    <button class="filter-reset" data-reset-filters aria-label="${t.resetFilters}" title="${t.resetFilters}">↺</button></div>
    <div class="dashboard-metrics" aria-label="${t.resultCount}">${metrics.map(([label,value],i)=>`<div class="dashboard-metric metric-${i}"><span>${label}</span><strong>${value}</strong></div>`).join('')}</div>
    <div class="chart-heading"><h4>${chartTitle}</h4>${legend}</div>
    ${activeCase === 1 ? comparisonChart(records,t,lang) : activeCase === 2 ? alertsChart(rows,t,lang) : volumeChart(rows,t,lang)}
    <details class="data-table-details" ${tableOpen?'open':''}><summary>${t.viewTable}${icon('down')}</summary><div class="table-overflow"><table><caption>${t.chartVolumeA11y} · ${t.demoDisclaimer}</caption><thead><tr>${columns.map(c=>`<th scope="col">${c}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr><th scope="row">${String(r.hour).padStart(2,'0')}:00</th>${['total','approved','rejected','reversals','noResponse'].map(k=>`<td>${formatNumber(r[k],lang)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></details>
    <div class="dashboard-insight"><div>${icon('spark')}<span>${t.syntheticInsight}</span></div><p>${escapeHtml(getInsight(records,activeCase,lang))}</p></div>`;
}

export function normalizeFilters(filters) {
  return Object.fromEntries(Object.entries(initialFilters).map(([key,fallback]) => [key, key === 'period' ? ['12','24'].includes(filters[key]) ? filters[key] : fallback : ['all',...(key === 'terminal'?['01','02']:['A','B'])].includes(filters[key]) ? filters[key] : fallback]));
}
