import React from 'react';
import { Polar, Bar } from 'react-chartjs-2';

const BarChart = () => {
	return (
		<div>
			<Bar
				data={{
					labels   : [ 'hay', 'kween', 'sashay', 'shantay' ],
					datasets : [
						{
							label              : 'makeup',
							data               : [ 12, 8, 42, 25 ],
							backgroundColor    : [ 'pink', 'magenta', 'coral', 'purple' ],
							categoryPercentage : 2
						}
					]
				}}
				height={200}
				width={200}
				options={{
					maintainAspectRatio : false
				}}
			/>
		</div>
	);
};

export default BarChart;
