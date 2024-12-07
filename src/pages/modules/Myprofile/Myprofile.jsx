import React, { useEffect } from "react";
import Layout from "../../../components/Layout/Layout";
import useTheme from "../../../hooks/theme/useTheme";
import { themes } from "../../../components/Themes/Theme";

const Myprofile = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme(themes.MyProfileThemes);
  });
  return (
    <>
      <Layout>
        <div
          style={{
            backgroundColor: theme.backgroundColorfirstforprofile,
          }}
        >
          hielo
        </div>
      </Layout>
    </>
  );
};

export default Myprofile;
