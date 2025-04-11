import React from "react";

function Terms() {
  return (
    <div className="">
      <h1 className="font-poppins font-medium text-[22px]/[64px] mt-5 text-[#000000]">
        Terms & Services
      </h1>
      <div className="font-inter font-normal text-[20px]/[50px] text-[#666666] text-opacity-[0.7] w-full">
        <p className="flex gap-2">
          <span>1)</span>
          <span>
            Users must be at least 18 years old or the minimum age required for
            employment in their jurisdiction.
          </span>
        </p>
        <p className="flex gap-2">
          <span>2)</span>
          <span>
            Users must provide accurate and truthful information during
            registration and when u the App.
          </span>
        </p>
        <p className="flex gap-2">
          <span>3)</span>
          <span>
            soan Users are required to create an account to access certain
            features of the App.
          </span>
        </p>
        <p className="flex gap-2">
          <span>4)</span>
          <span>
            Users are responsible for keeping their account information secure
            and confidential.
          </span>
        </p>
        <p className="flex gap-2">
          <span>5)</span>
          <span>
            The App is not liable for any unauthorized access to your account
            resulting from your negligence.
          </span>
        </p>
        <p className="flex gap-2">
          <span>6)</span>
          <span>
            Provide accurate and up-to-date information in their profiles,
            resumes, and applications.
          </span>
        </p>
        <p className="flex gap-2">
          <span>7)</span>
          <span>
            Apply only for positions are qualified for and genuinely interested
            in.
          </span>
        </p>
        <p className="flex gap-2">
          <span>8)</span>
          <span>
            Refrain from engaging in any fraudulent or unethical activities.
          </span>
        </p>
        <div className="flex flex-col gap-2">
          <p className="flex gap-2">
            <span>9)</span> <span>Job Seekers agree to:</span>
          </p>
          <div className="ml-5">
            <p>
              a. Provide accurate and up-to-date information in their profiles,
              resumes, and applications.
            </p>
            <p>
              b. Apply only for positions they are qualified for and genuinely
              interested in.
            </p>
            <p>
              c. Refrain from engaging in any fraudulent or unethical
              activities.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-7 mb-30">
        <button className="font-poppins font-medium text-[18px]/[64px]  h-[59.18px] rounded-[10px] px-[98px] bg-[#7900BA] text-white">
          Download
        </button>
      </div>
    </div>
  );
}

export default Terms;
