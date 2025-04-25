import React from "react";
import ulogo from "../.../../../../../../assets/ULogo.png";
import EmployersLogo from "../.../../../../../../assets/EmployersLogo.png";
import GoogleLogo from "../.../../../../../../assets/google.png";
import Microsoft from "../.../../../../../../assets/microsoft.png";
import twitter from "../.../../../../../../assets/twitter.png";
import instagram from "../.../../../../../../assets/instagram.png";
import youtube from "../.../../../../../../assets/youtube.png";
import apple from "../.../../../../../../assets/appleLogo.png";
import slack from "../.../../../../../../assets/slack.png";
import upwork from "../.../../../../../../assets/UpLogo.png";
import reddit from "../.../../../../../../assets/reddit.png";
import dribbble from "../.../../../../../../assets/dribbble.png";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { SlLocationPin } from "react-icons/sl";
import { PiBriefcaseLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const companyData = [
  {
    name: "DribbBle",
    iconLeft: dribbble,
    location: "United States",
  },
  {
    name: "Udemy",
    iconLeft: ulogo,
    location: "China",
  },
  {
    name: "Figma",
    iconLeft: EmployersLogo,
    location: "United States",
  },
  {
    name: "Google",
    iconLeft: GoogleLogo,
    location: "Australia",
  },
  {
    name: "Microsoft",
    iconLeft: Microsoft,
    location: "Australia",
  },
  {
    name: "Twitter",
    iconLeft: twitter,
    location: "Australia",
  },
  {
    name: "Instagram",
    iconLeft: instagram,
    location: "Australia",
  },
  {
    name: "Youtube",
    iconLeft: youtube,
    location: "Canada",
  },
  {
    name: "Apple",
    iconLeft: apple,
    location: "United States",
  },
  {
    name: "Slack",
    iconLeft: slack,
    location: "Germany",
  },
  {
    name: "Reddit",
    iconLeft: reddit,
    location: "France",
  },
  {
    name: "Upwork",
    iconLeft: upwork,
    location: "China",
  },
];

function Companycards() {
  const navigate = useNavigate();
  return (
    <div className="w-[90%]">
      <div>
        {companyData.map((cname, idx) => (
          <div className="flex justify-between items-center my-5 border-[#EDEFF5] rounded-xl border-[1px] p-5">
            <div className="flex items-center gap-5">
              <img src={cname.iconLeft} alt="" />
              <div className="space-y-4">
                <h1 className="text-[#191F33] font-inter font-medium text-[20px]/[32px]">
                  {cname.name}
                </h1>
                <div className="flex items-center gap-5 text-[#636A80] font-inter font-normal">
                  <div className="flex items-center gap-1">
                    <SlLocationPin size={20} />
                    <p>{cname.location}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <PiBriefcaseLight size={20} />
                    <p>3 - open Job</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => navigate("/single-employee")}
              className="flex items-center justify-between w-44 bg-[#DCBDED] px-5 py-3 rounded text-[#7900BA] font-inter font-semibold text-[16px]/[24px] cursor-pointer"
            >
              <p>Open Position</p>
              <GrLinkNext />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-3 mt-10">
        <div>
          <GrLinkPrevious size={24} color="#7900BAAB" />
        </div>
        {[1, 2, 3, 4, 5].map((ele, idx) => (
          <p
            className={`font-inter font-medium text-[14px]/[20px] text-[#5E6670]${
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
        <div className="border-[1px] rounded-full bg-[#DCBDED] w-[48px] h-[48px] flex items-center justify-center">
          <GrLinkNext size={24} color="#7900BAAB" />
        </div>
      </div>
    </div>
  );
}

export default Companycards;
