import React from 'react';

const ActivityLogTable = () => {
  const logs = [
    { id: 1, date: '2025-01-01', user: 'John Doe', company: 'Company A', action: 'Sent Email' },
    { id: 2, date: '2025-01-02', user: 'Jane Smith', company: 'Company B', action: 'Made Call' },
    { id: 3, date: '2025-01-03', user: 'Mark Lee', company: 'Company C', action: 'Posted on LinkedIn' },
  ];

  return (
    <table className="w-full border-collapse border border-gray-300 text-left">
      <thead className="bg-[#2c4a7c] text-white">
        <tr>
          <th className="px-4 py-2 border">Date</th>
          <th className="px-4 py-2 border">User</th>
          <th className="px-4 py-2 border">Company</th>
          <th className="px-4 py-2 border">Action</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log) => (
          <tr key={log.id} className="hover:bg-[#f4f7fb]">
            <td className="px-4 py-2 border">{log.date}</td>
            <td className="px-4 py-2 border">{log.user}</td>
            <td className="px-4 py-2 border">{log.company}</td>
            <td className="px-4 py-2 border">{log.action}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ActivityLogTable;
