import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
