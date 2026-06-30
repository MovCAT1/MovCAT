'use strict';

/* ════════════════════════════════════════════════════════════
   SW.JS — Service Worker de MovCat
   Cache de l'app shell (HTML/CSS/JS/icona) per poder obrir
   l'app sense cobertura (p. ex. dins un túnel de metro).
   Les dades en directe (horaris, iBus, OSM) sempre es demanen
   a la xarxa quan n'hi ha; només la part estàtica es serveix
   des de cache.
   ════════════════════════════════════════════════════════════ */

const CACHE_NAME = 'movcat-shell-v1';
const APP_SHELL = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './bus-data.js',
  './geo-map.js',
  './bus-ui.js',
  './trip-mode.js',
  './manifest.json',
  './movcat.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  // Només app shell del mateix origen es serveix amb "cache first";
  // tota la resta (APIs, tiles de mapa, fonts) sempre va a la xarxa.
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(res => {
        if (res.ok && event.request.method === 'GET') {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
        }
        return res;
      }).catch(() => cached);
    })
  );
});

/* Notificacions locals (mostrades pel propi navegador mentre el
   procés està actiu). Per a notificacions push reals amb l'app
   tancada caldria un servidor push (web-push) — no inclòs aquí
   perquè MovCat no té backend propi. */
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then(clients => {
      if (clients.length) return clients[0].focus();
      return self.clients.openWindow('./');
    })
  );
});
