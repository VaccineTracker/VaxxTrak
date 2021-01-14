import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';

export default ({ type, data }) => {
  return (
    <div>
      {type === 'bar' && <Bar data={data} />}
      {type === 'doughnut' && <Doughnut data={data} />}
    </div>
  );
};
