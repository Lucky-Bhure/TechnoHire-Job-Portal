import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'react-quill/dist/quill.snow.css';

createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <BrowserRouter>
    
      <App />
    </BrowserRouter>
  </RecoilRoot>
);
