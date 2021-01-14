import React, { useContext } from 'react';
import { UserContext } from '../store/UserContext';
import { DataContext } from '../store/DataContext';

import Chart from './Chart.jsx';
import Vaccine from './Vaccine.jsx';
import Login from './Login.jsx';
import Chart from './Chart.jsx';
import BarChart from './BarChart.jsx';

export default () => {
  const [user] = useContext(UserContext);
  // const [data, setData] = useContext(DataContext);

  return (
    <div className="main-container">
      {user.verified ? '' : <Login />}
      <Vaccine />
      {/* <Chart /> */}
      <BarChart />
    </div>
  );
};

/**
 *   // useEffect(() => {
  //   const stats = fetch('vaccinations/all')
  //   .then((res) => res.json())
  //     .then((data) => data.map((st) => st.Total_Administered));
  //   datasets[0].data
  // setData({...data, datasets[0].data = stats})
 
  //   return () => {
  //     cleanup
  //   }
  // }, [input])
 */
