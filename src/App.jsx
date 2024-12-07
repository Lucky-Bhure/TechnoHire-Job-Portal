import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "./pages/modules/Overview/Overview";
import Myprofile from "./pages/modules/Myprofile/Myprofile";
import Aplliedjobs from "./pages/modules/Appliedjobs/Aplliedjobs";
import Savedjobs from "./pages/modules/Savedjobs/Savedjobs";
import Scheduleinterview from "./pages/modules/Scheduleinterview/Scheduleinterview";
import Setting from "./pages/modules/Settings/Setting";
import Feedback from "./pages/modules/Feedback/Feedback";
import Login from "./components/login/Login";
import ResetPassword from "./pages/auth/resetPassword/resetPassword"
import ForgotPassword from "./pages/auth/forgotPassword/ForgotPassword";
import ResetSuccess from "./pages/auth/passwordReset/passwordResetSuccess"
import Homepage from "./pages/modules/Homepage/Homepage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/homePage" element={<Homepage/>}/>
        <Route path="/" element={<Overview />} />
        <Route path="/my-profile" element={<Myprofile />} />
        <Route path="/applied-jobs" element={<Aplliedjobs />} />
        <Route path="/saved-jobs" element={<Savedjobs />} />
        <Route path="/scheduled-interview" element={<Scheduleinterview />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="*" element={<div>Page Not Found</div>} />
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/resetSuccess-password" element={<ResetSuccess />} />
      </Routes>
    </>
  );
};

export default App;