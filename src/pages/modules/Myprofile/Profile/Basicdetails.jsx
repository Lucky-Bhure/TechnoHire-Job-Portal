import React from "react";
import { MdArrowDropDown } from "react-icons/md";

function Basicdetails() {
  return (
    <div className="pb-5">
      <h1 className="font-poppins font-medium text-[30px]/[64px] mt-5">
        Basic Details
      </h1>
      <p className="font-inter font-normal text-[20px]/[20px] text-[#00000099]">
        Let&#39;s Start with the Basics
      </p>
      <div className="text-[#8391A1] mt-10 space-y-10 font-urbanist font-medium text-[15px]/[18.75px]">
        <div className="flex items-center gap-20 w-[100%]">
          <div className="w-[50%] border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
            <input
              type="text"
              value="Ninad Sathe"
              className="bg-[#F7F8F9] outline-none border-none"
            />
          </div>
          <div className="w-[50%] border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
            <input
              type="text"
              value="Nagpur, Maharashtra, India "
              className="bg-[#F7F8F9] outline-none border-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-20 w-[100%]">
          <div className="w-[50%] border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
            <input
              type="text"
              value="06/11/2000"
              className="bg-[#F7F8F9] outline-none border-none"
            />
          </div>
          <div className="w-[50%] border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
            <select name="" id="" className="w-[100%] bg-[#F7F8F9] outline-none border-none">
                <option value="Male" selected>Male</option>
                <option value="Female">Female</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-20 w-[100%]">
          <div className="w-[50%] border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
            <input
              type="text"
              value="ninad@gmail.com"
              className="bg-[#F7F8F9] outline-none border-none"
            />
          </div>
          <div className="w-[50%] border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
            <input
              type="text"
              value="+91 12345 67890 "
              className="bg-[#F7F8F9] outline-none border-none"
            />
          </div>
        </div>
        <div className="w-[100%] h-[200px] border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
          <textarea
            name=""
            id=""
            placeholder="Tell us little about yourself ..."
            className="w-[100%] h-[170px]  rounded-lg bg-[#F7F8F9] outline-none resize-none placeholder:text-[#8391A1]"
          ></textarea>
        </div>
      </div>

      <div className="bg-[#7900BA] w-[500px] px-[30px] py-[17px] m-auto flex justify-center items-center rounded-[10px] font-poppins mt-10">
        <button className="text-white font-medium">Update</button>
      </div>
    </div>
  );
}

export default Basicdetails;
