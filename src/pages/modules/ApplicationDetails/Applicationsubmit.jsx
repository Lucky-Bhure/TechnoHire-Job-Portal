import React from "react";
import Header from "../../../components/header/Header";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅
import apply from "../../../assets/apply.png";

const Applicationsubmit = () => {
  const navigate = useNavigate(); // ✅

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center ">
        <div className="flex justify-center items-center gap-3">
          <p className="text-[32px] font-poppins my-10">
            Application Submitted Successfully!
          </p>
          <div className="bg-green-500 rounded-full p-2 flex items-center justify-center">
            <FaCheckCircle size={20} className="text-white" />
          </div>
        </div>

        <div className="w-[582px] flex justify-center items-center my-8 h-[407px]">
          <img src={apply} alt="Application Submitted" />
        </div>

        <div className="flex my-16 gap-10">
          <button
            onClick={() => navigate("/find-job")} // ✅
            className="py-4 flex px-32 text-[#7900BA] rounded-lg border border-[#7900BA]"
          >
            View More Jobs &nbsp;
            <FaArrowRight className="ms-3 relative top-1" color="#7900BA" />
          </button>

          <button
            onClick={() => navigate("/application-details")} // ✅
            className="py-4 flex px-32 text-white bg-[#7900BA] rounded-lg"
          >
            View Application Details &nbsp;
            <FaArrowRight className="ms-3 relative top-1" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Applicationsubmit;
