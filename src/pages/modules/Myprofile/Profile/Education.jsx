import React,{useState} from "react";
import { MdOutlineAddBox } from "react-icons/md";
import useUpdateEducation from "../../../../hooks/EducationHook/useUpdateEducation";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const years = Array.from({ length: 2024 - 1975 + 1 }, (_, i) => 1975 + i).reverse();
function Education() {
  const navigate=useNavigate()
  const {educationArr,fetching,loading,updateEducation}=useUpdateEducation('67b80e9307c526c1e237ccc9')
  const [degree,setDegree]=useState("")
  const [institution,setInstitution]=useState("")
  const [year,setYear]=useState("")
  const [specialization,setSpecialization]=useState("")
  const [text,setText]=useState("")
  const [educationId,setEducationId]=useState("")
  const handleSubmit=async ()=>{
    if(!degree || !institution || !year || !text) return toast.error("Empty field are not allowed!",{
      position: "top-right",
      autoClose: 3000,
    })
      const bool =await updateEducation(degree,institution,year,text,specialization,educationId)
      if(bool) navigate(-1)
  }
  const handleSelect=(e)=>{
    setDegree(educationArr[e.target.selectedIndex-1].highestDegree)
    setInstitution(educationArr[e.target.selectedIndex-1].institutionName)
    setSpecialization(educationArr[e.target.selectedIndex-1].specialization)
    setText(educationArr[e.target.selectedIndex-1].educationAbout)
    setEducationId(educationArr[e.target.selectedIndex-1]._id)
    setYear(educationArr[e.target.selectedIndex-1].yearOfGraduation)
  }
  return (
    <div className="pb-5" >
      <h1 className="font-poppins font-medium text-[22px]/[64px] mt-5">
        Education Details
      </h1>

      <div className="flex justify-between items-center">
        <p className="font-inter font-normal text-[20px]/[20px] text-[#00000099]">
          Your Educational Background
        </p>
        <div className="flex items-center gap-2">
          <MdOutlineAddBox size={18} color="#7900BA" />
          <p className="font-lato font-medium text-[12px]/[16px] text-[#666666] tracking-[0.5px]">
            Add Another Education
          </p>
        </div>
      </div>
      {/*  */}

      <div className="text-[#8391A1] mt-8 space-y-10 font-urbanist font-medium text-[15px]/[18.75px]">
        <div className="flex items-center gap-20 w-[100%]">
          <div className="w-[50%] border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
            <select
              placeholder="hel"
              className="w-[100%] bg-[#F7F8F9] outline-none border-none"
              onChange={handleSelect}
              value={degree}
            >
              <option value="" disabled>Select an option</option>
              {fetching && <option disabled>Loading...</option>}
              {educationArr.map((item,index)=>(<option key={index} value={item.highestDegree}>{item.highestDegree}</option>))}
            </select>
          </div>
          <div className="w-[50%] border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
            <input 
            type="text"
            value={institution}
            onChange={(e)=>setInstitution(e.target.value)}
            className="bg-[#F7F8F9] outline-none border-none placeholder-[#8391A1]"
            placeholder="Institution Name"
            />
          </div>
        </div>
        <div className="flex items-center gap-20 w-[100%]">
          <div className="w-[50%] border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
            <select
              className="w-[100%] bg-[#F7F8F9] outline-none border-none"
              onChange={(e)=>setYear(e.target.value)}
              value={year}
            >
              <option value="" disabled>Year of Graduation</option>
              {years.map((item)=>(<option key={item} value={item}>{item}</option>))}
            </select>
          </div>
          <div className="w-[50%] border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
            <input
              type="text"
              value={specialization}
              className="bg-[#F7F8F9] outline-none border-none placeholder-[#8391A1]"
              onChange={(e)=>setSpecialization(e.target.value)}
              placeholder="Specialization (optional)"
            />
          </div>
        </div>
        <div className="w-[100%] h-[200px] border-[1px] border-[#7878789C] px-[40px] py-[16px] rounded-lg bg-[#F7F8F9]">
          <textarea
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder="Tell us something about your education"
            className="w-[100%] h-[170px]  rounded-lg bg-[#F7F8F9] outline-none resize-none placeholder:text-[#8391A1]"
          ></textarea>
        </div>
      </div>
        <button disabled={loading} onClick={handleSubmit} className={`${loading?"bg-gray-300":"bg-[#7900BA]"} w-[500px] px-[30px] py-[17px] m-auto flex justify-center items-center rounded-[10px] font-poppins font-medium text-white mt-10 cursor-pointer`}>Update</button>
    </div>
  );
}

export default Education;
