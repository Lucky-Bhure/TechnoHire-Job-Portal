import React from "react";
import { FaSearch } from "react-icons/fa";
const Inbox = () => {
  return (
    <div className="flex justify-center items-center pr-48 mt-20">
      <div className=" w-[800px] h-[600px] rounded-[10px] border-2">
        <div className="flex items-center h-[117px]" >
            <h5>Inbox</h5>
           <div className="relative">
           <input type="text" placeholder="search"/>
           <FaSearch className="absolute left-12 top-0"/>

           </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;