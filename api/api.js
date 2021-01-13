import hash from './states.js';

const apiKey =
  'CpgQ68eNMq9Z3twQDOuNWGfQGSjzRIxDcdrHP45P6WXJg7OzVBz8F62H9XYLmYYP';

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

  const response = await fetch(`${api}${query}`);
  const data = await response.json();

  const shipments = data[0][prop];

  return shipments;
}

async function fromZipcode(zipcode) {
  const query = `${URL.zipcode}/${zipcode}/degrees`;

  const response = await fetch(query);
  const data = await response.json();

  const { state } = data;

  return hash[state];
}

export { request, fromZipcode };
