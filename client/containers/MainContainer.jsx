import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as action from '../redux/actions/actions';

import Login from '../components/Login.jsx';
import Chart from '../components/Chart.jsx';
import Search from '../components/Search.jsx';

import { colors } from '../../assets/colors';

export default function MainContainer() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState('bar');
  const user = useSelector((state) => state.user);
  const zipcode = useSelector((state) => state.data.zipcode);
  const charts = useSelector((state) => state.chart);

  useEffect(() => {
    fetch('api/vaccinations/all')
      .then((res) => res.json())
      .then((allStateData) =>
        dispatch(
          action.setChartData({
            label: 'Total Administered Doses for All U.S. Territories',
            labels: allStateData.map((st) => st.US_Territory),
            data: allStateData.map((st) => st.Total_Administered),
            backgroundColor: colors.filter((x, i) => i < allStateData.length),
          })
        )
      );
    setLoading(false);
  }, []);

  useEffect(() => {
    if (zipcode) {
      setLoading(true);
      fetch(`/api/vaccinations/${zipcode}`)
        .then((res) => res.json())
        .then((stateData) =>
          dispatch(
            action.setChartData({
              label: `${zipcode}`,
              labels: [
                'Total Distributed',
                'Total Administered',
                'Pfizer Distribution',
                'Moderna Distribution',
              ],
              data: [
                stateData.dist,
                stateData.admin,
                stateData.pfizer,
                stateData.moderna,
              ],
              backgroundColor: ['pink', 'coral', 'gold', 'teal'],
            })
          )
        );
      setLoading(false);
      setType('doughnut');
    }
  }, [zipcode]);

  return (
    <div className="main-container">
      <nav>
        {!user.verified && <Login />}
        <Search />
      </nav>
      {!loading && <Chart type={type} data={charts.charts[0]} />}
    </div>
  );
}
