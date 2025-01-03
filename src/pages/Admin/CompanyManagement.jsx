import React, { useState, useEffect } from 'react';
import CompanyForm from '../../components/CompanyForm';
import CompanyTable from '../../components/CompanyTable';

const CompanyManagement = () => {
  const [companies, setCompanies] = useState(() => {
    // Retrieve companies from localStorage or initialize an empty array
    const storedCompanies = localStorage.getItem('companies');
    return storedCompanies ? JSON.parse(storedCompanies) : [];
  });

  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Save companies to localStorage whenever they are updated
  useEffect(() => {
    localStorage.setItem('companies', JSON.stringify(companies));
  }, [companies]);

  const addCompany = (company) => {
    setCompanies([...companies, company]);
    setShowForm(false);
  };

  const deleteCompany = (index) => {
    if (window.confirm('Are you sure you want to delete this company?')) {
      const updatedCompanies = companies.filter((_, i) => i !== index);
      setCompanies(updatedCompanies);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f4f7fb] p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#2c4a7c]">Company Management</h1>

      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-[#2c4a7c] text-white px-6 py-3 rounded hover:bg-[#4d7cc7]"
        >
          {showForm ? 'Cancel' : 'Add New Company'}
        </button>

        <input
          type="text"
          placeholder="Search Companies..."
          className="p-2 border border-gray-300 rounded"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
          <CompanyForm onSubmit={addCompany} />
        </div>
      )}

      <div className="mt-6">
        <CompanyTable companies={filteredCompanies} onDelete={deleteCompany} />
      </div>
    </div>
  );
};

export default CompanyManagement;
