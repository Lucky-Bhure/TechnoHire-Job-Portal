import React from "react";
import { IoSearch } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { LuLayers } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";

function Findemployer() {
  return (
    <div className="bg-[#F1F2F4] py-[24px] space-y-5">
      <div className="flex justify-between items-center mx-40">
        <h3 className="font-inter font-medium text-[18px]/[28px] text-[#18191C]">
          Find Employers
        </h3>
        <div className="flex items-center gap-2">
          <p className="font-inter font-normal text-[14px]/[20px] text-[#767F8C]">
            Home &nbsp; / &nbsp;
          </p>
          <p className="font-inter font-normal text-[14px]/[20px] text-[#18191C]">
            Find Employers
          </p>
        </div>
      </div>

      <div className="flex justify-between mx-40 px-5 py-2 bg-white rounded-lg border-[1px] border-[#E4E5E8] shadow-[#002C6D0A]">
        <div className="flex items-center gap-1 border-r-[1px] border-r-[9199A3] py-2">
          <IoSearch className="text-[#7900BA] w-[16px] h-[16px]" />
          <input
            type="text"
            className="border-none outline-none placeholder-[#9199A3] text-[16px]/[24px] block"
            placeholder="Job title, Keyword..."
          />
        </div>
        <div className="flex items-center gap-1 border-r-[1px] border-r-[9199A3] py-2">
          <SlLocationPin className="text-[#7900BA] w-[16px] h-[16px]" />
          <input
            type="text"
            className="border-none outline-none placeholder-[#9199A3] text-[16px]/[24px]"
            placeholder="Location"
          />
        </div>
        <div className="flex justify-between items-center gap-28">
          <div className="flex items-center gap-2">
            <LuLayers className="text-[#7900BA] w-[16px] h-[16px]" />
            <p className="text-[#9199A3]">Select Category</p>
          </div>
          <RiArrowDropDownLine size={35} color="#a7a9ad" />
        </div>
        <button className="px-8 py-3 rounded-[5px] bg-[#7900BA] font-inter font-semibold text-[16px]/[24px] text-white">Find Employer</button>
      </div>
    </div>
  );
}

export default Findemployer;
