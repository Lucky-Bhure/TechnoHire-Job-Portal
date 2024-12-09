import React, { useState } from 'react'
import Illustration from '../../../assets/Illustration.png';
import FbLogo from '../../../assets/FbLogo.png';
import UpLogo from '../../../assets/UpLogo.png';
import ULogo from '../../../assets/ULogo.png';
import appleLogo from '../../../assets/appleLogo.png';
import GoogleLogo from '../../../assets/GoogleLogo.png';
import EmployersLogo from '../../../assets/EmployersLogo.png';
import crownLogo from '../../../assets/crownLogo.png';
import wheel from '../../../assets/wheel.png';
import slack from '../../../assets/slackLogo.png';
import logo from '../../../assets/logo.png';
import group from '../../../assets/group.png';
import TestimonialImage from '../../../assets/Testimonial.png';




import { FaBandAid, FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
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
import { FaRegBookmark } from "react-icons/fa";
import { FaCalendar } from 'react-icons/fa';
import { TiSocialFacebook } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaMapMarkerAlt } from 'react-icons/fa';





const Homepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: 'Robert Fox',
      position: 'Hiring Manager',
      text: '“Exceptional service! The platform made it so easy to find qualified candidates for our team. We hired three talented professionals in just a few weeks!”',
      image: TestimonialImage
    }, {
      name: 'Amit K.',
      position: 'Software Developer',
      text: '“As a job seeker, I found it incredibly easy to apply to roles that fit my skills. Within a month, I landed a fantastic job at a great company!”',
      image: TestimonialImage
    },
    {
      name: 'Suresh M.',
      position: 'Project Manager',
      text: '“The candidate pool is outstanding, and the application process is user-friendly. This platform has been a game-changer for our recruitment needs!”',
      image: TestimonialImage
    },
    {
      name: 'Robert Fox',
      position: 'Hiring Manager',
      text: '“Exceptional service! The platform made it so easy to find qualified candidates for our team. We hired three talented professionals in just a few weeks!”',
      image: TestimonialImage
    }, {
      name: 'Amit K.',
      position: 'Software Developer',
      text: '“As a job seeker, I found it incredibly easy to apply to roles that fit my skills. Within a month, I landed a fantastic job at a great company!”',
      image: TestimonialImage
    },
    {
      name: 'Suresh M.',
      position: 'Project Manager',
      text: '“The candidate pool is outstanding, and the application process is user-friendly. This platform has been a game-changer for our recruitment needs!”',
      image: TestimonialImage
    },

  ];

  const handleLeftArrow = () => {
    // Ensure the index wraps around properly, showing the previous 3 testimonials
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  const handleRightArrow = () => {
    // Ensure the index wraps around properly, showing the next 3 testimonials
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? 'text-yellow-500' : 'text-gray-300'}
          style={{
            width: "28px",
            height: "28px",
            color: "#FFAA00"
          }}
        >
          ★
        </span>
      );
    }
    return stars;
  };


  return (
    <>
      <div className=' bg-white'>
        <div className='bg-[#F1F2F499] w-full pl-32 pr-32  h-[700px] pt-10'>
          <div className='flex justify-center items-center gap-20'>
            <div className='mt-12'>
              <h1 className='font-medium leading-tight text-[48px]'>Find a job that suits <br /> your interest & skills.</h1>
              <p className='pt-4 text-gray-500'>Explore exciting opportunities tailored to your expertise and <br /> passions. Start your journey toward a career that truly fits you!</p>

              <div className='flex justify-center items-center border-2 mt-6 shadow-md bg-[#fff] rounded-md w-[650px] h-[60px] gap-2 '>
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
              <FaSearchPlus className='w-[40px] h-[40px] mt-4 text-[#6712B9] p-2 rounded-full ' />
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
            <div className="flex flex-col border-2  gap-6 h-[200px] w-[250px] rounded-lg">
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
                <button className="bg-[#F5EBFFB2] border-2 text-[#6712B9] h-[48px] w-[200px] rounded-[4px]">Open Position</button>
              </div>
            </div>

            <div className="flex flex-col border-2 gap-6 h-[200px] w-[250px] rounded-lg">
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
                <button className="bg-[#F5EBFFB2] border-2 text-[#6712B9] h-[48px] w-[200px] rounded-[4px]">Open Position</button>
              </div>
            </div>

            <div className="flex flex-col border-2 border-[#6712B9] shadow-lg  gap-6 h-[200px] w-[250px] rounded-lg">
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
                <button className="bg-[#6712B9] border-2 text-[#FFFFFF] h-[48px] w-[200px] rounded-[4px]">Open Position</button>
              </div>
            </div>

            <div className="flex flex-col border-2 gap-6 h-[200px] w-[250px] rounded-lg">
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
                <button className="bg-[#F5EBFFB2] border-2 text-[#6712B9] h-[48px] w-[200px] rounded-[4px]">Open Position</button>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">

            <div className="flex flex-col border-2 gap-6 h-[200px] w-[250px] rounded-lg">
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
                <button className="bg-[#F5EBFFB2] border-2 text-[#6712B9] h-[48px] w-[200px] rounded-[4px]">Open Position</button>
              </div>
            </div>

            <div className="flex flex-col border-2  gap-6 h-[200px] w-[250px] rounded-lg">
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
                <button className="bg-[#F5EBFFB2] border-2 text-[#6712B9] h-[48px] w-[200px] rounded-[4px]">Open Position</button>
              </div>
            </div>

            <div className="flex flex-col border-2  gap-6 h-[200px] w-[250px] rounded-lg">
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
                <button className="bg-[#F5EBFFB2] border-2 text-[#6712B9] h-[48px] w-[200px] rounded-[4px]">Open Position</button>
              </div>
            </div>

            <div className="flex flex-col border-2   gap-6 h-[200px] w-[250px] rounded-lg">
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
                <button className="bg-[#F5EBFFB2] border-2 text-[#6712B9] h-[48px] w-[200px] rounded-[4px]">Open Position</button>
              </div>
            </div>

          </div>
        </div>

        {/* testimonial  */}
        <div className="py-16 bg-gray-100">
          <div className="container mx-auto text-center relative">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Client Testimonial</h2>

            {/* Left Arrow */}
            <button
              onClick={handleLeftArrow}
              className="absolute left-5 z-10 top-1/2 transform -translate-y-1/2 bg-[#FFFFFF] w-[48px] h-[48px] text-[#6712B9] p-2 rounded-md"
            >
              &#8592;
            </button>

            {/* Testimonial Cards */}
            <div className="flex gap-4 pl-32 pr-32 pt-10">
              {/* Ensure always three cards are shown */}
              {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-3 pt-6 rounded-lg shadow-lg transform transition-all hover:scale-105 w-[450px] h-[270px]">
                  <div className='flex justify-start pb-6'>{renderStars(testimonial.rating)}</div>

                  <div className=''>
                    <p className="text-start pb-10 text-[#464D61] text-sm leading-5">{testimonial.text}</p>
                  </div>

                  <div className='flex gap-2'>
                    <div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-[48px] h-[48px] border-2 rounded-full"
                    />
                    </div>
                    <div className='flex justify-between gap-20'>
                      <div>
                        <h3 className="text-[16px] font-inter font-semibold text-gray-700">{testimonial.name}</h3>
                        <p className="text-[14px] text-gray-500 mb-4">{testimonial.position}</p>
                      </div>

                      <div>
                        <img src={group} alt="" />
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* dot */}
            <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-[#6712B9]' : 'bg-[#DBB7FF]'}`}
          />
        ))}
      </div>
    

            {/* Right Arrow */}
            <button
              onClick={handleRightArrow}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-[#FFFFFF] w-[48px] h-[48px] text-[#6712B9] p-2 rounded-md"
            >
              &#8594;
            </button>
          </div>
        </div>


        <div className='h-[490px] bg-[#FFFF] w-full pl-32 pr-32 pt-10'>
          <div className="flex space-x-4 p-6">
            {/* Box 1 */}
            <div className="flex flex-col gap-[16px] p-[50px] bg-[#E4E5E8] w-[548px] h-[290px] rounded-lg">
              <h3 className="text-[32px] leading-[40px] font-inter">Become a Candidate</h3>
              <p className="text-[14px] leading-[24px] text-[#636A80]">Take the first step toward your next career opportunity. Join us as a candidate to connect with top employers and make your profile stand out in the competitive job market!</p>
              <button className="flex  bg-[#FFFFFF] h-[48px] w-[188px] items-center justify-center text-[#6712B9] rounded-[3px] outline-none border-none">
                <span className="text-[16px] font-inter">Register Now</span>
                <FaArrowRight className="ml-2" />
              </button>
            </div>

            {/* Box 2 */}
            <div className="flex flex-col gap-[16px] p-[50px] bg-[#6712B9] w-[548px] h-[290px] text-[#FFFFFF] rounded-lg">
              <h3 className="text-[32px] leading-[40px] font-inter">Become an Employer</h3>
              <p className="text-[14px] text-[#FFFFFF] leading-[24px]">Find the talent your business needs to succeed. Join us as an employer to connect with skilled candidates ready to make an impact!</p>
              <button className="flex bg-[#FFFFFF] h-[48px] w-[188px] items-center justify-center text-[#6712B9] rounded-[3px] outline-none border-none">
                <span className="text-[16px] font-inter">Register Now</span>
                <FaArrowRight className="ml-2" />
              </button>
            </div>

          </div>
        </div>


        {/* Footer  */}

        <div className='bg-[#18191C] text-[#FFFFFF] w-full h-[430px] pt-10'>
          <div className='flex gap-16 mb-20 pl-32 pr-32'>
            <div className="flex flex-col gap-4 mt-10">
              <img className='w-[183px] h-[60px]' src={logo} alt="logo.png" />
              <p className='text-[18px]'><span className="text-[#5E6670] text-[18px]">Call now:</span> +91 8956992803</p>
              <p className="text-[#5E6670] text-[14px]">4th floor, Prince Complex, Chatrapati Nagar,<br /> Nagpur, Maharashtra 440015</p>
            </div>
            <div className='flex flex-col gap-4 mt-10'>
              <h5 className="text-[20px] leading-[32px]">Quick Link</h5>
              <p className='text-[#5E6670] text-[16px]'>About</p>
              <div className="flex items-center space-x-4">
                {/* Arrow */}
                <div className="flex justify-center items-center h-[5.83px] w-[11.67px]">
                  <FaArrowRight />
                </div>
                <div>
                  <a className="text-[16px] text-white">
                    Contact
                  </a>
                </div>
              </div>
              <p className='text-[#5E6670] text-[16px]'>Pricing</p>
              <p className='text-[#5E6670] text-[16px]'>Blog</p>
            </div>
            <div className='flex flex-col gap-4 mt-10'>
              <h5 className="text-[20px] leading-[32px]">Candidate</h5>
              <p className="text-[#5E6670] text-[14px]">Browse Jobs</p>
              <p className="text-[#5E6670] text-[14px]">Browse Employers</p>
              <p className="text-[#5E6670] text-[14px]">Candidate Dashboard</p>
              <p className="text-[#5E6670] text-[14px]">Saved Jobs</p>
            </div>

            <div className='flex flex-col gap-4 mt-10'>
              <h5 className="text-[20px] leading-[32px]">Employers</h5>
              <p className="text-[#5E6670] text-[14px]">Post a Job</p>
              <p className="text-[#5E6670] text-[14px]">Browse Candidates</p>
              <p className="text-[#5E6670] text-[14px]">Employers Dashboard</p>
              <p className="text-[#5E6670] text-[14px]">Applications</p>
            </div>

            <div className="flex flex-col gap-4 mt-10">
              <h5 className="text-[20px] leading-[32px]">Support</h5>
              <p className="text-[#5E6670] text-[14px]">Faqs</p>
              <p className="text-[#5E6670] text-[14px]">Privacy Policy</p>
              <p className="text-[#5E6670] text-[14px]">Terms & Conditions</p>
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










      </div>
    </>
  )
}

export default Homepage
