import React from "react";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";
import { TfiBag } from "react-icons/tfi";
import { GoClock } from "react-icons/go";
import { FaBookmark } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="min-h-full w-[22%] ">
      <p className="text-gray-400 pl-10 pt-4 uppercase text-sm">
        Candidate Dashboard
      </p>
      <div className="grid grid-rows-7 mt-5  ">
        {/* Dashboard Links */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center pl-5 py-3 mx-4  ${
              isActive
                ? "bg-blue-300 font-bold  border-blue-600 border-l-4 text-blue-600"
                : "text-gray-500"
            }`
          }
        >
          <HiOutlineRectangleStack size={30} />
          <span className="pl-4">Overview</span>
        </NavLink>

        <NavLink
          to="/my-profile"
          className={({ isActive }) =>
            `flex items-center pl-5 py-3 mx-4  ${
              isActive
                ? "bg-blue-300 border-blue-600 border-l-4 font-bold text-blue-600"
                : "text-gray-500"
            }`
          }
        >
          <FiUser size={30} />
          <span className="pl-4">My Profile</span>
        </NavLink>

        <NavLink
          to="/applied-jobs"
          className={({ isActive }) =>
            `flex items-center pl-5 py-3 mx-4  ${
              isActive
                ? "bg-blue-300 border-blue-600 border-l-4 font-bold text-blue-600"
                : "text-gray-500"
            }`
          }
        >
          <TfiBag size={25} />
          <span className="pl-4">Applied Jobs</span>
        </NavLink>

        <NavLink
          to="/saved-jobs"
          className={({ isActive }) =>
            `flex items-center pl-5 py-3 mx-4  ${
              isActive
                ? "bg-blue-300 border-blue-600 border-l-4 font-bold text-blue-600"
                : "text-gray-500"
            }`
          }
        >
          <FaBookmark size={25} />
          <span className="pl-4">Saved Jobs</span>
        </NavLink>

        <NavLink
          to="/scheduled-interview"
          className={({ isActive }) =>
            `flex items-center pl-5 py-3 mx-4  ${
              isActive
                ? "bg-blue-300 font-bold border-blue-600 border-l-4 text-blue-600"
                : "text-gray-500"
            }`
          }
        >
          <GoClock size={30} />
          <span className="pl-4">Scheduled Interview</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center pl-5 py-3 mx-4  ${
              isActive
                ? "bg-blue-300 font-bold border-blue-600 border-l-4 text-blue-600"
                : "text-gray-500"
            }`
          }
        >
          <IoSettingsOutline size={30} />
          <span className="pl-4">Settings</span>
        </NavLink>

        <NavLink
          to="/feedback"
          className={({ isActive }) =>
            `flex items-center pl-5 py-3 mx-4  ${
              isActive
                ? "bg-blue-300 font-bold border-blue-600 border-l-4 text-blue-600"
                : "text-gray-500"
            }`
          }
        >
          <VscFeedback size={30} />
          <span className="pl-4">Feedback</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
