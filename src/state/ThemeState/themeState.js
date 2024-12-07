// themeAtom.js
import { atom } from "recoil";
import { themes } from "../../components/Themes/Theme";

export const themeState = atom({
  key: "themeState", // unique ID (with respect to other atoms/selectors)
  default: themes.OverviewThemes, // default theme
});
