import React ,{useState} from "react";
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

// const company = [
//   {
//     "companyName": "Tech Innovations",
//     "role": "Frontend Developer",
//     "location": "San Francisco, CA",
//     "CTC": "12 LPA",
//     "daysAgo": "3 days ago",
//     "skills": ["React", "JavaScript", "HTML", "CSS", "Git"],
//     "jobType": "Full-time",
//     "image": ""
//   },
//   {
//     "companyName": "DataBridge Solutions",
//     "role": "Backend Developer",
//     "location": "Bangalore, India",
//     "CTC": "15 LPA",
//     "daysAgo": "5 days ago",
//     "skills": ["Node.js", "Express.js", "MongoDB", "Docker", "Git"],
//     "jobType": "Full-time",
//     "image": ""
//   },
//   {
//     "companyName": "CodeCrafters Inc.",
//     "role": "Full Stack Developer",
//     "location": "Remote",
//     "CTC": "18 LPA",
//     "daysAgo": "1 day ago",
//     "skills": ["React", "Node.js", "TypeScript", "AWS", "Git"],
//     "jobType": "Full-time",
//     "image": ""
//   },
//   {
//     "companyName": "AppDynamics",
//     "role": "Mobile Developer",
//     "location": "New York, NY",
//     "CTC": "10 LPA",
//     "daysAgo": "7 days ago",
//     "skills": ["React Native", "Kotlin", "Swift", "Git", "Firebase"],
//     "jobType": "Part-time",
//     "image": ""
//   },
//   {
//     "companyName": "DevHub",
//     "role": "DevOps Engineer",
//     "location": "Austin, TX",
//     "CTC": "14 LPA",
//     "daysAgo": "2 days ago",
//     "skills": ["AWS", "Kubernetes", "Terraform", "CI/CD", "Git"],
//     "jobType": "Full-time",
//     "image": ""
//   },
//   {
//     "companyName": "Cloudify Tech",
//     "role": "Cloud Engineer",
//     "location": "Seattle, WA",
//     "CTC": "20 LPA",
//     "daysAgo": "4 days ago",
//     "skills": ["Azure", "Kubernetes", "Docker", "Python", "Git"],
//     "jobType": "Full-time",
//     "image": ""
//   }
// ];




const Jobalerts = () => {

    const [showModel, setShowModel] = useState(false)

  return (
    <>
      <Header/>
               <div className=" flex justify-around ml-32 pb-2" >
                <h1 class="text-xl font-medium">Job Alerts<span className=" text-base text-[#5E6670]">( 3 new jobs)</span></h1>
                <h3 className="text-l flex items-center gap-1 text-[#5E6670]"><span className="text-xl"><BiEditAlt/></span>Edit job alert</h3>
                </div>
  
        

          <div className="ml-[430px] mr-[300px] mt-3 mb-8  ">
              
              <div className=" flex justify-between items-center px-4  rounded-md border border-black shadow-lg hover:border-blue-500  hover: scale-105" >
                 <div>
                    <img src={instagram} alt="" />
                 </div>
                  <div  className="mt-1" >
                      <h1 className="text-[#191F33] font-inter font-medium text-[20px]/[32px]" >Frontend developer <span className="bg-[#9a9ca0] text-blue-200 px-2 py-1 rounded-xl mt-1 text-sm font-medium">Full Time</span></h1>
                        <h2 className="text-[#191F33] font-inter font-light text-[20px]/[32px]" >Meta</h2>
                     <div className="flex  text-[#636A80] font-inter items-center gap-3  mt-1"> 
                      <h4 className=" py-1 px-2 rounded-md border border-black " >Javascript</h4>
                      <h4 className=" py-1 px-2 rounded-md border border-black " >React.js</h4>
                      <h4 className=" py-1 px-2 rounded-md border border-black " >Tailwind CSS</h4>
                      <h4 className=" py-1 px-2 rounded-md border border-black " >GIT</h4>

                     </div>
                     <div className="flex  text-[#636A80] font-inter gap-4 mt-1 mb-4 ">
                      <p className="flex items-center"><TfiLocationPin/> Bangalore, India </p>
                      <p className="flex items-center"><TbCurrencyRupee/>30 LPA</p>
                      <p className="flex items-center"><CiCalendar/> 4 days ago</p>
                      </div>
                  </div>

                  <div className="flex items-center gap-4" >
                       <h1 className="items-center hover:bg-blue-500 text-2xl rounded-sm"><FaRegBookmark/></h1>   
                       <button onClick={()=> setShowModel(true)}
                         className="w-44 bg-[#DCBDED] px-5 py-3 rounded text-[#7900BA] font-inter font-semibold text-[16px]/[24px] border  border-blue-500  hover:bg-blue-500" >Apply</button>
                  </div>
              </div>
          </div>
        <ApplyButton isVisible={showModel} onclose={()=>setShowModel(false)} />

        <div className="ml-[430px] mr-[300px] mt-3 mb-8  ">
              
              <div className=" flex justify-between items-center px-4  rounded-md border border-black shadow-lg hover:border-blue-500  hover: scale-105" >
                 <div>
                    <img src={twitter} alt="" />
                 </div>
                  <div  className="mt-1" >
                      <h1 className="text-[#191F33] font-inter font-medium text-[20px]/[32px]" >Software Developer <span className="bg-[#9a9ca0] text-blue-200 px-2 py-1 rounded-xl mt-1 text-sm font-medium">Full Time</span></h1>
                        <h2 className="text-[#191F33] font-inter font-light text-[20px]/[32px]" >Twitter</h2>
                     <div className="flex  text-[#636A80] font-inter items-center gap-3  mt-1"> 
                      <h4 className=" py-1 px-2 rounded-md border border-black " >Javascript</h4>
                      <h4 className=" py-1 px-2 rounded-md border border-black " >Node</h4>
                      <h4 className=" py-1 px-2 rounded-md border border-black " >C++</h4>
                      <h4 className=" py-1 px-2 rounded-md border border-black " >System design</h4>

                     </div>
                     <div className="flex  text-[#636A80] font-inter gap-4 mt-1 mb-4 ">
                      <p className="flex items-center"><TfiLocationPin/> Remote </p>
                      <p className="flex items-center"><TbCurrencyRupee/>15 LPA</p>
                      <p className="flex items-center"><CiCalendar/> 4 days ago</p>
                      </div>
                  </div>

                  <div className="flex items-center gap-4" >
                       <h1 className="items-center hover:bg-blue-500 text-2xl rounded-sm"><FaRegBookmark/></h1>   
                       <button onClick={()=> setShowModel(true)}
                         className="w-44 bg-[#DCBDED] px-5 py-3 rounded text-[#7900BA] font-inter font-semibold text-[16px]/[24px] border  border-blue-500  hover:bg-blue-500" >Apply</button>
                  </div>
              </div>
          </div>
        <ApplyButton isVisible={showModel} onclose={()=>setShowModel(false)} />

        <div className="ml-[430px] mr-[300px] mt-3 mb-8  ">
              
              <div className=" flex justify-between items-center px-4  rounded-md border border-black shadow-lg hover:border-blue-500  hover: scale-105" >
                 <div>
                    <img src={youtube} alt="" />
                 </div>
                  <div  className="mt-1" >
                      <h1 className="text-[#191F33] font-inter font-medium text-[20px]/[32px]" >Frontend developer <span className="bg-[#9a9ca0] text-blue-200 px-2 py-1 rounded-xl mt-1 text-sm font-medium">Full Time</span></h1>
                        <h2 className="text-[#191F33] font-inter font-light text-[20px]/[32px]" >YouTube</h2>
                     <div className="flex  text-[#636A80] font-inter items-center gap-3  mt-1"> 
                      <h4 className=" py-1 px-2 rounded-md border border-black " >Javascript</h4>
                      <h4 className=" py-1 px-2 rounded-md border border-black " >React.js</h4>
                      <h4 className=" py-1 px-2 rounded-md border border-black " >Tailwind CSS</h4>
                      <h4 className=" py-1 px-2 rounded-md border border-black " >GIT</h4>

                     </div>
                     <div className="flex  text-[#636A80] font-inter gap-4 mt-1 mb-4 ">
                      <p className="flex items-center"><TfiLocationPin/> Bangalore, India </p>
                      <p className="flex items-center"><TbCurrencyRupee/>30 LPA</p>
                      <p className="flex items-center"><CiCalendar/> 4 days ago</p>
                      </div>
                  </div>

                  <div className="flex items-center gap-4" >
                       <h1 className="items-center hover:bg-blue-500 text-2xl rounded-sm"><FaRegBookmark/></h1>   
                       <button onClick={()=> setShowModel(true)}
                         className="w-44 bg-[#DCBDED] px-5 py-3 rounded text-[#7900BA] font-inter font-semibold text-[16px]/[24px] border  border-blue-500  hover:bg-blue-500" >Apply</button>
                  </div>
              </div>
          </div>
        <ApplyButton isVisible={showModel} onclose={()=>setShowModel(false)} />

        <div className="ml-[430px] mr-[300px] mt-3 mb-8  ">
              
              <div className=" flex justify-between items-center px-4  rounded-md border border-black shadow-lg hover:border-blue-500  hover: scale-105" >
                 <div>
                    <img src={apple} alt="" />
                 </div>
                  <div  className="mt-1" >
                      <h1 className="text-[#191F33] font-inter font-medium text-[20px]/[32px]" >Frontend developer <span className="bg-[#9a9ca0] text-blue-200 px-2 py-1 rounded-xl mt-1 text-sm font-medium">Full Time</span></h1>
                        <h2 className="text-[#191F33] font-inter font-light text-[20px]/[32px]" >Apple</h2>
                     <div className="flex  text-[#636A80] font-inter items-center gap-3  mt-1"> 
                      <h4 className=" py-1 px-2 rounded-md border border-black " >Javascript</h4>
                      <h4 className=" py-1 px-2 rounded-md border border-black " >React.js</h4>
                      <h4 className=" py-1 px-2 rounded-md border border-black " >Tailwind CSS</h4>
                      <h4 className=" py-1 px-2 rounded-md border border-black " >GIT</h4>

                     </div>
                     <div className="flex  text-[#636A80] font-inter gap-4 mt-1 mb-4 ">
                      <p className="flex items-center"><TfiLocationPin/> Bangalore, India </p>
                      <p className="flex items-center"><TbCurrencyRupee/>30 LPA</p>
                      <p className="flex items-center"><CiCalendar/> 4 days ago</p>
                      </div>
                  </div>

                  <div className="flex items-center gap-4" >
                       <h1 className="items-cente focus:bg-blue-500 text-2xl rounded-sm"><FaRegBookmark/></h1>   
                       <button onClick={()=> setShowModel(true)}
                         className="w-44 bg-[#DCBDED] px-5 py-3 rounded text-[#7900BA] font-inter font-semibold text-[16px]/[24px] border  border-blue-500  hover:bg-blue-500" >Apply</button>
                  </div>
              </div>
          </div>
        <ApplyButton isVisible={showModel} onclose={()=>setShowModel(false)} />
    </>  
     
    );
};

export default Jobalerts;
