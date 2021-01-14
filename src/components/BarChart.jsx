import React, { useContext } from 'react';
import { DataContext } from '../store/DataContext';
import { Polar, Bar } from 'react-chartjs-2';

const BarChart = () => {
  const [data, setData] = useContext(DataContext);

  useEffect(() => {
    const stats = fetch('vaccinations/all')
      .then((res) => res.json())
			.then((data) => data.map((st) => st.Total_Administered));
		setData({...data, })
    return () => {
      cleanup;
    };
  }, [input]);

  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
