import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from '../store/UserContext';
import { DataContext } from '../store/DataContext';

import Login from './Login.jsx';
import Chart from './Chart.jsx';
import Search from './Search.jsx';

import { request, fromZipcode } from '../../api/api';
import { colors } from '../../assets/colors';

export default function MainContainer() {
  const [user] = useContext(UserContext);
  const [data, setData] = useContext(DataContext);
  const [zip, setZip] = useState('');
  const [load, setLoad] = useState(true);

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
      setLoad(false);
      const codes = {
        90210: 'California',
        11205: 'New York',
        19106: 'Pennsylvania',
        '01852': 'Massachusetts',
      };
      fromZipcode('01852').then((data) => console.log(data));
      fetch(`/api/vaccinations/${codes[zip.zip] || 'Massachusetts'}`)
        .then((res) => res.json())
        .then((st) =>
          setData({
            ...data,
            labels: ['Total Distributed', 'Total Administered'],
            datasets: [
              {
                ...data.datasets[0],
                data: [st.Total_Distributed, st.Total_Administered],
                backgroundColor: ['pink', 'coral'],
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
      {load ? (
        <Chart type="bar" data={data} />
      ) : (
        <Chart type="doughnut" data={data} />
      )}
    </div>
  );
}
