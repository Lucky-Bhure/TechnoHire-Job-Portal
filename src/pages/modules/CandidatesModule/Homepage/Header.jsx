import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MainHeader from "../Homepage/MainHeader";
import { RiSearchLine } from "react-icons/ri";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Icon as IconifyIcon } from "@iconify/react";

// import Notification from "../../pages/modules/Notification/Notification";

const Header = () => {
  const navigate = useNavigate();
  const handelnotification = () => {
    navigate("/notification");
  };

  return (
    <>
      <div className="w-full flex flex-col">
        <MainHeader />
        <div className="w-full h-fit bg-white px-4 py-6 sm:px-8 flex justify-around">
          <div className="w-full flex flex-wrap justify-around items-center">
            {/* Logo Section */}
            <div
              className="flex items-center w-full sm:w-auto mb-4 sm:mb-0 justify-start cursor-default"
              onClick={() => navigate("/")}
            >
              <div className="w-fit h-fit gap-2 flex items-center">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAIAAAD9b0jDAAAB0UlEQVR4Ab3WA4ycURQF4Bu7cePUUaMGte0Gtc2otm3b1tq2bdsY/cbybNbW252c8cw3d857A6obgsNg0Brn+waGaE3QD/4MCQgbNMFJuEjcaaq+QjVXSBosmh8lvprA/9/P8wY+P5EfLGrMVf6tNj+nqnukQcS79n9rdn8gDxCVTZr3Ee4TaZ+pFqjraTMKdb9jMRQon9cPqNOoW9xfkhGgmBQvkOYlvBxhDn4lQ8SY6LfvaE24R96JRBeqRmxGC2gTDfycxDXOixLg4mF93adFjrw/iX5Ui8DNtBcwoOc2S2MDOPW5wvdv80dMNEVSNQI3+WHDKjc20Djy1SnKyEdl/f5ExZIEMX4vBw4zNjaAkbGTpjwwk10F/SrqN4pJ0R0abGkAYy6/xZFzOTJAFGLSUq6lAfT7s4Ajr/IWFOk3mkgiGkCw+m0Wt+ZGogFoY/qNJpAl71bXi1up6LsiDQNBsXt6eqzFmHr+VL/RHjj+42Np3VRh8wImaI1o8044OEM9slQ5tganDFDu7lbtzGJwCDNUebtbv76qMY0uG1S7txppdDE1A1T9sUd/sqrRVc/PsLw/wwzVH8zGyGpBKm5hgyJKlj/L331ww/xnYnjRejF2bTVE4PAdAAAAAElFTkSuQmCC"
                  alt="Logo"
                  className="w-14 h-14 object-contain"
                />
                <div className="w-fit">
                  <p className="font-[500] text-2xl sm:text-2xl">TechnoHire</p>
                  <p className="text-[8px] text-white bg-[#8b008d] px-1 py-1">
                    Where Talent Meets Opportunity{" "}
                  </p>
                </div>
              </div>
            </div>

            {/* Search Section */}
            <div className="w-fit justify-center border-2 border-[#E4E5E8] rounded-md py-2 flex">
              <Select />

              <div className="w-fit flex justify-start items-center gap-3 px-2 border-l-2">
                <RiSearchLine size={24} className="text-[#6712B9] font-[500]" />
                <input
                  className="font-lg outline-none w-[240px]"
                  placeholder="Job title,keyword,company"
                />
              </div>
            </div>

            {/* SignUp and Post a Jobs Button */}
            <div className="w-fit flex gap-2">
              <NavLink to="/signup">
                <button className="border-2 border-[#CEE0F5] text-[#6712B9] px-4 py-2 rounded text-md ">
                  Sign in
                </button>
              </NavLink>
              <button className="bg-[#6712B9] text-white px-4 py-2 rounded text-md">
                Post A Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

const Select = () => {
  const [input, setInput] = useState({
    value: "India",
    flag: <IconifyIcon icon="twemoji:flag-india" width="24" height="24" />,
  });

  const [toggle, setToggle] = useState(false);

  const options = [
    {
      value: "India",
      flag: <IconifyIcon icon="twemoji:flag-india" width="24" height="24" className="shadow" />,
    },
    {
      value: "Germany",
      flag: <IconifyIcon icon="twemoji:flag-germany" width="24" height="24" className="shadow"/>,
    },
    {
      value: "Japan",
      flag: <IconifyIcon icon="twemoji:flag-japan" width="24" height="24" className="shadow" />,
    },
    {
      value: "Canada",
      flag: <IconifyIcon icon="twemoji:flag-canada" width="24" height="24" className="shadow" />,
    },
  ];

  const handleCountry = ({ value, flag }) => {
    setInput({
      value: value,
      flag: flag,
    });
  };

  return (
    <div className="w-[140px] border-none mx-2 relative">
      <div className="w-full flex justify-between items-center">
        <div className="flex w-full justify-start items-center gap-2">
        {input.flag}
        <p>{input.value}</p>
        </div>
        {
          toggle && 
          <IoMdArrowDropup size={24} onClick={() => setToggle(prev => !prev)}/>
        }
        {
          !toggle && 
          <IoMdArrowDropdown size={24} onClick={() => setToggle(prev => !prev)}/>
        }
      </div>

      {
        toggle &&
        <ul className="absolute mt-2 gap-2 flex flex-col bg-white shadow-md px-4 py-2 h-[130px] overflow-y-auto no-scrollbar" style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}>
          {options.map((country, index) => (
            <li
              key={index}
              className="flex w-full justify-start items-center gap-2"
              onClick={() => handleCountry(country)}
            >
              {country.flag}
              <p>{country.value}</p>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};
