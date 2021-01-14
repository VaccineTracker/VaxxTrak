/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

export const DataContext = createContext();

const initial_state = {
  datasets: [
    {
      data: [],
      backgroundColor: [],
      label: 'Total Administered Vaccinations for All US. Territories',
    },
  ],
  labels: [],
};
// // console.log(allVaxData.map((st) => st.Total_Administered));
// let allStateData;
// const allStates = async () => {
//   const res = await fetch('vaccinations/all');
//   const all = await res.json();
//   console.log(all);
//   allStateData = all;
//   // initial_state.datasets[0].data = await all.map((st) => st.Total_Administered);
//   return all;
// };
// console.log(allStates().then((data) => data);
// console.log(initial_state.datasets[0].data);

export default ({ children }) => {
  const [data, setData] = useState(initial_state);

  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  );
};
/**
 * 
 * ,
  
  fetch('vaccinations/all')
    .then((res) => res.json())
    .then((data) => data.map((st) => st.US_Territory)),
 */