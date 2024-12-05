import React from "react";
import Layout from "../../../components/Layout/Layout";
import Profile from "../../Profile/Profile";
import Experience from "../../Profile/Experience";

const Myprofile = () => {
  return (
    <>
      <Layout>
        <div className="flex">
          <Profile />
          <Experience />
        </div>
      </Layout>
    </>
  );
};

export default Myprofile;
