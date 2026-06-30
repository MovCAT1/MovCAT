'use strict';






/* ─── COLORES OFICIALES DE LÍNEA ─── */
const LINE_COLORS = {
  /* Rodalies */
  R1:  '#ce0e2d',
  R2:  '#0065a1',
  R2N: '#0065a1',
  R2S: '#0065a1',
  R3:  '#007f3e',
  R4:  '#7b2182',
  R7:  '#f7a600',
  R8:  '#d4007a',
  R11: '#00a79d',
  R12: '#00a79d',
  R13: '#00a79d',
  R14: '#00a79d',
  R15: '#00a79d',
  R16: '#00a79d',
  RG1: '#ce0e2d',
  /* FGC */
  L6:  '#7a4f9f',
  L7:  '#4a7fc1',
  L8:  '#ef7c00',
  L12: '#a05c13',
  S1:  '#00a89d',
  S2:  '#00a89d',
  S5:  '#00a89d',
  S55: '#00a89d',
  L9:  '#e3007f',
  L10: '#0082ca',
  L11: '#93c740',
  /* Metro */
  L1:  '#e3000b',
  L2:  '#9b2d91',
  L3:  '#3aaa35',
  L4:  '#ffbe00',
  L5:  '#0075bf',
  /* TRAM – colors oficials GTFS */
  T1:  '#FF0D0D',
  T2:  '#80FF80',
  T3:  '#0074E8',
  T4:  '#008080',
  T5:  '#FF0080',
  T6:  '#4B5BE9',
};

/* ─── OPERADORES ─── */
const OPERATORS = {
  renfe: {
    id: 'renfe',
    name: 'Rodalies de Catalunya',
    shortName: 'Rodalies',
    color: '#ce0e2d',
    textColor: '#ffffff',
  },
  fgc: {
    id: 'fgc',
    name: 'Ferrocarrils de la Generalitat de Catalunya',
    shortName: 'FGC',
    color: '#7a4f9f',
    textColor: '#ffffff',
  },
  metro: {
    id: 'metro',
    name: 'Metro de Barcelona',
    shortName: 'TMB',
    color: '#ce0e2d',
    textColor: '#ffffff',
  },
  trambaix: {
    id: 'trambaix',
    name: 'TRAMBAIX',
    shortName: 'TramBaix',
    color: '#FF0D0D',
    textColor: '#ffffff',
    url: 'http://www.tram.cat',
    phone: '900 701 181',
  },
  trambesosop: {
    id: 'trambesosop',
    name: 'TRAMBESÒS',
    shortName: 'TramBesòs',
    color: '#008080',
    textColor: '#ffffff',
    url: 'http://www.tram.cat',
    phone: '900 701 181',
  },
};

/* ─── LÍNEAS FERROVIARIAS ─── */
const LINES = {
  /* ════════ RODALIES ════════ */
  R1: {
    id: 'R1',
    label: 'R1',
    operator: 'renfe',
    color: LINE_COLORS.R1,
    textColor: '#fff',
    description: 'Molins de Rei / Maçanet-Massanes',
    terminus: ['Molins de Rei', 'Maçanet-Massanes'],
    stations: [
      'Molins de Rei', 'Sant Vicenç dels Horts', 'Pallejà', 'Cervelló-la Pobla',
      'Sant Andreu de la Barca', 'Castellbisbal', 'El Papiol', 'Mollet-Sant Fost',
      'Montcada i Reixac - Manresa', 'Montcada i Reixac', 'Montcada Bifurcació',
      'Barcelona Sants', 'Barcelona Passeig de Gràcia', 'Barcelona Arc de Triomf',
      'Barcelona Clot-Aragó', 'Barcelona Sant Andreu', 'Barcelona La Sagrera-Meridiana',
      'La Llagosta', 'Mollet-Sant Fost', 'Parets del Vallès',
      'Granollers-Canovelles', 'Les Franqueses del Vallès', 'La Garriga',
      'Figaró', 'Gualba', 'Sant Celoni', 'Palautordera',
      'Hostalric', 'Maçanet-Massanes',
    ],
  },
  R2: {
    id: 'R2',
    label: 'R2',
    operator: 'renfe',
    color: LINE_COLORS.R2,
    textColor: '#fff',
    description: 'Sant Vicenç de Calders / Granollers-Canovelles (Aeroport)',
    terminus: ['Sant Vicenç de Calders', 'Granollers-Canovelles'],
    stations: [
      'Sant Vicenç de Calders', 'Cunit', 'Cubelles', 'Vilanova i la Geltrú',
      'Sitges', 'Garraf', 'Castelldefels', 'Castelldefels Platja',
      'Gavà', 'Viladecans', 'El Prat de Llobregat',
      'Aeroport T2', 'Aeroport T1',
      'Barcelona Sants', 'Barcelona Passeig de Gràcia', 'Barcelona Arc de Triomf',
      'Barcelona Clot-Aragó', 'Barcelona Sant Andreu', 'Barcelona La Sagrera-Meridiana',
      'Montcada i Reixac', 'Montcada Bifurcació',
      'La Llagosta', 'Mollet-Sant Fost', 'Parets del Vallès',
      'Granollers Centre', 'Granollers-Canovelles',
    ],
  },
  R2N: {
    id: 'R2N',
    label: 'R2 Nord',
    operator: 'renfe',
    color: LINE_COLORS.R2N,
    textColor: '#fff',
    description: 'Maçanet-Massanes / Barcelona Sants',
    terminus: ['Maçanet-Massanes', 'Barcelona Sants'],
    stations: [
      'Maçanet-Massanes', 'Hostalric', 'Palautordera', 'Sant Celoni',
      'Gualba', 'Figaró', 'La Garriga', 'Les Franqueses del Vallès',
      'Granollers-Canovelles', 'Granollers Centre', 'Parets del Vallès',
      'Mollet-Sant Fost', 'La Llagosta', 'Montcada Bifurcació',
      'Barcelona La Sagrera-Meridiana', 'Barcelona Sant Andreu',
      'Barcelona Clot-Aragó', 'Barcelona Arc de Triomf',
      'Barcelona Passeig de Gràcia', 'Barcelona Sants',
    ],
  },
  R2S: {
    id: 'R2S',
    label: 'R2 Sud',
    operator: 'renfe',
    color: LINE_COLORS.R2S,
    textColor: '#fff',
    description: 'Aeroport / Barcelona Sants / Vilanova i la Geltrú',
    terminus: ['Aeroport T1', 'Vilanova i la Geltrú'],
    stations: [
      'Aeroport T1', 'Aeroport T2', 'El Prat de Llobregat',
      'Viladecans', 'Gavà', 'Castelldefels Platja', 'Castelldefels',
      'Garraf', 'Sitges', 'Vilanova i la Geltrú',
      'Barcelona Sants', 'Barcelona El Clot-Aragó',
    ],
  },
  R3: {
    id: 'R3',
    label: 'R3',
    operator: 'renfe',
    color: LINE_COLORS.R3,
    textColor: '#fff',
    description: "L'Hospitalet de Llobregat / Vic / Ripoll / Puigcerdà",
    terminus: ["L'Hospitalet de Llobregat", 'Puigcerdà'],
    stations: [
      "L'Hospitalet de Llobregat", 'Barcelona Sants', 'Barcelona Passeig de Gràcia',
      'Barcelona Arc de Triomf', 'Barcelona Clot-Aragó', 'Granollers Centre',
      'Les Franqueses del Vallès', 'La Garriga', 'Figaró',
      'Centelles', 'Balenyà-El Tona', 'Balenyà-Tona-Seva',
      'Vic', 'Manlleu', 'Torelló', 'Sant Quirze de Besora',
      'Ripoll', 'Ribes de Freser', 'Queralbs', 'Núria',
      'La Molina', 'Alp', 'Urtx-Alp', 'Puigcerdà',
    ],
  },
  R4: {
    id: 'R4',
    label: 'R4',
    operator: 'renfe',
    color: LINE_COLORS.R4,
    textColor: '#fff',
    description: 'Sant Vicenç de Calders / Manresa / Vilafranca del Penedès',
    terminus: ['Sant Vicenç de Calders', 'Manresa'],
    stations: [
      'Sant Vicenç de Calders', 'El Vendrell', 'Cunit', 'Calafell',
      'Segur de Calafell', 'Cubelles', 'Vilanova i la Geltrú',
      'Sitges', 'Garraf', 'Castelldefels', 'Gavà',
      'Viladecans', 'El Prat de Llobregat',
      'Barcelona Sants', 'Barcelona Passeig de Gràcia',
      'Montcada i Reixac', 'Terrassa Nacions Unides',
      'Terrassa Rambla', 'Sabadell Rambla', 'Sabadell Nord',
      'Barberà del Vallès', 'Cerdanyola del Vallès',
      'Sant Cugat del Vallès', 'Rubí',
      'Olesa de Montserrat', 'Esparreguera',
      'Abrera', 'Martorell', 'Castellbisbal',
      'Manresa',
    ],
  },
  R7: {
    id: 'R7',
    label: 'R7',
    operator: 'renfe',
    color: LINE_COLORS.R7,
    textColor: '#fff',
    description: 'Barcelona Sants / Martorell Enllaç',
    terminus: ['Barcelona Sants', 'Martorell Enllaç'],
    stations: [
      'Barcelona Sants', 'Barcelona Passeig de Gràcia', 'Barcelona Arc de Triomf',
      'El Prat de Llobregat', 'Castelldefels', 'Gavà',
      'Viladecans', 'Cornellà de Llobregat', 'Martorell', 'Martorell Enllaç',
    ],
  },
  R8: {
    id: 'R8',
    label: 'R8',
    operator: 'renfe',
    color: LINE_COLORS.R8,
    textColor: '#fff',
    description: 'Martorell / Granollers-Canovelles (Orbital)',
    terminus: ['Martorell', 'Granollers-Canovelles'],
    stations: [
      'Martorell', 'Martorell Enllaç', 'Abrera', 'Olesa de Montserrat',
      'Esparreguera', 'El Papiol', 'Mollet-Sant Fost',
      'Cerdanyola Universitat', 'Sabadell Sud', 'Sabadell Centre',
      'Barberà del Vallès', 'Montcada i Reixac - Manresa',
      'Granollers Centre', 'Granollers-Canovelles',
    ],
  },

  /* ════════ FGC BARCELONA ════════ */
  L6: {
    id: 'L6',
    label: 'L6',
    operator: 'fgc',
    color: LINE_COLORS.L6,
    textColor: '#fff',
    description: 'Barcelona / Reina Elisenda',
    terminus: ['Pl. Catalunya', 'Reina Elisenda'],
    stations: [
      'Pl. Catalunya', 'Provença', 'Gràcia', 'Sant Gervasi',
      'Muntaner', 'La Bonanova', 'Les Tres Torres',
      'Sarrià', 'Reina Elisenda',
    ],
  },
  L7: {
    id: 'L7',
    label: 'L7',
    operator: 'fgc',
    color: LINE_COLORS.L7,
    textColor: '#fff',
    description: 'Barcelona / Av. Tibidabo',
    terminus: ['Pl. Catalunya', 'Av. Tibidabo'],
    stations: [
      'Pl. Catalunya', 'Provença', 'Gràcia', 'Sant Gervasi',
      'Pàdua', 'El Putxet', 'Av. Tibidabo',
    ],
  },
  L8: {
    id: 'L8',
    label: 'L8',
    operator: 'fgc',
    color: LINE_COLORS.L8,
    textColor: '#fff',
    description: 'Espanya / Molí Nou-Ciutat Cooperativa',
    terminus: ['Espanya', 'Molí Nou-Ciutat Cooperativa'],
    stations: [
      'Espanya', 'Magòria-La Campana', 'Ildefons Cerdà',
      'Europa-Fira', 'Gornal', 'Almeda',
      'Cornellà-Riera', 'Sant Boi', 'Molí Nou-Ciutat Cooperativa',
    ],
  },
  S1: {
    id: 'S1',
    label: 'S1',
    operator: 'fgc',
    color: LINE_COLORS.S1,
    textColor: '#fff',
    description: 'Barcelona / Terrassa-Rambla',
    terminus: ['Pl. Catalunya', 'Terrassa-Rambla'],
    stations: [
      'Pl. Catalunya', 'Provença', 'Gràcia', 'Sant Gervasi',
      'Muntaner', 'La Bonanova', 'Les Tres Torres',
      'Sarrià', 'Peu del Funicular', 'Baixador de Vallvidrera',
      'Les Planes', 'La Floresta', 'Valldoreix',
      'Sant Cugat', 'Mira-sol', 'Rubí',
      'Terrassa-Est', 'Terrassa-Nacions Unides', 'Terrassa-Rambla',
    ],
  },
  S2: {
    id: 'S2',
    label: 'S2',
    operator: 'fgc',
    color: LINE_COLORS.S2,
    textColor: '#fff',
    description: 'Barcelona / Sabadell-Rambla',
    terminus: ['Pl. Catalunya', 'Sabadell-Rambla'],
    stations: [
      'Pl. Catalunya', 'Provença', 'Gràcia', 'Sant Gervasi',
      'Muntaner', 'La Bonanova', 'Les Tres Torres',
      'Sarrià', 'Peu del Funicular', 'Baixador de Vallvidrera',
      'Les Planes', 'La Floresta', 'Valldoreix',
      'Sant Cugat', 'Mira-sol',
      'Sabadell-Parc del Nord', 'Sabadell-Pl. Major',
      'Sabadell-Rambla',
    ],
  },
  S5: {
    id: 'S5',
    label: 'S5',
    operator: 'fgc',
    color: LINE_COLORS.S5,
    textColor: '#fff',
    description: 'Barcelona / Castellbell i el Vilar',
    terminus: ['Pl. Catalunya', 'Castellbell i el Vilar'],
    stations: [
      'Pl. Catalunya', 'Provença', 'Gràcia', 'Sant Gervasi',
      'Muntaner', 'La Bonanova', 'Les Tres Torres',
      'Sarrià', 'Peu del Funicular', 'Baixador de Vallvidrera',
      'Les Planes', 'La Floresta', 'Valldoreix',
      'Sant Cugat', 'Mira-sol', 'Rubí',
      'Terrassa-Est', 'Terrassa-Nacions Unides', 'Terrassa-Rambla',
      'Manresa', 'Castellbell i el Vilar',
    ],
  },

  /* ════════ FGC LLOBREGAT-ANOIA ════════ */
  L9FGC: {
    id: 'L9FGC',
    label: 'L9 FGC',
    operator: 'fgc',
    color: '#8b1a4a',
    textColor: '#fff',
    description: 'Barcelona / Olesa / Igualada',
    terminus: ['Pl. Espanya', 'Igualada'],
    stations: [
      'Pl. Espanya', 'Magòria-La Campana', 'Ildefons Cerdà',
      'Europa-Fira', 'Gornal', 'Almeda', 'Cornellà-Riera',
      'Gavà Parc', 'Begues',
      'Sant Andreu de la Barca', 'Martorell-Enllaç',
      'Olesa de Montserrat', 'Esparreguera',
      'Abrera', 'Piera', 'Igualada',
    ],
  },

  /* ════════ METRO DE BARCELONA ════════ */
  /* Dades oficials TMB — ordre real de les línies */
  L1: {
    id: 'L1',
    label: 'L1',
    operator: 'metro',
    color: LINE_COLORS.L1,
    textColor: '#fff',
    description: 'Hospital de Bellvitge – Fondo',
    terminus: ['Hospital de Bellvitge', 'Fondo'],
    stations: [
      'Hospital de Bellvitge', 'Bellvitge', 'Av. Carrilet', 'Rambla Just Oliveras',
      'Can Serra', 'Florida', 'Torrassa', 'Santa Eulàlia',
      'Mercat Nou', 'Plaça de Sants', 'Hostafrancs', 'Espanya',
      'Rocafort', 'Urgell', 'Universitat', 'Catalunya',
      'Urquinaona', 'Arc de Triomf', 'Marina', 'Glòries',
      'Clot', 'Navas', 'La Sagrera', 'Fabra i Puig',
      'Sant Andreu', 'Torras i Bages', 'Trinitat Vella', 'Baró de Viver',
      'Santa Coloma', 'Fondo',
    ],
  },
  L2: {
    id: 'L2',
    label: 'L2',
    operator: 'metro',
    color: LINE_COLORS.L2,
    textColor: '#fff',
    description: 'Paral·lel – Badalona Pompeu Fabra',
    terminus: ['Paral·lel', 'Badalona Pompeu Fabra'],
    stations: [
      'Paral·lel', 'Sant Antoni', 'Universitat', 'Passeig de Gràcia',
      'Tetuan', 'Monumental', 'Sagrada Família', 'Encants',
      'Clot', 'Bac de Roda', 'Sant Martí', 'La Pau',
      'Verneda', 'Artigues | Sant Adrià', 'Sant Roc', 'Gorg',
      'Pep Ventura', 'Badalona Pompeu Fabra',
    ],
  },
  L3: {
    id: 'L3',
    label: 'L3',
    operator: 'metro',
    color: LINE_COLORS.L3,
    textColor: '#fff',
    description: 'Zona Universitària – Trinitat Nova',
    terminus: ['Zona Universitària', 'Trinitat Nova'],
    stations: [
      'Zona Universitària', 'Palau Reial', 'Maria Cristina', 'Les Corts',
      'Plaça del Centre', 'Sants-Estació', 'Tarragona', 'Espanya',
      'Poble Sec', 'Paral·lel', 'Drassanes', 'Liceu',
      'Catalunya', 'Passeig de Gràcia', 'Diagonal', 'Fontana',
      'Lesseps', 'Vallcarca', 'Penitents', "Vall d'Hebron",
      'Montbau', 'Mundet', 'Valldaura', 'Canyelles',
      'Roquetes', 'Trinitat Nova',
    ],
  },
  L4: {
    id: 'L4',
    label: 'L4',
    operator: 'metro',
    color: LINE_COLORS.L4,
    textColor: '#000',
    description: 'Trinitat Nova – La Pau',
    terminus: ['Trinitat Nova', 'La Pau'],
    stations: [
      'Trinitat Nova', 'Via Júlia', 'Llucmajor', 'Maragall',
      'Guinardó | Hospital de Sant Pau', 'Alfons X', 'Joanic', 'Verdaguer',
      'Girona', 'Passeig de Gràcia', 'Urquinaona', 'Jaume I',
      'Barceloneta', 'Ciutadella | Vila Olímpica', 'Bogatell', 'Llacuna',
      'Poblenou', 'Selva de Mar', 'El Maresme | Fòrum', 'Besòs Mar',
      'Besòs', 'La Pau',
    ],
  },
  L5: {
    id: 'L5',
    label: 'L5',
    operator: 'metro',
    color: LINE_COLORS.L5,
    textColor: '#fff',
    description: "Cornellà Centre – Vall d'Hebron",
    terminus: ['Cornellà Centre', "Vall d'Hebron"],
    stations: [
      'Cornellà Centre', 'Gavarra', 'Sant Ildefons', 'Can Boixeres',
      'Can Vidalet', 'Pubilla Cases', 'Ernest Lluch', 'Collblanc',
      'Badal', 'Plaça de Sants', 'Sants-Estació', 'Entença',
      'Hospital Clínic', 'Diagonal', 'Verdaguer', 'Sagrada Família',
      'Sant Pau | Dos de Maig', "Camp de l'Arpa", 'La Sagrera', 'Congrés',
      'Maragall', 'Virrei Amat', 'Vilapicina', 'Horta',
      'El Carmel', "El Coll | La Teixonera", "Vall d'Hebron",
    ],
  },

  /* ════════ TRAMBAIX ════════ */
  T1: {
    id: 'T1',
    label: 'T1',
    operator: 'trambaix',
    color: LINE_COLORS.T1,
    textColor: '#fff',
    description: 'Bon Viatge – Francesc Macià',
    terminus: ['Bon Viatge', 'Francesc Macià'],
    url: 'http://www.tram.cat/linies-i-horaris/linea-t1/',
    stations: [
      'Francesc Macià', "L'Illa", 'Numància', 'Bordeta-Magòria',
      'Ildefons Cerdà', 'Can Rigalt', 'Palaudàries',
      'Can Clota', 'Cornellà-Riera', 'Sant Ildefons',
      'Sant Martí de l\'Erm', 'Sant Joan de Déu', 'Fontsanta-Fatjó',
      'Almeda', 'Sant Boi', 'Molí Nou', 'Bon Viatge',
    ],
  },
  T2: {
    id: 'T2',
    label: 'T2',
    operator: 'trambaix',
    color: LINE_COLORS.T2,
    textColor: '#000',
    description: 'Llevant Les Planes – Francesc Macià',
    terminus: ['Llevant Les Planes', 'Francesc Macià'],
    url: 'http://www.tram.cat/linies-i-horaris/linea-t2/',
    stations: [
      'Francesc Macià', "L'Illa", 'Numància', 'Bordeta-Magòria',
      'Ildefons Cerdà', 'Can Rigalt', 'Palaudàries',
      'Can Clota', 'Cornellà-Riera', 'Sant Ildefons',
      'Sant Martí de l\'Erm', 'Sant Joan de Déu', 'Fontsanta-Fatjó',
      'Almeda', 'Sant Boi', 'Molí Nou', 'Les Planes', 'Llevant Les Planes',
    ],
  },
  T3: {
    id: 'T3',
    label: 'T3',
    operator: 'trambaix',
    color: LINE_COLORS.T3,
    textColor: '#fff',
    description: 'Sant Feliu Consell Comarcal – Francesc Macià',
    terminus: ['Sant Feliu Consell Comarcal', 'Francesc Macià'],
    url: 'http://www.tram.cat/linies-i-horaris/linea-t3/',
    stations: [
      'Francesc Macià', "L'Illa", 'Numància', 'Bordeta-Magòria',
      'Ildefons Cerdà', 'Can Rigalt', 'Palaudàries',
      'Can Clota', 'Cornellà-Riera', 'Sant Ildefons',
      'Sant Martí de l\'Erm', 'Sant Joan de Déu', 'Fontsanta-Fatjó',
      'Almeda', 'Sant Boi', 'Molí Nou', 'Güell',
      'Mas Fonollar', 'Sant Feliu Hospital', 'Sant Feliu Consell Comarcal',
    ],
  },

  /* ════════ TRAMBESÒS ════════ */
  T4: {
    id: 'T4',
    label: 'T4',
    operator: 'trambesosop',
    color: LINE_COLORS.T4,
    textColor: '#fff',
    description: 'Estació de Sant Adrià – Ciutadella | Vila Olímpica',
    terminus: ["Estació de Sant Adrià", "Ciutadella | Vila Olímpica"],
    url: 'http://www.tram.cat/linies-i-horaris/linea-t4/',
    stations: [
      'Ciutadella | Vila Olímpica', 'Wellington | UPF', 'Marina',
      'Ca l\'Aranyó', 'Rambla del Poblenou', 'Llacuna',
      'Selva de Mar', 'Fluvià', 'La Pau',
      'El Maresme | Fòrum', 'La Mina', 'Sant Adrià',
      'Estació de Sant Adrià',
    ],
  },
  T5: {
    id: 'T5',
    label: 'T5',
    operator: 'trambesosop',
    color: LINE_COLORS.T5,
    textColor: '#fff',
    description: 'Glòries – Gorg',
    terminus: ['Glòries', 'Gorg'],
    url: 'http://www.tram.cat/linies-i-horaris/linea-t5/',
    stations: [
      'Glòries', 'Ca l\'Aranyó', 'Rambla del Poblenou', 'Llacuna',
      'Selva de Mar', 'Fluvià', 'La Pau',
      'El Maresme | Fòrum', 'La Mina', 'Sant Adrià',
      'Campus Diagonal-Besòs', 'Port Fòrum',
      'Parc de la Ciutadella', 'La Catalana', 'Sant Roc',
      'Gorg',
    ],
  },
  T6: {
    id: 'T6',
    label: 'T6',
    operator: 'trambesosop',
    color: LINE_COLORS.T6,
    textColor: '#fff',
    description: 'Estació de Sant Adrià – Glòries',
    terminus: ['Estació de Sant Adrià', 'Glòries'],
    url: 'http://www.tram.cat/linies-i-horaris/linea-t6/',
    stations: [
      'Glòries', 'Ca l\'Aranyó', 'Rambla del Poblenou', 'Llacuna',
      'Selva de Mar', 'Fluvià', 'La Pau',
      'El Maresme | Fòrum', 'La Mina', 'Sant Adrià',
      'Estació de Sant Adrià',
    ],
  },
};

/* ─── ESTACIONES COMPLETAS (DATOS MAESTROS) ─── */
const STATIONS = {
  /* ── BARCELONA PRINCIPALES ── */
  'barcelona-sants': {
    id: 'barcelona-sants',
    name: 'Barcelona Sants',
    shortName: 'Sants',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3793,
    lng: 2.1403,
    lines: ['R1', 'R2', 'R2N', 'R2S', 'R3', 'R4', 'R7', 'L3', 'L5'],
    connections: {
      metro: ['L3', 'L5'],
      bus: true,
      taxi: true,
      parking: true,
      bike: true,
    },
    facilities: {
      accessibility: true,
      wifi: true,
      lockers: true,
      info: true,
      tickets: true,
      shops: true,
      cafeteria: true,
    },
    description: 'Principal estació de la xarxa ferroviària de Barcelona, amb connexions a AVE i Euromed',
  },
  'barcelona-pg-gracia': {
    id: 'barcelona-pg-gracia',
    name: 'Barcelona Passeig de Gràcia',
    shortName: 'Pg. Gràcia',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3917,
    lng: 2.1649,
    lines: ['R1', 'R2', 'R2N', 'R2S', 'R3', 'R4', 'R7', 'L2', 'L3', 'L4'],
    connections: {
      metro: ['L2', 'L3', 'L4'],
      bus: true,
    },
    facilities: {
      accessibility: true,
      wifi: true,
      info: true,
      tickets: true,
    },
    description: "Estació al cor de l'Eixample, amb accés directe a la Pedrera i la Casa Batlló",
  },
  'barcelona-arc-triomf': {
    id: 'barcelona-arc-triomf',
    name: 'Barcelona Arc de Triomf',
    shortName: 'Arc de Triomf',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3905,
    lng: 2.1806,
    lines: ['R1', 'R2', 'R2N', 'R2S', 'R3', 'R4', 'R7', 'L1'],
    connections: {
      metro: ['L1'],
      bus: true,
    },
    facilities: {
      accessibility: true,
      tickets: true,
    },
  },
  'barcelona-clot-arago': {
    id: 'barcelona-clot-arago',
    name: 'Barcelona El Clot-Aragó',
    shortName: 'Clot-Aragó',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4063,
    lng: 2.1884,
    lines: ['R1', 'R2', 'R3', 'L1', 'L2'],
    connections: {
      metro: ['L1', 'L2'],
      bus: true,
    },
    facilities: {
      accessibility: true,
      tickets: true,
    },
  },
  'barcelona-sant-andreu': {
    id: 'barcelona-sant-andreu',
    name: 'Barcelona Sant Andreu',
    shortName: 'Sant Andreu',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4281,
    lng: 2.1875,
    lines: ['R1', 'R2', 'L1'],
    connections: {
      metro: ['L1'],
      bus: true,
    },
    facilities: {
      accessibility: true,
      tickets: true,
    },
  },
  'barcelona-la-sagrera': {
    id: 'barcelona-la-sagrera',
    name: 'Barcelona La Sagrera-Meridiana',
    shortName: 'La Sagrera',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4175,
    lng: 2.1928,
    lines: ['R1', 'R2', 'L1', 'L5', 'L9N', 'L10N'],
    connections: {
      metro: ['L1', 'L5', 'L9N', 'L10N'],
      bus: true,
    },
    facilities: {
      accessibility: true,
      tickets: true,
    },
  },
  /* ── FGC BARCELONA ── */
  'pl-catalunya-fgc': {
    id: 'pl-catalunya-fgc',
    name: 'Pl. Catalunya',
    shortName: 'Pl. Catalunya',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3872,
    lng: 2.1700,
    lines: ['L6', 'L7', 'S1', 'S2', 'S5', 'L1', 'L3'],
    connections: {
      metro: ['L1', 'L3'],
      bus: true,
      taxi: true,
      bike: true,
    },
    facilities: {
      accessibility: true,
      wifi: true,
      info: true,
      tickets: true,
      shops: true,
    },
    description: 'Principal intercanviador entre FGC i TMB al centre de Barcelona',
  },
  'provenca-fgc': {
    id: 'provenca-fgc',
    name: 'Provença',
    shortName: 'Provença',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3940,
    lng: 2.1590,
    lines: ['L6', 'L7', 'S1', 'S2', 'S5'],
    connections: {},
    facilities: { accessibility: true, tickets: true },
  },
  'gracia-fgc': {
    id: 'gracia-fgc',
    name: 'Gràcia',
    shortName: 'Gràcia',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4014,
    lng: 2.1569,
    lines: ['L6', 'L7', 'S1', 'S2', 'S5'],
    connections: {},
    facilities: { accessibility: true, tickets: true },
  },
  'sant-gervasi-fgc': {
    id: 'sant-gervasi-fgc',
    name: 'Sant Gervasi',
    shortName: 'Sant Gervasi',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4058,
    lng: 2.1451,
    lines: ['L6', 'L7', 'S1', 'S2', 'S5'],
    connections: {},
    facilities: { accessibility: true, tickets: true },
  },
  'muntaner-fgc': {
    id: 'muntaner-fgc',
    name: 'Muntaner',
    shortName: 'Muntaner',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4075,
    lng: 2.1390,
    lines: ['L6', 'S1', 'S2', 'S5'],
    connections: {},
    facilities: { tickets: true },
  },
  'la-bonanova-fgc': {
    id: 'la-bonanova-fgc',
    name: 'La Bonanova',
    shortName: 'La Bonanova',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4101,
    lng: 2.1322,
    lines: ['L6', 'S1', 'S2', 'S5'],
    connections: {},
    facilities: { tickets: true },
  },
  'les-tres-torres-fgc': {
    id: 'les-tres-torres-fgc',
    name: 'Les Tres Torres',
    shortName: 'Les Tres Torres',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4118,
    lng: 2.1268,
    lines: ['L6', 'S1', 'S2', 'S5'],
    connections: {},
    facilities: { tickets: true },
  },
  'sarria-fgc': {
    id: 'sarria-fgc',
    name: 'Sarrià',
    shortName: 'Sarrià',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4030,
    lng: 2.1115,
    lines: ['L6', 'S1', 'S2', 'S5'],
    connections: {},
    facilities: { accessibility: true, tickets: true },
  },
  'reina-elisenda-fgc': {
    id: 'reina-elisenda-fgc',
    name: 'Reina Elisenda',
    shortName: 'Reina Elisenda',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4003,
    lng: 2.1044,
    lines: ['L6'],
    connections: {},
    facilities: { tickets: true },
  },
  'av-tibidabo-fgc': {
    id: 'av-tibidabo-fgc',
    name: 'Av. Tibidabo',
    shortName: 'Av. Tibidabo',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4126,
    lng: 2.1310,
    lines: ['L7'],
    connections: {},
    facilities: { tickets: true },
  },
  'peu-funicular-fgc': {
    id: 'peu-funicular-fgc',
    name: 'Peu del Funicular',
    shortName: 'Peu del Funicular',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4010,
    lng: 2.1056,
    lines: ['S1', 'S2', 'S5'],
    connections: { funicular: true },
    facilities: { accessibility: true, tickets: true },
  },
  /* ── ÁREA METROPOLITANA ── */
  'cornella-llobregat': {
    id: 'cornella-llobregat',
    name: 'Cornellà de Llobregat',
    shortName: 'Cornellà',
    city: 'Cornellà de Llobregat',
    zone: 'A',
    lat: 41.3551,
    lng: 2.0736,
    lines: ['R7', 'L5'],
    connections: {
      metro: ['L5'],
      bus: true,
    },
    facilities: { accessibility: true, tickets: true },
  },
  'el-prat-llobregat': {
    id: 'el-prat-llobregat',
    name: 'El Prat de Llobregat',
    shortName: 'El Prat',
    city: 'El Prat de Llobregat',
    zone: 'A',
    lat: 41.3249,
    lng: 2.1003,
    lines: ['R2', 'R2S', 'R7'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'aeroport-t1': {
    id: 'aeroport-t1',
    name: 'Aeroport T1',
    shortName: 'Aeroport T1',
    city: 'El Prat de Llobregat',
    zone: '4B',
    lat: 41.2968,
    lng: 2.0729,
    lines: ['R2', 'R2S'],
    connections: { bus: true, taxi: true },
    facilities: {
      accessibility: true,
      wifi: true,
      info: true,
      tickets: true,
      shops: true,
    },
    description: "Terminal 1 de l'Aeroport de Barcelona-El Prat (intercontinental)",
  },
  'aeroport-t2': {
    id: 'aeroport-t2',
    name: 'Aeroport T2',
    shortName: 'Aeroport T2',
    city: 'El Prat de Llobregat',
    zone: '4B',
    lat: 41.3004,
    lng: 2.0836,
    lines: ['R2', 'R2S'],
    connections: { bus: true, taxi: true },
    facilities: {
      accessibility: true,
      wifi: true,
      info: true,
      tickets: true,
    },
    description: "Terminal 2 de l'Aeroport de Barcelona-El Prat (Vueling)",
  },
  'castelldefels': {
    id: 'castelldefels',
    name: 'Castelldefels',
    shortName: 'Castelldefels',
    city: 'Castelldefels',
    zone: '3',
    lat: 41.2812,
    lng: 1.9798,
    lines: ['R2', 'R2S', 'R7'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'gava': {
    id: 'gava',
    name: 'Gavà',
    shortName: 'Gavà',
    city: 'Gavà',
    zone: '2',
    lat: 41.3028,
    lng: 2.0013,
    lines: ['R2', 'R2S', 'R7'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'viladecans': {
    id: 'viladecans',
    name: 'Viladecans',
    shortName: 'Viladecans',
    city: 'Viladecans',
    zone: '2',
    lat: 41.3181,
    lng: 2.0143,
    lines: ['R2', 'R2S'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'sitges': {
    id: 'sitges',
    name: 'Sitges',
    shortName: 'Sitges',
    city: 'Sitges',
    zone: '4',
    lat: 41.2376,
    lng: 1.8083,
    lines: ['R2', 'R2S', 'R4'],
    connections: { bus: true, taxi: true },
    facilities: { accessibility: true, tickets: true, info: true },
  },
  'vilanova-geltru': {
    id: 'vilanova-geltru',
    name: 'Vilanova i la Geltrú',
    shortName: 'Vilanova',
    city: 'Vilanova i la Geltrú',
    zone: '5',
    lat: 41.2258,
    lng: 1.7253,
    lines: ['R2', 'R4'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true, info: true },
  },
  'montcada-reixac': {
    id: 'montcada-reixac',
    name: 'Montcada i Reixac',
    shortName: 'Montcada',
    city: 'Montcada i Reixac',
    zone: 'B',
    lat: 41.4820,
    lng: 2.1834,
    lines: ['R1', 'R2', 'R4'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'granollers': {
    id: 'granollers',
    name: 'Granollers Centre',
    shortName: 'Granollers',
    city: 'Granollers',
    zone: '3',
    lat: 41.6064,
    lng: 2.2876,
    lines: ['R2', 'R2N', 'R3', 'R8'],
    connections: { bus: true, taxi: true },
    facilities: { accessibility: true, tickets: true, info: true },
  },
  'la-llagosta': {
    id: 'la-llagosta',
    name: 'La Llagosta',
    shortName: 'La Llagosta',
    city: 'La Llagosta',
    zone: 'B',
    lat: 41.5182,
    lng: 2.2014,
    lines: ['R1', 'R2'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'mollet-sant-fost': {
    id: 'mollet-sant-fost',
    name: 'Mollet-Sant Fost',
    shortName: 'Mollet',
    city: 'Mollet del Vallès',
    zone: 'B',
    lat: 41.5387,
    lng: 2.2168,
    lines: ['R1', 'R2', 'R8'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'parets-valles': {
    id: 'parets-valles',
    name: 'Parets del Vallès',
    shortName: 'Parets',
    city: 'Parets del Vallès',
    zone: 'C1',
    lat: 41.5726,
    lng: 2.2341,
    lines: ['R2', 'R2N'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  /* ── SANT CUGAT / TERRASSA / SABADELL ── */
  'sant-cugat-valles': {
    id: 'sant-cugat-valles',
    name: 'Sant Cugat del Vallès',
    shortName: 'Sant Cugat',
    city: 'Sant Cugat del Vallès',
    zone: '2',
    lat: 41.4730,
    lng: 2.0839,
    lines: ['S1', 'S2', 'S5'],
    connections: { bus: true, bike: true },
    facilities: { accessibility: true, tickets: true, info: true },
  },
  'terrassa-rambla': {
    id: 'terrassa-rambla',
    name: 'Terrassa-Rambla',
    shortName: 'Terrassa',
    city: 'Terrassa',
    zone: '3',
    lat: 41.5628,
    lng: 2.0097,
    lines: ['R4', 'S1', 'S5'],
    connections: { bus: true, taxi: true },
    facilities: { accessibility: true, tickets: true, info: true },
  },
  'terrassa-nacions-unides': {
    id: 'terrassa-nacions-unides',
    name: 'Terrassa Nacions Unides',
    shortName: 'Terrassa N.U.',
    city: 'Terrassa',
    zone: '3',
    lat: 41.5663,
    lng: 2.0145,
    lines: ['R4', 'S1', 'S5'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'sabadell-rambla': {
    id: 'sabadell-rambla',
    name: 'Sabadell-Rambla',
    shortName: 'Sabadell',
    city: 'Sabadell',
    zone: '3',
    lat: 41.5435,
    lng: 2.1071,
    lines: ['R4', 'S2'],
    connections: { bus: true, taxi: true },
    facilities: { accessibility: true, tickets: true, info: true },
  },
  'sabadell-nord': {
    id: 'sabadell-nord',
    name: 'Sabadell Nord',
    shortName: 'Sabadell Nord',
    city: 'Sabadell',
    zone: '3',
    lat: 41.5500,
    lng: 2.1022,
    lines: ['R4'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'barbera-valles': {
    id: 'barbera-valles',
    name: 'Barberà del Vallès',
    shortName: 'Barberà',
    city: 'Barberà del Vallès',
    zone: '2',
    lat: 41.5165,
    lng: 2.1256,
    lines: ['R4', 'R8'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'cerdanyola-valles': {
    id: 'cerdanyola-valles',
    name: 'Cerdanyola del Vallès',
    shortName: 'Cerdanyola',
    city: 'Cerdanyola del Vallès',
    zone: '2',
    lat: 41.4940,
    lng: 2.1405,
    lines: ['R4'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  /* ── BAIX LLOBREGAT ── */
  'martorell': {
    id: 'martorell',
    name: 'Martorell',
    shortName: 'Martorell',
    city: 'Martorell',
    zone: '3',
    lat: 41.4734,
    lng: 1.9333,
    lines: ['R4', 'R7', 'R8'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'abrera': {
    id: 'abrera',
    name: 'Abrera',
    shortName: 'Abrera',
    city: 'Abrera',
    zone: '3',
    lat: 41.5087,
    lng: 1.9031,
    lines: ['R4', 'R8'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'olesa-montserrat': {
    id: 'olesa-montserrat',
    name: 'Olesa de Montserrat',
    shortName: 'Olesa',
    city: 'Olesa de Montserrat',
    zone: '3',
    lat: 41.5454,
    lng: 1.8964,
    lines: ['R4', 'R8'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'esparreguera': {
    id: 'esparreguera',
    name: 'Esparreguera',
    shortName: 'Esparreguera',
    city: 'Esparreguera',
    zone: '3',
    lat: 41.5347,
    lng: 1.8655,
    lines: ['R4', 'R8'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'manresa': {
    id: 'manresa',
    name: 'Manresa',
    shortName: 'Manresa',
    city: 'Manresa',
    zone: '5',
    lat: 41.7286,
    lng: 1.8231,
    lines: ['R4', 'S5'],
    connections: { bus: true, taxi: true },
    facilities: { accessibility: true, tickets: true, info: true },
  },
  /* ── MARESME ── */
  'mataro': {
    id: 'mataro',
    name: 'Mataró',
    shortName: 'Mataró',
    city: 'Mataró',
    zone: '3',
    lat: 41.5368,
    lng: 2.4449,
    lines: ['R1'],
    connections: { bus: true, taxi: true },
    facilities: { accessibility: true, tickets: true, info: true },
    description: 'Principal estació del Maresme, connexió amb la capital comarcal',
  },
  'masnou': {
    id: 'masnou',
    name: 'El Masnou',
    shortName: 'El Masnou',
    city: 'El Masnou',
    zone: '2',
    lat: 41.4799,
    lng: 2.3180,
    lines: ['R1'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'premia-mar': {
    id: 'premia-mar',
    name: 'Premià de Mar',
    shortName: 'Premià',
    city: 'Premià de Mar',
    zone: '2',
    lat: 41.4943,
    lng: 2.3601,
    lines: ['R1'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'sant-celoni': {
    id: 'sant-celoni',
    name: 'Sant Celoni',
    shortName: 'Sant Celoni',
    city: 'Sant Celoni',
    zone: '4',
    lat: 41.6903,
    lng: 2.5002,
    lines: ['R1', 'R2N'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'macanet-massanes': {
    id: 'macanet-massanes',
    name: 'Maçanet-Massanes',
    shortName: 'Maçanet',
    city: 'Maçanet de la Selva',
    zone: '5',
    lat: 41.7723,
    lng: 2.7337,
    lines: ['R1', 'R2N'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  /* ── VALLÈS OCCIDENTAL ── */
  'vic': {
    id: 'vic',
    name: 'Vic',
    shortName: 'Vic',
    city: 'Vic',
    zone: '5',
    lat: 41.9303,
    lng: 2.2550,
    lines: ['R3'],
    connections: { bus: true, taxi: true },
    facilities: { accessibility: true, tickets: true, info: true },
  },
  'ripoll': {
    id: 'ripoll',
    name: 'Ripoll',
    shortName: 'Ripoll',
    city: 'Ripoll',
    zone: '6',
    lat: 42.2015,
    lng: 2.1919,
    lines: ['R3'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  /* ── PENEDÈS ── */
  'vilafranca-penedes': {
    id: 'vilafranca-penedes',
    name: 'Vilafranca del Penedès',
    shortName: 'Vilafranca',
    city: 'Vilafranca del Penedès',
    zone: '4',
    lat: 41.3434,
    lng: 1.6985,
    lines: ['R4'],
    connections: { bus: true, taxi: true },
    facilities: { accessibility: true, tickets: true, info: true },
  },
  'sant-vicenc-calders': {
    id: 'sant-vicenc-calders',
    name: 'Sant Vicenç de Calders',
    shortName: 'St. Vicenç Calders',
    city: 'Sant Vicenç de Calders',
    zone: '5',
    lat: 41.1819,
    lng: 1.6625,
    lines: ['R2', 'R4'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  /* ── GARRAF ── */
  'garraf': {
    id: 'garraf',
    name: 'Garraf',
    shortName: 'Garraf',
    city: 'Sitges',
    zone: '3',
    lat: 41.2440,
    lng: 1.7524,
    lines: ['R2', 'R4'],
    connections: {},
    facilities: { tickets: true },
  },
  'cubelles': {
    id: 'cubelles',
    name: 'Cubelles',
    shortName: 'Cubelles',
    city: 'Cubelles',
    zone: '4',
    lat: 41.1976,
    lng: 1.6734,
    lines: ['R2', 'R4'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  /* ── RUBÍ ── */
  'rubi-fgc': {
    id: 'rubi-fgc',
    name: 'Rubí',
    shortName: 'Rubí',
    city: 'Rubí',
    zone: '2',
    lat: 41.4947,
    lng: 2.0297,
    lines: ['S1', 'S5'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'mira-sol-fgc': {
    id: 'mira-sol-fgc',
    name: 'Mira-sol',
    shortName: 'Mira-sol',
    city: 'Sant Cugat del Vallès',
    zone: '2',
    lat: 41.4918,
    lng: 2.0629,
    lines: ['S2'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'valldoreix-fgc': {
    id: 'valldoreix-fgc',
    name: 'Valldoreix',
    shortName: 'Valldoreix',
    city: 'Sant Cugat del Vallès',
    zone: '1B',
    lat: 41.4613,
    lng: 2.0822,
    lines: ['S1', 'S2', 'S5'],
    connections: {},
    facilities: { tickets: true },
  },
  'les-planes-fgc': {
    id: 'les-planes-fgc',
    name: 'Les Planes',
    shortName: 'Les Planes',
    city: 'Sant Cugat del Vallès',
    zone: '1B',
    lat: 41.4466,
    lng: 2.0835,
    lines: ['S1', 'S2', 'S5'],
    connections: {},
    facilities: { tickets: true },
  },
  'baixador-vallvidrera-fgc': {
    id: 'baixador-vallvidrera-fgc',
    name: 'Baixador de Vallvidrera',
    shortName: 'Baixador',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4295,
    lng: 2.1005,
    lines: ['S1', 'S2', 'S5'],
    connections: {},
    facilities: { tickets: true },
  },
  'sabadell-parc-nord-fgc': {
    id: 'sabadell-parc-nord-fgc',
    name: 'Sabadell-Parc del Nord',
    shortName: 'Sabadell P.N.',
    city: 'Sabadell',
    zone: '3',
    lat: 41.5446,
    lng: 2.1119,
    lines: ['S2'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'sabadell-pl-major-fgc': {
    id: 'sabadell-pl-major-fgc',
    name: 'Sabadell-Pl. Major',
    shortName: 'Sabadell Pl.M.',
    city: 'Sabadell',
    zone: '3',
    lat: 41.5457,
    lng: 2.1093,
    lines: ['S2'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  /* ── FGC ESPANYA / L8 ── */
  'espanya-fgc': {
    id: 'espanya-fgc',
    name: 'Espanya',
    shortName: 'Espanya',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3762,
    lng: 2.1467,
    lines: ['L8', 'L1', 'L3'],
    connections: { metro: ['L1', 'L3'], bus: true },
    facilities: { accessibility: true, tickets: true, info: true },
  },
  'magoria-la-campana-fgc': {
    id: 'magoria-la-campana-fgc',
    name: 'Magòria-La Campana',
    shortName: 'Magòria',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3663,
    lng: 2.1374,
    lines: ['L8'],
    connections: {},
    facilities: { tickets: true },
  },
  'ildefons-cerda-fgc': {
    id: 'ildefons-cerda-fgc',
    name: 'Ildefons Cerdà',
    shortName: 'Ildefons Cerdà',
    city: "L'Hospitalet de Llobregat",
    zone: 'A',
    lat: 41.3611,
    lng: 2.1294,
    lines: ['L8'],
    connections: {},
    facilities: { tickets: true },
  },
  'europa-fira-fgc': {
    id: 'europa-fira-fgc',
    name: 'Europa-Fira',
    shortName: 'Europa-Fira',
    city: "L'Hospitalet de Llobregat",
    zone: 'A',
    lat: 41.3559,
    lng: 2.1199,
    lines: ['L8'],
    connections: {},
    facilities: { tickets: true },
  },
  'gornal-fgc': {
    id: 'gornal-fgc',
    name: 'Gornal',
    shortName: 'Gornal',
    city: "L'Hospitalet de Llobregat",
    zone: 'A',
    lat: 41.3472,
    lng: 2.1086,
    lines: ['L8'],
    connections: {},
    facilities: { tickets: true },
  },
  'almeda-fgc': {
    id: 'almeda-fgc',
    name: 'Almeda',
    shortName: 'Almeda',
    city: 'Cornellà de Llobregat',
    zone: 'A',
    lat: 41.3478,
    lng: 2.0899,
    lines: ['L8'],
    connections: {},
    facilities: { tickets: true },
  },
  'cornella-riera-fgc': {
    id: 'cornella-riera-fgc',
    name: 'Cornellà-Riera',
    shortName: 'Cornellà-Riera',
    city: 'Cornellà de Llobregat',
    zone: 'A',
    lat: 41.3498,
    lng: 2.0811,
    lines: ['L8'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'sant-boi-fgc': {
    id: 'sant-boi-fgc',
    name: 'Sant Boi',
    shortName: 'Sant Boi',
    city: 'Sant Boi de Llobregat',
    zone: '2',
    lat: 41.3436,
    lng: 2.0418,
    lines: ['L8'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'moli-nou-fgc': {
    id: 'moli-nou-fgc',
    name: 'Molí Nou-Ciutat Cooperativa',
    shortName: 'Molí Nou',
    city: 'Sant Boi de Llobregat',
    zone: '2',
    lat: 41.3375,
    lng: 2.0301,
    lines: ['L8'],
    connections: { bus: true },
    facilities: { tickets: true },
  },

  /* ══════════ METRO DE BARCELONA ══════════ */
  'metro-hospital-bellvitge': {
    id: 'metro-hospital-bellvitge',
    name: 'Hospital de Bellvitge',
    shortName: 'H. Bellvitge',
    city: "L'Hospitalet de Llobregat",
    zone: 'A',
    lat: 41.3573, lng: 2.1027,
    lines: ['L1'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
    description: "Terminal L1. Hospital Universitari de Bellvitge",
  },
  'metro-bellvitge': {
    id: 'metro-bellvitge',
    name: 'Bellvitge',
    shortName: 'Bellvitge',
    city: "L'Hospitalet de Llobregat",
    zone: 'A',
    lat: 41.3596, lng: 2.1056,
    lines: ['L1'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'metro-av-carrilet': {
    id: 'metro-av-carrilet',
    name: 'Av. Carrilet',
    shortName: 'Av. Carrilet',
    city: "L'Hospitalet de Llobregat",
    zone: 'A',
    lat: 41.3634, lng: 2.1093,
    lines: ['L1'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'metro-rambla-just-oliveras': {
    id: 'metro-rambla-just-oliveras',
    name: 'Rambla Just Oliveras',
    shortName: 'Rambla J.O.',
    city: "L'Hospitalet de Llobregat",
    zone: 'A',
    lat: 41.3652, lng: 2.1124,
    lines: ['L1'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'metro-can-serra': {
    id: 'metro-can-serra',
    name: 'Can Serra',
    shortName: 'Can Serra',
    city: "L'Hospitalet de Llobregat",
    zone: 'A',
    lat: 41.3659, lng: 2.1172,
    lines: ['L1'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-florida': {
    id: 'metro-florida',
    name: 'Florida',
    shortName: 'Florida',
    city: "L'Hospitalet de Llobregat",
    zone: 'A',
    lat: 41.3664, lng: 2.1218,
    lines: ['L1', 'L5'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'metro-torrassa': {
    id: 'metro-torrassa',
    name: 'Torrassa',
    shortName: 'Torrassa',
    city: "L'Hospitalet de Llobregat",
    zone: 'A',
    lat: 41.3675, lng: 2.1268,
    lines: ['L1'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'metro-santa-eulalia': {
    id: 'metro-santa-eulalia',
    name: 'Santa Eulàlia',
    shortName: 'Santa Eulàlia',
    city: "L'Hospitalet de Llobregat",
    zone: 'A',
    lat: 41.3694, lng: 2.1319,
    lines: ['L1'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'metro-mercat-nou': {
    id: 'metro-mercat-nou',
    name: 'Mercat Nou',
    shortName: 'Mercat Nou',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3705, lng: 2.1374,
    lines: ['L1'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-hostafrancs': {
    id: 'metro-hostafrancs',
    name: 'Hostafrancs',
    shortName: 'Hostafrancs',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3726, lng: 2.1423,
    lines: ['L1'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'metro-espanya': {
    id: 'metro-espanya',
    name: 'Espanya',
    shortName: 'Espanya',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3762, lng: 2.1467,
    lines: ['L1', 'L3'],
    connections: { bus: true, taxi: true },
    facilities: { accessibility: true, tickets: true, info: true },
    description: 'Intercanviador L1/L3. Connexió FGC L8',
  },
  'metro-rocafort': {
    id: 'metro-rocafort',
    name: 'Rocafort',
    shortName: 'Rocafort',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3794, lng: 2.1521,
    lines: ['L1'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-urgell': {
    id: 'metro-urgell',
    name: 'Urgell',
    shortName: 'Urgell',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3820, lng: 2.1573,
    lines: ['L1'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-universitat': {
    id: 'metro-universitat',
    name: 'Universitat',
    shortName: 'Universitat',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3845, lng: 2.1622,
    lines: ['L1', 'L2'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Intercanviador L1/L2',
  },
  'metro-catalunya': {
    id: 'metro-catalunya',
    name: 'Catalunya',
    shortName: 'Catalunya',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3872, lng: 2.1700,
    lines: ['L1', 'L3'],
    connections: { bus: true, taxi: true, bike: true },
    facilities: { accessibility: true, tickets: true, info: true, shops: true },
    description: 'Intercanviador L1/L3. Connexió FGC (S1/S2/S5/L6/L7)',
  },
  'metro-urquinaona': {
    id: 'metro-urquinaona',
    name: 'Urquinaona',
    shortName: 'Urquinaona',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3892, lng: 2.1733,
    lines: ['L1', 'L4'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Intercanviador L1/L4',
  },
  'metro-arc-de-triomf': {
    id: 'metro-arc-de-triomf',
    name: 'Arc de Triomf',
    shortName: 'Arc de Triomf',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3909, lng: 2.1806,
    lines: ['L1'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'metro-marina-l1': {
    id: 'metro-marina-l1',
    name: 'Marina',
    shortName: 'Marina',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3970, lng: 2.1878,
    lines: ['L1'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-glories': {
    id: 'metro-glories',
    name: 'Glòries',
    shortName: 'Glòries',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4033, lng: 2.1894,
    lines: ['L1'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'metro-clot': {
    id: 'metro-clot',
    name: 'Clot',
    shortName: 'Clot',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4063, lng: 2.1884,
    lines: ['L1', 'L2'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Intercanviador L1/L2',
  },
  'metro-navas': {
    id: 'metro-navas',
    name: 'Navas',
    shortName: 'Navas',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4097, lng: 2.1883,
    lines: ['L1'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-la-sagrera-l1': {
    id: 'metro-la-sagrera-l1',
    name: 'La Sagrera',
    shortName: 'La Sagrera',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4175, lng: 2.1928,
    lines: ['L1', 'L5'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Intercanviador L1/L5. Connexió Rodalies',
  },
  'metro-fabra-i-puig': {
    id: 'metro-fabra-i-puig',
    name: 'Fabra i Puig',
    shortName: 'Fabra i Puig',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4222, lng: 2.1917,
    lines: ['L1'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-baro-de-viver': {
    id: 'metro-baro-de-viver',
    name: 'Baró de Viver',
    shortName: 'Baró de Viver',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4290, lng: 2.1997,
    lines: ['L1'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-santa-coloma': {
    id: 'metro-santa-coloma',
    name: 'Santa Coloma',
    shortName: 'Santa Coloma',
    city: 'Santa Coloma de Gramenet',
    zone: 'A',
    lat: 41.4429, lng: 2.2097,
    lines: ['L1'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'metro-fondo': {
    id: 'metro-fondo',
    name: 'Fondo',
    shortName: 'Fondo',
    city: 'Santa Coloma de Gramenet',
    zone: 'A',
    lat: 41.4461, lng: 2.2119,
    lines: ['L1'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Terminal L1',
  },
  /* ── L2 ── */
  'metro-badalona-pompeu-fabra': {
    id: 'metro-badalona-pompeu-fabra',
    name: 'Badalona Pompeu Fabra',
    shortName: 'Badalona P.F.',
    city: 'Badalona',
    zone: 'A',
    lat: 41.4442, lng: 2.2272,
    lines: ['L2'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Terminal L2',
  },
  'metro-artigues-sant-adria': {
    id: 'metro-artigues-sant-adria',
    name: 'Artigues | Sant Adrià',
    shortName: 'Artigues | S.A.',
    city: 'Sant Adrià de Besòs',
    zone: 'A',
    lat: 41.4367, lng: 2.2213,
    lines: ['L2'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-sant-marti': {
    id: 'metro-sant-marti',
    name: 'Sant Martí',
    shortName: 'Sant Martí',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4282, lng: 2.2147,
    lines: ['L2'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-la-pau-l2': {
    id: 'metro-la-pau-l2',
    name: 'La Pau',
    shortName: 'La Pau',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4126, lng: 2.2092,
    lines: ['L2', 'L4'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Intercanviador L2/L4',
  },
  'metro-verneda': {
    id: 'metro-verneda',
    name: 'Verneda',
    shortName: 'Verneda',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4192, lng: 2.2043,
    lines: ['L2'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-bac-de-roda': {
    id: 'metro-bac-de-roda',
    name: 'Bac de Roda',
    shortName: 'Bac de Roda',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4089, lng: 2.1947,
    lines: ['L2'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-encants': {
    id: 'metro-encants',
    name: 'Encants',
    shortName: 'Encants',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4048, lng: 2.1858,
    lines: ['L2'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-sagrada-familia': {
    id: 'metro-sagrada-familia',
    name: 'Sagrada Família',
    shortName: 'Sagrada Família',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4036, lng: 2.1744,
    lines: ['L2', 'L5'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Intercanviador L2/L5. Accés directe a la Sagrada Família',
  },
  'metro-pg-gracia-l2': {
    id: 'metro-pg-gracia-l2',
    name: 'Passeig de Gràcia',
    shortName: 'Pg. Gràcia',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3917, lng: 2.1649,
    lines: ['L2', 'L3', 'L4'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Intercanviador L2/L3/L4',
  },
  'metro-sant-antoni': {
    id: 'metro-sant-antoni',
    name: 'Sant Antoni',
    shortName: 'Sant Antoni',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3797, lng: 2.1626,
    lines: ['L2'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-parallel': {
    id: 'metro-parallel',
    name: 'Paral·lel',
    shortName: 'Paral·lel',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3754, lng: 2.1627,
    lines: ['L2', 'L3'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Intercanviador L2/L3. Connexió Funicular de Montjuïc',
  },
  /* ── L3 ── */
  'metro-trinitat-nova': {
    id: 'metro-trinitat-nova',
    name: 'Trinitat Nova',
    shortName: 'Trinitat Nova',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4391, lng: 2.1745,
    lines: ['L3', 'L4'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Intercanviador L3/L4',
  },
  'metro-canyelles': {
    id: 'metro-canyelles',
    name: 'Canyelles',
    shortName: 'Canyelles',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4336, lng: 2.1699,
    lines: ['L3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-roquetes': {
    id: 'metro-roquetes',
    name: 'Roquetes',
    shortName: 'Roquetes',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4285, lng: 2.1670,
    lines: ['L3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-verdun': {
    id: 'metro-verdun',
    name: 'Verdun',
    shortName: 'Verdun',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4234, lng: 2.1640,
    lines: ['L11'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-tower-baro': {
    id: 'metro-tower-baro',
    name: 'Torre Baró | Vallbona',
    shortName: 'Torre Baró',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4441, lng: 2.1649,
    lines: ['L11'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-ciudad-meridiana': {
    id: 'metro-ciudad-meridiana',
    name: 'Ciudad Meridiana',
    shortName: 'Ciudad Meridiana',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4498, lng: 2.1688,
    lines: ['L11'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-can-cuias': {
    id: 'metro-can-cuias',
    name: 'Can Cuiàs',
    shortName: 'Can Cuiàs',
    city: 'Montcada i Reixac',
    zone: 'A',
    lat: 41.4553, lng: 2.1729,
    lines: ['L11'],
    connections: { bus: true },
    facilities: { tickets: true },
    description: 'Terminal L11',
  },
  'metro-montbau': {
    id: 'metro-montbau',
    name: 'Montbau',
    shortName: 'Montbau',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4248, lng: 2.1485,
    lines: ['L3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-mundet': {
    id: 'metro-mundet',
    name: 'Mundet',
    shortName: 'Mundet',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4193, lng: 2.1476,
    lines: ['L3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-penitents': {
    id: 'metro-penitents',
    name: 'Penitents',
    shortName: 'Penitents',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4154, lng: 2.1466,
    lines: ['L3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-vall-dhebron': {
    id: 'metro-vall-dhebron',
    name: "Vall d'Hebron",
    shortName: "Vall d'Hebron",
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4119, lng: 2.1459,
    lines: ['L3', 'L5'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
    description: "Intercanviador L3/L5",
  },
  'metro-el-carmel': {
    id: 'metro-el-carmel',
    name: 'El Carmel',
    shortName: 'El Carmel',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4036, lng: 2.1558,
    lines: ['L5'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-alfons-x': {
    id: 'metro-alfons-x',
    name: 'Alfons X',
    shortName: 'Alfons X',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4007, lng: 2.1601,
    lines: ['L3', 'L4'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-joanic': {
    id: 'metro-joanic',
    name: 'Joanic',
    shortName: 'Joanic',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3977, lng: 2.1621,
    lines: ['L3', 'L4'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-verdaguer': {
    id: 'metro-verdaguer',
    name: 'Verdaguer',
    shortName: 'Verdaguer',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3963, lng: 2.1643,
    lines: ['L3', 'L4', 'L5'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Intercanviador L3/L4/L5',
  },
  'metro-diagonal': {
    id: 'metro-diagonal',
    name: 'Diagonal',
    shortName: 'Diagonal',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3940, lng: 2.1601,
    lines: ['L3', 'L5'],
    connections: { bus: true, bike: true },
    facilities: { accessibility: true, tickets: true, info: true },
    description: 'Intercanviador L3/L5. Connexió FGC (L6/L7/S1/S2/S5)',
  },
  'metro-provenca': {
    id: 'metro-provenca',
    name: 'Provença',
    shortName: 'Provença',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3954, lng: 2.1582,
    lines: ['S1', 'S2', 'S5', 'L6', 'L7'],
    connections: {},
    facilities: { tickets: true },
    description: 'Estació FGC',
  },
  'metro-gracia-l3': {
    id: 'metro-gracia-l3',
    name: 'Gràcia',
    shortName: 'Gràcia',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4014, lng: 2.1569,
    lines: ['S1', 'S2', 'S5', 'L6', 'L7'],
    connections: { bus: true },
    facilities: { tickets: true },
    description: 'Estació FGC',
  },
  'metro-fontana': {
    id: 'metro-fontana',
    name: 'Fontana',
    shortName: 'Fontana',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4025, lng: 2.1548,
    lines: ['L3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-lesseps': {
    id: 'metro-lesseps',
    name: 'Lesseps',
    shortName: 'Lesseps',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4069, lng: 2.1498,
    lines: ['L3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-vallcarca': {
    id: 'metro-vallcarca',
    name: 'Vallcarca',
    shortName: 'Vallcarca',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4102, lng: 2.1472,
    lines: ['L3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-drassanes': {
    id: 'metro-drassanes',
    name: 'Drassanes',
    shortName: 'Drassanes',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3758, lng: 2.1756,
    lines: ['L3'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'metro-barceloneta': {
    id: 'metro-barceloneta',
    name: 'Barceloneta',
    shortName: 'Barceloneta',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3792, lng: 2.1866,
    lines: ['L4'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'metro-ciutadella-vo': {
    id: 'metro-ciutadella-vo',
    name: 'Ciutadella | Vila Olímpica',
    shortName: 'Ciutadella | V.O.',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3860, lng: 2.1966,
    lines: ['L4'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Connexió TRAM T4',
  },
  'metro-bogatell': {
    id: 'metro-bogatell',
    name: 'Bogatell',
    shortName: 'Bogatell',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3919, lng: 2.2028,
    lines: ['L4'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-llacuna': {
    id: 'metro-llacuna',
    name: 'Llacuna',
    shortName: 'Llacuna',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3979, lng: 2.2020,
    lines: ['L4'],
    connections: { bus: true },
    facilities: { tickets: true },
    description: 'Connexió TRAM T4/T5/T6',
  },
  'metro-poblenou': {
    id: 'metro-poblenou',
    name: 'Poblenou',
    shortName: 'Poblenou',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4016, lng: 2.2013,
    lines: ['L4'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-selva-de-mar': {
    id: 'metro-selva-de-mar',
    name: 'Selva de Mar',
    shortName: 'Selva de Mar',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4065, lng: 2.2011,
    lines: ['L4'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-el-maresme-forum': {
    id: 'metro-el-maresme-forum',
    name: 'El Maresme | Fòrum',
    shortName: 'El Maresme | Fòrum',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4132, lng: 2.2213,
    lines: ['L4'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Connexió TRAM T4/T5/T6',
  },
  /* ── L4 – trams interiors ── */
  'metro-jaume-i': {
    id: 'metro-jaume-i',
    name: 'Jaume I',
    shortName: 'Jaume I',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3833, lng: 2.1786,
    lines: ['L4'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'metro-girona': {
    id: 'metro-girona',
    name: 'Girona',
    shortName: 'Girona',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3940, lng: 2.1680,
    lines: ['L4'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-guinardo-h-sant-pau': {
    id: 'metro-guinardo-h-sant-pau',
    name: 'Guinardó | Hospital de Sant Pau',
    shortName: 'Guinardó | H.S.P.',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4115, lng: 2.1749,
    lines: ['L4'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'metro-can-baro': {
    id: 'metro-can-baro',
    name: 'Can Baró',
    shortName: 'Can Baró',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4155, lng: 2.1724,
    lines: ['L4'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-maragall': {
    id: 'metro-maragall',
    name: 'Maragall',
    shortName: 'Maragall',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4183, lng: 2.1821,
    lines: ['L4', 'L5'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Intercanviador L4/L5',
  },
  'metro-congres': {
    id: 'metro-congres',
    name: 'Congrés',
    shortName: 'Congrés',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4224, lng: 2.1864,
    lines: ['L4', 'L5'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-besós-mar': {
    id: 'metro-besós-mar',
    name: 'Besòs Mar',
    shortName: 'Besòs Mar',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4206, lng: 2.2281,
    lines: ['L4'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-besós': {
    id: 'metro-besós',
    name: 'Besòs',
    shortName: 'Besòs',
    city: 'Sant Adrià de Besòs',
    zone: 'A',
    lat: 41.4240, lng: 2.2297,
    lines: ['L4'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-pep-ventura': {
    id: 'metro-pep-ventura',
    name: 'Pep Ventura',
    shortName: 'Pep Ventura',
    city: 'Badalona',
    zone: 'A',
    lat: 41.4287, lng: 2.2327,
    lines: ['L2'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'metro-la-pau-l4': {
    id: 'metro-la-pau-l4',
    name: 'La Pau',
    shortName: 'La Pau',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4126, lng: 2.2092,
    lines: ['L4'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Terminal L4 / Connexió L2',
  },
  /* ── L5 ── */
  'metro-cornella-centre': {
    id: 'metro-cornella-centre',
    name: 'Cornellà Centre',
    shortName: 'Cornellà Centre',
    city: 'Cornellà de Llobregat',
    zone: 'A',
    lat: 41.3534, lng: 2.0794,
    lines: ['L5'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Terminal L5',
  },
  'metro-sant-ildefons-l5': {
    id: 'metro-sant-ildefons-l5',
    name: 'Sant Ildefons',
    shortName: 'Sant Ildefons',
    city: 'Cornellà de Llobregat',
    zone: 'A',
    lat: 41.3553, lng: 2.0830,
    lines: ['L5'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-can-boixeres': {
    id: 'metro-can-boixeres',
    name: 'Can Boixeres',
    shortName: 'Can Boixeres',
    city: "L'Hospitalet de Llobregat",
    zone: 'A',
    lat: 41.3571, lng: 2.0904,
    lines: ['L5'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-can-vidalet': {
    id: 'metro-can-vidalet',
    name: 'Can Vidalet',
    shortName: 'Can Vidalet',
    city: "L'Hospitalet de Llobregat",
    zone: 'A',
    lat: 41.3586, lng: 2.0982,
    lines: ['L5'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-pubilla-cases': {
    id: 'metro-pubilla-cases',
    name: 'Pubilla Cases',
    shortName: 'Pubilla Cases',
    city: "L'Hospitalet de Llobregat",
    zone: 'A',
    lat: 41.3607, lng: 2.1050,
    lines: ['L5'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-collblanc': {
    id: 'metro-collblanc',
    name: 'Collblanc',
    shortName: 'Collblanc',
    city: "L'Hospitalet de Llobregat",
    zone: 'A',
    lat: 41.3698, lng: 2.1321,
    lines: ['L5'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'metro-badal': {
    id: 'metro-badal',
    name: 'Badal',
    shortName: 'Badal',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3746, lng: 2.1397,
    lines: ['L5'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-pl-de-sants': {
    id: 'metro-pl-de-sants',
    name: 'Plaça de Sants',
    shortName: 'Plaça de Sants',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3769, lng: 2.1428,
    lines: ['L1', 'L5'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Intercanviador L1/L5',
  },
  'metro-sants-estacio': {
    id: 'metro-sants-estacio',
    name: 'Sants-Estació',
    shortName: 'Sants-Estació',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3793, lng: 2.1403,
    lines: ['L3', 'L5'],
    connections: { bus: true, taxi: true },
    facilities: { accessibility: true, tickets: true, info: true },
    description: 'Intercanviador L3/L5. Connexió Rodalies/AVE (Barcelona Sants)',
  },
  'metro-entenca': {
    id: 'metro-entenca',
    name: 'Entença',
    shortName: 'Entença',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3839, lng: 2.1497,
    lines: ['L5'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-hospital-clinic': {
    id: 'metro-hospital-clinic',
    name: 'Hospital Clínic',
    shortName: 'Hospital Clínic',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3871, lng: 2.1528,
    lines: ['L5'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'metro-sant-pau-dos-de-maig': {
    id: 'metro-sant-pau-dos-de-maig',
    name: 'Sant Pau | Dos de Maig',
    shortName: 'Sant Pau',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4065, lng: 2.1762,
    lines: ['L5'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-camp-de-larpa': {
    id: 'metro-camp-de-larpa',
    name: "Camp de l'Arpa",
    shortName: "Camp de l'Arpa",
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4103, lng: 2.1860,
    lines: ['L5'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-vilapicina': {
    id: 'metro-vilapicina',
    name: 'Vilapicina',
    shortName: 'Vilapicina',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4265, lng: 2.1756,
    lines: ['L5'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-horta': {
    id: 'metro-horta',
    name: 'Horta',
    shortName: 'Horta',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4284, lng: 2.1625,
    lines: ['L5'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  /* ── L3 estacions que faltaven ── */
  'metro-zona-universitaria': {
    id: 'metro-zona-universitaria',
    name: 'Zona Universitària',
    shortName: 'Zona Univ.',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3868, lng: 2.1134,
    lines: ['L3'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Terminal L3 sud',
  },
  'metro-palau-reial': {
    id: 'metro-palau-reial',
    name: 'Palau Reial',
    shortName: 'Palau Reial',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3882, lng: 2.1173,
    lines: ['L3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-maria-cristina': {
    id: 'metro-maria-cristina',
    name: 'Maria Cristina',
    shortName: 'Maria Cristina',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3893, lng: 2.1250,
    lines: ['L3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-les-corts': {
    id: 'metro-les-corts',
    name: 'Les Corts',
    shortName: 'Les Corts',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3840, lng: 2.1311,
    lines: ['L3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-placa-del-centre': {
    id: 'metro-placa-del-centre',
    name: 'Plaça del Centre',
    shortName: 'Pl. del Centre',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3786, lng: 2.1371,
    lines: ['L3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-tarragona': {
    id: 'metro-tarragona',
    name: 'Tarragona',
    shortName: 'Tarragona',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3768, lng: 2.1480,
    lines: ['L3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-poble-sec': {
    id: 'metro-poble-sec',
    name: 'Poble Sec',
    shortName: 'Poble Sec',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3726, lng: 2.1611,
    lines: ['L3'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'metro-liceu': {
    id: 'metro-liceu',
    name: 'Liceu',
    shortName: 'Liceu',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3809, lng: 2.1742,
    lines: ['L3'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'metro-valldaura': {
    id: 'metro-valldaura',
    name: 'Valldaura',
    shortName: 'Valldaura',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4299, lng: 2.1658,
    lines: ['L3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  /* ── L4 estacions que faltaven ── */
  'metro-via-julia': {
    id: 'metro-via-julia',
    name: 'Via Júlia',
    shortName: 'Via Júlia',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4351, lng: 2.1778,
    lines: ['L4'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-llucmajor': {
    id: 'metro-llucmajor',
    name: 'Llucmajor',
    shortName: 'Llucmajor',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4308, lng: 2.1817,
    lines: ['L4'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  /* ── L5 estacions que faltaven ── */
  'metro-gavarra': {
    id: 'metro-gavarra',
    name: 'Gavarra',
    shortName: 'Gavarra',
    city: 'Cornellà de Llobregat',
    zone: 'A',
    lat: 41.3543, lng: 2.0858,
    lines: ['L5'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-ernest-lluch': {
    id: 'metro-ernest-lluch',
    name: 'Ernest Lluch',
    shortName: 'Ernest Lluch',
    city: "L'Hospitalet de Llobregat",
    zone: 'A',
    lat: 41.3647, lng: 2.1193,
    lines: ['L5'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-virrei-amat': {
    id: 'metro-virrei-amat',
    name: 'Virrei Amat',
    shortName: 'Virrei Amat',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4234, lng: 2.1792,
    lines: ['L5'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'metro-el-coll-la-teixonera': {
    id: 'metro-el-coll-la-teixonera',
    name: 'El Coll | La Teixonera',
    shortName: 'El Coll | La Teixonera',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4154, lng: 2.1509,
    lines: ['L5'],
    connections: { bus: true },
    facilities: { tickets: true },
  },

  /* ══════════ TRAMBAIX ══════════ */
  'tram-francesc-macia': {
    id: 'tram-francesc-macia',
    name: 'Francesc Macià',
    shortName: 'Francesc Macià',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3922,
    lng: 2.1432,
    lines: ['T1', 'T2', 'T3'],
    connections: { metro: ['L5'], bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Terminal compartida TramBaix, connexió amb metro L5',
  },
  'tram-lilla': {
    id: 'tram-lilla',
    name: "L'Illa",
    shortName: "L'Illa",
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3905,
    lng: 2.1365,
    lines: ['T1', 'T2', 'T3'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'tram-numancia': {
    id: 'tram-numancia',
    name: 'Numància',
    shortName: 'Numància',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3893,
    lng: 2.1320,
    lines: ['T1', 'T2', 'T3'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'tram-bordeta-magoria': {
    id: 'tram-bordeta-magoria',
    name: 'Bordeta-Magòria',
    shortName: 'Bordeta-Magòria',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3743,
    lng: 2.1374,
    lines: ['T1', 'T2', 'T3'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'tram-ildefons-cerda': {
    id: 'tram-ildefons-cerda',
    name: 'Ildefons Cerdà',
    shortName: 'Ildefons Cerdà',
    city: "L'Hospitalet de Llobregat",
    zone: 'A',
    lat: 41.3611,
    lng: 2.1294,
    lines: ['T1', 'T2', 'T3'],
    connections: { metro: ['L1'], bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'tram-can-rigalt': {
    id: 'tram-can-rigalt',
    name: 'Can Rigalt',
    shortName: 'Can Rigalt',
    city: "L'Hospitalet de Llobregat",
    zone: 'A',
    lat: 41.3562,
    lng: 2.1133,
    lines: ['T1', 'T2', 'T3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-palaudaries': {
    id: 'tram-palaudaries',
    name: 'Palaudàries',
    shortName: 'Palaudàries',
    city: "L'Hospitalet de Llobregat",
    zone: 'A',
    lat: 41.3540,
    lng: 2.1037,
    lines: ['T1', 'T2', 'T3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-can-clota': {
    id: 'tram-can-clota',
    name: 'Can Clota',
    shortName: 'Can Clota',
    city: 'Esplugues de Llobregat',
    zone: 'A',
    lat: 41.3700,
    lng: 2.0927,
    lines: ['T1', 'T2', 'T3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-cornella-riera-tram': {
    id: 'tram-cornella-riera-tram',
    name: 'Cornellà-Riera',
    shortName: 'Cornellà-Riera',
    city: 'Cornellà de Llobregat',
    zone: 'A',
    lat: 41.3498,
    lng: 2.0811,
    lines: ['T1', 'T2', 'T3'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'tram-sant-ildefons': {
    id: 'tram-sant-ildefons',
    name: 'Sant Ildefons',
    shortName: 'Sant Ildefons',
    city: 'Cornellà de Llobregat',
    zone: 'A',
    lat: 41.3426,
    lng: 2.0720,
    lines: ['T1', 'T2', 'T3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-sant-marti-erm': {
    id: 'tram-sant-marti-erm',
    name: "Sant Martí de l'Erm",
    shortName: "Sant Martí de l'Erm",
    city: 'Cornellà de Llobregat',
    zone: 'A',
    lat: 41.3375,
    lng: 2.0650,
    lines: ['T1', 'T2', 'T3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-sant-joan-deu': {
    id: 'tram-sant-joan-deu',
    name: 'Sant Joan de Déu',
    shortName: 'Sant Joan de Déu',
    city: 'Sant Boi de Llobregat',
    zone: 'A',
    lat: 41.3440,
    lng: 2.0503,
    lines: ['T1', 'T2', 'T3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-fontsanta-fatjo': {
    id: 'tram-fontsanta-fatjo',
    name: 'Fontsanta-Fatjó',
    shortName: 'Fontsanta-Fatjó',
    city: 'Cornellà de Llobregat',
    zone: 'A',
    lat: 41.3431,
    lng: 2.0423,
    lines: ['T1', 'T2', 'T3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-almeda': {
    id: 'tram-almeda',
    name: 'Almeda',
    shortName: 'Almeda',
    city: 'Cornellà de Llobregat',
    zone: 'A',
    lat: 41.3451,
    lng: 2.0408,
    lines: ['T1', 'T2', 'T3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-sant-boi': {
    id: 'tram-sant-boi',
    name: 'Sant Boi',
    shortName: 'Sant Boi',
    city: 'Sant Boi de Llobregat',
    zone: 'A',
    lat: 41.3455,
    lng: 2.0347,
    lines: ['T1', 'T2', 'T3'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'tram-moli-nou': {
    id: 'tram-moli-nou',
    name: 'Molí Nou',
    shortName: 'Molí Nou',
    city: 'Sant Boi de Llobregat',
    zone: 'A',
    lat: 41.3388,
    lng: 2.0261,
    lines: ['T1', 'T2', 'T3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-bon-viatge': {
    id: 'tram-bon-viatge',
    name: 'Bon Viatge',
    shortName: 'Bon Viatge',
    city: 'Sant Boi de Llobregat',
    zone: 'A',
    lat: 41.3369,
    lng: 2.0201,
    lines: ['T1'],
    connections: { bus: true },
    facilities: { tickets: true },
    description: 'Terminal de la línia T1',
  },
  'tram-les-planes': {
    id: 'tram-les-planes',
    name: 'Les Planes',
    shortName: 'Les Planes',
    city: 'Sant Boi de Llobregat',
    zone: 'A',
    lat: 41.3347,
    lng: 2.0180,
    lines: ['T2'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-llevant-les-planes': {
    id: 'tram-llevant-les-planes',
    name: 'Llevant Les Planes',
    shortName: 'Llevant Les Planes',
    city: 'Sant Boi de Llobregat',
    zone: 'A',
    lat: 41.3325,
    lng: 2.0131,
    lines: ['T2'],
    connections: { bus: true },
    facilities: { tickets: true },
    description: 'Terminal de la línia T2',
  },
  'tram-guell': {
    id: 'tram-guell',
    name: 'Güell',
    shortName: 'Güell',
    city: 'Sant Feliu de Llobregat',
    zone: 'A',
    lat: 41.3832,
    lng: 2.0493,
    lines: ['T3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-mas-fonollar': {
    id: 'tram-mas-fonollar',
    name: 'Mas Fonollar',
    shortName: 'Mas Fonollar',
    city: 'Sant Feliu de Llobregat',
    zone: 'A',
    lat: 41.3856,
    lng: 2.0455,
    lines: ['T3'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-sant-feliu-hospital': {
    id: 'tram-sant-feliu-hospital',
    name: 'Sant Feliu Hospital',
    shortName: 'S.Feliu Hospital',
    city: 'Sant Feliu de Llobregat',
    zone: 'A',
    lat: 41.3799,
    lng: 2.0428,
    lines: ['T3'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'tram-sant-feliu-consell': {
    id: 'tram-sant-feliu-consell',
    name: 'Sant Feliu Consell Comarcal',
    shortName: 'Sant Feliu C.C.',
    city: 'Sant Feliu de Llobregat',
    zone: 'A',
    lat: 41.3793,
    lng: 2.0380,
    lines: ['T3'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Terminal de la línia T3',
  },

  /* ══════════ TRAMBESÒS ══════════ */
  'tram-ciutadella-vo': {
    id: 'tram-ciutadella-vo',
    name: 'Ciutadella | Vila Olímpica',
    shortName: 'Ciutadella | V.O.',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3876,
    lng: 2.1919,
    lines: ['T4'],
    connections: { metro: ['L4'], bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Terminal T4. Connexió amb metro L4 Vila Olímpica',
  },
  'tram-wellington': {
    id: 'tram-wellington',
    name: 'Wellington | UPF',
    shortName: 'Wellington | UPF',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3902,
    lng: 2.1886,
    lines: ['T4'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-marina': {
    id: 'tram-marina',
    name: 'Marina',
    shortName: 'Marina',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3941,
    lng: 2.1869,
    lines: ['T4'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-ca-larranyo': {
    id: 'tram-ca-larranyo',
    name: "Ca l'Aranyó",
    shortName: "Ca l'Aranyó",
    city: 'Barcelona',
    zone: 'A',
    lat: 41.3996,
    lng: 2.1920,
    lines: ['T4', 'T5', 'T6'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-rambla-poblenou': {
    id: 'tram-rambla-poblenou',
    name: 'Rambla del Poblenou',
    shortName: 'Rambla Poblenou',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4014,
    lng: 2.1955,
    lines: ['T4', 'T5', 'T6'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-llacuna': {
    id: 'tram-llacuna',
    name: 'Llacuna',
    shortName: 'Llacuna',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4038,
    lng: 2.1982,
    lines: ['T4', 'T5', 'T6'],
    connections: { metro: ['L4'], bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'tram-selva-de-mar': {
    id: 'tram-selva-de-mar',
    name: 'Selva de Mar',
    shortName: 'Selva de Mar',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4065,
    lng: 2.2011,
    lines: ['T4', 'T5', 'T6'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-fluvia': {
    id: 'tram-fluvia',
    name: 'Fluvià',
    shortName: 'Fluvià',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4097,
    lng: 2.2061,
    lines: ['T4', 'T5', 'T6'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-la-pau': {
    id: 'tram-la-pau',
    name: 'La Pau',
    shortName: 'La Pau',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4126,
    lng: 2.2092,
    lines: ['T4', 'T5', 'T6'],
    connections: { metro: ['L4'], bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'tram-el-maresme-forum': {
    id: 'tram-el-maresme-forum',
    name: 'El Maresme | Fòrum',
    shortName: 'El Maresme | Fòrum',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4132,
    lng: 2.2213,
    lines: ['T4', 'T5', 'T6'],
    connections: { metro: ['L4'], bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Connexió metro L4 El Maresme-Fòrum',
  },
  'tram-la-mina': {
    id: 'tram-la-mina',
    name: 'La Mina',
    shortName: 'La Mina',
    city: 'Sant Adrià de Besòs',
    zone: 'A',
    lat: 41.4184,
    lng: 2.2210,
    lines: ['T4', 'T5', 'T6'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-sant-adria': {
    id: 'tram-sant-adria',
    name: 'Sant Adrià',
    shortName: 'Sant Adrià',
    city: 'Sant Adrià de Besòs',
    zone: 'A',
    lat: 41.4222,
    lng: 2.2260,
    lines: ['T4', 'T5', 'T6'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-estacio-sant-adria': {
    id: 'tram-estacio-sant-adria',
    name: 'Estació de Sant Adrià',
    shortName: 'Estació Sant Adrià',
    city: 'Sant Adrià de Besòs',
    zone: 'A',
    lat: 41.4252,
    lng: 2.2271,
    lines: ['T4', 'T6'],
    connections: { bus: true },
    facilities: { tickets: true },
    description: 'Terminal T4 i T6',
  },
  'tram-campus-diagonal-besos': {
    id: 'tram-campus-diagonal-besos',
    name: 'Campus Diagonal-Besòs',
    shortName: 'Campus D.-Besòs',
    city: 'Sant Adrià de Besòs',
    zone: 'A',
    lat: 41.4152,
    lng: 2.2230,
    lines: ['T5'],
    connections: { bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'tram-port-forum': {
    id: 'tram-port-forum',
    name: 'Port Fòrum',
    shortName: 'Port Fòrum',
    city: 'Sant Adrià de Besòs',
    zone: 'A',
    lat: 41.4189,
    lng: 2.2262,
    lines: ['T5'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-parc-ciutadella': {
    id: 'tram-parc-ciutadella',
    name: 'Parc de la Ciutadella',
    shortName: 'Parc Ciutadella',
    city: 'Badalona',
    zone: 'A',
    lat: 41.4334,
    lng: 2.2270,
    lines: ['T5'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-la-catalana': {
    id: 'tram-la-catalana',
    name: 'La Catalana',
    shortName: 'La Catalana',
    city: 'Badalona',
    zone: 'A',
    lat: 41.4377,
    lng: 2.2303,
    lines: ['T5'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-sant-roc': {
    id: 'tram-sant-roc',
    name: 'Sant Roc',
    shortName: 'Sant Roc',
    city: 'Badalona',
    zone: 'A',
    lat: 41.4349,
    lng: 2.2276,
    lines: ['T5'],
    connections: { bus: true },
    facilities: { tickets: true },
  },
  'tram-gorg': {
    id: 'tram-gorg',
    name: 'Gorg',
    shortName: 'Gorg',
    city: 'Badalona',
    zone: 'A',
    lat: 41.4400,
    lng: 2.2332,
    lines: ['T5'],
    connections: { metro: ['L2', 'L10N'], bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Terminal T5. Connexió metro L2 i L10 Nord',
  },
  'tram-glories': {
    id: 'tram-glories',
    name: 'Glòries',
    shortName: 'Glòries',
    city: 'Barcelona',
    zone: 'A',
    lat: 41.4033,
    lng: 2.1894,
    lines: ['T5', 'T6'],
    connections: { metro: ['L1'], bus: true },
    facilities: { accessibility: true, tickets: true },
    description: 'Terminal T5 i T6. Connexió metro L1',
  },

  /* ══════════════════ RODALIES — ESTACIONS COMPLEMENTÀRIES ══════════════════ */
  'molins-de-rei': {
    id: 'molins-de-rei', name: 'Molins de Rei', shortName: 'Molins de Rei',
    city: 'Molins de Rei', zone: '3', lat: 41.4136, lng: 1.9997,
    lines: ['R1'], connections: { bus: true }, facilities: { tickets: true },
  },
  'sant-vicenc-horts': {
    id: 'sant-vicenc-horts', name: 'Sant Vicenç dels Horts', shortName: 'St. Vicenç Horts',
    city: 'Sant Vicenç dels Horts', zone: '3', lat: 41.3930, lng: 2.0068,
    lines: ['R1'], connections: { bus: true }, facilities: { tickets: true },
  },
  'palleja': {
    id: 'palleja', name: 'Pallejà', shortName: 'Pallejà',
    city: 'Pallejà', zone: '3', lat: 41.4011, lng: 1.9955,
    lines: ['R1'], connections: { bus: true }, facilities: { tickets: true },
  },
  'cervello-la-pobla': {
    id: 'cervello-la-pobla', name: 'Cervelló-la Pobla', shortName: 'Cervelló',
    city: 'Cervelló', zone: '3', lat: 41.4152, lng: 1.9882,
    lines: ['R1'], connections: { bus: true }, facilities: { tickets: true },
  },
  'sant-andreu-de-la-barca': {
    id: 'sant-andreu-de-la-barca', name: 'Sant Andreu de la Barca', shortName: 'St. Andreu Barca',
    city: 'Sant Andreu de la Barca', zone: '3', lat: 41.4316, lng: 1.9707,
    lines: ['R1', 'R4'], connections: { bus: true }, facilities: { tickets: true },
  },
  'castellbisbal': {
    id: 'castellbisbal', name: 'Castellbisbal', shortName: 'Castellbisbal',
    city: 'Castellbisbal', zone: '3', lat: 41.4720, lng: 1.9823,
    lines: ['R1', 'R4'], connections: { bus: true }, facilities: { tickets: true },
  },
  'el-papiol': {
    id: 'el-papiol', name: 'El Papiol', shortName: 'El Papiol',
    city: 'El Papiol', zone: '3', lat: 41.4528, lng: 2.0076,
    lines: ['R1', 'R8'], connections: { bus: true }, facilities: { tickets: true },
  },
  'montcada-reixac-manresa': {
    id: 'montcada-reixac-manresa', name: 'Montcada i Reixac - Manresa', shortName: 'Montcada-Manresa',
    city: 'Montcada i Reixac', zone: '2', lat: 41.4881, lng: 2.1813,
    lines: ['R1', 'R8'], connections: { bus: true }, facilities: { tickets: true },
  },
  'montcada-bifurcacio': {
    id: 'montcada-bifurcacio', name: 'Montcada Bifurcació', shortName: 'Montcada Bifurc.',
    city: 'Montcada i Reixac', zone: '2', lat: 41.4849, lng: 2.1872,
    lines: ['R1', 'R2', 'R2N'], connections: { bus: true }, facilities: { tickets: true },
  },
  'barcelona-clot-arago-r': {
    id: 'barcelona-clot-arago-r', name: 'Barcelona Clot-Aragó', shortName: 'Clot-Aragó',
    city: 'Barcelona', zone: 'A', lat: 41.4063, lng: 2.1884,
    lines: ['R1', 'R2', 'R3'], connections: { metro: ['L1', 'L2'], bus: true }, facilities: { accessibility: true, tickets: true },
  },
  'granollers-canovelles': {
    id: 'granollers-canovelles', name: 'Granollers-Canovelles', shortName: 'Granollers-Canov.',
    city: 'Granollers', zone: '4', lat: 41.6108, lng: 2.2872,
    lines: ['R1', 'R2', 'R8'], connections: { bus: true }, facilities: { tickets: true },
  },
  'les-franqueses-valles': {
    id: 'les-franqueses-valles', name: 'Les Franqueses del Vallès', shortName: 'Les Franqueses',
    city: 'Les Franqueses del Vallès', zone: '4', lat: 41.6295, lng: 2.3097,
    lines: ['R1', 'R3'], connections: { bus: true }, facilities: { tickets: true },
  },
  'la-garriga': {
    id: 'la-garriga', name: 'La Garriga', shortName: 'La Garriga',
    city: 'La Garriga', zone: '4', lat: 41.6814, lng: 2.2874,
    lines: ['R1', 'R3'], connections: { bus: true }, facilities: { tickets: true },
  },
  'figaro': {
    id: 'figaro', name: 'Figaró', shortName: 'Figaró',
    city: 'Figaró-Montmany', zone: '5', lat: 41.7227, lng: 2.2667,
    lines: ['R1', 'R3'], connections: { bus: true }, facilities: { tickets: true },
  },
  'gualba': {
    id: 'gualba', name: 'Gualba', shortName: 'Gualba',
    city: 'Gualba', zone: '5', lat: 41.7477, lng: 2.4060,
    lines: ['R1'], connections: { bus: true }, facilities: { tickets: true },
  },
  'palautordera': {
    id: 'palautordera', name: 'Palautordera', shortName: 'Palautordera',
    city: 'Sant Celoni', zone: '5', lat: 41.7073, lng: 2.4800,
    lines: ['R1', 'R2N'], connections: { bus: true }, facilities: { tickets: true },
  },
  'hostalric': {
    id: 'hostalric', name: 'Hostalric', shortName: 'Hostalric',
    city: 'Hostalric', zone: '6', lat: 41.7428, lng: 2.6310,
    lines: ['R1', 'R2N'], connections: { bus: true }, facilities: { tickets: true },
  },
  'cunit': {
    id: 'cunit', name: 'Cunit', shortName: 'Cunit',
    city: 'Cunit', zone: '4', lat: 41.2013, lng: 1.6380,
    lines: ['R2', 'R4'], connections: { bus: true }, facilities: { tickets: true },
  },
  'castelldefels-platja': {
    id: 'castelldefels-platja', name: 'Castelldefels Platja', shortName: 'Castelldefels Platja',
    city: 'Castelldefels', zone: '3', lat: 41.2693, lng: 1.9783,
    lines: ['R2', 'R2S'], connections: { bus: true }, facilities: { tickets: true },
  },
  'hospitalet-llobregat': {
    id: 'hospitalet-llobregat', name: "L'Hospitalet de Llobregat", shortName: "L'Hospitalet",
    city: "L'Hospitalet de Llobregat", zone: 'A', lat: 41.3619, lng: 2.1003,
    lines: ['R3'], connections: { metro: ['L1', 'L9S', 'L10S'], bus: true }, facilities: { accessibility: true, tickets: true },
  },
  'centelles': {
    id: 'centelles', name: 'Centelles', shortName: 'Centelles',
    city: 'Centelles', zone: '5', lat: 41.7950, lng: 2.2290,
    lines: ['R3'], connections: { bus: true }, facilities: { tickets: true },
  },
  'balenya-el-tona': {
    id: 'balenya-el-tona', name: 'Balenyà-El Tona', shortName: 'Balenyà-El Tona',
    city: 'Balenyà', zone: '5', lat: 41.8283, lng: 2.2103,
    lines: ['R3'], connections: { bus: true }, facilities: { tickets: true },
  },
  'balenya-tona-seva': {
    id: 'balenya-tona-seva', name: 'Balenyà-Tona-Seva', shortName: 'Balenyà-Tona',
    city: 'Balenyà', zone: '5', lat: 41.8388, lng: 2.2256,
    lines: ['R3'], connections: { bus: true }, facilities: { tickets: true },
  },
  'manlleu': {
    id: 'manlleu', name: 'Manlleu', shortName: 'Manlleu',
    city: 'Manlleu', zone: '5', lat: 42.0014, lng: 2.2817,
    lines: ['R3'], connections: { bus: true }, facilities: { tickets: true },
  },
  'torello': {
    id: 'torello', name: 'Torelló', shortName: 'Torelló',
    city: 'Torelló', zone: '5', lat: 42.0490, lng: 2.2637,
    lines: ['R3'], connections: { bus: true }, facilities: { tickets: true },
  },
  'sant-quirze-besora': {
    id: 'sant-quirze-besora', name: 'Sant Quirze de Besora', shortName: 'St. Quirze Besora',
    city: 'Sant Quirze de Besora', zone: '6', lat: 42.1059, lng: 2.2099,
    lines: ['R3'], connections: { bus: true }, facilities: { tickets: true },
  },
  'ribes-de-freser': {
    id: 'ribes-de-freser', name: 'Ribes de Freser', shortName: 'Ribes de Freser',
    city: 'Ribes de Freser', zone: '6', lat: 42.3009, lng: 2.1639,
    lines: ['R3'], connections: { bus: true }, facilities: { tickets: true },
  },
  'queralbs': {
    id: 'queralbs', name: 'Queralbs', shortName: 'Queralbs',
    city: 'Queralbs', zone: '6', lat: 42.3320, lng: 2.1381,
    lines: ['R3'], connections: {}, facilities: { tickets: true },
  },
  'nuria': {
    id: 'nuria', name: 'Núria', shortName: 'Núria',
    city: 'Queralbs', zone: '6', lat: 42.3874, lng: 2.1481,
    lines: ['R3'], connections: {}, facilities: { tickets: true },
    description: 'Cremallera de Núria',
  },
  'la-molina': {
    id: 'la-molina', name: 'La Molina', shortName: 'La Molina',
    city: 'Alp', zone: '6', lat: 42.3378, lng: 1.9449,
    lines: ['R3'], connections: { bus: true }, facilities: { tickets: true },
  },
  'alp': {
    id: 'alp', name: 'Alp', shortName: 'Alp',
    city: 'Alp', zone: '6', lat: 42.3408, lng: 1.8924,
    lines: ['R3'], connections: { bus: true }, facilities: { tickets: true },
  },
  'urtx-alp': {
    id: 'urtx-alp', name: 'Urtx-Alp', shortName: 'Urtx-Alp',
    city: 'Alp', zone: '6', lat: 42.3488, lng: 1.8741,
    lines: ['R3'], connections: {}, facilities: { tickets: true },
  },
  'puigcerda': {
    id: 'puigcerda', name: 'Puigcerdà', shortName: 'Puigcerdà',
    city: 'Puigcerdà', zone: '6', lat: 42.4317, lng: 1.9265,
    lines: ['R3'], connections: { bus: true }, facilities: { accessibility: true, tickets: true },
  },
  'el-vendrell': {
    id: 'el-vendrell', name: 'El Vendrell', shortName: 'El Vendrell',
    city: 'El Vendrell', zone: '4', lat: 41.2182, lng: 1.5352,
    lines: ['R4'], connections: { bus: true }, facilities: { tickets: true },
  },
  'calafell': {
    id: 'calafell', name: 'Calafell', shortName: 'Calafell',
    city: 'Calafell', zone: '4', lat: 41.1997, lng: 1.5685,
    lines: ['R4'], connections: { bus: true }, facilities: { tickets: true },
  },
  'segur-de-calafell': {
    id: 'segur-de-calafell', name: 'Segur de Calafell', shortName: 'Segur Calafell',
    city: 'Calafell', zone: '4', lat: 41.1887, lng: 1.5955,
    lines: ['R4'], connections: { bus: true }, facilities: { tickets: true },
  },
  'terrassa-rambla': {
    id: 'terrassa-rambla', name: 'Terrassa Rambla', shortName: 'Terrassa Rambla',
    city: 'Terrassa', zone: '3', lat: 41.5611, lng: 2.0088,
    lines: ['R4'], connections: { bus: true }, facilities: { accessibility: true, tickets: true },
  },
  'sabadell-rambla': {
    id: 'sabadell-rambla', name: 'Sabadell Rambla', shortName: 'Sabadell Rambla',
    city: 'Sabadell', zone: '3', lat: 41.5475, lng: 2.1086,
    lines: ['R4'], connections: { bus: true }, facilities: { tickets: true },
  },
  'martorell-enllac': {
    id: 'martorell-enllac', name: 'Martorell Enllaç', shortName: 'Martorell Enllaç',
    city: 'Martorell', zone: '3', lat: 41.4753, lng: 1.9333,
    lines: ['R4', 'R7', 'R8'], connections: { bus: true }, facilities: { tickets: true },
  },
  'cerdanyola-universitat': {
    id: 'cerdanyola-universitat', name: 'Cerdanyola Universitat', shortName: 'Cerdanyola Univ.',
    city: 'Cerdanyola del Vallès', zone: '3', lat: 41.5033, lng: 2.1027,
    lines: ['R8'], connections: { bus: true }, facilities: { tickets: true },
  },
  'sabadell-sud': {
    id: 'sabadell-sud', name: 'Sabadell Sud', shortName: 'Sabadell Sud',
    city: 'Sabadell', zone: '3', lat: 41.5285, lng: 2.1053,
    lines: ['R8'], connections: { bus: true }, facilities: { tickets: true },
  },
  'sabadell-centre': {
    id: 'sabadell-centre', name: 'Sabadell Centre', shortName: 'Sabadell Centre',
    city: 'Sabadell', zone: '3', lat: 41.5431, lng: 2.1082,
    lines: ['R8'], connections: { bus: true }, facilities: { tickets: true },
  },

  /* ══════════════════ FGC — ESTACIONS COMPLEMENTÀRIES ══════════════════ */
  'padua-fgc': {
    id: 'padua-fgc', name: 'Pàdua', shortName: 'Pàdua',
    city: 'Barcelona', zone: 'A', lat: 41.4085, lng: 2.1410,
    lines: ['L7'], connections: {}, facilities: { tickets: true },
  },
  'el-putxet-fgc': {
    id: 'el-putxet-fgc', name: 'El Putxet', shortName: 'El Putxet',
    city: 'Barcelona', zone: 'A', lat: 41.4100, lng: 2.1373,
    lines: ['L7'], connections: {}, facilities: { tickets: true },
  },
  'la-floresta-fgc': {
    id: 'la-floresta-fgc', name: 'La Floresta', shortName: 'La Floresta',
    city: 'Sant Cugat del Vallès', zone: '1B', lat: 41.4480, lng: 2.0948,
    lines: ['S1', 'S2', 'S5'], connections: {}, facilities: { tickets: true },
  },
  'terrassa-est-fgc': {
    id: 'terrassa-est-fgc', name: 'Terrassa-Est', shortName: 'Terrassa-Est',
    city: 'Terrassa', zone: '3', lat: 41.5647, lng: 2.0261,
    lines: ['S1', 'S5'], connections: { bus: true }, facilities: { tickets: true },
  },
  'terrassa-nacions-unides-fgc': {
    id: 'terrassa-nacions-unides-fgc', name: 'Terrassa-Nacions Unides', shortName: 'Terrassa-Nac. Unides',
    city: 'Terrassa', zone: '3', lat: 41.5678, lng: 2.0165,
    lines: ['S1', 'S5'], connections: { bus: true }, facilities: { accessibility: true, tickets: true },
  },
  'castellbell-vilar': {
    id: 'castellbell-vilar', name: 'Castellbell i el Vilar', shortName: 'Castellbell',
    city: 'Castellbell i el Vilar', zone: '4', lat: 41.6413, lng: 1.9028,
    lines: ['S5'], connections: {}, facilities: { tickets: true },
  },
  'pl-espanya-fgc': {
    id: 'pl-espanya-fgc', name: 'Pl. Espanya', shortName: 'Pl. Espanya',
    city: 'Barcelona', zone: 'A', lat: 41.3756, lng: 2.1494,
    lines: ['L9FGC'], connections: { metro: ['L1', 'L3'], bus: true },
    facilities: { accessibility: true, tickets: true },
  },
  'gava-parc': {
    id: 'gava-parc', name: 'Gavà Parc', shortName: 'Gavà Parc',
    city: 'Gavà', zone: '3', lat: 41.2995, lng: 2.0007,
    lines: ['L9FGC'], connections: { bus: true }, facilities: { tickets: true },
  },
  'begues': {
    id: 'begues', name: 'Begues', shortName: 'Begues',
    city: 'Begues', zone: '3', lat: 41.3094, lng: 1.9480,
    lines: ['L9FGC'], connections: { bus: true }, facilities: { tickets: true },
  },
  'martorell-fgc': {
    id: 'martorell-fgc', name: 'Martorell-Enllaç', shortName: 'Martorell-Enllaç',
    city: 'Martorell', zone: '3', lat: 41.4753, lng: 1.9333,
    lines: ['L9FGC'], connections: { bus: true }, facilities: { tickets: true },
  },
  'piera': {
    id: 'piera', name: 'Piera', shortName: 'Piera',
    city: 'Piera', zone: '4', lat: 41.5208, lng: 1.7524,
    lines: ['L9FGC'], connections: { bus: true }, facilities: { tickets: true },
  },
  'igualada': {
    id: 'igualada', name: 'Igualada', shortName: 'Igualada',
    city: 'Igualada', zone: '5', lat: 41.5755, lng: 1.6178,
    lines: ['L9FGC'], connections: { bus: true }, facilities: { accessibility: true, tickets: true },
  },

  /* ══════════════════ METRO — ESTACIONS COMPLEMENTÀRIES ══════════════════ */
  'metro-torras-bages': {
    id: 'metro-torras-bages', name: 'Torras i Bages', shortName: 'Torras i Bages',
    city: 'Barcelona', zone: 'A', lat: 41.4355, lng: 2.1932,
    lines: ['L1'], connections: { bus: true }, facilities: { tickets: true },
  },
  'metro-trinitat-vella': {
    id: 'metro-trinitat-vella', name: 'Trinitat Vella', shortName: 'Trinitat Vella',
    city: 'Barcelona', zone: 'A', lat: 41.4395, lng: 2.1981,
    lines: ['L1'], connections: { bus: true }, facilities: { tickets: true },
  },
  'metro-tetuan': {
    id: 'metro-tetuan', name: 'Tetuan', shortName: 'Tetuan',
    city: 'Barcelona', zone: 'A', lat: 41.3977, lng: 2.1760,
    lines: ['L2'], connections: { bus: true }, facilities: { accessibility: true, tickets: true },
  },
  'metro-monumental': {
    id: 'metro-monumental', name: 'Monumental', shortName: 'Monumental',
    city: 'Barcelona', zone: 'A', lat: 41.3985, lng: 2.1796,
    lines: ['L2'], connections: { bus: true }, facilities: { tickets: true },
  },
};

/* ─── ZONAS TARIFARIAS ─── */
const ZONES = {
  A:   { name: 'Zona A',  price: 2.55 },
  B:   { name: 'Zona B',  price: 3.35 },
  '1B':{ name: 'Zona 1B', price: 2.90 },
  '2': { name: 'Zona 2',  price: 3.35 },
  '3': { name: 'Zona 3',  price: 4.10 },
  '4': { name: 'Zona 4',  price: 4.85 },
  '4B':{ name: 'Zona 4B', price: 4.85 },
  '5': { name: 'Zona 5',  price: 5.50 },
  '6': { name: 'Zona 6',  price: 6.50 },
};

const LINE_STATUS_TYPES = {
  NORMAL:  { id: 'normal',  label: 'Servei normal',   color: '#22c55e', severity: 0 },
  DELAY:   { id: 'delay',   label: 'Retards',          color: '#f59e0b', severity: 1 },
  PARTIAL: { id: 'partial', label: 'Servei parcial',   color: '#f97316', severity: 2 },
  CUT:     { id: 'cut',     label: 'Tall de servei',   color: '#ef4444', severity: 3 },
};

function getSimulatedLineStatus(lineId) {
  const hour = new Date().getHours();
  const seed = (lineId.charCodeAt(0) + lineId.length + hour) % 10;
  if (seed === 0) return { ...LINE_STATUS_TYPES.DELAY, message: 'Retards de fins a 8 minuts per incidència tècnica en la infraestructura' };
  if (seed === 1) return { ...LINE_STATUS_TYPES.PARTIAL, message: 'Servei parcial entre Sants i Clot-Aragó per obres' };
  return { ...LINE_STATUS_TYPES.NORMAL, message: 'Tots els trens circulen amb normalitat' };
}

function getSimulatedDepartures(stationId, lineId, count = 6) {
  const now = new Date();
  const departures = [];
  let baseDelay = 0;
  for (let i = 0; i < count; i++) {
    const addMin = baseDelay + (i * (lineId.startsWith('R') ? 15 : 10)) + Math.floor(Math.random() * 3);
    const dt = new Date(now.getTime() + addMin * 60000);
    const hh = String(dt.getHours()).padStart(2, '0');
    const mm = String(dt.getMinutes()).padStart(2, '0');
    const minutesAway = Math.round((dt - now) / 60000);
    departures.push({
      time: `${hh}:${mm}`,
      minutesAway,
      platform: (i % 3) + 1,
      delayed: Math.random() < 0.1,
      delayMin: Math.random() < 0.1 ? Math.floor(Math.random() * 8) + 1 : 0,
    });
  }
  return departures;
}

/* ─── EXPORTACIONES GLOBALES ─── */
window.MOVCAT_DATA = {
  LINE_COLORS,
  OPERATORS,
  LINES,
  STATIONS,
  ZONES,
  LINE_STATUS_TYPES,
  getSimulatedLineStatus,
  getSimulatedDepartures,
};





const StationsModule = (() => {
  let favorites = [];
  const FAVORITES_KEY = 'movcat_favorites_v3';

  /* ══════════════════ FAVORITS ══════════════════ */
  function loadFavorites() {
    try {
      const raw = localStorage.getItem(FAVORITES_KEY);
      favorites = raw ? JSON.parse(raw) : [];
    } catch (_) {
      favorites = [];
    }
    return favorites;
  }

  function saveFavorites() {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (_) {}
  }

  function toggleFavorite(stationId) {
    const idx = favorites.indexOf(stationId);
    const added = idx === -1;
    if (added) {
      favorites.push(stationId);
    } else {
      favorites.splice(idx, 1);
    }
    saveFavorites();
    // Update sidebar if available
    if (window.UIModule) UIModule.renderSidebarFavorites();
    return added;
  }

  function isFavorite(stationId) {
    return favorites.includes(stationId);
  }

  function getFavoriteStations() {
    const { STATIONS } = window.MOVCAT_DATA;
    return favorites.map(id => STATIONS[id]).filter(Boolean);
  }

  /* ══════════════════ CERCA ══════════════════ */
  function normalize(str) {
    return (str || '').toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function searchStations(query, limit = 12) {
    const { STATIONS } = window.MOVCAT_DATA;
    if (!query || query.trim().length < 1) return [];
    const q = normalize(query.trim());

    return Object.values(STATIONS)
      .filter(st => {
        const name = normalize(st.name);
        const city = normalize(st.city || '');
        const short = normalize(st.shortName || '');
        return name.includes(q) || city.includes(q) || short.includes(q);
      })
      .sort((a, b) => {
        const na = normalize(a.name);
        const nb = normalize(b.name);
        const aStart = na.startsWith(q) ? 0 : 1;
        const bStart = nb.startsWith(q) ? 0 : 1;
        if (aStart !== bStart) return aStart - bStart;
        const aFav = isFavorite(a.id) ? 0 : 1;
        const bFav = isFavorite(b.id) ? 0 : 1;
        if (aFav !== bFav) return aFav - bFav;
        return a.name.localeCompare(b.name, 'ca');
      })
      .slice(0, limit);
  }

  /* ══════════════════ DETALL ══════════════════ */
  function getStationDetail(stationId) {
    const { STATIONS, LINES, getSimulatedDepartures, getSimulatedLineStatus } = window.MOVCAT_DATA;
    const station = STATIONS[stationId];
    if (!station) return null;

    const lineDetails = (station.lines || []).map(lineId => {
      const line = LINES[lineId];
      if (!line) return null;
      return {
        ...line,
        status:     getSimulatedLineStatus(lineId),
        departures: getSimulatedDepartures(stationId, lineId, 5),
      };
    }).filter(Boolean);

    return { ...station, lineDetails, isFavorite: isFavorite(stationId) };
  }

  /* ══════════════════ RENDER PANEL ESTACIÓ ══════════════════ */
  function renderStationDetail(stationId) {
    const detail = getStationDetail(stationId);
    if (!detail) { console.warn('MovCat: estació no trobada', stationId); return; }
    const panel = document.getElementById('stationDetailPanel');
    const cnt   = panel ? panel.querySelector('.station-detail-content') : null;
    if (!panel || !cnt) return;

    const { LINE_COLORS, LINES } = window.MOVCAT_DATA;
    const lang        = I18N.getLang();
    const firstLineId = detail.lines?.[0];
    const firstLine   = firstLineId ? LINES[firstLineId] : null;
    const terminus    = firstLine?.terminus || [];
    const favActive   = detail.isFavorite ? 'active' : '';

    const facilityLabels = {
      accessibility: lang==='es'?'Accesible':'Accessible',
      wifi: 'Wi-Fi', lockers: 'Consigna',
      info:    lang==='es'?'Información':'Informació',
      tickets: lang==='es'?'Venta billetes':'Venda bitllets',
      shops:   lang==='es'?'Comercios':'Comerços',
      cafeteria:'Cafeteria', funicular:'Funicular',
      parking: lang==='es'?'Aparcamiento':'Aparcament',
    };
    const facilityIcons = {
      accessibility:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><path d="M7 22l2-8h6l2 8"/></svg>',
      wifi:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/></svg>',
      tickets:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/></svg>',
      parking:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>',
      shops:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
      cafeteria:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>',
      funicular:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-10"/><path d="M15 17l6-10"/><rect x="6" y="10" width="12" height="8" rx="2"/></svg>',
      info:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
      lockers:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="10" x2="12" y2="14"/></svg>',
    };

    const hasFacilities = Object.entries(detail.facilities||{}).some(([,v])=>v);

    cnt.innerHTML = `
      <div class="sdp-header">
        <button class="sdp-back" id="detailBackBtn" aria-label="Tornar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div class="sdp-header-info">
          <div class="sdp-lines-row">
            ${(detail.lines||[]).map(lid=>`<span class="sdp-line-badge" style="background:${LINE_COLORS[lid]||'#888'}">${lid}</span>`).join('')}
          </div>
          <h1 class="sdp-name">${detail.name}</h1>
          <p class="sdp-sub">${firstLine?.description||detail.city||''}${detail.zone?' · Zona '+detail.zone:''}</p>
        </div>
      </div>

      <div class="sdp-departures-section">
        <div class="sdp-section-label">${lang==='es'?'PRÓXIMAS SALIDAS':'PROPERES SORTIDES'}</div>
        ${detail.lineDetails.length?detail.lineDetails.map(line=>`
          <div class="sdp-dep-block">
            <div class="sdp-dep-block-header">
              <span class="sdp-dep-line-badge" style="background:${line.color}">${line.label}</span>
              <span class="sdp-dep-desc">${line.description||''}</span>
              <span class="sdp-dep-status" style="color:${line.status.color}">${line.status.label}</span>
            </div>
            ${line.departures.map(dep=>`
              <div class="sdp-dep-row">
                <span class="sdp-dep-time ${dep.delayed?'sdp-dep-delayed':''}">${dep.time}</span>
                <span class="sdp-dep-rel">${dep.minutesAway<=0?(lang==='es'?'Ahora':'Ara'):dep.minutesAway+' min'}</span>
                ${dep.delayed&&dep.delayMin>0?`<span class="sdp-dep-delay-tag">+${dep.delayMin} min</span>`:''}
                <span class="sdp-dep-platform">${I18N.t('platform')} ${dep.platform}</span>
              </div>
            `).join('')}
          </div>
        `).join(''):`<p class="sdp-empty">${I18N.t('no_departures')}</p>`}
      </div>

      ${hasFacilities?`
      <div class="sdp-section">
        <div class="sdp-section-label">${lang==='es'?'INSTALACIONES':'INSTAL·LACIONS'}</div>
        <div class="sdp-facilities">
          ${Object.entries(detail.facilities||{}).filter(([,v])=>v).map(([k])=>{
            const label=facilityLabels[k]; if(!label) return '';
            return `<div class="sdp-facility-chip">${facilityIcons[k]||''}<span>${label}</span></div>`;
          }).join('')}
        </div>
      </div>`:''}

      ${_renderConnectionsNew(detail.connections,lang)}
    `;

    panel.classList.add('open');
    document.getElementById('panelOverlay')?.classList.add('open');
    document.body.style.overflow = 'hidden';

    document.getElementById('detailBackBtn')?.addEventListener('click', () => closeDetailPanel(panel));
  }

  function _renderConnectionsNew(connections, lang) {
    if (!connections) return '';
    const { LINE_COLORS } = window.MOVCAT_DATA;
    const items = [];
    if (connections.metro?.length) {
      items.push(`<div class="sdp-conn-item">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
        <span class="sdp-conn-label">Metro</span>
        <div class="sdp-conn-badges">${connections.metro.map(l=>`<span class="sdp-conn-badge" style="background:${LINE_COLORS[l]||'#888'}">${l}</span>`).join('')}</div>
      </div>`);
    }
    [
      ['bus','<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',lang==='es'?'Bus urbano':'Bus urbà'],
      ['taxi','<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="12" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/></svg>','Taxi'],
      ['parking','<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>',lang==='es'?'Aparcamiento':'Aparcament'],
      ['bike','<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 0 0-1-1h-1l-4.5 8H15"/><path d="M18.5 17.5L15 6"/></svg>','Bicicleta / Bicing'],
      ['funicular','<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-10"/><path d="M15 17l6-10"/><rect x="6" y="10" width="12" height="8" rx="2"/></svg>','Funicular'],
    ].forEach(([key,icon,label]) => {
      if (connections[key]) items.push(`<div class="sdp-conn-item">${icon}<span class="sdp-conn-label">${label}</span></div>`);
    });
    if (!items.length) return '';
    return `<div class="sdp-section">
      <div class="sdp-section-label">${lang==='es'?'CONEXIONES':'CONNEXIONS'}</div>
      <div class="sdp-connections">${items.join('')}</div>
    </div>`;
  }

    function _renderConnections(connections) {
    if (!connections) return '';
    const { LINE_COLORS } = window.MOVCAT_DATA;
    const items = [];
    if (connections.metro?.length) {
      items.push(`
        <div class="connection-item">
          <span class="conn-label">Metro</span>
          <div class="conn-badges">
            ${connections.metro.map(l => `<span class="conn-badge" style="background:${LINE_COLORS[l] || '#888'}">${l}</span>`).join('')}
          </div>
        </div>`);
    }
    if (connections.bus)       items.push(`<div class="connection-item"><span class="conn-label">${I18N.getLang() === 'es' ? 'Bus urbano' : 'Bus urbà'}</span></div>`);
    if (connections.taxi)      items.push(`<div class="connection-item"><span class="conn-label">Taxi</span></div>`);
    if (connections.parking)   items.push(`<div class="connection-item"><span class="conn-label">${I18N.getLang() === 'es' ? 'Aparcamiento' : 'Aparcament'}</span></div>`);
    if (connections.bike)      items.push(`<div class="connection-item"><span class="conn-label">${I18N.getLang() === 'es' ? 'Bicicleta / Bicing' : 'Bicicleta / Bicing'}</span></div>`);
    if (connections.funicular) items.push(`<div class="connection-item"><span class="conn-label">Funicular</span></div>`);
    if (!items.length) return '';
    return `
      <div class="detail-section">
        <h2 class="detail-section-title">${I18N.t('connections')}</h2>
        <div class="detail-connections">${items.join('')}</div>
      </div>`;
  }

  function closeDetailPanel(panel) {
    if (panel) panel.classList.remove('open');
    document.getElementById('panelOverlay')?.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ══════════════════ HELPERS ══════════════════ */
  function getStationsByLine(lineId) {
    const { STATIONS } = window.MOVCAT_DATA;
    return Object.values(STATIONS)
      .filter(st => st.lines && st.lines.includes(lineId))
      .sort((a, b) => a.name.localeCompare(b.name, 'ca'));
  }

  function getPopularLines() {
    const { LINES, getSimulatedLineStatus } = window.MOVCAT_DATA;
    return Object.values(LINES).map(line => ({
      ...line,
      status: getSimulatedLineStatus(line.id),
    }));
  }

  // Init
  loadFavorites();

  return {
    searchStations,
    toggleFavorite,
    isFavorite,
    getFavoriteStations,
    getStationDetail,
    getStationsByLine,
    getPopularLines,
    renderStationDetail,
    closeDetailPanel,
    loadFavorites,
  };
})();

window.StationsModule = StationsModule;

/* ══════════════════════════════════════════════════════════════════════=
   ROUTES – Càlcul de rutes ferroviàries (BFS/Dijkstra)
═══════════════════════════════════════════════════════════════════════ */



const RoutesModule = (() => {

  /* ══════════════════════════════════════
     CONSTRUCCIÓN DEL GRAFO
     Nodo: { stationId, lineId }
     Arista: cambio de línea (transbordo) o estación siguiente en misma línea
  ══════════════════════════════════════ */
  let graph = null;

  function buildGraph() {
    if (graph) return graph;
    const { STATIONS, LINES } = window.MOVCAT_DATA;
    const { BUS_STOPS, BUS_LINES } = window.MOVCAT_BUS || { BUS_STOPS: {}, BUS_LINES: {} };
    graph = {}; // nodeKey -> [ { nodeKey, cost, type } ]

    const nodeKey = (stationId, lineId) => `${stationId}::${lineId}`;

    function addLineAdjacency(linesObj) {
      Object.values(linesObj).forEach(line => {
        const stations = line.stations || [];
        for (let i = 0; i < stations.length; i++) {
          const stObj = findStationByName(stations[i]);
          if (!stObj) continue;
          const stId = stObj.id;
          const key = nodeKey(stId, line.id);
          if (!graph[key]) graph[key] = [];

          if (i < stations.length - 1) {
            const nextObj = findStationByName(stations[i + 1]);
            if (nextObj) {
              const nextKey = nodeKey(nextObj.id, line.id);
              graph[key].push({ key: nextKey, cost: 1, type: 'travel', lineId: line.id, stationId: nextObj.id });
              if (!graph[nextKey]) graph[nextKey] = [];
              graph[nextKey].push({ key, cost: 1, type: 'travel', lineId: line.id, stationId: stObj.id });
            }
          }
        }
      });
    }
    addLineAdjacency(LINES);
    addLineAdjacency(BUS_LINES);

    /* Transbordos: misma parada, distinta línea (tren o bus) */
    function addTransfers(stopsObj) {
      Object.values(stopsObj).forEach(station => {
        const lines = station.lines || [];
        for (let i = 0; i < lines.length; i++) {
          for (let j = 0; j < lines.length; j++) {
            if (i === j) continue;
            const fromKey = nodeKey(station.id, lines[i]);
            const toKey   = nodeKey(station.id, lines[j]);
            if (!graph[fromKey]) graph[fromKey] = [];
            graph[fromKey].push({ key: toKey, cost: 3, type: 'transfer', lineId: lines[j], stationId: station.id });
          }
        }
      });
    }
    addTransfers(STATIONS);
    addTransfers(BUS_STOPS);

    /* Transbordos a peu entre parades properes (<= 400 m), tren <-> bus
       inclòs — això és el que fa que el planificador sigui multimodal. */
    if (window.GeoModule) {
      const allStops = [...Object.values(STATIONS), ...Object.values(BUS_STOPS)]
        .filter(s => typeof s.lat === 'number' && typeof s.lng === 'number');
      for (let a = 0; a < allStops.length; a++) {
        for (let b = a + 1; b < allStops.length; b++) {
          const s1 = allStops[a], s2 = allStops[b];
          const d = GeoModule.haversine(s1.lat, s1.lng, s2.lat, s2.lng);
          if (d <= 0 || d > 400) continue;
          const walkMin = GeoModule.walkMinutes(d);
          (s1.lines || []).forEach(l1 => {
            (s2.lines || []).forEach(l2 => {
              const k1 = nodeKey(s1.id, l1);
              const k2 = nodeKey(s2.id, l2);
              if (!graph[k1]) graph[k1] = [];
              graph[k1].push({ key: k2, cost: Math.max(1, walkMin / 2), type: 'walk', lineId: l2, stationId: s2.id, walkMin });
              if (!graph[k2]) graph[k2] = [];
              graph[k2].push({ key: k1, cost: Math.max(1, walkMin / 2), type: 'walk', lineId: l1, stationId: s1.id, walkMin });
            });
          });
        }
      }
    }

    return graph;
  }

  function getStop(stopId) {
    const { STATIONS } = window.MOVCAT_DATA;
    const { BUS_STOPS } = window.MOVCAT_BUS || { BUS_STOPS: {} };
    return STATIONS[stopId] || BUS_STOPS[stopId] || null;
  }

  function getLine(lineId) {
    const { LINES } = window.MOVCAT_DATA;
    const { BUS_LINES } = window.MOVCAT_BUS || { BUS_LINES: {} };
    return LINES[lineId] || BUS_LINES[lineId] || null;
  }

  function getLineColor(lineId) {
    const line = getLine(lineId);
    if (line && line.color) return line.color;
    return window.MOVCAT_DATA.LINE_COLORS[lineId] || '#888';
  }

  /* Cache nombre → parada (tren o bus) */
  const stationNameCache = {};
  function findStationByName(name) {
    if (stationNameCache[name]) return stationNameCache[name];
    const { STATIONS } = window.MOVCAT_DATA;
    const { BUS_STOPS } = window.MOVCAT_BUS || { BUS_STOPS: {} };
    let st = Object.values(STATIONS).find(s => s.name === name || s.shortName === name);
    if (!st) st = Object.values(BUS_STOPS).find(s => s.name === name || s.shortName === name);
    if (st) stationNameCache[name] = st;
    return st || null;
  }

  /* ══════════════════════════════════════
     DIJKSTRA SIMPLIFICADO
  ══════════════════════════════════════ */
  function dijkstra(originId, destinationId) {
    const g = buildGraph();

    const originStation = getStop(originId);
    const destStation   = getStop(destinationId);
    if (!originStation || !destStation) return null;
    if (originId === destinationId) return { segments: [], totalTime: 0, transfers: 0 };

    const INF = Infinity;
    const dist  = {};
    const prev  = {};
    const queue = new MinHeap();

    /* Nodos iniciales: todas las líneas del origen */
    (originStation.lines || []).forEach(lineId => {
      const k = `${originId}::${lineId}`;
      dist[k] = 0;
      queue.push({ key: k, cost: 0 });
    });

    while (!queue.isEmpty()) {
      const { key: u, cost: d } = queue.pop();
      if (dist[u] !== undefined && d > dist[u]) continue;

      const [stId] = u.split('::');
      if (stId === destinationId) break;

      (g[u] || []).forEach(edge => {
        const newDist = (dist[u] || 0) + edge.cost;
        if (dist[edge.key] === undefined || newDist < dist[edge.key]) {
          dist[edge.key] = newDist;
          prev[edge.key] = { from: u, ...edge };
          queue.push({ key: edge.key, cost: newDist });
        }
      });
    }

    /* Encontrar el nodo destino con menor coste */
    const destStation2 = getStop(destinationId);
    let bestDestKey = null;
    let bestCost = INF;
    (destStation2.lines || []).forEach(lineId => {
      const k = `${destinationId}::${lineId}`;
      if (dist[k] !== undefined && dist[k] < bestCost) {
        bestCost = dist[k];
        bestDestKey = k;
      }
    });

    if (!bestDestKey) return null;

    /* Reconstruir camino */
    const path = [];
    let current = bestDestKey;
    while (current) {
      path.unshift(current);
      current = prev[current] ? prev[current].from : null;
    }

    return buildRouteResult(path, prev, bestCost);
  }

  function buildRouteResult(path, prev, totalCost) {
    if (!path.length) return null;

    const segments  = [];
    let currentLine = null;
    let segStations = [];
    let transfers   = 0;
    let walkMinutesTotal = 0;

    path.forEach((nodeKey, i) => {
      const [stId, lineId] = nodeKey.split('::');
      const edge = prev[nodeKey];
      const type = edge ? edge.type : 'start';

      if (type === 'walk') {
        if (segStations.length) {
          segments.push(buildSegment(currentLine, segStations));
        }
        const fromStop = getStop(edge.from.split('::')[0]);
        segments.push({
          walk: true,
          minutes: edge.walkMin || 1,
          fromName: fromStop ? (fromStop.shortName || fromStop.name) : '',
          toName: getStop(stId) ? (getStop(stId).shortName || getStop(stId).name) : '',
        });
        walkMinutesTotal += edge.walkMin || 1;
        segStations = [stId];
        currentLine = lineId;
      } else if (type === 'transfer') {
        if (segStations.length) {
          segments.push(buildSegment(currentLine, segStations));
        }
        segStations = [stId];
        currentLine = lineId;
        transfers++;
      } else {
        if (currentLine === null) currentLine = lineId;
        if (currentLine !== lineId) {
          segments.push(buildSegment(currentLine, segStations));
          segStations = [stId];
          currentLine = lineId;
        } else {
          segStations.push(stId);
        }
      }
    });

    if (segStations.length > 0) {
      segments.push(buildSegment(currentLine, segStations));
    }

    /* Tiempo estimado (2.5 min/parada + 5 min/transbordo + caminar real) */
    const stationsCount = segments.reduce((s, seg) => s + (seg.walk ? 0 : seg.stations.length), 0);
    const totalMinutes  = Math.round(stationsCount * 2.5 + transfers * 5 + walkMinutesTotal);

    return {
      segments: segments.filter(s => s.walk || s.stations.length > 1),
      totalTime: totalMinutes,
      transfers: Math.max(0, transfers - (transfers > 0 ? 1 : 0)),
      walkMinutes: walkMinutesTotal,
      totalCost,
    };
  }

  function buildSegment(lineId, stationIds) {
    const line = getLine(lineId);
    const stations = stationIds
      .map(id => getStop(id))
      .filter(Boolean);
    return {
      lineId,
      lineLabel: line ? line.label : lineId,
      lineColor: getLineColor(lineId),
      operator:  line ? line.operator : 'renfe',
      isBus: !!(line && line.operator === 'tmb_bus'),
      stations,
    };
  }

  /* ══════════════════════════════════════
     MIN-HEAP (cola de prioridad simple)
  ══════════════════════════════════════ */
  class MinHeap {
    constructor() { this.data = []; }
    push(item) {
      this.data.push(item);
      this._bubbleUp(this.data.length - 1);
    }
    pop() {
      const top = this.data[0];
      const last = this.data.pop();
      if (this.data.length > 0) {
        this.data[0] = last;
        this._sinkDown(0);
      }
      return top;
    }
    isEmpty() { return this.data.length === 0; }
    _bubbleUp(i) {
      while (i > 0) {
        const parent = Math.floor((i - 1) / 2);
        if (this.data[parent].cost > this.data[i].cost) {
          [this.data[parent], this.data[i]] = [this.data[i], this.data[parent]];
          i = parent;
        } else break;
      }
    }
    _sinkDown(i) {
      const n = this.data.length;
      while (true) {
        let smallest = i;
        const l = 2 * i + 1, r = 2 * i + 2;
        if (l < n && this.data[l].cost < this.data[smallest].cost) smallest = l;
        if (r < n && this.data[r].cost < this.data[smallest].cost) smallest = r;
        if (smallest === i) break;
        [this.data[smallest], this.data[i]] = [this.data[i], this.data[smallest]];
        i = smallest;
      }
    }
  }

  /* ══════════════════════════════════════
     HISTORIAL DE BÚSQUEDAS
  ══════════════════════════════════════ */
  const HISTORY_KEY = 'movcat_route_history';
  let searchHistory = [];

  function loadHistory() {
    try {
      searchHistory = JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
    } catch (_) {
      searchHistory = [];
    }
  }

  function addToHistory(originId, destinationId) {
    const entry = { originId, destinationId, ts: Date.now() };
    searchHistory = searchHistory.filter(
      h => !(h.originId === originId && h.destinationId === destinationId)
    );
    searchHistory.unshift(entry);
    if (searchHistory.length > 10) searchHistory.pop();
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(searchHistory));
    } catch (_) {}
  }

  function getHistory() { return searchHistory; }

  /* ══════════════════════════════════════
     API PÚBLICA
  ══════════════════════════════════════ */
  function findRoute(originId, destinationId) {
    if (!originId || !destinationId) return null;
    const result = dijkstra(originId, destinationId);
    if (result) addToHistory(originId, destinationId);
    return result;
  }

  loadHistory();

  return {
    findRoute,
    getHistory,
    buildGraph,
    findStationByName,
    getStop,
    getLine,
    getLineColor,
  };
})();

window.RoutesModule = RoutesModule;

/* ══════════════════════════════════════════════════════════════════════=
   REALTIME – Simulació de dades en temps real
═══════════════════════════════════════════════════════════════════════ */



const RealtimeModule = (() => {
  let refreshInterval = null;
  const listeners = {};

  /* ══════════════════ ESTAT DE TOTES LES LÍNIES ══════════════════ */
  function getAllLineStatuses() {
    const { LINES, getSimulatedLineStatus } = window.MOVCAT_DATA;
    return Object.values(LINES).map(line => ({
      ...line,
      status: getSimulatedLineStatus(line.id),
    }));
  }

  function getLinesByOperator(operatorId) {
    return getAllLineStatuses().filter(l => l.operator === operatorId);
  }

  /* ══════════════════ ALERTES ACTIVES ══════════════════ */
  /* ══════════════════ ALERTES REALS (via API) ══════════════════ */
  let _cachedAlerts = null;
  let _alertsCacheTime = 0;
  const ALERTS_CACHE_MS = 5 * 60 * 1000; // 5 minuts

  async function fetchRealAlerts() {
    // MovCat no té backend propi, per tant no pot consultar de forma
    // fiable i gratuïta els feeds interns d'incidències de Rodalies/FGC/TMB
    // (no exposen una API pública amb CORS obert). Per evitar mostrar
    // dades inventades com si fossin "reals", les alertes es generen
    // a partir del MATEIX estat de línia que ja es mostra a "Estat de
    // línies" (getSimulatedLineStatus), de manera que les dues vistes
    // sempre estiguin coherents entre elles i clarament etiquetades.
    const now = Date.now();
    if (_cachedAlerts && (now - _alertsCacheTime) < ALERTS_CACHE_MS) {
      return _cachedAlerts;
    }

    try {
      const { LINES, LINE_COLORS, getSimulatedLineStatus } = window.MOVCAT_DATA;
      const alerts = Object.values(LINES)
        .map(line => ({ line, status: getSimulatedLineStatus(line.id) }))
        .filter(({ status }) => status.severity > 0)
        .map(({ line, status }, i) => ({
          id: `alert-${line.id}-${now}`,
          type: status.id === 'partial' ? 'partial' : status.id === 'cut' ? 'cut' : 'delay',
          lineLabel: line.label,
          lineColor: LINE_COLORS[line.id] || '#888',
          title: status.label,
          body: status.message,
          severity: status.severity,
          timestamp: new Date(now - i * 5 * 60000).toISOString(),
        }))
        .sort((a, b) => b.severity - a.severity)
        .slice(0, 6);

      _cachedAlerts = alerts;
      _alertsCacheTime = now;
      return alerts;
    } catch (e) {
      console.warn('MovCat: no s\'han pogut generar les alertes', e);
      _cachedAlerts = [];
      _alertsCacheTime = now;
      return [];
    }
  }

  function getActiveAlerts() {
    // Retorna la cache (o buit mentre carrega)
    return _cachedAlerts || [];
  }

  // Carrega alertes reals en background
  fetchRealAlerts().then(alerts => {
    _cachedAlerts = alerts;
    // Re-render si la vista d'alertes o home està activa
    if (window.UIModule) {
      UIModule.renderHomeView?.();
    }
  });

  /* ══════════════════ SORTIDES PER ESTACIÓ ══════════════════ */
  function getDeparturesForStation(stationId) {
    const { STATIONS, getSimulatedDepartures, LINES, LINE_COLORS } = window.MOVCAT_DATA;
    const station = STATIONS[stationId];
    if (!station) return [];

    return (station.lines || []).map(lineId => {
      const line = LINES[lineId];
      return {
        lineId,
        lineLabel: line ? line.label : lineId,
        lineColor: LINE_COLORS[lineId] || '#888',
        operator:  line ? line.operator : 'renfe',
        departures: getSimulatedDepartures(stationId, lineId, 3),
      };
    });
  }

  /* ══════════════════ SISTEMA D'EVENTS ══════════════════ */
  function on(event, callback) {
    if (!listeners[event]) listeners[event] = [];
    listeners[event].push(callback);
  }

  function off(event, callback) {
    if (!listeners[event]) return;
    listeners[event] = listeners[event].filter(cb => cb !== callback);
  }

  function emit(event, data) {
    (listeners[event] || []).forEach(cb => {
      try { cb(data); } catch (e) { console.warn('MovCat event error:', e); }
    });
  }

  function startAutoRefresh(intervalMs = 30000) {
    if (refreshInterval) clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
      emit('refresh', { ts: Date.now() });
    }, intervalMs);
  }

  function stopAutoRefresh() {
    if (refreshInterval) {
      clearInterval(refreshInterval);
      refreshInterval = null;
    }
  }

  /* ══════════════════ FORMAT DE TEMPS ══════════════════ */
  function formatRelativeTime(minutes) {
    if (minutes <= 0)  return 'Ara';
    if (minutes < 60)  return `${minutes} min`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m ? `${h}h ${m}min` : `${h}h`;
  }

  function formatTimestamp(isoString) {
    try {
      const dt = new Date(isoString);
      const now = new Date();
      const diffMin = Math.round((now - dt) / 60000);
      if (diffMin < 1)  return 'Ara mateix';
      if (diffMin < 60) return `Fa ${diffMin} min`;
      return dt.toLocaleTimeString('ca-ES', { hour: '2-digit', minute: '2-digit' });
    } catch (_) {
      return '';
    }
  }

  /* ══════════════════ RENDER: PANEL ESTAT LÍNIES ══════════════════ */
  function renderLineStatusPanel(containerId, operatorFilter) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const { LINES, LINE_COLORS, STATIONS, OPERATORS } = window.MOVCAT_DATA;
    let allLines = Object.values(LINES);
    
    // Preserve state across re-renders by storing on the container element
    if (!container._linesState) {
      container._linesState = { selectedOp: operatorFilter || 'renfe', selectedLineId: null };
    }
    // Only reset op if explicitly passed a new filter
    if (operatorFilter && operatorFilter !== container._linesState.selectedOp) {
      container._linesState.selectedOp = operatorFilter;
      container._linesState.selectedLineId = null;
    }
    
    function renderPanel() {
      const { selectedOp, selectedLineId: _selLine } = container._linesState;
      let filteredLines = allLines;
      if (selectedOp === 'tram') {
        filteredLines = filteredLines.filter(l => l.operator === 'trambaix' || l.operator === 'trambesosop');
      } else {
        filteredLines = filteredLines.filter(l => l.operator === selectedOp);
      }
      
      if (!container._linesState.selectedLineId && filteredLines.length > 0) {
        container._linesState.selectedLineId = filteredLines[0].id;
      }
      
      const selectedLineId = container._linesState.selectedLineId;
      const selectedLine = LINES[selectedLineId];
      const stations = selectedLine ? (selectedLine.stations || []) : [];
      
      // Save scroll position
      const displaySection = container.querySelector('.lines-display-section');
      const prevScroll = displaySection ? displaySection.scrollTop : 0;
      
      container.innerHTML = `
        <div class="lines-filter-section">
          <div class="lines-filter-group">
            <label class="lines-filter-label">${I18N.t('operator_label')}</label>
            <div class="lines-filter-buttons">
              <button class="lines-filter-btn ${selectedOp === 'renfe' ? 'lines-filter-btn--active' : ''}" data-op="renfe">Rodalies</button>
              <button class="lines-filter-btn ${selectedOp === 'fgc' ? 'lines-filter-btn--active' : ''}" data-op="fgc">FGC</button>
              <button class="lines-filter-btn ${selectedOp === 'metro' ? 'lines-filter-btn--active' : ''}" data-op="metro">Metro</button>
              <button class="lines-filter-btn ${selectedOp === 'tram' ? 'lines-filter-btn--active' : ''}" data-op="tram">TRAM</button>
            </div>
          </div>
          
          <div class="lines-filter-group">
            <label class="lines-filter-label">${I18N.t('line_label')}</label>
            <div class="lines-filter-buttons">
              ${filteredLines.map(line => `
                <button class="lines-filter-btn ${selectedLineId === line.id ? 'lines-filter-btn--active' : ''}" data-line="${line.id}">${line.label}</button>
              `).join('')}
            </div>
          </div>
        </div>
        
        <div class="lines-display-section">
          ${selectedLine ? `
            <div class="line-timeline-display" style="color:${selectedLine.color}">
              <div class="line-timeline-track" style="border-left:8px solid ${selectedLine.color}">
                ${stations.map((stName, i) => {
                  const stObj = Object.values(STATIONS).find(s => s.name === stName || s.shortName === stName);
                  const isFirst = i === 0;
                  const isLast = i === (stations.length - 1);
                  const otherLines = stObj ? (stObj.lines || []).filter(l => l !== selectedLineId) : [];
                  return `
                    <button class="line-timeline-stop ${isFirst || isLast ? 'line-timeline-stop--terminus' : ''}" ${stObj ? `data-station="${stObj.id}"` : ''} data-name="${stName.replace(/"/g, '&quot;')}" type="button">
                      <div class="line-timeline-dot" style="border-color:${selectedLine.color};background:${isFirst || isLast ? selectedLine.color : 'var(--bg)'}"></div>
                      <div class="line-timeline-info">
                        <span class="line-timeline-name">${stName}</span>
                        ${otherLines.length > 0 ? `
                          <div class="line-timeline-connections">
                            ${otherLines.map(l => `<span class="line-timeline-badge-small" style="background:${LINE_COLORS[l] || '#888'}">${l}</span>`).join('')}
                          </div>
                        ` : ''}
                      </div>
                      <svg class="line-timeline-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>
                  `;
                }).join('')}
              </div>
            </div>
          ` : `<p style="text-align:center;padding:20px;color:var(--text-3)">${I18N.t('select_line')}</p>`}
        </div>
      `;
      
      // Restore scroll position
      const newDisplaySection = container.querySelector('.lines-display-section');
      if (newDisplaySection && prevScroll) newDisplaySection.scrollTop = prevScroll;
      
      // Bind events
      container.querySelectorAll('[data-op]').forEach(btn => {
        btn.addEventListener('click', () => {
          container._linesState.selectedOp = btn.dataset.op;
          container._linesState.selectedLineId = null;
          renderPanel();
        });
      });
      
      container.querySelectorAll('[data-line]').forEach(btn => {
        btn.addEventListener('click', () => {
          container._linesState.selectedLineId = btn.dataset.line;
          renderPanel();
        });
      });

      container.querySelectorAll('.line-timeline-stop').forEach(btn => {
        btn.addEventListener('click', () => {
          if (!window.StationsModule) return;
          let stId = btn.dataset.station;
          if (!stId && btn.dataset.name) {
            const name = btn.dataset.name;
            const found = Object.values(window.MOVCAT_DATA.STATIONS).find(
              s => s.name === name || s.shortName === name
            );
            stId = found?.id;
          }
          if (stId) StationsModule.renderStationDetail(stId);
        });
      });
    }
    
    // Render once, state is preserved across calls
    renderPanel();
    
  }

  /* ══════════════════ RENDER: ALERTES ══════════════════ */
  function renderAlerts(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const alerts = getActiveAlerts();

    // Si encara no hi ha cache, mostrar loading i esperar
    if (_cachedAlerts === null) {
      container.innerHTML = `
        <div class="alerts-loading">
          <div class="route-loading-spinner"></div>
          <span>${I18N.getLang() === 'es' ? 'Consultando incidencias…' : 'Consultant incidències…'}</span>
        </div>
      `;
      fetchRealAlerts().then(() => renderAlerts(containerId));
      return;
    }

    if (!alerts.length) {
      container.innerHTML = `
        <div class="alerts-empty">
          <div class="alerts-empty-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <p class="alerts-empty-text">${I18N.t('no_incidents')}</p>
        </div>
      `;
      return;
    }

    const typeIcons = {
      delay:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
      partial: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
      info:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    };

    container.innerHTML = alerts.map(alert => `
      <div class="alert-card alert-${alert.type}">
        <div class="alert-header">
          <div class="alert-icon">${typeIcons[alert.type] || ''}</div>
          <span class="alert-line-badge" style="background:${alert.lineColor}">${alert.lineLabel}</span>
          <span class="alert-title">${alert.title}</span>
          <span class="alert-time">${formatTimestamp(alert.timestamp)}</span>
        </div>
        <p class="alert-body">${alert.body}</p>
      </div>
    `).join('');
  }

  /* ══════════════════ RENDER: DETALL LÍNIA ══════════════════ */
  function renderLineStatusDetail(lineId) {
    const { LINES, LINE_COLORS, getSimulatedLineStatus, STATIONS } = window.MOVCAT_DATA;
    const line = LINES[lineId];
    if (!line) return;

    const status = getSimulatedLineStatus(lineId);
    const panel  = document.getElementById('lineDetailPanel');
    if (!panel) return;

    panel.innerHTML = `
      <div class="ldp-header">
        <button class="detail-back-btn" id="lineDetailBack" aria-label="Tornar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <span class="ldp-badge" style="background:${line.color}">${line.label}</span>
        <h2 class="ldp-title">${line.description || line.label}</h2>
      </div>

      <div class="ldp-status-banner" style="border-color:${status.color};background:${status.color}1a">
        <span class="ldp-status-dot" style="background:${status.color};color:${status.color}"></span>
        <div>
          <div class="ldp-status-label" style="color:${status.color}">${status.label}</div>
          <div class="ldp-status-msg">${status.message}</div>
        </div>
      </div>

      <div class="ldp-section">
        <h3 class="ldp-section-title">Estacions de la línia (${(line.stations || []).length})</h3>
        <div class="ldp-stations-list">
          ${(line.stations || []).map((stName, i) => {
            const stObj = Object.values(STATIONS).find(s => s.name === stName || s.shortName === stName);
            const isFirst = i === 0;
            const isLast  = i === (line.stations.length - 1);
            return `
              <div class="ldp-station-row ${isFirst || isLast ? 'ldp-terminus' : ''}"
                   ${stObj ? `data-station="${stObj.id}"` : ''} data-name="${stName.replace(/"/g, '&quot;')}" style="cursor:pointer">
                <div class="ldp-station-dot" style="border-color:${line.color};color:${line.color}">
                  ${isFirst || isLast ? `<div class="ldp-dot-fill" style="background:${line.color}"></div>` : ''}
                </div>
                <span class="ldp-station-name">${stName}</span>
                ${stObj && stObj.connections?.metro?.length ? `
                  <div class="ldp-station-metro">
                    ${stObj.connections.metro.map(l =>
                      `<span class="ldp-metro-badge" style="background:${LINE_COLORS[l] || '#888'}">${l}</span>`
                    ).join('')}
                  </div>` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    panel.classList.add('open');
    document.getElementById('panelOverlay')?.classList.add('open');
    document.body.style.overflow = 'hidden';

    document.getElementById('lineDetailBack').addEventListener('click', () => {
      panel.classList.remove('open');
      document.getElementById('panelOverlay')?.classList.remove('open');
      document.body.style.overflow = '';
    });

    panel.querySelectorAll('.ldp-station-row').forEach(row => {
      row.addEventListener('click', () => {
        let stId = row.dataset.station;
        if (!stId && row.dataset.name) {
          const name = row.dataset.name;
          const found = Object.values(STATIONS).find(s => s.name === name || s.shortName === name);
          stId = found?.id;
        }
        if (!stId) return;
        panel.classList.remove('open');
        StationsModule.renderStationDetail(stId);
      });
    });
  }

  // Start
  startAutoRefresh(30000);

  return {
    getAllLineStatuses,
    getLinesByOperator,
    getActiveAlerts,
    getDeparturesForStation,
    renderLineStatusPanel,
    renderAlerts,
    renderLineStatusDetail,
    formatRelativeTime,
    formatTimestamp,
    on,
    off,
    emit,
    startAutoRefresh,
    stopAutoRefresh,
  };
})();

window.RealtimeModule = RealtimeModule;

/* ══════════════════════════════════════════════════════════════════════=
   I18N – Sistema d'internacionalització (Català / Castellà)
═══════════════════════════════════════════════════════════════════════ */

const I18N = (() => {
  const LANG_KEY = 'movcat_lang';

  const translations = {
    ca: {
      nav_home: 'Inici',
      nav_lines: 'Estat de línies',
      nav_lines_short: 'Línies',
      nav_alerts: 'Incidències',
      nav_alerts_short: 'Alertes',
      nav_map: 'Mapa de xarxa',
      nav_map_short: 'Mapa',
      nav_route: 'Planificar ruta',
      nav_route_short: 'Ruta',
      nav_tickets: 'TMB',
      nav_tickets_short: 'TMB',
      tickets_title: 'TMB',
      tickets_subtitle: 'Notícies, avisos, estat del servei i bitllets',
      route_title: 'Planifica una ruta',
      route_subtitle: 'Tren, metro, FGC, tramvia i bus combinats',
      origin: 'Origen',
      destination: 'Destí',
      calculate_route: 'Calcula la ruta',
      trip_title: 'Mode en ruta',
      trip_subtitle: 'Seguiment en directe del teu trajecte',
      greeting_morning: 'Bon dia',
      greeting_afternoon: 'Bona tarda',
      greeting_night: 'Bona nit',
      home_title: 'On vols anar avui?',
      search_station: 'Cerca una estació',
      search_station_label: 'Estació',
      search_placeholder: "Nom d'estació, municipi…",
      stat_lines: 'línies actives',
      stat_stations: 'estacions',
      stat_global: 'estat global',
      next_departures: 'Properes sortides',
      all_lines: 'Totes les línies →',
      active_alerts: 'Incidències actives',
      see_all: 'Veure totes →',
      recent_searches: 'Cerques recents',
      clear: 'Esborrar',
      lines_title: 'Estat de línies',
      lines_subtitle: 'Actualitzat cada 30 segons',
      alerts_title: 'Incidències',
      alerts_subtitle: 'Avisos i interrupcions de servei',
      map_title: 'Mapa en directe',
      map_subtitle: 'Trens, metro, FGC, tramvia i bus — amb la teva ubicació',
      locate_me: 'On soc?',
      nearby_title: 'Parades a prop teu',
      nearby_cta: 'Mostra parades de tren i bus a prop meu',
      refresh: 'Actualitzar',
      simulated_data: 'Horaris simulats',
      simulated_note: '⚠️ Els horaris mostrats són simulats. Consulta Rodalies.cat o FGC.cat per dades reals.',
      no_departures: 'Sense dades de sortides',
      operator_label: 'Operador:',
      line_label: 'Línia:',
      facilities: 'Instal·lacions',
      next_dep: 'Properes sortides',
      connections: 'Connexions',
      now: 'Ara',
      platform: 'And.',
      no_incidents: 'Totes les línies circulen amb normalitat',
      select_line: 'Selecciona una línia',
      stations_count: 'est.',
      fav_added: '✓ Afegida als favorits',
      fav_removed: 'Eliminada dels favorits',
      theme_dark: 'Tema fosc activat',
      theme_light: 'Tema clar activat',
      lines_updated: 'Estat de línies actualitzat',
      alerts_updated: 'Incidències actualitzades',
      transfer: 'Transbordament',
    },
    es: {
      nav_home: 'Inicio',
      nav_lines: 'Estado de líneas',
      nav_lines_short: 'Líneas',
      nav_alerts: 'Incidencias',
      nav_alerts_short: 'Alertas',
      nav_map: 'Mapa de red',
      nav_map_short: 'Mapa',
      nav_route: 'Planificar ruta',
      nav_route_short: 'Ruta',
      nav_tickets: 'TMB',
      nav_tickets_short: 'TMB',
      tickets_title: 'TMB',
      tickets_subtitle: 'Noticias, avisos, estado del servicio y billetes',
      route_title: 'Planifica una ruta',
      route_subtitle: 'Tren, metro, FGC, tranvía y bus combinados',
      origin: 'Origen',
      destination: 'Destino',
      calculate_route: 'Calcular ruta',
      trip_title: 'Modo en ruta',
      trip_subtitle: 'Seguimiento en directo de tu trayecto',
      greeting_morning: 'Buenos días',
      greeting_afternoon: 'Buenas tardes',
      greeting_night: 'Buenas noches',
      home_title: '¿A dónde quieres ir hoy?',
      search_station: 'Buscar una estación',
      search_station_label: 'Estación',
      search_placeholder: 'Nombre de estación, municipio…',
      stat_lines: 'líneas activas',
      stat_stations: 'estaciones',
      stat_global: 'estado global',
      next_departures: 'Próximas salidas',
      all_lines: 'Todas las líneas →',
      active_alerts: 'Incidencias activas',
      see_all: 'Ver todas →',
      recent_searches: 'Búsquedas recientes',
      clear: 'Borrar',
      lines_title: 'Estado de líneas',
      lines_subtitle: 'Actualizado cada 30 segundos',
      alerts_title: 'Incidencias',
      alerts_subtitle: 'Avisos e interrupciones de servicio',
      map_title: 'Mapa en directo',
      map_subtitle: 'Trenes, metro, FGC, tranvía y bus — con tu ubicación',
      locate_me: '¿Dónde estoy?',
      nearby_title: 'Paradas cerca de ti',
      nearby_cta: 'Muestra paradas de tren y bus cerca de mí',
      refresh: 'Actualizar',
      simulated_data: 'Horarios simulados',
      simulated_note: '⚠️ Los horarios mostrados son simulados. Consulta Rodalies.cat o FGC.cat para datos reales.',
      no_departures: 'Sin datos de salidas',
      operator_label: 'Operador:',
      line_label: 'Línea:',
      facilities: 'Instalaciones',
      next_dep: 'Próximas salidas',
      connections: 'Conexiones',
      now: 'Ahora',
      platform: 'Andén',
      no_incidents: 'Todas las líneas circulan con normalidad',
      select_line: 'Selecciona una línea',
      stations_count: 'est.',
      fav_added: '✓ Añadida a favoritos',
      fav_removed: 'Eliminada de favoritos',
      theme_dark: 'Tema oscuro activado',
      theme_light: 'Tema claro activado',
      lines_updated: 'Estado de líneas actualizado',
      alerts_updated: 'Incidencias actualizadas',
      transfer: 'Transbordo',
    },
  };

  let currentLang = 'ca';

  function load() {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved && translations[saved]) currentLang = saved;
    } catch (_) {}
    return currentLang;
  }

  function setLang(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (_) {}
    applyAll();
    updateLangButtons();
  }

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || key;
  }

  function getLang() { return currentLang; }

  function applyAll() {
    // Static elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key) el.textContent = t(key);
    });
    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key) el.setAttribute('placeholder', t(key));
    });
    // Header search hint
    const hint = document.querySelector('.header-search-hint');
    if (hint) hint.textContent = t('search_station') + '…';
    // Update greeting
    const greetingEl = document.getElementById('homeGreeting');
    if (greetingEl) {
      const hour = new Date().getHours();
      if (hour >= 14 && hour < 21) greetingEl.textContent = t('greeting_afternoon');
      else if (hour >= 21 || hour < 6) greetingEl.textContent = t('greeting_night');
      else greetingEl.textContent = t('greeting_morning');
    }
    // Sidebar footer
    const srl = document.querySelector('.sidebar-realtime-label');
    if (srl) srl.textContent = t('simulated_data');
  }

  function updateLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('lang-btn--active', btn.dataset.lang === currentLang);
    });
  }

  function init() {
    load();
    applyAll();
    updateLangButtons();
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
  }

  return { t, getLang, setLang, applyAll, init };
})();

window.I18N = I18N;

/* ══════════════════════════════════════════════════════════════════════=
   UI – Components d'interfície: navegació, toasts, cerca, vistes
═══════════════════════════════════════════════════════════════════════ */



const UIModule = (() => {

  /* ══════════════════ ESTAT ══════════════════ */
  let currentView       = 'home';
  let searchTimeout     = null;
  let routeOrigin       = null;
  let routeDestination  = null;
  let lastRouteResult   = null;
  let activeSearchField = null;
  let currentLinesFilter = 'all';

  /* ══════════════════ NAVEGACIÓ ══════════════════ */
  function navigateTo(viewId) {
    if (!document.getElementById(`view-${viewId}`)) return;

    if (currentView === 'tickets' && viewId !== 'tickets' && window.TmbHubModule) {
      TmbHubModule.onViewLeft();
    }

    document.querySelectorAll('.view').forEach(v => v.classList.remove('view--active'));
    document.querySelectorAll('.nav-item[data-view]').forEach(n => {
      n.classList.remove('nav-item--active');
      n.removeAttribute('aria-current');
    });

    const view = document.getElementById(`view-${viewId}`);
    if (view) {
      view.classList.add('view--active');
      view.scrollTop = 0;
    }

    document.querySelectorAll(`.nav-item[data-view="${viewId}"]`).forEach(n => {
      n.classList.add('nav-item--active');
      n.setAttribute('aria-current', 'page');
    });

    currentView = viewId;
    onViewActivated(viewId);
  }

  function onViewActivated(viewId) {
    switch (viewId) {
      case 'home':      renderHomeView();      break;
      case 'lines':     renderLinesView();     break;
      case 'alerts':    renderAlertsView();    break;
      case 'map':       renderMapView();       break;
      case 'search':    renderSearchView();    break;
      case 'tickets':   if (window.TmbHubModule) TmbHubModule.render(); break;
      case 'trip':      TripModule.render();   break;
    }
  }

  /* ══════════════════ TOASTS ══════════════════ */
  let toastQueue   = [];
  let toastShowing = false;

  function showToast(message, type = 'info', duration = 3000) {
    toastQueue.push({ message, type, duration });
    if (!toastShowing) _processToastQueue();
  }

  function _processToastQueue() {
    if (!toastQueue.length) { toastShowing = false; return; }
    toastShowing = true;
    const { message, type, duration } = toastQueue.shift();
    const container = document.getElementById('toastContainer');
    if (!container) { toastShowing = false; return; }

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `
      <span class="toast-msg">${message}</span>
      <button class="toast-close" aria-label="Tancar">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    `;
    container.appendChild(toast);
    requestAnimationFrame(() => requestAnimationFrame(() => toast.classList.add('toast--visible')));

    const dismiss = () => {
      toast.classList.remove('toast--visible');
      setTimeout(() => {
        toast.remove();
        setTimeout(_processToastQueue, 100);
      }, 300);
    };
    toast.querySelector('.toast-close').addEventListener('click', dismiss);
    setTimeout(dismiss, duration);
  }

  /* ══════════════════ SEARCH OVERLAY ══════════════════ */
  function openSearchOverlay(field) {
    activeSearchField = field;
    const overlay = document.getElementById('searchOverlay');
    const input   = document.getElementById('searchInput');
    if (!overlay || !input) return;

    const labels = {
      general: I18N.t('search_station'),
    };

    const labelEl = document.getElementById('searchOverlayLabel');
    if (labelEl) labelEl.textContent = labels[field] || labels.general;

    // Update placeholder
    const searchInp = document.getElementById('searchInput');
    if (searchInp) searchInp.setAttribute('placeholder', I18N.t('search_placeholder'));

    overlay.classList.add('search-overlay--open');
    document.body.style.overflow = 'hidden';

    input.value = '';
    const clearBtn = document.getElementById('searchInputClear');
    if (clearBtn) clearBtn.style.display = 'none';

    // Show suggestions when empty
    _renderSearchSuggestions();

    setTimeout(() => input.focus(), 100);
  }

  function closeSearchOverlay() {
    const overlay = document.getElementById('searchOverlay');
    if (!overlay) return;
    overlay.classList.remove('search-overlay--open');
    document.body.style.overflow = '';
    activeSearchField = null;
    clearTimeout(searchTimeout);
  }

  function _renderSearchSuggestions() {
    const list = document.getElementById('searchResultsList');
    if (!list) return;
    const { STATIONS, LINE_COLORS } = window.MOVCAT_DATA;

    // Show favorites + popular stations
    const favStations = StationsModule.getFavoriteStations().slice(0, 4);
    const popular = ['barcelona-sants', 'barcelona-pg-gracia', 'pl-catalunya-fgc', 'barcelona-arc-triomf', 'hospitalet-cent', 'aeroport-t1-r2'];
    const popularStations = popular.map(id => STATIONS[id]).filter(Boolean).slice(0, 4);

    let html = '';

    if (favStations.length) {
      html += `<div class="search-section-label">${I18N.getLang() === 'es' ? 'Favoritos' : 'Favorits'}</div>`;
      html += favStations.map(st => _renderSearchItem(st)).join('');
    }

    if (popularStations.length) {
      html += `<div class="search-section-label">${I18N.getLang() === 'es' ? 'Estaciones principales' : 'Estacions principals'}</div>`;
      html += popularStations.map(st => _renderSearchItem(st)).join('');
    }

    if (!html) {
      html = `<div class="search-empty"><p class="search-empty-text">${I18N.t('search_placeholder')}</p></div>`;
    }

    list.innerHTML = html;
    _bindSearchResultClicks(list);
  }

  function _onSearchInput(e) {
    const q = e.target.value.trim();
    const clearBtn = document.getElementById('searchInputClear');
    if (clearBtn) clearBtn.style.display = q ? 'flex' : 'none';

    clearTimeout(searchTimeout);
    if (!q) {
      _renderSearchSuggestions();
      return;
    }
    searchTimeout = setTimeout(() => {
      const results = window.SearchAllModule
        ? SearchAllModule.searchAll(q, 14)
        : StationsModule.searchStations(q, 12).map(s => ({ ...s, kind: 'train' }));
      _renderSearchResults(results, q);
    }, 150);
  }

  function _renderSearchResults(stations, query = '') {
    const list = document.getElementById('searchResultsList');
    if (!list) return;

    if (!stations.length) {
      list.innerHTML = `
        <div class="search-empty">
          <p class="search-empty-text">Cap resultat per "<strong>${query}</strong>"</p>
        </div>
      `;
      return;
    }

    list.innerHTML = stations.map(st => _renderSearchItem(st)).join('');
    _bindSearchResultClicks(list);
  }

  function _renderSearchItem(st) {
    const { LINE_COLORS } = window.MOVCAT_DATA;
    const { busLineColor } = window.MOVCAT_BUS || {};
    const isBus = st.kind === 'bus';
    const isFav = !isBus && StationsModule.isFavorite(st.id);
    const linesBadges = (st.lines || []).slice(0, 4).map(l =>
      `<span class="sr-line-badge" style="background:${isBus ? (busLineColor ? busLineColor(l) : '#5b6b78') : (LINE_COLORS[l] || '#888')}">${l}</span>`
    ).join('');

    return `
      <button class="search-result-item" data-station="${st.id}" data-kind="${st.kind || 'train'}" type="button">
        <div class="sr-main">
          <span class="sr-name">${isBus ? '🚌 ' : ''}${st.name}</span>
          <span class="sr-city">${st.city || ''}</span>
        </div>
        <div class="sr-meta">
          <div class="sr-lines">${linesBadges}</div>
          ${isFav ? `<svg class="sr-fav-icon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>` : ''}
        </div>
      </button>
    `;
  }

  function _bindSearchResultClicks(list) {
    list.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const stId = item.dataset.station;
        const isBus = item.dataset.kind === 'bus';

        if (activeSearchField === 'origin') {
          routeOrigin = stId;
          _updateRouteDisplay();
          closeSearchOverlay();
          _checkAndCalculateRoute();
          return;
        }
        if (activeSearchField === 'destination') {
          routeDestination = stId;
          _updateRouteDisplay();
          closeSearchOverlay();
          _checkAndCalculateRoute();
          return;
        }

        if (isBus) {
          closeSearchOverlay();
          if (window.BusModule) BusModule.renderBusStopDetail(stId);
          return;
        }

        const st = window.MOVCAT_DATA.STATIONS[stId];
        if (!st) return;

        if (activeSearchField === 'general') {
          closeSearchOverlay();
          StationsModule.renderStationDetail(stId);
          return;
        }

        closeSearchOverlay();
      });
    });
  }

  /* ══════════════════ VISTA HOME ══════════════════ */
  function renderHomeView() {
    _updateHeroGreeting();
    _updateHeroStats();
    renderQuickDepartures();
    renderHomeAlerts();
    renderRecentSearches();
    _initHomeNearby();
  }

  function _initHomeNearby() {
    const btn   = document.getElementById('homeNearbyBtn');
    const list  = document.getElementById('homeNearbyList');
    if (!btn || btn._bound) return;
    btn._bound = true;
    btn.addEventListener('click', async () => {
      btn.classList.add('is-loading');
      try {
        const pos = await GeoModule.getPosition();
        _renderNearbyList(list, pos);
        list.style.display = 'flex';
        btn.style.display = 'none';
      } catch (e) {
        showToast(I18N.getLang() === 'es' ? 'Activa la ubicación para ver paradas cercanas' : 'Activa la ubicació per veure parades a prop', 'warning');
      }
      btn.classList.remove('is-loading');
    });
  }

  function _updateHeroGreeting() {
    const el = document.getElementById('homeGreeting');
    if (!el) return;
    const hour = new Date().getHours();
    if (hour >= 14 && hour < 21) el.textContent = I18N.t('greeting_afternoon');
    else if (hour >= 21 || hour < 6) el.textContent = I18N.t('greeting_night');
    else el.textContent = I18N.t('greeting_morning');
  }

  function _updateHeroStats() {
    const { LINES, STATIONS } = window.MOVCAT_DATA;
    const lineCount   = Object.keys(LINES).length;
    const stCount     = Object.keys(STATIONS).length;
    const alerts      = RealtimeModule.getActiveAlerts();
    const hasIssues   = alerts.some(a => a.type === 'partial');
    const hasDelays   = alerts.some(a => a.type === 'delay');

    const linesEl    = document.getElementById('heroStatLines');
    const stationsEl = document.getElementById('heroStatStations');
    const statusEl   = document.getElementById('heroStatStatus');

    if (linesEl)    linesEl.textContent    = lineCount;
    if (stationsEl) stationsEl.textContent = stCount;
    if (statusEl) {
      const val = statusEl.querySelector('.hero-stat-val');
      if (val) {
        if (hasIssues) {
          val.textContent = I18N.getLang() === 'es' ? 'Afectación' : 'Afectació';
          val.className   = 'hero-stat-val hero-stat-warn';
        } else if (hasDelays) {
          val.textContent = I18N.getLang() === 'es' ? 'Retardos' : 'Retards';
          val.className   = 'hero-stat-val hero-stat-warn';
        } else {
          val.textContent = 'Normal';
          val.className   = 'hero-stat-val hero-stat-ok';
        }
      }
    }

    // Update alert badges
    const count   = alerts.length;
    const navBadge = document.getElementById('navAlertBadge');
    const sideBar  = document.getElementById('sidebarAlertBadge');
    const badgeText = count > 0 ? String(count) : '';
    if (navBadge)   navBadge.textContent   = badgeText;
    if (sideBar)    sideBar.textContent    = badgeText;
  }

  function renderQuickDepartures() {
    const { STATIONS, LINE_COLORS } = window.MOVCAT_DATA;
    const container = document.getElementById('quickDeparturesContainer');
    if (!container) return;

    const featuredIds = [
      'barcelona-sants',
      'barcelona-pg-gracia',
      'pl-catalunya-fgc',
      'barcelona-arc-triomf',
      'mataro',
    ].filter(id => STATIONS[id]);

    container.innerHTML = featuredIds.map(id => {
      const st = STATIONS[id];
      if (!st) return '';
      const deps      = RealtimeModule.getDeparturesForStation(id);
      const firstDep  = deps[0];
      const nextTrain = firstDep?.departures?.[0];

      return `
        <button class="quick-dep-card" data-station="${id}" type="button">
          <div class="qdc-header">
            <span class="qdc-name">${st.shortName || st.name}</span>
            <div class="qdc-lines">
              ${(st.lines || []).slice(0, 3).map(l =>
                `<span class="qdc-line-dot" style="background:${LINE_COLORS[l] || '#888'}"></span>`
              ).join('')}
            </div>
          </div>
          ${nextTrain ? `
            <div class="qdc-next">
              <span class="qdc-line-badge" style="background:${firstDep.lineColor}">${firstDep.lineLabel}</span>
              <span class="qdc-time">${nextTrain.time}</span>
              <span class="qdc-min">${nextTrain.minutesAway <= 0 ? I18N.t('now') : nextTrain.minutesAway + ' min'}</span>
            </div>` : `<div class="qdc-no-data">${I18N.t('no_departures')}</div>`}
        </button>
      `;
    }).join('');

    container.querySelectorAll('.quick-dep-card').forEach(card => {
      card.addEventListener('click', () => StationsModule.renderStationDetail(card.dataset.station));
    });
  }

  function renderHomeAlerts() {
    const container = document.getElementById('homeAlertsContainer');
    const section   = document.getElementById('homeAlertsSection');
    if (!container) return;

    const alerts = RealtimeModule.getActiveAlerts().slice(0, 3);
    if (!alerts.length) {
      container.innerHTML = `<p class="home-alerts-ok">${I18N.t('no_incidents')}</p>`;
      return;
    }

    container.innerHTML = alerts.map(alert => `
      <div class="home-alert-item home-alert--${alert.type}">
        <span class="home-alert-badge" style="background:${alert.lineColor}">${alert.lineLabel}</span>
        <div class="home-alert-content">
          <span class="home-alert-title">${alert.title}</span>
          <span class="home-alert-body">${alert.body.substring(0, 100)}${alert.body.length > 100 ? '…' : ''}</span>
        </div>
      </div>
    `).join('');
  }

  function renderRecentSearches() {
    const container = document.getElementById('homeRecentContainer');
    const section   = document.getElementById('homeRecentSection');
    if (!container || !section) return;

    const history = RoutesModule.getHistory();

    if (!history.length) {
      section.style.display = 'none';
      return;
    }

    section.style.display = 'block';
    container.innerHTML = history.slice(0, 4).map(h => {
      const o = RoutesModule.getStop(h.originId);
      const d = RoutesModule.getStop(h.destinationId);
      if (!o || !d) return '';
      return `
        <button class="recent-route-item" data-origin="${h.originId}" data-dest="${h.destinationId}" type="button">
          <div class="recent-route-names">
            <div class="recent-route-from">${o.shortName || o.name}</div>
            <div class="recent-route-to">${d.shortName || d.name}</div>
          </div>
          <svg class="recent-route-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      `;
    }).filter(Boolean).join('');

    container.querySelectorAll('.recent-route-item').forEach(item => {
      item.addEventListener('click', () => {
        routeOrigin      = item.dataset.origin;
        routeDestination = item.dataset.dest;
        navigateTo('search');
      });
    });

    const clearBtn = document.getElementById('clearHistoryBtn');
    if (clearBtn) {
      clearBtn.onclick = () => {
        try { localStorage.removeItem('movcat_route_history'); } catch (_) {}
        section.style.display = 'none';
        showToast('Historial esborrat');
      };
    }
  }

  /* ══════════════════ VISTA CERCA / RUTA ══════════════════ */
  function renderSearchView() {
    _updateRouteDisplay();
    if (routeOrigin && routeDestination) {
      calculateAndShowRoute();
    }
  }

  function _updateRouteDisplay() {
    const originEl = document.getElementById('routeOriginDisplay');
    const destEl   = document.getElementById('routeDestDisplay');
    const calcBtn  = document.getElementById('calculateRouteBtn');
    const clearO   = document.getElementById('clearOriginBtn');
    const clearD   = document.getElementById('clearDestBtn');

    if (originEl) {
      const name = routeOrigin ? RoutesModule.getStop(routeOrigin)?.name : null;
      originEl.textContent = name || (I18N.getLang() === 'es' ? 'Seleccionar origen' : 'Seleccionar origen');
      originEl.classList.toggle('is-placeholder', !name);
    }
    if (destEl) {
      const name = routeDestination ? RoutesModule.getStop(routeDestination)?.name : null;
      destEl.textContent = name || (I18N.getLang() === 'es' ? 'Seleccionar destino' : 'Seleccionar destí');
      destEl.classList.toggle('is-placeholder', !name);
    }
    if (calcBtn) calcBtn.disabled = !(routeOrigin && routeDestination);
    if (clearO) clearO.style.display = routeOrigin ? 'flex' : 'none';
    if (clearD) clearD.style.display = routeDestination ? 'flex' : 'none';
  }

  function _swapRouteStations() {
    [routeOrigin, routeDestination] = [routeDestination, routeOrigin];
    _updateRouteDisplay();
    const container = document.getElementById('routeResultContainer');
    if (container) container.innerHTML = '';
    _checkAndCalculateRoute();
  }

  function _clearRoute() {
    routeOrigin = null;
    routeDestination = null;
    _updateRouteDisplay();
    const container = document.getElementById('routeResultContainer');
    if (container) container.innerHTML = '';
  }

  function _checkAndCalculateRoute() {
    if (routeOrigin && routeDestination && currentView === 'search') {
      calculateAndShowRoute();
    }
  }

  function calculateAndShowRoute() {
    if (!routeOrigin || !routeDestination) return;
    const container = document.getElementById('routeResultContainer');
    if (!container) return;

    if (routeOrigin === routeDestination) {
      container.innerHTML = `
        <div class="route-no-result">
          <p>L'origen i el destí no poden ser la mateixa estació.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="route-loading">
        <div class="route-loading-spinner"></div>
        <span>Calculant ruta òptima…</span>
      </div>
    `;

    setTimeout(() => {
      try {
        const result = RoutesModule.findRoute(routeOrigin, routeDestination);
        if (!result || !result.segments || result.segments.length === 0) {
          container.innerHTML = `
            <div class="route-no-result">
              <p>No s'ha trobat una ruta directa entre aquestes estacions.</p>
              <p class="route-no-result-hint">Prova amb estacions de la mateixa línia o utilitza el cercador de línies.</p>
            </div>
          `;
          return;
        }
        renderRouteResult(result, container);
      } catch (e) {
        console.error('MovCat: error calculant ruta', e);
        container.innerHTML = `<div class="route-no-result"><p>Error calculant la ruta. Torna-ho a intentar.</p></div>`;
      }
    }, 400);
  }

  function renderRouteResult(result, container) {
    const originSt  = RoutesModule.getStop(routeOrigin);
    const destSt    = RoutesModule.getStop(routeDestination);
    lastRouteResult = { result, originId: routeOrigin, destId: routeDestination };

    const transferText = result.transfers === 0
      ? 'Sense transbordaments'
      : result.transfers === 1
        ? '1 transbordament'
        : `${result.transfers} transbordaments`;

    const totalStations = result.segments.reduce((s, seg) => s + (seg.walk ? 0 : seg.stations.length), 0);

    container.innerHTML = `
      <div class="route-result">
        <div class="route-summary">
          <div class="rs-stat">
            <span class="rs-val">${result.totalTime}</span>
            <span class="rs-key">minuts</span>
          </div>
          <div class="rs-divider"></div>
          <div class="rs-stat">
            <span class="rs-val">${result.transfers}</span>
            <span class="rs-key">transbords.</span>
          </div>
          <div class="rs-divider"></div>
          <div class="rs-stat">
            <span class="rs-val">${totalStations}</span>
            <span class="rs-key">parades</span>
          </div>
        </div>
        <div class="route-segments">
          ${result.segments.map((seg, i) => {
            if (seg.walk) {
              return `
                <div class="route-segment route-segment--walk">
                  <div class="seg-walk-icon">🚶</div>
                  <div class="seg-content">
                    <span class="seg-walk-text">${seg.fromName} → ${seg.toName} · ${seg.minutes} min a peu</span>
                  </div>
                </div>
              `;
            }
            const opLabel = seg.operator === 'renfe' ? 'Rodalies'
              : seg.operator === 'fgc' ? 'FGC'
              : seg.operator === 'tmb_bus' ? 'Bus TMB'
              : seg.operator === 'metro' ? 'Metro'
              : seg.operator;
            return `
            <div class="route-segment">
              <div class="seg-line-indicator" style="background:${seg.lineColor}"></div>
              <div class="seg-content">
                <div class="seg-header">
                  <span class="seg-badge" style="background:${seg.lineColor}">${seg.isBus ? '🚌 ' : ''}${seg.lineLabel}</span>
                  <span class="seg-op">${opLabel}</span>
                  <span class="seg-stops">${seg.stations.length - 1} parades</span>
                </div>
                <div class="seg-stations">
                  ${seg.stations.map((st, si) => {
                    const isTerminus = si === 0 || si === seg.stations.length - 1;
                    return `
                      <div class="seg-station ${isTerminus ? 'seg-station--terminal' : ''}">
                        <div class="seg-dot" style="border-color:${seg.lineColor};color:${seg.lineColor}">
                          ${isTerminus ? `<div style="width:6px;height:6px;border-radius:50%;background:${seg.lineColor}"></div>` : ''}
                        </div>
                        <span class="seg-station-name">${st ? st.name : '—'}</span>
                      </div>
                    `;
                  }).join('')}
                </div>
                ${i < result.segments.length - 1 ? `
                  <div class="seg-transfer-hint">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/>
                      <polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
                    </svg>
                    Transbordament
                  </div>` : ''}
              </div>
            </div>
          `;
          }).join('')}
        </div>
        <button class="route-trip-start-btn" id="startTripBtn" type="button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <span>${I18N.getLang() === 'es' ? 'Iniciar seguimiento en directo' : 'Inicia seguiment en directe'}</span>
        </button>
      </div>
    `;
    document.getElementById('startTripBtn')?.addEventListener('click', () => {
      if (window.TripModule) TripModule.start(lastRouteResult);
      navigateTo('trip');
    });
  }

  /* ══════════════════ VISTA LÍNIES ══════════════════ */
  function renderLinesView() {
    RealtimeModule.renderLineStatusPanel('linesStatusContainer', currentLinesFilter);
    // Animate refresh button
    const btn = document.getElementById('linesRefreshBtn');
    if (btn) {
      btn.classList.add('spinning');
      setTimeout(() => btn.classList.remove('spinning'), 600);
    }
  }

  /* ══════════════════ VISTA ALERTES ══════════════════ */
  function renderAlertsView() {
    RealtimeModule.renderAlerts('alertsContainer');
    const btn = document.getElementById('alertsRefreshBtn');
    if (btn) {
      btn.classList.add('spinning');
      setTimeout(() => btn.classList.remove('spinning'), 600);
    }
  }

  /* ══════════════════ VISTA MAPA ══════════════════ */
  function renderMapView() {
    if (!window.MapModule) return;
    const map = MapModule.ensureMap('leafletMap');
    MapModule.invalidateSize();
    if (!map) return;

    const locateBtn = document.getElementById('mapLocateBtn');
    if (locateBtn && !locateBtn._bound) {
      locateBtn._bound = true;
      locateBtn.addEventListener('click', async () => {
        locateBtn.classList.add('is-loading');
        try {
          const pos = await MapModule.locateUser();
          _renderNearbyList(document.getElementById('mapNearbyList'), pos);
        } catch (e) {
          showToast(I18N.getLang() === 'es' ? 'No se pudo obtener tu ubicación' : 'No s\'ha pogut obtenir la teva ubicació', 'warning');
        }
        locateBtn.classList.remove('is-loading');
      });
    }
  }

  function _renderNearbyList(container, pos) {
    if (!container || !pos || !window.NearbyModule) return;
    const lang = I18N.getLang();
    const nearby = NearbyModule.nearest(pos.lat, pos.lng, 8);
    if (!nearby.length) {
      container.innerHTML = `<p class="sdp-empty">${lang === 'es' ? 'Sin paradas cerca (1,5 km)' : 'Sense parades a prop (1,5 km)'}</p>`;
      return;
    }
    container.innerHTML = nearby.map(s => `
      <button class="nearby-item" data-stop="${s.id}" data-kind="${s.kind}" type="button">
        <span class="nearby-item-icon">${s.kind === 'bus' ? '🚌' : '🚆'}</span>
        <div class="nearby-item-info">
          <span class="nearby-item-name">${s.name}</span>
          <span class="nearby-item-lines">${(s.lines || []).slice(0, 4).join(' · ')}</span>
        </div>
        <div class="nearby-item-dist">
          <span>${GeoModule.formatDistance(s.distance)}</span>
          <span class="nearby-item-walk">🚶 ${GeoModule.walkMinutes(s.distance)} min</span>
        </div>
      </button>
    `).join('');
    container.querySelectorAll('.nearby-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const kind = btn.dataset.kind;
        const id   = btn.dataset.stop;
        if (kind === 'bus') BusModule.renderBusStopDetail(id);
        else StationsModule.renderStationDetail(id);
      });
    });
  }

  /* ══════════════════ VISTA FAVORITS ══════════════════ */
  function renderFavorites() {
    const container = document.getElementById('favoritesContainer');
    if (!container) return;

    const favStations = StationsModule.getFavoriteStations();
    if (!favStations.length) {
      container.innerHTML = `
        <div class="fav-empty">
          <div class="fav-empty-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
          <p class="fav-empty-title">Sense estacions guardades</p>
          <p class="fav-empty-hint">Obre el detall d'una estació i prem el cor per guardar-la.</p>
        </div>
      `;
      return;
    }

    const { LINE_COLORS } = window.MOVCAT_DATA;
    container.innerHTML = favStations.map(st => `
      <button class="fav-station-card" data-station="${st.id}" type="button">
        <div class="fsc-info">
          <span class="fsc-name">${st.name}</span>
          <span class="fsc-city">${st.city || ''}</span>
        </div>
        <div class="fsc-lines">
          ${(st.lines || []).slice(0, 4).map(l =>
            `<span class="fsc-line-badge" style="background:${LINE_COLORS[l] || '#888'}">${l}</span>`
          ).join('')}
        </div>
        <button class="fsc-remove" data-station="${st.id}" aria-label="Eliminar de favorits" type="button">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </button>
    `).join('');

    container.querySelectorAll('.fav-station-card').forEach(card => {
      card.addEventListener('click', e => {
        if (e.target.closest('.fsc-remove')) return;
        StationsModule.renderStationDetail(card.dataset.station);
      });
    });

    container.querySelectorAll('.fsc-remove').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        StationsModule.toggleFavorite(btn.dataset.station);
        showToast('Eliminada dels favorits');
        renderFavorites();
        renderSidebarFavorites();
      });
    });
  }

  /* ══════════════════ SIDEBAR FAVORITS ══════════════════ */
  function renderSidebarFavorites() {
    const sidebar = document.getElementById('sidebarFavList');
    if (!sidebar) return;
    const favs = StationsModule.getFavoriteStations();
    if (!favs.length) {
      sidebar.innerHTML = '<p class="sidebar-empty">Sense favorits</p>';
      return;
    }
    const { LINE_COLORS } = window.MOVCAT_DATA;
    sidebar.innerHTML = favs.map(st => `
      <button class="sidebar-fav-item" data-station="${st.id}" type="button">
        <div class="sfi-dot-row">
          ${(st.lines || []).slice(0, 2).map(l =>
            `<span class="sfi-dot" style="background:${LINE_COLORS[l] || '#888'}"></span>`
          ).join('')}
        </div>
        <span class="sfi-name">${st.shortName || st.name}</span>
      </button>
    `).join('');
    sidebar.querySelectorAll('.sidebar-fav-item').forEach(item => {
      item.addEventListener('click', () => StationsModule.renderStationDetail(item.dataset.station));
    });
  }

  /* ══════════════════ RELLOTGE ══════════════════ */
  function startClock() {
    function update() {
      const el = document.getElementById('headerClock');
      if (!el) return;
      const now = new Date();
      el.textContent = now.toLocaleTimeString('ca-ES', { hour: '2-digit', minute: '2-digit' });
    }
    update();
    setInterval(update, 10000);
  }

  /* ══════════════════ TEMA ══════════════════ */
  function initTheme() {
    const saved = localStorage.getItem('movcat_theme');
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next    = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('movcat_theme', next); } catch (_) {}
    showToast(next === 'dark' ? I18N.t('theme_dark') : I18N.t('theme_light'));
  }

  /* ══════════════════ BIND EVENTS ══════════════════ */
  function bindEvents() {
    // Navigation (all nav-item buttons with data-view)
    document.querySelectorAll('[data-view]').forEach(btn => {
      btn.addEventListener('click', e => {
        const viewId = btn.dataset.view;
        if (viewId) navigateTo(viewId);
      });
    });

    // Header search
    document.getElementById('headerSearchBtn')?.addEventListener('click', () => openSearchOverlay('general'));
    document.getElementById('homeSearchCta')?.addEventListener('click', () => openSearchOverlay('general'));

    // Route planner ("Ruta")
    document.getElementById('routeOriginDisplay')?.addEventListener('click', () => openSearchOverlay('origin'));
    document.getElementById('routeDestDisplay')?.addEventListener('click', () => openSearchOverlay('destination'));
    document.getElementById('clearOriginBtn')?.addEventListener('click', e => { e.stopPropagation(); routeOrigin = null; _updateRouteDisplay(); });
    document.getElementById('clearDestBtn')?.addEventListener('click', e => { e.stopPropagation(); routeDestination = null; _updateRouteDisplay(); });
    document.getElementById('routeSwapBtn')?.addEventListener('click', _swapRouteStations);
    document.getElementById('routeClearAllBtn')?.addEventListener('click', _clearRoute);
    document.getElementById('calculateRouteBtn')?.addEventListener('click', calculateAndShowRoute);

    // Search overlay events
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.addEventListener('input', _onSearchInput);

    document.getElementById('searchOverlayClose')?.addEventListener('click', closeSearchOverlay);
    document.getElementById('searchOverlayBackdrop')?.addEventListener('click', closeSearchOverlay);

    document.getElementById('searchInputClear')?.addEventListener('click', () => {
      const input = document.getElementById('searchInput');
      if (input) {
        input.value = '';
        input.focus();
        const clearBtn = document.getElementById('searchInputClear');
        if (clearBtn) clearBtn.style.display = 'none';
        _renderSearchSuggestions();
      }
    });

    // Lines filter tabs
    document.getElementById('linesFilterTabs')?.addEventListener('click', e => {
      const tab = e.target.closest('.filter-tab');
      if (!tab) return;
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('filter-tab--active'));
      tab.classList.add('filter-tab--active');
      currentLinesFilter = tab.dataset.op;
      renderLinesView();
    });

    // Refresh buttons
    document.getElementById('linesRefreshBtn')?.addEventListener('click', () => {
      renderLinesView();
      showToast(I18N.t('lines_updated'));
    });
    document.getElementById('alertsRefreshBtn')?.addEventListener('click', () => {
      renderAlertsView();
      showToast(I18N.t('alerts_updated'));
    });

    // Theme toggle
    document.getElementById('themeToggleBtn')?.addEventListener('click', toggleTheme);

    // Panel overlay click to close
    document.getElementById('panelOverlay')?.addEventListener('click', () => {
      document.querySelectorAll('.detail-panel.open').forEach(p => p.classList.remove('open'));
      document.getElementById('panelOverlay').classList.remove('open');
      document.body.style.overflow = '';
    });

    // Keyboard
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        closeSearchOverlay();
        document.querySelectorAll('.detail-panel.open').forEach(p => p.classList.remove('open'));
        document.getElementById('panelOverlay')?.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    // Auto-refresh
    RealtimeModule.on('refresh', () => {
      if (currentView === 'home')    renderHomeView();
      if (currentView === 'alerts')  renderAlertsView();
      if (currentView === 'lines')   renderLinesView();
    });
  }

  /* ══════════════════ INIT ══════════════════ */
  function init() {
    initTheme();
    I18N.init();
    bindEvents();
    startClock();
    navigateTo('home');
  }

  // CSS styles for search section label
  const searchSectionStyle = document.createElement('style');
  searchSectionStyle.textContent = `
    .search-section-label {
      font-size: .7rem; font-weight: 600; text-transform: uppercase;
      letter-spacing: .08em; color: var(--text-muted);
      padding: 10px 12px 4px;
    }
  `;
  document.head.appendChild(searchSectionStyle);

  return {
    navigateTo,
    showToast,
    openSearchOverlay,
    closeSearchOverlay,
    renderFavorites,
    renderSidebarFavorites,
    renderHomeView,
    renderSearchView,
    renderLinesView,
    renderAlertsView,
    renderMapView,
    calculateAndShowRoute,
    init,
  };
})();

window.UIModule = UIModule;

/* ══════════════════════════════════════════════════════════════════════=
   APP – Punt d'entrada i inicialització
═══════════════════════════════════════════════════════════════════════ */



document.addEventListener('DOMContentLoaded', () => {

  /* ── Seqüència d'inicialització ── */

  /* Verificar mòduls */
  const required = ['MOVCAT_DATA', 'StationsModule', 'RealtimeModule', 'I18N', 'UIModule'];
  const missing  = required.filter(m => !window[m]);
  if (missing.length) {
    console.error('MOVCAT: Mòduls no carregats:', missing);
    setSplashProgress(100, 'Error de càrrega. Recarrega la pàgina.');
    return;
  }

  /* Iniciar UI */
  try {
    UIModule.init();
  } catch (err) {
    console.error('MOVCAT: Error inicialitzant UI:', err);
    return;
  }

  /* Re-render on language change */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.UIModule) UIModule.renderHomeView?.();
    });
  });

  console.log('MOVCAT v3.0 — Xarxa ferroviària de Catalunya inicialitzada.');
});