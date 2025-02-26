import React, { useEffect } from "react";
import Layout from "../../../components/Layout/Layout";
import useTheme from "../../../hooks/theme/useTheme";
import { themes } from "../../../components/Themes/Theme";

import Detailstabs from "./Profile/Detailstabs/Detailstabs";

const Profiledetails = () => {
  const { theme, setTheme } = useTheme(); 
 
  useEffect(() => {
    setTheme(themes.MyProfileThemes);
  });
  return (
    <>
      <Layout>
        <Detailstabs />
      </Layout>
    </>
  );
};

export default Profiledetails;
