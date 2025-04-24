import React, { useState } from 'react'
import { PiBuildingOffice } from 'react-icons/pi';
import { FaArrowRight } from 'react-icons/fa';
import { FaPenNib } from 'react-icons/fa';
import { LuMonitorPlay } from "react-icons/lu";
import { FaCode } from 'react-icons/fa';
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaMusic } from 'react-icons/fa';
import { RiFirstAidKitLine } from 'react-icons/ri';
import { FaDatabase } from 'react-icons/fa';




const PopularCategory = () => {
  return (
    <div className='h-[450px] bg-[#FFFF] w-full pl-32 pr-32 pt-10'>
             <div className='flex justify-between'>
               <h1 className='font-normal text-[35px] pb-6'>Popular Category</h1>
               <button className="flex h-10 pl-4 pr-4 items-center text-[#6712B9] rounded-md border-2">
                 <span>View All</span>
                 <FaArrowRight className="ml-2" />
               </button>
             </div>
   
             <div>
               <div className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-4 gap-12 p-6">
   
                 <div className="flex gap-8 justify-center items-center  h-[90px] w-[260px] rounded-lg bg-white ">
                   <FaPenNib className=' text-[#6712B9] bg-gray-100 w-12 p-2 h-10 rounded-md' />
                   <span>
                     <h5 className='text-lg font-medium'>Graphics & Design</h5>
                     <p className='text-gray-500'>357 Open position</p>
                   </span>
                 </div>
                 <div className="flex gap-8 justify-center items-center  h-[90px] w-[260px] rounded-lg bg-white ">
                   <FaCode className=' text-[#6712B9] bg-gray-100 w-12 p-2 h-10 rounded-md' />
                   <span>
                     <h5 className='text-lg font-medium'>Code & Programing</h5>
                     <p className='text-gray-500'>312 Open position</p>
                   </span>
                 </div>
                 <div className="flex gap-8 justify-center items-center  h-[90px] w-[260px] rounded-lg bg-white">
                   <HiOutlineSpeakerphone className='text-[#6712B9] bg-gray-100 w-12 p-2 h-10 rounded-md' />
                   <span>
                     <h5 className='text-lg font-medium'>Digital Marketing</h5>
                     <p className='text-gray-500'>297 Open position</p>
                   </span>
                 </div>
   
                 <div className="flex gap-8 justify-center items-center  h-[90px] w-[260px] rounded-lg bg-white ">
                   <LuMonitorPlay className=' text-[#6712B9] bg-gray-100 w-12 p-2 h-10 rounded-md' />
                   <span>
                     <h5 className='text-lg font-medium'>Video & Animation</h5>
                     <p className='text-gray-500'>247 Open position</p>
                   </span>
                 </div>
   
   
   
               </div>
   
               <div className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-4 gap-12 p-6">
   
                 <div className="flex gap-8 justify-center items-center  h-[90px] w-[260px] rounded-lg bg-white">
                   <FaMusic className=' text-[#6712B9] bg-gray-100 w-12 p-2 h-10 rounded-md' />
                   <span>
                     <h5 className='text-lg font-medium'>Data Science and Analytics</h5>
                     <p className='text-gray-500'>204 Open position</p>
                   </span>
                 </div>
                 <div className="flex gap-8 justify-center items-center  h-[90px] w-[260px] rounded-lg bg-white">
                   <PiBuildingOffice className='text-[#6712B9] bg-gray-100 w-12 p-2 h-10 rounded-md' />
                   <span>
                     <h5 className='text-lg font-medium'>UI/UX Design</h5>
                     <p className='text-gray-500'>167 Open position</p>
                   </span>
                 </div>
                 <div className="flex gap-6 justify-center items-center  h-[90px] w-[260px] rounded-lg bg-white">
                   <RiFirstAidKitLine className=' text-[#6712B9] bg-gray-100 w-12 p-2 h-10 rounded-md' />
                   <span>
                     <h5 className='text-lg font-medium'>Blockchain Technology</h5>
                     <p className='text-gray-500'>125 Open position</p>
                   </span>
                 </div>
   
                 <div className="flex gap-6 justify-center items-center  h-[90px] w-[260px] rounded-lg bg-white border shadow-md ">
                   <FaDatabase className=' text-[#FFFFFF] bg-[#6712B9] w-12 p-2 h-10 rounded-md' />
                   <span>
                     <h5 className='text-lg font-medium text-[#6712B9]'>Cybersecurity</h5>
                     <p className='text-gray-500'>57 Open position</p>
                   </span>
                 </div>
               </div>
             </div>
             <div>
   
             </div>
           </div>
  )
}

export default PopularCategory
