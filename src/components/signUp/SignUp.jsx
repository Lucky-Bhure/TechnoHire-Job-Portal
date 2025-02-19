import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import LoginBack from "../../assets/img/loginBackground.png";
import LoginLogo from "../../assets/img/loginLogo.png";
import { AiFillEyeInvisible } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate(); // Initialize navigate


  const formik = useFormik({
    initialValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      username: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form data:", values);
      navigate("/verify");
    },
  });

  return (
    <div className="flex h-screen bg-gray-100">
  {/* Left Side: Form */}
  <div className="left-side w-full md:w-3/5 overflow-y-auto scrollbar-hide bg-white px-20 pt-8">
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-2 text-center">
          Welcome to <span className="text-violet">Technohire</span>
        </h2>
        <p>
          Already have an account?{" "}
          <span className="text-violet" style={{ cursor: "pointer" }}>
            <Link to="/login">Log in</Link>
          </span>
        </p>
      </div>

      <form onSubmit={formik.handleSubmit} className="w-full mt-6">
        <div className="mb-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full px-4 py-3 border border-gray-400 bg-gray-100 text-md text-gray-500 rounded-lg focus:ring focus:ring-blue-200"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <p className="text-red-500 text-sm">{formik.errors.fullName}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full px-4 py-3 border border-gray-400 bg-gray-100 text-md text-gray-500 rounded-lg focus:ring focus:ring-blue-200"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username && (
            <p className="text-red-500 text-sm">{formik.errors.username}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-400 bg-gray-100 text-md text-gray-500 rounded-lg focus:ring focus:ring-blue-200"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}
        </div>
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-400 bg-gray-100 text-md text-gray-500 rounded-lg focus:ring focus:ring-blue-200"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <button
            type="button"
            className="absolute top-2 right-2 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
          )}
        </div>
        <div className="mb-4 relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 border border-gray-400 bg-gray-100 text-md text-gray-500 rounded-lg focus:ring focus:ring-blue-200"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          <button
            type="button"
            className="absolute top-2 right-2 text-gray-500"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>
          {formik.touched.confirmPassword &&
            formik.errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {formik.errors.confirmPassword}
              </p>
            )}
        </div>

        <p className="text-gray-500 text-sm mb-4">
          By creating an account, you agree to the{" "}
          <span className="text-violet" style={{ cursor: "pointer" }}>
            Terms of Use
          </span>{" "}
          and{" "}
          <span className="text-violet" style={{ cursor: "pointer" }}>
            Privacy Policy
          </span>
          .
        </p>

        <button
          type="submit"
          className="w-[16rem] h-[64px] flex justify-center items-center my-6 py-3 text-white bg-violet hover:bg-purple-800 rounded-md"
        >
          Create an Account
        </button>
      </form>

      <div className="w-[55%] my-4 mx-auto flex items-center justify-center">
        <span className="block w-[40%] border-t border-gray-300" />
        <span className="text-gray-500 mx-4 font-semibold whitespace-nowrap">
          Or Login With
        </span>
        <span className="block w-[40%] border-t border-gray-300" />
      </div>

      <div className="flex space-x-4 justify-center pb-[3rem]">
          <button className="p-0 bg-gray-100 text-blue-600 rounded-md w-[105px] h-[56px] flex justify-center items-center">
            <svg
              width="26"
              height="27"
              viewBox="0 0 26 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.7956 25.1777V14.248H18.3496L18.8779 9.96868H14.7956V7.24291C14.7956 6.00805 15.1272 5.16259 16.8355 5.16259H19V1.34732C17.9468 1.23022 16.8882 1.17368 15.829 1.17796C12.6877 1.17796 10.5308 3.16761 10.5308 6.82018V9.96068H7V14.24H10.5386V25.1777H14.7956Z"
                fill="#4092FF"
              />
            </svg>
          </button>
          <button className="p-0 bg-gray-100 text-white rounded-md w-[105px] h-[56px] flex justify-center items-center">
            <svg
              width="26"
              height="27"
              viewBox="0 0 26 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.41996 15.6433L5.59721 18.7147L2.59008 18.7784C1.69139 17.1115 1.18164 15.2044 1.18164 13.1777C1.18164 11.218 1.65825 9.36994 2.50306 7.74268H2.50371L5.1809 8.2335L6.35366 10.8946C6.10821 11.6102 5.97442 12.3784 5.97442 13.1777C5.97451 14.0453 6.13166 14.8765 6.41996 15.6433Z"
                fill="#FBBB00"
              />
              <path
                d="M24.6116 10.9698C24.7474 11.6848 24.8181 12.4231 24.8181 13.1776C24.8181 14.0237 24.7292 14.8491 24.5597 15.6452C23.9844 18.3543 22.4811 20.7198 20.3987 22.3939L20.398 22.3932L17.026 22.2212L16.5487 19.2419C17.9305 18.4316 19.0104 17.1634 19.5793 15.6452H13.2598V10.9698H19.6715H24.6116Z"
                fill="#518EF8"
              />
              <path
                d="M20.3976 22.3933L20.3983 22.3939C18.373 24.0218 15.8002 24.9959 12.9996 24.9959C8.49893 24.9959 4.58596 22.4803 2.58984 18.7784L6.41972 15.6433C7.41775 18.3069 9.98724 20.2031 12.9996 20.2031C14.2944 20.2031 15.5074 19.853 16.5483 19.242L20.3976 22.3933Z"
                fill="#28B446"
              />
              <path
                d="M20.5442 4.08026L16.7156 7.21467C15.6383 6.54131 14.3649 6.15232 13.0007 6.15232C9.92014 6.15232 7.3026 8.13542 6.35456 10.8946L2.50455 7.74261H2.50391C4.4708 3.9504 8.43313 1.3595 13.0007 1.3595C15.8682 1.3595 18.4974 2.38094 20.5442 4.08026Z"
                fill="#F14336"
              />
            </svg>
          </button>
          <button className="p-0 bg-gray-100 text-white rounded-md w-[105px] h-[56px] flex justify-center items-center">
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.0082 0.177833H1.9918C1.46958 0.172715 0.966571 0.3673 0.593157 0.718891C0.219742 1.07048 0.00642053 1.55036 0 2.05323V24.3065C0.00758165 24.8086 0.221414 25.2874 0.594702 25.6381C0.96799 25.9888 1.47033 26.1828 1.9918 26.1776H25.0082C25.5305 26.1816 26.0331 25.9864 26.4063 25.6346C26.7796 25.2828 26.993 24.803 27 24.3001V2.04684C26.9907 1.54544 26.7762 1.06785 26.4033 0.717874C26.0303 0.367897 25.5289 0.173822 25.0082 0.177833Z"
                fill="#0076B2"
              />
              <path
                d="M3.99642 9.92345H8.00437V22.3415H3.99642V9.92345ZM6.00151 3.74316C6.4612 3.74316 6.91056 3.87446 7.29275 4.12043C7.67494 4.36641 7.97279 4.71601 8.1486 5.12502C8.32442 5.53403 8.37031 5.98406 8.28046 6.41819C8.19062 6.85231 7.96908 7.25103 7.64388 7.56389C7.31867 7.87675 6.90441 8.0897 6.45349 8.1758C6.00258 8.2619 5.53528 8.21729 5.1107 8.04759C4.68613 7.8779 4.32336 7.59076 4.06829 7.22249C3.81321 6.85423 3.6773 6.42138 3.67774 5.97872C3.67832 5.38562 3.92341 4.817 4.35913 4.39781C4.79486 3.97863 5.38559 3.74316 6.00151 3.74316ZM10.5185 9.92345H14.3604V11.6284H14.4136C14.9491 10.6523 16.2549 9.62296 18.2046 9.62296C22.2635 9.61443 23.0159 12.1867 23.0159 15.5219V22.3415H19.008V16.2998C19.008 14.8613 18.9814 13.0093 16.9254 13.0093C14.8695 13.0093 14.5198 14.5778 14.5198 16.206V22.3415H10.5185V9.92345Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
    </div>

      {/* Right Side: Image */}
      <div className="hidden md:block md:w-[40%] h-screen relative">
        <img
          src={LoginBack}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={LoginLogo}
            alt="Login Logo"
            className="max-w-[60%] md:max-w-[70%]"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
