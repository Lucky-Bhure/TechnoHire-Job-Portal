import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Certify = () => {
  const [certifications, setCertifications] = useState([
    { name: "", organization: "", credentialId: "", completionDate: "" }
  ]);

  const handleAddCertification = () => {
    setCertifications([
      ...certifications,
      { name: "", organization: "", credentialId: "", completionDate: "" }
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedCertifications = [...certifications];
    updatedCertifications[index][field] = value;
    setCertifications(updatedCertifications);
  };

  const handleSkip = () => {
    console.log("Skipping form...");
    // Add skip logic here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Certifications:", certifications);
  };

  return (
    <div className="">
      {certifications.map((cert, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-semibold mb-4">
            Certification {index + 1}
          </h3>
          <input
            type="text"
            value={cert.name}
            onChange={(e) => handleInputChange(index, "name", e.target.value)}
            placeholder="Certification Name"
            className="w-full bg-gray-100 px-4 py-[14px] mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            
          />
          <input
            type="text"
            value={cert.organization}
            onChange={(e) =>
              handleInputChange(index, "organization", e.target.value)
            }
            placeholder="Issuing Organization"
            className="w-full bg-gray-100 px-4 py-[14px] mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            
          />
          <input
            type="text"
            value={cert.credentialId} // Bind to credentialId here
            onChange={(e) => handleInputChange(index, "credentialId", e.target.value)} // Use the same handleInputChange method
            placeholder="Credential ID"
            className="w-full bg-gray-100 px-4 py-[14px] mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <input
            type="text"
            value={cert.dateOfCompletion} // Bind to dateOfCompletion separately
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) {
                e.target.type = "text";
              }
            }}
            onChange={(e) =>
              handleInputChange(index, "completionDate", e.target.value)
            }
            placeholder="Date of Completion" // Static placeholder text
            className="w-full bg-gray-100 px-4 py-[14px] mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
      ))}

      <div className="flex items-center">
        <button
          type="button"
          onClick={handleAddCertification}
          className="flex justify-center items-center w-[30px] h-[30px] gap-2 border border-violet-700  px-4 py-[14px] rounded-lg hover:border-violet-800"
        >
          <span className="text-xl text-violet-700">+</span>
        </button>{" "}
        <span className="mx-2 text-gray-700">Add Another Certification</span>
        <button
          type="button"
          onClick={handleSkip}
          className="flex justify-end items-center text-violet-700 font-semibold hover:text-violet-900 ml-auto"
        >
          Skip <AiOutlineArrowRight className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default Certify;
