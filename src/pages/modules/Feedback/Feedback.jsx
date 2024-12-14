import React, { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import { Rate } from "antd";

const Feedback = () => {
  const [checked, setchecked] = useState(false);

  const handlecheck = () => {
    setchecked(!checked);
  };

  return (
    <>
      <Layout>
        <div className="text-center py-5">
          <p className="text-2xl font-semibold">Rate Our Service</p>
          <p className="py-3 text-gray-500">
            Fill the form to submit your feedback
          </p>
        </div>

        <div className="max-w-5xl mx-auto  p-6">
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded-md p-3 focus:outline-blue-500 "
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-md p-3 focus:outline-blue-500 "
            />

            <div className="flex items-center border border-gray-300 rounded-md p-3">
              <span className="mr-3 text-gray-500">🇮🇳 +91</span>
              <input
                type="number"
                placeholder="Contact Number"
                className="flex-1 focus:outline-blue-500 "
              />
            </div>
            <input
              type="text"
              placeholder="Company Name"
              className="border border-gray-300 rounded-md p-3 focus:outline-blue-500 "
            />
          </div>

          <div className="mt-7">
            <p className="text-lg text-gray-400 font-semibold mb-2">Ratings</p>
            <div className="flex gap-2">
              <Rate className="text-3xl" disabled defaultValue={3} />
            </div>
          </div>

          <div className="mt-6">
            <textarea
              placeholder="If you have any additional feedback, let us know!"
              className="w-full h-36 border border-gray-300 rounded-md py-4 ps-4 focus:outline-blue-500"
            ></textarea>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                value={checked}
                onChange={handlecheck}
                id="privacyPolicy"
                className="w-5 h-5 text-blue-600 border-gray-300 rounded "
              />
              <label
                htmlFor="privacyPolicy"
                className={`ml-2 text-sm ${
                  checked ? "text-black" : "text-gray-400"
                } `}
              >
                I have read and accept the Privacy Policy.
              </label>
            </div>
          </div>
          <div className="flex justify-center items-center my-11">
            <button
              disabled={!checked}
              className="bg-[#7900BA] text-white font-semibold text-lg py-2 px-36 rounded-lg "
            >
              Submit
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Feedback;
