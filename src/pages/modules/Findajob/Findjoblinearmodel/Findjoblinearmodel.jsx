import React from 'react'
import { TfiLocationPin } from "react-icons/tfi";
import { TbCurrencyRupee } from "react-icons/tb";
import { CiCalendar } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";
import instagram from "../../../../assets/instagram.png"
import dribbble from "../../../../assets/dribbble.png"
import reddit from "../../../../assets/reddit.png"
import slack from "../../../../assets/slack.png"
import ulogo from "../../../../assets/ULogo.png"
import twitter from "../../../../assets/twitter.png"
import youtube from "../../../../assets/youtube.png"
import microsoft from "../../../../assets/microsoft.png"
import job from "../../../../assets/job.png"
import fb from "../../../../assets/FbLogo.png"
import uplogo from "../../../../assets/UpLogo.png"
import apple from "../../../../assets/appleLogo.png"
import { useNavigate } from 'react-router-dom';
const companydetails= [
    {
        name:"Dribbble",
        role:"Senior UX Designer",
        jobtype:"Full-Time",
        location:"California",
        salary:"15LPA",
        daysago:"5day ago",
        image: dribbble,
    },
    {
        name:"Reddit",
        role:"Markiting Officer",
        jobtype:"Full-Time",
        location:"United Kingdom of Great Britain",
        salary:"25LPA",
        daysago:"5day ago",
        image: reddit,
    }, {
        name:"Dribbble",
        role:"Senior UX Designer",
        jobtype:"Full-Time",
        location:"China",
        salary:"15LPA",
        daysago:"5day ago",
        image: ulogo,
    },
    {
        name:"Slack",
        role:"Networking Engineer",
        jobtype:"Full-Time",
        location:"Germany",
        salary:"15LPA",
        daysago:"5day ago",
        image: slack,
    },
    {
        name:"Twitter",
        role:"Senior UX Designer",
        jobtype:"Full-Time",
        location:"Canada",
        salary:"15LPA",
        daysago:"5day ago",
        image: twitter,
    },
    {
        name:"Instagram",
        role:"Frontend Engineer",
        jobtype:"Full-Time",
        location:"Australia",
        salary:"15LPA",
        daysago:"5day ago",
        image: instagram,
    },
    {
        name:"You Tube",
        role:"Interaction Designer",
        jobtype:"Full-Time",
        location:"Germany",
        salary:"15LPA",
        daysago:"5day ago",
        image: youtube,
    },
    {
        name:"Freepik",
        role:"Visual Designer",
        jobtype:"Full-Time",
        location:"China",
        salary:"10LPA",
        daysago:"5day ago",
        image: job,
    },
    {
        name:"Microsoft",
        role:"Product Designer",
        jobtype:"Full-Time",
        location:"Australia",
        salary:"15LPA",
        daysago:"5day ago",
        image: microsoft,
    },
    {
        name:"Facbook",
        role:" UX Designer",
        jobtype:"Full-Time",
        location:"China",
        salary:"15LPA",
        daysago:"5day ago",
        image: fb,
    },
    {
        name:"Up Wprk",
        role:"Technical Support",
        jobtype:"Full-Time",
        location:"France",
        salary:"15LPA",
        daysago:"5day ago",
        image: uplogo,
    },
    {
        name:"Apple",
        role:"Designer",
        jobtype:"Full-Time",
        location:"India",
        salary:"15LPA",
        daysago:"5day ago",
        image: apple,
    },
    {
        name:"Dribbble",
        role:"Senior UX Designer",
        jobtype:"Full-Time",
        location:"United Kingdom of Great Britain",
        salary:"25 LPA",
        daysago:"1 days ago",
        image: dribbble,
    },

]


const Findjoblinearmodel = () => {

    const navigate = useNavigate();
    const applyhandeljobdetails = ()=>{
        navigate("/jobdetails");
    }

  return (
    <div>
        
    <div className="mx-52 p-7 mb-8  ">
        {companydetails.map((item,idx)=>(

     <div  key={idx} className="mt-6 cursor-defaul">
            
            <div   className=" flex justify-between items-center px-4  rounded-md border  shadow-lg hover:border-blue-500 " >
                
               <div className="bg-blue-300" >
                  <img className="bg-blue-300" src={item.image} alt="" />
               </div>
                <div  className=" w-3/4 mt-1 px-10" >
                    <h1 className="text-[#191F33] font-inter font-medium text-[20px]/[32px]" >
                    {item.role} <span className="bg-[#9a9ca0] text-blue-200 px-2 py-1 rounded-xl mt-1 text-sm font-medium">{item.jobtype}</span></h1>
                      <h2 className="text-[#191F33] font-inter font-light text-[20px]/[32px]" >{item.name}</h2>
                   {/* <div className="flex  text-[#636A80] font-inter items-center gap-3  mt-1"> 
                    <h4 className=" py-1 px-2 rounded-md border border-black " >Javascript</h4>
                    <h4 className=" py-1 px-2 rounded-md border border-black " >React.js</h4>
                    <h4 className=" py-1 px-2 rounded-md border border-black " >Tailwind CSS</h4>
                    <h4 className=" py-1 px-2 rounded-md border border-black " >GIT</h4>

                   </div> */}
                   <div className="flex  justify-start  items-center  text-[#636A80] font-inter  mt-1 mb-4 ">
                   <TfiLocationPin className='w-5  text-2xl font-semibold ' /><p className=" text-sm h-11 ml-1 flex items-center w-[160px]"> {item.location} </p>
                   <TbCurrencyRupee className='w-5  text-2xl font-semibold ' /> <p className=" text-sm h-11 ml-1 flex items-center w-[80px]">{item.salary}</p>
                   <CiCalendar className='w-5  text-2xl font-semibold ' /><p className=" text-sm h-11 ml-1 flex items-center w-[80px]">{item.daysago}</p>
                    </div>
                </div>

                <div className="flex items-center justify-between w-[35%] gap-4" >
                     <h1 className="items-center hover:bg-blue-500 text-2xl rounded-sm"><FaRegBookmark/></h1>   
                     <button onClick={applyhandeljobdetails}
                       className="w-44 bg-[#DCBDED] px-5 py-3 rounded text-[#7900BA] font-inter font-semibold text-[16px]/[24px] border  border-blue-500  hover:bg-blue-500">
                        Apply</button>
                </div>
            </div>
        </div>

))}

        </div>
        
 </div>
  )
}

export default Findjoblinearmodel