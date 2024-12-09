import React from "react";
import { PiFaders } from "react-icons/pi";
import { PiGridFourFill } from "react-icons/pi";
import { IoReorderTwoSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import Filterlocation from "./FilterEmplyee/Filterlocation";
import Companycards from "./FilterEmplyee/Companycards";

function FilterEmployer() {
  return (
    <div className="mx-40 my-5">
      {/*  */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 bg-[#7900BA] px-6 py-3 text-white rounded-[3px]">
          <PiFaders size={24} />
          <p className="font-inter font-semibold text-[16px]/[24px]">Filter</p>
        </div>
        <div className="flex gap-3">
          <div className="flex justify-between items-center rounded-md border-[1px] border-[#E4E5E8] w-[180px] h-[48px] px-3">
            <p className="font-inter font-normal text-[14px]/[20px] text-[#474C54]">
              Latest
            </p>
            <RiArrowDropDownLine size={24} className="text-[#9199A3]" />
          </div>
          <div className="flex justify-between items-center rounded-md border-[1px] border-[#E4E5E8] w-[180px] h-[48px] px-3">
            <p className="font-inter font-normal text-[14px]/[20px] text-[#474C54]">
              12 per page
            </p>
            <RiArrowDropDownLine size={24} className="text-[#9199A3]" />
          </div>
          <div className="flex items-center rounded-md border-[1px] border-[#E4E5E8] w-[80px] h-[48px] px-2 gap-2">
            <PiGridFourFill className="bg-[#DCBDED] text-[#191F33] w-[30px] h-[25px]" />
            <IoReorderTwoSharp className="text-[#939AAD]" size={35} />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex gap-5">
        <Filterlocation />
        <Companycards />
      </div>
    </div>
  );
}

export default FilterEmployer;
