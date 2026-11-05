// Deterministic, fully synthetic aggregates. No API calls, live data, payment records,
// customer identifiers, credentials or real-world performance claims.
export function createDemoData() {
  const records = [];
  for (let hour = 0; hour < 24; hour++) {
    for (const acquirer of ['A', 'B']) for (const infrastructure of ['local', 'aws']) {
      for (const terminal of ['01', '02']) for (const merchant of ['A', 'B']) for (const network of ['A', 'B']) {
        const seed = hour * 17 + acquirer.charCodeAt(0) * 3 + terminal.charCodeAt(1) * 5 + merchant.charCodeAt(0) * 7 + network.charCodeAt(0) * 11 + (infrastructure === 'aws' ? 13 : 0);
        const total = 35 + (seed % 53) + (hour >= 9 && hour <= 19 ? 42 : 0);
        const anomaly = hour >= 14 && hour <= 16 && acquirer === 'B' && infrastructure === 'local';
        const rejected = Math.round(total * (anomaly ? 0.19 : 0.035 + (seed % 4) / 100));
        const noResponse = Math.round(total * (anomaly ? 0.07 : 0.006 + (seed % 3) / 1000));
        const reversals = Math.round(total * 0.014);
        records.push({ hour, acquirer, infrastructure, terminal, merchant, network, total, rejected, noResponse, reversals, approved: total - rejected - noResponse - reversals });
      }
    }
  }
  return records;
}

export const demoData = createDemoData();
export const initialFilters = { period: '24', acquirer: 'all', terminal: 'all', merchant: 'all', network: 'all' };

export function filterData(filters, records = demoData) {
  return records.filter((row) => row.hour >= 24 - Number(filters.period) && ['acquirer', 'terminal', 'merchant', 'network'].every((key) => filters[key] === 'all' || row[key] === filters[key]));
}

export function aggregate(records) {
  const totals = records.reduce((sum, row) => {
    for (const key of ['total', 'approved', 'rejected', 'noResponse', 'reversals']) sum[key] += row[key];
    return sum;
  }, { total: 0, approved: 0, rejected: 0, noResponse: 0, reversals: 0 });
  return { ...totals, approvalRate: totals.total ? totals.approved / totals.total * 100 : 0, rejectionRate: totals.total ? totals.rejected / totals.total * 100 : 0 };
}

export function hourlyData(records) {
  return [...new Set(records.map((r) => r.hour))].sort((a,b) => a-b).map((hour) => ({ hour, ...aggregate(records.filter((r) => r.hour === hour)) }));
}

export function infrastructureData(records) {
  return ['local', 'aws'].map((infrastructure) => ({ infrastructure, ...aggregate(records.filter((r) => r.infrastructure === infrastructure)) }));
}

export function formatNumber(value, lang = 'es', maximumFractionDigits = 0) {
  return new Intl.NumberFormat(lang === 'es' ? 'es-UY' : 'en-US', { maximumFractionDigits }).format(value);
}

export function formatPercent(value, lang = 'es') {
  return new Intl.NumberFormat(lang === 'es' ? 'es-UY' : 'en-US', { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(value / 100);
}

export function getInsight(records, activeCase, lang) {
  const en = lang === 'en';
  const hours = hourlyData(records);
  if (!records.length) return en ? 'No sample data matches these filters.' : 'No hay datos de ejemplo para esta selección.';
  if (activeCase === 1) {
    const [local, aws] = infrastructureData(records);
    const delta = Math.abs(aws.approvalRate - local.approvalRate);
    return en
      ? `In this fictional selection, approval is ${formatPercent(local.approvalRate, lang)} on-premises and ${formatPercent(aws.approvalRate, lang)} on AWS: a ${formatNumber(delta, lang, 1)} percentage-point difference. This describes the example; it does not establish a cause.`
      : `En esta selección ficticia, la aprobación es ${formatPercent(local.approvalRate, lang)} en local y ${formatPercent(aws.approvalRate, lang)} en AWS: una diferencia de ${formatNumber(delta, lang, 1)} puntos porcentuales. Describe el ejemplo; no establece una causa.`;
  }
  const peak = hours.reduce((a, b) => (b.rejected + b.noResponse) / b.total > (a.rejected + a.noResponse) / a.total ? b : a);
  const percent = formatPercent((peak.rejected + peak.noResponse) / peak.total * 100, lang);
  return en
    ? `The highest combined decline and no-response rate in this fictional selection is ${percent} at ${String(peak.hour).padStart(2, '0')}:00. Segment the data to see how the pattern changes. No alerts or tickets are sent.`
    : `La mayor tasa conjunta de rechazos y operaciones sin respuesta de esta selección ficticia es ${percent} a las ${String(peak.hour).padStart(2, '0')}:00. Segmentá los datos para explorar cómo cambia el patrón. No se envían alertas ni tickets.`;
}
