

import React,{useState} from "react";
import Header from "../../../components/header/Header";
import Findjobsfilterheader from "./Findjobsfilterheader/Findjobsfilterheader";
import {RiArrowDropDownLine} from "react-icons/ri";
import Grid from "../../../assets/img/Grid.png"
import Gridlinear from "../../../assets/img/Grid-linear.png"
import Findjoblinearmodel from "./Findjoblinearmodel/Findjoblinearmodel";
import Findjobboxmodel from "./Findjobboxmodel/Findjobboxmodel";


const FindJob = () => {

  const [model, setModel] = useState(true);

  return (
    <>
      <Header/>
      <Findjobsfilterheader/>
      <div className="w-full  mt-7"> 
        <div className="flex items-center mx-64">
          <div className="left w-1/2  text-2xl "  > <h1>Suggested Jobs</h1> </div>
          <div className="right w-1/2 flex items-center justify-end gap-8 cursor-pointer " > 
          <div className="border border-black flex rounded-md items-center justify-around py-1 w-1/4"  >
            <h1 className=" flex items-center gap-1  justify-between p-1 px-2 font-light text-[15px] rounded-md " >Latest</h1>
              <RiArrowDropDownLine className="font-semibold text-3xl"   color="#5E667089" /> 
              </div>  
            <div className="border border-black flex rounded-md justify-around py-1">  
            <h1 className=" flex items-center gap-1 px-3  font-light text-[15px] rounded-md ">12 </h1>
            <p className=" flex items-center gap-1  px-2 font-light text-[15px] rounded-md ">Per Page </p>
            <RiArrowDropDownLine className="font-semibold text-3xl"   color="#5E667089" /> 
            </div>

           <div className="border border-black flex rounded-md justify-around " >
            <p onClick={()=>setModel(true)}
             className=" flex items-center gap-1   p-1 px-2 font-light text-[15px] rounded-md ">
              <img src={Grid} alt="Grid-pic" />
             </p>
            <p onClick={()=>setModel(false)}
             className=" flex items-center gap-1  p-1 px-2 font-light text-[15px] rounded-md ">
              <img src={Gridlinear} alt="Grid-linear-pic" />
              </p>
            </div> 
            </div>
          </div>
      </div>
      {model ? <Findjobboxmodel/> : <Findjoblinearmodel/>}
   
    </>
  );
};

export default FindJob;
