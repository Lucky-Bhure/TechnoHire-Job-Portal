import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { GrLinkNext } from "react-icons/gr";
import { LuSquarePen } from "react-icons/lu";

function General() {
  return (
    <div className="w-full">
      <h1 className="font-poppins font-medium text-[22px]/[64px] mt-6 mb-3">
        App preferences
      </h1>

      <div className="flex justify-between flex-wrap w-[100%] gap-6">
        <div className="border-[#D3D3D39C] border-[1px] flex justify-between items-center px-[30px] py-[17px] bg-[#F7F8F9] w-[45%] rounded-lg">
          <p className="text-[#8391A1] font-urbanist font-medium text-[15px]/[18.75px]">
            Light Mode
          </p>
          <IoMdArrowDropdown className="text-[#00000078]" />
        </div>
        <div className="border-[#D3D3D39C] border-[1px] flex justify-between items-center px-[30px] py-[17px] bg-[#F7F8F9] w-[45%] rounded-lg">
          <p className="text-[#8391A1] font-urbanist font-medium text-[15px]/[18.75px]">
            Public
          </p>
          <IoMdArrowDropdown className="text-[#00000078]" />
        </div>
        <div className="border-[#D3D3D39C] border-[1px] flex justify-between items-center px-[30px] py-[17px] bg-[#F7F8F9] w-[45%] rounded-lg">
          <p className="text-[#8391A1] font-urbanist font-medium text-[15px]/[18.75px]">
            Search history
          </p>
          <GrLinkNext className="text-[#00000078]" />
        </div>
      </div>

      <h1 className="font-poppins font-medium text-[22px]/[64px] mt-6 mb-5">
        Notifications
      </h1>
      <div className="flex justify-between items-center flex-wrap gap-5 w-[70%]">
        <div class="flex items-center gap-3">
          <input
            // id="default-checkbox"
            type="checkbox"
            value=""
            className="w-5 h-5 border-[#7900BAAB] border-[1px] rounded-[3px]"
          />
          <label
            // for="default-checkbox"
            className="font-inter font-normal text-[17px]/[20px] text-[#464D61]"
          >
            All Notifications
          </label>
        </div>
        <div class="flex items-center gap-2">
          <input
            // id="default-checkbox"
            type="checkbox"
            value=""
            className="w-5 h-5 border-[#7900BAAB] border-[1px] rounded-[3px]"
          />
          <label
            // for="default-checkbox"
            className="font-inter font-normal text-[17px]/[20px] text-[#464D61]"
          >
            Job Updates
          </label>
        </div>
        <div class="flex items-center gap-2">
          <input
            // id="default-checkbox"
            type="checkbox"
            value=""
            className="w-5 h-5 border-[#7900BAAB] border-[1px] rounded-[3px]"
          />
          <label
            // for="default-checkbox"
            className="font-inter font-normal text-[17px]/[20px] text-[#464D61]"
          >
            Personal Messages
          </label>
        </div>
        <div class="flex items-center gap-2">
          <input
            // id="default-checkbox"
            type="checkbox"
            value=""
            className="w-5 h-5 border-[#7900BAAB] border-[1px] rounded-[3px]"
          />
          <label
            // for="default-checkbox"
            className="font-inter font-normal text-[17px]/[20px] text-[#464D61]"
          >
            Job Recommendations
          </label>
        </div>
        <div class="flex items-center gap-2">
          <input
            // id="default-checkbox"
            type="checkbox"
            value=""
            className="w-5 h-5 border-[#7900BAAB] border-[1px] rounded-[3px]"
          />
          <label
            // for="default-checkbox"
            className="font-inter font-normal text-[17px]/[20px] text-[#464D61]"
          >
            Notify me when hiring person shortlisted me
          </label>
        </div>
        <div class="flex items-center gap-2">
          <input
            // id="default-checkbox"
            type="checkbox"
            value=""
            className="w-5 h-5 border-[#7900BAAB] border-[1px] rounded-[3px]"
          />
          <label
            // for="default-checkbox"
            className="font-inter font-normal text-[17px]/[20px] text-[#464D61]"
          >
            Notify me when hiring person rejected me
          </label>
        </div>
      </div>

      <h1 className="font-poppins font-medium text-[22px]/[64px] mt-6 mb-3">
        Sign in & Security
      </h1>

      <div className="flex justify-between flex-wrap w-[100%] gap-8">
        <div className="flex justify-between items-center border-[1px] w-[45%] rounded-lg bg-[#F7F8F9] border-[#D3D3D39C] px-[30px] py-[17px]">
          <p className="font-urbanist font-medium text-[15px]/[18.75px] text-[#666666]">
            Email address
          </p>
          <input
            type="password"
            placeholder="****19@gmail.com"
            className="bg-[#F7F8F9] border-none outline-none"
          />
          <LuSquarePen className="w-[10.73px] h-[10.73px] text-[#666666] border-[1px]" />
        </div>
        <div className="flex justify-between items-center border-[1px] w-[45%] rounded-lg bg-[#F7F8F9] border-[#D3D3D39C] px-[30px] py-[17px]">
          <p className="font-urbanist font-medium text-[15px]/[18.75px] text-[#666666]">
            Phone Number
          </p>
          <input
            type="number"
            placeholder="+91 12345 67890"
            className="bg-[#F7F8F9] border-none outline-none"
          />
          <LuSquarePen className="w-[10.73px] h-[10.73px] text-[#666666] border-[1px]" />
        </div>
      </div>

      <h1 className="font-poppins font-medium text-[22px]/[64px] mt-6 mb-3">
        Change Password
      </h1>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center gap-10">
          <div className="flex justify-between items-center border-[1px] w-[45%] rounded-lg bg-[#F7F8F9] border-[#D3D3D39C] px-[30px] py-[17px]">
            <input
              type="password"
              placeholder="Old Password"
              className="border-none outline-none bg-[#F7F8F9] placeholder-[#8391A1] text-[15px]/[18.75px] font-medium font-urbanist"
            />
          </div>
          <div className="flex justify-between items-center border-[1px] w-[45%] rounded-lg bg-[#F7F8F9] border-[#D3D3D39C] px-[30px] py-[17px]">
            <input
              type="password"
              placeholder="New Password"
              className="border-none outline-none bg-[#F7F8F9] placeholder-[#8391A1] text-[15px]/[18.75px] font-medium font-urbanist"
            />
          </div>
          <div className="flex justify-between items-center border-[1px] w-[45%] rounded-lg bg-[#F7F8F9] border-[#D3D3D39C] px-[30px] py-[17px]">
            <input
              type="password"
              placeholder="Confirm Password"
              className="border-none outline-none bg-[#F7F8F9] placeholder-[#8391A1] text-[15px]/[18.75px] font-medium font-urbanist"
            />
          </div>
          <div className="bg-[#7900BA] px-[30px] py-[17px] rounded-[10px] font-poppins">
            <button className="text-white font-medium">Change</button>
          </div>
        </div>
        <div className="text-[#7900BA] font-inter font-normal text-[16px]/[19.36px] mb-32 ">
          <p>Forget Password?</p>
        </div>
      </div>
    </div>
  );
}

export default General;
