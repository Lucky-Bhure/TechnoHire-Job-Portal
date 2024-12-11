import React from "react";
import google from "../../../assets/google.png";
import youtube from "../../../assets/youtube.png";
import reddit from "../../../assets/reddit.png";
import job from "../../../assets/job.png";
import instagram from "../../../assets/instagram.png";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { SlLocationPin } from "react-icons/sl";
import { PiBriefcaseLight } from "react-icons/pi";

const historyData = [
  {
    img: google,
    jobName: "Technical Support Specialist",
    location: "Idaho, USA",
    salary: "₹15K-₹20K",
    iconleft: <CiBookmark size={20} color="#767F8C" />,
  },
  {
    img: youtube,
    jobName: "UI/UX Designer",
    location: "Minnesota, USA",
    salary: "₹10K-₹15K",
    iconleft: <CiBookmark size={20} color="#767F8C" />,
  },
  {
    img: reddit,
    jobName: "Front End Developer",
    location: "Mymensingh, Bangladesh",
    salary: "₹10K-₹15K",
    iconleft: <FaBookmark size={18} color="#18191C" />,
  },
  {
    img: job,
    jobName: "Marketing Officer",
    location: "Montana, USA",
    salary: "₹50K-₹60K",
    iconleft: <CiBookmark size={20} color="#767F8C" />,
  },
  {
    img: instagram,
    jobName: "Networking Engineer",
    location: "Michigan, USA",
    salary: "₹5K-₹10K",
    iconleft: <FaBookmark size={18} color="#18191C" />,
  },
  {
    img: job,
    jobName: "Marketing Officer",
    location: "Montana, USA",
    salary: "₹50K-₹60K",
    iconleft: <CiBookmark size={20} color="#767F8C" />,
  },
];

function Searchhistory() {
  return (
    <div>
      <h1 className="text-[#000000] font-poppins font-medium text-[22px]/[64px]">
        Search History
      </h1>

      <div>
        {historyData.map((elem, idx) => (
          <div className="w-[98%] border-b-[1px] border-b-[#88746] flex justify-between items-center">
            {/*  */}
            <div className="flex items-center w-[600px] py-5 gap-4">
              <img src={elem.img} alt="" className="w-[56px] h-[56px]" />
              <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2 font-inter font-medium">
                  <h1 className=" text-base text-[#18191C]">{elem.jobName}</h1>
                  <button className="px-3 py-[3px] bg-[#DCBDED] rounded-[52px]  text-[10px]/[20px] text-[#7900BA]">
                    Full Time
                  </button>
                </div>
                <div className="flex items-center gap-4 font-inter font-normal text-[14px]/[20px] text-[#636A80]">
                  <div className="flex items-center gap-1">
                    <SlLocationPin size={18} color="#C5C9D6" />
                    <p className="">{elem.location}</p>
                    <div className="ml-2">
                      <p>{elem.salary}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <PiBriefcaseLight size={18} />
                    <p>4 Days Remaining</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center gap-2 w-[190px] mr-5">
              <div>{elem.iconleft}</div>
              <div className="flex items-center px-6 py-2 bg-[#DCBDED] text-[#7900BA] gap-2 rounded-[3px]">
                <p className="font-inter font-semibold text-base">Apply Now</p>
                <GrLinkNext />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-3 mt-14 h-[60px]">
        <div className="mb-10">
          <GrLinkPrevious size={24} color="#7900BA42" />
        </div>
        {[1, 2, 3, 4, 5].map((ele, idx) => (
          <p
            className={`font-inter mb-10 font-medium text-[14px]/[20px] text-[#5E6670]${
              idx === 0
                ? "border-[1px] rounded-full bg-[#7900BA] text-white w-[48px] h-[48px] flex items-center justify-center"
                : ""
            } ${
              idx === 3
                ? "border-[1px] rounded-full bg-[#F1F2F4] text-[#000000] font-medium  w-[48px] h-[48px] flex items-center justify-center"
                : ""
            }`}
          >
            0{ele}
          </p>
        ))}
        <div className="border-[1px] mb-10 rounded-full bg-[#DCBDED] w-[48px] h-[48px] flex items-center justify-center">
          <GrLinkNext size={24} color="#7900BA" />
        </div>
      </div>
    </div>
  );
}

export default Searchhistory;
