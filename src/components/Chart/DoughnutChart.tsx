
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const data = {
  labels: ['Tổng số', 'Hoàn thành'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19 ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'left' as const,
      boxWidth: 100
    },
    title: {
      display: true,
      text: 'Biểu đồ thống kê tính đến thời điểm hiện tại',
    },
  },
};


const DoughnutChart: React.FC = () => {
  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
