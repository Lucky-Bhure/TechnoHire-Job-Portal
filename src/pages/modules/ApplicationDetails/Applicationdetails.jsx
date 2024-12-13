import React from "react";
import Header from "../../../components/header/Header";
import { Stepper, Step, StepLabel } from "@mui/material";
import insta from "../../../assets/instagram.png";
import { GiCrossedChains } from "react-icons/gi";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { TbDeviceTabletSearch } from "react-icons/tb";
import { IoExitOutline } from "react-icons/io5";
import { RiArrowDownSLine, RiCalendarScheduleLine } from "react-icons/ri";
import { GrCompliance } from "react-icons/gr";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ApplicationDetails = () => {
  const navigate = useNavigate();
  const steps = [
    {
      name: "Application Submitted",
      description: `Your application has been successfully submitted. We appreciate your interest and will review your submission shortly.`,
      icon: (
        <IoExitOutline className="text-3xl relative top-2 text-[#7900BA]" />
      ),
    },
    {
      name: "Under Review",
      description:
        "Your application is currently under review. We will notify you once a decision has been made.",
      icon: (
        <TbDeviceTabletSearch className="text-3xl relative top-2 text-[#7900BA]" />
      ),
    },
    {
      name: "Shortlisted / Rejected",
      description:
        "We will notify you soon regarding the outcome of the selection process.",
      icon: <GrCompliance className="text-3xl relative top-2 text-[#7900BA]" />,
    },
    {
      name: "Interview Scheduled",
      description:
        "Your application is under review. If shortlisted, we will contact you soon to schedule an interview.",
      icon: (
        <RiCalendarScheduleLine className="text-3xl relative top-2 text-[#7900BA]" />
      ),
    },
  ];

  return (
    <div>
      <Header />

      <h1 className="text-2xl font-bold mt-8 ms-10">Application Details</h1>
      <div className="container mt-5 ">
        {/* Job Information */}
        <div className="rounded-lg p-6 mb-8">
          <div className="flex items-center gap-4">
            <img src={insta} alt="Job Logo" className="rounded-full" />
            <div>
              <div className="flex">
                <h2 className="text-lg font-semibold">Senior UX Designer</h2>
                <span className="text-[#7900BA] text-[14px] py-1 px-2 rounded-3xl bg-[#DCBDED] ms-3">
                  Full Time
                </span>
              </div>
              <div className="mt-2 flex">
                <div className="flex items-center gap-2">
                  <GiCrossedChains color="#7900BA" />
                  <p className="text-[16px] text-[#474C54]">
                    https://instagram.com
                  </p>
                </div>
                <div className="flex items-center gap-2 ms-4">
                  <LuPhone color="#7900BA" />
                  <p className="text-[16px] text-[#474C54]">(406) 555-0120</p>
                </div>
                <div className="flex items-center gap-2 ms-4">
                  <TfiEmail color="#7900BA" />
                  <p className="text-[16px] text-[#474C54]">
                    career@instagram.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stepper */}
        <div className="">
          <Stepper alternativeLabel activeStep={1}>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepLabel>
                  <div className="flex  ms-16">
                    {step.icon}
                    <span className="my-3 ms-5 font-semibold text-[22px]">
                      {step.name}
                    </span>
                  </div>
                </StepLabel>
                <div className=" text-center px-10">
                  <p className="text-[12px] text-gray-600">
                    {step.description}
                  </p>
                </div>
              </Step>
            ))}
          </Stepper>
        </div>

        {/* Action Buttons */}
        <div className="  mx-44 my-10  grid grid-cols-3 ">
          <button>
            <div className="bg-[#7900BA] rounded-lg text-white w-[376px] h-[53px]">
              <div className="flex">
                <div className="mx-20 my-[13px] text-[16px]">
                  <p>Applicant Information</p>
                </div>
                <div className="my-[18px]">
                  <RiArrowDownSLine />
                </div>
              </div>
            </div>
          </button>
          <button>
            <div className="bg-[#7900BA] rounded-lg text-white w-[376px] h-[53px]">
              <div className="flex">
                <div className="mx-20 my-[13px] text-[16px]">
                  <p>Applicant Progress</p>
                </div>
                <div className="my-[18px]">
                  <RiArrowDownSLine />
                </div>
              </div>
            </div>
          </button>
          <button onClick={() => navigate("/application-submit")}>
            <div className="bg-[#7900BA] rounded-lg text-white w-[376px] h-[53px]">
              <div className="flex">
                <div className="mx-20 my-[13px] text-[16px]">
                  <p>Submitted Documents</p>
                </div>
                <div className="my-[18px]">
                  <RiArrowDownSLine />
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className="grid grid-cols-2 mx-96 gap-8 ">
          <div className="my-10">
            <button>
              <div className="border-[#7900BA] border hover:bg-[#7900BA] hover:text-white rounded-lg text-[#7900BA] w-[376px] h-[53px]">
                <div className="flex">
                  <div className="mx-20 my-[13px] text-[16px]">
                    <p>View More Jobs</p>
                  </div>
                  <div className="my-[16px]">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div className="my-10">
            <button>
              <div className="border-[#7900BA] border hover:bg-[#7900BA] text-[#7900BA] rounded-lg hover:text-white w-[376px] h-[53px]">
                <div className="flex">
                  <div className="mx-20 my-[13px] text-[16px]">
                    <p>View Dashboard</p>
                  </div>
                  <div className="my-[16px]">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails;
