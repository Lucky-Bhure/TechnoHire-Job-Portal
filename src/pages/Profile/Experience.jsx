import React from "react";
import { GoPencil } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
function Experience() {
  return (
    <div>
      <div className="w-[100%] space-y-3 mx-10">
        <div className="flex justify-between items-center">
          <p className="font-poppins font-medium text-[16px]/[24px]">
            Experience
          </p>
          <div className="flex gap-2 items-center text-[#3E1654]">
            <FiPlus />
            <GoPencil />
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="w-[55px] h-[51px]" src="./ey_logo.png" alt="" />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="flex items-center font-medium text-[#000000] truncate dark:text-white font-poppins font-[16px]/[19.36px]">
              Senior UI/UX Designer <span className="w-[3px] h-[3px] mx-1 rounded-[50%] inline-block bg-[#00000078]"></span> Full-time
            </p>
            <p className="font-medium flex items-center font-inter text-[14px]/[16.94px] text-[#000000A8]">
              Jul 2024 - Present <span className="w-[3px] h-[3px] mx-1 rounded-[50%] inline-block bg-[#00000078]"></span> 5 mos
            </p>
            <p className="font-medium flex items-center font-inter text-[12px]/[14.52px] text-[#000000A8]">
              Bangalore, Karnataka, India <span className="w-[3px] h-[3px] mx-1 rounded-[50%] inline-block bg-[#00000078]"></span> On-site
            </p>
          </div>
        </div>
        <hr className="text-[#E0E0E0]" />
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="w-[55px] h-[51px]" src="./infosys.jpg" alt="" />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="font-medium flex items-center text-[#000000] truncate dark:text-white font-poppins font-[16px]/[19.36px]">
              Junior UI/UX Designer <span className="w-[3px] h-[3px] mx-1 rounded-[50%] inline-block bg-[#00000078]"></span> Full-time
            </p>
            <p className="font-medium flex items-center font-inter text-[14px]/[16.94px] text-[#000000A8]">
              Jan 2023 - Jun 2024 <span className="w-[3px] h-[3px] mx-1 rounded-[50%] inline-block bg-[#00000078]"></span> 1yr 10 mos
            </p>
            <p className="font-medium flex items-center font-inter text-[12px]/[14.52px] text-[#000000A8]">
              Pune, Maharashtra, India <span className="w-[3px] h-[3px] mx-1 rounded-[50%] inline-block bg-[#00000078]"></span> On-site
            </p>
          </div>
        </div>
        <hr className="text-[#E0E0E0]" />
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="w-[55px] h-[51px]" src="./perficient.jpg" alt="" />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="font-medium flex items-center text-[#000000] truncate dark:text-white font-poppins font-[16px]/[19.36px]">
              UI/UX Designer Trainee <span className="w-[3px] h-[3px] mx-1 rounded-[50%] inline-block bg-[#00000078]"></span> Full-time
            </p>
            <p className="font-medium flex items-center font-inter text-[14px]/[16.94px] text-[#000000A8]">
              Oct 2022 - Dec 2022 <span className="w-[3px] h-[3px] mx-1 rounded-[50%] inline-block bg-[#00000078]"></span> 3 mos
            </p>
            <p className="font-medium flex items-center font-inter text-[12px]/[14.52px] text-[#000000A8]">
              Nagpur, Maharashtra, India <span className="w-[3px] h-[3px] mx-1 rounded-[50%] inline-block bg-[#00000078]"></span> On-site
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
