import React from "react";
import ResetSuccess from "../../../assets/img/reslogo.png"
import { useNavigate } from "react-router-dom";

const PasswordResetSuccessfully = ({ setResetSuccess }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    setResetSuccess(false);
    navigate("/login");
  }


  return (
    <div className="relative bg-white w-fit h-fit flex flex-col justify-center items-center rounded-xl shadow-xl">
      {/* Left Side: Form */}
      <div className="w-full px-4 py-14 md:px-12 lg:px-32 sm:px-32 xs:px-12 rounded-lg">
        <div className="flex justify-center items-center">
          <img
            src={ResetSuccess}
            alt="Tech image"
            className="w-13 h-13 mb-6 object-cover"
          />
        </div>
        <h1 className="text-4xl w-full font-semibold text-gray-800 mb-2 text-center">
          Password Reset Successful!
        </h1>
        <p className="text-center mt-0 mb-[40px] text-gray-500 text-lg">
          You can Log in with your new password
        </p>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[90%] py-3 px-4 bg-violet-700 text-white font-bold rounded-lg hover:bg-violet-700"
            onClick={handleClick}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetSuccessfully;
