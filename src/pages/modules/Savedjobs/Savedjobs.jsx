import React, { useEffect } from "react";
import Layout from "../../../components/Layout/Layout";
import { CiLocationOn } from "react-icons/ci";
import useTheme from "../../../hooks/theme/useTheme";
import { themes } from "../../../components/Themes/Theme";
import { RxCrossCircled } from "react-icons/rx";
import { CiCalendar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import apple from "../../../assets/appleLogo.png";

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
                <div className="ps-1">
                  <img src={apple} width={50} alt="" />
                </div>
                <div className="px-1">
                  <div className="flex  py-[3px]">
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
                      <FaBookmark color="#7900BA" size={20} />
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





// import React, { useEffect } from "react";
// import Layout from "../../../components/Layout/Layout";
// import { CiLocationOn } from "react-icons/ci";
// import useTheme from "../../../hooks/theme/useTheme";
// import { themes } from "../../../components/Themes/Theme";
// import { RxCrossCircled } from "react-icons/rx";
// import { CiCalendar } from "react-icons/ci";
// import { FaArrowRight, FaBookmark } from "react-icons/fa6";
// import apple from "../../../assets/appleLogo.png";

// const SavedJobs = () => {
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     setTheme(themes.OverviewThemes);
//   }, [setTheme]);

//   const jobData = [
//     {
//       id: 1,
//       title: "Network Engineering",
//       location: "Washington, USA",
//       salary: "₹50k/80k month",
//       type: "Full-time",
//       jobtimes: "Job Expired",
//     },
//     {
//       id: 2,
//       title: "Product Designer",
//       location: "Dhaka, USA",
//       salary: "₹50k/80k month",
//       type: "Full-time",
//       jobtimes: "4 Days Remaining",
//     },
//     {
//       id: 3,
//       title: "UI/UX Designer",
//       location: "Minnesota, USA",
//       salary: "₹10k/20k month",
//       type: "Full-time",
//       jobtimes: "7 Days Remaining",
//     },
//     {
//       id: 4,
//       title: "Senior Developer",
//       location: "Minnesota, USA",
//       salary: "₹30k/40k month",
//       type: "Part-time",
//       jobtimes: "Job Expired",
//     },
//     {
//       id: 5,
//       title: "Project Manager",
//       location: "Sivay, Turkey",
//       salary: "₹100k/120k month",
//       type: "Full-time",
//       jobtimes: "5 Days Remaining",
//     },
//     {
//       id: 6,
//       title: "Junior Graphic Designer",
//       location: "Lahore, Pakistan",
//       salary: "₹10k/20k month",
//       type: "Full-time",
//       jobtimes: "2 Days Remaining",
//     },
//   ];

//   return (
//     <Layout>
//       <div className="pt-10 px-6">
//         <h1 className="text-2xl font-bold mb-6">
//           Saved Jobs <span className="text-gray-500">({jobData.length})</span>
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {jobData.map((job) => (
//             <div key={job.id} className="border rounded-lg p-4 shadow-md">
//               {/* Job Logo */}
//               <div className="flex items-center gap-4 mb-4">
//                 <img src={apple} alt="Company Logo" className="w-12 h-12" />
//                 <div className="flex-1">
//                   <div className="flex items-center gap-2">
//                     <h2 className="text-lg font-semibold">{job.title}</h2>
//                     <span className="text-xs text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
//                       {job.type}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Job Details */}
//               <div className="text-sm text-gray-600 mb-4">
//                 <div className="flex items-center gap-2 mb-2">
//                   <CiLocationOn size={18} />
//                   {job.location}
//                 </div>
//                 <div>{job.salary}</div>
//                 <div className="flex items-center gap-2 mt-2">
//                   {job.jobtimes === "Job Expired" ? (
//                     <>
//                       <RxCrossCircled color="red" size={18} />
//                       <span className="text-red-500">{job.jobtimes}</span>
//                     </>
//                   ) : (
//                     <>
//                       <CiCalendar size={18} />
//                       {job.jobtimes}
//                     </>
//                   )}
//                 </div>
//               </div>

//               {/* Actions */}
//               <div className="text-right">
//                 <FaBookmark color="#7900BA" size={20} className="mb-2" />
//                 {job.jobtimes === "Job Expired" ? (
//                   <button
//                     disabled
//                     className="bg-gray-200 text-gray-500 px-6 py-2 rounded-md cursor-not-allowed"
//                   >
//                     Deadline Expired
//                   </button>
//                 ) : (
//                   <button className="bg-purple-100 text-purple-700 px-6 py-2 rounded-md hover:bg-purple-700 hover:text-white transition">
//                     Apply Now <FaArrowRight className="inline ml-2" />
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default SavedJobs;

