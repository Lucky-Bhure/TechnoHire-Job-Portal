import axios from 'axios'
import {useEffect, useState } from 'react'
import conf from '../../config'
import { toast } from 'react-toastify'

export default function useUpdateEducation(userID) {
        
        const [loading,setLoading]=useState(false)
        const [fetching,setFetching]=useState(false)
        const [educationArr,setEducationArr]=useState([])
        const editURL=conf.apiBaseUrl+'basic/educationUserEdit'
        useEffect(()=>{
                const fetchEducationId=async()=>{ 
                        setFetching(true)
                        try {
                                const res=await axios.post(editURL,{id:userID})
                                setEducationArr(res.data.education)
                        } catch (error) {
                                toast.error(error.response.data.message,{
                                        position: "top-right",
                                        autoClose: 3000,
                                })
                        } finally{
                                setFetching(false)
                        }
                }       
                fetchEducationId()
        },[])
        const updateEducation=async(degree,institution,year,text,specialization,educationId)=>{
                let data={
                        highestDegree:degree,
                        institutionName:institution,
                        yearOfGraduation:year,
                        specialization:specialization,
                        educationAbout:text
                }
                setLoading(true)
                try {
                        const res=await axios.post(conf.apiBaseUrl+'basic/educationUserUpdate/'+userID+'/'+educationId,data)
                        toast.success(res.data.message,{
                                position: "top-right",
                                autoClose: 3000,
                        })
                        return true
                } catch (error) {
                        toast.error(error.response.data.message,{
                                position: "top-right",
                                autoClose: 3000,
                        })
                        return false
                } 
                
        }
  return{loading,updateEducation,fetching,educationArr}
}
