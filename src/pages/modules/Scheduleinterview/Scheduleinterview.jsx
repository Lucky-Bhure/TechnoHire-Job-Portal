import React from "react";
import Layout from "../../../components/Layout/Layout";
import { Button } from "primereact/button";

const Scheduleinterview = () => {
  return (
    <>
      <Layout>
      <div className="primereact-container">
        <h1 className="text-xl font-poppins">Schedule Interview</h1>
        <Button label="Submit" className="p-button-primary" />
      </div>
      </Layout>
    </>
  );
};

export default Scheduleinterview;




