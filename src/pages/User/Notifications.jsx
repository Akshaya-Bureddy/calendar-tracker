import React from 'react';

const Notifications = ({ notifications }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#2c4a7c] mb-4">Notifications</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {notifications.length === 0 ? (
          <p className="text-gray-600 text-center">No upcoming notifications.</p>
        ) : (
          <ul className="space-y-4">
            {notifications.map((notification) => (
              <li key={notification.id} className="border-b pb-4">
                <h3 className="text-xl font-semibold text-[#2c4a7c]">{notification.name}</h3>
                <p className="text-gray-600">
                  <span className="font-semibold">Mode:</span> {notification.mode}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Next Due:</span> {notification.nextDue}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Notifications;
