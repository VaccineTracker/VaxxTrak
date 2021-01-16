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

export default ({ children }) => {
  const [data, setData] = useState(initial_state);

  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  );
};
