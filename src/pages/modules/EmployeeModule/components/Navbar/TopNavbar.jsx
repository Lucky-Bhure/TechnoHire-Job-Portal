import React from 'react';

const TopNavbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white text-sm shadow-sm border-b">
      <div className="flex gap-4">
        <a href="#" className="text-gray-600 hover:text-purple-600">Home</a>
        <a href="#" className="text-purple-600 font-semibold">Find Candidate</a>
        <a href="#" className="text-gray-600 hover:text-purple-600">Dashboard</a>
        <a href="#" className="text-gray-600 hover:text-purple-600">My Jobs</a>
        <a href="#" className="text-gray-600 hover:text-purple-600">Applications</a>
        <a href="#" className="text-gray-600 hover:text-purple-600">Customer Supports</a>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-500">📞 0000000000</span>
        <select className="text-gray-700 border rounded px-1 py-0.5">
          <option>English</option>
        </select>
      </div>
    </div>
  );
};

export default TopNavbar;
