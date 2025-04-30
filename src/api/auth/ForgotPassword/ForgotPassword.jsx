import axios from 'axios';
import React, { useState } from 'react'

const useForgotPassword = () => {

  const [data, setData] = useState({});

  // Reset Password Otp Sent
  const handleResetPasswordEmail = async(email, setError) => {
    console.log("Runnning");
    try {
      const res = await axios.post("https://job-portal-candidate-be.onrender.com/v1/forgetPassword",{
        "email": email
      });
      setData(res.data);
    } catch (error) {
      console.log(error);
      if(error.status == 400) {
        setError("Enter valid email");
      }
    }
  };


  // Reset Password Otp Verification
  const handleOTPVerification = async(otp) => {
    try {
      const res = await axios.post(`https://job-portal-candidate-be.onrender.com/v1/forgetPasswordOtp/${data.userId}`,{
        "OTP": otp
      });
      return {  message: res.data.message,
        id: data.userId
      };
    } catch (error) {
      console.log(error);
    }
  }

  // Reset Password with New Password
  const handleNewPassword = async(newData, id) => {
      try {
        const res = await axios.put(`https://job-portal-candidate-be.onrender.com/v1/newpassword/${id}`, newData);
        return res.data.status;
      } catch(error) {
        console.log(error);
      }
  }

  return {handleResetPasswordEmail, handleOTPVerification , data, handleNewPassword};
}

export default useForgotPassword
