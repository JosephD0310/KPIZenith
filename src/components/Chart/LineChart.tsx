import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const data: ChartData<'line'> = {
    labels: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4', 'Tuần 5', 'Tuần 6'],
    datasets: [
        {
            label: 'Học tập',
            data: [65, 59, 80, 81, 56, 55],
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'round',
            borderDash: [5, 5],
            borderDashOffset: 2.0,
            borderJoinStyle: 'miter',
            borderWidth: 2,
            tension: 0.4,
            spanGaps: false,
        },
        {
            label: 'Kỹ năng',
            data: [40,],
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'round',
            borderDash: [5, 5],
            borderDashOffset: 2.0,
            borderJoinStyle: 'miter',
            borderWidth: 2,
            tension: 0.4,
            spanGaps: false,
        },
        {
            label: 'Rèn luyện',
            data: [65, 59, 80, 81, 56, 55],
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'round',
            borderDash: [5, 5],
            borderDashOffset: 2.0,
            borderJoinStyle: 'miter',
            borderWidth: 2,
            tension: 0.4,
            spanGaps: false,
        },
    ],
};

const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Theo dõi mức độ hoàn thành',
        },
    },
    elements: {
        line: {
            tension: 0.4, // Adjusts the curvature of the line
        },
    },
};

const LineChart: React.FC = () => {
    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
