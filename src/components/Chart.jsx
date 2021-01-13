import React, { Component, useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
  }

  componentDidMount() {
    console.log(this.chartReference)
    // const {datasets} = this.refs.chart.chartInstance.data
  }
  render() {
    const data = {
      labels: ['Moderna', 'Pfizer', 'Total Administered'],
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [4800, 4000, 3000]
        }
      ]
    };
    return (
      <Line ref={this.chartReference} data={data}/>
  )
}
}

// const Chart = () => {
//   const chartReference = useRef();
  
//   useEffect(() => {
//     effect
//     return () => {
//       cleanup
//     }
//   }, [input])
  
// }
export default Chart;