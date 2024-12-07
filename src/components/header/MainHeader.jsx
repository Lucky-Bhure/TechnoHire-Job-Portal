import React from "react";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <>
      <div className="bg-[#F1F2F4] grid py-2 gap-2 grid-cols-3">
        <div className=" col-span-2 ">
          <div className="flex ps-2">
            <NavLink
              className={({ isActive }) =>
                `inline-block text-[#5E6670] ${
                  isActive ? "border-b text-blue-600  border-blue-700" : ""
                }`
              }
              to="/dashboard"
            >
              <span className="pl-4">Dashboard</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `inline-block text-[#5E6670] ${
                  isActive ? "border-b  text-blue-600 border-blue-700" : ""
                }`
              }
              to="/find-job"
            >
              <span className="pl-4">find a Job</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `inline-block text-[#5E6670] ${
                  isActive ? "border-b text-blue-600  border-blue-700" : ""
                }`
              }
              to="/find-employers"
            >
              <span className="pl-4">find Employers</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `inline-block text-[#5E6670] ${
                  isActive ? "border-b text-blue-600 border-blue-700" : ""
                }`
              }
              to="/job-alerts"
            >
              <span className="pl-4">Job Alerts</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `inline-block text-[#5E6670] ${
                  isActive ? "border-b text-blue-600  border-blue-700" : ""
                }`
              }
              to="/customer-supports"
            >
              <span className="pl-4">Customer Supports</span>
            </NavLink>
          </div>
        </div>
        <div className="">
          <div></div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
