import React, { useState } from 'react';
import CompanyManagement from './CompanyManagement';
import CommunicationMethodManagement from './CommunicationMethodManagement';

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('companyManagement'); // Default to Company Management

  return (
    <div className="min-h-screen bg-[#f4f7fb] p-6">
      <h1 className="text-4xl font-bold text-[#2c4a7c] mb-6 text-center">Admin Dashboard</h1>

      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setActiveComponent('companyManagement')}
          className={`px-4 py-2 rounded ${
            activeComponent === 'companyManagement' ? 'bg-[#2c4a7c] text-white' : 'bg-white text-[#2c4a7c]'
          }`}
        >
          Company Management
        </button>
        <button
          onClick={() => setActiveComponent('communicationMethods')}
          className={`px-4 py-2 rounded ${
            activeComponent === 'communicationMethods' ? 'bg-[#2c4a7c] text-white' : 'bg-white text-[#2c4a7c]'
          }`}
        >
          Communication Methods
        </button>
      </div>

      {/* Render Active Component */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {activeComponent === 'companyManagement' && <CompanyManagement />}
        {activeComponent === 'communicationMethods' && <CommunicationMethodManagement />}
      </div>
    </div>
  );
};

export default AdminDashboard;
