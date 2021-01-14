import React from 'react';
import { Polar, Bar } from 'react-chartjs-2';

export default ({ data }) => {
  return (
    <div>
      <Polar data={data} />
    </div>
  );
};
