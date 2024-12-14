import React from "react";
import LoginBack from "../../../assets/img/loginBackground.png";
import LoginLogo from "../../../assets/img/loginLogo.png";
import { Link } from "react-router-dom";
import Landing1 from "../../../assets/img/landingScreen1.png";

const LandingScreen1 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white">
      {/* Left Side: Form */}
      <div className="w-full md:w-[60%] px-6 py-8 sm:px-10 lg:px-20 flex flex-col items-center md:items-start">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-6 text-center">
          Your gateway to <br />
          <span style={{ color: "#7900BA" }}>finding jobs </span>
          and <span style={{ color: "#7900BA" }}>hiring talent</span>{" "}
          effortlessly
        </h2>

        <div className="flex justify-center items-center w-full mb-8">
          <img src={Landing1} className="w-[70%] sm:w-[50%] md:w-[40%] h-auto" alt="Landing" />
        </div>

        <div className="flex flex-col items-center md:items-start text-center mb-8">
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">
            Connecting talented professionals with top opportunities, our
            platform makes{" "}
            <span style={{ color: "#7900BA" }}>hiring </span> and{" "}
            <span style={{ color: "#7900BA" }}>job searching </span> seamless
            and efficient.
          </p>
        </div>

        <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%] flex flex-col gap-4 mx-auto">
          <button
            type="submit"
            className="py-3 flex justify-center items-center w-full bg-violet text-white rounded-lg font-semibold hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            I'm a Job Seeker
          </button>
          <button
            type="submit"
            className="py-3 flex justify-center items-center w-full bg-violet text-white rounded-lg font-semibold hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            I'm an Employer
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
