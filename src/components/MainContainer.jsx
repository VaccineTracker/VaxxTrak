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
      .then((db) =>
        setData({
          ...data,
          labels: db.map((st) => st.US_Territory),
          datasets: [
            {
              ...data.datasets[0],
              data: db.map((st) => st.Total_Administered),
            },
          ],
        })
      );
  }, []);

  return (
    <div className="main-container">
      {user.verified ? '' : <Login />}
      <Vaccine />
      <BarChart data={data} />
    </div>
  );
};
