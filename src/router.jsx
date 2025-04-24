// App.js
import {
    createBrowserRouter,
    RouterProvider,
  } from 'react-router-dom';
  
  import Homepage from './pages/Homepage';
  import Inboxes from './pages/Inboxes';
  import Login from './pages/Login';
  import ResetPassword from './pages/ResetPassword';
  import ForgotPassword from './pages/ForgotPassword';
  import ResetSuccess from './pages/ResetSuccess';
  import Myprofile from './pages/Myprofile';
  import SingleEmployers from './pages/SingleEmployers';
  import Aplliedjobs from './pages/Aplliedjobs';
  import Savedjobs from './pages/Savedjobs';
  import Scheduleinterview from './pages/Scheduleinterview';
  import Setting from './pages/Setting';
  import Feedback from './pages/Feedback';
  import Findjob from './pages/Findjob';
  import Findemployee from './pages/Findemployee';
  import Jobalerts from './pages/Jobalerts';
  import Customersupport from './pages/Customersupport';
  import Overview from './pages/Overview';
  import BasicDetails from './pages/BasicDetails';
  import Profiledetails from './pages/Profiledetails';
  import Emptyprofiles from './pages/Emptyprofiles';
  import GettingStarted from './pages/GettingStarted';
  import LandingScreen1 from './pages/LandingScreen1';
  import LandingScreen2 from './pages/LandingScreen2';
  import SignUp from './pages/SignUp';
  import VerifyAccount from './pages/VerifyAccount';
  import EmailVerifications from './pages/EmailVerifications';
  import EmailVerifySuccess from './pages/EmailVerifySuccess';
  import PhoneVerifications from './pages/PhoneVerifications';
  import PhoneVerifySuccess from './pages/PhoneVerifySuccess';
  import Notification from './pages/Notification';
  import Findjobdetails from './pages/Findjobdetails';
  import Applicationsubmit from './pages/Applicationsubmit';
  import Applicationdetails from './pages/Applicationdetails';
  
  import DashboardLayout from './components/DashboardLayout';
  
  const router = createBrowserRouter([
    { path: '/', element: <Homepage /> },
    { path: '/Inboxes', element: <Inboxes /> },
    { path: '/login', element: <Login /> },
    { path: '/reset-password', element: <ResetPassword /> },
    { path: '/forget-password', element: <ForgotPassword /> },
    { path: '/resetSuccess-password', element: <ResetSuccess /> },
    { path: '/my-profile', element: <Myprofile /> },
    { path: '/single-employee', element: <SingleEmployers /> },
    { path: '/applied-jobs', element: <Aplliedjobs /> },
    { path: '/saved-jobs', element: <Savedjobs /> },
    { path: '/scheduled-interview', element: <Scheduleinterview /> },
    { path: '/settings', element: <Setting /> },
    { path: '/feedback', element: <Feedback /> },
    { path: '/find-job', element: <Findjob /> },
    { path: '/find-employers', element: <Findemployee /> },
    { path: '/job-alerts', element: <Jobalerts /> },
    { path: '/customer-supports', element: <Customersupport /> },
    { path: '/basicDetails', element: <BasicDetails /> },
    { path: '/gettingStarted', element: <GettingStarted /> },
    { path: '/landingScreen1', element: <LandingScreen1 /> },
    { path: '/landingScreen2', element: <LandingScreen2 /> },
    { path: '/signUp', element: <SignUp /> },
    { path: '/verify', element: <VerifyAccount /> },
    { path: '/emailVerify', element: <EmailVerifications /> },
    { path: '/emailVerifySuccess', element: <EmailVerifySuccess /> },
    { path: '/phoneVerify', element: <PhoneVerifications /> },
    { path: '/phoneVerifySuccess', element: <PhoneVerifySuccess /> },
    { path: '/notification', element: <Notification /> },
    { path: '/jobdetails', element: <Findjobdetails /> },
    { path: '/application-submitted', element: <Applicationsubmit /> },
    { path: '/application-details', element: <Applicationdetails /> },
  
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { index: true, element: <Overview /> },
        { path: 'overview', element: <Overview /> },
        { path: 'my-profile', element: <Myprofile /> },
        { path: 'applied-jobs', element: <Aplliedjobs /> },
        { path: 'saved-jobs', element: <Savedjobs /> },
        { path: 'scheduled-interview', element: <Scheduleinterview /> },
        { path: 'settings', element: <Setting /> },
        { path: 'feedback', element: <Feedback /> },
        { path: 'profile-details', element: <Profiledetails /> },
        { path: 'empty-profile', element: <Emptyprofiles /> },
      ],
    },
  
    { path: '*', element: <div>Page Not Found</div> },
  ]);
  
  function App() {
    return <RouterProvider router={router} />;
  }
  
  export default App;
  