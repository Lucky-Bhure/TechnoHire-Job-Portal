import React from "react";
import LoginBack from "../../../assets/img/loginBackground.png";
import LoginLogo from "../../../assets/img/loginLogo.png";
import { Link } from "react-router-dom";
import success from "../../../assets/img/success.png";

const PhoneVerifySuccess = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center max-h-screen bg-white">
      {/* Left Side: Form */}
      <div
        className="w-full md:w-[60%] h-screen md:h-auto px-6 py-8 md:px-12 lg:px-32 rounded-lg overflow-y-auto"
        style={{ maxHeight: "100vh" }}
      >
        <div className="py-10 text-center">
          <div className="flex justify-center items-center mb-8">
            <img src={success} className="w-[130px] h-[116px]" alt="Success" />
          </div>
          <div className="flex flex-col justify-center items-center mt-[3rem] mb-[2rem]">
            <h2 className="text-3xl font-semibold text-gray-800 mb-[10px]">
              Verification Successful!
            </h2>
            <span className="text-[#80807F] text-sm">
            Your phone has been successfully verified. You’re all <br /> set to explore and apply for your dream job.
            </span>
          </div>
        </div>

        <div className="w-full max-w-[400px] mx-auto">
          <button
            type="submit"
            className="py-3 flex justify-center items-center w-full bg-violet text-white rounded-lg font-semibold hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <Link
              to="/login"
              className="text-white hover:underline font-semibold"
            >
              Login
            </Link>
          </button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden md:block md:w-[40%] relative h-screen">
        <img
          src={LoginBack}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={LoginLogo}
            alt="Login Logo"
            className="lg:w-[550px] md:w-[320px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneVerifySuccess;
