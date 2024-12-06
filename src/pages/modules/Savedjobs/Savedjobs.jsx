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
      location: "Washington",
      salary: "₹50k/80k month",
      dateApplied: "Feb 2, 2019 19:28",
      status: "Active",
      type: "Full-time",
      jobtimes: "job expire",
    },
    {
      id: 2,
      title: "products Designer",
      location: "Dhaka",
      salary: "₹50k/80k month",
      dateApplied: "Mar 15, 2021 12:10",
      status: "Pending",
      type: "full-time",
      jobtimes: "4 Days Remaining",
    },
    {
      id: 2,
      title: "Junior Graphic Designer",
      location: "Brazil",
      salary: "₹60k/90k month",
      dateApplied: "Mar 15, 2021 12:10",
      status: "Pending",
      type: "remote",
      jobtimes: "job expire",
    },
    {
      id: 2,
      title: "Visual Designer",
      location: "Wisconsin",
      salary: "₹60k/90k month",
      dateApplied: "Mar 15, 2021 12:10",
      status: "Pending",
      type: "Contract Based",
      jobtimes: "4 Days Remaining",
    },
    {
      id: 2,
      title: "Marketing Officer",
      location: "United States",
      salary: "₹60k/90k month",
      dateApplied: "Mar 15, 2021 12:10",
      status: "Pending",
      type: "Remote",
      jobtimes: "4 Days Remaining",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      location: "North Dakota",
      salary: "₹60k/90k month",
      dateApplied: "Mar 15, 2021 12:10",
      status: "Pending",
      type: "full-time",
      jobtimes: "job expire",
    },
  ];
  return (
    <>
      <Layout>
        <div className="pt-10">
          <p className="text-xl font-bold ">
            Saved Jobs <span className="text-gray-400">(17)</span>
          </p>
        </div>
      </Layout>
    </>
  );
};

export default Savedjobs;
