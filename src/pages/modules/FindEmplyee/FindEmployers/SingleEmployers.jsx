import React from "react";
import Header from "../../../../components/header/Header";
import instagram from "../../../../assets/Profileassests/instagrm.jpg";
import insta from "../../../../assets/instagram.png";
import { TfiBag, TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaEarthAmericas } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { IoLogoYoutube, IoMdStopwatch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { PiWallet } from "react-icons/pi";

const SingleEmployers = () => {
  return (
    <>
      <Header />
      <div className="bg-[#F1F2F4] p-4 ">
        <div className="flex">
          <div className="ms-20">
            <p className="font-semibold text-lg">Single Employers</p>
          </div>
          <div className="ms-auto pe-20">
            <p className="text-[#767F8C]">
              Home / Find Employers / &nbsp;
              <span className="text-[#18191C]">Single Employers</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className=" mx-24">
        <div className=" h-[312px]">
          <div className="h-[300px] overflow-hidden object-cover ">
            <img src={instagram} alt="" />
          </div>
          <div className="bg-white border h-[130px] rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex ms-8 my-8">
                <div className="rounded-xl">
                  <img src={insta} alt="" />
                </div>
                <div className="ps-4 leading-8">
                  <p>Instagram</p>
                  <p className="text-[#5E6670]">Information Technology it</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="flex px-4 py-4">
                    <TfiEmail color="#7900BA" className="ms-2" /> &nbsp;{" "}
                    <FiPhone color="#7900BA" className="ms-3" />
                  </div>
                  <div>
                    <button className="flex bg-[#7900BA] text-white p-3 me-7">
                      View Open position &nbsp;{" "}
                      <FaArrowRight className="relative top-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-40 ms-[110px]">
        <div className="grid grid-cols-2 gap-1">
          <div className="h-[240px] ">
            <div>
              <p className="text-[20px]">Company detail</p>
            </div>
            <div className="py-3">
              <p className="text-[16px] text-[#5E6670]">
                Instagram, a part of Meta, is a global platform that connects
                people through the power of visual storytelling. With over 2
                billion active users worldwide, Instagram enables individuals
                and businesses alike to create, share, and discover content
                across a variety of formats including photos, videos, stories,
                and more. We are at the forefront of the social media and tech
                industry, using innovation to redefine how people connect,
                communicate, and build communities. Our mission is to bring
                people closer through the stories they share. Whether you’re a
                user, a creator, or a business, Instagram fosters a platform
                that celebrates creativity, engagement, and inclusivity.
              </p>
            </div>
          </div>
          <div className="h-[268px] w-[500px] ms-[105px] border rounded-lg ">
            <div>
              <div className="grid grid-cols-2">
                <div className="h-[90px] ps-8 py-5 ">
                  <div>
                    <IoCalendarClearOutline color="#7900BA" size={25} />
                  </div>
                  <div className="py-2">
                    <p className="text-[12px] text-[#767F8C]">Founded in:</p>
                    <p className="text-[14px]">14 June, 2021</p>
                  </div>
                </div>
                <div className="h-[90px] ps-8 py-5">
                  <div>
                    <IoMdStopwatch color="#7900BA" size={25} />
                  </div>
                  <div className="py-2">
                    <p className="text-[12px] text-[#767F8C]">
                      ORGANIZATION TYPE
                    </p>
                    <p className="text-[14px]">Private Company</p>
                  </div>
                </div>

                <div className="h-[90px] ps-8 py-10">
                  <div>
                    <PiWallet color="#7900BA" size={25} />
                  </div>
                  <div className="py-2">
                    <p className="text-[12px] text-[#767F8C]">TEAM SIZE:</p>
                    <p className="text-[14px]">120-300 Candidates</p>
                  </div>
                </div>
                <div className="h-[90px] ps-8 py-10">
                  <div>
                    <TfiBag color="#7900BA" size={25} />
                  </div>
                  <div className="py-2">
                    <p className="text-[12px] text-[#767F8C]">INDUSTRY TYPES</p>
                    <p className="text-[14px]">Technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[144px]">
            <div>
              <p className="text-[20px]">Company Vision</p>
            </div>
            <div>
              <p className="text-[16px] text-[#5E6670] py-3">
                To empower people to create and share content that inspires,
                connects, and enables communities to thrive. Instagram’s vision
                is to continue shaping the digital world with authenticity,
                creativity, and innovation, while leading the way for future
                generations to connect meaningfully online.
              </p>
            </div>
          </div>
          <div className="h-[300px] w-[500px] border ms-[105px] my-5 rounded-lg">
            <div className="ps-5 pt-5">
              <p>Contact Information</p>
            </div>
            <div className="flex mt-5">
              <div className="ms-5">
                <FaEarthAmericas size={20} color="#7900BA" />
              </div>
              <div className="ps-5">
                <p className="text-[#767F8C] text-[12px]">WEBSITE</p>
                <p className="text-[16px]">www.estherhoward.com</p>
              </div>
            </div>
            <div className="border-b my-3"></div>
            <div className="flex mt-5">
              <div className="ms-5">
                <LuPhoneCall size={20} color="#7900BA" />
              </div>
              <div className="ps-5">
                <p className="text-[#767F8C] text-[12px]">PHONE</p>
                <p className="text-[16px]">+1-202-555-0141</p>
              </div>
            </div>
            <div className="border-b my-3"></div>
            <div className="flex mt-5">
              <div className="ms-5">
                <TfiEmail size={20} color="#7900BA" />
              </div>
              <div className="ps-5">
                <p className="text-[#767F8C] text-[12px]">EMAIL ADDRESS</p>
                <p className="text-[16px]">esther.howard@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="h-[396px]">
            <div className="relative bottom-44">
              <div>
                <p className="text-[20px]">Company Benefits</p>
                <p className="py-3 text-[16px] text-[#5E6670]">
                  Empowering businesses with innovative solutions, tailored
                  systems, and expert support, we deliver secure, seamless
                  technology to drive growth and redefine success.
                </p>
                <ul className="list-decimal text-[16px] text-[#5E6670] ps-5">
                  <li>Career Growth and Learning</li>
                  <ul className="list-disc text-[16px] text-[#5E6670] ps-5">
                    <li>
                      Instagram offers a diverse and inclusive work environment
                      that fosters creativity, learning, and career growth. We
                      encourage continuous learning with access to mentorship,
                      professional development programs, and industry-leading
                      conferences.
                    </li>
                  </ul>
                  <li className="pt-3">Work-Life Balance</li>
                  <ul className="list-disc text-[16px] text-[#5E6670] ps-5">
                    <li>
                      We understand the importance of flexibility and mental
                      well-being. Instagram offers flexible working hours,
                      remote work options, and generous paid time off to ensure
                      employees maintain a healthy work-life balance.
                    </li>
                  </ul>
                  <li className="pt-3">Competitive Salary and Stock Options</li>
                  <ul className="list-disc text-[16px] text-[#5E6670] ps-5">
                    <li>
                      We offer highly competitive compensation packages with
                      base salaries, bonuses, and stock options that reward your
                      contributions to our continued success.
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-[156px] w-[500px] ms-[105px] my-1 border">
            <div className="p-8">
              <div className="text-[20px] ">
                <p>Follow us On:</p>
              </div>
              <div className="flex pt-3 gap-2">
                <div className="bg-[#DCBDED] rounded-md px-3 py-3">
                  <FaTwitter color="#7900BA" />
                </div>
                <div className="bg-[#DCBDED] rounded-md px-3 py-3">
                  <FaFacebookF color="#7900BA" />
                </div>
                <div className="bg-[#DCBDED] rounded-md px-3 py-3">
                  <FaInstagram color="#7900BA" />
                </div>
                <div className="bg-[#DCBDED] rounded-md px-3 py-3">
                  <IoLogoYoutube color="#7900BA" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[40px] relative bottom-40 ">
            <div className="flex ">
              <div>
                <p className="text-[14px]">Share profile:</p>
              </div>
              <div className="flex gap-3 ps-3 py-1">
                <div className="hover:bg-purple-700 text-[#7900BA] hover:px-2 hover:text-white hover:py-2">
                  <FaTwitter />
                </div>
                <div className="hover:text-white text-[#7900BA] hover:bg-purple-700 hover:px-2 hover:py-2">
                  <FaFacebookF />
                </div>
                <div className="hover:bg-purple-700 text-[#7900BA] hover:px-2 hover:py-2 hover:text-white">
                  <FaInstagram />
                </div>
                <div className="hover:bg-purple-700 text-[#7900BA] hover:px-2 hover:py-2 hover:text-white">
                  <FaWhatsapp />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ms-8">
          <p className="text-[40px]">
            Open Position <span className="text-gray-400">(05)</span>{" "}
          </p>
          <div className="h-[432px] py-32 ">
            <div className="grid grid-cols-3">
              <div className="h-[204px]">
                <div className="flex">
                  <div>
                    <img src={insta} alt="" srcset="" />
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
              <div className="h-[204px]">
                <div className="flex">
                  <div>
                    <img src={insta} alt="" srcset="" />
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
              <div className="h-[204px]">
                <div className="flex">
                  <div>
                    <img src={insta} alt="" srcset="" />
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
              <div className="h-[204px]">
                <div className="flex">
                  <div>
                    <img src={insta} alt="" srcset="" />
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
              <div className="h-[204px]">
                <div className="flex">
                  <div>
                    <img src={insta} alt="" srcset="" />
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
        </div>
      </div>
    </>
  );
};

export default SingleEmployers;
