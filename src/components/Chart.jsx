import React, { useContext, useRef } from 'react';
import { DataContext } from '../store/DataContext';
import { Polar } from 'react-chartjs-2';

export default () => {
  const [data, setData] = useContext(DataContext);

  return (
    <div className="chart">
      <Polar data={data} />
    </div>
  );
};
