import React, { useState } from "react";

const WorkExp = () => {
  const [isFresher, setIsFresher] = useState(false);
  const [jobs, setJobs] = useState([
    {
      jobTitle: "",
      companyName: "",
      startDate: "",
      endDate: "",
      currentlyWorking: false,
      responsibilities: ""
    }
  ]);

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
          <div key={index} className="py-4 space-y-6"style={{marginTop:"0px"}}>
            <input
              type="text"
              placeholder="Job Title"
              value={job.jobTitle}
              onChange={(e) =>
                handleJobChange(index, "jobTitle", e.target.value)
              }
              className="w-full bg-gray-100 px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <input
              type="text"
              placeholder="Company Name"
              value={job.companyName}
              onChange={(e) =>
                handleJobChange(index, "companyName", e.target.value)
              }
              className="w-full bg-gray-100 px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <input
              type="text"
              value={job.startDate}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              onChange={(e) =>
                handleJobChange(index, "startDate", e.target.value)
              }
              placeholder="Start Date"
              className="w-full bg-gray-100 px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
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
              className="w-full bg-gray-100 px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />

            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={job.currentlyWorking}
                onChange={(e) =>
                  handleJobChange(index, "currentlyWorking", e.target.checked)
                }
                className="w-5 h-5"
              />
              <span className="text-gray-700 text-sm">Currently Working Here</span>
            </div>
            <textarea
              placeholder="Responsibilities"
              value={job.responsibilities}
              onChange={(e) =>
                handleJobChange(index, "responsibilities", e.target.value)
              }
              className="w-full bg-gray-100 px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            ></textarea>
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
