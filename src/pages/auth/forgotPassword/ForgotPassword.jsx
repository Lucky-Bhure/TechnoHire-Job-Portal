import React, { useEffect, useState } from "react";
import LoginBack from "../../../assets/img/loginBackground.png";
import LoginLogo from "../../../assets/img/loginLogo.png";
import ForgotPage from "./ForgotPage/ForgotPage";
import PasswordChange from "./PasswordChange/PasswordChange";
import PasswordResetSuccessfully from "../PasswordResetSuccessfully/PasswordResetSuccessfully";


const ForgotPassword = () => {
  const [id, setId] = useState(null);
  const [resetSuccess, setResetSuccess] = useState(false);

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center min-h-screen bg-white relative">
      {/* Left Side: Form */}

      <div className="w-full md:w-[60%] h-screen md:h-auto px-6 py-8 md:px-12 lg:px-32 sm:px-32 xs:px-12 rounded-lg ">
        {
          id ?
            (
              <PasswordChange id={id} setResetSuccess={setResetSuccess}/>
            ) : (
              <ForgotPage setId={setId} id={id}/>
            )
        }
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

      { 
        resetSuccess &&
        <div className="absolute inset-0 flex justify-center items-center bg-[#b4b4f632] backdrop-blur-sm z-10 w-screen h-screen">    
          <PasswordResetSuccessfully  setResetSuccess={setResetSuccess}/>
        </div>
      }
    </div>
  );
};

export default ForgotPassword;
