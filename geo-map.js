'use strict';

/* ════════════════════════════════════════════════════════════
   GEO-MAP.JS
   Geolocalització real (API natiu del navegador, gratuïta) +
   mapa en directe amb Leaflet/OpenStreetMap (gratuït, sense
   clau d'API) per a trens, metro, FGC, tramvia i bus.
   ════════════════════════════════════════════════════════════ */

/* ─── GeoModule: geolocalització i distàncies ─── */
const GeoModule = (() => {
  let lastPosition = null;
  let watchId = null;

  function haversine(lat1, lng1, lat2, lng2) {
    const R = 6371000;
    const toRad = d => d * Math.PI / 180;
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a = Math.sin(dLat / 2) ** 2 +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function formatDistance(meters) {
    if (meters < 1000) return `${Math.round(meters / 10) * 10} m`;
    return `${(meters / 1000).toFixed(1)} km`;
  }

  function walkMinutes(meters) {
    return Math.max(1, Math.round(meters / 80)); // ~4.8 km/h
  }

  function getPosition() {
    return new Promise((resolve, reject) => {
      if (!('geolocation' in navigator)) {
        reject(new Error('Geolocalització no disponible en aquest navegador'));
        return;
      }
      navigator.geolocation.getCurrentPosition(
        pos => {
          lastPosition = { lat: pos.coords.latitude, lng: pos.coords.longitude, accuracy: pos.coords.accuracy };
          resolve(lastPosition);
        },
        err => reject(err),
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 }
      );
    });
  }

  function watchPosition(onUpdate) {
    if (!('geolocation' in navigator)) return null;
    watchId = navigator.geolocation.watchPosition(
      pos => {
        lastPosition = { lat: pos.coords.latitude, lng: pos.coords.longitude, accuracy: pos.coords.accuracy };
        onUpdate(lastPosition);
      },
      () => {},
      { enableHighAccuracy: true, maximumAge: 15000 }
    );
    return watchId;
  }

  function stopWatching() {
    if (watchId !== null && 'geolocation' in navigator) {
      navigator.geolocation.clearWatch(watchId);
      watchId = null;
    }
  }

  function getLastPosition() { return lastPosition; }

  return { getPosition, watchPosition, stopWatching, getLastPosition, haversine, formatDistance, walkMinutes };
})();

/* ─── NearbyModule: combina estacions de tren/metro/FGC/tram + parades de bus ─── */
const NearbyModule = (() => {
  function allStops() {
    const { STATIONS } = window.MOVCAT_DATA;
    const { BUS_STOPS } = window.MOVCAT_BUS;
    const trainStops = Object.values(STATIONS).map(s => ({ ...s, kind: 'train' }));
    const busStops   = Object.values(BUS_STOPS).map(s => ({ ...s, kind: 'bus' }));
    return [...trainStops, ...busStops];
  }

  function nearest(lat, lng, limit = 8, maxMeters = 1500) {
    return allStops()
      .map(s => ({ ...s, distance: GeoModule.haversine(lat, lng, s.lat, s.lng) }))
      .filter(s => s.distance <= maxMeters)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, limit);
  }

  return { allStops, nearest };
})();

/* ─── MapModule: mapa en directe (Leaflet + OpenStreetMap, sense clau) ─── */
const MapModule = (() => {
  let map = null;
  let userMarker = null;
  let userAccuracyCircle = null;
  let stopLayerGroup = null;
  let geoWatchId = null;

  function ensureMap(containerId) {
    if (map) return map;
    if (typeof L === 'undefined') {
      console.warn('MovCat: Leaflet no s\'ha pogut carregar (sense connexió?)');
      return null;
    }
    map = L.map(containerId, { zoomControl: false, attributionControl: true })
      .setView([41.3879, 2.1599], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap',
      maxZoom: 19,
    }).addTo(map);

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    stopLayerGroup = L.layerGroup().addTo(map);
    plotAllStops();
    return map;
  }

  function plotAllStops() {
    if (!stopLayerGroup) return;
    stopLayerGroup.clearLayers();
    const { LINE_COLORS } = window.MOVCAT_DATA;
    const { busLineColor } = window.MOVCAT_BUS;

    NearbyModule.allStops().forEach(stop => {
      const color = stop.kind === 'bus'
        ? busLineColor(stop.lines[0] || '')
        : (LINE_COLORS[stop.lines?.[0]] || '#5b6b78');

      const marker = L.circleMarker([stop.lat, stop.lng], {
        radius: stop.kind === 'bus' ? 4 : 5,
        color: '#fff',
        weight: 1.5,
        fillColor: color,
        fillOpacity: 0.95,
        className: stop.kind === 'bus' ? 'movcat-marker movcat-marker--bus' : 'movcat-marker',
      });

      const lineLabels = (stop.lines || []).slice(0, 6).join(' · ');
      marker.bindPopup(`
        <div class="map-popup">
          <strong>${stop.name}</strong>
          <span>${stop.kind === 'bus' ? '🚌' : '🚆'} ${lineLabels}</span>
          <button class="map-popup-btn" data-stop="${stop.id}" data-kind="${stop.kind}">Veure detall</button>
        </div>
      `);

      marker.on('popupopen', () => {
        const btn = document.querySelector(`.map-popup-btn[data-stop="${stop.id}"]`);
        if (btn) btn.addEventListener('click', () => {
          if (stop.kind === 'bus' && window.BusModule) window.BusModule.renderBusStopDetail(stop.id);
          else if (window.StationsModule) StationsModule.renderStationDetail(stop.id);
        });
      });

      marker.addTo(stopLayerGroup);
    });
  }

  function locateUser() {
    return GeoModule.getPosition().then(pos => {
      if (!map) return pos;
      if (!userMarker) {
        userMarker = L.circleMarker([pos.lat, pos.lng], {
          radius: 7, color: '#fff', weight: 2, fillColor: '#2563eb', fillOpacity: 1,
        }).addTo(map);
        userAccuracyCircle = L.circle([pos.lat, pos.lng], {
          radius: pos.accuracy, color: '#2563eb', weight: 1, fillOpacity: 0.08,
        }).addTo(map);
      } else {
        userMarker.setLatLng([pos.lat, pos.lng]);
        userAccuracyCircle.setLatLng([pos.lat, pos.lng]).setRadius(pos.accuracy);
      }
      map.setView([pos.lat, pos.lng], 15, { animate: true });

      if (geoWatchId === null) {
        geoWatchId = GeoModule.watchPosition(p => {
          if (userMarker) {
            userMarker.setLatLng([p.lat, p.lng]);
            userAccuracyCircle.setLatLng([p.lat, p.lng]).setRadius(p.accuracy);
          }
        });
      }
      return pos;
    });
  }

  function invalidateSize() {
    if (map) setTimeout(() => map.invalidateSize(), 80);
  }

  function focusStop(lat, lng) {
    if (map) map.setView([lat, lng], 16, { animate: true });
  }

  return { ensureMap, locateUser, invalidateSize, focusStop, plotAllStops };
})();

window.GeoModule = GeoModule;
window.NearbyModule = NearbyModule;
window.MapModule = MapModule;
