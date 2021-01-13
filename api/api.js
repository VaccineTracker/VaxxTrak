const URL = {
  moderna: 'https://data.cdc.gov/resource/b7pe-5nws.json',
  pfizer: 'https://data.cdc.gov/resource/saz5-9hgg.json',
  casesByState: 'https://data.cdc.gov/resource/9mfq-cb36.json',
  zipcode:
    'https://www.zipcodeapi.com/rest/CpgQ68eNMq9Z3twQDOuNWGfQGSjzRIxDcdrHP45P6WXJg7OzVBz8F62H9XYLmYYP/info.json',
};

async function request(API, param, arg = '') {
  let query;
  if (arg) query = `?${param}=${arg}`;
  else query = arg;

  const response = await fetch(`${API}${query}`);
  const data = await response.json();

  return data;
}

async function fromZipcode(zipcode) {
  const query = `${URL.zipcode}/${zipcode}/degrees`;

  const response = await fetch(query);
  const data = await response.json();

  return data;
}

console.log(await fromZipcode('01886'));

export default { URL, request, fromZipcode };
