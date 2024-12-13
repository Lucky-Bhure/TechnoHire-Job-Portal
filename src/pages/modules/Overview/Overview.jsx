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
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

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
    <Layout>
      <div className="pt-10 px-4 md:px-8">
        <p className="text-xl font-bold">Hello, Ninad Sathe</p>
        <p className="text-md text-gray-400 mb-6">
          Here is Your Daily activities and job alerts
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-6">
          <div className="bg-[#DCBDED] rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-2xl font-bold">589</p>
                <p className="text-sm text-gray-500">Applied jobs</p>
              </div>
              <div className="w-16 h-16 bg-[#F5F5F5] rounded-md flex items-center justify-center">
                <LuShoppingBag size={40} />
              </div>
            </div>
          </div>
          <div className="bg-[#FFF6E6] rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-2xl font-bold">238</p>
                <p className="text-sm text-gray-500">Saved jobs</p>
              </div>
              <div className="w-16 h-16 bg-[#F5F5F5] rounded-md flex items-center justify-center">
                <FaBookmark size={40} />
              </div>
            </div>
          </div>
          <div className="bg-[#E7F6EA] rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-gray-500">Scheduled Interview</p>
              </div>
              <div className="w-16 h-16 bg-[#F5F5F5] rounded-md flex items-center justify-center">
                <LuBellRing size={40} />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundColor: theme.bgColorforProfile }}
          className="grid grid-cols-1 sm:grid-cols-3 mt-6 rounded-lg overflow-hidden"
        >
          <div className="col-span-3 px-4 sm:px-10 py-7 flex flex-col sm:flex-row items-center sm:items-start">
            <img
              className="cursor-pointer w-[70px] h-[70px] object-cover rounded-full hover:border-2 hover:border-black mb-4 sm:mb-0"
              src="https://plus.unsplash.com/premium_photo-1690086519096-0594592709d3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
            />
            <div className="mt-4 sm:mt-0 sm:ml-10 text-center sm:text-left">
              <p className="font-semibold text-lg sm:text-xl">
                Your Profile editing is not completed
              </p>
              <p className="text-sm sm:text-base">Complete your profile</p>
            </div>
            <div className="ml-auto flex items-center justify-center sm:justify-start mt-4 sm:mt-0">
              <Flex wrap gap="small">
                <Progress
                  strokeColor={theme.progressBarcolor}
                  type="circle"
                  percent={90}
                  size={80}
                />
                <div className="relative right-[78px] top-[10px]">
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
            <button
              onClick={() => navigate("/dashboard/my-profile")}
              className="bg-white cursor-pointer my-2 h-[55px] w-[165px] mx-auto sm:mx-0"
            >
              <div className="px-4 py-[17px]">
                <p
                  className="font-bold "
                  style={{ color: theme.ButtonbgColor }}
                >
                  Edit Profile
                </p>
                <div className="relative left-28 bottom-5 sm:left-28 sm:bottom-5">
                  <FaArrowRight color={theme.ButtonbgColor} />
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="mt-6 mb-4 flex justify-between items-center">
          <p className="text-lg font-semibold">Recently Applied</p>
          <div className="flex items-center text-sm text-gray-500">
            <p>View all</p>
            <FaArrowRight className="ml-2" />
          </div>
        </div>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="table-auto w-full">
            <thead>
              <tr
                style={{ backgroundColor: "#F1F2F4" }}
                className="text-center"
              >
                <th className="px-6 py-3 text-sm">Jobs</th>
                <th className="px-6 py-3 text-sm">Date Applied</th>
                <th className="px-6 py-3 text-sm">Status</th>
                <th className="px-6 py-3 text-sm">Action</th>
              </tr>
            </thead>
            <tbody className="animate-fade-in">
              {jobData.map((e) => (
                <tr className="border-b-2 border-gray-300" key={e.id}>
                  <td className="px-4 py-2 font-medium text-center text-gray-500">
                    <div className="flex items-center">
                      <img src={apple} width={50} alt="Company Logo" />
                      <p className="ml-3 text-sm">{e.title}</p>
                      <span
                        style={{ backgroundColor: "#DCBDED" }}
                        className="py-1 px-2 ml-2 h-6 text-xs rounded-xl"
                      >
                        <span style={{ color: theme.ButtonbgColor }}>
                          {e.type}
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center   ms-14">
                      <CiLocationOn className="text-gray-500 mr-2" size={20} />
                      <p className="text-sm">{e.location}</p>
                      <p className="ml-4 text-sm">{e.salary}</p>
                    </div>
                  </td>

                  <td className="px-4 py-2 font-medium text-center text-gray-500">
                    {e.dateApplied}
                  </td>

                  <td className="px-4 py-2 font-medium text-center text-green-500">
                    <div className="flex items-center">
                      <TiTick color="green" />
                      <p className="ml-2">{e.status}</p>
                    </div>
                  </td>

                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => navigate("/application-details")}
                      className="bg-[#DCBDED] hover:bg-[#7900BA] hover:text-white text-[#7900BA] text-sm px-4 py-2 rounded-lg"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Overview;
