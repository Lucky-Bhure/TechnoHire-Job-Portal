import React, { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

const Scheduleinterview = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  return (
    <>
      {/* <Layout> */}
      Shcdulefor interview
      <Button label="Submit" severity="primary" />
      <div className="card flex justify-content-center">
        <Dropdown
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.value)}
          options={cities}
          optionLabel="name"
          placeholder="Select a City"
          className="w-full md:w-14rem"
        />
      </div>
      {/* </Layout> */}
    </>
  );
};

export default Scheduleinterview;
