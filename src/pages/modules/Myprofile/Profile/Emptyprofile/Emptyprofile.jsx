import React from "react";
import empty_profile from "../../../../../assets/empty_profile.png";
import { FaRegHandPointRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Emptyprofile() {
  return (
    <div className="py-5">
      <h1 className="font-inter font-medium text-2xl">Profile</h1>

      <div className="flex items-center gap-4 mx-5 mt-3 mb-5">
        <div className="relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxTYFlL3rMQGJUnGYA--ilSNhGJwCOdYr7kA&s"
            alt=""
            className="w-[75.51px] h-[77.25px] rounded-full"
          />
          <span className="absolute right-1 top-[55px] font-medium text-center bg-[#7900BA] flex justify-center items-center rounded-full text-white w-[18px] h-[18px]">
            +
          </span>
        </div>
      </div>
      <img src={empty_profile} alt="" className="mx-auto my-10" />

      <div className="flex space-y-5 flex-col">
        <div className="bg-[#DCBDEDB2] m-auto flex justify-center items-center rounded-[20px] w-[500px] h-[105px]">
          <p className="px-[54px] text-[#3E1654] font-inter font-normal text-[18px]/[30px]">
            It looks like you haven&#39;t completed your profile yet. Please provide
            your details to get started!
          </p>
        </div>
        <NavLink to="/dashboard/profile-details">
          <div className="flex items-center gap-2 w-[450px] m-auto">
            <FaRegHandPointRight size={20} color="#D3513D" />
            <a href="">Click here to complete your profile</a>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Emptyprofile;
