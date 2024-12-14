import React from 'react'
import { TfiLocationPin } from "react-icons/tfi";
import dribbble from "../../../../assets/dribbble.png"
import reddit from "../../../../assets/reddit.png"
import slack from "../../../../assets/slack.png"
import ulogo from "../../../../assets/ULogo.png"
import twitter from "../../../../assets/twitter.png"
import youtube from "../../../../assets/youtube.png"
import instagram from "../../../../assets/instagram.png"
import microsoft from "../../../../assets/microsoft.png"
import job from "../../../../assets/job.png"
import fb from "../../../../assets/FbLogo.png"
import uplogo from "../../../../assets/UpLogo.png"
import apple from "../../../../assets/appleLogo.png"
import { Link } from 'react-router-dom';

const companydetails= [
    {
        name:"Dribbble",
        role:"Senior UX Designer",
        jobtype:"Full-Time",
        location:"California",
        salary:"15LPA",
        image: dribbble,
    },
    {
        name:"Reddit",
        role:"Markiting Officer",
        jobtype:"Full-Time",
        location:"United Kingdom of Great Britain",
        salary:"25LPA",
        image: reddit,
    }, {
        name:"Dribbble",
        role:"Senior UX Designer",
        jobtype:"Full-Time",
        location:"China",
        salary:"15LPA",
        image: ulogo,
    },
    {
        name:"Slack",
        role:"Networking Engineer",
        jobtype:"Full-Time",
        location:"Germany",
        salary:"15LPA",
        image: slack,
    },
    {
        name:"Twitter",
        role:"Senior UX Designer",
        jobtype:"Full-Time",
        location:"Canada",
        salary:"15LPA",
        image: twitter,
    },
    {
        name:"Instagram",
        role:"Frontend Engineer",
        jobtype:"Full-Time",
        location:"Australia",
        salary:"15LPA",
        image: instagram,
    },
    {
        name:"You Tube",
        role:"Interaction Designer",
        jobtype:"Full-Time",
        location:"Germany",
        salary:"15LPA",
        image: youtube,
    },
    {
        name:"Freepik",
        role:"Visual Designer",
        jobtype:"Full-Time",
        location:"China",
        salary:"10 LPA",
        image: job,
    },
    {
        name:"Microsoft",
        role:"Product Designer",
        jobtype:"Full-Time",
        location:"Australia",
        salary:"15LPA",
        image: microsoft,
    },
    {
        name:"Facbook",
        role:" UX Designer",
        jobtype:"Full-Time",
        location:"China",
        salary:"15LPA",
        image: fb,
    },
    {
        name:"Up Wprk",
        role:"Technical Support",
        jobtype:"Full-Time",
        location:"France",
        salary:"15LPA",
        image: uplogo,
    },
    {
        name:"Apple",
        role:"Designer",
        jobtype:"Full-Time",
        location:"India",
        salary:"15LPA",
        image: apple,
    },
    {
        name:"Dribbble",
        role:"Senior UX Designer",
        jobtype:"Full-Time",
        location:"United Kingdom of Great Britain",
        salary:"25 LPA",
        image: dribbble,
    },

]
const Findjobboxmodel = () => {
    
  return (
    <div>
       

        <div className="px-9 flex flex-wrap gap-[2%] mx-52   mb-[10rem]  " >
        {companydetails.map((items ,idx)=>(

         <div key={idx}  className="flex flex-col  items-start mt-12 p-4 bg-[#EDEFF5] hover:bg-white hover:border hover:border-blue-400  w-[32%] rounded-md" >
        <Link to="/jobdetails">

             <div className="flex gap-2 " > 
             <div>  <img src={items.image} alt="pic" /></div>
              <div className=" flex flex-col gap-2" >

            <h1 className= " px-3 font-inter font-medium text-xl text-[#18191C]" >{items.name}</h1> 
               <p className="flex px-2    h-12 text-sm font-inter font-normal  text-[#939AAD]" ><TfiLocationPin className=" text-lg font-inter font-normal text-[#939AAD]  " size={20} />
               {items.location}</p>
            </div>
             </div>
        
            <div className="px-2 font-inter font-medium text-xl mt-2 h-8 text-[#191F33] " >{items.role}</div>
            <div className="flex items-start gap-16 px-2  mt-3  font-inter font-light  text-[#636A80] " >
                    <p className='' >{items.jobtype}</p>
                    <p>{items.salary}</p>
             </div>
             </Link>

        </div>
            ))}
            
         </div> 
         </div>
  )
}

export default Findjobboxmodel