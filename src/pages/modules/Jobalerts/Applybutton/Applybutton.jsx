import React, { useState } from 'react';
import Editjobalertsuccessfully from './Editjobalertsuccessfully';

const ApplyButton = ({ isVisible, onclose }) => {
  const [editSuccessfully, setEditSuccessfully] = useState(false);

  if (!isVisible && !editSuccessfully) return null;

  const handelClose = (e) => {
    if (e.target.id === 'wraper') onclose();
  };

  const handleSave = () => {
    // Close this popup
    onclose();
    // Show success popup
    setEditSuccessfully(true);
  };

  return (
    <>
      {isVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
          id="wraper"
          onClick={handelClose}
        >
          <div className="w-[600px] flex flex-col">
            <button
              className="text-black text-2xl place-self-end mr-4 mb-2"
              onClick={onclose}
            >
              ×
            </button>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h1 className="mb-6 text-2xl text-center font-semibold text-gray-800">
                Edit Job Alerts
              </h1>
              <form className="space-y-6">
                <div>
                  <label className="block font-medium mb-2 text-gray-700">Job Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>Full Time</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>Part Time</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>Freelance</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>Internship</span>
                    </label>
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Preferred Designation"
                    className="w-full bg-[#F3F3F3] border border-gray-300 text-sm text-gray-800 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <div>
                  <select
                    className="w-full bg-[#F3F3F3] border border-gray-300 text-sm text-gray-800 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  >
                    <option value="">Preferred Location</option>
                    <option value="Remote">Remote</option>
                    <option value="On-site">On-site</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium mb-2 text-gray-700">Desired Salary Range</label>
                  <div className="flex gap-4">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-1/2 bg-[#F3F3F3] border border-gray-300 text-sm text-gray-800 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-1/2 bg-[#F3F3F3] border border-gray-300 text-sm text-gray-800 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={handleSave}
                    className="w-full mt-2 bg-purple-700 hover:bg-purple-800 text-white font-semibold text-base py-3 rounded-lg flex justify-center items-center gap-2 transition duration-300"
                  >
                    Save and Continue →
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Show the success popup after closing the first one */}
      <Editjobalertsuccessfully
        active={editSuccessfully}
        onclose={() => setEditSuccessfully(false)}
        handelClose={handelClose}
      />
    </>
  );
};

export default ApplyButton;
