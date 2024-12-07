import React from "react";
import { Input, Select, Space } from "antd";
import { MdOutlineMessage } from "react-icons/md";

import { IoIosNotificationsOutline } from "react-icons/io";
const Header = () => {
  const options = [
    {
      value: "India",
      label: "India",
    },
    {
      value: "Germany",
      label: "Germany",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="w-full  h-[100px]">
          <div className="flex">
            <div className=" w-[250px] my-2 mx-5 h-[80px]">
              <div className="flex">
                <div>
                  <img src="" alt="img" />
                </div>
                <div className="ps-5 py-2">
                  <p className="font-bold text-2xl">TechnoHire</p>
                  <p className="text-[7px] text-white bg-blue-600 px-2 py-1 ">
                    <b> Where Talent Meet Opportunity</b>
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-[650px] my-2">
              <Space.Compact className="w-[750px] py-4 rounded-none h-[50px] ">
                <Select
                  className="h-[50px] w-[250px] font-bold rounded-none "
                  options={options}
                  defaultValue="india"
                />
                <Input
                  className="h-[50px]  rounded-none "
                  placeholder="Job title,keyword,company"
                />
              </Space.Compact>
            </div>
            <div className=" ms-72  w-[300px] h-[70px] ">
              <div className="flex py-6 gap-7 mx-12 ">
                <MdOutlineMessage className="w-[30px]  h-[30px]" />

                <IoIosNotificationsOutline className="w-[30px]  h-[30px]" />

                <img
                  className="cursor-pointer w-[30px] h-[30px] object-cover rounded-full hover:border-2 hover:border-black"
                  src="https://plus.unsplash.com/premium_photo-1690086519096-0594592709d3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                {/* User Name */}
                <p className="relative top-8 right-[51px] text-[12px]">user</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-2 w-full border-grey-400 ..."></div>
      </div>
    </>
  );
};

export default Header;