const csv = require('csv-parser');
const path = require('path');
const fs = require('fs');

const db = require('./models/userModel');

const results = [];

const insert =
  'INSERT INTO vax (state, totalDistributed, totalAdministered, distPer100k, adminPer100k) VALUES ($1, 2$, 3$, 4$, 5$)';

console.log(thing);

async function stream() {
  return fs
    .createReadStream(path.resolve(__dirname, '../data/covid_vax_usa.csv'))
    .pipe(csv({ column: true }))
    .on('data', (data) => results.push(data))
    .on('end', () => results);
}
/*
   results.forEach((state) => {
      const values = Object.values(state).map((x, i) =>
        i !== 0 ? Number(x) : x
      );
      db.query(insert, values);
    });
  */

/*
let queryString: string = `\\copy ${tableName} FROM '${tableName}.csv' WITH CSV HEADER;`;

      execute(`psql -U postgres -d ${schemaName} -c "${queryString}" `, step3);
    };
  */
