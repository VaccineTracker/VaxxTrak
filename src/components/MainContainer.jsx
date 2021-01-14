import React, { useContext } from 'react';

import { UserContext } from '../store/UserContext';
import { DataContext } from '../store/DataContext';

import Vaccine from './Vaccine.jsx';
import Login from './Login.jsx';
import Chart from './Chart.jsx';

export default () => {
  const [user] = useContext(UserContext);
  const [data] = useContext(DataContext);

  console.log(data);

  return (
    <div className="main-container">
      {user.verified ? '' : <Login />}
      <Vaccine />
      <Chart />
    </div>
  );
};
