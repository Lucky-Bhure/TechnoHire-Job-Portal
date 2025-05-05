import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Select, Space } from "antd";
import logo2 from '../../assets/logo2.png'
import MainHeader from "./MainHeader";
import { TbMessage2 } from "react-icons/tb";
import { PiBellRingingBold } from "react-icons/pi";
// import Notification from "../../pages/modules/Notification/Notification";

const Header = () => {

  const navigate = useNavigate();
  const handleMessages = () => {
    navigate("/Inboxes");
  }
  const handelNotification =()=>{
    navigate("/notification");
  }
  const handleUser = () => {
    navigate('/my-profile')
  }

  const options = [
    {
      value: "India",
      label: (
        <div className="flex items-center gap-2">
          <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className="w-6 h-4 object-cover rounded-sm" />
          India
        </div>
      ),
    }
    ,
    {
      value: "Germany",
      label: (
        <div className="flex items-center gap-2">
          <img
            src="https://flagcdn.com/w40/de.png"
            alt="Germany flag"
            className="w-6 h-4 object-cover rounded-sm"
          />
          Germany
        </div>
      ),
    }
    ,
  ];

  return (
    <>
      <div className="w-full ">
        <MainHeader />
        <div className="w-full h-auto bg-white px-4 sm:px-8">
          <div className="flex flex-wrap justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0 gap-10">
              <div className="flex items-center ">
                <img src={logo2} alt="Logo" className="w-[55px] h-[65px]  object-contain mt-2" />
                <div className="w-fit pr-2 mt-4">
                  <p className=" font-[500] text-[25px]">TechnoHire</p>
                  <p className="text-[8px] font-bold text-white bg-[#8b008d] px-2 py-1">
                    Where Talent Meets Opportunity{" "}
                  </p>
                </div>
              </div>
             {/* Search Section */}
              <div className=" w-[650px] my-2 justify-center">
              <Space.Compact className="w-[750px] py-4 rounded-none h-[50px] ">
                <Select
                  options={options}
                  defaultValue={options[0]?.value}
                  style={{ height: "50px" }}
                  className=" w-[300px]"
                />
                <Input
                  className="h-[50px]  rounded-none "
                  placeholder="Job title,keyword,company"
                />
              </Space.Compact>
            </div>
            </div>

           
            

            {/* User Section */}
            <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-end">
             <TbMessage2 onClick={handleMessages} className="w-6 h-6 text-gray-600 cursor-pointer"/>  
              <div className="relative"> 
                <PiBellRingingBold onClick={handelNotification} className='w-6 h-6 text-gray-600 cursor-pointer'/>
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
              </div>
              <div className="relative">
                <img onClick={handleUser}
                  className="w-8 h-8 object-cover rounded-full cursor-pointer hover:border-2 hover:border-black"
                  src="https://plus.unsplash.com/premium_photo-1690086519096-0594592709d3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="User Avatar"
                />
                <p className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs">User</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-300 mt-4"></div>


      </div>


    </>
  );
};

export default Header;