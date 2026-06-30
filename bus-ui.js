'use strict';

/* ════════════════════════════════════════════════════════════
   BUS-UI.JS
   Panell de detall de parada de bus + integració amb la cerca
   general i la secció "Prop teu" de Inici, reaprofitant els
   mateixos components visuals (.sdp-*) que les estacions de tren.
   ════════════════════════════════════════════════════════════ */

const BusModule = (() => {

  async function renderBusStopDetail(stopId) {
    const { BUS_STOPS, BUS_LINES, BusRealtimeModule } = window.MOVCAT_BUS;
    const stop = BUS_STOPS[stopId];
    if (!stop) return;

    const panel = document.getElementById('stationDetailPanel');
    const cnt   = panel ? panel.querySelector('.station-detail-content') : null;
    if (!panel || !cnt) return;

    const lang = I18N.getLang();
    cnt.innerHTML = `
      <div class="sdp-header">
        <button class="sdp-back" id="detailBackBtn" aria-label="Tornar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div class="sdp-header-info">
          <div class="sdp-lines-row">
            ${(stop.lines || []).map(lid => `<span class="sdp-line-badge" style="background:${BUS_LINES[lid]?.color || '#5b6b78'}">${lid}</span>`).join('')}
          </div>
          <h1 class="sdp-name">${stop.name}</h1>
          <p class="sdp-sub">${lang === 'es' ? 'Parada de autobús' : 'Parada de bus'} · TMB</p>
        </div>
      </div>

      <div class="sdp-departures-section">
        <div class="sdp-section-label">${lang === 'es' ? 'PRÓXIMOS AUTOBUSES' : 'PROPERS AUTOBUSOS'}</div>
        <div id="busArrivalsBlock"><p class="sdp-empty">${lang === 'es' ? 'Cargando…' : 'Carregant…'}</p></div>
      </div>

      <div class="sdp-section">
        <div class="sdp-section-label">${lang === 'es' ? 'LÍNEAS' : 'LÍNIES'}</div>
        <div class="sdp-facilities">
          ${(stop.lines || []).map(lid => {
            const line = BUS_LINES[lid];
            return `<div class="sdp-facility-chip" style="border-color:${line?.color}33">
              <span style="width:8px;height:8px;border-radius:50%;background:${line?.color}"></span>
              <span>${lid} · ${(line?.terminus || []).join(' ↔ ')}</span>
            </div>`;
          }).join('')}
        </div>
      </div>
    `;

    panel.classList.add('open');
    document.getElementById('panelOverlay')?.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('detailBackBtn')?.addEventListener('click', () => {
      panel.classList.remove('open');
      document.getElementById('panelOverlay')?.classList.remove('open');
      document.body.style.overflow = '';
    });

    const arrivals = await BusRealtimeModule.getStopArrivals(stopId);
    const block = document.getElementById('busArrivalsBlock');
    if (!block) return;
    if (!arrivals.length) {
      block.innerHTML = `<p class="sdp-empty">${lang === 'es' ? 'Sin datos de paso' : 'Sense dades de pas'}</p>`;
      return;
    }
    const isReal = arrivals[0]?.source === 'temps real (TMB)';
    block.innerHTML = `
      ${!isReal ? `<p class="bus-estimate-note">${lang === 'es' ? '⏱ Tiempos estimados según frecuencia de la línea' : '⏱ Temps estimats segons la freqüència de la línia'}</p>` : ''}
      ${arrivals.map(a => `
        <div class="sdp-dep-block">
          <div class="sdp-dep-block-header">
            <span class="sdp-dep-line-badge" style="background:${a.color}">${a.lineId}</span>
            <span class="sdp-dep-desc">${isReal ? (lang==='es'?'Tiempo real':'Temps real') : (lang==='es'?'Estimado':'Estimat')}</span>
          </div>
          <div class="sdp-dep-row">
            ${a.arrivals.map(m => `<span class="bus-arrival-pill">${m <= 0 ? (lang==='es'?'Ara':'Ara') : m + ' min'}</span>`).join('')}
          </div>
        </div>
      `).join('')}
    `;
  }

  return { renderBusStopDetail };
})();

window.BusModule = BusModule;

/* ══════════════════ Ampliació de la cerca general: trens + bus ══════════════════ */
(function patchSearch() {
  function normalize(str) {
    return (str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function searchAll(query, limit = 14) {
    const { BUS_STOPS } = window.MOVCAT_BUS;
    const q = normalize((query || '').trim());
    if (!q) return [];

    const trainResults = StationsModule.searchStations(query, limit).map(s => ({ ...s, kind: 'train' }));

    const busResults = Object.values(BUS_STOPS)
      .filter(s => normalize(s.name).includes(q) || normalize(s.city || '').includes(q))
      .map(s => ({ ...s, kind: 'bus' }))
      .slice(0, limit);

    return [...trainResults, ...busResults].slice(0, limit);
  }
  window.SearchAllModule = { searchAll };
})();
