import React from 'react';
import ActivityLogTable from '../components/ActivityLogTable';

const ActivityLogLive = () => {
  return (
    <div className="min-h-screen bg-[#f4f7fb] p-6">
      <h1 className="text-4xl font-bold text-[#2c4a7c] mb-6 text-center">Live Activity Log</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
        <ActivityLogTable />
      </div>
    </div>
  );
};

export default ActivityLogLive;
