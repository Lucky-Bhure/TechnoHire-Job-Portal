import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
// import { ToastContainer } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";
// import 'primereact/resources/themes/saga-blue/theme.css';  // Choose a theme
import "primereact/resources/themes/lara-light-cyan/theme.css";

createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    {/* <ToastContainer /> */}

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>
);
