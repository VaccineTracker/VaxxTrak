import React, { useContext, useEffect } from 'react';

import { UserContext } from '../store/UserContext';
import { DataContext } from '../store/DataContext';

import Vaccine from './Vaccine.jsx';
import Login from './Login.jsx';
import BarChart from './BarChart.jsx';

export default () => {
  const [user] = useContext(UserContext);
  const [data, setData] = useContext(DataContext);

  useEffect(() => {
    fetch('vaccinations/all')
      .then((res) => res.json())
      .then((data) => data.map((st) => st.Total_Administered))
      .then((x) =>
        setData({ ...data, datasets: [{ ...data.datasets[0], data: x }] })
      );
    fetch('vaccinations/all')
      .then((res) => res.json())
      .then((data) => data.map((st) => st.US_Territory))
      .then((x) => setData({ ...data, labels: x }));
  }, []);

  return (
    <div className="main-container">
      {user.verified ? '' : <Login />}
      <Vaccine />
      <BarChart data={data} />
    </div>
  );
};
