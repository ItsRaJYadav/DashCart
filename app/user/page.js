"use client"
import React, { useState } from 'react';

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState('info');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'info':
        return <UserInfo />;
      case 'orders':
        return <UserOrders />;
      case 'address':
        return <UserAddress />;
      case 'settings':
        return <UserSettings />;
      default:
        return null;
    }
  };

  const handleLogout = () => {
    // Implement logout functionality here
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <div className="flex">
        <div className="w-1/4">
          <ul className="border-r border-gray-200">
            <li
              className={`py-2 px-4 cursor-pointer ${
                activeSection === 'info' ? 'bg-gray-200' : ''
              }`}
              onClick={() => handleSectionChange('info')}
            >
              Info
            </li>
            <li
              className={`py-2 px-4 cursor-pointer ${
                activeSection === 'orders' ? 'bg-gray-200' : ''
              }`}
              onClick={() => handleSectionChange('orders')}
            >
              Orders
            </li>
            <li
              className={`py-2 px-4 cursor-pointer ${
                activeSection === 'address' ? 'bg-gray-200' : ''
              }`}
              onClick={() => handleSectionChange('address')}
            >
              Address
            </li>
            <li
              className={`py-2 px-4 cursor-pointer ${
                activeSection === 'settings' ? 'bg-gray-200' : ''
              }`}
              onClick={() => handleSectionChange('settings')}
            >
              Settings
            </li>
          </ul>
          <button
            className="py-2 px-4 mt-4 bg-red-500 text-white rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        <div className="w-3/4">{renderSection()}</div>
      </div>
    </div>
  );
};

const UserInfo = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">User Info</h2>
      {/* Display user information */}
    </div>
  );
};

const UserOrders = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Order History</h2>
      {/* Display user's order history */}
    </div>
  );
};

const UserAddress = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
      {/* Display user's shipping address */}
    </div>
  );
};

const UserSettings = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Account Settings</h2>
      {/* Display user's account settings */}
    </div>
  );
};

export default UserDashboard;
