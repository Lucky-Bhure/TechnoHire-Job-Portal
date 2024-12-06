import React, { useState } from "react";
import LoginBack from "../../../assets/img/loginBackground.png";
import LoginLogo from "../../../assets/img/loginLogo.png";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [forgetPass, setForgetPass] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white">
      {/* Left Side: Form */}
      <div className="w-full md:w-[60%] h-screen md:h-auto px-6 py-8 md:px-12 lg:px-32 sm:px-32 xs:px-12 rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
          Forget Password
        </h2>
        <p className="text-center mt-0 mb-[55px] text-gray-500 text-xl">
          Enter your registered email to receive a password reset link
        </p>
        <form className="space-y-4">
          <div>
            {/* <label className="block text-md font-medium text-gray-600">
              Email
            </label> */}
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-400 bg-gray-100 text-md text-gray-500 rounded-lg focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mt-0">
            <p className=" mb-[40px] text-right text-gray-600 text-lg">
              Go back to {" "}
              <Link
                href="#"
                to="/"
                className="text-violet-700 hover:underline font-semibold"
              >
                Login
              </Link>
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              to="/reset-password"
              className="w-[65%] py-3 px-4 bg-violet-700 text-white font-bold rounded-lg hover:bg-violet-700 flex items-center justify-center"
            >
              <span className="text-lg">Reset Password</span>
              <i className="fa-solid fa-arrow-right mx-3 text-lg" />
            </Link>
          </div>
        </form>

        <p className="my-[70px] text-center text-gray-600 text-lg">
          Don't have an account?{" "}
          <a href="#" className="text-violet-700 hover:underline font-semibold">
            Sign up
          </a>
        </p>
      </div>

      {/* Right Side: Image */}
      <div className="hidden md:block md:w-[40%] h-screen relative">
        {/* Background Image */}
        <img
          src={LoginBack}
          alt="Tech image"
          className="w-full h-full object-cover"
        />

        {/* Centered Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={LoginLogo}
            alt="Login Logo"
            className="lg:w-[550px] md:w-[320px] lg:ml-[4rem]" // Adjust width and height as needed
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
