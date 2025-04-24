import React, { useState } from 'react'
import UpLogo from '../../../../../assets/UpLogo.png';
import crownLogo from '../../../../../assets/crownLogo.png';
import wheel from '../../../../../assets/wheel.png';
import slack from '../../../../../assets/SlackLogo.png';
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';




const TopCompanies = () => {
  return (
     <div className='h-[650px] bg-[#F1F2F4] w-full pl-32 pr-32 pt-10'>
             <div className='flex justify-between'>
               <h1 className='font-normal text-[35px] pb-6>Top Companies'>Top Companies</h1>
   
               <div className="flex  space-x-4">
                 <button className="p-4 text-[#6712B9] bg-gray-200 rounded-md ">
                   <FaArrowLeft className="text-lg" />
                 </button>
   
                 <button className="p-4 text-[#6712B9] bg-gray-200 rounded-md">
                   <FaArrowRight className="text-lg" />
                 </button>
               </div>
             </div>
   
             <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
               <div className="flex flex-col border-2  gap-6 h-[200px] w-[250px] rounded-lg bg-white">
                 <div className="flex justify-start items-center gap-8 p-6 rounded-lg bg-white">
                   <div className='bg-[#EA4C89] pt-2 pr-4 pb-2 pl-4'>
                     <img className='w-[26px] h-[26px]' src={wheel} alt="wheel.png" />
                   </div>
                   <span>
                     <h5 className='text-lg font-medium'>Drible</h5>
                     <div className="flex items-center">
                       <CiLocationOn className="text-[#939AAD] text-sm" />
                       <span className="font-medium text-gray-400 text-sm">Pune</span>
                     </div>
                   </span>
                 </div>
                 <div className='flex justify-center items-center '>
                   <button className="bg-white rounded-[3px] border-2 text-[#6712B9] h-[48px] w-[200px]">Open Position</button>
                 </div>
               </div>
   
               <div className="flex flex-col border-2 gap-6 h-[200px] w-[250px] rounded-lg bg-white">
                 <div className="flex justify-start items-center gap-8 p-6 rounded-lg bg-white">
                   <div className='bg-[#6FDA44] pt-2 pr-4 pb-2 pl-4'>
                     <img className='w-[32px] h-[32px]' src={UpLogo} alt="UpLogo.png" />
                   </div>
                   <span>
                     <h5 className='text-lg font-medium'>UpWork</h5>
                     <div className="flex items-center">
                       <CiLocationOn className="text-[#939AAD] text-sm" />
                       <span className="font-medium text-gray-400 text-sm">Mumbai</span>
                     </div>
                   </span>
                 </div>
                 <div className='flex justify-center items-center'>
                   <button className="bg-[#F5EBFFB2] rounded-[3px] border-2 text-[#6712B9] h-[48px] w-[200px]">Open Position</button>
                 </div>
               </div>
   
               <div className="flex flex-col border-2 border-[#6712B9] shadow-lg  gap-6 h-[200px] w-[250px] rounded-lg bg-white">
                 <div className="flex justify-start items-center gap-8 p-6 rounded-lg bg-white">
                   <div className='bg-[#ebe8e9] pt-2 pr-4 pb-2 pl-4'>
                     <img className='w-[26px] h-[26px]' src={slack} alt="wheel.png" />
                   </div>
                   <span>
                     <h5 className='text-lg font-medium'>Slack</h5>
                     <div className="flex items-center">
                       <CiLocationOn className="text-[#939AAD] text-sm" />
                       <span className="font-medium text-gray-400 text-sm">Nagpur</span>
                     </div>
                   </span>
                 </div>
                 <div className='flex justify-center items-center'>
                   <button className="bg-[#6712B9]  text-[#FFFFFF] h-[48px] w-[200px] rounded-[4px]">Open Position</button>
                 </div>
               </div>
   
               <div className="flex flex-col border-2 gap-6 h-[200px] w-[250px] rounded-lg bg-white">
                 <div className="flex justify-start items-center gap-8 p-6 rounded-lg bg-white">
                   <div className='bg-[#1E60C6] pt-2 pr-4 pb-2 pl-4'>
                     <img className='w-[26px] h-[26px]' src={crownLogo} alt="crown.png" />
                   </div>
                   <span>
                     <h5 className='text-lg font-medium'>Freepik</h5>
                     <div className="flex items-center">
                       <CiLocationOn className="text-[#939AAD] text-sm" />
                       <span className="font-medium text-gray-400 text-sm">Nagpur</span>
                     </div>
                   </span>
                 </div>
                 <div className='flex justify-center items-center'>
                   <button className="bg-[#F5EBFFB2] rounded-[3px] border-2 text-[#6712B9] h-[48px] w-[200px]">Open Position</button>
                 </div>
               </div>
   
             </div>
   
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 ">
   
               <div className="flex flex-col border-2 gap-6 h-[200px] w-[250px] rounded-lg bg-white">
                 <div className="flex justify-start items-center gap-8 p-6 rounded-lg bg-white">
                   <div className='bg-[#EA4C89] pt-2 pr-4 pb-2 pl-4'>
                     <img className='w-[26px] h-[26px]' src={wheel} alt="wheel.png" />
                   </div>
                   <span>
                     <h5 className='text-lg font-medium'>Drible</h5>
                     <div className="flex items-center">
                       <CiLocationOn className="text-[#939AAD] text-sm" />
                       <span className="font-medium text-gray-400 text-sm">Pune</span>
                     </div>
                   </span>
                 </div>
                 <div className='flex justify-center items-center'>
                   <button className="bg-[#F5EBFFB2] rounded-[3px] border-2 text-[#6712B9] h-[48px] w-[200px]">Open Position</button>
                 </div>
               </div>
   
               <div className="flex flex-col border-2  gap-6 h-[200px] w-[250px] rounded-lg bg-white">
                 <div className="flex justify-start items-center gap-8 p-6 rounded-lg bg-white">
                   <div className='bg-[#6FDA44] pt-2 pr-4 pb-2 pl-4'>
                     <img className='w-[32px] h-[32px]' src={UpLogo} alt="UpLogo.png" />
                   </div>
                   <span>
                     <h5 className='text-lg font-medium'>UpWork</h5>
                     <div className="flex items-center">
                       <CiLocationOn className="text-[#939AAD] text-sm" />
                       <span className="font-medium text-gray-400 text-sm">Mumbai</span>
                     </div>
                   </span>
                 </div>
                 <div className='flex justify-center items-center'>
                   <button className="bg-[#F5EBFFB2] rounded-[3px] border-2 text-[#6712B9] h-[48px] w-[200px]">Open Position</button>
                 </div>
               </div>
   
               <div className="flex flex-col border-2  gap-6 h-[200px] w-[250px] rounded-lg bg-white">
                 <div className="flex justify-start items-center gap-8 p-6 rounded-lg bg-white">
                   <div className='bg-[#ebe8e9] pt-2 pr-4 pb-2 pl-4'>
                     <img className='w-[26px] h-[26px]' src={slack} alt="wheel.png" />
                   </div>
                   <span>
                     <h5 className='text-lg font-medium'>Slack</h5>
                     <div className="flex items-center">
                       <CiLocationOn className="text-[#939AAD] text-sm" />
                       <span className="font-medium text-gray-400 text-sm">Nagpur</span>
                     </div>
                   </span>
                 </div>
                 <div className='flex justify-center items-center'>
                   <button className="bg-[#F5EBFFB2] rounded-[3px] border-2 text-[#6712B9] h-[48px] w-[200px]">Open Position</button>
                 </div>
               </div>
   
               <div className="flex flex-col border-2   gap-6 h-[200px] w-[250px] rounded-lg bg-white">
                 <div className="flex justify-start items-center gap-8 p-6 rounded-lg bg-white">
                   <div className='bg-[#1E60C6] pt-2 pr-4 pb-2 pl-4'>
                     <img className='w-[26px] h-[26px]' src={crownLogo} alt="crown.png" />
                   </div>
                   <span>
                     <h5 className='text-lg font-medium'>Freepik</h5>
                     <div className="flex items-center">
                       <CiLocationOn className="text-[#939AAD] text-sm" />
                       <span className="font-medium text-gray-400 text-sm">Nagpur</span>
                     </div>
                   </span>
                 </div>
                 <div className='flex justify-center items-center'>
                   <button className="bg-[#F5EBFFB2] rounded-[3px] border-2 text-[#6712B9] h-[48px] w-[200px]">Open Position</button>
                 </div>
               </div>
   
             </div>
           </div>
  )
}

export default TopCompanies
