import React, { useEffect } from "react";
import Layout from "../../../components/Layout/Layout";
import { CiLocationOn } from "react-icons/ci";
import { TiTick } from "react-icons/ti";
import apple from "../../../assets/appleLogo.png";
import useTheme from "../../../hooks/theme/useTheme";
import { themes } from "../../../components/Themes/Theme";
import { useNavigate } from "react-router-dom";

const Aplliedjobs = () => {
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
      title: "products Designer",
      location: "Dhaka",
      salary: "₹50k/80k month",
      dateApplied: "Mar 15, 2021 12:10",
      status: "Pending",
      type: "full-time",
    },
    {
      id: 2,
      title: "Junior Graphic Designer",
      location: "Brazil",
      salary: "₹60k/90k month",
      dateApplied: "Mar 15, 2021 12:10",
      status: "Pending",
      type: "remote",
    },
    {
      id: 2,
      title: "Visual Designer",
      location: "Wisconsin",
      salary: "₹60k/90k month",
      dateApplied: "Mar 15, 2021 12:10",
      status: "Pending",
      type: "Contract Based",
    },
    {
      id: 2,
      title: "Marketing Officer",
      location: "United States",
      salary: "₹60k/90k month",
      dateApplied: "Mar 15, 2021 12:10",
      status: "Pending",
      type: "Remote",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      location: "North Dakota",
      salary: "₹60k/90k month",
      dateApplied: "Mar 15, 2021 12:10",
      status: "Pending",
      type: "full-time",
    },
  ];

  return (
    <>
      <Layout>
        <div className="pt-10">
          <p className="text-xl font-bold ">
            Applied Jobs <span className="text-gray-400">(589)</span>
          </p>
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
                          <TiTick
                            color={`${e.status === "Active" ? "green" : "red"}`}
                          />
                        </div>
                        <div
                          className={`ps-3 ${
                            e.status === "Active"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {e.status}
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-1 font-medium text-center">
                      <button
                        onClick={() => navigate("/application-details")}
                        className="hover:bg-[#7900BA] hover:text-white text-[#7900BA] bg-[#DCBDED]  w-[130px] text-[15px]  px-2 py-3 cursor-pointer  "
                      >
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

export default Aplliedjobs;
