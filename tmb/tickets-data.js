/* ════════════════════════════════════════════════════════════════
   TICKETS-DATA.JS
   Edita aquest array per afegir, treure o canviar bitllets.
   - link: posa aquí la URL de compra (Atrápalo, TMB, etc.)
           si el deixes buit ('') el botó es desactiva i posa "Pròximament".
   ════════════════════════════════════════════════════════════════ */

const TICKETS_DATA = [
  {
    id: 't-usual',
    name: { ca: 'T-usual', es: 'T-usual' },
    desc: {
      ca: 'Títol personal i intransferible per a un nombre il·limitat de viatges durant 30 dies consecutius des de la primera validació. Vàlida a Aeroport T1 i T2 (L9 Sud).',
      es: 'Título personal e intransferible para un número ilimitado de viajes durante 30 días consecutivos desde la primera validación. Válida en Aeroport T1 y T2 (L9 Sud).'
    },
    tags: ['Il·limitat', 'Personal', 'Mensual', 'Aeroport'],
    price: 'Des de 22,80 €',
    image: 'https://estaticos-cdn.prensaiberica.es/clip/8dbe80d4-c794-411f-8ff2-89768f10bbb7_16-9-discover-aspect-ratio_default_0.jpg',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-usual'
  },
  {
    id: 't-casual',
    name: { ca: 'T-casual', es: 'T-casual' },
    desc: {
      ca: 'Títol unipersonal per a 10 viatges fins al pròxim canvi de tarifes. No vàlida a Aeroport T1 i T2 (L9 Sud).',
      es: 'Título unipersonal para 10 viajes hasta el próximo cambio de tarifas. No válida en Aeroport T1 y T2 (L9 Sud).'
    },
    tags: ['10 viatges', 'Unipersonal'],
    price: 'Des de 13 €',
    image: 'https://mesto-barcelona.cz/data/uploads/tcasual-barcelona.png',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-casual'
  },
  {
    id: 'billete-sencillo',
    name: { ca: 'Bitllet senzill', es: 'Billete sencillo' },
    desc: {
      ca: 'Vàlid per a metro, bus i funicular de Montjuïc.',
      es: 'Válido para metro, bus y funicular de Montjuïc.'
    },
    tags: ['1 viatge', 'Unipersonal'],
    price: '2,90 €',
    image: 'https://cloud10.todocoleccion.online/coleccionismo-billetes-transporte/tc/2025/09/27/15/601890832.jpg',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/billete-sencillo'
  },
  {
    id: 'billete-aeropuerto',
    name: { ca: 'Bitllet aeroport', es: 'Billete aeropuerto' },
    desc: {
      ca: 'Un viatge en metro. Inclou les estacions Aeroport T1 i Aeroport T2.',
      es: 'Un viaje en metro. Incluye las estaciones Aeroport T1 y Aeroport T2.'
    },
    tags: ['1 viatge', 'Aeroport'],
    price: '5,90 €',
    image: 'https://i.colnect.net/f/3493/714/Bitllet-Aeroport.jpg',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/billete-aeropuerto'
  },
  {
    id: 't-grup',
    name: { ca: 'T-grup', es: 'T-grup' },
    desc: {
      ca: 'Títol multipersonal per a 70 viatges durant 30 dies consecutius des de la primera validació. No vàlida a Aeroport T1 i T2 (L9 Sud).',
      es: 'Título multipersonal para 70 viajes durante 30 días consecutivos desde la primera validación. No válida en Aeroport T1 y T2 (L9 Sud).'
    },
    tags: ['70 viatges', 'Multipersonal', 'Mensual'],
    price: 'Des de 91 €',
    image: 'https://www.barcelona-travelguide.com/images/practical/T_grup.jpg',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-grup'
  },
  {
    id: 't-4',
    name: { ca: 'T-4', es: 'T-4' },
    desc: {
      ca: 'Títol personal amb 10 viatges per a persones amb la T-metropolitana targeta rosa reduïda.',
      es: 'Título personal con 10 viajes para personas con la T-metropolitana tarjeta rosa reducida.'
    },
    tags: ['10 viatges', 'Personal', 'Gent gran', 'Discapacitat', 'Aeroport'],
    price: '2,25 €',
    image: 'https://imagenes.esdiario.com/files/vertical_image_mobile/uploads/2025/08/18/68a25a4f918b2.jpeg',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-4'
  },
  {
    id: 't-jove',
    name: { ca: 'T-jove', es: 'T-jove' },
    desc: {
      ca: 'Per a menors de 30 anys. Viatges il·limitats entre totes les corones tarifàries durant 90 dies consecutius.',
      es: 'Para menores de 30 años. Viajes ilimitados entre todas las coronas tarifarias durante 90 días consecutivos.'
    },
    tags: ['Il·limitat', 'Personal', 'Trimestral', 'Joves', 'Aeroport'],
    price: '45,50 €',
    image: 'https://www.fgc.cat/wp-content/uploads/2021/10/T-jove.jpg',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-jove'
  },
  {
    id: 't-16',
    name: { ca: 'T-16', es: 'T-16' },
    desc: {
      ca: 'Títol personal i gratuït per a nens i joves de 4 a 16 anys. Viatges il·limitats dins l\'àmbit tarifari d\'emissió.',
      es: 'Título personal y gratuito para niños y jóvenes de 4 a 16 años. Viajes ilimitados dentro del ámbito tarifario de emisión.'
    },
    tags: ['Il·limitat', 'Personal', 'Joves', 'Discapacitat'],
    price: '0 €',
    image: 'https://www.fgc.cat/wp-content/uploads/2017/11/t-16.png',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-16'
  },
  {
    id: 't-familiar',
    name: { ca: 'T-familiar', es: 'T-familiar' },
    desc: {
      ca: 'Títol multipersonal per a 8 viatges en 30 dies consecutius des de la primera validació. No vàlida a Aeroport T1 i T2 (L9 Sud).',
      es: 'Título multipersonal para 8 viajes en 30 días consecutivos desde la primera validación. No válida en Aeroport T1 y T2 (L9 Sud).'
    },
    tags: ['8 viatges', 'Multipersonal', 'Mensual'],
    price: 'Des de 11,50 €',
    image: 'https://blog.apartmentbarcelona.com/wp-content/uploads/2023/02/T_familiar.png',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-familiar'
  },
  {
    id: 't-usual-fmfn-general',
    name: { ca: 'T-usual FM/FN general', es: 'T-usual FM/FN general' },
    desc: {
      ca: 'Viatges il·limitats 30 dies consecutius per a famílies monoparentals o nombroses de categoria general.',
      es: 'Viajes ilimitados 30 días consecutivos para familias monoparentales o numerosas de categoría general.'
    },
    tags: ['Il·limitat', 'Personal', 'Mensual', 'FM/FN', 'Aeroport'],
    price: 'Des de 18,20 €',
    image: 'https://blog.apartmentbarcelona.com/wp-content/uploads/2023/02/T_usual_FM_FN_general.jpg.png',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-usual-general'
  },
  {
    id: 't-usual-fmfn-especial',
    name: { ca: 'T-usual FM/FN especial', es: 'T-usual FM/FN especial' },
    desc: {
      ca: 'Viatges il·limitats 30 dies consecutius per a famílies monoparentals o nombroses de categoria especial.',
      es: 'Viajes ilimitados 30 días consecutivos para familias monoparentales o numerosas de categoría especial.'
    },
    tags: ['Il·limitat', 'Personal', 'Mensual', 'FM/FN', 'Aeroport'],
    price: 'Des de 11,40 €',
    image: 'https://blog.apartmentbarcelona.com/wp-content/uploads/2023/02/T_usual_FM_FN_especial.png',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-usual-especial'
  },
  {
    id: 't-70-90-fmfn-general',
    name: { ca: 'T-70/90 FM/FN general', es: 'T-70/90 FM/FN general' },
    desc: {
      ca: 'Títol multipersonal de 70 viatges durant 90 dies consecutius per a famílies monoparentals o nombroses de categoria general.',
      es: 'Título multipersonal de 70 viajes durante 90 días consecutivos para familias monoparentales o numerosas de categoría general.'
    },
    tags: ['70 viatges', 'Multipersonal', 'Trimestral', 'FM/FN', 'Aeroport'],
    price: 'Des de 36,40 €',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8P0a3i4NuwN28lscLFi7ZMOqA-IRufxQLA&s',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-70-90-general'
  },
  {
    id: 't-70-90-fmfn-especial',
    name: { ca: 'T-70/90 FM/FN especial', es: 'T-70/90 FM/FN especial' },
    desc: {
      ca: 'Títol multipersonal de 70 viatges durant 90 dies consecutius per a famílies monoparentals o nombroses de categoria especial.',
      es: 'Título multipersonal de 70 viajes durante 90 días consecutivos para familias monoparentales o numerosas de categoría especial.'
    },
    tags: ['70 viatges', 'Multipersonal', 'Trimestral', 'FM/FN', 'Aeroport'],
    price: 'Des de 22,75 €',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8P0a3i4NuwN28lscLFi7ZMOqA-IRufxQLA&s',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-70-90-especial'
  },
  {
    id: 't-jove-fmfn-general',
    name: { ca: 'T-jove FM/FN general', es: 'T-jove FM/FN general' },
    desc: {
      ca: 'Per a menors de 30 anys de famílies monoparentals o nombroses de categoria general. Viatges il·limitats 90 dies.',
      es: 'Para menores de 30 años de familias monoparentales o numerosas de categoría general. Viajes ilimitados 90 días.'
    },
    tags: ['Il·limitat', 'Personal', 'Trimestral', 'Joves', 'FM/FN', 'Aeroport'],
    price: '36,40 €',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOJsVkJzKIhBa7hdzO5GUGOHSqP1e1nzkWYg&s',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-jove-general'
  },
  {
    id: 't-jove-fmfn-especial',
    name: { ca: 'T-jove FM/FN especial', es: 'T-jove FM/FN especial' },
    desc: {
      ca: 'Per a menors de 30 anys de famílies monoparentals o nombroses de categoria especial. Viatges il·limitats 90 dies.',
      es: 'Para menores de 30 años de familias monoparentales o numerosas de categoría especial. Viajes ilimitados 90 días.'
    },
    tags: ['Il·limitat', 'Personal', 'Trimestral', 'Joves', 'FM/FN', 'Aeroport'],
    price: '22,75 €',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOJsVkJzKIhBa7hdzO5GUGOHSqP1e1nzkWYg&s',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-jove-especial'
  },
  {
    id: 't-usual-bonificada',
    name: { ca: 'T-usual bonificada', es: 'T-usual bonificada' },
    desc: {
      ca: 'Viatges il·limitats 30 dies consecutius per a persones que compleixin determinats requisits.',
      es: 'Viajes ilimitados 30 días consecutivos para personas que cumplan determinados requisitos.'
    },
    tags: ['Il·limitat', 'Personal', 'Mensual', 'Aeroport'],
    price: '5,65 €',
    image: 'https://loving-travel.com/wp-content/uploads/2023/03/T_usual.png',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-usual-bonificada'
  },
  {
    id: 't-dia',
    name: { ca: 'T-dia', es: 'T-dia' },
    desc: {
      ca: 'Títol unipersonal per a viatges il·limitats durant 24 hores des de la primera validació. Permet anada i tornada des d\'Aeroport T1 i T2 (L9 Sud).',
      es: 'Título unipersonal para viajes ilimitados durante 24 horas desde la primera validación. Permite ida y vuelta desde Aeroport T1 y T2 (L9 Sud).'
    },
    tags: ['Il·limitat', 'Unipersonal', 'Diari', 'Aeroport'],
    price: 'Des de 12 €',
    image: 'https://www.mibauldeblogs.com/wp-content/uploads/2023/10/Tarjeta-T-dia-Barcelona.jpg',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-dia'
  },
  {
    id: 't-metropolitana-rosa',
    name: { ca: 'T-metropolitana Targeta rosa gratuïta', es: 'T-metropolitana Tarjeta rosa gratuita' },
    desc: {
      ca: 'Viatges il·limitats per a persones que compleixin requisits d\'ingressos i edat o discapacitat.',
      es: 'Viajes ilimitados para personas que cumplan requisitos de ingresos y edad o discapacidad.'
    },
    tags: ['Il·limitat', 'Personal', 'Gent gran', 'Discapacitat', 'Aeroport'],
    price: '0 €',
    image: 'https://imagenes.esdiario.com/files/vertical_image_mobile/uploads/2025/08/18/68a25a4f918b2.jpeg',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-metropolitana-tarjeta-rosa-gratuita'
  },
  {
    id: 't-metropolitana-acompanyant',
    name: { ca: 'T-metropolitana Pas d\'acompanyant', es: 'T-metropolitana Pase de acompañante' },
    desc: {
      ca: 'Pas gratuït per a acompanyants de persones que no poden viatjar soles a causa d\'una discapacitat.',
      es: 'Pase gratuito para acompañantes de personas que no pueden viajar solas debido a una discapacidad.'
    },
    tags: ['Il·limitat', 'Personal', 'Discapacitat', 'Aeroport'],
    price: '0 €',
    image: 'https://i.ytimg.com/vi/65SlrsOQbeI/maxresdefault.jpg',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-metropolitana-pase-acompanante'
  },
  {
    id: 't-escolar',
    name: { ca: 'T-escolar', es: 'T-escolar' },
    desc: {
      ca: 'Dos viatges per a desplaçaments amb grups escolars. Vàlid per a metro, bus i funicular de Montjuïc.',
      es: 'Dos viajes para desplazamientos con grupos escolares. Válido para metro, bus y funicular de Montjuïc.'
    },
    tags: ['2 viatges', 'Unipersonal', 'Nens'],
    price: '1,10 €',
    image: 'https://www.tmb.cat/documents/20182/613034/Usual+624.png/981ab99c-a1f3-9e0a-000c-88c990cc33ad?t=1733911619016',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-escolar'
  },
  {
    id: 't-verda',
    name: { ca: 'T-verda', es: 'T-verda' },
    desc: {
      ca: 'Transport gratuït durant tres anys per a ciutadans de l\'àrea metropolitana que donin de baixa i desballestin un vehicle sense etiqueta ambiental.',
      es: 'Transporte gratuito durante tres años para ciudadanos del área metropolitana que den de baja y desguacen un vehículo sin etiqueta ambiental.'
    },
    tags: ['Il·limitat', 'Personal', 'Aeroport'],
    price: '0 €',
    image: 'https://a0.cdnfan.com/images/M/8/7/6/5/tarjeta-verde-t-verde-barcelona_hd_95536.jpg',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-verda'
  },
  {
    id: 'billete-sencillo-bus',
    name: { ca: 'Bitllet senzill bus', es: 'Billete sencillo bus' },
    desc: {
      ca: 'Bitllet digital per a un únic viatge en el bus on es compra.',
      es: 'Billete digital para un único viaje en el bus donde se compra.'
    },
    tags: ['1 viatge', 'Unipersonal'],
    price: '2,90 €',
    image: 'https://www.mibauldeblogs.com/wp-content/uploads/2024/01/Billete-Sencillo-Barcelona.png',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/bus'
  },
  {
    id: 't-acompanyament',
    name: { ca: 'T-Acompanyament', es: 'T-Acompañamiento' },
    desc: {
      ca: 'Permet acompanyar una persona amb necessitats especials sense pagar els desplaçaments en transport públic.',
      es: 'Permite acompañar a una persona con necesidades especiales sin pagar los desplazamientos en transporte público.'
    },
    tags: ['Il·limitat', 'Unipersonal', 'Discapacitat', 'Aeroport'],
    price: '0 €',
    image: 'https://www.tmb.cat/documents/20182/1751370/Passi+acompanyant+-+200+px+-+landing.png/50b7ac4c-57a6-b196-40de-9bf825e2654f?t=1754828158352',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-acompanyament'
  },
  {
    id: 't-aire',
    name: { ca: 'T-aire', es: 'T-aire' },
    desc: {
      ca: 'Títol multipersonal per a 2 viatges exclusiu per a dies amb contaminació ambiental. No vàlid a Aeroport T1 i T2 (L9 Sud).',
      es: 'Título multipersonal para 2 viajes exclusivo para días con contaminación ambiental. No válido en Aeroport T1 y T2 (L9 Sud).'
    },
    tags: ['2 viatges', 'Multipersonal', 'Diari'],
    price: 'Des de 2,35 €',
    image: 'https://estaticos-cdn.prensaiberica.es/clip/4fe263b6-26f4-4b9c-ae31-bc567596e2a7_16-9-discover-aspect-ratio_default_0.jpg',
    link: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-aire'
  },
  {
    id: 'hola-bcn',
    name: { ca: 'Hola Barcelona Travel Card', es: 'Hola Barcelona Travel Card' },
    desc: {
      ca: 'Mou-te lliurement per tota la ciutat fins a 5 dies. Inclou anada i tornada a l\'aeroport en metro.',
      es: 'Muévete libremente por toda la ciudad hasta 5 días. Incluye ida y vuelta al aeropuerto en metro.'
    },
    tags: ['Il·limitat', 'Unipersonal', 'Aeroport', 'Turistes'],
    price: 'Des de 12,50 €',
    image: 'https://www.tmb.cat/documents/20182/1952284/08_PT-basica-1-dia-hola-barcelona-travel-card.jpg/251efcdf-4a64-0058-31b4-e0aa0b781b5e?t=1777364414292',
    link: 'https://www.holabarcelona.com/es/tickets/hola-bcn-barcelona-travel-card'
  }
];

window.TICKETS_DATA = TICKETS_DATA;