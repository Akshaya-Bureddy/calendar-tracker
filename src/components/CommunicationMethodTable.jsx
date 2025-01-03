import React from 'react';

const CommunicationMethodTable = ({ methods, onDelete, onUpdateSequence }) => {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead className="bg-[#2c4a7c] text-white">
        <tr>
          <th className="px-4 py-2 border">Name</th>
          <th className="px-4 py-2 border">Description</th>
          <th className="px-4 py-2 border">Sequence</th>
          <th className="px-4 py-2 border">Mandatory</th>
          <th className="px-4 py-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {methods.map((method, index) => (
          <tr key={index} className="text-center"> {/* Removed hover:bg class */}
            <td className="px-4 py-2 border">{method.name}</td>
            <td className="px-4 py-2 border">{method.description}</td>
            <td className="px-4 py-2 border">{method.sequence}</td>
            <td className="px-4 py-2 border">{method.mandatory ? 'Yes' : 'No'}</td>
            <td className="px-4 py-2 border">
              <button
                onClick={() => onDelete(index)}
                className="bg-red-600 text-white px-4 py-2 rounded"
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

export default CommunicationMethodTable;
