'use strict';

/* ════════════════════════════════════════════════════════════
   NOTIFY.JS
   Registra el Service Worker (offline) i vigila l'estat de les
   línies de les estacions marcades com a favorites: si una passa
   a "retard" o "servei parcial", llança una notificació local.

   IMPORTANT — honestedat: això són notificacions LOCALS (Notification
   API del navegador), actives mentre el navegador estigui obert
   (encara que la pestanya estigui en segon pla). NO són notificacions
   push reals amb l'app tancada de tot: per això caldria un servidor
   push (web-push amb claus VAPID), que MovCat no té perquè no compta
   amb backend propi. Si es vol fer el pas, aquest fitxer ja deixa
   el punt d'enganxament (vegeu `sendNotification`).
   ════════════════════════════════════════════════════════════ */

(function () {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(err => {
        console.warn('MovCat: no s\'ha pogut registrar el Service Worker', err);
      });
    });
  }

  const lastStatus = {};

  function sendNotification(title, body) {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    if (navigator.serviceWorker?.controller) {
      navigator.serviceWorker.ready.then(reg => reg.showNotification(title, {
        body, icon: 'movcat.png', badge: 'movcat.png', tag: 'movcat-line-alert',
      }));
    } else {
      new Notification(title, { body, icon: 'movcat.png' });
    }
  }

  async function requestPermission() {
    if (!('Notification' in window)) return 'unsupported';
    if (Notification.permission === 'granted') return 'granted';
    return Notification.requestPermission();
  }

  function watchFavoriteLines() {
    if (!window.StationsModule || !window.MOVCAT_DATA) return;
    const favStations = StationsModule.getFavoriteStations();
    const lineIds = [...new Set(favStations.flatMap(s => s.lines || []))];
    const lang = (window.I18N && I18N.getLang()) || 'ca';

    lineIds.forEach(lineId => {
      const status = window.MOVCAT_DATA.getSimulatedLineStatus(lineId);
      const prev = lastStatus[lineId];
      lastStatus[lineId] = status.id;
      if (prev && prev !== status.id && status.severity > 0) {
        const line = window.MOVCAT_DATA.LINES[lineId];
        sendNotification(
          `${line ? line.label : lineId} — ${status.label}`,
          status.message || (lang === 'es' ? 'Consulta MovCat para más detalles' : 'Consulta MovCat per a més detalls')
        );
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Comprova cada cop que la resta de l'app es refresca (cada 30 s)
    if (window.RealtimeModule) {
      RealtimeModule.on('refresh', watchFavoriteLines);
    }
    const btn = document.getElementById('notifyPermBtn');
    if (btn) {
      const refreshBtnState = () => {
        const granted = 'Notification' in window && Notification.permission === 'granted';
        btn.classList.toggle('is-active', granted);
      };
      btn.addEventListener('click', async () => {
        const perm = await requestPermission();
        if (perm === 'granted' && window.UIModule) {
          UIModule.showToast?.((window.I18N && I18N.getLang() === 'es') ? 'Te avisaremos de retrasos en tus líneas favoritas' : 'T\'avisarem de retards a les teves línies favorites');
        }
        refreshBtnState();
      });
      refreshBtnState();
    }
    window.NotifyModule = { requestPermission, sendNotification, watchFavoriteLines };
  });
})();
