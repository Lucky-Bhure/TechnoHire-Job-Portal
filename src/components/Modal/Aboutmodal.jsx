import React from "react";
import { IoMdClose } from "react-icons/io";
function Aboutmodal({ setAboutModal }) {
  return (
    <div className="fixed top-32 left-96 z-50 border-2 rounded-[10px] bg-white py-5 w-[500px] px-6">
      <h1 className="font-inter font-semibold text-[30px]/[36.31px] text-[#4E4E4E]">About</h1>
      <div className="w-[450px] h-[220px] border-[1px] rounded-[10px] border-[#0000004D] p-3 my-5">
        <p className="font-inter font-normal text-[18px]/[27px] text-[#22202C]">
          UI/UX Designer with a passion for crafting intuitive and user-centered
          designs that enhance overall user experiences.
        </p>
      </div>
      <div
        className="w-[48px] cursor-pointer h-[48px] bg-[#DCBDED] border-[#FFFFFF] rounded-full flex justify-center items-center border-2 absolute -top-5 -right-5"
        onClick={() => setAboutModal(false)}
      >
        <IoMdClose size={24} color="#7900BA" />
      </div>
      <div className="flex justify-center items-center">
        <button className="w-[140px] h-[35px] rounded-lg  bg-[#7900BA] font-poppins font-medium text-[#FFFFFF] text-[20px]/[30px]">
          Save
        </button>
      </div>
    </div>
  );
}

export default Aboutmodal;
