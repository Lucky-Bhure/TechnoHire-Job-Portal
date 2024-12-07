import React from "react";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <>
      <div className="bg-[#F1F2F4] grid gap-2 grid-cols-3">
        <div className=" col-span-2 bg-yellow-500">
          <div className="flex">
            <NavLink to="/">
              <span className="pl-4">Dashboard</span>
            </NavLink>
          </div>
        </div>
        <div className="bg-red-600">2</div>
      </div>
    </>
  );
};

export default MainHeader;
