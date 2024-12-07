import React, { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { GiKnightBanner } from "react-icons/gi";
import { MdOutlineWatchLater } from "react-icons/md";

const Scheduleinterview = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  return (
    <>
      <Layout>
        <div className="pt-10">
          <p className="font-bold text-lg">Interview Alert</p>
          <div className="mt-8">
            <p className="text-2xl text-[#666666]">Inverviews &nbsp;(1)</p>
            <p className="pt-4 text-[#666666]">
              Review Your upcoming interviews and stay prepared to shine!
            </p>
          </div>
          <div className="py-11 px-3 ">
            <div className="flex h-20 gap-4 ">
              <div className="ps-1">imges</div>
              <div className="px-1">
                <div className="flex py-2">
                  <p className="font-bold">Technical Support Specialist</p>
                  <span className="text-xs px-2 text-[#7900BA]  bg-[#DCBDED] py-1 ml-4 rounded-xl flex items-center">
                    Full time
                  </span>
                </div>
                <div className="flex">
                  <div className="flex">
                    <CiLocationOn
                      className="relative right-1 bottom-[-2px]"
                      size={20}
                      color="#636A80"
                    />
                    <p className="text-[#636A80]">ldaho,usa</p>&nbsp;
                    <p className="ps-3 text-[#636A80]">₹10k-₹50k</p>
                    <CiCalendar
                      size={20}
                      className="relative text-[#636A80] left-3 top-[2px]"
                    />
                    <p className="text-[#636A80] ps-5">
                      Scheduled at 01-12-2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="ml-auto">
                <div className="flex">
                  <div className="ps-3 py-7">
                    <GiKnightBanner color="#7900BA" size={30} />
                  </div>
                  <div className="flex mx-3 my-5">
                    <>
                      <button className="bg-[#DCBDED] px-7 py-2 text-[#7900BA] hover:bg-[#7900BA] cursor-pointer hover:text-white">
                        <b className="pe-4 relative left-4">10:30 AM</b>
                      </button>
                      &nbsp;
                      <MdOutlineWatchLater
                        size={20}
                        className="relative text-[#7900BA] hover:text-white top-[14px] right-[135px]"
                      />
                    </>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="py-5">
              <p className="text-2xl text-[#666666]">Upcoming&nbsp;(4)</p>
              <p className="pt-4 text-[#666666]">
                Prepare for your upcoming interviews and stay prepared to shine!
              </p>
              <div className="flex my-8 h-20 gap-4 ">
                <div className="ps-1">imges</div>
                <div className="px-1">
                  <div className="flex py-2">
                    <p className="font-bold">Technical Support Specialist</p>
                    <span className="text-xs px-2 text-[#7900BA]  bg-[#DCBDED] py-1 ml-4 rounded-xl flex items-center">
                      Full time
                    </span>
                  </div>
                  <div className="flex">
                    <div className="flex">
                      <CiLocationOn
                        className="relative right-1 bottom-[-2px]"
                        size={20}
                        color="#636A80"
                      />
                      <p className="text-[#636A80]">ldaho,usa</p>&nbsp;
                      <p className="ps-3 text-[#636A80]">₹10k-₹50k</p>
                      <CiCalendar
                        size={20}
                        className="relative text-[#636A80] left-3 top-[2px]"
                      />
                      <p className="text-[#636A80] ps-5">
                        Scheduled at 01-12-2024
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ml-auto">
                  <div className="flex">
                    <div className="ps-3 py-7">
                      <GiKnightBanner color="#7900BA" size={30} />
                    </div>
                    <div className="flex mx-3 my-5">
                      <>
                        <button className="bg-[#DCBDED] px-7 py-2 text-[#7900BA] hover:bg-[#7900BA] cursor-pointer hover:text-white">
                          <b className="pe-4 relative left-4">10:30 AM</b>
                        </button>
                        &nbsp;
                        <MdOutlineWatchLater
                          size={20}
                          className="relative text-[#7900BA] hover:text-white top-[14px] right-[135px]"
                        />
                      </>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex my-8 h-20 gap-4 ">
                <div className="ps-1">imges</div>
                <div className="px-1">
                  <div className="flex py-2">
                    <p className="font-bold">Technical Support Specialist</p>
                    <span className="text-xs px-2 text-[#7900BA]  bg-[#DCBDED] py-1 ml-4 rounded-xl flex items-center">
                      Full time
                    </span>
                  </div>
                  <div className="flex">
                    <div className="flex">
                      <CiLocationOn
                        className="relative right-1 bottom-[-2px]"
                        size={20}
                        color="#636A80"
                      />
                      <p className="text-[#636A80]">ldaho,usa</p>&nbsp;
                      <p className="ps-3 text-[#636A80]">₹10k-₹50k</p>
                      <CiCalendar
                        size={20}
                        className="relative text-[#636A80] left-3 top-[2px]"
                      />
                      <p className="text-[#636A80] ps-5">
                        Scheduled at 01-12-2024
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ml-auto">
                  <div className="flex">
                    <div className="ps-3 py-7">
                      <GiKnightBanner color="#7900BA" size={30} />
                    </div>
                    <div className="flex mx-3 my-5">
                      <>
                        <button className="bg-[#DCBDED] px-7 py-2 text-[#7900BA] hover:bg-[#7900BA] cursor-pointer hover:text-white">
                          <b className="pe-4 relative left-4">10:30 AM</b>
                        </button>
                        &nbsp;
                        <MdOutlineWatchLater
                          size={20}
                          className="relative text-[#7900BA] hover:text-white top-[14px] right-[135px]"
                        />
                      </>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex my-8 h-20 gap-4 ">
                <div className="ps-1">imges</div>
                <div className="px-1">
                  <div className="flex py-2">
                    <p className="font-bold">Technical Support Specialist</p>
                    <span className="text-xs px-2 text-[#7900BA]  bg-[#DCBDED] py-1 ml-4 rounded-xl flex items-center">
                      Full time
                    </span>
                  </div>
                  <div className="flex">
                    <div className="flex">
                      <CiLocationOn
                        className="relative right-1 bottom-[-2px]"
                        size={20}
                        color="#636A80"
                      />
                      <p className="text-[#636A80]">ldaho,usa</p>&nbsp;
                      <p className="ps-3 text-[#636A80]">₹10k-₹50k</p>
                      <CiCalendar
                        size={20}
                        className="relative text-[#636A80] left-3 top-[2px]"
                      />
                      <p className="text-[#636A80] ps-5">
                        Scheduled at 01-12-2024
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ml-auto">
                  <div className="flex">
                    <div className="ps-3 py-7">
                      <GiKnightBanner color="#7900BA" size={30} />
                    </div>
                    <div className="flex mx-3 my-5">
                      <>
                        <button className="bg-[#DCBDED] px-7 py-2 text-[#7900BA] hover:bg-[#7900BA] cursor-pointer hover:text-white">
                          <b className="pe-4 relative left-4">10:00 AM</b>
                        </button>
                        &nbsp;
                        <MdOutlineWatchLater
                          size={20}
                          className="relative text-[#7900BA] hover:text-white top-[14px] right-[135px]"
                        />
                      </>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Scheduleinterview;
