import React from "react";
import Header from "../header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <Header />
          </div>
          <div className="content">
            <div className="header flex">
              <Sidebar />
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
