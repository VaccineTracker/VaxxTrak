import React from 'react';
import { Bar, Doughnut, Polar } from 'react-chartjs-2';

export default function Chart({ type, data }) {
  return data ? (
    <div>
      {type === 'bar' && <Bar data={data} />}
      {type === 'doughnut' && <Doughnut data={data} />}
      {type === 'polar' && <Polar data={data} />}
    </div>
  ) : (
    ''
  );
}
