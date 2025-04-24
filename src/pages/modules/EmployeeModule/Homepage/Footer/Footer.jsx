import React, { useState } from 'react'
import logo from '../../../../../assets/logo.png';
import { FaArrowRight } from 'react-icons/fa';
import { TiSocialFacebook } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";



const Footer = () => {
  return (
        <div className='bg-[#18191C] text-[#FFFFFF] w-full h-[430px] pt-10'>
              <div className='flex gap-16 mb-20 pl-32 pr-32'>
                <div className="flex flex-col gap-4 mt-10">
                  <img className='w-[183px] h-[60px]' src={logo} alt="logo.png" />
                  <p className='text-[18px]'><span className="text-[#5E6670] text-[18px]">Call now:</span> +91 8956992803</p>
                  <p className="text-[#5E6670] text-[14px]">4th floor, Prince Complex, Chatrapati Nagar,<br /> Nagpur, Maharashtra 440015</p>
                </div>
                <div className='flex flex-col gap-4 mt-10'>
                  <h5 className="text-[20px] leading-[32px]">Quick Link</h5>
                  <div className="flex items-center space-x-4 cursor-pointer group">
                    {/* Arrow */}
                    <div className=" mb-2 h-[5.83px] w-[11.67px] group-hover:block hidden">
                      <FaArrowRight />
                    </div>
                    <div>
                      <a className="text-[#5E6670] text-[14px] group-hover:text-[14px] group-hover:text-white">
                        About
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 cursor-pointer group">
                    {/* Arrow */}
                    <div className="mb-2 h-[5.83px] w-[11.67px] group-hover:block hidden">
                      <FaArrowRight />
                    </div>
                    <div>
                      <a className="text-[#5E6670] text-[14px] group-hover:text-[14px] group-hover:text-white">
                        Contact
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 cursor-pointer group">
                    {/* Arrow */}
                    <div className="mb-2 h-[5.83px] w-[11.67px] group-hover:block hidden">
                      <FaArrowRight />
                    </div>
                    <div>
                      <a className="text-[#5E6670] text-[14px] group-hover:text-[14px] group-hover:text-white">
                        Pricing
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 cursor-pointer group">
                    {/* Arrow */}
                    <div className="mb-2  h-[5.83px] w-[11.67px] group-hover:block hidden">
                      <FaArrowRight />
                    </div>
                    <div>
                      <a className="text-[#5E6670] text-[14px] group-hover:text-[14px] group-hover:text-white">
                        Blog
                      </a>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-4 mt-10'>
                  <h5 className="text-[20px] leading-[32px]">Candidate</h5>
                  <a href="#" className="text-[#5E6670] text-[14px]">Browse Jobs</a>
                  <a href="#" className="text-[#5E6670] text-[14px]">Browse Employers</a>
                  <a href="#" className="text-[#5E6670] text-[14px]">Candidate Dashboard</a>
                  <a href="#" className="text-[#5E6670] text-[14px]">Saved Jobs</a>
                </div>
    
                <div className='flex flex-col gap-4 mt-10'>
                  <h5 className="text-[20px] leading-[32px]">Employers</h5>
                  <a href="#" className="text-[#5E6670] text-[14px]">Post a Job</a>
                  <a href="#" className="text-[#5E6670] text-[14px]">Browse Candidates</a>
                  <a href="#" className="text-[#5E6670] text-[14px]">Employers Dashboard</a>
                  <a href="#" className="text-[#5E6670] text-[14px]">Applications</a>
                </div>
    
                <div className="flex flex-col gap-4 mt-10">
                  <h5 className="text-[20px] leading-[32px]">Support</h5>
                  <a href="#" className="text-[#5E6670] text-[14px]">Faqs</a>
                  <a href="#" className="text-[#5E6670] text-[14px]">Privacy Policy</a>
                  <a href="#" className="text-[#5E6670] text-[14px]">Terms & Conditions</a>
    
                </div>
              </div>
    
              <hr className='w-full border-t-2 border-[#2F3338]' />
              <div className="flex justify-between items-center pt-5 gap-16 pl-32 pr-32">
                <div>
                  <p className='text-[14px] text-[#767F8C]'>@ 2024 TechnoHire - Job Portal. All rights Reserved</p>
                </div>
                <div className="flex gap-10 text-[#767F8C]">
                  <a href=""><TiSocialFacebook className='w-[20px] h-[20px]' /></a>
                  <a href=""><FaYoutube className='w-[20px] h-[20px]' /></a>
                  <a href=""><FiInstagram className='w-[20px] h-[20px]' /></a>
                  <a href=""><FaTwitter className='w-[20px] h-[20px]' /></a>
                </div>
    
              </div>
    
            </div>
  )
}

export default Footer
