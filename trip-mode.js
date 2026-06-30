'use strict';

/* ════════════════════════════════════════════════════════════
   TRIP-MODE.JS
   Seguiment en directe d'un viatge ja calculat: compte enrere
   fins al pròxim tren/bus del primer tram, llista de trams amb
   el tram actual destacat, i avenç manual entre trams (no hi ha
   posició GPS real del vehicle sense un feed GTFS-RT de posicions,
   que TMB no exposa amb la mateixa clau iBus — quan es tingui es
   pot pintar damunt del mapa en directe ja construït).
   ════════════════════════════════════════════════════════════ */

const TripModule = (() => {
  let trip = null; // { result, originId, destId, stepIndex }

  function start(routeData) {
    if (!routeData) return;
    trip = { ...routeData, stepIndex: 0, startedAt: Date.now() };
  }

  function stop() {
    trip = null;
  }

  function nextStep() {
    if (!trip) return;
    const segs = trip.result.segments;
    trip.stepIndex = Math.min(segs.length - 1, trip.stepIndex + 1);
    render();
  }

  function prevStep() {
    if (!trip) return;
    trip.stepIndex = Math.max(0, trip.stepIndex - 1);
    render();
  }

  async function _currentDepartureInfo(seg) {
    if (!seg || seg.walk) return null;
    const firstStop = seg.stations?.[0];
    if (!firstStop) return null;
    const lang = I18N.getLang();

    if (seg.isBus && window.MOVCAT_BUS) {
      const arrivals = await MOVCAT_BUS.BusRealtimeModule.getStopArrivals(firstStop.id);
      const forLine = arrivals.find(a => a.lineId === seg.lineId);
      if (!forLine) return null;
      return {
        minutes: forLine.arrivals[0],
        label: forLine.source === 'temps real (TMB)' ? (lang === 'es' ? 'Tiempo real' : 'Temps real') : (lang === 'es' ? 'Estimado' : 'Estimat'),
      };
    }
    const deps = RealtimeModule.getDeparturesForStation(firstStop.id);
    const forLine = deps.find(d => d.lineId === seg.lineId);
    const next = forLine?.departures?.[0];
    if (!next) return null;
    return { minutes: next.minutesAway, label: lang === 'es' ? 'Estimado' : 'Estimat' };
  }

  async function render() {
    const container = document.getElementById('tripContent');
    if (!container) return;
    const lang = I18N.getLang();

    if (!trip) {
      container.innerHTML = `
        <div class="route-no-result">
          <p>${lang === 'es' ? 'No hay ningún viaje activo.' : 'No hi ha cap viatge actiu.'}</p>
          <p class="route-no-result-hint">${lang === 'es' ? 'Calcula una ruta y pulsa "Iniciar seguimiento".' : 'Calcula una ruta i prem "Inicia seguiment".'}</p>
        </div>
      `;
      return;
    }

    const originSt = RoutesModule.getStop(trip.originId);
    const destSt   = RoutesModule.getStop(trip.destId);
    const segs     = trip.result.segments;
    const current  = segs[trip.stepIndex];

    const depInfo = await _currentDepartureInfo(current);

    container.innerHTML = `
      <div class="trip-header">
        <span class="trip-header-route">${originSt?.shortName || originSt?.name || ''} → ${destSt?.shortName || destSt?.name || ''}</span>
        <span class="trip-header-step">${lang === 'es' ? 'Tramo' : 'Tram'} ${trip.stepIndex + 1}/${segs.length}</span>
      </div>

      <div class="trip-current-card">
        ${current.walk
          ? `<div class="trip-current-walk">
               <span class="trip-current-icon">🚶</span>
               <div>
                 <div class="trip-current-title">${current.fromName} → ${current.toName}</div>
                 <div class="trip-current-sub">${current.minutes} min ${lang === 'es' ? 'a pie' : 'a peu'}</div>
               </div>
             </div>`
          : `<div class="trip-current-line">
               <span class="trip-current-badge" style="background:${current.lineColor}">${current.isBus ? '🚌 ' : ''}${current.lineLabel}</span>
               <div>
                 <div class="trip-current-title">${current.stations[0]?.name} → ${current.stations[current.stations.length - 1]?.name}</div>
                 ${depInfo
                   ? `<div class="trip-current-sub">${depInfo.label}: <strong>${depInfo.minutes <= 0 ? (lang === 'es' ? 'ahora' : 'ara') : depInfo.minutes + ' min'}</strong></div>`
                   : `<div class="trip-current-sub">${lang === 'es' ? 'Sin datos de paso' : 'Sense dades de pas'}</div>`}
               </div>
             </div>`}
      </div>

      <div class="trip-steps">
        ${segs.map((s, i) => `
          <div class="trip-step ${i === trip.stepIndex ? 'trip-step--active' : ''} ${i < trip.stepIndex ? 'trip-step--done' : ''}">
            <div class="trip-step-dot" style="background:${s.walk ? '#9898a6' : s.lineColor}"></div>
            <span class="trip-step-label">${s.walk ? `🚶 ${s.minutes} min` : `${s.isBus ? '🚌 ' : ''}${s.lineLabel} · ${s.stations[s.stations.length - 1]?.name}`}</span>
          </div>
        `).join('')}
      </div>

      <div class="trip-actions">
        <button class="route-clear-all-btn" id="tripPrevBtn" type="button" ${trip.stepIndex === 0 ? 'disabled' : ''}>${lang === 'es' ? '← Anterior' : '← Anterior'}</button>
        <button class="route-calculate-btn" id="tripNextBtn" type="button" ${trip.stepIndex === segs.length - 1 ? 'disabled' : ''}>${lang === 'es' ? 'He llegado, siguiente tramo →' : 'He arribat, següent tram →'}</button>
      </div>
      <button class="trip-stop-btn" id="tripStopBtn" type="button">${lang === 'es' ? 'Finalizar seguimiento' : 'Finalitza seguiment'}</button>
    `;

    document.getElementById('tripPrevBtn')?.addEventListener('click', prevStep);
    document.getElementById('tripNextBtn')?.addEventListener('click', nextStep);
    document.getElementById('tripStopBtn')?.addEventListener('click', () => {
      stop();
      UIModule.navigateTo('home');
    });
  }

  // Refresca el compte enrere cada vegada que la resta de l'app es refresca
  document.addEventListener('DOMContentLoaded', () => {
    if (window.RealtimeModule) {
      RealtimeModule.on('refresh', () => { if (trip) render(); });
    }
  });

  return { start, stop, nextStep, prevStep, render, get active() { return !!trip; } };
})();

window.TripModule = TripModule;
