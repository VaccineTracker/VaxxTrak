import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as action from '../redux/actions/actions';

import Login from '../components/Login.jsx';
import Chart from '../components/Chart.jsx';
import Search from '../components/Search.jsx';

export default function MainContainer() {
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState(null);
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
    setLoading(false);
  }, []);

  useEffect(() => {
    if (zipcode) {
      setLoading(true);
      fetch(`/api/vaccinations/${zipcode}`)
        .then((res) => res.json())
        .then((stateData) => dispatch(action.setDataCurrent(stateData)));
      setMode('current');
      setLoading(false);
    }
  }, [zipcode]);

  return !loading ? (
    <div className="main-container">
      <nav>
        {!user.verified && <Login />}
        <Search />
      </nav>
      {mode === 'all' && (
        <div className="view-chart">
          <Chart type="bar" data={charts.globalChart} />
        </div>
      )}
      {mode === 'current' && (
        <div className="view-chart">
          <Chart type="doughnut" data={charts.locationCharts[0]} />
          <Chart type="doughnut" data={charts.locationCharts[1]} />
        </div>
      )}
    </div>
  ) : (
    <h1> Loading...</h1>
  );
}
