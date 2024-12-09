import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

function Filterlocation() {
  //   const [range, setRange] = useState(0);
  //   console.log(range, "khbdvdkcjb", max);
  return (
    <div className="my-5 w-[330px] h-[370px] border-[#EDEFF5] rounded-xl border-[1px] ">
      {/*  */}
      <div className="space-y-4 border-b-[1px] border-b-[#EDEFF5] p-5">
        <div className="flex justify-between items-center text-[#191F33]">
          <p className="font-inter font-medium text-[18px]/[28px] ">
            Location Radius:{" "}
            <span className="font-normal text-[#7900BA]">32 miles</span>
          </p>
          <IoIosArrowUp size={20} />
        </div>
        <div>
          <input type="range" className="w-72" />
        </div>
      </div>
      {/*  */}

      <div className="p-5">
        <div className="flex justify-between items-center text-[#191F33]">
          <h1 className="font-inter font-medium text-[20px]/[32px]">
            Organization Type
          </h1>
          <IoIosArrowUp size={20} />
        </div>
        <div className="flex flex-col mt-5">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name=""
              id=""
              className="w-4 h-4 border-[#DADDE5]"
            />
            <h1 className="font-inter font-normal text-[#495166] text-[14px]/[22px]">
              Goverment
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name=""
              id=""
              className="w-4 h-4 border-[#DADDE5]"
            />
            <h1 className="font-inter font-normal text-[#495166] text-[14px]/[22px]">
              Semi Goverment
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name=""
              id=""
              className="w-4 h-4 border-[#DADDE5]"
            />
            <h1 className="font-inter font-normal text-[#495166] text-[14px]/[22px]">
              NGO
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name=""
              id=""
              className="w-4 h-4 border-[#DADDE5]"
            />
            <h1 className="font-inter font-normal text-[#495166] text-[14px]/[22px]">
              Private Company
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name=""
              id=""
              className="w-4 h-4 border-[#DADDE5]"
            />
            <h1 className="font-inter font-normal text-[#495166] text-[14px]/[22px]">
              International Agencies
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name=""
              id=""
              className="w-4 h-4 border-[#DADDE5]"
            />
            <h1 className="font-inter font-normal text-[#495166] text-[14px]/[22px]">
              Others
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filterlocation;
