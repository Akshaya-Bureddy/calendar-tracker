import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const CommunicationFrequencyChart = ({ data }) => {
  // Handle cases where data might be undefined or null
  if (!data || !Object.keys(data).length) {
    return <p className="text-center text-[#4d7cc7]">No data available.</p>;
  }

  return (
    <div>
      <Bar
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
          },
        }}
      />
    </div>
  );
};

export default CommunicationFrequencyChart;
