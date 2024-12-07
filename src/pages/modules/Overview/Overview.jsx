import React, { useEffect } from "react";
import Layout from "../../../components/Layout/Layout";
import useTheme from "../../../hooks/theme/useTheme";
import { LuShoppingBag } from "react-icons/lu";

import { FaBookmark } from "react-icons/fa6";
import apple from "../../../assets/appleLogo.png";
import { LuBellRing } from "react-icons/lu";
import { Flex, Progress } from "antd";
import { FaArrowRight } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { TiTick } from "react-icons/ti";
import { themes } from "../../../components/Themes/Theme";

const Overview = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme(themes.OverviewThemes);
  }, [theme]);

  const jobData = [
    {
      id: 1,
      title: "Network Engineering",
      location: "Washington",
      salary: "₹50k/80k month",
      dateApplied: "Feb 2, 2019 19:28",
      status: "Active",
      type: "Full-time",
    },
    {
      id: 2,
      title: "Software Developer",
      location: "New York",
      salary: "₹60k/90k month",
      dateApplied: "Mar 15, 2021 12:10",
      status: "Pending",
      type: "Part-time",
    },
  ];

  return (
    <>
      <Layout>
        <div className="pt-10">
          <p className="text-xl font-bold ">Hello, Ninad Sathe</p>
          <p className="text-md text-gray-400">
            Here is Your Daily activities and job alerts
          </p>
          <div className="grid grid-cols-3  mt-4 h-24 gap-5">
            <div style={{ backgroundColor: theme.backgroundColorfirst }}>
              <div className="flex">
                <div className="px-4 py-4">
                  <p className="text-2xl font-bold">589</p>

                  <p>Applied jobs</p>
                </div>
                <div className="w-20 rounded-md h-[70px] my-3 ms-44 bg-white">
                  <div className="px-5 py-4">
                    <LuShoppingBag size={40} />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ backgroundColor: theme.backgroundColorsecond }}>
              <div className="flex">
                <div className="px-4 py-4">
                  <p className="text-2xl font-bold">238</p>

                  <p>Saved jobs</p>
                </div>
                <div className="w-20 rounded-md h-[70px] my-3 ms-[185px] bg-white">
                  <div className="px-5 py-4">
                    <FaBookmark size={40} />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: theme.backgroundColorThird }}
              className=""
            >
              <div className="flex">
                <div className="px-4 py-4">
                  <p className="text-2xl font-bold">5</p>

                  <span>Scheduled Interview</span>
                </div>
                <div className="w-20 rounded-md h-[70px] my-3 ms-[119px] bg-white">
                  <div className="px-5 py-4">
                    <LuBellRing size={40} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: theme.bgColorforProfile }}
            className="grid h-[125px] grid-col-3 mt-6 rounded-lg "
          >
            <div className="col-span-3 px-10 py-7 flex ">
              <img
                className="cursor-pointer w-[70px] h-[70px] object-cover rounded-full hover:border-2 hover:border-black"
                src="https://plus.unsplash.com/premium_photo-1690086519096-0594592709d3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="ps-10 py-2">
                <span>Your profile editing is not completed</span>
                <p>complete Your Profile</p>
              </div>
              <div className="ps-[450px]    ">
                <Flex wrap gap="small">
                  <Progress
                    strokeColor={theme.progressBarcolor}
                    type="circle"
                    percent={90}
                    size={80}
                  />
                  <div className="relative right-[78px] top-[10px] ">
                    <Progress
                      type="circle"
                      strokeColor={theme.progressBarcolor}
                      percent={90}
                      format={() => null}
                      size={60}
                    />
                  </div>
                </Flex>
              </div>
              <button className="bg-white cursor-pointer my-2 h-[55px] w-[165px]">
                <div className="px-4 py-[17px]">
                  <p
                    className="font-bold"
                    style={{ color: theme.ButtonbgColor }}
                  >
                    Edit Profile
                  </p>
                  <div className="relative left-28 bottom-5">
                    <FaArrowRight color={theme.ButtonbgColor} />
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="mt-6 ">
            <div className="flex justify-between">
              <p>Recently Applied</p>
              <div className="flex  pe-4 ">
                <p style={{ color: "#767F8C" }}>View all</p>
                <span className="relative top-[4px] left-2">
                  <FaArrowRight style={{ color: "#767F8C" }} />
                </span>
              </div>
            </div>
          </div>
          <div className="p-2 font-light  overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr style={{ backgroundColor: "#F1F2F4" }}>
                  <th className="px-6 py-3  text-center">Jobs</th>
                  <th className="px-6 py-3  text-center">Date Applied</th>
                  <th className="px-6 py-3  text-center">Status</th>
                  <th className="px-6 py-3  text-center">Action</th>
                </tr>
              </thead>
              <tr>
                <td colSpan="13">
                  <hr className="border-t-2 border-light my-2" />
                </td>
              </tr>
              <tbody>
                {jobData.map((e) => (
                  <tr className="border-b-2 border-gray-300">
                    <td className="px-4 py-2 font-medium text-center text-gray-500">
                      <div className="flex">
                        <img src={apple} width={50} alt="" />
                        <p className="ps-3">{e.title}</p>
                        <span
                          style={{
                            backgroundColor: "#DCBDED",
                          }}
                          className="py-1 px-2 ms-2 h-6 text-xs rounded-xl"
                        >
                          <span style={{ color: theme.ButtonbgColor }}>
                            {e.type}
                          </span>
                        </span>
                      </div>
                      <div className="relative bottom-4 left-12">
                        <div className="flex">
                          <CiLocationOn
                            className="relative bottom-[2px] left-2"
                            size={20}
                          />
                          <p className="ps-3 text-sm">{e.location}</p>
                          <p className="ps-5 text-sm">{e.salary}</p>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-1 font-medium text-center text-gray-500">
                      {e.dateApplied}
                    </td>
                    <td className="px-4 py-1 font-medium text-center text-green-500">
                      <div className="flex">
                        <div className="py-1">
                          <TiTick color="green" />
                        </div>
                        <div className="ps-3">{e.status}</div>
                      </div>
                    </td>

                    <td className="px-4 py-1 font-medium text-center">
                      <button className="hover:bg-[#7900BA] hover:text-white text-[#7900BA] bg-[#DCBDED]  w-[130px] text-[15px]  px-2 py-3 cursor-pointer  ">
                        view Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Overview;
