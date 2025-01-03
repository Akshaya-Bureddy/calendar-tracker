import React from 'react';

const CompanyTable = ({ companies, onDelete }) => {
  return (
    <table className="w-full border-collapse border border-gray-300 mt-6">
      <thead className="bg-[#2c4a7c] text-white">
        <tr>
          <th className="px-4 py-2 border">Name</th>
          <th className="px-4 py-2 border">Location</th>
          <th className="px-4 py-2 border">LinkedIn Profile</th>
          <th className="px-4 py-2 border">Emails</th>
          <th className="px-4 py-2 border">Phone Numbers</th>
          <th className="px-4 py-2 border">Periodicity</th>
          <th className="px-4 py-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((company, index) => (
          <tr key={index}>
            <td className="px-4 py-2 border">{company.name}</td>
            <td className="px-4 py-2 border">{company.location}</td>
            <td className="px-4 py-2 border">
              <a
                href={company.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4d7cc7] underline"
              >
                LinkedIn
              </a>
            </td>
            <td className="px-4 py-2 border">{company.emails}</td>
            <td className="px-4 py-2 border">{company.phoneNumbers}</td>
            <td className="px-4 py-2 border">{company.periodicity}</td>
            <td className="px-4 py-2 border text-center">
              <button
                onClick={() => onDelete(index)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CompanyTable;
