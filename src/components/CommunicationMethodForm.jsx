import React, { useState } from 'react';

const CommunicationMethodForm = ({ onSubmit }) => {
  const [method, setMethod] = useState({
    name: '',
    description: '',
    sequence: '',
    mandatory: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMethod({
      ...method,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (method.name && method.sequence) {
      onSubmit(method);
      setMethod({
        name: '',
        description: '',
        sequence: '',
        mandatory: false,
      });
    }
  };

  return (
    <form className="bg-white p-6 rounded-lg shadow-lg space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-[#2c4a7c]">Add Communication Method</h2>
      <input
        type="text"
        name="name"
        value={method.name}
        onChange={handleChange}
        placeholder="Method Name"
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4d7cc7]"
      />
      <textarea
        name="description"
        value={method.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4d7cc7]"
      ></textarea>
      <input
        type="number"
        name="sequence"
        value={method.sequence}
        onChange={handleChange}
        placeholder="Sequence (e.g., 1 for first)"
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4d7cc7]"
      />
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="mandatory"
          checked={method.mandatory}
          onChange={handleChange}
        />
        <span>Mandatory</span>
      </label>
      <button
        type="submit"
        className="bg-[#2c4a7c] text-white px-4 py-2 rounded hover:bg-[#4d7cc7]"
      >
        Add Method
      </button>
    </form>
  );
};

export default CommunicationMethodForm;
