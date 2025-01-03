import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ currentModule }) => {
  const location = useLocation();

  return (
    <nav className="bg-[#2c4a7c] text-white p-4 flex justify-between items-center">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <div className="text-2xl font-bold">ENTNT</div>
      </div>

      {/* Center: Calendar Application */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold text-[#4d7cc7]">
        Calendar Application
      </div>

      {/* Right: Navigation Links */}
      <div className="flex space-x-4">
        <Link
          to="/"
          className={`px-4 py-2 rounded ${
            location.pathname === '/' ? 'bg-[#4d7cc7]' : 'hover:bg-[#4d7cc7]'
          }`}
        >
          Home
        </Link>

        {currentModule === 'user' && (
          <Link
            to="/user/dashboard"
            className={`px-4 py-2 rounded ${
              location.pathname.includes('/user/dashboard') ? 'bg-[#4d7cc7]' : 'hover:bg-[#4d7cc7]'
            }`}
          >
            Dashboard
          </Link>
        )}

        {currentModule === 'admin' && (
          <Link
            to="/admin/dashboard"
            className={`px-4 py-2 rounded ${
              location.pathname.includes('/admin/dashboard') ? 'bg-[#4d7cc7]' : 'hover:bg-[#4d7cc7]'
            }`}
          >
            Dashboard
          </Link>
        )}

        <Link
          to="/reports"
          className={`px-4 py-2 rounded ${
            location.pathname.includes('/reports') ? 'bg-[#4d7cc7]' : 'hover:bg-[#4d7cc7]'
          }`}
        >
          Reports
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
