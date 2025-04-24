import React, { useState } from 'react'
import bro from '../../../../../assets/bro.png';
import briefcase from '../../../../../assets/briefcase.png';
import buildingIcon from '../../../../../assets/buildingIcon.png';
import userIcon from '../../../../../assets/user_icon.png';
import { FaSearch } from "react-icons/fa";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';


const PostAJob = () => {
  return (
    <div className='bg-[#F1F2F4] w-full pl-32 pr-32  h-[700px] pt-10'>
             <div className='flex justify-center  gap-20'>
               <div className='mt-12'>
                 <h1 className='font-medium leading-tight text-[48px]'>Hire Smarter. Grow <br/>Faster. </h1>
                 <p className='pt-4 text-gray-500'>Connect with top talent in minutes. Post jobs, manage<br/> applications, and build your dream team all in one place.!</p>
   
                 
                <button type='button' className='bg-[#6712B9] w-[100px] h-[56px] p-2 pl-4 pr-4 mt-5 rounded-[4px] text-white'>Find Job</button>
               
                 <p className='flex gap-1 pt-4 pb-10 text-sm font-medium text-gray-600'> <span className='text-gray-400'>Suggestion:</span>Designer, Programming,<span className='text-[#6712B9]'>Digita Marketing</span>,Video,Animation</p>
   
                
               </div>
   
   
               <div>
                 <img src={bro} alt=""  />
               </div>
   
             </div>
   
             <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
   
               <div className="flex gap-10 justify-center items-center  h-[90px] rounded-lg bg-white border shadow-md ">
                 <img className=' text-[#6712B9] bg-gray-100 rounded-md w-14 p-2 h-14' src={briefcase} alt="" />
                 <span>
                   <h5 className='font-bold text-lg'>1,75,324</h5>
                   <p className='text-gray-500'>Live job</p>
                 </span>
               </div>
               <div className="flex gap-10 justify-center items-center  h-[90px] rounded-lg bg-white border shadow-md ">
                 <img className=' text-[#6712B9] bg-gray-100 rounded-md w-14 p-2 h-14' src={buildingIcon} alt="" />
                 <span>
                   <h5 className='font-bold text-lg'>97,345</h5>
                   <p className='text-gray-500'>Companies</p>
                 </span>
               </div>
               <div className="flex gap-10 justify-center items-center  h-[90px] rounded-lg bg-white border shadow-md ">
                 <img className=' text-[#6712B9] bg-gray-100 rounded-md w-14 p-2 h-14' src={userIcon} alt="" />
                 {/* <FontAwesomeIcon icon={faUserGroup} /> */}
                 <span>
                   <h5 className='font-bold text-lg'>38,47,154</h5>
                   <p className='text-gray-500'>Candidates</p>
                 </span>
               </div>
   
               <div className="flex gap-10 justify-center items-center  h-[90px] rounded-lg bg-white border shadow-md ">
                 <img className=' text-[#6712B9] bg-gray-100 rounded-md w-14 p-2 h-14' src={briefcase} alt="" />
                 <span>
                   <h5 className='font-bold text-lg'>7,532</h5>
                   <p className='text-gray-500'>New Jobs</p>
                 </span>
               </div>
   
   
   
             </div>
   
           </div>
  )
}

export default PostAJob
