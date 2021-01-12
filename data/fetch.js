const vaxData_URL =
  'https://covid.ourworldindata.org/data/vaccinations/vaccinations.csv';
const blobby =
  'blob:https://covid.cdc.gov/eec7d1e1-2864-4853-bb87-bf6f6bff452d';

async function vaccinationData() {
  const res = await fetch(blobby);
  const data = await res.blob();
  const decoder = new TextDecoder();
  console.log(data);
}

vaccinationData();
