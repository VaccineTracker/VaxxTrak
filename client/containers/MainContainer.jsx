import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as action from '../redux/actions/actions';

import Login from '../components/Login.jsx';
import Chart from '../components/Chart.jsx';
import Search from '../components/Search.jsx';

import { colors } from '../assets/colors';

export default function MainContainer() {
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState(null);
  const [display, setDisplay] = useState(null);
  // redux
  const user = useSelector((state) => state.user);
  const zipcode = useSelector((state) => state.data.currentLocation.zipcode);
  const charts = useSelector((state) => state.data.charts);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('api/vaccinations/all')
      .then((res) => res.json())
      .then((allStateData) => dispatch(action.setDataGlobal(allStateData)));
    setMode('all');
  }, []);

  useEffect(() => {
    if (zipcode) {
      fetch(`/api/vaccinations/${zipcode}`)
        .then((res) => res.json())
        .then((stateData) => dispatch(action.setDataCurrent(stateData)));
      setMode('current');
    }
  }, [zipcode]);

  useEffect(() => {
    console.log('globalChart');
    setDisplay(<Chart type="bar" data={charts.globalChart} />);
  }, [charts.globalChart]);

  useEffect(() => {
    console.log('locaChart');
    const map = charts.locationCharts.map((x, i) => {
      <Chart type="doughnut" key={`${zipcode}-${i}`} data={x} />;
    });
    setDisplay(map);
  }, [charts.locationCharts]);

  return (
    <div className="main-container">
      <nav>
        {!user.verified && <Login />}
        <Search />
      </nav>
      {display && display}
    </div>
  );
}

/**
 * 
 * 
  useEffect(() => {
    setLoading(true);
    if (mode == 'all') {
      console.log(mode);
      setDisplay(<Chart type="bar" data={charts.globalChart} />);
      setLoading(false);
    } else if (mode == 'current') {
      console.log(mode);

      setLoading(false);
    }
  }, [charts]);
 {
            label: 'Total Administered Doses for All U.S. Territories',
            labels: allStateData.map((st) => st.US_Territory),
            data: allStateData.map((st) => st.Total_Administered),
            backgroundColor: colors.filter((x, i) => i < allStateData.length),
          }
            {mode === 'all' && !loading && (
        <Chart type="bar" data={charts.globalChart} />
      )}
      {mode === 'current' && !loading && (
        <Chart type="doughnut" data={charts.locationCharts[0]} />
      )}

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
 */
