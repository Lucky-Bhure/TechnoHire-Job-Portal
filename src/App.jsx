import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "./pages/modules/Overview/Overview";
import Myprofile from "./pages/modules/Myprofile/Myprofile";
import Aplliedjobs from "./pages/modules/Appliedjobs/Aplliedjobs";
import Savedjobs from "./pages/modules/Savedjobs/Savedjobs";
import Scheduleinterview from "./pages/modules/Scheduleinterview/Scheduleinterview";
import Setting from "./pages/modules/Settings/Setting";
import Feedback from "./pages/modules/Feedback/Feedback";
import Homepage from "./pages/modules/Homepage/Homepage";
import Findjob from "./pages/modules/Findajob/Findjob";
import Findemployee from "./pages/modules/FindEmplyee/Findemployee";
import Jobalerts from "./pages/modules/Jobalerts/Jobalerts";
import Customersupport from "./pages/modules/Customersupports/Customersupport";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/find-job" element={<Findjob />} />
        <Route path="/find-employers" element={<Findemployee />} />
        <Route path="/job-alerts" element={<Jobalerts />} />
        <Route path="/customer-supports" element={<Customersupport />} />
        <Route path="/dashboard" element={<Overview />} />
        <Route path="/dashboard/overview" element={<Overview />} />
        <Route path="/dashboard/my-profile" element={<Myprofile />} />
        <Route path="/dashboard/applied-jobs" element={<Aplliedjobs />} />
        <Route path="/dashboard/saved-jobs" element={<Savedjobs />} />
        <Route
          path="/dashboard/scheduled-interview"
          element={<Scheduleinterview />}
        />
        <Route path="/dashboard/settings" element={<Setting />} />
        <Route path="/dashboard/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
};

export default App;
