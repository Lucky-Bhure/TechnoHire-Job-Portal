import React from "react";
import Header from "../../../components/header/Header";
import { FaBookmark, FaInstagram } from "react-icons/fa";
import { FiFlag } from "react-icons/fi";
const Findjob = () => {
  return (
    <div>
      <Header />
      <div className="mt-5 ">
        <div className="flex h-20 gap-4 my-2">
          <div className="ps-1">
            <img src="" width={50} alt="" />
          </div>
          <div className="px-1">
            <div className="flex  py-[3px]">
              <p className="font-bold">job.title</p>
              <span className="text-xs text-[#7900BA] px-2 bg-[#DCBDED] py-1 ml-4 rounded-xl flex items-center">
                job.type
              </span>
            </div>
            <div className="flex">
              <div className="flex">
                {/* <CiLocationOn
                        className="relative right-1 bottom-[-2px]"
                        size={20}
                        color="#636A80"
                      /> */}
                <p className="text-[#636A80]">job.location</p>&nbsp;
                <p className="ps-3 text-[#636A80]">job.salary</p>
                {/* <CiCalendar
                            size={20}
                            className="relative text-[#636A80] left-3 top-[2px]"
                            /> */}
                <p className="text-[#636A80] ps-5">job.jobtimes</p>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <div className="flex">
              <div className="ps-3 py-7">
                <FaBookmark color="#7900BA" size={20} />
              </div>
              <div className="ps-3 py-7">
                <FiFlag color="#7900BA" size={20} />
              </div>
              <div className="flex mx-3 my-5">
                <button className="bg-[#DCBDED] px-7 py-2 text-[#7900BA] hover:bg-[#7900BA] cursor-pointer hover:text-white">
                  <b className="pe-2">Apply Now</b>
                </button>
                &nbsp;
                {/* <FaArrowRight className="relative text-[#7900BA] hover:text-white top-4 right-8" /> */}
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-[900px,600px] gap-2 ">
          <div className="bg-red-600 h-screen">1</div>
          <div className=" h-[70%]">
            <div className="grid h-1/2 gap-5  grid-rows-2">
              <div className="bg-pink-500 border h-[300px] border-red-600">
                1
              </div>
              <div className="bg-orange-500 border h-[100px] my-40 border-red-600">
                2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Findjob;
