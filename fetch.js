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


// #region
// const vaxData_URL =
// 'https://covid.ourworldindata.org/data/vaccinations/vaccinations.csv';
// async function vaccinationData() {
//   const res = await fetch(vaxData_URL);
//   const data = await response.text();
// }
// blob:https://covid.cdc.gov/eec7d1e1-2864-4853-bb87-bf6f6bff452d

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
// #endregion
