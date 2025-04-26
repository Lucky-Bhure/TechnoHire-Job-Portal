import React, { useState } from "react";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";
import { TfiBag } from "react-icons/tfi";
import { GoClock } from "react-icons/go";
import { FaBookmark } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"; 
import { MdLogout } from "react-icons/md";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`min-h-full w-${isOpen ? "[400px]" : "[6%]"} transition-all`}>
      <div className="flex justify-between items-center pl-4 pt-4">
        <p
          className={`text-gray-400 uppercase text-sm ${!isOpen && "hidden"}`}
        >
          Candidate Dashboard
        </p>
        <button
          onClick={toggleSidebar}
          className="text-gray-500 p-2 hover:text-blue-600"
        >
          {isOpen ? <BsChevronLeft size={20} /> : <BsChevronRight size={20} />}
        </button>
      </div>
      <div className="grid grid-rows-7 mt-5 justify-between">
        {/* Dashboard Links */}
        <NavLink
          to="/dashboard/overview"
          className={({ isActive }) =>
            `flex items-center pl-5 py-3 mx-4  ${
              isActive
                ? "bg-[#DCBDED] border-[#7900BA] border-l-4 font-bold text-[#7900BA]"
                : "text-gray-500"
            }`
          }
        >
          <HiOutlineRectangleStack size={30} />
          {isOpen && <span className="pl-4">Overview</span>}
        </NavLink>

        <NavLink
          to="/dashboard/my-profile"
          className={({ isActive }) =>
            `flex items-center pl-5 py-3 mx-4  ${
              isActive
                ? "bg-[#DCBDED] border-[#7900BA] border-l-4 font-bold text-[#7900BA]"
                : "text-gray-500"
            }`
          }
        >
          <FiUser size={30} />
          {isOpen && <span className="pl-4">My Profile</span>}
        </NavLink>

        <NavLink
          to="/dashboard/applied-jobs"
          className={({ isActive }) =>
            `flex items-center pl-5 py-3 mx-4  ${
              isActive
                ? "bg-[#DCBDED] border-[#7900BA] border-l-4 font-bold text-[#7900BA]"
                : "text-gray-500"
            }`
          }
        >
          <TfiBag size={25} />
          {isOpen && <span className="pl-4">Applied Jobs</span>}
        </NavLink>

        <NavLink
          to="/dashboard/saved-jobs"
          className={({ isActive }) =>
            `flex items-center pl-5 py-3 mx-4  ${
              isActive
                ? "bg-[#DCBDED] border-[#7900BA] border-l-4 font-bold text-[#7900BA]"
                : "text-gray-500"
            }`
          }
        >
          <FaBookmark size={25} />
          {isOpen && <span className="pl-4">Saved Jobs</span>}
        </NavLink>

        <NavLink
          to="/dashboard/scheduled-interview"
          className={({ isActive }) =>
            `flex items-center pl-5 py-3 mx-4  ${
              isActive
                ? "bg-[#DCBDED] border-[#7900BA] border-l-4 font-bold text-[#7900BA]"
                : "text-gray-500"
            }`
          }
        >
          <GoClock size={30} />
          {isOpen && <span className="pl-4">Scheduled Interview</span>}
        </NavLink>

        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            `flex items-center pl-5 py-3 mx-4  ${
              isActive
                ? "bg-[#DCBDED] border-[#7900BA] border-l-4 font-bold text-[#7900BA]"
                : "text-gray-500"
            }`
          }
        >
          <IoSettingsOutline size={30} />
          {isOpen && <span className="pl-4">Settings</span>}
        </NavLink>

        <NavLink
          to="/dashboard/feedback"
          className={({ isActive }) =>
            `flex items-center pl-5 py-3 mx-4  ${
              isActive
                ? "bg-[#DCBDED] border-[#7900BA] border-l-4 font-bold text-[#7900BA]" 
                : "text-gray-500"
            }`
          }
        >
          <VscFeedback size={30} />
          {isOpen && <span className="pl-4">Feedback</span>}
        </NavLink>

      </div>

      
      <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center pl-5 py-3 mx-4 mt-25 ${
              isActive
                ? "bg-[#DCBDED] border-[#7900BA] border-l-4 font-bold text-[#7900BA]" 
                : "text-gray-500"
            }`
          }
        > 
          <MdLogout size={30} />
          {isOpen && <span className="pl-4">Log Out</span>}
        </NavLink>
    </div>
  );
};

export default Sidebar;
