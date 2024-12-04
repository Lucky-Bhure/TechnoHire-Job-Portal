import React, { useEffect, useState } from "react";
import { useSignIn } from '../../hooks/auth/useSignIn';
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Inventory from "../../assets/images/inventory.png"

const Login = () => {
  const {
    superAdminLogin,
    loading,
    sAdminResponse,
    resetSuperAdmin,
  } = useSignIn();

  const handleSuperAdminSubmit = async (values) => {
    try {
      const sanitizedEmail = validator.trim(values.email);
      const sanitizedPassword = validator.trim(values.password);
      if (!sanitizedEmail.startsWith("users")) {
        // Call the login API function
        await superAdminLogin(sanitizedEmail, sanitizedPassword);
      }


      // If "Remember Me" is checked, store credentials in localStorage
      if (values.rememberMe) {
        localStorage.setItem("email", values.email);
        localStorage.setItem("password", values.password);
        localStorage.setItem("rememberMe", true);
      } else {
        // Clear stored credentials if "Remember Me" is unchecked
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("rememberMe");
      }
    } catch (error) {
      console.error("Error logging in super admin:", error);
    }
  }
  const loginValidationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    rememberMe: Yup.boolean(),
  });

  const superAdminFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: loginValidationSchema,
    onSubmit: handleSuperAdminSubmit,
  });

  // Load stored credentials when the component mounts
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    const rememberMe = localStorage.getItem("rememberMe") === "true";

    if (storedEmail && storedPassword && rememberMe) {
      // Automatically fill the form fields with stored credentials
      superAdminFormik.setValues({
        email: storedEmail,
        password: storedPassword,
        rememberMe: rememberMe,
      });
    }
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container">
        <div className="flex flex-row ">
          {/* img */}
          <div className="bg-[#E9EBF7] md:h-screen md:space-y-28 space-y-10 md:w-1/2 md:py-16 flex flex-col ">
            <div className=" mt-[140px]" >
              <img
                src={Inventory}
                alt=""
                className="md:h-[200px] md:w-[297px] h-[100px]  w-[200px] m-auto"
              />
            </div>
            <div className="flex px-14 pt-10 ">
              {" "}
              <p className=" text-left mx-5 md:text-2xl">
                Welcome to the Inventory System Log in to manage your personal
                information, time and attendance, and performance reviews
                securely. Your data is protected with the highest security
                standards.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center bg-[#E5E4E0]">
            <div className=" w-full px-10 flex flex-col space-y-6 justify-center items-center">
              <h1 className=" text-[40px] font-medium ">Welcome</h1>

              <div>

                <h1 className="text-[36px] text-[#135078] font-extrabold leading-[42px]">
                  Super Admin Login
                </h1>

              </div>

              <h1 className="text-[32px] font-light flex justify-center py-4">
                Log in to your account to continue
              </h1>

              <form
                onSubmit={superAdminFormik.handleSubmit}
                className="m-auto w-full"
              >
                <div className="flex flex-col justify-center px-10 items-center space-y-8 md:my-4 w-full">
                  <input
                    type="email"
                    className="rounded-[41px] placeholder:text-black placeholder:font-medium bg-[#E1D4CB] text-black font-semibold text-center py-2 text-xl w-full"
                    placeholder="Email"
                    name="email"
                    value={superAdminFormik.values.email}
                    onChange={superAdminFormik.handleChange}
                    onBlur={superAdminFormik.handleBlur}
                  />
                  {superAdminFormik.touched.email &&
                    superAdminFormik.errors.email ? (
                    <div className="text-red-500">
                      {superAdminFormik.errors.email}
                    </div>
                  ) : null}
                  <input
                    type="password"
                    className="rounded-[41px] placeholder:text-black placeholder:font-medium text-center bg-[#E1D4CB] text-xl py-2 w-full"
                    placeholder="Password"
                    name="password"
                    value={superAdminFormik.values.password}
                    onChange={superAdminFormik.handleChange}
                    onBlur={superAdminFormik.handleBlur}
                  />
                  {superAdminFormik.touched.password &&
                    superAdminFormik.errors.password ? (
                    <div className="text-red-500">
                      {superAdminFormik.errors.password}
                    </div>
                  ) : null}
                </div>
                <div className="flex justify-between mb-6 py-4 px-16 font-semibold">
                  <div className="mx-2">
                    <label>
                      <input
                        type="checkbox"
                        name="rememberMe"
                        onChange={superAdminFormik.handleChange}
                        checked={superAdminFormik.values.rememberMe}
                      />
                      Remember Me
                    </label>
                  </div>

                  <Link to="/reset-password">
                    <p className="hover:text-blue-600 cursor-pointer">Forgot password?</p>
                  </Link>
                </div>
                <div className="text-center py-4 w-full flex justify-center">
                  <button
                    type="submit"
                    className="flex justify-center items-center text-[16px] text-center font-bold bg-[#E5C1A9] h-[40px] rounded-full hover:bg-[#dcad8b] hover:shadow-md w-[120px] disabled:bg-[#D3D3D3]"
                    disabled={loading}
                  >
                    {loading ? (
                      <AiOutlineLoading3Quarters className="animate-spin" />
                    ) : (
                      <h2>Login</h2>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login