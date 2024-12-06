import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import ForgotPasswordDialog from "./components/Dialog/ForgotPasswordDialog";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPasswordDialog />} />
      </Routes>
    </div>
  );
}

export default App;
