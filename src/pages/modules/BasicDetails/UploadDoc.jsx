import React, { useState, useRef } from 'react'
import { BsCloudUpload } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'

const UploadDoc = () => {
  const fileInputRef = useRef(null)
  const [selectedFile, setSelectedFile] = useState(null)

  // Trigger file input when the icon is clicked
  const handleIconClick = (e) => {
    e.preventDefault()
    fileInputRef.current.click() // Triggers the file input dialog
  }

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file.name) // Store the file name to display it
    }
  }

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full m-auto">
      <div className="space-y-10"> {/* Increased the gap here */}
        {/* Upload Documents */}
        <div className="flex flex-col sm:flex-row items-center gap-8"> {/* Increased gap */}
          <div className="w-full">
            <div className="relative">
              <input
                type="file"
                ref={fileInputRef}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                onChange={handleFileChange}
              />
              <div
                onClick={handleIconClick}
                className="bg-[#ece9e99c] block w-full py-4 pl-10 pr-4 border-2 border-gray-300 rounded-md text-gray-700 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <BsCloudUpload className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-600 text-[16px] cursor-pointer" />
                <span className=" text-gray-600 text-[16px] pl-7">
                  {selectedFile ? selectedFile : ' Upload Photo'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Upload Resume */}
        <div className="flex flex-col sm:flex-row items-center gap-8"> {/* Increased gap */}
          <div className="w-full">
            <div className="relative">
              <input
                type="file"
                ref={fileInputRef}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                onChange={handleFileChange}
              />
              <div
                onClick={handleIconClick}
                className="bg-[#ece9e99c] block w-full py-3 pl-10 pr-4 border-2 border-gray-300 rounded-md text-gray-700 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <BsCloudUpload className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-600 text-[16px] cursor-pointer" />
                <span className=" text-gray-600 text-[16px] pl-7">
                  {selectedFile ? selectedFile : 'Upload Resume'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Documents (Optional) */}
        <div className="flex flex-col sm:flex-row items-center gap-8"> {/* Increased gap */}
          <div className="w-full">
            <div className="relative">
              <input
                type="file"
                ref={fileInputRef}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                onChange={handleFileChange}
              />
              <div
                onClick={handleIconClick}
                className="bg-[#ece9e99c] block w-full py-3 pl-10 pr-4 border-2 border-gray-300 rounded-md text-gray-700 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <BsCloudUpload className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-600 text-[16px] cursor-pointer" />
                <span className=" text-gray-600 text-[16px] pl-7">
                  {selectedFile ? selectedFile : 'Additional Documents (Optional)'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default UploadDoc
