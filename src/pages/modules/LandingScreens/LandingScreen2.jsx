import React from "react";
import LoginBack from "../../../assets/img/loginBackground.png";
import LoginLogo from "../../../assets/img/loginLogo.png";
import { Link } from "react-router-dom";
import Landing2 from "../../../assets/img/landingScreen2.png";

const LandingScreen1 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center max-h-screen bg-white">
      {/* Left Side: Form */}
      <div className="w-full md:w-[60%] px-6 py-8 sm:px-10 lg:px-20 flex flex-col items-center md:items-start h-screen overflow-y-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-6 text-center">
        Find a job that suits your  <br />
          <span className="text-violet">finding jobs Interest </span>
          & <span className="text-violet">Skills</span>
        </h2>

        <div className="flex justify-center items-center w-full my-8">
          <img src={Landing2} className="w-[70%] sm:w-[50%] md:w-[60%] h-auto" alt="Landing" />
        </div>

        <div className="flex flex-col items-center md:items-start text-center mb-8">
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">
          Explore exciting opportunities tailored to your expertise {" "}and passions. Start 
            <span className="text-violet"> your journey </span> toward{" "}
            <span className="text-violet">a career that truly fits you! </span> 
          </p>
        </div>

        <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%] flex flex-col gap-4 mx-auto">
          <button
            type="submit"
            className="py-3 flex justify-center items-center w-full bg-violet text-white rounded-lg font-semibold hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
           Get Started
          </button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden md:block md:w-[40%] h-screen relative">
        {/* Background Image */}
        <img
          src={LoginBack}
          alt="Background"
          className="w-full h-full object-cover"
        />

        {/* Centered Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={LoginLogo}
            alt="Login Logo"
            className="w-[200px] sm:w-[300px] lg:w-[400px]" // Responsive logo size
          />
        </div>
      </div>
    </div>
  );
};

export default LandingScreen1;
