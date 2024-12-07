import React from "react";
import Layout from "../../../components/Layout/Layout";
import Settings from "./Setting/Settings";

const Setting = () => {
  return (
    <>
      <Layout>
        <h1 className="font-inter font-medium text-[#18191C] text-[24px]/[32px] mb-6">Settings</h1>
        <Settings />
      </Layout>
    </>
  );
};

export default Setting;
