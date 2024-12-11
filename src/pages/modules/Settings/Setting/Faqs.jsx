import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

function Faqs() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };
  
  return (
    <div className="">
      <div>
        <h1 className="font-inter font-medium text-[24px]/[32px] text-center text-[#18191C] my-5">
          Your Account
        </h1>

        <div id="accordion-collapse" className="space-y-4">
      {/* Accordion Item 1 */}
      <div>
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium text-black-500 border border-b-0 ${
              activeAccordion === 1 ? "rounded-t-xl" : "rounded-xl"
            } focus:ring-4 focus:ring-gray-200 hover:bg-gray-100`}
            onClick={() => toggleAccordion(1)}
          >
            <span>How do I create an Account</span>
            <svg
              className={`w-3 h-3 transition-transform ${
                activeAccordion === 1 ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        {activeAccordion === 1 && (
          <div
            id="accordion-collapse-body-1"
            className="p-5 border border-gray-200 dark:bg-gray-900"
          >
            <p className="mb-2 text-black-500">
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS.
            </p>
          </div>
        )}
      </div>

      {/* Accordion Item 2 */}
      <div>
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium text-black-500 border border-b-0 ${
              activeAccordion === 2 ? "rounded-t-xl" : "rounded-xl"
            } focus:ring-4 focus:ring-gray-200 hover:bg-gray-100`}
            onClick={() => toggleAccordion(2)}
          >
            <span>How can i update my profile information</span>
            <svg
              className={`w-3 h-3 transition-transform ${
                activeAccordion === 2 ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        {activeAccordion === 2 && (
          <div
            id="accordion-collapse-body-2"
            className="p-5 border border-gray-200 dark:bg-gray-900"
          >
            <p className="mb-2 text-black-500">
              Flowbite is conceptualized using Figma.
            </p>
          </div>
        )}
      </div>

      {/* Accordion Item 3 */}
      <div>
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium text-black-500 border ${
              activeAccordion === 3 ? "rounded-t-xl" : "rounded-xl"
            } focus:ring-4 focus:ring-gray-200 hover:bg-gray-100`}
            onClick={() => toggleAccordion(3)}
          >
            <span>
             What should i do if i forget my password
            </span>
            <svg
              className={`w-3 h-3 transition-transform ${
                activeAccordion === 3 ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        {activeAccordion === 3 && (
          <div
            id="accordion-collapse-body-3"
            className="p-5 border border-gray-200 dark:bg-gray-900"
          >
            <p className="mb-2 text-black-500">
              The main difference is that Flowbite is open source.
            </p>
          </div>
        )}
      </div>
    </div>

        <h1 className="font-inter font-medium text-[24px]/[32px] text-center text-[#18191C] my-5">
          Candidate & Resume
        </h1>

        <div id="accordion-collapse-unique" className="space-y-4">
      {/* Accordion Item 1 */}
      <div>
        <h2 id="accordion-collapse-heading-unique-4">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium text-black-500 border border-b-0 ${
              activeAccordion === 4 ? "rounded-t-xl" : "rounded-xl"
            } focus:ring-4 focus:ring-gray-200 hover:bg-gray-100`}
            onClick={() => toggleAccordion(4)}
          >
            <span> How do I set up job alerts for new opportunities?</span>
            <svg
              className={`w-3 h-3 transition-transform ${
                activeAccordion === 1 ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        {activeAccordion === 4 && (
          <div
            id="accordion-collapse-body-unique-1"
            className="p-5 border border-gray-200 dark:bg-gray-900"
          >
            <p className="mb-2 text-black-500">
            How do I set up job alerts for new opportunities?
            </p>
          </div>
        )}
      </div>

      {/* Accordion Item 2 */}
      <div>
        <h2 id="accordion-collapse-heading-unique-5">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium text-black-500 border border-b-0 ${
              activeAccordion === 5 ? "rounded-t-xl" : "rounded-xl"
            } focus:ring-4 focus:ring-gray-200 hover:bg-gray-100`}
            onClick={() => toggleAccordion(5)}
          >
            <span>What file formats are accepted for resume uploads?</span>
            <svg
              className={`w-3 h-3 transition-transform ${
                activeAccordion === 5 ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        {activeAccordion === 5 && (
          <div
            id="accordion-collapse-body-unique-2"
            className="p-5 border border-gray-200 dark:bg-gray-900"
          >
            <p className="mb-2 text-black-500">
            How do I upload my resume to the portal?
            </p>
          </div>
        )}
      </div>

      {/* Accordion Item 3 */}
      <div className="mb-30"> 
        <h2 id="accordion-collapse-heading-unique-6">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium text-black-500 border ${
              activeAccordion === 6 ? "rounded-t-xl" : "rounded-xl"
            } focus:ring-4 focus:ring-gray-200 hover:bg-gray-100`}
            onClick={() => toggleAccordion(6)}
          >
            <span>
            How do I upload my resume to the portal?
            </span>
            <svg
              className={`w-3 h-3 transition-transform ${
                activeAccordion === 6 ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        {activeAccordion === 6 && (
          <div
            id="accordion-collapse-body-unique-3"
            className="p-5 border border-gray-200 dark:bg-gray-900 mb-30"
          >
            <p className="mb-2 text-black-500">
            How do I upload my resume to the portal?
            </p>
          </div>
        )}
      </div>
    </div>
      </div>
    </div>
  );
}

export default Faqs;
