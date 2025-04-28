import React from "react";
import { GrLinkNext } from "react-icons/gr";
import { BsGlobe } from "react-icons/bs";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram,FaWhatsapp,FaTwitter } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

function Support() {
  return (
    <div className="w-[85%]">
      <h1 className="font-poppins font-medium text-[22px]/[64px] mt-5 text-[#000000]">
        Contact Us
      </h1>
      <div className="grid grid-cols-2 gap-2 ">
        <div className="w-[400px] h-[384px]">
          <p className="text-[#7900BA] font-inter font-medium text-[16px]/[24px] my-3">
            Who we are
          </p>
          <p className="font-inter font-medium text-[48px]/[56px] text-[#18191C] mb-7">
            We care about customer services
          </p>
          <p className="font-inter font-normal text-[18px]/[28px] text-[#474C54] mb-7">
            Want to chat? We’d love to hear from you! Get in touch with our
            Customer Success Team to inquire about speaking events, advertising
            rates, or just say hello.
          </p>

          <button className="bg-[#7900BA] px-[32px] py-[16px] rounded text-white">
            Email Support
          </button>
        </div>

        {/* D3D3D39C */}
        {/* F7F8F9 */}
        <div className="w-[376px] h-[56px] space-y-4">
          <h1 className="text-[#7900BA] font-inter font-medium text-[16px]/[24px] mb-3">Reach Out@</h1>
          <div className="bg-[#F7F8F9] flex justify-between items-center rounded-lg border-[#D3D3D39C] px-5 py-5">
            <div className="flex items-center gap-2">
              <BsGlobe className="text-[#7900BAAB] w-[16.67px] h-[16.67px] " />
              <p className="font-urbanist font-medium text-[15px]/[18.75px] text-[#8391A1]">Website</p>
            </div>
            <GrLinkNext className="text-[#8391A1]" />
          </div>
          <div className="bg-[#F7F8F9] flex justify-between items-center rounded-lg border-[#D3D3D39C] px-5 py-5">
            <div className="flex items-center gap-2">
              <RiFacebookCircleLine className="text-[#7900BAAB] w-[16.67px] h-[16.67px] " />
              <p className="font-urbanist font-medium text-[15px]/[18.75px] text-[#8391A1]">Facebook</p>
            </div>
            <GrLinkNext className="text-[#8391A1]" />
          </div>
          <div className="bg-[#F7F8F9] flex justify-between items-center rounded-lg border-[#D3D3D39C] px-5 py-5">
            <div className="flex items-center gap-2">
              <FaInstagram className="text-[#7900BAAB] w-[16.67px] h-[16.67px] " />
              <p className="font-urbanist font-medium text-[15px]/[18.75px] text-[#8391A1]">Instagram</p>
            </div>
            <GrLinkNext className="text-[#8391A1]" />
          </div>
          <div className="bg-[#F7F8F9] flex justify-between items-center rounded-lg border-[#D3D3D39C] px-5 py-5">
            <div className="flex items-center gap-2">
              <FaWhatsapp className="text-[#7900BAAB] w-[16.67px] h-[16.67px] " />
              <p className="font-urbanist font-medium text-[15px]/[18.75px] text-[#8391A1]">Whatsapp</p>
            </div>
            <GrLinkNext className="text-[#8391A1]" />
          </div>
          <div className="bg-[#F7F8F9] flex justify-between items-center rounded-lg border-[#D3D3D39C] px-5 py-5">
            <div className="flex items-center gap-2">
              <FaTwitter className="text-[#7900BAAB] w-[16.67px] h-[16.67px]" />
              <p className="font-urbanist font-medium text-[15px]/[18.75px] text-[#8391A1]">Twitter</p>
            </div>
            <GrLinkNext className="text-[#8391A1]" />
          </div>
          <div className="bg-[#F7F8F9] flex justify-between items-center rounded-lg border-[#D3D3D39C] px-5 py-5">
            <div className="flex items-center gap-2">
              <BiSupport className="text-[#7900BAAB] w-[16.67px] h-[16.67px]" />
              <p className="font-urbanist font-medium text-[15px]/[18.75px] text-[#8391A1]">Customer Service</p>
            </div>
            <GrLinkNext className="text-[#8391A1]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
