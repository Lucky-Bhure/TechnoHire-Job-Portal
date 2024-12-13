import React, { useState } from "react";
import { FaArrowRight, FaBold } from "react-icons/fa";
import { FiUnderline } from "react-icons/fi";
import { GoItalic, GoListUnordered } from "react-icons/go";
import { LuLink } from "react-icons/lu";
import { RiListOrdered2 } from "react-icons/ri";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";

import { EditorContent, useEditor } from "@tiptap/react";

const Applypopup = ({ setshowmodal }) => {
  const [fileName, setFileName] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Placeholder.configure({
        placeholder:
          "Write down your biography here. Let the employers know who you are...", // Placeholder for Cover Letter
      }),
    ],
    content: "",
  });

  const editortwo = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Placeholder.configure({
        placeholder: "Type your answer here...",
      }),
    ],
    content: "",
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "");
  };

  const handleRemoveFile = () => {
    setFileName("");
    document.getElementById("fileInput").value = "";
  };

  if (!editor || !editortwo) {
    return null;
  }

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

            <EditorContent
              editor={editor}
              className="mt-1 px-2 py-2 border text-[16px] block w-full min-h-28 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <div className="flex">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().toggleBold().run();
                }}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className="font-semibold px-3 py-2 text-[#767F8C]"
              >
                <FaBold />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().toggleItalic().run();
                }}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className="font-semibold px-3 py-2 text-[#767F8C]"
              >
                <GoItalic />
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().toggleUnderline().run();
                }}
                disabled={!editor.can().chain().focus().toggleUnderline().run()}
                className="font-semibold px-3 py-2 text-[#767F8C]"
              >
                <FiUnderline />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().toggleOrderedList().run();
                }}
                className={`${
                  editor.isActive("orderedList") ? "is-active" : ""
                }font-semibold px-3 py-2 text-[#767F8C]`}
              >
                <RiListOrdered2 />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const url = prompt("Enter the link:");
                  if (url) {
                    editor.chain().focus().setLink({ href: url }).run();
                  }
                }}
                disabled={
                  !editor.can().chain().focus().setLink({ href: "" }).run()
                }
                className="font-semibold px-3 py-2 text-[#767F8C]"
              >
                <LuLink />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  editor.chain().focus().toggleBulletList().run();
                }}
                className={`${
                  editor.isActive("bulletList") ? "is-active" : ""
                }font-semibold px-3 py-2 text-[#767F8C]`}
              >
                <GoListUnordered />
              </button>
            </div>
          </div>

          {/* Screening Question */}
          <div>
            <p className="py-3">Screening Question</p>
            <p>Why are you a good fit for this role?</p>

            <EditorContent
              editor={editortwo}
              className="mt-3 border block px-2 py-2  min-h-28 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />

            <div className="flex">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  editortwo.chain().focus().toggleBold().run();
                }}
                disabled={!editortwo.can().chain().focus().toggleBold().run()}
                className="font-semibold px-3 py-2 text-[#767F8C]"
              >
                <FaBold />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  editortwo.chain().focus().toggleItalic().run();
                }}
                disabled={!editortwo.can().chain().focus().toggleItalic().run()}
                className="font-semibold px-3 py-2 text-[#767F8C]"
              >
                <GoItalic />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  editortwo.chain().focus().toggleUnderline().run();
                }}
                disabled={
                  !editortwo.can().chain().focus().toggleUnderline().run()
                }
                className="font-semibold px-3 py-2 text-[#767F8C]"
              >
                <FiUnderline />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  editortwo.chain().focus().toggleOrderedList().run();
                }}
                className={`${
                  editortwo.isActive("orderedList") ? "is-active" : ""
                }font-semibold px-3 py-2 text-[#767F8C]`}
              >
                <RiListOrdered2 />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const url = prompt("Enter the link:");
                  if (url) {
                    editortwo.chain().focus().setLink({ href: url }).run();
                  }
                }}
                disabled={
                  !editortwo.can().chain().focus().setLink({ href: "" }).run()
                }
                className="font-semibold px-3 py-2 text-[#767F8C]"
              >
                <LuLink />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  editortwo.chain().focus().toggleBulletList().run();
                }}
                className={`${
                  editortwo.isActive("bulletList") ? "is-active" : ""
                }font-semibold px-3 py-2 text-[#767F8C]`}
              >
                <GoListUnordered />
              </button>
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
