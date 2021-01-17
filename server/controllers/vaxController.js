const https = require('https');
const db = require('../models/psqlDB');

const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf-8');

const { zipcode } = require('../../config/keys');
const hash = require('../states');

const vaxController = {};

const query = {
  all: 'SELECT "US_Territory", "Total_Administered" FROM vax',
  location: 'SELECT * FROM vax WHERE "US_Territory"=$1',
};

const URL = {
  moderna: 'https://data.cdc.gov/resource/b7pe-5nws.json',
  pfizer: 'https://data.cdc.gov/resource/saz5-9hgg.json',
  zipcode: `https://www.zipcodeapi.com/rest/${zipcode.apiKey}/info.json`,
};

vaxController.getAllStates = async (req, res, next) => {
  try {
    const { rows } = await db.query(query.all);
    res.locals.allStates = rows;
    return next();
  } catch (error) {
    return next({
      error: `!ERR!: in vaxController.getAllStates!\n !ERR!: ${error}`,
    });
  }
};

vaxController.fromZipcode = async (req, res, next) => {
  const { zipcode } = req.params;
  const query = `${URL.zipcode}/${zipcode}/degrees`;

  https
    .get(query, (response) => {
      console.log('zipcode_res_status_code:', response.statusCode);
      response.on('data', (obj) => {
        const { state } = JSON.parse(decoder.write(obj));
        res.locals.location = hash[state];

        return next();
      });
    })
    .on('error', (error) => {
      return next({ error });
    });
};

vaxController.getState = async (req, res, next) => {
  try {
    const { location } = res.locals;

    let place;
    if (location == 'New York') place = 'New York State';
    else place = location;

    const { rows } = await db.query(query.location, [place]);
    const [data] = rows;

    res.locals.location = {
      state: location,
      dist: data.Total_Distributed,
      admin: data.Total_Administered,
    };

    return next();
  } catch (error) {
    return next({
      log: `!ERR! in vaxController.getState!`,
      messge: { error },
    });
  }
};

vaxController.fromModerna = async (req, res, next) => {
  const { state } = res.locals.location;

  const mod_q = `${URL.moderna}?jurisdiction=${state}`;
  const mod_prop = `total_moderna_allocation_first_dose_shipments`;

  https
    .get(mod_q, (response) => {
      console.log('moderna_res_status_code:', response.statusCode);
      response.on('data', (obj) => {
        const data = JSON.parse(decoder.write(obj))[0];
        res.locals.location.moderna = parseInt(data[mod_prop]) * 1000;
        return next();
      });
    })
    .on('error', (error) => {
      return next({
        error: `!ERR! in provider: ${error}`,
      });
    });
};

vaxController.fromPfizer = async (req, res, next) => {
  const { state } = res.locals.location;

  const pfi_q = `${URL.pfizer}?jurisdiction=${state}`;
  const pfi_prop = `total_pfizer_allocation_first_dose_shipments`;

  https
    .get(pfi_q, (response) => {
      console.log('pfizer_res_status_code:', response.statusCode);
      response.on('data', (obj) => {
        const data = JSON.parse(decoder.write(obj))[0];
        res.locals.location.pfizer = parseInt(data[pfi_prop]) * 1000;
        return next();
      });
    })
    .on('error', (error) => {
      return next({
        error: `!ERR! in provider: ${error}`,
      });
    });
};

module.exports = vaxController;
