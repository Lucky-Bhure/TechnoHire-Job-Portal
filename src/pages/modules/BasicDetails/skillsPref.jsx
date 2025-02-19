import React, { useState } from "react";

const SkillsPref = () => {
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && skillInput.trim()) {
      e.preventDefault();
      if (!skills.includes(skillInput.trim())) {
        setSkills([...skills, skillInput.trim()]);
      }
      setSkillInput("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <form className="space-y-6">
      {/* Skills */}
      <div>
        {/* <label
          htmlFor="skills"
          className="block mb-2 text-[19px] font-medium text-gray-700"
        >
          Skills
        </label> */}
        <div className="relative">
          <div className="flex flex-wrap gap-2 items-center bg-gray-100 px-4 py-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-violet-500 min-h-[50px]">
            {skills.map((skill, index) => (
              <span
                key={index}
                className=" text-violet-700 px-2 py-1 rounded-md flex items-center gap-2"
              >
                <span
                  key={index}
                  className="bg-gray-600 text-white px-2 py-1 rounded-md flex items-center gap-2"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="text-white hover:text-gray-400"
                  >
                    &times;
                  </button>
                </span>
              </span>
            ))}
            <input
              type="text"
              id="skills"
              name="skills"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Add a skill"
              className="flex-grow focus:outline-none bg-transparent min-w-[120px]"
            />
          </div>
        </div>
      </div>

      {/* Job Type */}
      <div className="px-[30px] py-[20px]">
  <label className="block mb-5 text-[19px] font-medium text-gray-700">
    Job Type
  </label>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <label className="flex items-center text-lg gap-2 w-full">
      <input
        type="checkbox"
        name="jobType"
        value="Full Time"
        className="text-violet-600 transform scale-125"  // Increased checkbox size here
      />
      Full Time
    </label>
    <label className="flex items-center text-lg gap-2 w-full">
      <input
        type="checkbox"
        name="jobType"
        value="Part Time"
        className="text-violet-600 transform scale-125"  // Increased checkbox size here
      />
      Part Time
    </label>
    <label className="flex items-center text-lg gap-2 w-full">
      <input
        type="checkbox"
        name="jobType"
        value="Internship"
        className="text-violet-600 transform scale-125"  // Increased checkbox size here
      />
      Internship
    </label>
    <label className="flex items-center text-lg gap-2 w-full">
      <input
        type="checkbox"
        name="jobType"
        value="Freelance"
        className="text-violet-600 transform scale-125"  // Increased checkbox size here
      />
      Freelance
    </label>
  </div>
</div>


      {/* Preferred Designation */}
      <div>
        <select
          id="designation"
          name="designation"
          className="w-full bg-gray-100 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
          <option value="">Preferred Designation</option>
          <option value="Software Developer">Software Developer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Project Manager">Project Manager</option>
          <option value="QA Engineer">QA Engineer</option>
        </select>
      </div>

      {/* Preferred Location */}
      <div>
        <select
          id="location"
          name="location"
          className="w-full bg-gray-100 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
          <option value="">Preferred location</option>
          <option value="Remote">Remote</option>
          <option value="On-Site">On-Site</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      {/* Desired Salary Range */}
      <div>
        <label className="block mb-2 text-[19px] font-medium text-gray-700">
          Desired Salary Range
        </label>
        <div className="flex gap-4">
          <select
            name="minSalary"
            className="w-full bg-gray-100 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <option value="">Min</option>
            <option value="20000">20,000</option>
            <option value="30000">30,000</option>
            <option value="40000">40,000</option>
          </select>
          <select
            name="maxSalary"
            className="w-full bg-gray-100 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <option value="">Max</option>
            <option value="50000">50,000</option>
            <option value="60000">60,000</option>
            <option value="70000">70,000</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default SkillsPref;
