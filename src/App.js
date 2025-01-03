import React, { useState, useEffect } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home/Home';
import Dashboard from './pages/User/Dashboard';
import CalendarView from './pages/User/CalendarView';
import ActivityLog from './pages/User/ActivityLog';
import Notifications from './pages/User/Notifications';
import AdminDashboard from './pages/Admin/AdminDashboard';
// Updated
import Reports from './pages/Reports/Reports';

const App = () => {
  const [currentModule, setCurrentModule] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setCurrentModule('');
    } else if (location.pathname.includes('/user')) {
      setCurrentModule('user');
    } else if (location.pathname.includes('/admin')) {
      setCurrentModule('admin');
    }
  }, [location]);

  return (
    <>
      <Navbar currentModule={currentModule} />
      <Routes>
        <Route path="/" element={<Home onModuleSelect={setCurrentModule} />} />

        {/* User Module */}
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/user/calendar" element={<CalendarView />} />
        <Route path="/user/activity-log" element={<ActivityLog />} />
        <Route path="/user/notifications" element={<Notifications />} />

        {/* Admin Module */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Reports */}
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
