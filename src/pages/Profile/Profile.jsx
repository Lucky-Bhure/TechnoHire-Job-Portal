import React, { useEffect, useState } from "react";
import { GoPencil } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import { MdOutlineArrowForward } from "react-icons/md";
import profile from "../.../../../assets/Profileassests/profile.jpg";
import skill_logo from "../.../../../assets/Profileassests/skill_logo.png";
import university_logo from "../.../../../assets/Profileassests/university_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Profilemodal from "../../components/Modal/Profilemodal";
import Skillmodal from "../../components/Modal/Skillmodal";
import Aboutmodal from "../../components/Modal/Aboutmodal";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [profileModal, setProfileModal] = useState(false);
  const [skillModal, setSkillModal] = useState(false);
  const [aboutModal, setAboutModal] = useState(false);
  const navigate=useNavigate()

  return (
    <div className="flex flex-1 flex-col	justify-between space-y-7 border-x-[1px] w-[500px] relative">
      <h1 className="text-2xl text-[#18191C] font-medium font-inter mx-4 mt-4">
       Profile
      </h1>
      {/* upper part */}
      <div className="flex items-center gap-4 mx-10">
        <div className="relative">
          <img
            className="w-[75.51px] h-[77.25px] rounded-full border-[1px] border-[#2F1547]"
            src={profile}
            alt=""
          />
          <span
            onClick={() => setProfileModal(true)}
            className="absolute right-1 top-[60px] font-medium text-center bg-[#7900BA] flex justify-center items-center rounded-full text-white w-[18px] h-[18px]"
          >
            +
          </span>
        </div>
        <div className="font-medium  font-poppins">
          <h1 className="text-2xl/[36px] text-[#3E1654] font-semibold">
            Ninad Sathe
          </h1>
          <h1 className=" text-[#666666] text-[13px]/[19.5px] mb-[6px]">
            UI/UX Designer
          </h1>
          <h1 className="text-[#666666] font-medium text-[14px]/[21px]">
            Ernst & Young
          </h1>
          <h1 className="text-[#666666] font-medium text-[13px]/[19.5px] text-opacity-[0.46]">
            Nagpur, Maharashtra, India
          </h1>
        </div>
      </div>

      {/* progress part */}
      <div className="w-[70%] mx-16">
        <h1 className="text-[10px]/[15px] text-[#8D8D8D] font-medium font-poppins">
          Your progress
        </h1>
        <h1 className="text-[#3E1654] font-bold font-lato">
          <span className="text-[16px]/[28px]">90%</span>&nbsp; complete
        </h1>
        <div className="w-full bg-[#E0E0E0] rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-[#7900BA] h-2.5 rounded-full w-[90%]"></div>
        </div>
      </div>

      {/* about */}
      <div className="w-[70%] font-inter mx-10">
        <div className="flex justify-between items-center text-[16px]/[19.36px] font-medium">
          <h4 className="text-[#484747]">About</h4>
          <GoPencil className="text-[#3E1654]" onClick={()=> setAboutModal(true)} />
        </div>
        <div className="font-inter font-normal font-[16px]/[24.64px] text-[#00000099]">
          <p>
            UI/UX Designer with a passion for crafting intuitive and
            user-centered designs that enhance overall user experiences.
          </p>
          <p>
            UI/UX Designer with a passion for crafting intuitive and
            user-centered designs that enhance overall user experiences....
          </p>
          <p>see more </p>
        </div>
      </div>

      {/* skills */}
      <div className="w-[70%] border-[1px] border-[#E0E0E0] rounded-[5px] p-2 mx-10">
        <div className="flex justify-between font-medium">
          <p className="flex gap-[10px] items-center">
            <img
              className="w-4 h-[14px] text-[#0000007A]"
              src={skill_logo}
              alt=""
            />
            Top skills
          </p>
          <GoPencil
            className="text-[#3E1654]"
            onClick={() => setSkillModal(true)}
          />
        </div>
        <p className="text-center mt-2 font-normal text-[16px]/[19.36px] text-[#000000B8] font-inter">
          Figma, Canva, Photoshop, Adobe XD
        </p>
      </div>

      {/* education */}
      <div className="w-[70%] space-y-3 mx-10">
        <div className="flex justify-between items-center">
          <p className="font-poppins font-medium text-[16px]/[24px]">
            Education
          </p>
          <div className="flex gap-2 items-center text-[#3E1654]">
          {/* <FiPlus onClick={()=>navigate('/dashboard/profile-details?index=1')}/> */}
            <FiPlus onClick={()=>navigate('/dashboard/profile-details')}/>
            <GoPencil onClick={()=>navigate('/dashboard/profile-details')}/>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="w-10 h-10 rounded-full"
              src={university_logo}
              alt=""
            />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="font-medium text-[#000000] truncate dark:text-white font-poppins font-[16px]/[24px]">
              Anna University, Chennai, Tamil Nadu
            </p>
            <p className="font-medium font-inter text-[12px]/[14.52px] text-[#000000AD]">
              Master of Technology in Artificial Intelligence
            </p>
          </div>
        </div>
        <hr className="text-[#E0E0E0]" />
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="w-10 h-10 rounded-full"
              src={university_logo}
              alt=""
            />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="font-medium text-[#000000] truncate dark:text-white font-poppins font-[16px]/[24px]">
              Anna University, Chennai, Tamil Nadu
            </p>
            <p className="font-medium font-inter text-[12px]/[14.52px] text-[#000000AD]">
              Master of Technology in Artificial Intelligence
            </p>
          </div>
        </div>
        <hr className="text-[#E0E0E0]" />
      </div>

      {/* show all education */}
      <div className="flex items-center gap-3 mx-10">
        <p className="font-poppins font-medium text-[#0000009E] text-[16px]/[24px]">
          Show all educations
        </p>
        <MdOutlineArrowForward className="text-[#616161]" />
      </div>
      {profileModal && <Profilemodal setProfileModal={setProfileModal} />}
      {skillModal && <Skillmodal setSkillModal={setSkillModal} />}
      {aboutModal && <Aboutmodal setAboutModal={setAboutModal} />}
    </div>
  );
}

export default Profile;
