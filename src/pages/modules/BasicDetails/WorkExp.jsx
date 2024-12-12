import React, { useState } from "react";

const WorkExp = ({ formik, jobs = [] }) => { // default value of jobs is an empty array
  const [isFresher, setIsFresher] = useState(false);
  

  const handleFresherChange = () => {
    setIsFresher(!isFresher);
    if (!isFresher) {
      setJobs([]);
    } else {
      setJobs([
        {
          jobTitle: "",
          companyName: "",
          startDate: "",
          endDate: "",
          currentlyWorking: false,
          responsibilities: ""
        }
      ]);
    }
  };

  const handleJobChange = (index, field, value) => {
    const updatedJobs = [...jobs];
    updatedJobs[index][field] = value;
    setJobs(updatedJobs);
  };

  const addJob = () => {
    setJobs([
      ...jobs,
      {
        jobTitle: "",
        companyName: "",
        startDate: "",
        endDate: "",
        currentlyWorking: false,
        responsibilities: ""
      }
    ]);
  };

  return (
    <>
      <div className="flex justify-center items-center space-x-4">
        <input
          type="checkbox"
          id="isFresher"
          checked={isFresher}
          onChange={handleFresherChange}
          className="w-5 h-5 border border-violet-800 rounded bg-white focus:ring-2 focus:ring-violet-500 checked:bg-violet-600"
        />
        <span className="text-gray-800 text-lg">I am Fresher</span>
      </div>

      {!isFresher &&
        jobs.map((job, index) => (
          <div key={index} className="py-4 space-y-6" style={{ marginTop: "0px" }}>
            <div className="">
              <input
                type="text"
                placeholder="Job Title"
                value={job.jobTitle}
                onChange={(e) =>
                  handleJobChange(index, "jobTitle", e.target.value)
                }
                {...formik.getFieldProps("jobTitle")}
                className="w-full bg-gray-100 px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              {formik.touched.jobTitle && formik.errors.jobTitle && (
                <p className="text-red-500">{formik.errors.jobTitle}</p>
              )}
            </div>
            <div className="">
              <input
                type="text"
                placeholder="Company Name"
                value={job.companyName}
                onChange={(e) =>
                  handleJobChange(index, "companyName", e.target.value)
                }
                {...formik.getFieldProps("companyName")}
                className="w-full bg-gray-100 px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              {formik.touched.companyName && formik.errors.companyName && (
                <p className="text-red-500">{formik.errors.companyName}</p>
              )}
            </div>
            <input
              type="text"
              value={job.startDate}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              onChange={(e) =>
                handleJobChange(index, "startDate", e.target.value)
              }
              {...formik.getFieldProps("startDate")}
              placeholder="Start Date"
              className="w-full bg-gray-100 px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            {formik.touched.startDate && formik.errors.startDate && (
              <p className="text-red-500">{formik.errors.startDate}</p>
            )}

            <input
              type="text"
              value={job.endDate}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              onChange={(e) =>
                handleJobChange(index, "endDate", e.target.value)
              }
              placeholder="End Date"
              disabled={job.currentlyWorking}
              {...formik.getFieldProps("endDate")}
              className="w-full bg-gray-100 px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            {formik.touched.endDate && formik.errors.endDate && (
              <p className="text-red-500">{formik.errors.endDate}</p>
            )}

            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={job.currentlyWorking}
                onChange={(e) =>
                  handleJobChange(index, "currentlyWorking", e.target.checked)
                }
                className="w-5 h-5"
                // {...formik.getFieldProps("currentlyWorking")}
              />
              {formik.touched.currentlyWorking && formik.errors.currentlyWorking && (
                <p className="text-red-500">{formik.errors.currentlyWorking}</p>
              )}
              <span className="text-gray-700 text-sm">Currently Working Here</span>
            </div>
            <textarea
              placeholder="Responsibilities"
              value={job.responsibilities}
              onChange={(e) =>
                handleJobChange(index, "responsibilities", e.target.value)
              }
              {...formik.getFieldProps("responsibilities")}
              className="w-full bg-gray-100 px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            ></textarea>
            {formik.touched.responsibilities && formik.errors.responsibilities && (
              <p className="text-red-500">{formik.errors.responsibilities}</p>
            )}
          </div>
        ))}

      {!isFresher && (
        <div className="flex items-center" style={{ marginTop: "0px" }}>
          <button
            type="button"
            onClick={addJob}
            className="flex justify-center items-center w-[30px] h-[30px] gap-2 bg-violet-700 text-white px-4 py-[14px] rounded-lg hover:bg-violet-800"
          >
            <span className="text-xl">+</span>
          </button>{" "}
          <span className="mx-2">Add Another Job</span>
        </div>
      )}
    </>
  );
};

export default WorkExp;
