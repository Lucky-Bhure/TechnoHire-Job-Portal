import React, { useState } from "react";
import GettingStartedImage from "../../../assets/img/gettingstart.png"; // Import the getting started image
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const GettingStarted = () => {
  return (
    <div className="flex  md:flex-row h-screen bg-cover bg-center overflow-y-hidden">
      <div
        className="bg-white p-8 w-full ml-auto "
        style={{ height: "calc(103vh - 20px)" }}
      >
    

       {/* Heading */}
      <h1 className="text-3xl text-center font-semibold text-gray-800 mb-6">
        You’re All Set
      </h1>

      {/* Image */}
      <img
        src={GettingStartedImage}
        alt="Getting Started"
        className="w-[20%] h-auto mx-auto mb-6"
      />

      {/* Paragraph */}
      <p className="text-lg text-gray-600 text-center mb-8 px-4">
        Your profile is now 90% complete. <br/> Start exploring job opportunities
        tailored for you.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mb-6 w-full">
  <button className="bg-violet-700 w-[20%] text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500">
    <BsArrowLeft className="text-xl" />
    <span>Go to my profile</span>
  </button>
  <button className="bg-violet-700 w-[20%] text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500">
    <span>Browse my Jobs</span>
    <BsArrowRight className="text-xl" />
  </button>
</div>
      </div>
    </div>
  );
};

export default GettingStarted;
