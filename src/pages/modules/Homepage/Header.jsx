import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Select, Space } from "antd";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaFlag } from "react-icons/fa";
import MainHeader from "../Homepage/MainHeader";
// import Notification from "../../pages/modules/Notification/Notification";

const Header = () => {

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
       <MainHeader/>
        <div className="w-full h-auto bg-white px-4 py-5 sm:px-8 justify-center">
          <div className="flex flex-wrap justify-around items-center">
            {/* Logo Section */}
            <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0 justify-start">
              <div className="flex items-center">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAIAAAD9b0jDAAAB0UlEQVR4Ab3WA4ycURQF4Bu7cePUUaMGte0Gtc2otm3b1tq2bdsY/cbybNbW252c8cw3d857A6obgsNg0Brn+waGaE3QD/4MCQgbNMFJuEjcaaq+QjVXSBosmh8lvprA/9/P8wY+P5EfLGrMVf6tNj+nqnukQcS79n9rdn8gDxCVTZr3Ee4TaZ+pFqjraTMKdb9jMRQon9cPqNOoW9xfkhGgmBQvkOYlvBxhDn4lQ8SY6LfvaE36R96JRBeqRmxGC2gTDfycxDXOixLg4mF93adFjrw/iX5Ui8DNtBcwoOc2S2MDOPW5wvdv80dMNEVSNQI3+WHDKjc20Djy1SnKyEdl/f5ExZIEMX4vBw4zNjaAkbGTpjwwk10F/SrqN4pJ0R0abGkAYy6/xZFzOTJAFGLSUq6lAfT7s4Ajr/IWFOk3mkgiGkCw+m0Wt+ZGogFoY/qNJpAl71bXi1up6LsiDQNBsXt6eqzFmHr+VL/RHjj+42Np3VRh8wImaI1o8044OEM9slQ5tganDFDu7lbtzGJwCDNUebtbv76qMY0uG1S7txppdDE1A1T9sUd/sqrRVc/PsLw/wwzVH8zGyGpBKm5hgyJKlj/L331ww/xnYnjRejF2bTVE4PAdAAAAAElFTkSuQmCC" alt="Logo" className="w-10 h-10 object-contain" />
                <div className="pl-4">
                  <p className="font-bold text-xl sm:text-xl">TechnoHire</p>
                  <p className="text-sm text-white bg-blue-600 px-1 py-1 rounded">
                    <b>Where Talent Meets Opportunity</b>
                  </p>
                </div>
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
    
<button className="border text-[#7900BA] px-4 py-2 ">Sign in </button>
 <button className="bg-[#7900BA] text-white px-2 py-2">Post A Jobs</button>
</div>
         
          </div>
        </div>
       

   
      </div>


    </>
  );
};

export default Header;
