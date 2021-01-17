import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from '../store/UserContext';
import { DataContext } from '../store/DataContext';

import Login from './Login.jsx';
import Chart from './Chart.jsx';
import Search from './Search.jsx';

import { colors } from '../../assets/colors';

export default function MainContainer() {
  const [user] = useContext(UserContext);
  const [data, setData] = useContext(DataContext);
  const [zip, setZip] = useState('');
  const [allStates, setAllStates] = useState(true);

  useEffect(() => {
    fetch('api/vaccinations/all')
      .then((res) => res.json())
      .then((db) =>
        setData({
          ...data,
          labels: db.map((st) => st.US_Territory),
          datasets: [
            {
              ...data.datasets[0],
              data: db.map((st) => st.Total_Administered),
              backgroundColor: colors.filter((x, i) => i < db.length),
            },
          ],
        })
      );
  }, []);

  useEffect(() => {
    if (zip !== '') {
      setAllStates(false);
      fetch(`/api/vaccinations/${zip}`)
        .then((res) => res.json())
        .then((st) =>
          setData({
            ...data,
            labels: [
              'Total Distributed',
              'Total Administered',
              'Pfizer Distribution',
              'Moderna Distribution',
            ],
            datasets: [
              {
                ...data.datasets[0],
                data: [st.dist, st.admin, st.pfizer, st.moderna],
                backgroundColor: ['pink', 'coral', 'gold', 'teal'],
              },
            ],
          })
        );
    }
  }, [zip]);

  return (
    <div className="main-container">
      <nav>
        {user.verified ? '' : <Login />}
        <Search setZip={setZip} />
      </nav>
      {allStates ? (
        <Chart type="bar" data={data} />
      ) : (
        <Chart type="doughnut" data={data} />
      )}
    </div>
  );
}
