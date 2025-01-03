import React, { useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement
);

const Reports = () => {
  const [activeTab, setActiveTab] = useState('engagement');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedTimeframe, setSelectedTimeframe] = useState('All Time');

  const companies = ['Company A', 'Company B', 'Company C'];
  const timeframes = ['Last Week', 'Last Month', 'Last Quarter', 'All Time'];

  const getCompanySpecificData = (company, timeframe) => {
    const data = {
      'Last Week': { 'Company A': [10, 20, 30], 'Company B': [5, 15, 25], 'Company C': [8, 18, 28] },
      'Last Month': { 'Company A': [20, 30, 40], 'Company B': [10, 25, 35], 'Company C': [15, 25, 40] },
      'Last Quarter': { 'Company A': [30, 40, 50], 'Company B': [20, 30, 40], 'Company C': [25, 35, 45] },
      'All Time': { 'Company A': [40, 50, 60], 'Company B': [30, 40, 50], 'Company C': [35, 45, 55] },
    };
    return company ? data[timeframe][company] : [data[timeframe]['Company A'], data[timeframe]['Company B'], data[timeframe]['Company C']];
  };

  const pieData = {
    labels: ['LinkedIn', 'Email', 'Phone'],
    datasets: [
      {
        data: selectedCompany
          ? getCompanySpecificData(selectedCompany, selectedTimeframe)
          : getCompanySpecificData(null, selectedTimeframe).flat(),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const barData = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: selectedCompany ? `${selectedCompany} Communications` : 'All Companies Communications',
        data: selectedCompany
          ? getCompanySpecificData(selectedCompany, selectedTimeframe)
          : getCompanySpecificData(null, selectedTimeframe).reduce((a, b) => a.map((v, i) => v + b[i])),
        backgroundColor: '#36A2EB',
      },
    ],
  };

  const lineData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: companies.map((company, index) => ({
      label: `${company}`,
      data: [5 - index, 7 - index, 3 + index, 6 + index],
      borderColor: ['#FF0000', '#FFD700', '#0000FF'][index],
      fill: false,
    })),
  };

  const downloadReport = (type, chartType) => {
    alert(`Download ${type} report for ${chartType} functionality not implemented yet.`);
  };

  return (
    <div className="p-6 bg-[#f4f7fb] min-h-screen">
      <h1 className="text-4xl font-bold text-[#2c4a7c] mb-6 text-center">Reports and Analytics</h1>

      {/* Navigation Tabs */}
      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => setActiveTab('engagement')}
          className={`px-4 py-2 rounded ${activeTab === 'engagement' ? 'bg-[#2c4a7c] text-white' : 'bg-white text-[#2c4a7c]'}`}
        >
          Communication Frequency
        </button>
        <button
          onClick={() => setActiveTab('frequency')}
          className={`px-4 py-2 rounded ${activeTab === 'frequency' ? 'bg-[#2c4a7c] text-white' : 'bg-white text-[#2c4a7c]'}`}
        >
          Monthly Communications
        </button>
        <button
          onClick={() => setActiveTab('overdue')}
          className={`px-4 py-2 rounded ${activeTab === 'overdue' ? 'bg-[#2c4a7c] text-white' : 'bg-white text-[#2c4a7c]'}`}
        >
          Overdue Communications
        </button>
      </div>

      {/* Filters for Pie and Bar Chart */}
      {(activeTab === 'engagement' || activeTab === 'frequency') && (
        <div className="flex justify-center mb-6 gap-4">
          <div className="flex flex-col">
            <label className="text-[#2c4a7c] font-bold mb-1">Select Company:</label>
            <select
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              className="p-2 border border-[#2c4a7c] rounded"
            >
              <option value="">All Companies</option>
              {companies.map((company, index) => (
                <option key={index} value={company}>
                  {company}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-[#2c4a7c] font-bold mb-1">Select Timeframe:</label>
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="p-2 border border-[#2c4a7c] rounded"
            >
              {timeframes.map((timeframe, index) => (
                <option key={index} value={timeframe}>
                  {timeframe}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Chart Views */}
      {activeTab === 'engagement' && (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-[#2c4a7c] font-bold text-lg mb-4">Communication Frequency (Pie Chart)</h2>
          <div style={{ width: '300px', margin: '0 auto' }}>
            <Pie data={pieData} />
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => downloadReport('CSV', 'Pie Chart')}
              className="bg-[#2c4a7c] text-white px-4 py-2 rounded hover:bg-[#4d7cc7]"
            >
              Download CSV
            </button>
            <button
              onClick={() => downloadReport('PDF', 'Pie Chart')}
              className="bg-[#2c4a7c] text-white px-4 py-2 rounded hover:bg-[#4d7cc7]"
            >
              Download PDF
            </button>
          </div>
        </div>
      )}

      {activeTab === 'frequency' && (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-[#2c4a7c] font-bold text-lg mb-4">Monthly Communications (Bar Chart)</h2>
          <div style={{ width: '500px', margin: '0 auto' }}>
            <Bar data={barData} />
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => downloadReport('CSV', 'Bar Chart')}
              className="bg-[#2c4a7c] text-white px-4 py-2 rounded hover:bg-[#4d7cc7]"
            >
              Download CSV
            </button>
            <button
              onClick={() => downloadReport('PDF', 'Bar Chart')}
              className="bg-[#2c4a7c] text-white px-4 py-2 rounded hover:bg-[#4d7cc7]"
            >
              Download PDF
            </button>
          </div>
        </div>
      )}

      {activeTab === 'overdue' && (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-[#2c4a7c] font-bold text-lg mb-4">Overdue Communications (Line Chart)</h2>
          <div style={{ width: '500px', height: '300px', margin: '0 auto' }}>
            <Line data={lineData} options={{ maintainAspectRatio: false }} />
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => downloadReport('CSV', 'Line Chart')}
              className="bg-[#2c4a7c] text-white px-4 py-2 rounded hover:bg-[#4d7cc7]"
            >
              Download CSV
            </button>
            <button
              onClick={() => downloadReport('PDF', 'Line Chart')}
              className="bg-[#2c4a7c] text-white px-4 py-2 rounded hover:bg-[#4d7cc7]"
            >
              Download PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reports;
