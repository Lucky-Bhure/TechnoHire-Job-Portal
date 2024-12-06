import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import ResetPassword from "./pages/auth/resetPassword/resetPassword"
import ForgotPassword from "./pages/auth/forgotPassword/ForgotPassword";
import ResetSuccess from "./pages/auth/passwordReset/passwordResetSuccess"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/resetSuccess-password" element={<ResetSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
