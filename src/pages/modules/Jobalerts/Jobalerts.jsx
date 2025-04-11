import React ,{ useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { TbCurrencyRupee } from "react-icons/tb";
import { CiCalendar } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";
import instagram from "../../../assets/instagram.png"
import twitter from "../../../assets/twitter.png"
import microsoft from "../../../assets/microsoft.png"
import { TfiLocationPin } from "react-icons/tfi";
import Editjobalertsuccessfully from "./Applybutton/Editjobalertsuccessfully";
import Header from "../../../components/header/Header";
import ApplyButton from "./Applybutton/Applybutton";
import youtube from "../../../assets/youtube.png"
import apple from "../../../assets/appleLogo.png"

const Jobalerts = () => {

    const [showModel, setShowModel] = useState(false)

  return (
    <>
      <Header/>
      <div className="flex justify-between items-center px-60 py-6" >
        <h1 className="text-2xl font-semibold text-[#191F33]">Job Alerts <span className="text-base text-[#5E6670]">(3 new jobs)</span></h1>
        <h3 className="text-lg flex items-center gap-2 text-[#5E6670] cursor-pointer"><BiEditAlt className="text-xl"/>Edit Job Alerts</h3>
      </div>

      {[{
        logo: instagram,
        title: "Frontend developer",
        company: "Meta",
        tags: ["Javascript", "React.js", "Tailwind CSS", "GIT"],
        location: "Bangalore, India",
        salary: "30 LPA",
        posted: "4 days ago"
      }, {
        logo: twitter,
        title: "Software Developer",
        company: "Twitter",
        tags: ["Javascript", "Node", "C++", "System design"],
        location: "Remote",
        salary: "15 LPA",
        posted: "4 days ago"
      }, {
        logo: youtube,
        title: "Frontend developer",
        company: "YouTube",
        tags: ["Javascript", "React.js", "Tailwind CSS", "GIT"],
        location: "Bangalore, India",
        salary: "30 LPA",
        posted: "4 days ago"
      }, {
        logo: apple,
        title: "Frontend developer",
        company: "Apple",
        tags: ["Javascript", "React.js", "Tailwind CSS", "GIT"],
        location: "Bangalore, India",
        salary: "30 LPA",
        posted: "4 days ago"
      }].map((job, index) => (
        <div key={index} className="px-60 mb-6">
          <div className="flex justify-between items-start p-4 rounded-xl border border-gray-200 shadow-md hover:border-[#8B5CF6] hover:shadow-lg transition-transform transform hover:scale-[1.02]">
            <img src={job.logo} alt="company logo" className="w-14 h-14" />
            <div className="flex-1 ml-6">
              <h1 className="text-lg font-semibold text-[#191F33] mb-1">{job.title} <span className="ml-2 bg-[#F2ECFD] text-[#7900BA] px-3 py-1 rounded-full text-sm font-medium">Full Time</span></h1>
              <h2 className="text-[#191F33] text-md mb-2">{job.company}</h2>
              <div className="flex flex-wrap gap-2 text-[#5E6670] text-sm mb-3">
                {job.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 border border-gray-300 rounded-lg">{tag}</span>
                ))}
              </div>
              <div className="flex gap-6 text-[#636A80] text-sm">
                <p className="flex items-center gap-1"><TfiLocationPin className="text-lg"/>{job.location}</p>
                <p className="flex items-center gap-1"><TbCurrencyRupee className="text-lg"/>{job.salary}</p>
                <p className="flex items-center gap-1"><CiCalendar className="text-lg"/>{job.posted}</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <FaRegBookmark className="text-xl text-[#636A80] hover:text-[#8B5CF6] cursor-pointer"/>
              <button onClick={() => setShowModel(true)} className="w-36 bg-[#DCBDED] hover:bg-[#8B5CF6] text-[#7900BA] hover:text-white px-4 py-2 rounded-lg border border-[#8B5CF6] font-semibold text-sm">Apply Now</button>
            </div>
          </div>
        </div>
      ))}

      <ApplyButton isVisible={showModel} onclose={() => setShowModel(false)} />
    </>
  );
};

export default Jobalerts;
