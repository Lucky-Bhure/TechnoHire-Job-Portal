import React, { useState } from "react";
import LoginBack from "../../../assets/img/loginBackground.png";
import BDLogo from "../../../assets/img/basicDetailslogo.png"
import ResetSuccess from "../../../assets/img/reslogo.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "../../../components/header/Header";
import { AiOutlineArrowRight } from 'react-icons/ai'

const BasicDetails = () => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${LoginBack})`
        }}
      >
        {/* Left Side: Centered Logo */}
        <div className="hidden md:flex md:w-1/2 h-full items-center justify-center">
  <img src={BDLogo} alt="Logo" className="lg:w-[70%] md:w-[75%] h-auto lg:mt-[15rem] md:mt-[19rem]" />
</div>

        
        {/* Right Side: Image */}
        <div className="bg-white rounded-tl-[80px] rounded-bl-[80px] shadow-lg p-8 w-full max-w-3xl">
        {/* Form Heading */}
        <h1 className="text-[32px] font-semibold text-gray-800 text-center mb-4">
          Basic Details
        </h1>
        <p className="text-center text-gray-500 mb-8">
        Let’s Start with the Basics
        </p>

        {/* Form Fields */}
        <form className="space-y-8 px-[80px]">
          {/* Full Name */}
          <div>
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              className="w-full bg-[#ece9e99c] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <input
              type="date"
              id="dob"
              className="w-full bg-[#ece9e99c] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {/* Gender */}
          <div>
            <select
              id="gender"
              className="w-full bg-[#ece9e99c] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Date of birth"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Contact Number */}
          <div>
            <input
              type="tel"
              id="contact"
              placeholder="Contact Number"
              className="w-full bg-[#ece9e99c] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {/* Email Address */}
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full bg-[#ece9e99c] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {/* Location */}
          <div>
            <select
              id="location"
              className="w-full bg-[#ece9e99c] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              <option value="">Location</option>
              <option value="newyork">New York</option>
              <option value="losangeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
              <option value="houston">Houston</option>
              <option value="miami">Miami</option>
            </select>
          </div>

          {/* Save Button */}
          <div className="text-center">
            <button
              type="submit"
              className="flex justify-center items-center w-full bg-violet-700 text-white py-3 rounded-lg font-semibold hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500 "
            >
              Save and Continue 
              <AiOutlineArrowRight className="mx-3 "/>
            </button>
          </div>
        </form>
      </div>

      </div>
    </>
  );
};

export default BasicDetails;
