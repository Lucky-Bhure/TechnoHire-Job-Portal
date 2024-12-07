import React, { useState } from "react";
import General from "./General";
import Faqs from "./Faqs";
import Support from "./Support";
import Terms from "./Terms";
import { RiUserSettingsFill } from "react-icons/ri";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";


const tabsData = [
  {
    tabName: "General",
    iconLeft: <RiUserSettingsFill />,
    component: <General />,
  },
  {
    tabName: "FAQ",
    iconLeft: <AiOutlineQuestionCircle  />,
    component: <Faqs />,
  },
  {
    tabName: "Suppport",
    iconLeft: <BiSupport />,
    component: <Support />,
  },
  {
    tabName: "Terms & Services",
    iconLeft: <CgNotes />,
    component: <Terms />,
  },
];

function Settings() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="w-[80%]">
      <div className="flex justify-center items-center border-b-[1px] gap-28">
        {tabsData.map((data, index) => (
          <div
            className={`flex ${
              index === tabIndex ?
              "text-[#7900BA] border-b-[1px] border-[#7900BA]"
            : 'text-[#767F8C] border-b-[1px] border-[#ffffff] '} pb-2 items-center gap-1`}
            key={index}
            onClick={() => setTabIndex(index)}
          >
            <p className="">{data.iconLeft}</p>
            <p className="font-inter font-semibold text-[14px]/[20px]">{data.tabName}</p>
          </div>
        ))}
      </div>

      <div>{tabsData[tabIndex].component}</div>
    </div>
  );
}

export default Settings;
