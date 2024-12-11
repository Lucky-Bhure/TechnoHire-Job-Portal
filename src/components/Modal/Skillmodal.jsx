import React from "react";
import { IoMdClose } from "react-icons/io";
function Skillmodal({ setSkillModal }) {
  return (
    <div className="fixed top-40 left-80 z-50 border-2 rounded-[10px] bg-white py-2 w-[650px]">
      <h1 className="font-inter font-semibold text-[25px]/[30.26px] text-[#4E4E4E] ml-5">
        Top Skills
      </h1>
      <div className="border-[#0000004D] rounded-[10px] w-[600px] h-[207px] border-[1px] flex gap-10 py-10 ml-5 mt-5">
        <p className="font-urbanist font-semibold text-[20px]/[25px] text-[#8391A1] h-[43px] py-[10px] px-2">
          Skills
        </p>
        <div className="flex gap-5 text-center">
          <p className="bg-[#0000008F] text-white font-urbanist font-medium text-[18px]/[22.5px] w-[145.24px] h-[43px] py-[10px] rounded-lg">
            Figma
          </p>
          <p className="bg-[#0000008F] text-white font-urbanist font-medium text-[18px]/[22.5px] w-[145.24px] h-[43px] py-[10px] rounded-lg">
            Canva
          </p>
          <p className="bg-[#0000008F] text-white font-urbanist font-medium text-[18px]/[22.5px] w-[145.24px] h-[43px] py-[10px] rounded-lg">
            Photoshop
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5 py-5 ml-5 font-inter text-[16px]/[20px]">
        <p className="text-[#9199A3] ">Suggestion:</p>
        <div className="flex gap-2 text-center">
          <p className="text-[#474C54] font-normal">Designer,</p>
          <p className="text-[#474C54] font-normal">Programming,</p>
          <p className="text-[#8000FC] font-medium">Digital Marketing.</p>
        </div>
      </div>
      <div className="flex justify-center items-center mb-3">
        <button className="w-[140px] h-[35px] rounded-lg  bg-[#7900BA] font-poppins font-medium text-[#FFFFFF] text-[20px]/[30px]">
          Save
        </button>
      </div>
      <div
        className="w-[48px] h-[48px] cursor-pointer border-[#FFFFFF] bg-[#DCBDED] rounded-full flex justify-center items-center border-2 absolute -top-5 -right-5"
        onClick={() => setSkillModal(false)}
      >
        <IoMdClose size={24} color="#7900BA" />
      </div>
    </div>
  );
}

export default Skillmodal;
