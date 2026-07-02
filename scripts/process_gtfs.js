const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const RENFE_DIR = path.join(__dirname, '../RENFE');

async function processRenfe() {
  console.log('Reading routes...');
  const routes = {}; // route_id -> { label, directions: {} }
  await new Promise((resolve) => {
    fs.createReadStream(path.join(RENFE_DIR, 'routes.txt'))
      .pipe(csv())
      .on('data', (row) => {
        // Renfe Barcelona starts with 50T or similar? Let's check for R1..R8
        const shortName = (row.route_short_name || '').trim();
        if (/^R[1-8]/.test(shortName) && row.route_id.startsWith('50T')) {
          let colorClass = 'pill-r';
          let badgeClass = `badge-${shortName.toLowerCase()}`;
          routes[row.route_id] = {
            label: shortName,
            colorClass: colorClass,
            badgeClass: badgeClass,
            lineColorClass: 'color-renfe',
            trips: {} // trip_id -> { headsign, stops: [] }
          };
        }
      })
      .on('end', resolve);
  });

  console.log('Reading trips...');
  const tripToRoute = {};
  await new Promise((resolve) => {
    fs.createReadStream(path.join(RENFE_DIR, 'trips.txt'))
      .pipe(csv())
      .on('data', (row) => {
        if (routes[row.route_id]) {
          const headsign = (row.trip_headsign || '').trim();
          if (!routes[row.route_id].directions) routes[row.route_id].directions = {};
          
          tripToRoute[row.trip_id] = {
            route_id: row.route_id,
            headsign: headsign
          };
          routes[row.route_id].trips[row.trip_id] = { headsign, stops: [] };
        }
      })
      .on('end', resolve);
  });

  console.log('Reading stop_times... (this might take a while)');
  let count = 0;
  await new Promise((resolve) => {
    fs.createReadStream(path.join(RENFE_DIR, 'stop_times.txt'))
      .pipe(csv())
      .on('data', (row) => {
        const tripInfo = tripToRoute[row.trip_id];
        if (tripInfo) {
          routes[tripInfo.route_id].trips[row.trip_id].stops.push({
            id: row.stop_id,
            seq: parseInt(row.stop_sequence, 10)
          });
        }
        if (++count % 1000000 === 0) console.log(`Processed ${count} stop times...`);
      })
      .on('end', resolve);
  });

  console.log('Reading stops...');
  const stopsMap = {};
  await new Promise((resolve) => {
    fs.createReadStream(path.join(RENFE_DIR, 'stops.txt'))
      .pipe(csv())
      .on('data', (row) => {
        stopsMap[row.stop_id] = row.stop_name;
      })
      .on('end', resolve);
  });

  console.log('Building final data structure...');
  const renfeData = {
    label: 'Rodalies',
    lines: {}
  };

  for (const [routeId, routeData] of Object.entries(routes)) {
    // For each direction (headsign), find the trip with the most stops to represent the line
    const dirMap = {};
    for (const trip of Object.values(routeData.trips)) {
      if (!dirMap[trip.headsign] || trip.stops.length > dirMap[trip.headsign].stops.length) {
        // Sort stops by sequence
        trip.stops.sort((a, b) => a.seq - b.seq);
        dirMap[trip.headsign] = trip;
      }
    }

    const directions = {};
    for (const [headsign, trip] of Object.entries(dirMap)) {
      if (trip.stops.length > 2) { // Filter out empty or broken trips
        directions[headsign] = trip.stops.map(s => ({
          name: stopsMap[s.id] || s.id,
          badges: [] // We don't have transbordos mapped for renfe easily
        }));
      }
    }

    // Only add if there are valid directions
    if (Object.keys(directions).length > 0) {
      renfeData.lines[routeData.label] = {
        label: routeData.label,
        colorClass: 'pill-renfe', // we will add this to css
        badgeClass: routeData.badgeClass,
        lineColorClass: 'color-renfe',
        directions: directions
      };
    }
  }

  const outputPath = path.join(__dirname, '../public_data.json');
  fs.writeFileSync(outputPath, JSON.stringify({ renfe: renfeData }, null, 2));
  console.log('Written to public_data.json');
}

processRenfe().catch(console.error);