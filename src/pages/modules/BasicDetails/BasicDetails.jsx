import React, { useState } from "react";
import LoginBack from "../../../assets/img/loginBackground.png";
import BDLogo from "../../../assets/img/basicDetailslogo.png";
import EduDetailsLogo from "../../../assets/img/educationDetails.png";
import WorkExpLogo from "../../../assets/img/workExp.png";
import CertifyLogo from "../../../assets/img/certify.png";
import SkillPrefLogo from "../../../assets/img/skillPref.png";
import UploadDocLogo from "../../../assets/img/uploadDoc.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import EducationDetails from "./EducationDetails";
import WorkExp from "./WorkExp";
import Certify from "./Certify";
import UploadDoc from "./UploadDoc";
import SkillsPref from "./skillsPref";

const BasicDetails = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    contact: "",
    email: "",
    location: ""
  });
  const [errors, setErrors] = useState({});

  const steps = [
    "Basic Details",
    "Education",
    "Work Experience",
    "Certification",
    "Skills",
    "Documents"
  ];

  const formsName = [
    "Basic Details",
    "Education Details",
    "Work Experience",
    "Certification",
    "Skills and Preference",
    "Documents"
  ];

  const logos = [
    BDLogo,
    EduDetailsLogo,
    WorkExpLogo,
    CertifyLogo,
    SkillPrefLogo,
    UploadDocLogo
  ];

  const subhead = [
    "Let’s Start with the Basics",
    "Your Educational Background",
    "Tell us your Work Experience",
    "Do you Have Certifications?",
    "Highlight Your Skills and Preferences to stand out",
    "Upload Supporting Documents"
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" }); // Clear the error on input
  };

  const validateForm = () => {
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (currentStep < steps.length) {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const renderFormContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            {/* Basic Details Form */}
            <div>
              <input
                type="text"
                id="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full bg-[#ece9e99c] px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleInputChange}
                className="w-full bg-[#ece9e99c] px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full bg-[#ece9e99c] px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <input
                type="tel"
                id="contact"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleInputChange}
                className="w-full bg-[#ece9e99c] px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-[#ece9e99c] px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div>
              <select
                id="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full bg-[#ece9e99c] px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <option value="">Location</option>
                <option value="newyork">New York</option>
                <option value="losangeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
                <option value="houston">Houston</option>
                <option value="miami">Miami</option>
              </select>
            </div>
          </>
        );
      case 2:
      case 2:
        return (
          <>
            <EducationDetails />
          </>
        );
      case 3:
        return (
          <>
            <WorkExp />
          </>
        );
      case 4:
        return (
          <>
            <Certify />
          </>
        );
      case 5:
        return (
          <>
            <SkillsPref />
          </>
        );
      case 6:
        return (
          <>
            <UploadDoc />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="flex flex-col md:flex-row h-screen bg-cover bg-center overflow-y-hidden"
      style={{
        backgroundImage: `url(${LoginBack})`
      }}
    >
      <div className="hidden md:flex md:w-1/2 h-full flex-col items-center">
        <div>
          {/* For screens smaller than 1400px (Vertical Steps) */}
          <div className="flex flex-col items-start gap-[35px] mt-6 relative xl:hidden">
            {steps.map((step, index) => (
              <div
                className="relative flex items-center space-x-4 bottom-[-15px]"
                key={index}
              >
                {/* Circle */}
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full border-2 font-bold ${
                    currentStep > index + 1
                      ? "border-violet-700 bg-violet-700 text-white"
                      : currentStep === index + 1
                      ? "border-violet-700 bg-violet-700 text-white"
                      : "border-gray-300 bg-gray-100 text-gray-500"
                  }`}
                >
                  {currentStep > index + 1 ? (
                    <span className="text-white">✓</span> // Checkmark for completed steps
                  ) : currentStep === index + 1 ? (
                    <span className="text-white">•</span> // Dot for current step
                  ) : null}
                  {/* // No number for uncompleted steps */}
                </div>

                {/* Step Name */}
                <span
                  className={`text-sm ${
                    currentStep >= index + 1
                      ? "text-violet-700"
                      : "text-gray-500"
                  }`}
                >
                  {step}
                </span>

                {/* Vertical Line */}
                {index < steps.length - 1 && (
                  <div className="absolute z-[-1] left-[4px] top-[25px] w-[2px] h-[60px] bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>

          {/* For screens larger than 1400px (Horizontal Steps) */}
          <div className="hidden xl:flex justify-center items-center mb-4 mt-[3rem]">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-center">
                {/* Circle */}
                <div
                  className={`w-[35px] h-[35px] 2xl:w-[3rem] 2xl:h-[3rem] flex items-center justify-center rounded-full font-bold ${
                    currentStep > index + 1
                      ? "bg-violet-700 text-white"
                      : currentStep === index + 1
                      ? "bg-violet-700 text-violet-700"
                      : "bg-gray-300 text-gray-500"
                  }`}
                >
                  {currentStep > index + 1 ? (
                    <span className="text-white">✓</span> // Checkmark for completed steps
                  ) : currentStep === index + 1 ? (
                    <span className="text-white">•</span> // Dot for the current step
                  ) : null}
                  {/* // No number for future steps */}
                </div>

                {/* Line Between Circles */}
                {index < steps.length - 1 && (
                  <div
                    className={`h-[3px] md:w-[4rem] ${
                      currentStep > index + 1 ? "bg-violet-700" : "bg-gray-300"
                    }`}
                  ></div>
                )}

                {/* Step Name Below Circle */}
                <div className="absolute bottom-[-25px] left-[-25px] text-center w-full">
                  <span
                    className={`text-xs ${
                      currentStep >= index + 1
                        ? "text-violet-700 font-semibold"
                        : "text-gray-600"
                    }`}
                  >
                    {step}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src={logos[currentStep - 1]}
          alt="Step Logo"
          className="2xl:w-[55%] xl:w-[65%] lg:w-[65%] md:w-[75%] h-auto xl:mt-[12rem] xl:mt-[10rem] lg:mt-[4rem] md:mt-[7rem]"
        />
      </div>
      <div
        className="bg-white rounded-tl-[0px] rounded-bl-[0px] shadow-lg p-8 w-full ml-auto lg:max-w-[45rem] 2xl:max-w-[55rem] sm:rounded-tl-[80px] sm:rounded-bl-[80px]"
        style={{ height: "calc(103vh - 20px)" }}
      >
        <div>
          <h1 className="text-[32px] font-semibold text-gray-800 text-center mb-4">
            {formsName[currentStep - 1]}
          </h1>
          <p className="text-center text-gray-500 mb-8">
            {subhead[currentStep - 1]}
          </p>
        </div>

        <div
          className="overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 150px)" }} // Adjust height based on your layout
        >
          <form onSubmit={handleSubmit} className="space-y-6 w-[80%] m-auto">
            {renderFormContent()}
            <div className="text-center pb-[13px]">
              <button
                type="submit"
                className="py-[1rem] flex justify-center items-center w-full bg-violet-700 text-white py-3 rounded-lg font-semibold hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                Save and Continue
                <AiOutlineArrowRight className="mx-3 " />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
