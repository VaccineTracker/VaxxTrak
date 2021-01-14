import React, { useContext } from 'react';
import { DataContext } from '../store/DataContext';
import { Polar, Bar } from 'react-chartjs-2';

const BarChart = () => {
	const [ data, setData ] = useContext(DataContext);

	return (
		<div>
			<Bar data={data} />
		</div>
	);
};

export default BarChart;
