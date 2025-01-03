import React, { useState } from 'react';

const AddDetails = () => {
  const [details, setDetails] = useState({
    type: '',
    date: '',
    notes: '',
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Details Submitted:', details);
    setDetails({ type: '', date: '', notes: '' });
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#2c4a7c]">Add Communication Details</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4"
      >
        <select
          name="type"
          value={details.type}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4d7cc7]"
        >
          <option value="">Select Communication Type</option>
          <option value="LinkedIn Post">LinkedIn Post</option>
          <option value="Email">Email</option>
          <option value="Phone Call">Phone Call</option>
        </select>

        <input
          type="date"
          name="date"
          value={details.date}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4d7cc7]"
        />

        <textarea
          name="notes"
          value={details.notes}
          onChange={handleChange}
          placeholder="Add Notes"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4d7cc7]"
        ></textarea>

        <button
          type="submit"
          className="bg-[#2c4a7c] text-white w-full py-2 rounded hover:bg-[#4d7cc7]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddDetails;
