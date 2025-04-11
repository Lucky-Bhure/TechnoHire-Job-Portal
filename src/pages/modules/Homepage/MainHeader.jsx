import React from "react";
import { NavLink } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
const MainHeader = () => {
  return (
    <header className="bg-[#F1F2F4] w-full">
      <div className="w-full py-2">
        <nav className="flex flex-wrap justify-around items-center px-4">
          <div className="flex flex-wrap gap-4 md:gap-6 ml-1">
            <NavLink
              className={({ isActive }) =>
                `text-[#5E6670] px-2 py-1 text-sm md:px-4 md:py-2 font-medium hover:text-[#7900BA] hover:border-b-2 hover:border-[#7900BA] transition ${
                  isActive ? "border-b-2 text-[#7900BA] border-[#7900BA]" : ""
                }`
              }
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `text-[#5E6670] px-2 py-1 text-sm md:px-4 md:py-2 font-medium hover:text-[#7900BA] hover:border-b-2 hover:border-[#7900BA] transition ${
                  isActive ? "" : ""
                }`
              }
              to=""
            >
              About
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `text-[#5E6670] px-2 py-1 text-sm md:px-4 md:py-2 font-medium hover:text-[#7900BA] hover:border-b-2 hover:border-[#7900BA] transition ${
                  isActive ? "" : ""
                }`
              }
              to=""
            >
              Contact
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `text-[#5E6670] px-2 py-1 text-sm md:px-4 md:py-2 font-medium hover:text-[#7900BA] hover:border-b-2 hover:border-[#7900BA] transition ${
                  isActive ? "" : ""
                }`
              }
              to=""
            >
             Pricing
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `text-[#5E6670] px-2 py-1 text-sm md:px-4 md:py-2 font-medium hover:text-[#7900BA] hover:border-b-2 hover:border-[#7900BA] transition ${
                  isActive ? "" : ""
                }`
              }
              to=""
            >
              Blog
            </NavLink>
          </div>
          <div className="flex gap-5 items-center mt-2 md:mt-0">
          <FiPhoneCall />
          <h1>+91 8956992803</h1> 
            <img src="image 1.png"/>
          <select className="bg-[#F1F2F4]">
            <option className="w-5 h-4 bg-white">English</option>
          </select>
          </div>
         
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
