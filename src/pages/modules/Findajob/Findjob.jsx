import React from "react";
import Header from "../../../components/header/Header";
import Findjobsfilterheader from "./Findjobsfilterheader/Findjobsfilterheader";
import {RiArrowDropDownLine} from "react-icons/ri";

import Findjoblinearmodel from "./Findjoblinearmodel/Findjoblinearmodel";
import Findjobboxmodel from "./Findjobboxmodel/Findjobboxmodel";


const FindJob = () => {

  return (
    <>
      <Header/>
      {/* <Findjobdetails/> */}
      <Findjobsfilterheader/>
      <div className="w-full  mt-7"> 
        <div className="flex items-center mx-64">
          <div className="left w-1/2  text-2xl "  > <h1>Suggested Jobs</h1> </div>
          <div className="right w-1/2 flex items-center justify-end gap-8 cursor-pointer " > 
            <p className=" flex items-center gap-1  hover:border-[0.3px]  hover:border-blue-500 p-1 px-2 font-light text-[15px] rounded-md " >Latest
              <h1 >  <RiArrowDropDownLine className="font-semibold text-lg"   color="#5E667089" /></h1>   </p> 
            <p className=" flex items-center gap-1  hover:border-[0.3px]  hover:border-blue-500 p-1 px-2 font-light text-[15px] rounded-md ">12 </p>
            <p className=" flex items-center gap-1  hover:border-[0.3px]  hover:border-blue-500 p-1 px-2 font-light text-[15px] rounded-md ">box</p>
            <p className=" flex items-center gap-1  hover:border-[0.3px]  hover:border-blue-500 p-1 px-2 font-light text-[15px] rounded-md ">linear</p>
            </div>
          </div>
      </div>
      {/* <Findjobboxmodel/> */}
      <Findjoblinearmodel/>
    </>
  );
};

export default FindJob;
