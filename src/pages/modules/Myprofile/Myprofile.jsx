import React, { useEffect } from "react";
import Layout from "../../../components/Layout/Layout";
import useTheme from "../../../hooks/theme/useTheme";
import { themes } from "../../../components/Themes/Theme";
import Profile from "../../Profile/Profile";
import Experience from "../../Profile/Experience";


const Myprofile = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme(themes.MyProfileThemes);
  });
  return (
    <>
      <Layout>

          hielo
        <div className="flex">
          <Profile />
          <Experience />
        </div>

      </Layout>
    </>
  );
};

export default Myprofile;
