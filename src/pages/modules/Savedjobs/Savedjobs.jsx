import React, { useEffect } from "react";
import Layout from "../../../components/Layout/Layout";
import { CiLocationOn } from "react-icons/ci";
import { TiTick } from "react-icons/ti";
import useTheme from "../../../hooks/theme/useTheme";
import { themes } from "../../../components/Themes/Theme";
import { RxCrossCircled } from "react-icons/rx";
import { CiCalendar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { GiKnightBanner } from "react-icons/gi";

const Savedjobs = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme(themes.OverviewThemes);
  }, [theme]);

  const jobData = [
    {
      id: 1,
      title: "Network Engineering",
      location: "Washington,Usa",
      salary: "₹50k/80k month",
      type: "Full-time",
      jobtimes: "Job Expired",
    },
    {
      id: 2,
      title: "Product Designer",
      location: "Dhaka,Usa",
      salary: "₹50k/80k month",
      type: "Full-time",
      jobtimes: "4 Days Remaining",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Minnesota,Usa",
      salary: "₹10k/20k month",
      type: "Full-time",
      jobtimes: "7 Days Remaining",
    },
    {
      id: 4,
      title: "Senior Devloper",
      location: "Minnesota,Usa",
      salary: "₹30k/40k month",
      type: "part-time",
      jobtimes: "Job Expired",
    },
    {
      id: 5,
      title: "Project Manager",
      location: "Sivay,Turkey",
      salary: "₹100k/120k month",
      type: "full-time",
      jobtimes: "5 days Remaining",
    },
    {
      id: 6,
      title: "Junior Graphic Designer",
      location: "lahore,pakistan",
      salary: "₹10k/20k month",
      type: "full-time",
      jobtimes: "2 days Remaining",
    },
  ];

  return (
    <>
      <Layout>
        <div className="pt-10">
          <p className="text-xl font-bold">
            Saved Jobs <span className="text-gray-400">({jobData.length})</span>
          </p>
          {jobData.map((job) => (
            <div key={job.id}>
              <div className="flex h-20 gap-4 my-2">
                <div className="ps-1">imges</div>
                <div className="px-1">
                  <div className="flex py-2">
                    <p className="font-bold">{job.title}</p>
                    <span className="text-xs text-[#7900BA] px-2 bg-[#DCBDED] py-1 ml-4 rounded-xl flex items-center">
                      {job.type}
                    </span>
                  </div>
                  <div className="flex">
                    <div className="flex">
                      <CiLocationOn
                        className="relative right-1 bottom-[-2px]"
                        size={20}
                        color="#636A80"
                      />
                      <p className="text-[#636A80]">{job.location}</p>&nbsp;
                      <p className="ps-3 text-[#636A80]">{job.salary}</p>
                      {job.jobtimes === "Job Expired" ? (
                        <>
                          <RxCrossCircled
                            className="relative left-2 top-1"
                            color="red"
                          />
                          <p className="text-red-500 ps-4">{job.jobtimes}</p>
                        </>
                      ) : (
                        <>
                          <CiCalendar
                            size={20}
                            className="relative text-[#636A80] left-3 top-[2px]"
                          />
                          <p className="text-[#636A80] ps-5">{job.jobtimes}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="ml-auto">
                  <div className="flex">
                    <div className="ps-3 py-7">
                      <GiKnightBanner color="#7900BA" size={30} />
                    </div>
                    <div className="flex mx-3 my-5">
                      {job.jobtimes === "Job Expired" ? (
                        <button
                          disabled
                          className="bg-[#F1F2F4] px-7 py-2 text-[#9199A3]  cursor-pointer "
                        >
                          <b className="pe-2">Deadline Expired</b>
                        </button>
                      ) : (
                        <>
                          <button className="bg-[#DCBDED] px-7 py-2 text-[#7900BA] hover:bg-[#7900BA] cursor-pointer hover:text-white">
                            <b className="pe-2">Apply Now</b>
                          </button>
                          &nbsp;
                          <FaArrowRight className="relative text-[#7900BA] hover:text-white top-4 right-8" />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Savedjobs;
