import React from "react";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className="bg-[#F1F2F4] w-full">
      <div className="w-full py-2">
        <nav className="flex flex-wrap justify-between items-center px-4">
          <div className="flex flex-wrap gap-4 md:gap-6">
          {/* <NavLink
              className={({ isActive }) =>
                `text-[#5E6670] px-2 py-1 text-sm md:px-4 md:py-2 font-medium hover:text-[#7900BA] hover:border-b-2 hover:border-[#7900BA] transition ${
                  isActive ? "border-b-2 text-[#7900BA] border-[#7900BA]" : ""
                }`
              }
              to="/"
            >
              Home
            </NavLink> */}

            <NavLink
              className={({ isActive }) =>
                `text-[#5E6670] px-2 py-1 text-sm md:px-4 md:py-2 font-medium hover:text-[#7900BA] hover:border-b-2 hover:border-[#7900BA] transition ${
                  isActive ? "border-b-2 text-[#7900BA] border-[#7900BA]" : ""
                }`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `text-[#5E6670] px-2 py-1 text-sm md:px-4 md:py-2 font-medium hover:text-[#7900BA] hover:border-b-2 hover:border-[#7900BA] transition ${
                  isActive ? "border-b-2 text-[#7900BA] border-[#7900BA]" : ""
                }`
              }
              to="/find-job"
            >
              Find a Job
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `text-[#5E6670] px-2 py-1 text-sm md:px-4 md:py-2 font-medium hover:text-[#7900BA] hover:border-b-2 hover:border-[#7900BA] transition ${
                  isActive ? "border-b-2 text-[#7900BA] border-[#7900BA]" : ""
                }`
              }
              to="/find-employers"
            >
              Find Employers
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `text-[#5E6670] px-2 py-1 text-sm md:px-4 md:py-2 font-medium hover:text-[#7900BA] hover:border-b-2 hover:border-[#7900BA] transition ${
                  isActive ? "border-b-2 text-[#7900BA] border-[#7900BA]" : ""
                }`
              }
              to="/job-alerts"
            >
              Job Alerts
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `text-[#5E6670] px-2 py-1 text-sm md:px-4 md:py-2 font-medium hover:text-[#7900BA] hover:border-b-2 hover:border-[#7900BA] transition ${
                  isActive ? "border-b-2 text-[#7900BA] border-[#7900BA]" : ""
                }`
              }
              to="/customer-supports"
            >
              Customer Support
            </NavLink>
          </div>
          <div className="flex items-center mt-2 md:mt-0">
         
          </div>
         
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
