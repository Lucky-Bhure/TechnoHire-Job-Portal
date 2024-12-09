import React, { useState } from "react";
import LoginBack from "../../../assets/img/loginBackground.png";
import BDLogo from "../../../assets/img/basicDetailslogo.png";
import { AiOutlineArrowRight } from "react-icons/ai";

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
    "Contact Info",
    "Location Info",
    "Contact Info",
    " Location"
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" }); // Clear the error on input
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.dob) newErrors.dob = "Date of Birth is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.contact) newErrors.contact = "Contact Number is required.";
    if (!formData.email) newErrors.email = "Email Address is required.";
    if (!formData.location) newErrors.location = "Location is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
            <div>
              <input
                type="text"
                id="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full bg-[#ece9e99c] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName}</p>
              )}
            </div>
            <div>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleInputChange}
                className="w-full bg-[#ece9e99c] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              {errors.dob && (
                <p className="text-red-500 text-sm">{errors.dob}</p>
              )}
            </div>
            <div>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full bg-[#ece9e99c] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender}</p>
              )}
            </div>
            <div>
              <input
                type="tel"
                id="contact"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleInputChange}
                className="w-full bg-[#ece9e99c] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              {errors.contact && (
                <p className="text-red-500 text-sm">{errors.contact}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-[#ece9e99c] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <select
                id="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full bg-[#ece9e99c] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <option value="">Location</option>
                <option value="newyork">New York</option>
                <option value="losangeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
                <option value="houston">Houston</option>
                <option value="miami">Miami</option>
              </select>
              {errors.location && (
                <p className="text-red-500 text-sm">{errors.location}</p>
              )}
            </div>
          </>
        );
      case 2:
        return <p>Contact Info Form</p>;
      case 3:
        return <p>Location Info Form</p>;
      default:
        return null;
    }
  };

  return (
    <div
      className="flex flex-col md:flex-row min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${LoginBack})`
      }}
    >
      <div className="hidden md:flex md:w-1/2 h-full flex-col items-center">
      <div>
      {/* For screens smaller than 1400px (Vertical Steps) */}
      <div className="flex flex-col items-start gap-[35px] mt-6 relative xl:hidden">
        {steps.map((step, index) => (
          <div className="relative flex items-center space-x-4 bottom-[-15px]" key={index}>
            {/* Circle */}
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 font-bold ${
                currentStep >= index + 1
                  ? "border-violet-700 bg-violet-700 text-white"
                  : "border-gray-300 bg-gray-100 text-gray-500"
              }`}
            >
              {index + 1}
            </div>

            {/* Step Name */}
            <span
              className={`font-medium ${
                currentStep >= index + 1 ? "text-violet-700" : "text-gray-500"
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
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold ${
                currentStep === index + 1 ? "bg-violet-700" : "bg-gray-300"
              }`}
            >
              {index + 1}
            </div>

            {/* Line Between Circles */}
            {index < steps.length - 1 && (
              <div
                className={`h-1 w-24 bg-gray-300 ${
                  currentStep > index + 1 ? "bg-violet-700" : ""
                }`}
              ></div>
            )}

            {/* Step Name Below Circle */}
            <div className="absolute bottom-[-25px] left-[-25px] text-center w-full">
              <span
                className={`text-sm ${
                  currentStep === index + 1
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
          src={BDLogo}
          alt="Logo"
          className="lg:w-[70%] md:w-[75%] h-auto xl:mt-[12rem] lg:mt-[4rem] md:mt-[7rem]"
        />
      </div>
      <div className="bg-white rounded-tl-[0px] rounded-bl-[0px] shadow-lg p-8 w-full max-w-3xl sm:rounded-tl-[80px] sm:rounded-bl-[80px]">
  {/* Content goes here */}
        <h1 className="text-[32px] font-semibold text-gray-800 text-center mb-4">
          {steps[currentStep - 1]}
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Let’s Start with the Basics
        </p>
        <form onSubmit={handleSubmit} className="space-y-8 w-[80%] m-auto">
          {renderFormContent()}
          <div className="text-center">
            <button
              type="submit"
              className="flex justify-center items-center w-full bg-violet-700 text-white py-3 rounded-lg font-semibold hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              Save and Continue
              <AiOutlineArrowRight className="mx-3 " />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BasicDetails;
