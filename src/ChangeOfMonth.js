import React from 'react';
import { Line } from 'react-chartjs-2';

class LineExample extends React.Component {
    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: '水位',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'round',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'square',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#eee',
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 1,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [0, 0, 0, 5, 34, 40, 42]
                }
            ]
        };

        const options = {
            responsive: true,
            maintainAspectRatio: false
        };

        return (
            <div className="chart-container">
                <Line data={data} options={options} />
            </div>
        );
    }
}

export default LineExample;
