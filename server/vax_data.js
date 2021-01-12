const https = require('https');
const fs = require('fs');

const csv = require('csv-parser');
const path = require('path');
const results = [];

const vaxData_URL =
  'https://covid.ourworldindata.org/data/vaccinations/vaccinations.csv';

// async function vaccinationData() {
//   const res = await fetch(vaxData_URL);
//   const data = await response.text();
// }
// blob:https://covid.cdc.gov/eec7d1e1-2864-4853-bb87-bf6f6bff452d
fs.createReadStream(path.resolve(__dirname, '../data/covid_vax_usa.csv'))
  .pipe(csv({ column: true }))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    const AZ = results.find((loca) => (loca.state = 'New York'));
    console.log(AZ);
  });

// const req = https.request(vaxData_URL, (res) => {
//   let i = 0;
//   res
//     .pipe(csv({ column: true }))
//     .on('data', (data) => results.push(data))
//     .on('end', () => {
//       const USA = results.find((loca) => (loca.iso_code = 'ARG'));
//       console.log(USA);
//     });
// });

// req.on('error', (err) => {
//   console.error(err);
// });

// req.end();
