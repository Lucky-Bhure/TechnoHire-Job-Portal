import { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider, PrimeReactContext} from 'primereact/api';
// import { ToastContainer } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";
// import 'primereact/resources/themes/saga-blue/theme.css';  // Choose a theme
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css"; // PrimeReact components
import "primeicons/primeicons.css"; // PrimeIcons

createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    {/* <ToastContainer /> */}
    <PrimeReactProvider value={{ unstyled: false }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PrimeReactProvider>
  </RecoilRoot>
);
