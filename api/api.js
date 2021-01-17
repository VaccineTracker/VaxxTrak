// import hash from './states.js';
// const states = require('states');

const apiKey =
  'kkENTZcAAU06hG5HdTBYNx2MnPMgDunV1tu5xoQ5awJ9fsPmAonDRoBNs1b3ZsNT';

const URL = {
  moderna: 'https://data.cdc.gov/resource/b7pe-5nws.json',
  pfizer: 'https://data.cdc.gov/resource/saz5-9hgg.json',
  zipcode: `https://www.zipcodeapi.com/rest/${apiKey}/info.json`,
};

async function request(provider, arg = '') {
  let query;

  if (arg) query = `?jurisdiction=${arg}`;
  else query = arg;

  const api = URL[provider.toLowerCase()];
  const prop = `total_${provider.toLowerCase()}_allocation_first_dose_shipments`;

  const response = await fetch(`${api}${query}`, {
    mode: 'no-cors',
  });
  const data = await response.json();

  const shipments = data[0][prop];

  return shipments;
}

function fromZipcode(zipcode) {
  console.log(`zipcode: ${zipcode}`);
  const query = `${URL.zipcode}/${zipcode}/degrees`;
  console.log(`query: ${query}`);
  return fetch(query, { mode: 'no-cors' })
    .then((response) => response.json())
    .then(({ state }) => state)
    .then((end) => console.log(end));
  // console.log('post response');
  // const data = await response.json();
  // console.log(`data: ${data}`);
  // const { state } = data;
  // console.log(hash[state]);
  // return states[state];
}

const state = fromZipcode('11221').then((data) => console.log(data));

// export { request, fromZipcode };

/**
 * EXAMPLE: 
import { request, fromZipcode } from './api.js';



const moderna = await request('moderna', state);
console.log(moderna);

const pfizer = await request('pfizer', state);
console.log(pfizer);

 */
