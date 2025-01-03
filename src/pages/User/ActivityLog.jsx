import React from 'react';

const ActivityLog = ({ activityLog = [] }) => {
  if (!activityLog || activityLog.length === 0) {
    return <p className="text-center text-gray-500">No activity log available.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-[#2c4a7c] mb-4">Activity Log</h2>
      <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-[#2c4a7c] text-white">
          <tr>
            <th className="px-4 py-2 border">Company Name</th>
            <th className="px-4 py-2 border">Communication</th>
            <th className="px-4 py-2 border">Next Due</th>
            <th className="px-4 py-2 border">Mode</th>
          </tr>
        </thead>
        <tbody>
          {activityLog.map((log) => (
            <tr key={log.id} className="hover:bg-[#f4f7fb] text-center">
              <td className="px-4 py-2 border">{log.name}</td>
              <td className="px-4 py-2 border">{log.communication}</td>
              <td className="px-4 py-2 border">{log.nextDue}</td>
              <td className="px-4 py-2 border">{log.mode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityLog;
