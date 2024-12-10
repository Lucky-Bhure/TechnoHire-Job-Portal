import React from "react";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

function Faqs() {
  return (
    <div className="">
      <div>
        <h1 className="font-inter font-medium text-[24px]/[32px] text-center text-[#18191C] my-5">
          Your Account
        </h1>

        <div className="flex justify-between m-auto items-center w-[758px] h-[68px] border-[1px] rounded-lg border-[#E4E5E8] pl-14 pr-12 my-5">
          <p className="font-inter font-normal text-[18px]/[28px] text-[#18191C]">
            How do I create an account?
          </p>
          <FiPlus className="w-[14px] text-[#9199A3] h-[14px]" />
        </div>

        <div className="border-[1px] rounded-lg border-[#E4E5E8] w-[759px] h-[185px] shadow-[0_8_32_0_rgba(24, 25, 28, 0.1)] m-auto pl-14 pr-12 my-5">
          <div className="flex justify-between items-center border-b-[#E4E5E8] border-b-[1px] py-3.5">
            <p className="font-inter font-medium text-[18px]/[28px] text-[#7900BA]">
              How do I create an account?
            </p>
            <RxCross2 className="w-[14px] text-[#18191C] h-[14px]" />
          </div>
          <p className="font-inter font-normal text-[16px]/[24px] text-[#767F8C] w-[550px] pt-3.5">
            To update your profile information, go to the "Your Account" section
            and click on "Edit Profile." Make the necessary changes and save
            them to keep your details up to date.
          </p>
        </div>

        <div className="flex justify-between m-auto items-center w-[758px] h-[68px] border-[1px] rounded-lg border-[#E4E5E8] pl-14 pr-24">
          <p className="font-inter font-normal text-[18px]/[28px] text-[#18191C]">
            What should I do if I forget my password?
          </p>
          <FiPlus className="w-[14px] text-[#9199A3] h-[14px]" />
        </div>

        <h1 className="font-inter font-medium text-[24px]/[32px] text-center text-[#18191C] my-5">
          Candidate & Resume
        </h1>

        <div className="flex justify-between m-auto items-center w-[758px] h-[68px] border-[1px] rounded-lg border-[#E4E5E8] pl-14 pr-12 my-5">
          <p className="font-inter font-normal text-[18px]/[28px] text-[#18191C]">
            How do I set up job alerts for new opportunities?
          </p>
          <FiPlus className="w-[14px] text-[#9199A3] h-[14px]" />
        </div>

        <div className="flex justify-between m-auto items-center w-[758px] h-[68px] border-[1px] rounded-lg border-[#E4E5E8] pl-14 pr-12 my-5">
          <p className="font-inter font-normal text-[18px]/[28px] text-[#18191C]">
            What file formats are accepted for resume uploads?
          </p>
          <FiPlus className="w-[14px] text-[#9199A3] h-[14px]" />
        </div>

        <div className="flex justify-between m-auto items-center w-[758px] h-[68px] border-[1px] rounded-lg border-[#E4E5E8] pl-14 pr-12 mb-32">
          <p className="font-inter font-normal text-[18px]/[28px] text-[#18191C]">
            How do I upload my resume to the portal?
          </p>
          <FiPlus className="w-[14px] text-[#9199A3] h-[14px]" />
        </div>
      </div>
    </div>
  );
}

export default Faqs;
