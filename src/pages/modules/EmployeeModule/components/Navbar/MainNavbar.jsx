import React from 'react';

const MainNavbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-white shadow-md">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="TechnoHire Logo" className="h-10" />
        <span className="text-xs text-purple-600 font-medium">Where Talent Meets Opportunity</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-red-500 text-xl">🔔</span>
        <button className="border border-purple-600 text-purple-600 px-4 py-1 rounded hover:bg-purple-50">Post A Jobs</button>
        <img src="/profile.jpg" alt="Profile" className="h-8 w-8 rounded-full" />
      </div>
    </div>
  );
};

export default MainNavbar;
