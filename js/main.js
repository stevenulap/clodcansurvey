(() => {
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* Project content. Items starting with "[" show as editable placeholders. */
const P = {
  ndvi: {
    t: 'Deforestation Assessment in Doña Remedios Trinidad, Bulacan (2017–2025)',
    o: 'Assessment of vegetation and forest cover change in Doña Remedios Trinidad, Bulacan from 2017 to 2025, using NDVI analysis at two-year intervals.',
    obj: ['Measure vegetation change from 2017 to 2025 at two-year intervals', '[Add your specific objectives]'],
    m: ['[Replace with your actual workflow: imagery source, pre-processing, NDVI computation, change comparison]'],
    tools: ['QGIS', 'SNAP Desktop'], img: ['ndvi-1', 'ndvi-2']
  },
  dem: {
    t: 'Digital Elevation Model Processing and 3D Terrain Visualization: Aurora, Quirino and Nueva Vizcaya',
    o: 'Digital Elevation Model processing and 3D terrain visualization covering the provinces of Aurora, Quirino and Nueva Vizcaya.',
    obj: ['Process elevation data for the three-province study area', 'Produce 3D terrain visualizations', '[Add your specific objectives]'],
    m: ['[Replace with your actual workflow: DEM source, processing steps, visualization method]'],
    tools: ['QGIS'], img: ['dem-1', 'dem-2']
  },
  shelter: {
    t: 'Location Assessment for Possible Evacuation Shelters in Disaster Planning of Bocaue, Bulacan',
    o: 'GIS and remote sensing assessment of possible evacuation shelter locations to support disaster planning in Bocaue, Bulacan.',
    obj: ['Identify possible evacuation shelter locations in Bocaue', '[Add your specific objectives]'],
    m: ['[Replace with your actual workflow: data layers, criteria, analysis steps]'],
    tools: ['QGIS'], img: ['shelter-1', 'shelter-2']
  }
};
const RESULTS = '[Add your actual findings, figures and maps here.]', ROLE = '[Describe your specific contribution to this project.]';

const li = a => a.map(x => `<li${x[0] === '[' ? ' class="todo"' : ''}>${x}</li>`).join('');
const dlg = $('#pm'), body = $('#pm-body');
$$('[data-p]').forEach(b => b.onclick = () => {
  const p = P[b.dataset.p];
  body.innerHTML = `<h2 id="pm-t">${p.t}</h2><p>${p.o}</p>
  <div class="pm-grid"><section><h3>Objectives</h3><ul>${li(p.obj)}</ul></section><section><h3>Methodology</h3><ol>${li(p.m)}</ol></section></div>
  <h3>Software and tools</h3><ul class="tags">${p.tools.map(t => `<li>${t}</li>`).join('')}</ul>
  <h3>Maps and visual outputs</h3><div class="shots">${p.img.map((n, i) => `<figure class="ph" data-label="Output ${i + 1} · assets/img/projects/${n}.jpg"><img src="assets/img/projects/${n}.jpg" alt="${p.t}, output ${i + 1}" loading="lazy" onerror="this.remove()"></figure>`).join('')}</div>
  <h3>Results and findings</h3><p class="todo">${RESULTS}</p><h3>My contribution</h3><p class="todo">${ROLE}</p>`;
  dlg.showModal();
});
dlg.addEventListener('click', e => { if (e.target === dlg || e.target.closest('.x')) dlg.close(); });

/* Contour lines: nested, rotated copies of one closed curve */
$$('.topo').forEach(s => {
  let h = '';
  for (let i = 0; i < 9; i++) h += `<path d="M120 210C110 120 220 60 320 80C420 100 500 150 490 230C480 310 380 350 290 340C200 330 130 300 120 210Z" transform="translate(300 200) rotate(${i * 7}) scale(${.15 + i * .16}) translate(-300 -200)"/>`;
  s.innerHTML = h;
});

/* Mobile menu */
const b = $('.burger'), m = $('#menu');
b.onclick = () => b.setAttribute('aria-expanded', m.classList.toggle('open'));
$$('#menu a').forEach(a => a.addEventListener('click', () => { m.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); }));

/* Ticker: duplicate content for a seamless loop */
const mq = $('.marquee div'); mq.innerHTML += mq.innerHTML;

/* Active nav link + elevation profile draw */
const links = $$('#menu a[href^="#"]');
const so = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && links.forEach(a => a.classList.toggle('on', a.hash === '#' + e.target.id))), { rootMargin: '-45% 0px -50%' });
$$('main section[id]').forEach(s => so.observe(s));
const po = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (e.target.classList.add('in'), po.unobserve(e.target))), { threshold: .3 });
po.observe($('.profile'));
$('#yr').textContent = new Date().getFullYear();
})();
