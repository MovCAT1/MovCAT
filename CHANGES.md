# MovCat — Notes d'aquesta versió

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
