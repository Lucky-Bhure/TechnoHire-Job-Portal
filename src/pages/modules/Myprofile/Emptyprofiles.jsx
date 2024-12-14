import React, { useEffect } from "react";
import Layout from "../../../components/Layout/Layout";
import useTheme from "../../../hooks/theme/useTheme";
import { themes } from "../../../components/Themes/Theme";
import Emptyprofile from "./Profile/Emptyprofile/Emptyprofile";

const Emptyprofiles = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme(themes.MyProfileThemes);
  });
  return (
    <>
      <Layout>
        <Emptyprofile />
      </Layout>
    </>
  );
};

export default Emptyprofiles;
