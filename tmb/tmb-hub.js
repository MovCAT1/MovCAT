/* ════════════════════════════════════════════════════════════════
   TMB-HUB.JS  Pantalla "TMB" (abans "Bitllets")
   Accessos directes, avisos (carrusel autoplay), estat del servei,
   notícies, i un overlay a pantalla completa amb els bitllets.
   ════════════════════════════════════════════════════════════════ */

const TmbHubModule = (() => {

  function lang() {
    return (window.I18N && I18N.getLang) ? I18N.getLang() : 'ca';
  }

  function t(ca, es) {
    return lang() === 'es' ? es : ca;
  }

  /* ══════════════════ ICONES ══════════════════ */
  const ICONS = {
    bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    newspaper: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8z"/></svg>`,
    pulse: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    ticket: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9a2 2 0 0 0 0 4v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3a2 2 0 0 1 0-4V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><line x1="13" y1="5" x2="13" y2="19" stroke-dasharray="2 2"/></svg>`,
    route: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M8.2 17.6C13 13 9 9 13.8 6.4"/></svg>`,
    lines: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
    map: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>`,
    chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
    chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
    close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="11" x2="12" y2="16"/><line x1="12" y1="7.5" x2="12.01" y2="7.5"/></svg>`,
    tag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41 11 3.83A2 2 0 0 0 9.59 3.24L3 3v6.59a2 2 0 0 0 .59 1.41l9.59 9.59a2 2 0 0 0 2.82 0l4.59-4.59a2 2 0 0 0 0-2.82z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>`,
    calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.6" y1="10.6" x2="15.4" y2="6.4"/><line x1="8.6" y1="13.4" x2="15.4" y2="17.6"/></svg>`,
    pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  };

  /* ── Icones de xarxes (línia, coherents amb la resta de la UI) ── */
  const SOCIAL_ICONS = {
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>`,
    x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="4"/><polygon points="10 9 15.5 12 10 15" fill="currentColor" stroke="none"/></svg>`,
    tiktok: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3v10.5a3.5 3.5 0 1 1-3.5-3.5c.17 0 .34.01.5.03V7h3a5 5 0 0 0 0 0"/><path d="M16 3a5 5 0 0 0 5 5"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="10" x2="7" y2="17"/><circle cx="7" cy="6.5" r="0.6" fill="currentColor" stroke="none"/><line x1="12" y1="10" x2="12" y2="17"/><path d="M12 13c0-2 2-3 3.5-3S17 11 17 13v4"/></svg>`,
  };

  /* ══════════════════ ACCESSOS DIRECTES ══════════════════ */
  function getShortcuts() {
    return [
      { id: 'route',   icon: ICONS.route, label: t('Com arribar', 'Cómo llegar'),  action: () => UIModule.navigateTo('search') },
      { id: 'lines',   icon: ICONS.lines, label: t('Línies',      'Líneas'),       action: () => UIModule.navigateTo('lines') },
      { id: 'map',     icon: ICONS.map,   label: t('Mapa',        'Mapa'),         action: () => UIModule.navigateTo('map') },
      { id: 'tickets', icon: ICONS.ticket,label: t('Bitllets',    'Billetes'),     action: () => openTicketsOverlay() },
    ];
  }

  function renderShortcuts() {
    const items = getShortcuts();
    return `
      <div class="tmb-shortcuts-grid">
        ${items.map(s => `
          <button class="tmb-shortcut-btn" data-shortcut="${s.id}" type="button">
            <span class="tmb-shortcut-icon">${s.icon}</span>
            <span class="tmb-shortcut-label">${s.label}</span>
          </button>
        `).join('')}
      </div>`;
  }

  /* ══════════════════ NOTÍCIES TMB (curated, enllacen a noticies.tmb.cat) ══════════════════ */
  const NEWS_DATA = [
    {
      id: 'news-tour-france',
      title: { ca: 'Afectacions per la sortida del Tour de França a Barcelona', es: 'Afectaciones por la salida del Tour de Francia en Barcelona' },
      tag: { ca: 'Avís', es: 'Aviso' },
      image: 'https://www.tmb.cat/documents/20182/1987352/tour-cap%C3%A7alera.jpg/bda28fd2-bd23-518b-a632-64e7889673d9?t=1781693116282',
      link: 'https://www.tmb.cat/es/tour-de-france',
    },
    {
      id: 'news-verdaguer',
      title: { ca: 'Tancament de Verdaguer i altres afectacions per obres de millora', es: 'Cierre de Verdaguer y otras afectaciones por obras de mejora' },
      tag: { ca: 'Obres', es: 'Obras' },
      image: 'https://www.tmb.cat/documents/20182/4046ab5d-1656-1b9a-56d2-4cf2ca728e7a',
      link: 'https://www.tmb.cat/es/conoce-tmb/mejoras-red-transporte/metro/corte-l4-2026',
    },
    {
      id: 'news-pride',
      title: { ca: 'TMB se suma a la celebració del Pride', es: 'TMB se suma a la celebración del Pride' },
      tag: { ca: 'Agenda', es: 'Agenda' },
      image: 'https://www.tmb.cat/documents/20182/4d7c5cc4-4faa-5455-0ee5-9b940ebcafc2',
      link: 'https://www.tmb.cat/es/w/agenda-pride-barcelona',
    },
    {
      id: 'news-platges',
      title: { ca: 'Millores en el servei de bus a la zona de platges', es: 'Mejoras en el servicio de bus en la zona de playas' },
      tag: { ca: 'Servei', es: 'Servicio' },
      image: 'https://www.tmb.cat/documents/d/tmb/v29-d20-busos-928x150-jpg',
      link: 'https://www.tmb.cat/es/-/millores-al-servei-de-bus',
    },
    {
      id: 'news-roda',
      title: { ca: 'Ja pots participar a Roda a TMB!', es: '¡Ya puedes participar en Roda a TMB!' },
      tag: { ca: 'Roda & TMB', es: 'Roda & TMB' },
      image: 'https://www.tmb.cat/documents/20182/0c27d9f3-fd8f-22d7-0fec-4906ea42ad88',
      link: 'https://subtravellingfestival.tmb.cat/es',
    },
    {
      id: 'news-t-mobilitat',
      title: { ca: 'Amb la T-mobilitat, viatja de forma intel·ligent en transport públic', es: 'Con la T-mobilitat, viaja de forma inteligente en transporte público' },
      tag: { ca: 'T-mobilitat', es: 'T-mobilitat' },
      image: 'https://www.tmb.cat/documents/20182/687997/que-es-t-mobilitat-nova.jpg/84f8b73d-b8dc-4386-8bd7-16a521091809?t=1733911617826',
      link: 'https://www.tmb.cat/es/t-mobilitat',
    },
  ];

  const ALL_NEWS_URL = 'https://noticies.tmb.cat';

  /* ══════════════════ "ET POT INTERESSAR" (carrusel arrossegable) ══════════════════ */
  const INTEREST_DATA = [
    {
      id: 'int-mapa-zones',
      title: { ca: 'Mapa de zones', es: 'Mapa de zonas' },
      desc: {
        ca: 'L\'àmbit geogràfic del Sistema Tarifari Integrat de l\'àrea de Barcelona inclou set corones dividides en sectors tarifaris.',
        es: 'El ámbito geográfico del Sistema Tarifario Integrado del área de Barcelona incluye siete coronas divididas en sectores tarifarios.'
      },
      image: 'https://www.tmb.cat/documents/20182/62743/Mapa+Corones+2025+TZ.png/6da09ef4-c272-e93d-8930-54e460be6411?t=1750683970915',
      link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/mapa-zonas'
    },
    {
      id: 'int-t-mobilitat',
      title: { ca: 'T-mobilitat', es: 'T-mobilitat' },
      desc: {
        ca: 'Mou-te de forma intel·ligent en transport públic.',
        es: 'Muévete de forma inteligente en transporte público.'
      },
      image: 'https://www.tmb.cat/documents/20182/1534117/movilmetro4.jpg/48dee931-cbaf-b1ab-14fd-411ab1aa0ec9?t=1736425261338',
      link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-mobilitat'
    },
    {
      id: 'int-recarrega',
      title: { ca: 'Compra de bitllets en línia.', es: 'Compra de billetes online.' },
      desc: {
        ca: 'Pots comprar els bitllets i abonaments ràpidament i còmodament a través de la web o de TMB App.',
        es: 'Puedes comprar los billetes y abonos rápida y cómodamente a través de la web o de TMB App.'
      },
      image: 'https://www.tmb.cat/documents/20182/881600/subhome-bitllets-compra-online.jpg/167cabcd-429f-4671-81f0-a51ee9f81c98?t=1733911617553',
      link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/compra-billetes-online'
    },
    {
      id: 'int-on-comprar',
      title: { ca: 'Punts de venda', es: 'Puntos de venta' },
      desc: {
        ca: 'On pots comprar els bitllets de transport públic?',
        es: '¿Dónde puedes comprar los billetes de transporte público?'
      },
      image: 'https://www.tmb.cat/documents/20182/881600/subhome-bitllets-punts-venda.jpg/f63d1f75-4aa8-4c69-8c65-9269bc8622e9?t=1733911617553',
      link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/puntos-venta'
    },
    {
      id: 'int-tarifes-reduides',
      title: { ca: 'T-metropolitana', es: 'T-metropolitana' },
      desc: {
        ca: 'Tot sobre la T-metropolitana i les gestions que hi pots dur a terme.',
        es: 'Todo sobre la T-metropolitana y las gestiones que puedes llevar a cabo sobre ella.'
      },
      image: 'https://www.tmb.cat/documents/20182/881600/T-metropolitana+-+subhome+Bitllets+i+tarifes+-+368x207.jpg/5df30858-583e-a4d0-9e46-b61e090cb4ce?t=1755079684928',
      link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-metropolitana'
    },
    {
      id: 'int-faq',
      title: { ca: 'Validació amb targeta bancària', es: 'Validación con tarjeta bancaria.' },
      desc: {
        ca: 'Compra i valida el teu bitllet senzill de bus en un sol pas amb la targeta bancària.',
        es: 'Compra y valida tu billete sencillo de bus en un solo paso con tu tarjeta bancaria.'
      },
      image: 'https://www.tmb.cat/documents/20182/881600/emv-distribuidora-bitllets-tarifes.jpg/5709835c-b773-4996-895c-fede913dab3c?t=1733911617554',
      link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/validacion-tarjeta-bancaria'
    },
  ];

  function interestImageBlock(item) {
    return `<div class="tmb-interest-card-img"><img src="${item.image}" alt="" loading="lazy" draggable="false" onerror="this.parentElement.outerHTML='<div class=&quot;tmb-interest-card-img tmb-interest-card-img--placeholder&quot;>${ICONS.info.replace(/"/g, '&quot;')}</div>'" /></div>`;
  }

  function interestCardHTML(item) {
    const l = lang();
    const title = item.title[l] || item.title.ca;
    const desc = item.desc[l] || item.desc.ca;
    return `
      <a class="tmb-interest-card" href="${item.link}" target="_blank" rel="noopener" draggable="false" data-id="${item.id}">
        ${interestImageBlock(item)}
        <div class="tmb-interest-card-body">
          <h3 class="tmb-interest-card-title">${title}</h3>
          <p class="tmb-interest-card-desc">${desc}</p>
        </div>
      </a>`;
  }

  function renderInterestCarousel() {
    return `
      <div class="tmb-interest-scroll" id="tmbInterestScroll">
        ${INTEREST_DATA.map(interestCardHTML).join('')}
      </div>
      <div class="tmb-carousel-dots tmb-interest-dots" id="tmbInterestDots">
        ${INTEREST_DATA.map((_, i) => `<span class="tmb-carousel-dot ${i === 0 ? 'tmb-carousel-dot--active' : ''}" data-dot="${i}"></span>`).join('')}
      </div>`;
  }

  function bindInterestCarousel(container) {
    const scroller = container.querySelector('#tmbInterestScroll');
    if (!scroller) return;
    const cards = Array.from(scroller.children);
    const dots = container.querySelectorAll('#tmbInterestDots .tmb-carousel-dot');
    if (!cards.length) return;

    function cardStep() {
      const style = getComputedStyle(scroller);
      const gap = parseFloat(style.columnGap || style.gap) || 0;
      return cards[0].offsetWidth + gap;
    }

    function updateActive() {
      const idx = Math.round(scroller.scrollLeft / cardStep());
      const clamped = Math.max(0, Math.min(idx, dots.length - 1));
      dots.forEach((d, i) => d.classList.toggle('tmb-carousel-dot--active', i === clamped));
    }

    let scrollTimer = null;
    scroller.addEventListener('scroll', () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(updateActive, 60);
    }, { passive: true });

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const i = parseInt(dot.getAttribute('data-dot'), 10);
        scroller.scrollTo({ left: i * cardStep(), behavior: 'smooth' });
      });
    });

    /* Arrossegar amb ratolí: control manual perquè el gest sigui fluid.
       NO fem servir setPointerCapture: capturava el punter fins i tot en
       un simple clic i això feia que el navegador no arribés a disparar
       el click natiu de l'enllaç (per això la notícia no s'obria mai).
       En comptes d'això, escoltem el moviment a `window` mentre dura
       l'arrossegament. El tàctil ja fa scroll natiu i el navegador ja
       distingeix bé un tap d'un arrossegament, així que no el toquem. */
    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    function onWindowMove(e) {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      scroller.scrollLeft = startScroll - dx;
    }

    function onWindowUp() {
      if (!isDown) return;
      isDown = false;
      scroller.classList.remove('tmb-interest-scroll--dragging');
      window.removeEventListener('pointermove', onWindowMove);
      window.removeEventListener('pointerup', onWindowUp);
      updateActive();
    }

    scroller.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      isDown = true;
      moved = false;
      startX = e.clientX;
      startScroll = scroller.scrollLeft;
      scroller.classList.add('tmb-interest-scroll--dragging');
      window.addEventListener('pointermove', onWindowMove);
      window.addEventListener('pointerup', onWindowUp);
    });

    // Bloqueja el drag nadiu del navegador (enllaç/imatge), que feia
    // que l'arrossegament amb ratolí no fos fluid.
    cards.forEach(card => {
      card.addEventListener('dragstart', (e) => e.preventDefault());
      // Amb ratolí, només obre la notícia si NO hi ha hagut arrossegament.
      // Amb tàctil, el navegador ja gestiona correctament tap vs. scroll.
      // Fem servir window.open manualment (com el botó "Comprar ara")
      // perquè alguns entorns de previsualització bloquegen la navegació
      // per defecte d'un <a target="_blank"> però sí permeten window.open.
      card.addEventListener('click', (e) => {
        e.preventDefault();
        if (moved) return;
        const url = card.getAttribute('href');
        if (url) window.open(url, '_blank', 'noopener');
      });
    });

    updateActive();
  }

  /* ══════════════════ PROMOCIONS DESTACADES (JoTMBé, contingut oficial) ══════════════════ */
  const PROMO_DATA = [
    {
      id: 'promo-jotmbe',
      badge: { ca: 'Programa de punts', es: 'Programa de puntos' },
      title: { ca: 'JoTMBé: acumula punts i bescanvia\'ls per premis', es: 'JoTMBé: acumula puntos y cámbialos por premios' },
      desc: {
        ca: 'Registra\'t gratis, viatja i guanya punts que pots bescanviar per descomptes i experiències.',
        es: 'Regístrate gratis, viaja y gana puntos que puedes cambiar por descuentos y experiencias.'
      },
      image: 'https://marcaporhombro.com/wp-content/uploads/2015/11/jotmbe.jpg',
      link: 'https://www.tmb.cat/es/jotmbe/que-es-jotmbe'
    },
    {
      id: 'promo-moment-guanyador',
      badge: { ca: 'Sortejos', es: 'Sorteos' },
      title: { ca: 'Moment guanyador JoTMBé', es: 'Momento ganador JoTMBé' },
      desc: {
        ca: 'Cada setmana repartim premis entre els usuaris de JoTMBé. Comprova si ets un dels guanyadors.',
        es: 'Cada semana repartimos premios entre los usuarios de JoTMBé. Comprueba si eres uno de los ganadores.'
      },
      image: 'https://www.tmb.cat/documents/20182/299710/acces-recompenses-CA-ES+%281%29.jpg/1e18bd41-8dd3-4ab3-257e-97306581c10c?t=1752755356714',
      link: 'https://www.tmb.cat/es/jotmbe/premios'
    },
    {
      id: 'promo-botiga',
      badge: { ca: 'Novetat', es: 'Novedad' },
      title: { ca: 'La botiga TMB', es: 'La tienda TMB' },
      desc: {
        ca: 'Descobreix la botiga oficial amb merchandising de TMB, ara també a l\'estació de Sagrada Família.',
        es: 'Descubre la tienda oficial con merchandising de TMB, ahora también en la estación de Sagrada Familia.'
      },
      image: 'https://www.tmb.cat/documents/20182/5d74a02e-cebb-9569-2799-e820c6278d47',
      link: 'https://www.tmb.cat/es/w/novetat-botiga-tmb'
    },
    {
      id: 'promo-t-metropolitana',
      badge: { ca: 'Tarifes', es: 'Tarifas' },
      title: { ca: 'T-metropolitana: descomptes per a residents', es: 'T-metropolitana: descuentos para residentes' },
      desc: {
        ca: 'Consulta les bonificacions i gestions disponibles per a la T-metropolitana.',
        es: 'Consulta las bonificaciones y gestiones disponibles para la T-metropolitana.'
      },
      image: 'https://album.mediaset.es/eimg/2024/04/05/la-t-metropolitana-el-nuevo-titulo-de-transporte-publico-en-barcelona-que-sustituye-a-la-tarjeta-ros_a20d.jpg?w=1200&h=900',
      link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-metropolitana'
    },
  ];

  function promoImageBlock(item) {
    return `<div class="tmb-promo-card-img"><img src="${item.image}" alt="" loading="lazy" draggable="false" onerror="this.parentElement.outerHTML='<div class=&quot;tmb-promo-card-img tmb-promo-card-img--placeholder&quot;>${ICONS.tag.replace(/"/g, '&quot;')}</div>'" /></div>`;
  }

  function promoCardHTML(item) {
    const l = lang();
    const badge = item.badge[l] || item.badge.ca;
    const title = item.title[l] || item.title.ca;
    const desc = item.desc[l] || item.desc.ca;
    return `
      <a class="tmb-promo-card" href="${item.link}" target="_blank" rel="noopener" draggable="false" data-id="${item.id}">
        ${promoImageBlock(item)}
        <div class="tmb-promo-card-body">
          <span class="tmb-promo-card-badge">${badge}</span>
          <h3 class="tmb-promo-card-title">${title}</h3>
          <p class="tmb-promo-card-desc">${desc}</p>
        </div>
      </a>`;
  }

  function renderPromotions() {
    return `
      <div class="tmb-promo-scroll" id="tmbPromoScroll">
        ${PROMO_DATA.map(promoCardHTML).join('')}
      </div>
      <div class="tmb-carousel-dots tmb-promo-dots" id="tmbPromoDots">
        ${PROMO_DATA.map((_, i) => `<span class="tmb-carousel-dot ${i === 0 ? 'tmb-carousel-dot--active' : ''}" data-dot="${i}"></span>`).join('')}
      </div>`;
  }

  /* ── Arrossegable amb ratolí, reaprofitant el mateix patró que "Et pot interessar" ── */
  function bindDragScroller(container, scrollSel, dotsSel) {
    const scroller = container.querySelector(scrollSel);
    if (!scroller) return;
    const cards = Array.from(scroller.children);
    const dots = container.querySelectorAll(`${dotsSel} .tmb-carousel-dot`);
    if (!cards.length) return;
    const draggingClass = `${scroller.className.split(' ')[0]}--dragging`;

    function cardStep() {
      const style = getComputedStyle(scroller);
      const gap = parseFloat(style.columnGap || style.gap) || 0;
      return cards[0].offsetWidth + gap;
    }

    function updateActive() {
      const idx = Math.round(scroller.scrollLeft / cardStep());
      const clamped = Math.max(0, Math.min(idx, dots.length - 1));
      dots.forEach((d, i) => d.classList.toggle('tmb-carousel-dot--active', i === clamped));
    }

    let scrollTimer = null;
    scroller.addEventListener('scroll', () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(updateActive, 60);
    }, { passive: true });

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const i = parseInt(dot.getAttribute('data-dot'), 10);
        scroller.scrollTo({ left: i * cardStep(), behavior: 'smooth' });
      });
    });

    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    function onWindowMove(e) {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      scroller.scrollLeft = startScroll - dx;
    }

    function onWindowUp() {
      if (!isDown) return;
      isDown = false;
      scroller.classList.remove(draggingClass);
      window.removeEventListener('pointermove', onWindowMove);
      window.removeEventListener('pointerup', onWindowUp);
      updateActive();
    }

    scroller.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      isDown = true;
      moved = false;
      startX = e.clientX;
      startScroll = scroller.scrollLeft;
      scroller.classList.add(draggingClass);
      window.addEventListener('pointermove', onWindowMove);
      window.addEventListener('pointerup', onWindowUp);
    });

    cards.forEach(card => {
      card.addEventListener('dragstart', (e) => e.preventDefault());
      card.addEventListener('click', (e) => {
        e.preventDefault();
        if (moved) return;
        const url = card.getAttribute('href');
        if (url) window.open(url, '_blank', 'noopener');
      });
    });

    updateActive();
  }

  /* ══════════════════ AGENDA D'ESDEVENIMENTS (contingut oficial noves-i-agenda) ══════════════════ */
  const EVENTS_DATA = [
    {
      id: 'event-pride',
      cat: { ca: 'Acció solidària', es: 'Acción solidaria' },
      title: { ca: 'TMB se suma a la celebració del Pride', es: 'TMB se suma a la celebración del Pride' },
      desc: {
        ca: 'L\'estació Universitat es vesteix dels colors de l\'orgull. Vine a viure la diversitat.',
        es: 'La estación Universitat se viste de los colores del orgullo. Ven a vivir la diversidad.'
      },
      dateLabel: { ca: 'Del 6 al 19 de juliol', es: 'Del 6 al 19 de julio' },
      place: { ca: 'Estació Universitat', es: 'Estación Universitat' },
      link: 'https://www.tmb.cat/es/w/agenda-pride-barcelona'
    },
    {
      id: 'event-naturalment',
      cat: { ca: 'Exposició', es: 'Exposición' },
      title: { ca: 'Exposició "Naturalment metropolitans"', es: 'Exposición "Naturalment metropolitans"' },
      desc: {
        ca: 'Descobreix l\'evolució de la xarxa de parcs de l\'àrea metropolitana.',
        es: 'Descubre la evolución de la red de parques del área metropolitana.'
      },
      dateLabel: { ca: 'Del 14 de maig al 22 de juliol', es: 'Del 14 de mayo al 22 de julio' },
      place: { ca: 'Espai Mercè Sala', es: 'Espacio Mercè Sala' },
      link: 'https://fundacio.tmb.cat/es/w/activitat-exposicio-naturalment-metropolitans'
    },
    {
      id: 'event-piano',
      cat: { ca: 'Música', es: 'Música' },
      title: { ca: 'Vine a tocar el piano a Diagonal!', es: '¡Ven a tocar el piano a Diagonal!' },
      desc: {
        ca: 'Acollim un piano de forma fixa i acostem la música als usuaris del metro.',
        es: 'Acogemos un piano de forma fija y acercamos la música a los usuarios del metro.'
      },
      dateLabel: { ca: 'Des del 23 de març', es: 'Desde el 23 de marzo' },
      place: { ca: 'Estació Diagonal', es: 'Estación Diagonal' },
      link: 'https://fundacio.tmb.cat/es/w/activitat-piano-metro-maria-canals'
    },
  ];

  const ALL_AGENDA_URL = 'https://www.tmb.cat/es/novedades-y-agenda';

  function agendaCardHTML(ev) {
    const l = lang();
    const cat = ev.cat[l] || ev.cat.ca;
    const title = ev.title[l] || ev.title.ca;
    const desc = ev.desc[l] || ev.desc.ca;
    const dateLabel = ev.dateLabel[l] || ev.dateLabel.ca;
    const place = ev.place[l] || ev.place.ca;
    return `
      <a class="tmb-agenda-card" href="${ev.link}" target="_blank" rel="noopener" data-id="${ev.id}">
        <span class="tmb-agenda-card-cat">${cat}</span>
        <h3 class="tmb-agenda-card-title">${title}</h3>
        <p class="tmb-agenda-card-desc">${desc}</p>
        <div class="tmb-agenda-card-meta">
          <span class="tmb-agenda-card-meta-item">${ICONS.calendar}${dateLabel}</span>
          <span class="tmb-agenda-card-meta-item">${ICONS.pin}${place}</span>
        </div>
      </a>`;
  }

  function renderAgenda() {
    return `<div class="tmb-agenda-list">${EVENTS_DATA.map(agendaCardHTML).join('')}</div>`;
  }

  /* ══════════════════ XARXES SOCIALS (perfils oficials, tmb.cat/es/redes-sociales) ══════════════════ */
  const SOCIAL_DATA = [
    { id: 'instagram', icon: SOCIAL_ICONS.instagram, name: 'Instagram', handle: '@tmb_bcn', link: 'https://www.instagram.com/tmb_bcn/?hl=es' },
    { id: 'x-corp', icon: SOCIAL_ICONS.x, name: 'X', handle: '@TMB_Barcelona', link: 'https://x.com/TMB_Barcelona' },
    { id: 'x-info', icon: SOCIAL_ICONS.x, name: t('X · Info servei', 'X · Info servicio'), handle: '@TMBinfo', link: 'https://twitter.com/tmbinfo?lang=es' },
    { id: 'tiktok', icon: SOCIAL_ICONS.tiktok, name: 'TikTok', handle: '@tmb_bcn', link: 'https://www.tiktok.com/@tmb_bcn' },
    { id: 'facebook', icon: SOCIAL_ICONS.facebook, name: 'Facebook', handle: 'TMB', link: 'https://www.facebook.com/TransportsMetropolitansdeBarcelona' },
    { id: 'youtube', icon: SOCIAL_ICONS.youtube, name: 'YouTube', handle: t('Canal TMB', 'Canal TMB'), link: 'https://www.youtube.com/user/CanalTMB' },
    { id: 'linkedin', icon: SOCIAL_ICONS.linkedin, name: 'LinkedIn', handle: 'TMB', link: 'https://www.linkedin.com/company/transports-metropolitans-barcelona-tmb/' },
  ];

  function socialCardHTML(s) {
    return `
      <a class="tmb-social-card" href="${s.link}" target="_blank" rel="noopener" data-id="${s.id}">
        <span class="tmb-social-card-icon">${s.icon}</span>
        <span class="tmb-social-card-name">${s.name}</span>
        <span class="tmb-social-card-handle">${s.handle}</span>
      </a>`;
  }

  function renderSocial() {
    return `<div class="tmb-social-grid">${SOCIAL_DATA.map(socialCardHTML).join('')}</div>`;
  }

  /* ══════════════════ CARRUSEL D'AVISOS (autoplay + drag) ══════════════════ */
  let carouselTimer = null;
  let carouselIndex = 0;

  function stopCarouselAutoplay() {
    if (carouselTimer) { clearInterval(carouselTimer); carouselTimer = null; }
  }

  function startCarouselAutoplay(api) {
    stopCarouselAutoplay();
    if (api.count <= 1) return;
    carouselTimer = setInterval(() => {
      api.goTo(carouselIndex + 1);
    }, 4500);
  }

  function renderAlertsCarousel() {
    const alerts = (window.RealtimeModule ? RealtimeModule.getActiveAlerts() : []).slice(0, 6);

    if (!alerts.length) {
      return `
        <div class="tmb-alert-empty">
          <span class="tmb-alert-empty-icon">${ICONS.bell}</span>
          <span>${t('No hi ha avisos actius ara mateix', 'No hay avisos activos ahora mismo')}</span>
        </div>`;
    }

    return `
      <div class="tmb-carousel-wrap">
        <button class="tmb-carousel-nav tmb-carousel-nav--prev" id="tmbAlertsPrev" type="button" aria-label="${t('Anterior', 'Anterior')}">${ICONS.chevronLeft}</button>
        <div class="tmb-carousel-viewport" id="tmbAlertsViewport">
          <div class="tmb-alerts-carousel" id="tmbAlertsCarousel">
            ${alerts.map(a => `
              <div class="tmb-alert-card" data-line="${a.lineLabel}" style="--alert-color:${a.lineColor}">
                <span class="tmb-alert-card-line" style="background:${a.lineColor}">${a.lineLabel}</span>
                <span class="tmb-alert-card-title">${a.title}</span>
                <span class="tmb-alert-card-body">${a.body}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <button class="tmb-carousel-nav tmb-carousel-nav--next" id="tmbAlertsNext" type="button" aria-label="${t('Següent', 'Siguiente')}">${ICONS.chevronRight}</button>
      </div>
      <div class="tmb-carousel-dots" id="tmbAlertsDots">
        ${alerts.map((_, i) => `<span class="tmb-carousel-dot ${i === 0 ? 'tmb-carousel-dot--active' : ''}" data-dot="${i}"></span>`).join('')}
      </div>`;
  }

  /* ══════════════════ NOTÍCIES ══════════════════ */
  function newsCardHTML(n) {
    const l = lang();
    const title = n.title[l] || n.title.ca;
    const tag = n.tag[l] || n.tag.ca;
    const hasImg = !!(n.image && n.image.trim());

    return `
      <a class="tmb-news-card" href="${n.link}" target="_blank" rel="noopener">
        <div class="tmb-news-card-img ${hasImg ? '' : 'tmb-news-card-img--placeholder'}">
          ${hasImg ? `<img src="${n.image}" alt="" loading="lazy" />` : ICONS.newspaper}
        </div>
        <div class="tmb-news-card-body">
          <span class="tmb-news-card-tag">${tag}</span>
          <span class="tmb-news-card-title">${title}</span>
        </div>
      </a>`;
  }

  function renderNews() {
    return `
      <div class="tmb-news-grid">
        ${NEWS_DATA.map(newsCardHTML).join('')}
      </div>`;
  }

  /* ══════════════════ BITLLETS (overlay a pantalla completa) ══════════════════ */
  const TICKETS_PLACEHOLDER_ICON = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 9a2 2 0 0 0 0 4v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3a2 2 0 0 1 0-4V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/>
      <line x1="13" y1="5" x2="13" y2="19" stroke-dasharray="2 2"/>
    </svg>`;

  function ticketImageBlock(tkt, name) {
    const hasImage = !!(tkt.image && tkt.image.trim());
    if (hasImage) {
      return `<div class="ticket-card-img"><img src="${tkt.image}" alt="${name}" loading="lazy" onerror="this.parentElement.outerHTML='<div class=&quot;ticket-card-img ticket-card-img--placeholder&quot;>${TICKETS_PLACEHOLDER_ICON.replace(/"/g, '&quot;')}</div>'" /></div>`;
    }
    return `<div class="ticket-card-img ticket-card-img--placeholder">${TICKETS_PLACEHOLDER_ICON}</div>`;
  }

  function ticketCardHTML(tkt) {
    const l = lang();
    const name = tkt.name[l] || tkt.name.ca;
    const desc = tkt.desc[l] || tkt.desc.ca;
    const hasLink = !!(tkt.link && tkt.link.trim());

    return `
      <article class="ticket-card" data-id="${tkt.id}">
        ${ticketImageBlock(tkt, name)}
        <div class="ticket-card-body">
          <h3 class="ticket-card-title">${name}</h3>
          <p class="ticket-card-desc">${desc}</p>
          ${tkt.tags && tkt.tags.length ? `
            <div class="ticket-card-tags">
              ${tkt.tags.map(tag => `<span class="ticket-tag">${tag}</span>`).join('')}
            </div>` : ''}
          <div class="ticket-card-footer">
            <span class="ticket-card-price">${tkt.price}</span>
            <button class="ticket-buy-btn ${hasLink ? '' : 'ticket-buy-btn--disabled'}"
                    data-link="${hasLink ? tkt.link : ''}"
                    ${hasLink ? '' : 'disabled'}
                    type="button">
              ${hasLink ? t('Compra ara', 'Comprar ahora') : t('Pròximament', 'Próximamente')}
            </button>
          </div>
        </div>
      </article>`;
  }

  function renderTicketsFeed() {
    const data = window.TICKETS_DATA || [];
    if (!data.length) {
      return `<p class="tickets-empty">${t('No hi ha bitllets disponibles.', 'No hay billetes disponibles.')}</p>`;
    }
    return `<div class="tickets-feed">${data.map(ticketCardHTML).join('')}</div>`;
  }

  function ensureTicketsOverlay() {
    let overlay = document.getElementById('tmbTicketsOverlay');
    if (overlay) return overlay;

    overlay = document.createElement('div');
    overlay.className = 'tmb-tickets-overlay';
    overlay.id = 'tmbTicketsOverlay';
    document.body.appendChild(overlay);
    return overlay;
  }

  function renderTicketsOverlay() {
    const overlay = ensureTicketsOverlay();
    overlay.innerHTML = `
      <div class="tmb-tickets-overlay-header">
        <h1 class="tmb-tickets-overlay-title">${t('Bitllets', 'Billetes')}</h1>
        <button class="tmb-tickets-overlay-close" id="tmbTicketsClose" type="button" aria-label="${t('Tancar', 'Cerrar')}">${ICONS.close}</button>
      </div>
      <p class="tmb-tickets-overlay-sub">${t("Tria el bitllet que necessites i compra'l online", 'Elige el billete que necesites y cómpralo online')}</p>
      <div class="tmb-tickets-overlay-body">
        ${renderTicketsFeed()}
      </div>`;

    overlay.querySelector('#tmbTicketsClose').addEventListener('click', closeTicketsOverlay);
    overlay.querySelectorAll('.ticket-buy-btn[data-link]:not([disabled])').forEach(btn => {
      btn.addEventListener('click', () => {
        const url = btn.getAttribute('data-link');
        if (url) window.open(url, '_blank', 'noopener');
      });
    });
  }

  function openTicketsOverlay() {
    renderTicketsOverlay();
    const overlay = document.getElementById('tmbTicketsOverlay');
    requestAnimationFrame(() => overlay.classList.add('tmb-tickets-overlay--open'));
    document.body.style.overflow = 'hidden';
  }

  function closeTicketsOverlay() {
    const overlay = document.getElementById('tmbTicketsOverlay');
    if (!overlay) return;
    overlay.classList.remove('tmb-tickets-overlay--open');
    document.body.style.overflow = '';
  }

  /* ══════════════════ RENDER PRINCIPAL ══════════════════ */
  function render() {
    const container = document.getElementById('tmbHubContainer');
    if (!container) return;

    stopCarouselAutoplay();
    carouselIndex = 0;

    container.innerHTML = `
      <section class="tmb-hub-section tmb-hub-section--shortcuts">
        ${renderShortcuts()}
      </section>

      <section class="tmb-hub-section">
        <div class="tmb-hub-section-header">
          <span class="tmb-hub-section-icon">${ICONS.bell}</span>
          <h2 class="tmb-hub-section-title">${t('Avisos destacats', 'Avisos destacados')}</h2>
        </div>
        ${renderAlertsCarousel()}
      </section>

      <section class="tmb-hub-section">
        <div class="tmb-hub-section-header">
          <span class="tmb-hub-section-icon">${ICONS.newspaper}</span>
          <h2 class="tmb-hub-section-title">${t('Notícies TMB', 'Noticias TMB')}</h2>
          <a class="tmb-hub-section-link" href="${ALL_NEWS_URL}" target="_blank" rel="noopener">
            ${t('Totes', 'Todas')} ${ICONS.external}
          </a>
        </div>
        ${renderNews()}
      </section>

      <section class="tmb-hub-section">
        <div class="tmb-hub-section-header">
          <span class="tmb-hub-section-icon">${ICONS.info}</span>
          <h2 class="tmb-hub-section-title">${t('Et pot interessar', 'Te puede interesar')}</h2>
        </div>
        <p class="tmb-hub-section-sub">${t(
          "Tota la informació que necessites sobre els bitllets per viatjar en transport públic a Barcelona i per l'àrea metropolitana.",
          'Toda la información que necesitas sobre los billetes para viajar en transporte público en Barcelona y por el área metropolitana.'
        )}</p>
        ${renderInterestCarousel()}
      </section>

      <section class="tmb-hub-section">
        <div class="tmb-hub-section-header">
          <span class="tmb-hub-section-icon">${ICONS.tag}</span>
          <h2 class="tmb-hub-section-title">${t('Promocions destacades', 'Promociones destacadas')}</h2>
        </div>
        ${renderPromotions()}
      </section>

      <section class="tmb-hub-section">
        <div class="tmb-hub-section-header">
          <span class="tmb-hub-section-icon">${ICONS.calendar}</span>
          <h2 class="tmb-hub-section-title">${t("Agenda d'esdeveniments", 'Agenda de eventos')}</h2>
          <a class="tmb-hub-section-link" href="${ALL_AGENDA_URL}" target="_blank" rel="noopener">
            ${t('Totes', 'Todas')} ${ICONS.external}
          </a>
        </div>
        ${renderAgenda()}
      </section>

      <section class="tmb-hub-section">
        <div class="tmb-hub-section-header">
          <span class="tmb-hub-section-icon">${ICONS.share}</span>
          <h2 class="tmb-hub-section-title">${t('Xarxes socials', 'Redes sociales')}</h2>
        </div>
        ${renderSocial()}
      </section>
    `;

    bindEvents(container);
  }

  function bindEvents(container) {
    // Accessos directes
    container.querySelectorAll('.tmb-shortcut-btn').forEach(btn => {
      const id = btn.getAttribute('data-shortcut');
      const item = getShortcuts().find(s => s.id === id);
      if (item) btn.addEventListener('click', item.action);
    });

    // Carrusel d'avisos
    const viewport = container.querySelector('#tmbAlertsViewport');
    const track = container.querySelector('#tmbAlertsCarousel');
    if (track && viewport) {
      const count = track.children.length;
      const dots = container.querySelectorAll('.tmb-carousel-dot');

      function updateDots(i) {
        dots.forEach((d, idx) => d.classList.toggle('tmb-carousel-dot--active', idx === i));
      }

      function applyTransform(animated) {
        track.style.transition = animated ? 'transform .42s cubic-bezier(.22,.61,.36,1)' : 'none';
        track.style.transform = `translateX(-${carouselIndex * 100}%)`;
      }

      function goTo(i) {
        carouselIndex = (i + count) % count;
        applyTransform(true);
        updateDots(carouselIndex);
      }

      const api = { count, goTo };

      const prevBtn = container.querySelector('#tmbAlertsPrev');
      const nextBtn = container.querySelector('#tmbAlertsNext');
      if (prevBtn) prevBtn.addEventListener('click', () => { goTo(carouselIndex - 1); restartAutoplay(); });
      if (nextBtn) nextBtn.addEventListener('click', () => { goTo(carouselIndex + 1); restartAutoplay(); });

      dots.forEach(dot => {
        dot.addEventListener('click', () => {
          goTo(parseInt(dot.getAttribute('data-dot'), 10));
          restartAutoplay();
        });
      });

      function restartAutoplay() {
        stopCarouselAutoplay();
        startCarouselAutoplay(api);
      }

      /* ── Arrossega/swipe (mòbil i ratolí) ── */
      let dragging = false;
      let dragStartX = 0;
      let dragDeltaX = 0;
      let viewportWidth = viewport.offsetWidth || 1;
      let wasDragged = false;

      function onDragStart(clientX) {
        dragging = true;
        wasDragged = false;
        dragStartX = clientX;
        dragDeltaX = 0;
        viewportWidth = viewport.offsetWidth || 1;
        stopCarouselAutoplay();
        track.style.transition = 'none';
      }

      function onDragMove(clientX) {
        if (!dragging) return;
        dragDeltaX = clientX - dragStartX;
        if (Math.abs(dragDeltaX) > 4) wasDragged = true;
        const basePct = -carouselIndex * 100;
        const deltaPct = (dragDeltaX / viewportWidth) * 100;
        track.style.transform = `translateX(${basePct + deltaPct}%)`;
      }

      function onDragEnd() {
        if (!dragging) return;
        dragging = false;
        const threshold = viewportWidth * 0.18;
        if (dragDeltaX > threshold) {
          goTo(carouselIndex - 1);
        } else if (dragDeltaX < -threshold) {
          goTo(carouselIndex + 1);
        } else {
          applyTransform(true);
        }
        restartAutoplay();
      }

      track.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        onDragStart(e.clientX);
        track.setPointerCapture && track.setPointerCapture(e.pointerId);
      });
      track.addEventListener('pointermove', (e) => { if (dragging) onDragMove(e.clientX); });
      track.addEventListener('pointerup', onDragEnd);
      track.addEventListener('pointercancel', onDragEnd);
      track.addEventListener('pointerleave', () => { if (dragging) onDragEnd(); });

      // Evita que un drag dispari el click de la targeta
      container.querySelectorAll('.tmb-alert-card').forEach(card => {
        card.addEventListener('click', () => {
          if (wasDragged) return;
          if (window.UIModule) UIModule.navigateTo('alerts');
        });
      });

      window.addEventListener('resize', () => { viewportWidth = viewport.offsetWidth || 1; applyTransform(false); });

      applyTransform(false);
      startCarouselAutoplay(api);
    }

    bindInterestCarousel(container);
    bindDragScroller(container, '#tmbPromoScroll', '#tmbPromoDots');
  }

  function onViewLeft() {
    stopCarouselAutoplay();
  }

  return { render, onViewLeft, openTicketsOverlay, closeTicketsOverlay };
})();

window.TmbHubModule = TmbHubModule;