import React from "react";
import MainHeader from "../../../components/header/MainHeader";
import Header from "./FindEmployers/Header";
import Findemployer from "./FindEmployers/Findemployer";
import FilterEmployer from "./FindEmployers/FilterEmployer";

const Findemployee = () => {
  return (
    <div>
      <MainHeader />
      <Header />
      <Findemployer />
      <FilterEmployer />
    </div>
  );
};

export default Findemployee;
