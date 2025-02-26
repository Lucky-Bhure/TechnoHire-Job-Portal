import React, { useEffect, useState } from "react";
// import { MdArrowDropDown } from "react-icons/md";
import useUpdateDetails from "../../../../hooks/BasicdetailsHook/useUpdateDetails";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Basicdetails() {
  const {loading,fetching,profile,updateProfile}=useUpdateDetails("67bd8cbc58d20c53f079be2f")
  const [name,setName]=useState("")
  const [location,setLocation]=useState("")
  const [dob,setDob]=useState("")
  const [gender,setGender]=useState("")
  const [email,setEmail]=useState("")
  const [mobile,setMobile]=useState("")
  const [about,setAbout]=useState("")
  const navigate=useNavigate()
  useEffect(()=>{
    if(profile){
      setName(profile.name)
      setLocation(profile.locations)
      setDob(profile.dob)
      setGender(profile.gender)
      setEmail(profile.email)
      setMobile(profile.mobile)
      setAbout(profile.userAbout||"")
    } 
  },[profile])
  const handleSubmit=async()=>{
    if(!name || !location || !email || !mobile || !gender || !dob) return toast.error("Empty field are not allowed!",{position: "top-right",autoClose: 3000,})
    const bool=await updateProfile(name,location,dob,gender,email,mobile,about)
    if(bool) navigate(-1)
  }
  return (
    <div className="pb-5">
      <h1 className="font-poppins font-medium text-[30px]/[64px] mt-5">
        Basic Details
      </h1>
      <p className="font-inter font-normal text-[20px]/[20px] text-[#00000099]">
        Let&#39;s Start with the Basics 
      </p>
      <div className="text-[#8391A1] mt-10 space-y-10 font-urbanist font-medium text-[15px]/[18.75px]">
        <div className="flex items-center gap-20 w-[100%]">
          <div className="w-[50%] border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
            <input
              type="text"
              value={fetching? "Loading...":name} 
              className="bg-[#F7F8F9] outline-none border-none"
              placeholder="Name"
              onChange={(e)=>{setName(e.target.value);}}
            />
          </div>
          <div className="w-[50%] border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
            <input
              type="text"
              value={fetching? "Loading...":location}
              className="bg-[#F7F8F9] outline-none border-none"
              placeholder="Location"
              onChange={(e)=>setLocation(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center gap-20 w-[100%]">
          <div className="w-[50%] border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
            <input
              type="text"
              value={fetching? "Loading...":dob}
              className="bg-[#F7F8F9] outline-none border-none"
              placeholder={"dob"}
              onChange={(e)=>setDob(e.target.value)}
            />
          </div>
          <div className="w-[50%] border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
            <select value={gender} onChange={(e)=>setGender(e.target.value)} className="w-[100%] bg-[#F7F8F9] outline-none border-none">
                <option value="" disabled>{fetching?"Loading...":"Select Gender"}</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-20 w-[100%]">
          <div className="w-[50%] border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
            <input
              type="email"
              value={fetching? "Loading...":email}
              onChange={(e)=>setEmail(e.target.value)}
              className="bg-[#F7F8F9] outline-none border-none"
              placeholder="Email"
            />
          </div>
          <div className="w-[50%] border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
            <input
              type="tel"
              value={fetching? "Loading...":mobile}
              className="bg-[#F7F8F9] outline-none border-none"
              placeholder="Mobile Number"
              onChange={(e)=>setMobile(e.target.value)}
            />
          </div>
        </div>
        <div className="w-[100%] h-[200px] border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
          <textarea
            value={fetching? "Loading...":about}
            onChange={(e)=>setAbout(e.target.value)}
            placeholder="Tell us little about yourself ..."
            className="w-[100%] h-[170px]  rounded-lg bg-[#F7F8F9] outline-none resize-none placeholder:text-[#8391A1]"
          ></textarea>
        </div>
      </div>

      {/* <div className="bg-[#7900BA] w-[500px] px-[30px] py-[17px] m-auto flex justify-center items-center rounded-[10px] font-poppins mt-10">
        <button onClick={handleSubmit} className="text-white font-medium">Update</button>
      </div> */}
              <button disabled={loading||fetching} onClick={handleSubmit} className={`${loading?"bg-gray-300":"bg-[#7900BA]"} w-[500px] px-[30px] py-[17px] m-auto flex justify-center items-center rounded-[10px] font-poppins font-medium text-white mt-10 cursor-pointer`}>Update</button>

    </div>
  );
}

export default Basicdetails;
