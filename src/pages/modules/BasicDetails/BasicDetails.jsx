import React, { useState } from "react";
import LoginBack from "../../../assets/img/loginBackground.png";
import LoginLogo from "../../../assets/img/loginLogo.png";
import ResetSuccess from "../../../assets/img/reslogo.png"
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "../../../components/header/Header";

const passwordResetSuccess = () => {
  

  return (
    <>
    <Header/>
<div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white">
      {/* Left Side: Form */}

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

      {/* Right Side: Image */}
      <div className="w-full md:w-[60%] h-screen md:h-auto px-6 py-8 md:px-12 lg:px-32 sm:px-32 xs:px-12 rounded-lg">
        <div className="flex justify-center items-center">
        <img
          src={ResetSuccess}
          alt="Tech image"
          className="w-[121px] h-[112px] mb-[55px] object-cover"
        />
        </div>
        <h1 className="text-[42px] font-semibold text-gray-800 mb-2 text-center">
        Password Reset Successful!
        </h1>
        <p className="text-center mt-0 mb-[40px] text-gray-500 text-lg">
        You can Log in with your new password   
        </p>
        
        <div className="flex justify-center">
            <button
              type="submit"
              className="w-[90%] py-3 px-4 bg-violet-700 text-white font-bold rounded-lg hover:bg-violet-700"
            >
             <Link to="/login" className="text-lg">
             Log In
             </Link>
            </button>
          </div>
      </div>
    </div>
    </>
    
  );
};

export default passwordResetSuccess;
