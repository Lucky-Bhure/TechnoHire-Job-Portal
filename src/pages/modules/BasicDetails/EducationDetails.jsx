import React from "react";

const EducationDetails = ({ formik }) => {
  return (
    <div className="space-y-6">
      <div>
        <select
          id="degree"
          {...formik.getFieldProps("degree")}
          className="w-full bg-[#ece9e99c] px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
          <option value="">Highest Degree</option>
          <option value="bachelor">Bachelor's</option>
          <option value="master">Master's</option>
          <option value="phd">PhD</option>
          <option value="associate">Associate Degree</option>
        </select>
        {formik.touched.degree && formik.errors.degree && (
          <p className="text-red-500">{formik.errors.degree}</p>
        )}
      </div>
  
      <div>
        <input
          type="text"
          id="institution"
          placeholder="Institution Name"
          {...formik.getFieldProps("institution")}
          className="w-full bg-[#ece9e99c] px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        {formik.touched.institution && formik.errors.institution && (
          <p className="text-red-500">{formik.errors.institution}</p>
        )}
      </div>
  
      <div>
        <select
          id="graduationYear"
          {...formik.getFieldProps("graduationYear")}
          className="w-full bg-[#ece9e99c] px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
          <option value="">Graduation Year</option>
          {Array.from({ length: 50 }, (_, i) => (
            <option key={i} value={2024 - i}>
              {2024 - i}
            </option>
          ))}
        </select>
        {formik.touched.graduationYear && formik.errors.graduationYear && (
          <p className="text-red-500">{formik.errors.graduationYear}</p>
        )}
      </div>
  
      <div>
        <input
          type="text"
          id="specialization"
          placeholder="Specialization (Optional)"
          {...formik.getFieldProps("specialization")}
          className="w-full bg-[#ece9e99c] px-4 py-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
      </div>
    </div>
  );
  
};

export default EducationDetails;
