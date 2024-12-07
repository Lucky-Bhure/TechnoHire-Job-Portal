import React, { useState } from "react";
import LoginBack from "../../../assets/img/loginBackground.png";
import LoginLogo from "../../../assets/img/loginLogo.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineArrowRight } from "react-icons/ai";

const ResetPassword = () => {
  const validation = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required")
  });

  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: validation,

    onSubmit: values => {
      if (values) {
        forgotPassword(values);
        sessionStorage.setItem("email", values.email);

        // Set a timeout to remove the email after 5 minutes (300000 milliseconds)
        setTimeout(() => {
          sessionStorage.removeItem("email");
          console.log("Email removed from sessionStorage after 5 minutes");
        }, 300000); // 5 minutes
      }
    }
  });

  const [isNewPasswordVisible, setNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!isNewPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white">
      {/* Left Side: Form */}
      <div className="w-full md:w-[60%] h-screen md:h-auto px-6 py-8 md:px-12 lg:px-32 sm:px-32 xs:px-12 rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
          Reset Password
        </h2>
        <p className="text-center mt-0 mb-[75px] text-gray-500 text-xl">
          Set a new password to access your account
        </p>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          {/* New Password Field */}
          <div className="relative mb-4">
            <input
              type={isNewPasswordVisible ? "text" : "password"}
              placeholder="Enter new password"
              className="w-full px-4 py-3 border border-gray-400 bg-gray-100 text-md text-gray-500 rounded-lg focus:ring focus:ring-blue-200"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password
              ? <div className="text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              : null}
            <button
              type="button"
              onClick={toggleNewPasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center text-gray-600"
            >
              <i
                className={`fa-solid ${isNewPasswordVisible
                  ? "fa-eye-slash"
                  : "fa-eye"} text-gray-500`}
              />
            </button>
          </div>

          {/* Confirm New Password Field */}
          <div className="relative">
            <input
              type={isConfirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm new password"
              className="w-full px-4 py-3 border border-gray-400 bg-gray-100 text-md text-gray-500 rounded-lg focus:ring focus:ring-blue-200"
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center text-gray-600"
            >
              <i
                className={`fa-solid ${isConfirmPasswordVisible
                  ? "fa-eye-slash"
                  : "fa-eye"} text-gray-500`}
              />
            </button>
          </div>

          <div className="flex justify-center">
            <Link
              to="/resetSuccess-password"
              className="w-[65%] py-3 px-4 bg-violet-700 text-white font-bold rounded-lg hover:bg-violet-700 flex items-center justify-center"
            >
              <span className="text-lg">Reset Password</span>
              <AiOutlineArrowRight className="mx-3 "/>
            </Link>
          </div>
        </form>

        <div className="mt-0">
          <p className=" mt-[70px] text-center text-gray-600 text-lg">
            Go back to {" "}
            <Link
              href="#"
              to="/login"
              className="text-violet-700 hover:underline font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
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

export default ResetPassword;
