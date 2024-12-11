import React, { useState } from "react";
import GettingStartedImage from "../../../assets/img/gettingstart.png"; // Import the getting started image
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const GettingStarted = () => {
  return (
    <div className="">
      <div
        className="bg-white p-8 w-full ml-auto "
        // style={{ height: "calc(103vh - 20px)" }}
      >
        <div className="my-5"> 
          {/* Heading */}
        <h1 className="text-3xl text-center font-semibold text-gray-800 mb-2">
          You’re All Set
        </h1>
        <h1 className="text-3xl text-center font-semibold text-gray-800 mb-6">
        Welcome to TechnoHire!
        </h1>
        </div>

        {/* Image */}
        <img
          src={GettingStartedImage}
          alt="Getting Started"
          className="w-[20%] h-auto mx-auto my-8"
        />

        {/* Paragraph */}
        <p className="text-lg text-gray-600 text-center mb-8 px-4">
          Your profile is now 90% complete. <br /> Start exploring job
          opportunities tailored for you.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mb-6 w-full">
          <button className="bg-white py-3 text-violet-700 px-[4rem] border border-violet-700 rounded-lg flex items-center justify-center gap-2 hover:bg-violet-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-500">
            <BsArrowLeft className="text-xl" />
            <span>Go to my profile</span>
          </button>
          <button className="bg-violet-700 py-3 text-white px-[4rem] rounded-lg flex items-center justify-center gap-2 hover:text-violet-700 hover:bg-white border hover:border-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500">
            <span>Browse my Jobs</span>
            <BsArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
