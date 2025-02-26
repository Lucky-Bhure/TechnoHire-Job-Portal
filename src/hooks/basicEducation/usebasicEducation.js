import React from 'react'
import useFetch from "../../hooks/useFetch"
import { toast } from 'react-toastify';
import { useState } from 'react';


function usebasicEducation() {

    const [fetchData] = useFetch();
    const [loading, setLoading] = useState(false);
  
  
    const basicEductaion  = async (userdata) => {
      setLoading(true);
      try {
          const res = await fetchData({
              method: "POST",
              url: "https://job-portal-candidate-be.onrender.com/basic/education",
              data:userdata,
          });
          if (res) {
             console.log("education posted")
              toast.success(res?.message || "Blog created successfully!");
             
          } else {
              throw new Error(res?.message || "Failed to create the blog.");
          }
      } catch (error) {
          console.error("Error creating blog:", error);
          toast.error(error.response?.data?.error || "An unexpected error occurred.");
      } finally {
          setLoading(false);
      }
  };
  
  return {basicEductaion}





}

export default usebasicEducation