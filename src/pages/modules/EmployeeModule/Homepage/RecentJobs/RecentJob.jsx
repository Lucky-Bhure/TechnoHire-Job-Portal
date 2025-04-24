import React from 'react'
import FbLogo from '../../../../../assets/FbLogo.png';
import UpLogo from '../../../../../assets/UpLogo.png';
import ULogo from '../../../../../assets/ULogo.png';
import appleLogo from '../../../../../assets/appleLogo.png';
import GoogleLogo from '../../../../../assets/GoogleLogo.png';
import EmployersLogo from '../../../../../assets/EmployersLogo.png';
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from 'react-icons/fa';
import { FaRegBookmark } from "react-icons/fa";
import { FaCalendar } from 'react-icons/fa';



const RecentJob = () => {
  return (
     <div className='h-[800px] w-full pt-10 pl-32 pr-32 bg-white'>
              <h1 className='font-normal text-[35px] pb-6'>Recents Jobs</h1>
              <div className='flex flex-col gap-5'>
                <div className="flex gap-10 h-[90px] rounded-lg bg-white ">
                  <div className="flex items-start p-4">
                    <img className="h-16 w-16" src={UpLogo} alt="UP Logo" />
                    <div className="ml-4 flex-grow">
                      <div className="flex gap-2 justify-between pb-2">
                        <span className="text-xl font-semibold text-gray-800">Senior UX Designer</span>
                        <button className="px-2 font-medium  text-sm py-1 rounded-full bg-[#F5EBFFB2] text-[#6712B9] ">
                          Contract Base
                        </button>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <CiLocationOn className="text-[#C5C9D6] text-md font-bold" />
                          <span className="font-medium text-gray-400 text-sm">Nagpur</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-400 text-sm">₹</span>
                          <span className="font-medium text-gray-400 text-sm">30k-35k</span>
                        </div>
                        <div className="flex items-center">
                          <FaCalendar className="text-gray-400 text-sm" />
                          <span className="font-medium text-gray-400 text-sm">4 days remaining</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-8 items-center  ml-[40%]">
                    <FaRegBookmark className='text-[#6712B9]' />
                    <button className="flex h-10 pl-4 pr-4 items-center text-[#6712B9] rounded-md border-2">
                      <span>View All</span>
                      <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
    
                <div className="flex gap-10 h-[90px] rounded-lg bg-white border shadow-md ">
                  <div className="flex items-start p-4">
                    <img className="h-16 w-16" src={appleLogo} alt="UP Logo" />
                    <div className="ml-4 flex-grow">
                      <div className="flex justify-between pb-2">
                        <span className="text-xl font-semibold text-[#6712B9]">Software Engineer</span>
                        <button className="px-4 font-medium  text-sm py-1 rounded-full bg-[#F5EBFFB2] text-[#6712B9] ">
                          Full Time
                        </button>
                      </div>
                      <div className="flex gap-5 justify-between">
                        <div className="flex items-center">
                          <CiLocationOn className="text-[#C5C9D6] text-md font-bold" />
                          <span className="font-medium text-gray-400 text-sm">Mumbai</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-400 text-sm">₹</span>
                          <span className="font-medium text-gray-400 text-sm">50k-60k</span>
                        </div>
                        <div className="flex items-center">
                          <FaCalendar className="text-gray-400 text-sm" />
                          <span className="font-medium text-gray-400 text-sm">4 days remaining</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-8 items-center  ml-[40%]">
                    <FaRegBookmark className='text-[#6712B9]' />
                    <button className="flex h-10 pl-4 pr-4 items-center bg-[#6712B9] text-white rounded-md">
                      <span>View All</span>
                      <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
    
                <div className="flex gap-10 h-[90px] rounded-lg bg-white  ">
                  <div className="flex items-start p-4">
                    <img className="h-16 w-16" src={EmployersLogo} alt="EmployeerLogo" />
                    <div className="ml-4 flex-grow">
                      <div className="flex justify-between pb-2">
                        <span className="text-xl font-semibold text-gray-800">Junior Graphic Designer</span>
                        <button className="px-2 font-medium  text-sm py-1 rounded-full bg-[#F5EBFFB2] text-[#6712B9] ">
                          Full Time
                        </button>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <CiLocationOn className="text-[#C5C9D6] text-md font-bold" />
                          <span className="font-medium text-gray-400 text-sm">Nagpur</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-400 text-sm">₹</span>
                          <span className="font-medium text-gray-400 text-sm">50k-70k</span>
                        </div>
                        <div className="flex items-center">
                          <FaCalendar className="text-gray-400 text-sm" />
                          <span className="font-medium text-gray-400 text-sm">4 days remaining</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-8 items-center  ml-[40%]">
                    <FaRegBookmark className='text-[#6712B9]' />
                    <button className="flex h-10 pl-4 pr-4 items-center text-[#6712B9] rounded-md border-2">
                      <span>View All</span>
                      <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
    
                <div className="flex gap-10 h-[90px] rounded-lg bg-white  ">
                  <div className="flex items-start p-4">
                    <img className="h-16 w-16" src={ULogo} alt="ULogo" />
                    <div className="ml-4 flex-grow">
                      <div className="flex gap-2 justify-between pb-2">
                        <span className="text-xl font-semibold text-gray-800">Senior UX Designer</span>
                        <button className="px-2 font-medium  text-sm py-1 rounded-full bg-[#F5EBFFB2] text-[#6712B9] ">
                          Contract Base
                        </button>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <CiLocationOn className="text-[#C5C9D6] text-md font-bold" />
                          <span className="font-medium text-gray-400 text-sm">Pune</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-400 text-sm">₹</span>
                          <span className="font-medium text-gray-400 text-sm">35-40k</span>
                        </div>
                        <div className="flex items-center">
                          <FaCalendar className="text-gray-400 text-sm" />
                          <span className="font-medium text-gray-400 text-sm">4 days remaining</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-8 items-center  ml-[40%]">
                    <FaRegBookmark className='text-[#6712B9]' />
                    <button className="flex h-10 pl-4 pr-4 items-center text-[#6712B9] rounded-md border-2">
                      <span>View All</span>
                      <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
    
                <div className="flex gap-10 h-[90px] rounded-lg bg-white  ">
                  <div className="flex items-start p-4">
                    <img className="h-16 w-16" src={FbLogo} alt="FbLogo" />
                    <div className="ml-4 flex-grow">
                      <div className="flex  justify-between pb-2">
                        <span className="text-xl font-semibold text-gray-800">Marketing Officer</span>
                        <button className="px-2 font-medium  text-sm py-1 rounded-full bg-[#F5EBFFB2] text-[#6712B9] ">
                          Internship
                        </button>
                      </div>
                      <div className="flex gap-7  justify-between">
                        <div className="flex items-center">
                          <CiLocationOn className="text-[#C5C9D6] text-md font-bold" />
                          <span className="font-medium text-gray-400 text-sm">Pune</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-400 text-sm">₹</span>
                          <span className="font-medium text-gray-400 text-sm">50k-90k</span>
                        </div>
                        <div className="flex items-center">
                          <FaCalendar className="text-gray-400 text-sm" />
                          <span className="font-medium text-gray-400 text-sm">4 days remaining</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-8 items-center  ml-[40%]">
                    <FaRegBookmark className='text-[#6712B9]' />
                    <button className="flex h-10 pl-4 pr-4 items-center text-[#6712B9] rounded-md border-2">
                      <span>View All</span>
                      <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
    
                <div className="flex gap-10 h-[90px] rounded-lg bg-white  ">
                  <div className="flex items-start p-4">
                    <img className="bg-gray-300 h-16 w-16 p-3" src={GoogleLogo} alt="Google Logo" />
                    <div className="ml-4 flex-grow">
                      <div className="flex gap-2 justify-between pb-2">
                        <span className="text-xl font-semibold text-gray-800">Interaction Designer</span>
                        <button className="px-2 font-medium  text-sm py-1 rounded-full bg-[#F5EBFFB2] text-[#6712B9] ">
                          Full Time
                        </button>
                      </div>
                      <div className="flex gap-6 justify-between">
                        <div className="flex items-center">
                          <CiLocationOn className="text-[#C5C9D6] text-md font-bold" />
                          <span className="font-medium text-gray-400 text-sm">Nagpur</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-400 text-sm">₹</span>
                          <span className="font-medium text-gray-400 text-sm">5k-10k</span>
                        </div>
                        <div className="flex items-center">
                          <FaCalendar className="text-gray-400 text-sm" />
                          <span className="font-medium text-gray-400 text-sm">4 days remaining</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-8 items-center  ml-[40%]">
                    <FaRegBookmark className='text-[#6712B9]' />
                    <button className="flex h-10 pl-4 pr-4 items-center text-[#6712B9] rounded-md border-2">
                      <span>View All</span>
                      <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
    
              </div>
            </div>
  )
}

export default RecentJob
