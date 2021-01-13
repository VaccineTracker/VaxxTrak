const { Pool } = require('pg');
const keys = require('../../config/keys');

const pgURI = keys.postgres.dbURI;

const pool = new Pool({
  connectionString: pgURI,
});
// const URI = process.env.PG_URI || pgURI;

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
