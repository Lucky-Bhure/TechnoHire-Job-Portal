import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Select, Space } from "antd";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaFlag } from "react-icons/fa";
import MainHeader from "./MainHeader";
import Notification from "../../pages/modules/Notification/Notification";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const options = [
    {
      value: "India",
      label: (
        <div className="flex items-center gap-2">
          <FaFlag className="text-red-600" /> India
        </div>
      ),
    },
    {
      value: "Germany",
      label: (
        <div className="flex items-center gap-2">
          <FaFlag className="text-black" /> Germany
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="w-full">
        <MainHeader />
        <div className="w-full h-auto bg-white px-4 sm:px-8">
          <div className="flex flex-wrap justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0 justify-start">
              <div className="flex items-center">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAIAAAD9b0jDAAAB0UlEQVR4Ab3WA4ycURQF4Bu7cePUUaMGte0Gtc2otm3b1tq2bdsY/cbybNbW252c8cw3d857A6obgsNg0Brn+waGaE3QD/4MCQgbNMFJuEjcaaq+QjVXSBosmh8lvprA/9/P8wY+P5EfLGrMVf6tNj+nqnukQcS79n9rdn8gDxCVTZr3Ee4TaZ+pFqjraTMKdb9jMRQon9cPqNOoW9xfkhGgmBQvkOYlvBxhDn4lQ8SY6LfvaE36R96JRBeqRmxGC2gTDfycxDXOixLg4mF93adFjrw/iX5Ui8DNtBcwoOc2S2MDOPW5wvdv80dMNEVSNQI3+WHDKjc20Djy1SnKyEdl/f5ExZIEMX4vBw4zNjaAkbGTpjwwk10F/SrqN4pJ0R0abGkAYy6/xZFzOTJAFGLSUq6lAfT7s4Ajr/IWFOk3mkgiGkCw+m0Wt+ZGogFoY/qNJpAl71bXi1up6LsiDQNBsXt6eqzFmHr+VL/RHjj+42Np3VRh8wImaI1o8044OEM9slQ5tganDFDu7lbtzGJwCDNUebtbv76qMY0uG1S7txppdDE1A1T9sUd/sqrRVc/PsLw/wwzVH8zGyGpBKm5hgyJKlj/L331ww/xnYnjRejF2bTVE4PAdAAAAAElFTkSuQmCC" alt="Logo" className="w-12 h-12 object-contain" />
                <div className="pl-4">
                  <p className="font-bold text-xl sm:text-2xl">TechnoHire</p>
                  <p className="text-xs text-white bg-blue-600 px-2 py-1 rounded">
                    <b>Where Talent Meets Opportunity</b>
                  </p>
                </div>
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

            {/* User Section */}
            <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-end">
              <MdOutlineMessage className="w-6 h-6 text-gray-600 cursor-pointer" />
              <div>
              <button onClick={()=>setIsOpen(true)} > 
                <Link to ="/notification">
              <IoIosNotificationsOutline  className='w-6 h-6 text-gray-600 cursor-pointer'/></Link>

              </button>
              </div>
              <div className="relative">
                <img
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
