import React, { useState } from 'react';
import CalendarView from './CalendarView';
import ActivityLog from './ActivityLog';
import Notifications from './Notifications';

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('dashboard');
  const [companies, setCompanies] = useState([
    { id: 1, name: 'Company A', latestCommunication: 'Email - 2024-12-25', nextDue: '2025-01-05', mode: 'Email', completed: false },
    { id: 2, name: 'Company B', latestCommunication: 'Phone Call - 2024-12-28', nextDue: '2025-01-01', mode: 'Phone', completed: false },
    { id: 3, name: 'Company C', latestCommunication: 'LinkedIn Post - 2024-12-30', nextDue: '2025-01-10', mode: 'LinkedIn', completed: false },
  ]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [activityLog, setActivityLog] = useState([]);
  const [unseenNotifications, setUnseenNotifications] = useState(companies.length);

  const generateCalendarEvents = () => {
    return companies.flatMap((company) => {
      const today = new Date();
      // eslint-disable-next-line no-unused-vars
      const latestCommunicationDate = new Date(company.latestCommunication.split(' - ')[1]);
      const nextDueDate = new Date(company.nextDue);

      return [
        {
          title: `Past - ${company.name} (${company.mode})`,
          date: company.latestCommunication.split(' - ')[1],
          color: 'coral', // Coral for past communication
        },
        {
          title: company.completed
            ? `Completed - ${company.name} (${company.mode})`
            : `Upcoming - ${company.name} (${company.mode})`,
          date: company.nextDue,
          color: company.completed ? 'gray' : nextDueDate >= today ? 'green' : 'coral', // Green for future, Coral for overdue
        },
      ];
    });
  };

  const calendarEvents = generateCalendarEvents();

  const handleSelectCompany = (id) => {
    const isSelected = selectedCompanies.includes(id);
    const updatedCompanies = companies.map((company) =>
      company.id === id ? { ...company, completed: !company.completed } : company
    );

    setCompanies(updatedCompanies);

    if (isSelected) {
      // Deselect
      setSelectedCompanies((prev) => prev.filter((companyId) => companyId !== id));
      setActivityLog((prev) => prev.filter((log) => log.id !== id));
    } else {
      // Select
      setSelectedCompanies((prev) => [...prev, id]);
      const company = companies.find((comp) => comp.id === id);
      if (company) {
        setActivityLog((prev) => [
          ...prev.filter((log) => log.id !== id),
          {
            id: company.id,
            name: company.name,
            communication: company.latestCommunication,
            nextDue: company.nextDue,
            mode: company.mode,
          },
        ]);
      }
    }
  };

  const handleMarkAllAsSeen = () => {
    setUnseenNotifications(0); // Mark all notifications as seen
  };

  const notifications = companies
    .filter((company) => !company.completed) // Exclude completed companies
    .map((company) => ({
      id: company.id,
      name: company.name,
      nextDue: company.nextDue,
      mode: company.mode,
    }));

  return (
    <div className="min-h-screen bg-[#f4f7fb] p-6">
      <h1 className="text-4xl font-bold text-[#2c4a7c] mb-6">User</h1>

      {/* Navigation Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setActiveComponent('dashboard')}
          className={`relative px-4 py-2 rounded ${
            activeComponent === 'dashboard' ? 'bg-[#2c4a7c] text-white' : 'bg-white text-[#2c4a7c]'
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setActiveComponent('calendar')}
          className={`px-4 py-2 rounded ${
            activeComponent === 'calendar' ? 'bg-[#2c4a7c] text-white' : 'bg-white text-[#2c4a7c]'
          }`}
        >
          Calendar
        </button>
        <button
          onClick={() => {
            setActiveComponent('notifications');
            handleMarkAllAsSeen();
          }}
          className={`px-4 py-2 rounded relative ${
            activeComponent === 'notifications' ? 'bg-[#2c4a7c] text-white' : 'bg-white text-[#2c4a7c]'
          }`}
        >
          Notifications
          {unseenNotifications > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
              {unseenNotifications}
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveComponent('activityLog')}
          className={`px-4 py-2 rounded ${
            activeComponent === 'activityLog' ? 'bg-[#2c4a7c] text-white' : 'bg-white text-[#2c4a7c]'
          }`}
        >
          Activity Log
        </button>
      </div>

      {/* Render Active Component */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {activeComponent === 'dashboard' && (
          <div>
            <h2 className="text-2xl font-bold text-[#2c4a7c] mb-4">Company Dashboard</h2>
            <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
              <thead className="bg-[#2c4a7c] text-white">
                <tr>
                  <th className="px-4 py-2 border">Select</th>
                  <th className="px-4 py-2 border">Company Name</th>
                  <th className="px-4 py-2 border">Latest Communication</th>
                  <th className="px-4 py-2 border">Next Due</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company) => (
                  <tr key={company.id} className="hover:bg-[#f4f7fb] text-center">
                    <td className="px-4 py-2 border">
                      <input
                        type="checkbox"
                        checked={selectedCompanies.includes(company.id)}
                        onChange={() => handleSelectCompany(company.id)}
                      />
                    </td>
                    <td className="px-4 py-2 border">{company.name}</td>
                    <td className="px-4 py-2 border">{company.latestCommunication}</td>
                    <td className="px-4 py-2 border">{company.nextDue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {activeComponent === 'calendar' && <CalendarView events={calendarEvents} />}
        {activeComponent === 'notifications' && <Notifications notifications={notifications} />}
        {activeComponent === 'activityLog' && <ActivityLog activityLog={activityLog} />}
      </div>
    </div>
  );
};

export default Dashboard;
