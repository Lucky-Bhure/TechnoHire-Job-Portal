import React from "react";
import profile from "../../assets/Profileassests/profile.jpg";
import { IoMdClose } from "react-icons/io";

function Profilemodal({ setProfileModal }) {
  return (
    <div className="fixed top-32 left-60 z-50 border-2 rounded-[10px] bg-white py-5 w-[600px]">
      <h1 className="text-center text-[#000000] font-poppins font-medium text-[15px]/[22.5px]">
        Profile Photo
      </h1>
      <img
        src={profile}
        alt=""
        className="w-[75.51px] h-[77.25px] rounded-full border-[1px] border-[#2F1547] ml-auto mr-auto mt-2"
      />
      <div className="flex justify-center items-center gap-6 my-5">
        <button className="bg-[#7900BA] text-white rounded-lg px-8 py-2 ml-3 font-poppins font-medium text-[18px]/[27px]">
          Delete
        </button>
        <button className="bg-[#7900BA] text-white rounded-lg px-7 py-2 font-poppins font-medium text-[18px]/[27px]">
          Change
        </button>
      </div>
      <p className="text-[#6F6A6A] font-poppins font-medium text-base text-center my-5">
        Supported file format: png, jpg, jpeg, gif - upto 2MB
      </p>
      <p className="text-[#6F6A6A] font-poppins font-medium text-base text-center my-5 mx-5">
        By uploading your photograph, you certify that naukri.com has the right
        to display this photograph to the recruiters and that the uploaded file
        does not violate our{" "}
        <span className="underline decoration-solid">Terms of services.</span>
      </p>

      <div className="w-[48px] cursor-pointer h-[48px] bg-[#DCBDED] border-[#FFFFFF] rounded-full flex justify-center items-center border-2 absolute -top-5 -right-5" onClick={() => setProfileModal(false)}>
        <IoMdClose size={24} color="#7900BA" />
      </div>
    </div>
  );
}

export default Profilemodal;
