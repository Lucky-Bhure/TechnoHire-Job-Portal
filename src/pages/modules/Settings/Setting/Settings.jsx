import React, { useState } from "react";
import General from "./General";
import Faqs from "./Faqs";
import Support from "./Support";
import Terms from "./Terms";
import { RiUserSettingsFill } from "react-icons/ri";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import Searchhistory from "../../Searchhistory/Searchhistory";
import { useLocation } from "react-router-dom";


// const tabsData = [
//   {
//     tabName: "General",
//     iconLeft: <RiUserSettingsFill />,
//     component: <General />,
//   },
//   {
//     tabName: "FAQ",
//     iconLeft: <AiOutlineQuestionCircle  />,
//     component: <Faqs />,
//   },
//   {
//     tabName: "Suppport",
//     iconLeft: <BiSupport />,
//     component: <Support />,
//   },
//   {
//     tabName: "Terms & Services",
//     iconLeft: <CgNotes />,
//     component: <Terms />,
//   },
// ];

function Settings() {
  const location = useLocation();
  const [tabIndex, setTabIndex] = useState(0);
  const [history, setHistory] = useState(true);
  const tabsData = [
    {
      tabName: "General",
      iconLeft: <RiUserSettingsFill />,
      component: history ? <General setHistory={setHistory} /> : <Searchhistory />,
    },
    {
      tabName: "FAQ",
      iconLeft: <AiOutlineQuestionCircle  />,
      component: <Faqs />,
    },
    {
      tabName: "Support",
      iconLeft: <BiSupport />,
      component: <Support />,
    },
    {
      tabName: "Terms & Services",
      iconLeft: <CgNotes />,
      component: <Terms />,
    },
  ];

  React.useEffect(() => {
    if (location.state && location.state.tab === "support") {
      setTabIndex(2); 
    }
  }, [location]);

  
  const handleTabs = (idx) => {
    setTabIndex(idx)
    setHistory(true);
  }
  return (
    <div className="w-[100%]">
      <div className="flex justify-center items-center border-b-[1px] gap-28">
        {tabsData.map((data, index) => (
          <div
            className={`flex ${
              index === tabIndex ?
              "text-[#7900BA] border-b-[1px] border-[#7900BA]"
            : 'text-[#767F8C] border-b-[1px] border-[#ffffff] '} pb-2 items-center gap-1`}
            key={index}
            onClick={() => handleTabs(index)}
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
