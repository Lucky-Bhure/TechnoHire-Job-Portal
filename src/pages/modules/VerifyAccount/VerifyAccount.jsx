import React, { useState } from "react";
import LoginBack from "../../../assets/img/loginBackground.png";
import LoginLogo from "../../../assets/img/loginLogo.png";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const VerifyAccount = () => {
  const [forgetPass, setForgetPass] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center max-h-screen bg-white">
      {/* Left Side: Form */}
      <div
        className="w-full md:w-[60%] h-screen md:h-auto px-6 py-8 md:px-12 lg:px-32 rounded-lg overflow-y-auto"
        style={{ maxHeight: "100vh" }} // Ensure scrolling only for overflow
      >
        <div className="py-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-[10px]">
            Verify Your Account
          </h2>
          <span className="text-gray-600">
            Where should we send your verification code?
          </span>
        </div>

        {/* Centered Boxes */}
        <div className="flex flex-col gap-6 items-center">
          {/* Phone Number Box */}
          <div className="border-2 border-gray-300 w-[335px] h-[135px] rounded-lg p-4 flex flex-col items-center justify-between shadow-md">
            <div className="flex items-center gap-4">
              <FiPhone className="text-2xl text-gray-500" />
              <span className="text-gray-700 text-lg">+1 234 567 890</span>
              <BiEditAlt className="text-xl text-blue-500 cursor-pointer hover:text-blue-700" />
            </div>
            <button className="py-2 px-6 w-[190px] h-[41px] bg-violet text-white rounded-lg font-semibold hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500">
              Select
            </button>
          </div>
          {/* Email Box */}
          <div className="border-2 border-gray-300 w-[335px] h-[135px] rounded-lg p-4 flex flex-col items-center justify-between shadow-md">
            <div className="flex items-center gap-4">
              <AiOutlineMail className="text-2xl text-gray-500" />
              <span className="text-gray-700 text-lg">techno@gmail.com</span>
              <BiEditAlt className="text-xl text-blue-500 cursor-pointer hover:text-blue-700" />
            </div>
            <button className="py-2 px-6 w-[190px] h-[41px] bg-violet text-white rounded-lg font-semibold hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500">
              Select
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-gray-600 text-lg">
          Go back to{" "}
          <Link
            to="/login"
            className="text-violet hover:underline font-semibold"
          >
            Login
          </Link>
        </p>

        <div className="w-full max-w-[400px] mx-auto mt-6">
          <button
            type="submit"
            className="py-3 flex justify-center items-center w-full bg-violet text-white rounded-lg font-semibold hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Continue
            <BsArrowRight className="text-xl mx-2" />
          </button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden md:block md:w-[40%] relative h-screen">
        <img
          src={LoginBack}
          alt="Tech image"
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

export default VerifyAccount;
