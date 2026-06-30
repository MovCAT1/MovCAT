# MovCat — Notes d'aquesta versió

## Ronda 3 — pantalla de bitllets (feed de compra)

- **Pantalla nova "Bitllets"** (`view-tickets`, nova a l'HTML, accessible
  des del sidebar i del nav inferior, icona de tiquet). Mostra un feed de
  targetes amb tots els títols de transport de TMB: T-usual, T-casual,
  bitllet senzill, bitllet aeroport, T-grup, T-4, T-jove, T-16, T-familiar,
  les variants FM/FN (general/especial), T-usual bonificada, T-dia,
  T-metropolitana (targeta rosa i pas d'acompanyant), T-escolar, T-verda,
  bitllet senzill bus, T-Acompanyament, T-aire i Hola Barcelona Travel
  Card — 27 títols en total, amb nom, descripció, etiquetes i preu en
  català i castellà.
- **Mòdul de dades separat** (`tickets/tickets-data.js`): un sol array
  `TICKETS_DATA` editable a mà, amb un camp `link` per cada bitllet on
  vas enganxar la URL de compra real de TMB / Hola Barcelona. Si un
  `link` queda buit, la targeta mostra el botó desactivat amb
  "Pròximament" en lloc de trencar-se.
- **Botó "Compra ara"** (`tickets/tickets-ui.js`): obre el `link` del
  bitllet en una pestanya nova (`window.open`, `noopener`). El mòdul es
  renderitza sol en entrar a la vista (`onViewActivated` → `case
  'tickets'`) i és bilingüe (CA/ES) seguint el mateix `I18N` que la resta
  de l'app.
- **Imatges sense retallar**: cada targeta admet un camp `image` opcional;
  si hi és, es mostra sencera (`object-fit: contain`, mai `cover`) sobre
  un degradat suau que omple l'espai sobrant. Si no hi ha imatge, o la URL
  falla en carregar, es mostra automàticament una icona de bitllet com a
  placeholder en lloc d'un buit.
- **Disseny responsive** (`tickets/tickets.css`): graella de targetes en
  escriptori; en mòbil (≤640px) passen a files compactes horitzontals
  (imatge quadrada de 84 px, descripció truncada a 2 línies, màxim 2
  etiquetes visibles) perquè el feed no ocupi una pantalla sencera per
  bitllet.
- **Tot dins una carpeta pròpia** (`/tickets/`): `tickets-data.js`,
  `tickets-ui.js` i `tickets.css` viuen separats de la resta del codi,
  així es pot afegir, treure o repreuar bitllets tocant només un fitxer
  sense risc de trencar la resta de l'app.

## Ronda 2 — planificador multimodal, mode en ruta, offline i avisos

- **Planificador de rutes multimodal real** (`view-search`, nova a l'HTML —
  abans el codi existia a `script.js` però no tenia cap pantalla). Combina
  tren + metro + FGC + tramvia + **bus**, amb trams a peu reals (Haversine,
  ≤400 m) calculats per connectar qualsevol parada de tren amb qualsevol
  parada de bus propera. Accessible des de "Ruta" al menú/nav inferior.
- **Mode en ruta** (`trip-mode.js`, vista nova `view-trip`): un cop calculada
  una ruta, "Inicia seguiment en directe" obre una pantalla amb el tram
  actual destacat, compte enrere fins al pròxim tren/bus (real si hi ha
  iBus configurat, estimat si no) i avenç manual entre trams.
- **API real de TMB (iBus) connectada**: s'han desat el teu App ID i App
  Key a `bus-data.js` (`TMB_API`). Per tenir temps real de veritat a cada
  parada de bus encara cal el `tmbStopCode` oficial de cada parada (el
  número que hi ha al pal de la parada, o ve dins el GTFS); mentre no hi
  sigui, es mostra l'estimació per freqüència, etiquetada com a tal.
- **Service Worker (`sw.js`)**: l'app shell (HTML/CSS/JS/icona) es queda en
  cache i funciona sense cobertura; les dades en directe sempre intenten
  anar a la xarxa primer.
- **Avisos de línies favorites (`notify.js`)**: botó de campaneta a la
  barra lateral; un cop concedit el permís, si una línia d'una estació
  marcada com a favorita passa a retard/servei parcial, rep una
  notificació local del navegador. **Nota honesta**: és una notificació
  local (Notification API), activa mentre el navegador estigui obert —
  no és push real amb l'app tancada de tot, perquè això requereix un
  servidor push (web-push amb VAPID) que MovCat no té perquè no compta
  amb backend propi.

## Ronda 1

## Què s'ha afegit / canviat

**Bus**
- Nou suport per a bus urbà (TMB), amb línies i parades pròpies (`bus-data.js`),
  cercador unificat tren+bus, i panell de detall de parada amb propers
  autobusos.
- Connector preparat per a l'**API real de TMB (iBus)**, gratuïta amb
  registre a https://developer.tmb.cat. Mentre no es configuri
  `TMB_API.APP_ID` / `APP_KEY` a `bus-data.js`, els temps de pas es
  calculen per freqüència real de cada línia i es marquen com a
  "estimats" (mai es presenten com a temps real si no ho són).
- Les parades de bus incloses són una **mostra il·lustrativa** (línies
  H6, H8, H10, H12, V7, V13, V15, V17, D20, D50), no la xarxa completa.
  `scripts/process_gtfs.js` ja sap convertir un GTFS a aquest format;
  es pot reutilitzar amb el GTFS públic i gratuït de l'AMB
  (https://www.amb.cat — Dades Obertes) per tenir totes les parades reals.

**Geolocalització i mapa en directe**
- Nou mòdul `geo-map.js`: geolocalització real del navegador (API
  natiu, gratuïta, sense backend) per calcular distàncies i temps a
  peu fins a qualsevol parada de tren o bus.
- El "Mapa de xarxa" (imatge estàtica) s'ha substituït per un **mapa
  interactiu real** amb Leaflet + OpenStreetMap (gratuït, sense clau
  d'API), amb totes les estacions i parades de bus mostrades per
  color de línia, geolocalització de l'usuari i botó "On soc?".
- Nova secció "Parades a prop teu" a Inici i al mapa: llista
  ordenada per distància real (tren + bus), amb minuts a peu.

**Correccions**
- L'apartat d'incidències cridava `https://api.anthropic.com` des del
  navegador sense clau — mai podia funcionar i no és una font de
  dades de transport. S'ha substituït per una generació coherent amb
  "Estat de línies" (mateixa font, sense duplicar lògica ni prometre
  dades que no es poden obtenir sense backend propi).

**Visual**
- Tipografia monoespai (JetBrains Mono) per a hores, rellotge i
  codis de línia — efecte panell de sortides real, per allunyar-se
  de l'aspecte "plantilla d'IA" de l'Inter genèric arreu.

## Per tenir temps real de bus 100% reals

1. Registra't gratis a https://developer.tmb.cat (App ID + App Key).
2. Omple `TMB_API.APP_ID` i `TMB_API.APP_KEY` a `bus-data.js`.
3. Per cada parada, afegeix el camp `tmbStopCode` (codi oficial de
   parada TMB) — amb això, `BusRealtimeModule` ja consulta l'iBus
   real automàticament i deixa d'usar l'estimació.

## Limitacions conegudes (honestedat per davant)

- Rodalies/FGC no exposen una API pública gratuïta amb CORS obert
  des del navegador; per això els horaris de tren segueixen sent
  simulats (igual que abans), clarament etiquetats com a tals.
- Les coordenades de parades de bus són aproximades/il·lustratives,
  no provenen encara d'un GTFS oficial importat.
