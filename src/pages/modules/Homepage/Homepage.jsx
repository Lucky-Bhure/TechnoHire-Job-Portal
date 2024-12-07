import React from 'react'
import Illustration from '../../../assets/Illustration.png';
import FbLogo from '../../../assets/FbLogo.png';
import UpLogo from '../../../assets/UpLogo.png';
import ULogo from '../../../assets/ULogo.png';
import appleLogo from '../../../assets/appleLogo.png';
import GoogleLogo from '../../../assets/GoogleLogo.png';
import EmployersLogo from '../../../assets/EmployersLogo.png';
// import crown from '../../../assets/crown.png';
import wheel from '../../../assets/wheel.png';


import { FaBandAid, FaSearch } from "react-icons/fa";
import { FaBriefcase } from 'react-icons/fa';
import { PiBuildingOffice } from 'react-icons/pi';
import { FaUserPlus } from "react-icons/fa";
import { FaUsers } from 'react-icons/fa';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { FaSearchPlus } from 'react-icons/fa';
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { FaPenNib } from 'react-icons/fa';
import { LuMonitorPlay } from "react-icons/lu";
import { FaCode } from 'react-icons/fa';
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaMusic } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';
import { RiFirstAidKitLine } from 'react-icons/ri';
import { FaDatabase } from 'react-icons/fa';
import { FaMap } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa';






import { FaMapMarkerAlt } from 'react-icons/fa';
const Homepage = () => {

  return (
    <>
      <div className=' bg-white'>
        <div className='bg-[#F1F2F499] w-full pl-32 pr-32  h-[700px] pt-10'>
          <div className='flex justify-center items-center gap-20'>
            <div className='mt-12'>
              <h1 className='font-medium leading-tight text-[48px]'>Find a job that suits <br /> your interest & skills.</h1>
              <p className='pt-4 text-gray-500'>Explore exciting opportunities tailored to your expertise and <br /> passions. Start your journey toward a career that truly fits you!</p>

              <div className='flex justify-center items-center border-2 mt-6 shadow-md bg-[#fff] rounded-md w-[580px] h-[60px] gap-2 '>
                <div className='relative'>
                  <input
                    className="rounded-[1px] p-2 pl-6  border-none outline-none"
                    type="text"
                    placeholder='Job tittle,keyword...' />
                  <FaSearch className="absolute left-0 top-5 transform -translate-y-1/2 text-[#6712B9]" />
                </div>

                <div className="w-px bg-gray-300 h-8"></div>

                <div className='relative'>
                  <input className='rounded-md p-2 pl-6 border-none outline-none'
                    placeholder='Your Location'
                    type='text' />
                  <FaMapMarkerAlt className="absolute left-0 top-5 transform -translate-y-1/2 text-[#6712B9]" />
                </div>
                <button type='button' className='bg-[#6712B9] p-2 pl-4 pr-4 rounded-[4px] text-white'>Find Job</button>
              </div>
              <p className='flex gap-1 pt-4 pb-10 text-sm font-medium text-gray-600'> <span className='text-gray-400'>Suggestion:</span>Designer, Programming,<span className='text-[#6712B9]'>Digita Marketing</span>,Video,Animation</p>

              <div className='flex gap-6'>
                <button
                  className='border-2 border-[#3E1654] shadow-md text-[#6712B9] text-medium rounded-[15px] p-3'
                  type='button'>
                  Become a Cadidate</button>
                <button className='border-2 border-[#3E1654] shadow-md text-[#6712B9]  rounded-[15px] p-3'>Become an Employer</button>
              </div>
            </div>


            <div>
              <img src={Illustration} alt="" />
            </div>

          </div>

          <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">

            <div className="flex gap-10 justify-center items-center  h-[90px] rounded-lg bg-white border shadow-md ">
              <FaBriefcase className=' text-[#6712B9] bg-gray-100 w-12 p-2 h-10' />
              <span>
                <h5 className='font-bold text-lg'>1,75,324</h5>
                <p className='text-gray-500'>Live job</p>
              </span>
            </div>
            <div className="flex gap-10 justify-center items-center  h-[90px] rounded-lg bg-white border shadow-md ">
              <PiBuildingOffice className=' text-[#6712B9] bg-gray-100 w-12 p-2 h-10' />
              <span>
                <h5 className='font-bold text-lg'>97,345</h5>
                <p className='text-gray-500'>Companies</p>
              </span>
            </div>
            <div className="flex gap-10 justify-center items-center  h-[90px] rounded-lg bg-white border shadow-md ">
              <FaUsers className=' text-[#6712B9] bg-gray-100 w-12 p-2 h-10' />
              <span>
                <h5 className='font-bold text-lg'>38,47,154</h5>
                <p className='text-gray-500'>Candidates</p>
              </span>
            </div>

            <div className="flex gap-10 justify-center items-center  h-[90px] rounded-lg bg-white border shadow-md ">
              <FaBriefcase className=' text-[#6712B9] bg-gray-100 w-12 p-2 h-10' />
              <span>
                <h5 className='font-bold text-lg'>7,532</h5>
                <p className='text-gray-500'>New Jobs</p>
              </span>
            </div>



          </div>

        </div>

        <div className='h-[500px] flex flex-col justify-center  bg-[#FFFFFF] w-full pl-32 pr-32'>

          <h1 className='font-normal text-[35px] pb-6'>Most Popular Vacancies</h1>
          <div className='flex gap-10'>
            <div className='flex flex-col gap-[37px]' >
              <div className='pb-4'>
                <h5 className='font-medium text-lg'>Software Developer / Engineer</h5>
                <p className='text-sm text-gray-400'>29 Open Positions</p>
              </div>
              <div className='pb-4'>
                <h5 className='font-medium text-lg'>Business Analyst (IT)</h5>
                <p className='text-sm text-gray-400'>18 Open Positions</p>
              </div>
              <div className='pb-4'>
                <h5 className='font-medium text-lg'>Business Development Manager  <br /> (BDM)</h5>
                <p className='text-sm text-gray-400'>61 Open Positions</p>
              </div>
            </div>

            <div className='flex flex-col gap-[37px]' >
              <div className='pb-4'>
                <h5 className='font-medium text-lg'>IT Project Manager</h5>
                <p className='text-sm text-gray-400'>50 Open Positions</p>
              </div>
              <div className='pb-4'>
                <h5 className='font-medium text-lg'>HR Manager</h5>
                <p className='text-sm text-gray-400'>43 Open Positions</p>
              </div>
              <div className='pb-4'>
                <h5 className='font-medium text-lg'>Sales Operations Analyst</h5>
                <p className='text-sm text-gray-400'>93 Open Positions</p>
              </div>
            </div>

            <div className='flex flex-col gap-[32px]' >
              <div className='pb-4'>
                <h5 className='font-medium text-lg'>UI/UX Designer</h5>
                <p className='text-sm text-gray-400'>41 Open Positions</p>
              </div>
              <div className=''>
                <h5 className='font-medium text-lg'>Business Development Executive <br /> (BDE)</h5>
                <p className='text-sm text-gray-400'>18 Open Positions</p>
              </div>
              <div className='pb-4'>
                <h5 className='font-medium text-lg'>Cybersecurity Specialist</h5>
                <p className='text-sm text-gray-400'>50 Open Positions</p>
              </div>
            </div>

            <div className='flex flex-col gap-[32px]' >
              <div className='pb-4'>
                <h5 className='font-medium text-lg'>Cloud Engineer</h5>
                <p className='text-sm text-gray-400'>20 Open Positions</p>
              </div>
              <div className='pb-6'>
                <h5 className='font-medium text-lg'>Machine Learning Engineer</h5>
                <p className='text-sm text-gray-400'>28 Open Positions</p>
              </div>
              <div className='pb-4'>
                <h5 className='font-medium text-lg'>Data Scientist / Data Analyst</h5>
                <p className='text-sm text-gray-400'>16 Open Positions</p>
              </div>
            </div>


          </div>

        </div>

        <div className='h-[542px] bg-[#F1F2F4] w-full pl-32 pr-32'>
          <h1 className='flex justify-center items-center font-normal text-[35px] pb-2 pt-10'>How TechnoHire work</h1>

          <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">

            <div className="flex flex-col gap-6 justify-center items-center  h-[244px] w-[250px] rounded-lg">
              <FaUserPlus className='w-[40px] h-[40px] mt-4 text-[#6712B9] bg-white p-2 rounded-full ' />
              <h5 className='font-medium text-lg'>Create Account</h5>
              <p className=' text-gray-400 text-sm p-4 align-middle'>Join us today to unlock a world of<br />
                career possibilities. Setting up is quick
                and easy!</p>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center  h-[244px] w-[250px] rounded-lg bg-white">
              <FaCloudUploadAlt className='w-[40px] h-[40px] mt-4 text-[#6712B9] bg-white p-2 rounded-full ' />
              <h5 className='font-medium text-lg'>Upload CV/Resume</h5>
              <p className=' text-gray-400 text-sm p-4 align-middle'>Showcase your skills and experience by uploading your latest CV. Let your profile stand out!</p>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center  h-[244px] w-[250px] rounded-lg ">
              <FaSearchPlus className='w-[40px] h-[40px] mt-4 text-[#6712B9] bg- p-2 rounded-full ' />
              <h5 className='font-medium text-lg'>Find suitable job</h5>
              <p className=' text-gray-400 text-sm p-4 align-center'>Discover roles that match your skills and career goals. Your perfect fit is just a search away!,</p>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center  h-[244px] w-[250px] rounded-lg">
              <FaRegCheckCircle className='w-[40px] h-[40px] mt-4 text-[#6712B9] bg-white p-2 rounded-full ' />
              <h5 className='font-medium text-lg'>Apply Job</h5>
              <p className=' text-gray-400 text-sm p-4 align-center'>Ready to take the next step? Submit your application with a click and get closer to your dream job!</p>
            </div>
          </div>
        </div>

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
                <FaPenNib className=' text-[#6712B9] bg-gray-100 w-12 p-2 h-10' />
                <span>
                  <h5 className='text-lg font-medium'>Graphics & Design</h5>
                  <p className='text-gray-500'>357 Open position</p>
                </span>
              </div>
              <div className="flex gap-8 justify-center items-center  h-[90px] w-[260px] rounded-lg bg-white ">
                <FaCode className=' text-[#6712B9] bg-gray-100 w-12 p-2 h-10' />
                <span>
                  <h5 className='text-lg font-medium'>Code & Programing</h5>
                  <p className='text-gray-500'>312 Open position</p>
                </span>
              </div>
              <div className="flex gap-8 justify-center items-center  h-[90px] w-[260px] rounded-lg bg-white">
                <HiOutlineSpeakerphone className='text-[#6712B9] bg-gray-100 w-12 p-2 h-10' />
                <span>
                  <h5 className='text-lg font-medium'>Digital Marketing</h5>
                  <p className='text-gray-500'>297 Open position</p>
                </span>
              </div>

              <div className="flex gap-8 justify-center items-center  h-[90px] w-[260px] rounded-lg bg-white ">
                <LuMonitorPlay className=' text-[#6712B9] bg-gray-100 w-12 p-2 h-10' />
                <span>
                  <h5 className='text-lg font-medium'>Video & Animation</h5>
                  <p className='text-gray-500'>247 Open position</p>
                </span>
              </div>



            </div>

            <div className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-4 gap-12 p-6">

              <div className="flex gap-8 justify-center items-center  h-[90px] w-[260px] rounded-lg bg-white">
                <FaMusic className=' text-[#6712B9] bg-gray-100 w-12 p-2 h-10' />
                <span>
                  <h5 className='text-lg font-medium'>Data Science and Analytics</h5>
                  <p className='text-gray-500'>204 Open position</p>
                </span>
              </div>
              <div className="flex gap-8 justify-center items-center  h-[90px] w-[260px] rounded-lg bg-white">
                <PiBuildingOffice className='text-[#6712B9] bg-gray-100 w-12 p-2 h-10' />
                <span>
                  <h5 className='text-lg font-medium'>UI/UX Design</h5>
                  <p className='text-gray-500'>167 Open position</p>
                </span>
              </div>
              <div className="flex gap-6 justify-center items-center  h-[90px] w-[260px] rounded-lg bg-white">
                <RiFirstAidKitLine className=' text-[#6712B9] bg-gray-100 w-12 p-2 h-10' />
                <span>
                  <h5 className='text-lg font-medium'>Blockchain Technology</h5>
                  <p className='text-gray-500'>125 Open position</p>
                </span>
              </div>

              <div className="flex gap-6 justify-center items-center  h-[90px] w-[260px] rounded-lg bg-white border shadow-md ">
                <FaDatabase className=' text-[#6712B9] bg-gray-100 w-12 p-2 h-10' />
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

        <hr className='w-full' />

        <div className='h-[800px] w-full pt-10 pl-32 pr-32'>
          <h1 className='font-normal text-[35px] pb-6'>Recents Jobs</h1>
          <div className='flex flex-col gap-5'>
            <div className="flex gap-10 h-[90px] rounded-lg bg-white border shadow-md ">
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
                      <FaMap className="text-gray-400 text-sm" />
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
                <FaBookmark className='text-[#6712B9]' />
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
                      <FaMap className="text-gray-400 text-sm" />
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
                <FaBookmark className='text-[#6712B9]' />
                <button className="flex h-10 pl-4 pr-4 items-center bg-[#6712B9] text-white rounded-md">
                  <span>View All</span>
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>

            <div className="flex gap-10 h-[90px] rounded-lg bg-white border shadow-md ">
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
                      <FaMap className="text-gray-400 text-sm" />
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
                <FaBookmark className='text-[#6712B9]' />
                <button className="flex h-10 pl-4 pr-4 items-center text-[#6712B9] rounded-md border-2">
                  <span>View All</span>
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>

            <div className="flex gap-10 h-[90px] rounded-lg bg-white border shadow-md ">
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
                      <FaMap className="text-gray-400 text-sm" />
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
                <FaBookmark className='text-[#6712B9]' />
                <button className="flex h-10 pl-4 pr-4 items-center text-[#6712B9] rounded-md border-2">
                  <span>View All</span>
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>

            <div className="flex gap-10 h-[90px] rounded-lg bg-white border shadow-md ">
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
                      <FaMap className="text-gray-400 text-sm" />
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
                <FaBookmark className='text-[#6712B9]' />
                <button className="flex h-10 pl-4 pr-4 items-center text-[#6712B9] rounded-md border-2">
                  <span>View All</span>
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>

            <div className="flex gap-10 h-[90px] rounded-lg bg-white border shadow-md ">
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
                      <FaMap className="text-gray-400 text-sm" />
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
                <FaBookmark className='text-[#6712B9]' />
                <button className="flex h-10 pl-4 pr-4 items-center text-[#6712B9] rounded-md border-2">
                  <span>View All</span>
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className='h-[650px] bg-[#FFFF] w-full pl-32 pr-32 pt-10'>
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

            <div className="flex flex-col border-2 gap-6 h-[200px] w-[312px] rounded-lg">
              <div className="flex justify-start items-start gap-8 p-8 rounded-lg bg-white ">
                <img className='bg-[#EA4C89] w-[24px] h-[24px]' src={wheel} alt="wheel.png" />
                <span>
                  <h5 className='text-lg  font-medium'>Drible</h5>
                  <p className='text-gray-500'>Pune</p>
                </span>
              </div>
              <button>Open Position</button>

            </div>


          </div>

        </div>
      </div>
    </>
  )
}

export default Homepage
