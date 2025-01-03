import React, { useState } from 'react';
import CommunicationMethodForm from '../../components/CommunicationMethodForm';
import CommunicationMethodTable from '../../components/CommunicationMethodTable';

const CommunicationMethodManagement = () => {
  const [methods, setMethods] = useState([
    { name: 'LinkedIn Post', description: 'Post updates on LinkedIn', sequence: 1, mandatory: true },
    { name: 'LinkedIn Message', description: 'Send a LinkedIn Message', sequence: 2, mandatory: true },
    { name: 'Email', description: 'Send an Email', sequence: 3, mandatory: true },
    { name: 'Phone Call', description: 'Call the representative', sequence: 4, mandatory: false },
    { name: 'Other', description: 'Other communication methods', sequence: 5, mandatory: false },
  ]);
  const [showForm, setShowForm] = useState(false);

  const addMethod = (method) => {
    setMethods((prevMethods) => [...prevMethods, { ...method, sequence: prevMethods.length + 1 }]);
    setShowForm(false); // Hide the form after adding a method
  };

  const deleteMethod = (index) => {
    if (window.confirm('Are you sure you want to delete this communication method?')) {
      setMethods((prevMethods) => prevMethods.filter((_, i) => i !== index));
    }
  };

  const updateSequence = (newMethods) => {
    setMethods(newMethods);
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#2c4a7c]">Communication Method Management</h1>

      {/* Add Method Button */}
      <div className="text-center mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-[#2c4a7c] text-white px-6 py-3 rounded"
        >
          {showForm ? 'Cancel' : 'Add Method'}
        </button>
      </div>

      {/* Form for Adding Methods (only visible when showForm is true) */}
      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto mb-6">
          <CommunicationMethodForm onSubmit={addMethod} />
        </div>
      )}

      {/* Table to Display and Manage Methods */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        <CommunicationMethodTable methods={methods} onDelete={deleteMethod} onUpdateSequence={updateSequence} />
      </div>
    </div>
  );
};

export default CommunicationMethodManagement;
