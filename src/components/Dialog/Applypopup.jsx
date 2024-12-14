import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Applypopup = ({ setshowmodal }) => {
  const [fileName, setFileName] = useState("");
  const [value, setValue] = useState("");
  const [val, setval] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "");
  };

  const handleRemoveFile = () => {
    setFileName("");
    document.getElementById("fileInput").value = "";
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      {/* Popup Card */}
      <div className="bg-white rounded-lg  m-9 shadow-lg w-[708px] max-w-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Apply Job: Senior UX Designer</h2>
          <button
            className="relative bottom-10 left-8 bg-[#DCBDED] rounded-full text-[#7900BA] hover:text-gray-700"
            onClick={() => setshowmodal(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          {/* Choose Resume */}
          <p>Choose Resume</p>
          <div className="relative border rounded-md h-[48px] flex items-center px-4">
            <span className="text-gray-500">{fileName || "Select..."}</span>
            <input
              type="file"
              id="fileInput"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleFileChange}
            />
            {fileName && (
              <button
                type="button"
                onClick={handleRemoveFile}
                className="ml-auto text-gray-500 hover:text-red-600"
              >
                Remove
              </button>
            )}
          </div>

          {/* Cover Letter */}
          <div>
            <p className="py-1">Cover Letter</p>
            <div className="py-1 mt-2">
              <ReactQuill
                theme="snow"
                placeholder="Write down your biography here. Let the employers know who you are..."
                value={value}
                onChange={setValue}
              />
            </div>
          </div>

          {/* Screening Question */}
          <div>
            <p className="py-3">Screening Question</p>
            <p>Why are you a good fit for this role?</p>

            <div className="py-1 mt-2">
              <ReactQuill
                theme="snow"
                placeholder="Type your answer here..."
                value={val}
                onChange={setval}
              />
            </div>
          </div>

          <div className="flex justify-between space-x-4">
            <button
              type="button"
              onClick={() => setshowmodal(false)}
              className="px-4 py-2 bg-[#DCBDED] text-[#7900BA] rounded-md "
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={(e) => e.preventDefault()}
              className="px-4 flex py-2 bg-[#7900BA] text-white rounded-md "
            >
              Apply Now <FaArrowRight className="my-1 ms-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Applypopup;
