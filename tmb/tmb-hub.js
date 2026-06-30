/* ════════════════════════════════════════════════════════════════
   TMB-HUB.JS   Pantalla "TMB" (abans "Bitllets")
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
      image: '',
      link: 'https://www.tmb.cat/es/tour-de-france',
    },
    {
      id: 'news-verdaguer',
      title: { ca: 'Tancament de Verdaguer i altres afectacions per obres de millora', es: 'Cierre de Verdaguer y otras afectaciones por obras de mejora' },
      tag: { ca: 'Obres', es: 'Obras' },
      image: '',
      link: 'https://www.tmb.cat/es/conoce-tmb/mejoras-red-transporte/metro/corte-l4-2026',
    },
    {
      id: 'news-pride',
      title: { ca: 'TMB se suma a la celebració del Pride', es: 'TMB se suma a la celebración del Pride' },
      tag: { ca: 'Agenda', es: 'Agenda' },
      image: '',
      link: 'https://www.tmb.cat/es/w/agenda-pride-barcelona',
    },
    {
      id: 'news-platges',
      title: { ca: 'Millores en el servei de bus a la zona de platges', es: 'Mejoras en el servicio de bus en la zona de playas' },
      tag: { ca: 'Servei', es: 'Servicio' },
      image: '',
      link: 'https://www.tmb.cat/es/-/millores-al-servei-de-bus',
    },
    {
      id: 'news-t-mobilitat',
      title: { ca: 'Amb la T-mobilitat, viatja de forma intel·ligent en transport públic', es: 'Con la T-mobilitat, viaja de forma inteligente en transporte público' },
      tag: { ca: 'T-mobilitat', es: 'T-mobilitat' },
      image: '',
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
      link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/zonas-tarifarias'
    },














    {
      id: 'int-condicions',
      title: { ca: 'Condicions d\'ús dels bitllets', es: 'Condiciones de uso de los billetes' },
      desc: {
        ca: 'Caducitat, bescanvi i totes les condicions d\'ús dels títols de viatge.',
        es: 'Caducidad, canje y todas las condiciones de uso de los títulos de viaje.'
      },
      image: 'https://www.tmb.cat/documents/20182/881600/subhome-bitllets-condicons-us.jpg/ee6f6b86-6e04-43f8-a1c4-4377bcd92e5f?t=1733911617553',
      link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/condiciones-de-uso'
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
    return `<div class="tmb-interest-card-img"><img src="${item.image}" alt="" loading="lazy" onerror="this.parentElement.outerHTML='<div class=&quot;tmb-interest-card-img tmb-interest-card-img--placeholder&quot;>${ICONS.info.replace(/"/g, '&quot;')}</div>'" /></div>`;
  }

  function interestCardHTML(item) {
    const l = lang();
    const title = item.title[l] || item.title.ca;
    const desc = item.desc[l] || item.desc.ca;
    return `
      <a class="tmb-interest-card" href="${item.link}" target="_blank" rel="noopener" data-id="${item.id}">
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

    /* Arrossegar amb ratolí (el tàctil ja fa scroll natiu) */
    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    scroller.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'touch') return;
      isDown = true;
      moved = false;
      startX = e.clientX;
      startScroll = scroller.scrollLeft;
      scroller.classList.add('tmb-interest-scroll--dragging');
      scroller.setPointerCapture && scroller.setPointerCapture(e.pointerId);
    });

    scroller.addEventListener('pointermove', (e) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      scroller.scrollLeft = startScroll - dx;
    });

    function endDrag() {
      if (!isDown) return;
      isDown = false;
      scroller.classList.remove('tmb-interest-scroll--dragging');
      updateActive();
    }
    scroller.addEventListener('pointerup', endDrag);
    scroller.addEventListener('pointercancel', endDrag);
    scroller.addEventListener('pointerleave', () => { if (isDown) endDrag(); });

    // Evita que un drag obri l'enllaç de la targeta
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        if (moved) e.preventDefault();
      });
    });

    updateActive();
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
  }

  function onViewLeft() {
    stopCarouselAutoplay();
  }

  return { render, onViewLeft, openTicketsOverlay, closeTicketsOverlay };
})();

window.TmbHubModule = TmbHubModule;