import React, { useState } from "react";
import LoginBack from "../../../assets/img/loginBackground.png";
import LoginLogo from "../../../assets/img/loginLogo.png";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [toggle, setToggle] = useState(true);

  const handleResetPassword = () => {
    // try {
    console.log(email);
    setToggle((prev) => !prev);
    // navigate("/reset-password");
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleOTPVerification = () => {
    navigate("/reset-password")

  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white relative">
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
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-400 bg-gray-100 text-md text-gray-500 rounded-lg outline-none"
              autoComplete="false"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mt-0">
            <p className=" mb-[40px] text-right text-gray-600 text-lg">
              Go back to <span
                className="text-violet-700 font-semibold cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </div>

          <div className="flex justify-center">
            <div
              className="w-[65%] py-3 px-4 bg-violet-700 text-white font-bold rounded-lg hover:bg-violet-700 flex items-center justify-center"
              onClick={handleResetPassword}
            >
              <p className="text-lg">Reset Password</p>
              <AiOutlineArrowRight className="mx-3" />
            </div>
          </div>
        </form>

        <p className="my-[70px] text-center text-gray-600 text-lg"> Don't have an account? <span
            className="text-violet-700 font-semibold cursor-pointer"
            onClick={() => navigate("/signup")}
          >Sign up
          </span>
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

      {toggle && (
        <div className="absolute inset-0 flex justify-center items-center bg-[#b4b4f632] backdrop-blur-sm">
          <div className="relative bg-white w-fit h-fit px-20 py-10 flex flex-col justify-center items-center rounded-xl shadow-xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
              OTP Verification
            </h2>
            <p className="text-center text-gray-500 text-l">
              Enter your OTP to verify your email
            </p>

            <input
              type="text"
              placeholder="Enter your OTP"
              className="w-full text-center px-4 py-3 mt-4 border border-gray-400 bg-gray-100 text-md text-gray-500 rounded-lg outline-none"
              value={otp}
              onChange={(event) => setOtp(event.target.value)}
            />

            <button
              className="py-2 px-10 w-fit bg-violet-700 text-white font-bold rounded-lg mt-6 hover:bg-violet-800"
              onClick={handleOTPVerification}
            >
              Verify
            </button>

            <RxCross2 size={24}  className="absolute top-4 right-4" onClick={() => setToggle(prev => !prev)}/>
          </div>
        </div>

      )}
    </div>
  );
};

export default ForgotPassword;
