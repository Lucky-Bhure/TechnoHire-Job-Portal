import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Select, Space } from "antd";
import technohire_logo from '../../../../../assets/technohire_logo.png'

// import Notification from "../../pages/modules/Notification/Notification";

const MainHeader = () => {

  const navigate = useNavigate();
  const handelnotification =()=>{
    navigate("/notification");
  }

  const options = [
    {
      value: "India",
      label: (
        <div className="flex items-center gap-2">
          <img src="image 2.png" className="text-red-600" /> India
        </div>
      ),
    },
    {
      value: "Germany",
      label: (
        <div className="flex items-center gap-2">
          <img src="img3.png" className="w-7 h-4"/>Germany
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="w-full">
    
        <div className="w-full h-auto bg-white px-4 py-5 sm:px-8 justify-center">
          <div className="flex flex-wrap justify-around items-center">
            {/* Logo Section */}
            <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0 justify-start">
              <div className="flex items-center">
              
              <img src={technohire_logo} alt="logo.png" className="w-[185px] h-[80px]"/>
              </div>
            </div>

            {/* Search Section */}
            <div className=" w-[650px] my-2 justify-center">
              <Space.Compact className="w-[650px] py-2 rounded-none h-[50px] ">
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
<div className="flex gap-5 mt-3">
    

 <button className="bg-[#7900BA] text-white px-2 py-2">Post A Jobs</button>
</div>
         
          </div>
        </div>
       

   
      </div>


    </>
  );
};

export default MainHeader;
