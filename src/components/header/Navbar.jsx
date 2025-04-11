import React from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { PiBellRingingBold } from "react-icons/pi";
import { TbMessage2 } from "react-icons/tb";
import logo from '../../assets/technohire_logo.png'

const Navbar = () => {
  return (
    <nav className="bg-white flex items-center justify-between px-5 py-1">
      {/* Left: Logo and Branding */}
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Logo"
          className="w-15 h-20"
        />
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-6 text-gray-700 text-[22px]">
        {/* Chat Icon */}
        <TbMessage2 size={25} />

        {/* Bell Icon with red dot */}
        <div className="relative">
          <PiBellRingingBold size={25} />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </div>

        {/* User Icon */}
        <HiOutlineUserCircle size={25} />
      </div>
    </nav>
  );
};

export default Navbar;
