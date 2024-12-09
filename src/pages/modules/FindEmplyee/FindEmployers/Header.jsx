import React from "react";
import { TbMessage } from "react-icons/tb";
import technohire_logo from "../.../../../../../assets/technohire_logo.png";
import BellRinging from "../.../../../../../assets/BellRinging.png";
import profile from "../.../../../../../assets/Profileassests/profile.jpg";
function Header() {
  return (
    <div className="flex justify-between items-center mt-2 px-40">
      <img src={technohire_logo} alt="" className="w-[180px] h-[70px]" />
      <div className="flex items-center gap-5">
        <TbMessage className="w-[17.14px] h-[17px] text-[#18191C] " />
        <img
          src={BellRinging}
          alt=""
          className="w-[24px] h-[24px] text-[#18191C]"
        />
        <img
          src={profile}
          alt=""
          className="w-[48px] h-[48px] border-[1px] border-[#7900BA] rounded-full"
        />
      </div>
    </div>
  );
}

export default Header;
