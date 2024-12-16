import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { LuLayers } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
import Findjobfilterpop from "../../../../components/Dialog/Findjobfilterpop/Findjobfilterpop";

const Findjobsfilterheader =()=> {
  const [showModel, setShowModel] = useState(false)

  
  
  return (<>
    <div className="bg-[#F1F2F4] py-[24px] space-y-5  ">
      <div className="flex justify-between items-center mx-64 ">
        <h3 className="font-inter font-medium text-[18px]/[28px] text-[#18191C]">
          Find Jobs
        </h3>
        <div className="flex items-center gap-2">
          <p className="font-inter font-normal text-[14px]/[20px] text-[#767F8C]">
            Home &nbsp; / &nbsp;
          </p>
          <p className="font-inter font-normal text-[14px]/[20px] text-[#18191C]">
            Find Jobs
          </p>
        </div>
      </div>

      <div className="  mx-64 flex justify-between px-1 h-[66px] items-center bg-white rounded-lg border-[1px] border-[#E4E5E8] shadow-[#002C6D0A]">
        <div className="flex "  >
          <div className="w-[220px] p-3 flex items-center gap-2 border-r-[##9199A3] border-r-[1px]">
          <div className="flex items-center gap-1">
            <IoSearch size={16} color="#7900BA" />
            </div>
            <input onClick={()=> setShowModel(true)}
              type="text"
              placeholder="Job title, Keyword..."
              className="placeholder:text-[#9199A3] placeholder:text-base outline-none border-none"
            />
          </div>
          <div className="w-[220px] flex items-center gap-2  border-r-[##9199A3] border-r-[1px] p-1">
          <div className="flex items-center gap-1 ">
            <SlLocationPin size={16} color="#7900BA" />
            </div>
            <input  onClick={()=> setShowModel(true)}
              type="text"
              placeholder="Location"
              className="placeholder:text-[#9199A3]  placeholder:text-base outline-none border-none"
            />
          </div>
          <div className="w-[220px] flex items-center gap-2 border-r-[##9199A3] border-r-[1px] p-3">
            <div className="flex items-center gap-2">
              <LuLayers size={16} color="#7900BA" />
              <p onClick={()=> setShowModel(true)} className="text-[#9199A3]">Select Category</p>
            </div>
            <div>
              <RiArrowDropDownLine onClick={()=> setShowModel(true)}size={30} color="#5E667089" />
            </div>
          </div>

          <div className="w-[220px] flex items-center px-3">
            <div className="flex items-center gap-2">
              {/* <LuLayers size={16} color="#7900BA" /> */}
              <p  onClick={()=> setShowModel(true)} className="text-[#9199A3]">Advance Filter</p>
            </div>
            <div>
              <RiArrowDropDownLine onClick={()=> setShowModel(true)} size={30} color="#5E667089" />
            </div>
          </div>
          <div className="w-[100px] h-[50px]  flex  items-center" >
          <button onClick={()=> setShowModel(true)} className=" w-full h-full rounded-[5px] bg-[#7900BA] font-semibold  text-white" >Find Job</button>
        </div>
        </div>
       
      </div>
    </div>


   {showModel? <Findjobfilterpop showModel ={showModel}  onclose={()=>setShowModel(false)} />:'' } 

    </>
  );
}

export default Findjobsfilterheader;
