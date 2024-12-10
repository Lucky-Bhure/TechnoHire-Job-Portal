import React, { useState } from "react";

const EducationDetails = () => {
  const [formData, setFormData] = useState([
    { degree: "", institution: "", graduationYear: "", specialization: "" },
  ]);

  const handleInputChange = (index, e) => {
    const { id, value } = e.target;
    const updatedFormData = [...formData];
    updatedFormData[index][id] = value;
    setFormData(updatedFormData);
  };

  const addEducation = () => {
    setFormData([
      ...formData,
      { degree: "", institution: "", graduationYear: "", specialization: "" },
    ]);
  };

  return (
    <div className="space-y-6">
      {formData.map((education, index) => (
        <div key={index} className="space-y-6">
          <div>
            <select
              id="degree"
              value={education.degree}
              onChange={(e) => handleInputChange(index, e)}
              className="w-full bg-[#ece9e99c] px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              <option value="">Highest Degree</option>
              <option value="bachelor">Bachelor's</option>
              <option value="master">Master's</option>
              <option value="phd">PhD</option>
              <option value="associate">Associate Degree</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              id="institution"
              placeholder="Institution Name"
              value={education.institution}
              onChange={(e) => handleInputChange(index, e)}
              className="w-full bg-[#ece9e99c] px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <div>
            <select
              id="graduationYear"
              value={education.graduationYear}
              onChange={(e) => handleInputChange(index, e)}
              className="w-full bg-[#ece9e99c] px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              <option value="">Year of Graduation</option>
              {Array.from({ length: 50 }, (_, i) => (
                <option key={i} value={2024 - i}>
                  {2024 - i}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              type="text"
              id="specialization"
              placeholder="Specialization (Optional)"
              value={education.specialization}
              onChange={(e) => handleInputChange(index, e)}
              className="w-full bg-[#ece9e99c] px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
        </div>
      ))}
      <div className="flex items-center">
      <button
        type="button"
        onClick={addEducation}
        className="flex justify-center items-center w-[30px] h-[30px] gap-2 bg-violet-700 text-white px-4 py-[1rem] rounded-lg hover:bg-violet-800"
      >
        <span className="text-xl">+</span>
      </button> <span className="mx-2">Add Another Education</span>
      </div>
    </div>
  );
};

export default EducationDetails;
