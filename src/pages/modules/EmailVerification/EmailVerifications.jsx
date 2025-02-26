import React, { useState, useEffect } from "react";
import LoginBack from "../../../assets/img/loginBackground.png";
import LoginLogo from "../../../assets/img/loginLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLeft } from 'react-icons/ai';
import email from "../../../assets/img/emailVerify.png";
import { BsArrowRight } from "react-icons/bs";

const EmailVerifications = () => {
  const [timer, setTimer] = useState(120);
  const [verificationCode, setVerificationCode] = useState("");
  const navigate = useNavigate();

  // Countdown logic
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Format timer as MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Handle input change
  const handleInputChange = (e) => {
    setVerificationCode(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center max-h-screen bg-white">
      {/* Left Side: Form */}
      <div
        className="w-full md:w-[60%] h-screen md:h-auto px-6 py-8 md:px-12 lg:px-32 rounded-lg overflow-y-auto"
        style={{ maxHeight: "100vh" }}
      >
        <div className="py-10 text-center">
        <div className="flex justify-center items-center">
        <span className="mr-3 mb-2"><AiOutlineLeft className="mx-3 w-[30px] h-auto" /></span>
          <h2 className="text-3xl font-semibold text-gray-800 mb-[10px]">
            Email Verification
          </h2>
        </div>
          <span className="text-gray-600">
            We've sent a verification email to{" "}
            <span className="font-extrabold">emailaddress@gmail.com</span> to{" "}
            <br /> verify your email address and activate your account.
          </span>
        </div>

        <div className="flex justify-center items-center w-full mb-8">
          <img
            src={email}
            className="w-[353px] sm:w-[50%] md:w-[353px] h-[340px]"
            alt="Landing"
          />
        </div>

        {/* Verification Code Input */}
        <div className="flex flex-col items-center w-full mb-6">
          
          <input
            type="text"
            id="verificationCode"
            value={verificationCode}
            onChange={handleInputChange}
            placeholder="Verification Code"
           className="w-full px-4 py-3 border border-gray-400 bg-gray-100 text-md text-gray-500 rounded-lg focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Resend Code Section */}
        <div className="text-center text-gray-600 mt-4">
          <p className="text-right">
            Didn’t receive any code?{" "}
            <button
              onClick={() => setTimer(120)} // Reset timer on Resend
              disabled={timer > 0} // Disable button while timer is active
              className={`font-semibold ${
                timer > 0 ? "text-violet cursor-not-allowed" : "text-violet hover:underline"
              }`}
            >
              Resend Code
            </button>
          </p>
          <p className="text-lg font-semibold mt-2">{formatTime(timer)}</p>
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
                    onClick={() => navigate("/emailVerifySuccess")}
                    className="py-3 flex justify-center items-center w-full bg-violet text-white rounded-lg font-semibold hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  >
                    Verify My Account
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

export default EmailVerifications;
