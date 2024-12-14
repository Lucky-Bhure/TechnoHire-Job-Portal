import React from "react";
import { LuCloudUpload } from "react-icons/lu";

function Documents() {
  return (
    <div className="py-5">
      <h1 className="font-poppins font-medium text-[22px]/[64px]">
        Upload Documents
      </h1>
      <p className="font-inter font-normal text-[16px]/[20px] text-[#00000099]">
        Upload Supporting Documents
      </p>

      <div className="flex w-[100%] gap-10 mt-10">
        {/*  */}
        <div className="w-[50%]">
          <h1 className="font-inter font-normal my-2 text-[14px]/[20px] text-[#18191C]">
            Upload your Photo
          </h1>
          <div className="w-[100%] flex justify-center gap-3 items-center flex-col h-[200px] bg-[#F1F2F466] border-dashed border-4 rounded-lg border-[#C8CCD1B2]">
            <LuCloudUpload size={50} color="#ADB2BA" />
            <p className="font-inter font-medium text-[14px]/[20px]">
              Browse File{" "}
              <span className="font-normal text-[#474C54]"> or drop here</span>
            </p>
            <p className="font-inter font-normal text-[12px]/[18px] text-[#5E6670]">
              Only PDF format available . Max file size 12 MB.
            </p>
          </div>
        </div>
        {/* / */}
        <div className="w-[50%]">
          <h1 className="font-inter font-normal my-2 text-[14px]/[20px] text-[#18191C]">
            Upload additional documents
          </h1>
          <div className="w-[100%] bg-[#F1F2F466] flex justify-center gap-3 items-center flex-col h-[200px] border-dashed border-4 rounded-lg border-[#C8CCD1B2]">
            <LuCloudUpload size={50} color="#ADB2BA" />
            <p className="font-inter font-medium text-[14px]/[20px]">
              Browse File{" "}
              <span className="font-normal text-[#474C54]"> or drop here</span>
            </p>
            <p className="font-inter font-normal text-[12px]/[18px] text-[#5E6670]">
              Only PDF format available . Max file size 12 MB.
            </p>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="font-inter flex font-medium text-[#18191C] text-[18px]/[28px] w-[100%] mt-8 mb-3">
        <p className="w-[50%] text-center">Add Cv/Resume</p>
        <p className="w-[50%] text-center">Add Cover Letter</p>
      </div>
      {/*  */}

      <div className="flex w-[100%] gap-10">
        <div className="w-[50%]">
          <p className="text-center font-inter mb-2 font-normal text-[14px]/[20px] text-[#18191C]">
            Cv/Resume Name
          </p>
          <div className="border-[1px] border-[#E4E5E8] py-3 rounded-[5px]">
            <input type="text" className="outline-none border-none" />
          </div>
        </div>
        {/*  */}
        <div className="w-[50%]">
          <p className="text-center font-inter font-normal mb-2 text-[14px]/[20px] text-[#18191C]">
            Cv/Resume Name
          </p>
          <div className="border-[1px] border-[#E4E5E8] py-3 rounded-[5px]">
            <input type="text" className="outline-none border-none" />
          </div>
        </div>
      </div>
      {/*  */}

      <div className="flex w-[100%] gap-10 mt-5">
        {/*  */}
        <div className="w-[50%]">
          <h1 className="font-inter font-normal my-2 text-center text-[14px]/[20px] text-[#18191C]">
            Upload your Cv/Resume
          </h1>
          <div className="w-[100%] flex justify-center gap-3 items-center flex-col h-[200px] bg-[#F1F2F466] border-dashed border-4 rounded-lg border-[#C8CCD1B2]">
            <LuCloudUpload size={50} color="#ADB2BA" />
            <p className="font-inter font-medium text-[14px]/[20px]">
              Browse File{" "}
              <span className="font-normal text-[#474C54]"> or drop here</span>
            </p>
            <p className="font-inter font-normal text-[12px]/[18px] text-[#5E6670]">
              Only PDF format available . Max file size 12 MB.
            </p>
          </div>
        </div>
        {/* / */}
        <div className="w-[50%]">
          <h1 className="font-inter text-center font-normal my-2 text-[14px]/[20px] text-[#18191C]">
            Upload your Cover Letter
          </h1>
          <div className="w-[100%] bg-[#F1F2F466] flex justify-center gap-3 items-center flex-col h-[200px] border-dashed border-4 rounded-lg border-[#C8CCD1B2]">
            <LuCloudUpload size={50} color="#ADB2BA" />
            <p className="font-inter font-medium text-[14px]/[20px]">
              Browse File{" "}
              <span className="font-normal text-[#474C54]"> or drop here</span>
            </p>
            <p className="font-inter font-normal text-[12px]/[18px] text-[#5E6670]">
              Only PDF format available . Max file size 12 MB.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#7900BA] w-[500px] px-[30px] py-[17px] m-auto flex justify-center items-center rounded-[10px] font-poppins mt-10">
        <button className="text-white font-medium">Update</button>
      </div>
    </div>
  );
}

export default Documents;
