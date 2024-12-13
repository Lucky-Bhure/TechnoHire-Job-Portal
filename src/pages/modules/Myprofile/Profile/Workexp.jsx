import React from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { MdDateRange } from "react-icons/md";

function Workexp() {
  return (
    <div className="pb-5">
      <h1 className="font-poppins font-medium text-[22px]/[64px] mt-5">
        Work Experience
      </h1>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4 accent-[#7900BA] " />
          <p className="font-inter font-normal text-[16px]/[20px] text-[#666666]">
            I am a Fresher
          </p>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineAddBox size={18} color="#7900BA" />
          <p className="font-lato font-medium text-[12px]/[16px] text-[#666666] tracking-[0.5px]">
            Add Another Job
          </p>
        </div>
      </div>
      {/*  */}

      <div className="text-[#8391A1] mt-8 space-y-10 font-urbanist font-medium text-[15px]/[18.75px]">
        <div className="flex items-center gap-20 w-[100%]">
          <div className="w-[50%] border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
            <input
              type="text"
              value="Job Title"
              className="bg-[#F7F8F9] outline-none border-none"
            />
          </div>
          <div className="w-[50%] border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
            <input
              type="text"
              value="Company Name"
              className="bg-[#F7F8F9] outline-none border-none"
            />
          </div>
        </div>
        <div className="flex space-y-3 flex-col w-[100%]">
          <div className="w-[100%] flex gap-20">
            <div className="w-[50%] flex justify-between items-center border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
              <p>Start date</p>
              <MdDateRange size={20} />
            </div>
            <div className="w-[50%] flex justify-between items-center border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
              <p>End date</p>
              <MdDateRange size={20} />
            </div>
          </div>
          <div className="flex items-center gap-2 w-[100%]">
            <input type="checkbox" className="w-4 h-4 accent-[#7900BA] " />
            <p className="font-inter font-normal text-[16px]/[20px] text-[#666666]">
              Currently Working Here
            </p>
          </div>
        </div>
        <div className="w-[100%] h-[200px] border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
          <textarea
            name=""
            id=""
            placeholder="Tell us something about your Roles and Responsibilities"
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

export default Workexp;
