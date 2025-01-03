import React, { useState } from 'react';

const CompanyForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    linkedIn: '',
    emails: '',
    phoneNumbers: '',
    periodicity: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.location) {
      onSubmit(formData);
      setFormData({
        name: '',
        location: '',
        linkedIn: '',
        emails: '',
        phoneNumbers: '',
        periodicity: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-[#003366] mb-4">Add a New Company</h2>
      <div className="space-y-2">
        <label className="block text-gray-600 font-semibold">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-gray-600 font-semibold">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-gray-600 font-semibold">LinkedIn Profile</label>
        <input
          type="url"
          name="linkedIn"
          value={formData.linkedIn}
          onChange={handleChange}
          placeholder="LinkedIn Profile URL"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-gray-600 font-semibold">Emails</label>
        <input
          type="text"
          name="emails"
          value={formData.emails}
          onChange={handleChange}
          placeholder="Emails (comma-separated)"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-gray-600 font-semibold">Phone Numbers</label>
        <input
          type="text"
          name="phoneNumbers"
          value={formData.phoneNumbers}
          onChange={handleChange}
          placeholder="Phone Numbers (comma-separated)"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-gray-600 font-semibold">Communication Periodicity</label>
        <select
          name="periodicity"
          value={formData.periodicity}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
        >
          <option value="">Select Communication Periodicity</option>
          <option value="Weekly">Weekly</option>
          <option value="Bi-Weekly">Bi-Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-[#003366] text-white px-6 py-2 rounded hover:bg-[#DAA520] hover:text-black"
      >
        Save Company
      </button>
    </form>
  );
};

export default CompanyForm;
