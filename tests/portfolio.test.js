import assert from 'node:assert/strict';
import { aggregate, demoData, filterData, hourlyData, infrastructureData, initialFilters, getInsight } from '../src/demo.js';
import { profile, copy, projects, cases } from '../src/content.js';
import { safeUrl, escapeHtml } from '../src/ui.js';
import { renderDashboard, normalizeFilters } from '../src/dashboard.js';

// Can run with `node --test tests/portfolio.test.js` or call runChecks() in Node.
export function runChecks() {
  const passed=[];
  const check=(name,fn)=>{fn();passed.push(name);};
  check('Synthetic statuses reconcile for every record and aggregate',()=>{
    assert.equal(demoData.length,768);
    for(const row of demoData) {
      assert.equal(row.total,row.approved+row.rejected+row.noResponse+row.reversals);
      for(const key of ['total','approved','rejected','noResponse','reversals'])assert.ok(Number.isInteger(row[key])&&row[key]>=0);
    }
    const stats=aggregate(demoData);
    assert.equal(stats.total,61766);
    assert.ok(Math.abs(stats.approvalRate-56817/61766*100)<0.00001);
  });
  check('All 162 filter combinations agree with independent sums',()=>{
    for(const period of ['12','24'])for(const acquirer of ['all','A','B'])for(const terminal of ['all','01','02'])for(const merchant of ['all','A','B'])for(const network of ['all','A','B']) {
      const filters={period,acquirer,terminal,merchant,network};
      const filtered=filterData(filters);
      assert.ok(filtered.length>0);
      assert.ok(filtered.every(r=>period==='24'||r.hour>=12));
      for(const key of ['acquirer','terminal','merchant','network'])assert.ok(filtered.every(r=>filters[key]==='all'||r[key]===filters[key]));
      const stats=aggregate(filtered);
      assert.equal(stats.total,filtered.map(r=>r.total).reduce((a,b)=>a+b,0));
      assert.equal(hourlyData(filtered).reduce((a,b)=>a+b.total,0),stats.total);
      assert.equal(infrastructureData(filtered).reduce((a,b)=>a+b.total,0),stats.total);
    }
  });
  check('Empty selections never produce invalid metrics',()=>{
    const stats=aggregate([]);assert.equal(stats.total,0);assert.equal(stats.approvalRate,0);assert.equal(stats.rejectionRate,0);
    assert.ok(getInsight([],0,'es').includes('No hay datos'));
  });
  check('All public text and case studies have matching languages',()=>{
    assert.deepEqual(Object.keys(copy.es).sort(),Object.keys(copy.en).sort());
    assert.equal(cases.es.length,3);assert.equal(cases.en.length,3);
    assert.equal(new Set(projects.map(p=>p.id)).size,6);
    for(const p of projects)assert.deepEqual(Object.keys(p.es).sort(),Object.keys(p.en).sort());
  });
  check('Unknown claims and CV stay absent, AGH has no inferred capabilities',()=>{
    for(const p of projects){assert.equal(p.role,null);assert.equal(p.result,null);assert.equal(p.repository,null);assert.equal(p.demo,null);}
    const agh=projects.find(p=>p.id==='portal-agh');assert.deepEqual(agh.es.features,[]);assert.deepEqual(agh.en.features,[]);assert.equal(agh.es.solution,null);
    assert.equal(profile.cv.es,null);assert.equal(profile.cv.en,null);
  });
  check('Links reject executable, insecure and credential-bearing destinations',()=>{
    for(const url of ['javascript:alert(1)','data:text/html,test','http://example.com','https://user:secret@example.com','//example.com',''])assert.equal(safeUrl(url),null);
    assert.ok(safeUrl(profile.github).startsWith('https://github.com/'));
    assert.equal(safeUrl('/assets/cv-es.pdf',{local:true}),'/assets/cv-es.pdf');
    assert.equal(safeUrl('person@example.com',{email:true}),'mailto:person@example.com');
    assert.equal(escapeHtml('<script>'), '&lt;script&gt;');
  });
  check('Every dashboard case and language renders fictional-data disclosure',()=>{
    for(const lang of ['es','en'])for(const activeCase of [0,1,2]) {
      const html=renderDashboard(lang,{...initialFilters},activeCase);
      assert.ok(html.includes(copy[lang].demoDisclaimer));assert.ok(!html.includes('NaN'));assert.ok(!html.includes('undefined'));
      assert.equal((html.match(/<option value="all"/g)||[]).length,4);
    }
  });
  check('Invalid stored filters are normalized',()=>{
    assert.deepEqual(normalizeFilters({period:'0',acquirer:'bad',terminal:'03',merchant:null,network:''}),initialFilters);
  });
  return passed;
}

const passed=runChecks();
console.log(`${passed.length} checks passed`);
