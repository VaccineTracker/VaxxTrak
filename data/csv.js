const csv = require('csv-parser');
const fs = require('fs');
const http = require('http');
const path = require('path');
const results = [];

fs.createReadStream(path.resolve(__dirname, 'covid_vax_usa.csv'))
  .pipe(csv({ column: true }))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    const AZ = results.find((loca) => (loca.state = 'Arizona'));
    console.log(AZ)
  });
