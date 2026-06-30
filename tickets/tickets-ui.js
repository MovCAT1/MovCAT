/* ════════════════════════════════════════════════════════════════
   TICKETS-UI.JS — Pantalla "Bitllets" (feed de targetes amb "Comprar ara")
   ════════════════════════════════════════════════════════════════ */

const TicketsModule = (() => {

  function lang() {
    return (window.I18N && I18N.getLang) ? I18N.getLang() : 'ca';
  }

  const PLACEHOLDER_ICON = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 9a2 2 0 0 0 0 4v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3a2 2 0 0 1 0-4V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/>
      <line x1="13" y1="5" x2="13" y2="19" stroke-dasharray="2 2"/>
    </svg>`;

  function imageBlock(t, name) {
    const hasImage = !!(t.image && t.image.trim());
    if (hasImage) {
      // object-fit: contain a la CSS evita que la imatge es talli;
      // el fons del contenidor omple l'espai sobrant.
      return `<div class="ticket-card-img"><img src="${t.image}" alt="${name}" loading="lazy" onerror="this.parentElement.outerHTML='<div class=&quot;ticket-card-img ticket-card-img--placeholder&quot;>${PLACEHOLDER_ICON.replace(/"/g, '&quot;')}</div>'" /></div>`;
    }
    return `<div class="ticket-card-img ticket-card-img--placeholder">${PLACEHOLDER_ICON}</div>`;
  }

  function cardHTML(t) {
    const l = lang();
    const name  = t.name[l]  || t.name.ca;
    const desc  = t.desc[l]  || t.desc.ca;
    const hasLink = !!(t.link && t.link.trim());

    return `
      <article class="ticket-card" data-id="${t.id}">
        ${imageBlock(t, name)}
        <div class="ticket-card-body">
          <h3 class="ticket-card-title">${name}</h3>
          <p class="ticket-card-desc">${desc}</p>
          ${t.tags && t.tags.length ? `
            <div class="ticket-card-tags">
              ${t.tags.map(tag => `<span class="ticket-tag">${tag}</span>`).join('')}
            </div>` : ''}
          <div class="ticket-card-footer">
            <span class="ticket-card-price">${t.price}</span>
            <button class="ticket-buy-btn ${hasLink ? '' : 'ticket-buy-btn--disabled'}"
                    data-link="${hasLink ? t.link : ''}"
                    ${hasLink ? '' : 'disabled'}
                    type="button">
              ${hasLink
                ? (l === 'es' ? 'Comprar ahora' : 'Compra ara')
                : (l === 'es' ? 'Próximamente' : 'Pròximament')}
            </button>
          </div>
        </div>
      </article>`;
  }

  function render() {
    const container = document.getElementById('ticketsFeedContainer');
    if (!container) return;

    const data = window.TICKETS_DATA || [];
    if (!data.length) {
      container.innerHTML = `<p class="tickets-empty">${lang() === 'es' ? 'No hay billetes disponibles.' : 'No hi ha bitllets disponibles.'}</p>`;
      return;
    }

    container.innerHTML = data.map(cardHTML).join('');

    container.querySelectorAll('.ticket-buy-btn[data-link]:not([disabled])').forEach(btn => {
      btn.addEventListener('click', () => {
        const url = btn.getAttribute('data-link');
        if (url) window.open(url, '_blank', 'noopener');
      });
    });
  }

  return { render };
})();

window.TicketsModule = TicketsModule;