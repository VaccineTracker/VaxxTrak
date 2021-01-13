const { Pool } = require('pg');
const keys = require('../../config/keys');

const myURI = keys.postgres.dbURI;

const URI = process.env.PG_URI || myURI;

const pool = new Pool({
  connectionString: URI,
});

pool.on('error', (err) => {
  console.error('an idle client has experienced an error', err.stack);
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
