import React from 'react'

import arrow from '../../../../../assets/arrow.png';
import arrow_2 from '../../../../../assets/Arrows-2.png';
import circle_wavy from '../../../../../assets/circle-wavy.png';
import search from '../../../../../assets/search.png';
import user_plus from '../../../../../assets/user-Plus.png';

import { FaCloudUploadAlt } from 'react-icons/fa';


const TechnoHireWork = () => {
  return (
   
          <div className='h-[542px] bg-[#F1F2F4] w-full pl-32 pr-32 relative'>
                <h1 className='flex justify-center items-center font-normal text-[35px] pb-2 pt-10'>How TechnoHire work</h1>
      
                <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      
                  <div className="flex flex-col gap-6 justify-center items-center h-[300px] w-[250px] rounded-lg">
                    <div className='p-4 mt-10 bg-[#FFFFFF] rounded-full'>
                      <img className='w-[40px] h-[40px]' src={user_plus} alt="" />
                    </div>
                    <h5 className='font-medium text-lg'>Create Account</h5>
                    <p className='text-gray-400 text-sm p-4 align-middle'>
                      Join us today to unlock a world of career possibilities. Setting up is quick and easy!
                    </p>
      
                    {/* Arrow between steps */}
                    <div className="absolute top-[185px] left-[320px]">
                      <img src={arrow} alt="arrow" className="w-[190px] h-8" />
                    </div>
                  </div>
      
      
                  <div className="flex flex-col gap-6 justify-center items-center  h-[300px] w-[250px] rounded-lg bg-white">
                    <div className='bg-[#6712B9] p-4 mt-10 rounded-full'>
                      <FaCloudUploadAlt className='w-[40px] h-[40px] text-[#FFFFFF] ' />
                    </div>
      
                    <h5 className='font-medium text-lg'>Upload CV/Resume</h5>
                    <p className=' text-gray-400 text-sm p-4 align-middle'>Showcase your skills and experience by uploading your latest CV. Let your profile stand out!</p>
      
                    <div className="absolute top-[16rem] left-[640px]">
                      <img src={arrow_2} alt="arrow" className="w-[190px] h-8"/>
                    </div>
                  </div>
      
      
      
                  <div className="flex flex-col gap-6 justify-center items-center  h-[300px] w-[250px] rounded-lg ">
                    <div className='p-2 mt-10 bg-[#FFFFFF] rounded-full'>
                      <img className='w-[60px] h-[60px]' src={search} alt="" />
                    </div>
                    <h5 className='font-medium text-lg'>Find suitable job</h5>
                    <p className=' text-gray-400 text-sm p-4 align-center'>Discover roles that match your skills and career goals. Your perfect fit is just a search away!,</p>
                    <div className="absolute top-[185px] left-[940px]">
                      <img src={arrow} alt="arrow" className="w-[190px] h-8" />
                    </div>
                  </div>
      
                  <div className="flex flex-col gap-6 justify-center items-center  h-[300px] w-[250px] rounded-lg">
                    <div className='p-4 mt-10 bg-[#FFFFFF] rounded-full'>
                      <img className='w-[40px] h-[40px]' src={circle_wavy} alt="" />
                    </div>
                    <h5 className='font-medium text-lg'>Apply Job</h5>
                    <p className=' text-gray-400 text-sm p-4 align-center'>Ready to take the next step? Submit your application with a click and get closer to your dream job!</p>
                  </div>
                </div>
              </div>
 
  )
}

export default TechnoHireWork
