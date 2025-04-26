import React from 'react';
import { IoIosArrowForward, IoMdClose } from 'react-icons/io';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const CustomToolbar = () => (
    <div id="toolbar" className="flex items-center gap-4 p-2 text-[#767F8C] text-sm">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-strike" />
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
      <button className="ql-link" />
      <button className="ql-clean" />
    </div>
);

const SpamBox = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50">
      {/* White Box */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 fixed bottom-10 right-8">
        {/* Close Button */}
        <button 
          className="absolute -top-3.5 -right-3.5 bg-[#DCBDED] rounded-full p-1.5 border border-[#FFFFFF] text-[#7900BA]"
          onClick={onClose}
        >
          <IoMdClose size={22} />
        </button>

        {/* Heading */}
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Reason for Spam</h2>

        {/* Heading Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Heading</label>
          <select className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option value="">Select...</option>
            <option value="fraud">Fraud</option>
            <option value="misleading">Misleading</option>
            <option value="abuse">Abuse</option>
          </select>
        </div>

        {/* Review Textarea */}
        <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Review</label>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
                
                {/* Editor */}
                <ReactQuill
                    theme="snow"
                    modules={{
                        toolbar: { container: "#toolbar" },
                    }}
                    formats={[
                        'bold', 'italic', 'underline', 'strike',
                        'list', 'bullet', 'link'
                    ]}
                    placeholder="Give us a small review about the spam"
                    className="min-h-[100px]"  
                />

                {/* Toolbar */}
                <CustomToolbar />
            </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-semibold hover:bg-purple-200 transition" onClick={onClose}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-purple-700 transition">
            Report Spam <IoIosArrowForward size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpamBox;
