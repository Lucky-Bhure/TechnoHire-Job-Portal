import React, { useState } from "react";
import Applypopup from "../../../../components/Dialog/Applypopup";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBookmark,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { FiFlag, FiPhone } from "react-icons/fi";
import { RiFacebookFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandWhatsapp } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import apple from "../../../../assets/appleLogo.png";
import { CiCalendar } from "react-icons/ci";
import { CiStopwatch } from "react-icons/ci";
import { TfiBag, TfiEmail } from "react-icons/tfi";
import { PiWallet } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";
import { CgToggleOff } from "react-icons/cg";
import { GiCrossedChains } from "react-icons/gi";
import Header from "../../../../components/header/Header";

const Findjobdetails = () => {
  const [showmodal, setshowmodal] = useState(false);

  return (
    <div>
          <Header/>

      <div className="bg-[#F1F2F4] p-4 ">
        <div className="flex">
          <div className="ms-8">
            <p className="font-semibold text-lg">Job Details</p>
          </div>
          <div className="ms-auto pe-2">
            <p className="text-[#767F8C]">
              Home / Find job / Graphic Design /{" "}
              <span className="text-[#18191C]">Job Details</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 mx-10">
        {/* Job Header */}
        <div className="flex items-center gap-4 border-b pb-5 mb-5">
          {/* Company Logo */}
          <div>
            <img
              src={apple}
              alt="Company Logo"
              width={60}
              height={60}
              className="rounded-full border"
            />
          </div>

          {/* Job Details */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-xl">Senior UX Designer</h2>
              <span className="text-xs text-[#7900BA] ms-1 px-2 bg-[#DCBDED] py-1 rounded-xl">
                job.type
              </span>
            </div>

            <div className="flex text-sm text-gray-600 gap-5 mt-2 justify-between items-center">
              {/* Contact Information */}
              <div className="flex gap-5">
                <p className="flex items-center">
                  <GiCrossedChains className="mr-2" /> https://instagram.com
                </p>
                <p className="flex items-center">
                  <FiPhone className="mr-2" /> (406) 555-0120
                </p>
                <p className="flex items-center">
                  <TfiEmail className="mr-2" /> career@instagram.com
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 items-center">
            <FaBookmark className="text-purple-600" size={20} />
            <FiFlag className="text-purple-600" size={20} />
            <button
              onClick={() => setshowmodal(true)}
              className="bg-[#7900BA] text-white px-16 py-2 rounded hover:bg-purple-600 hover:text-white"
            >
              Apply Now
            </button>
          </div>
          <p className="absolute top-[275px]  text-[14px] right-[40px]">
            Job expire in:{" "}
            <span className="text-[#E05151]"> June 30, 2021</span>
          </p>
        </div>

        {/* Job Content */}
        <div className="grid grid-cols-[2fr,1fr] gap-5">
          {/* Left Column */}
          <div>
            <section className="mb-5">
              <h3 className="font-bold text-lg">Job Description</h3>

              <br />
              <p className="text-[#5E6670]">
                As a Senior UI/UX Designer, you will craft intuitive and
                visually compelling designs that elevate <br /> user
                experiences. Collaborating closely with product managers and
                developers, you'll lead the <br /> end-to-end design process,
                including research, wire framing, prototyping, and high-fidelity{" "}
                <br /> visuals. You possess a deep understanding of design
                principles, user psychology, and industry <br /> trends. With
                exceptional proficiency in Figma and similar tools, you ensure
                designs are both <br /> innovative and practical. Your expertise
                in solving complex problems and delivering pixel-perfect <br />{" "}
                designs will play a critical role in shaping our digital
                products and achieving business goals.
              </p>
              <br />
              <p className="text-[#5E6670]">
                As a Senior UI/UX Designer, you’ll create seamless designs
                tailored to user needs. You will <br /> oversee every design
                stage—from research and wireframes to interactive prototypes and
                final <br />
                visuals. With expertise in user-centric design, tools like
                Figma, and cross-functional <br /> collaboration, you’ll craft
                experiences that balance innovation, functionality, and business
                goals.
              </p>
              <br />
            </section>

            <section className="mb-5">
              <h3 className="font-bold text-lg">Responsibilities</h3>
              <ul className="list-disc pl-5 mt-3 text-[#5E6670] leading-loose">
                <li>
                  Conduct user research to identify pain points and
                  opportunities.
                </li>
                <li>Create wireframes, prototypes, and user flows.</li>
                <li>Collaborate with developers for design feasibility.</li>
                <li>Iterate designs based on feedback.</li>
                <li>
                  Maintain design consistency and innovate new approaches.
                </li>
                <li>Design for accessibility and inclusivity.</li>
                <li>Document processes and maintain a component library.</li>
                <li>Stay updated with industry trends.</li>
              </ul>
            </section>

            <section className="mb-5">
              <h3 className="font-bold text-lg">Skills & Qualifications</h3>
              <ul className="list-disc pl-5 mt-3 text-[#5E6670] leading-loose">
                <li>Bachelor’s degree in UX or related field.</li>
                <li>5+ years of experience in UX design.</li>
                <li>Proficiency in tools like Figma, Sketch, or Adobe XD.</li>
                <li>
                  Strong understanding of user-centered design principles.
                </li>
                <li>Excellent communication skills.</li>
                <li>Ability to manage multiple projects effectively.</li>
              </ul>
            </section>

            <section className="mb-5">
              <h3 className="font-bold text-lg">Salary</h3>
              <p className="text-[#5E6670] mt-3">
                ₹6,00,000 per annum (₹50,000 per month)
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg">Additional Benefits</h3>
              <p className="text-[#5E6670] mt-3">
                Includes performance bonus and health insurance.
              </p>
              <div className="flex  gap-7 mt-7 ">
                <p>Share this job:</p>

                <div className="flex gap-6 pt-1">
                  <RiFacebookFill color="blue" />

                  <BsTwitter color="blue" />

                  <FaInstagram color="blue" />
                  <TbBrandWhatsapp color="blue" />
                </div>
              </div>
              <div className="mt-6">
                <p className="text-lg font-bold">
                  Job Search faster with Premium
                </p>
                <p className="pt-5 text-[#5E6670]">
                  Access company insights like strategic priorities,
                  <br /> headcount trends, and more
                </p>
                <div className="mt-5">
                  <span className="bg-[#F8AC6C] px-3 text-sm rounded-xl py-2">
                    Try Premium for ₹599
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div>
            <div className="border-2 border-[#DCBDED] min-h-[420px] rounded-md  shadow-sm mb-5 ">
              <div className="py-4 px-5">
                <p className="font-semibold text-lg">Job Overview</p>
              </div>
              <div className="grid grid-cols-3 gap-5 h-full">
                <div className="flex items-center justify-center py-3  rounded-md">
                  <div>
                    <div>
                      <CiCalendar size={25} color="#7900BA" />
                    </div>
                    <div className="mt-3 leading-7">
                      <p className="text-[#767F8C] text-[12px]">JOB POSTED</p>
                      <p className="text-[14px] ">14 June, 2021</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center py-3  rounded-md">
                  <div>
                    <div>
                      <CiStopwatch size={25} color="#7900BA" />
                    </div>
                    <div className="mt-3 leading-7">
                      <p className="text-[#767F8C] text-[12px]">
                        JOB EXPIRE IN:
                      </p>
                      <p className="text-[14px] ">14 June, 2021</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center py-3  rounded-md">
                  <div>
                    <div>
                      <TfiBag size={25} color="#7900BA" />
                    </div>
                    <div className="mt-3 leading-7">
                      <p className="text-[#767F8C] text-[12px]">EDUCATION</p>
                      <p className="text-[14px] ">Graduation</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center py-3 ps-6  rounded-md">
                  <div>
                    <div>
                      <PiWallet size={25} color="#7900BA" />
                    </div>
                    <div className="mt-3 leading-7">
                      <p className="text-[#767F8C] text-[12px]">SALARY:</p>
                      <p className="text-[14px] ">$50k-80k/month</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center  py-3 rounded-md">
                  <div>
                    <div>
                      <GrLocation size={25} color="#7900BA" />
                    </div>
                    <div className="mt-3 leading-7">
                      <p className="text-[#767F8C] text-[12px]">LOCATION:</p>
                      <p className="text-[14px] ">New York, USA</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center py-3  rounded-md">
                  <div>
                    <div>
                      <TfiBag size={25} color="#7900BA" />
                    </div>
                    <div className="mt-3 leading-7">
                      <p className="text-[#767F8C] text-[12px]">JOB TYPE:</p>
                      <p className="text-[14px] ">Full Time</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center py-3 rounded-md">
                  <div>
                    <div>
                      <TfiBag size={25} color="#7900BA" />
                    </div>
                    <div className="mt-3 leading-7">
                      <p className="text-[#767F8C] text-[12px]">EXPERIENCE</p>
                      <p className="text-[14px] ">10-15 Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-[#DCBDED] p-4 min-h-[420px] rounded-lg shadow-sm">
              <div className="flex">
                <div>
                  <img src={apple} alt="" />
                </div>
                <div className="ps-4 py-2">
                  <p className="text-[20px]">Instragram</p>
                  <p className="text-[#767F8C] text-[14px]">
                    Social networking service
                  </p>
                </div>
              </div>
              <div className="grid mt-5 grid-cols-2 gap-5">
                <div>
                  <p className="text-[#5E6670]">Founded in:</p>
                </div>
                <div className="mx-8">
                  <p>March 21,2006</p>
                </div>
              </div>
              <div className="grid mt-5 grid-cols-2  gap-5">
                <div>
                  <p className="text-[#5E6670]">Organization type:</p>
                </div>
                <div className="mx-8">
                  <p>Private Company</p>
                </div>
              </div>
              <div className="grid mt-5 grid-cols-2 gap-5">
                <div>
                  <p className="text-[#5E6670]">Company size:</p>
                </div>
                <div className="mx-7">
                  <p>120-300 Employers</p>
                </div>
              </div>
              <div className="grid mt-5 grid-cols-2 gap-5">
                <div>
                  <p className="text-[#5E6670]">Phone:</p>
                </div>
                <div className="mx-8">
                  <p>(406) 555-0120</p>
                </div>
              </div>
              <div className="grid mt-5 grid-cols-2 gap-5">
                <div>
                  <p className="text-[#5E6670]">Email:</p>
                </div>
                <div className="mx-8">
                  <p>twitter@gmail.com</p>
                </div>
              </div>
              <div className="grid mt-5 grid-cols-2 gap-5">
                <div>
                  <p className="text-[#5E6670]">Website:</p>
                </div>
                <div className="mx-8">
                  <p>https://twitter.com</p>
                </div>
              </div>
              <div className="mt-10 ">
                <div className="flex gap-2">
                  <div className="px-3 bg-[#DCBDED] py-3 rounded-md">
                    <FaFacebookF color="#7900BA" />
                  </div>
                  <div className="px-3 bg-[#DCBDED] py-3 rounded-md">
                    <FaTwitter color="#7900BA" />
                  </div>
                  <div className="px-3 bg-[#DCBDED] py-3 rounded-md">
                    <FaInstagram color="#7900BA" />
                  </div>
                  <div className="px-3 bg-[#DCBDED] py-3 rounded-md">
                    <IoLogoYoutube color="#7900BA" />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <div className="flex">
                  <div>
                    <p>Set alert for similar jobs</p>
                  </div>
                  <div className="ms-32">
                    <CgToggleOff color="#6712B9" size={25} />
                  </div>
                </div>
                <div>
                  <p className="text-[#5E6670]">
                    User Experience Designer, Pune, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-10 mt-24">
        <div className="flex items-center gap-4  pb-5 mb-5">
          <div className="flex-1">
            <h2 className="font-bold text-3xl">Related Jobs</h2>
          </div>
          <div className="flex gap-3">
            <div className="bg-[#DCBDED] py-2 px-4">
              <FaArrowLeft color="#7900BA" />
            </div>
            <div className="bg-[#DCBDED] py-2 px-4">
              <FaArrowRight color="#7900BA" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-10 mt-10">
        <div className="grid grid-cols-3 ps-7 gap-3">
          <div className="h-[204px] w-[350px]  p-5   ">
            <div className="flex">
              <div>
                <img src={apple} alt="" srcset="" />
              </div>

              <div className="ps-3 py-2">
                <p>Freepik</p>
                {/* <CiLocationOn /> */}
                <div className="flex">
                  <div className="relative top-1">
                    <CiLocationOn size={20} color="#939AAD" />
                  </div>
                  <div className="ps-2 py-1">
                    <p className="text-[#939AAD]">china</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5">
              <p>Visual Designer</p>
              <div className="flex text-[#636A80] py-2">
                <p>Full-time • $40K-$50K</p>
              </div>
            </div>
          </div>
          <div className="h-[204px] w-[350px]  p-5  ">
            <div className="flex">
              <div>
                <img src={apple} alt="" srcset="" />
              </div>

              <div className="ps-3 py-2">
                <p>Freepik</p>
                {/* <CiLocationOn /> */}
                <div className="flex">
                  <div className="relative top-1">
                    <CiLocationOn size={20} color="#939AAD" />
                  </div>
                  <div className="ps-2 py-1">
                    <p className="text-[#939AAD]">china</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5">
              <p>Visual Designer</p>
              <div className="flex text-[#636A80] py-2">
                <p>Full-time • $40K-$50K</p>
              </div>
            </div>
          </div>
          <div className="h-[204px]  w-[350px]  p-5">
            <div className="flex">
              <div>
                <img src={apple} alt="" srcset="" />
              </div>

              <div className="ps-3 py-2">
                <p>Freepik</p>
                {/* <CiLocationOn /> */}
                <div className="flex">
                  <div className="relative top-1">
                    <CiLocationOn size={20} color="#939AAD" />
                  </div>
                  <div className="ps-2 py-1">
                    <p className="text-[#939AAD]">china</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5">
              <p>Visual Designer</p>
              <div className="flex text-[#636A80] py-2">
                <p>Full-time • $40K-$50K</p>
              </div>
            </div>
          </div>
          <div className="h-[204px] w-[350px]  p-5 ">
            <div className="flex">
              <div>
                <img src={apple} alt="" srcset="" />
              </div>

              <div className="ps-3 py-2">
                <p>Freepik</p>
                {/* <CiLocationOn /> */}
                <div className="flex">
                  <div className="relative top-1">
                    <CiLocationOn size={20} color="#939AAD" />
                  </div>
                  <div className="ps-2 py-1">
                    <p className="text-[#939AAD]">china</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5">
              <p>Visual Designer</p>
              <div className="flex text-[#636A80] py-2">
                <p>Full-time • $40K-$50K</p>
              </div>
            </div>
          </div>
          <div className="h-[204px] w-[350px]  p-5 ">
            <div className="flex">
              <div>
                <img src={apple} alt="" srcset="" />
              </div>

              <div className="ps-3 py-2">
                <p>Freepik</p>
                {/* <CiLocationOn /> */}
                <div className="flex">
                  <div className="relative top-1">
                    <CiLocationOn size={20} color="#939AAD" />
                  </div>
                  <div className="ps-2 py-1">
                    <p className="text-[#939AAD]">china</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5">
              <p>Visual Designer</p>
              <div className="flex text-[#636A80] py-2">
                <p>Full-time • $40K-$50K</p>
              </div>
            </div>
          </div>
          <div className="h-[204px] w-[350px]  p-5 ">
            <div className="flex">
              <div>
                <img src={apple} alt="" srcset="" />
              </div>

              <div className="ps-3 py-2">
                <p>Freepik</p>
                {/* <CiLocationOn /> */}
                <div className="flex">
                  <div className="relative top-1">
                    <CiLocationOn size={20} color="#939AAD" />
                  </div>
                  <div className="ps-2 py-1">
                    <p className="text-[#939AAD]">china</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5">
              <p>Visual Designer</p>
              <div className="flex text-[#636A80] py-2">
                <p>Full-time • $40K-$50K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showmodal && <Applypopup setshowmodal={setshowmodal} />}
    </div>
  );
};

export default Findjobdetails;
