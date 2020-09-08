import React from 'react';
import { Line } from 'react-chartjs-2';

class LineExample extends React.Component {
    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: '水温',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(178,34,34,0.4)',
                    borderColor: 'rgba(178,34,34,1)',
                    borderCapStyle: 'round',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'square',
                    data: [0, 0, 0, 10, 15, 20, 23]
                },
                {
                    label: '水位',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(0,191,255,0.4)',
                    borderColor: 'rgba(0,191,255,1)',
                    borderCapStyle: 'round',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'square',
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
