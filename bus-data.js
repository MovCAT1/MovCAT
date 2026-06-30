'use strict';

/* ════════════════════════════════════════════════════════════
   BUS-DATA.JS
   Xarxa d'autobusos de TMB (xarxa ortogonal de Barcelona).
   ────────────────────────────────────────────────────────────
   Aquest fitxer afegeix suport per a BUSOS a MovCat: línies,
   parades i un connector opcional a l'API real de TMB (iBus /
   Open Data TMB), que és GRATUÏTA però requereix un registre
   d'App ID + App Key a https://developer.tmb.cat (gratuït,
   sense targeta de crèdit).

   Si no es configura cap clau (TMB_API.APP_ID / APP_KEY buits),
   MovCat calcula temps d'espera estimats a partir de la
   freqüència real aproximada de cada línia — clarament
   etiquetats com a "estimats", igual que ja es feia amb els
   trens.

   NOTA IMPORTANT: les coordenades de parades d'aquest fitxer
   són una mostra il·lustrativa de cada línia (parada origen,
   un parell d'intermèdies i destí), no la xarxa GTFS completa.
   `scripts/process_gtfs.js` ja sap convertir un GTFS de trens a
   aquest format; es pot fer servir la mateixa lògica amb el GTFS
   públic d'AMB/TMB (gratuït a https://www.amb.cat/web/area-metropolitana/dades-obertes)
   per ampliar-ho a la xarxa completa sense tocar la resta de l'app.
   ════════════════════════════════════════════════════════════ */

/* ─── CONFIGURACIÓ API REAL TMB (gratuïta, opcional) ─── */
const TMB_API = {
  APP_ID:  '832a02db',
  APP_KEY: '071134337947584312427bd719ddedb6',
  BASE:    'https://api.tmb.cat/v1',
  get configured() { return !!(this.APP_ID && this.APP_KEY); },
};

/* ─── COLORS DE XARXA (segons codi TMB) ─── */
const BUS_NET_COLORS = {
  H: '#E2231A', // Xarxa Horitzontal
  V: '#3AAA35', // Xarxa Vertical
  D: '#1E88E5', // Xarxa Diagonal
  X: '#8E44AD', // Llançadores / especials
};
function busLineColor(id) {
  return BUS_NET_COLORS[id.replace(/[0-9]/g, '').charAt(0)] || '#5b6b78';
}

/* ─── LÍNIES DE BUS (mostra representativa de la xarxa ortogonal TMB) ─── */
const BUS_LINES = {
  H6:  { id: 'H6',  label: 'H6',  operator: 'tmb_bus', terminus: ['Zona Universitària', 'Glòries'], description: 'Horitzontal — travessa la ciutat per Sants, Sant Antoni i Eixample' },
  H8:  { id: 'H8',  label: 'H8',  operator: 'tmb_bus', terminus: ['Bon Pastor', 'Zona Franca'], description: 'Horitzontal — Sant Andreu, Poblenou, Zona Franca' },
  H10: { id: 'H10', label: 'H10', operator: 'tmb_bus', terminus: ['Bon Pastor', 'Port (Estació Marítima)'], description: 'Horitzontal — connexió amb el front marítim' },
  H12: { id: 'H12', label: 'H12', operator: 'tmb_bus', terminus: ['Pedralbes', 'La Verneda'], description: 'Horitzontal — Pedralbes, Sagrada Família, Verneda' },
  V7:  { id: 'V7',  label: 'V7',  operator: 'tmb_bus', terminus: ['Pl. Maragall', 'Paral·lel'], description: 'Vertical — Guinardó, Eixample, Paral·lel' },
  V13: { id: 'V13', label: 'V13', operator: 'tmb_bus', terminus: ['Can Caralleu', 'Estació de Sants'], description: 'Vertical — Pedralbes, Les Corts, Sants' },
  V15: { id: 'V15', label: 'V15', operator: 'tmb_bus', terminus: ['Ciutat Meridiana', 'Barceloneta'], description: 'Vertical — Nou Barris fins al mar' },
  V17: { id: 'V17', label: 'V17', operator: 'tmb_bus', terminus: ['Vall d\'Hebron', 'Diagonal Mar'], description: 'Vertical — Vall d\'Hebron, Glòries, Diagonal Mar' },
  D20: { id: 'D20', label: 'D20', operator: 'tmb_bus', terminus: ['La Verneda', 'Drassanes'], description: 'Diagonal — Verneda, Ciutadella, Drassanes' },
  D50: { id: 'D50', label: 'D50', operator: 'tmb_bus', terminus: ['Diagonal Mar', 'Zona Universitària'], description: 'Diagonal — tota l\'Avinguda Diagonal' },
};
Object.values(BUS_LINES).forEach(l => { l.color = busLineColor(l.id); l.textColor = '#fff'; });

/* ─── PARADES DE BUS (mostra il·lustrativa, ampliable via GTFS) ─── */
const BUS_STOPS = {
  'bus-zona-universitaria': { id: 'bus-zona-universitaria', name: 'Zona Universitària', shortName: 'Zona Universitària', city: 'Barcelona', lat: 41.3833, lng: 2.1115, lines: ['H6', 'D50'], type: 'bus' },
  'bus-placa-espanya':      { id: 'bus-placa-espanya',      name: 'Plaça d\'Espanya',    shortName: 'Pl. Espanya',        city: 'Barcelona', lat: 41.3749, lng: 2.1485, lines: ['H6'], type: 'bus' },
  'bus-glories':            { id: 'bus-glories',            name: 'Plaça de les Glòries', shortName: 'Glòries',           city: 'Barcelona', lat: 41.4036, lng: 2.1925, lines: ['H6', 'V17'], type: 'bus' },
  'bus-bon-pastor':         { id: 'bus-bon-pastor',         name: 'Bon Pastor',           shortName: 'Bon Pastor',        city: 'Barcelona', lat: 41.4396, lng: 2.1989, lines: ['H8', 'H10'], type: 'bus' },
  'bus-zona-franca':        { id: 'bus-zona-franca',        name: 'Zona Franca',          shortName: 'Zona Franca',       city: 'Barcelona', lat: 41.3491, lng: 2.1357, lines: ['H8'], type: 'bus' },
  'bus-poblenou':           { id: 'bus-poblenou',           name: 'Poblenou',             shortName: 'Poblenou',          city: 'Barcelona', lat: 41.4036, lng: 2.2010, lines: ['H8'], type: 'bus' },
  'bus-port-marítima':      { id: 'bus-port-marítima',      name: 'Estació Marítima (Port)', shortName: 'Port',           city: 'Barcelona', lat: 41.3700, lng: 2.1780, lines: ['H10'], type: 'bus' },
  'bus-pedralbes':          { id: 'bus-pedralbes',          name: 'Pedralbes',            shortName: 'Pedralbes',         city: 'Barcelona', lat: 41.3897, lng: 2.1142, lines: ['H12', 'V13'], type: 'bus' },
  'bus-sagrada-familia':    { id: 'bus-sagrada-familia',    name: 'Sagrada Família',      shortName: 'Sagrada Família',    city: 'Barcelona', lat: 41.4036, lng: 2.1744, lines: ['H12'], type: 'bus' },
  'bus-verneda':            { id: 'bus-verneda',            name: 'La Verneda',           shortName: 'Verneda',           city: 'Barcelona', lat: 41.4255, lng: 2.1969, lines: ['H12', 'D20'], type: 'bus' },
  'bus-pl-maragall':        { id: 'bus-pl-maragall',        name: 'Plaça Maragall',       shortName: 'Pl. Maragall',      city: 'Barcelona', lat: 41.4248, lng: 2.1740, lines: ['V7'], type: 'bus' },
  'bus-guinardo':           { id: 'bus-guinardo',           name: 'Guinardó',             shortName: 'Guinardó',          city: 'Barcelona', lat: 41.4172, lng: 2.1685, lines: ['V7'], type: 'bus' },
  'bus-paralel':            { id: 'bus-paralel',            name: 'Avinguda del Paral·lel', shortName: 'Paral·lel',       city: 'Barcelona', lat: 41.3735, lng: 2.1685, lines: ['V7'], type: 'bus' },
  'bus-can-caralleu':       { id: 'bus-can-caralleu',       name: 'Can Caralleu',         shortName: 'Can Caralleu',      city: 'Barcelona', lat: 41.4023, lng: 2.1156, lines: ['V13'], type: 'bus' },
  'bus-sants':              { id: 'bus-sants',              name: 'Estació de Sants (bus)', shortName: 'Sants',           city: 'Barcelona', lat: 41.3793, lng: 2.1403, lines: ['V13'], type: 'bus' },
  'bus-ciutat-meridiana':   { id: 'bus-ciutat-meridiana',   name: 'Ciutat Meridiana',     shortName: 'Ciutat Meridiana',  city: 'Barcelona', lat: 41.4555, lng: 2.1772, lines: ['V15'], type: 'bus' },
  'bus-barceloneta':        { id: 'bus-barceloneta',        name: 'Barceloneta',          shortName: 'Barceloneta',       city: 'Barcelona', lat: 41.3800, lng: 2.1898, lines: ['V15'], type: 'bus' },
  'bus-vall-hebron':        { id: 'bus-vall-hebron',        name: 'Vall d\'Hebron',       shortName: 'Vall d\'Hebron',    city: 'Barcelona', lat: 41.4258, lng: 2.1444, lines: ['V17'], type: 'bus' },
  'bus-diagonal-mar':       { id: 'bus-diagonal-mar',       name: 'Diagonal Mar',         shortName: 'Diagonal Mar',      city: 'Barcelona', lat: 41.4102, lng: 2.2167, lines: ['V17', 'D50'], type: 'bus' },
  'bus-ciutadella':         { id: 'bus-ciutadella',         name: 'Parc de la Ciutadella', shortName: 'Ciutadella',       city: 'Barcelona', lat: 41.3879, lng: 2.1873, lines: ['D20'], type: 'bus' },
  'bus-drassanes':          { id: 'bus-drassanes',          name: 'Drassanes',            shortName: 'Drassanes',         city: 'Barcelona', lat: 41.3756, lng: 2.1775, lines: ['D20'], type: 'bus' },
};

/* Omple line.stations a partir de les parades, perquè es comporti
   com les línies de tren (cerca, panell de línia, etc.) */
Object.values(BUS_LINES).forEach(line => {
  line.stations = Object.values(BUS_STOPS)
    .filter(s => s.lines.includes(line.id))
    .map(s => s.name);
});

/* ─── FREQÜÈNCIES APROXIMADES (minuts) per estimar pas si no hi ha API real ─── */
const BUS_FREQ_MIN = { H: 8, V: 9, D: 7, X: 12 };
function busFrequency(lineId) {
  return BUS_FREQ_MIN[lineId.replace(/[0-9]/g, '').charAt(0)] || 10;
}

/* ─── MÒDUL: BusRealtimeModule ───
   getStopArrivals(stopId) intenta l'API real de TMB (iBus) si hi
   ha App ID/Key configurats; si no, retorna una estimació basada
   en la freqüència real de la línia, etiquetada com a tal. */
const BusRealtimeModule = (() => {
  const cache = new Map();
  const CACHE_MS = 30 * 1000;

  function estimateArrivals(stop) {
    const now = Date.now();
    return (stop.lines || []).map(lineId => {
      const freq = busFrequency(lineId);
      const firstWait = Math.max(1, Math.floor(Math.random() * freq));
      return {
        lineId,
        color: busLineColor(lineId),
        arrivals: [firstWait, firstWait + freq, firstWait + freq * 2],
        source: 'estimat',
      };
    });
  }

  async function fetchRealArrivals(stop) {
    // iBus de TMB necessita el codi de parada oficial (CODI_PARADA),
    // que no tenim en aquesta mostra il·lustrativa de parades.
    // Quan s'importi el GTFS complet (amb stop_code), aquesta crida
    // ja funcionarà sense canviar res més.
    if (!TMB_API.configured || !stop.tmbStopCode) return null;
    try {
      const url = `${TMB_API.BASE}/ibus/stops/${stop.tmbStopCode}?app_id=${TMB_API.APP_ID}&app_key=${TMB_API.APP_KEY}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('iBus HTTP ' + res.status);
      const json = await res.json();
      const ibusData = json?.['ibus-fetch']?.data || json?.data || [];
      return ibusData.map(d => ({
        lineId: d.line,
        color: busLineColor(d.line),
        arrivals: [Math.round((d['t-in-s'] || 0) / 60)],
        source: 'temps real (TMB)',
      }));
    } catch (e) {
      console.warn('MovCat: iBus no disponible, s\'usa estimació', e);
      return null;
    }
  }

  async function getStopArrivals(stopId) {
    const stop = BUS_STOPS[stopId];
    if (!stop) return [];
    const cached = cache.get(stopId);
    if (cached && Date.now() - cached.ts < CACHE_MS) return cached.data;

    const real = await fetchRealArrivals(stop);
    const data = real || estimateArrivals(stop);
    cache.set(stopId, { ts: Date.now(), data });
    return data;
  }

  return { getStopArrivals };
})();

window.MOVCAT_BUS = {
  TMB_API,
  BUS_LINES,
  BUS_STOPS,
  BUS_NET_COLORS,
  busLineColor,
  busFrequency,
  BusRealtimeModule,
};
