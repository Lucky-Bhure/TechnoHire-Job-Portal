import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

function Skills() {
  return (
    <div className="pb-5">
      <h1 className="font-poppins font-medium text-[22px]/[64px] mt-5">
        Skills and Perferences
      </h1>

      <p className="font-inter font-normal text-[20px]/[20px] text-[#00000099]">
        Highlight Your Skills and Preferences to stand out
      </p>

      {/*  */}

      <div className="text-[#8391A1] mt-8 space-y-10 font-urbanist font-medium text-[15px]/[18.75px]">
        <div className="flex items-center gap-20 w-[100%]">
          {/*  */}
          <div className="w-[50%] flex justify-between flex-col space-y-2">
            <p className="text-[17px]/[21.25px] text-[#666666]">Job Type</p>
            {/*  */}
            <div className="flex items-center text-[#5B5B5B]">
              <div className="flex items-center gap-1 w-[100%]">
                <input
                  type="checkbox"
                  checked
                  className="w-4 h-4 accent-[#7900BA] "
                />
                <p className="font-urbanist font-normal text-[15px]/[18.75px] text-[#666666]">
                  Full Time
                </p>
              </div>
              <div className="flex items-center gap-1 w-[100%]">
                <input type="checkbox" className="w-4 h-4 accent-[#7900BA] " />
                <p className="font-urbanist font-normal text-[15px]/[18.75px] text-[#666666]">
                  Part Time
                </p>
              </div>
              <div className="flex items-center gap-1 w-[100%]">
                <input type="checkbox" className="w-4 h-4 accent-[#7900BA] " />
                <p className="font-urbanist font-normal text-[15px]/[18.75px] text-[#666666]">
                  Freelancing
                </p>
              </div>
              <div className="flex items-center gap-1 w-[100%]">
                <input type="checkbox" className="w-4 h-4 accent-[#7900BA] " />
                <p className="font-urbanist font-normal text-[15px]/[18.75px] text-[#666666]">
                  Internship
                </p>
              </div>
            </div>
            {/*  */}
          </div>
          {/*  */}
          <div className="w-[50%] flex items-center justify-between gap-28 border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
            <p className="font-urbanist font-medium text-[15px]/[18.75px] text-[#8391A1]">Skills</p>
            <div className="flex justify-between w-[70%] text-white gap-5">
              <p className="bg-[#0000008F] w-[60px] text-center py-[2px] rounded-lg">Python</p>
              <p className="bg-[#0000008F] w-[60px] py-[2px] text-center rounded-lg">DSA</p>
              <p className="bg-[#0000008F] w-[60px] text-center py-[2px] rounded-lg">PHP</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-20 w-[100%]">
          <div className="w-[50%] border-[1px] flex justify-between items-center border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
            <p>Start date</p>
            <MdOutlineArrowDropDown size={20} />
          </div>
          <div className="w-[50%] border-[1px] flex justify-between items-center border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
            <p>Start date</p>
            <MdOutlineArrowDropDown size={20} />
          </div>
        </div>
        <div className="flex items-center gap-20 w-[100%]">
          <div className="w-[50%] flex justify-between items-center border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
            <p>Start date</p>
            <MdOutlineArrowDropDown size={20} />
          </div>
          <div className="w-[50%] flex justify-between items-center border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
            <p>Start date</p>
            <MdOutlineArrowDropDown size={20} />
          </div>
        </div>
        <div className="w-[100%] h-[200px] border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
          <textarea
            name=""
            id=""
            placeholder="Tell us something about that you did/learned through the course"
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

export default Skills;
