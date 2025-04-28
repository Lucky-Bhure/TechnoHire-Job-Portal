import React from "react";
import Header from "../header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

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
              <div className="w-full  p-4 h-screen ">{children}</div>
            </div>
          </div>
          <div className="footer mt-8">
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;