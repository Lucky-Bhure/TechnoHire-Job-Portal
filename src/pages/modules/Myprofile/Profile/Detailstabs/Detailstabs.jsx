import React, { useState } from "react";
import { MdOutlineViewTimeline } from "react-icons/md";
import Basicdetails from "../Basicdetails";
import { MdOutlineSchool } from "react-icons/md";
import { MdOutlineBadge } from "react-icons/md";
import Education from "../Education";
import { PiGearSixLight } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";

import Workexp from "../Workexp";
import Certification from "../Certification";
import { HiOutlineDocumentArrowUp } from "react-icons/hi2";

import Skills from "../Skills";
import Documents from "../Documents";
// import { useLocation } from "react-router-dom";

const detailsTabs = [
  {
    name: "Basic Details",
    iconLeft: <MdOutlineViewTimeline size={20} />,
    component: <Basicdetails />,
  },
  {
    name: "Education Details",
    iconLeft: <MdOutlineSchool size={20} />,
    component: <Education />,
  },
  {
    name: "Work Experience",
    iconLeft: <MdOutlineBadge size={20} />,
    component: <Workexp />,
  },
  {
    name: "Certification",
    iconLeft: <PiGearSixLight size={20} />,
    component: <Certification />,
  },
  {
    name: "Skills",
    iconLeft: <GiSkills size={20} />,
    component: <Skills />,
  },
  {
    name: "Documents",
    iconLeft: <HiOutlineDocumentArrowUp size={20} />,
    component: <Documents />,
  },
];

function Detailstabs() {
  // const location=useLocation()//myline
  // const queryParams = new URLSearchParams(location.search); //mline
  // const [tabIndex, setTabsIndex] = useState(parseInt(queryParams.get('index'))); //myline
  const [tabIndex, setTabsIndex] = useState(0);
  return (
    <div>

      <h1 className="font-inter mt-5 font-medium text-[24px]/[32px]">Profile</h1>
      <div className="w-[100%] mt-5">
        <div className="flex justify-center items-center border-b-[1px] gap-12">
          {detailsTabs.map((data, index) => (
            <div
              className={`flex ${
                index === tabIndex
                  ? "text-[#7900BA] border-b-[1px] border-[#7900BA]"
                  : "text-[#767F8C] border-b-[1px] border-[#ffffff] "
              } pb-2 items-center gap-1`}
              key={index}
              onClick={() => setTabsIndex(index)}
            >
              <p className="">{data.iconLeft}</p>
              <p className="font-inter font-semibold text-[14px]/[20px]">
                {data.name}
              </p>
              
            </div>
          ))}
        </div>

        <div>{detailsTabs[tabIndex].component}</div>
      </div>
    </div>
  );
}

export default Detailstabs;
