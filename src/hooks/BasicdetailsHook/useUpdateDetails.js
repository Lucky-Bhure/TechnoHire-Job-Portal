import axios from 'axios'
import {useEffect, useState } from 'react'
import conf from '../../config'
import { toast } from 'react-toastify'

export default function useUpdateDetails(userID) {
        
        const [loading,setLoading]=useState(false)
        const [fetching,setFetching]=useState(false)
        const [profile,setProfile]=useState()
        const editURL=conf.apiBaseUrl+'basic/profileEdit'
        useEffect(()=>{
                const fetchProfileDetails=async()=>{
                        setFetching(true)
                        try {
                                const res=await axios.post(editURL,{id:userID})
                                setProfile(res.data)
                        } catch (error) {
                                toast.error(error.response.data.message,{
                                        position: "top-right",
                                        autoClose: 3000,
                                })
                        } finally{
                                setFetching(false)
                        }
                }       
                fetchProfileDetails()
        },[])
        const updateProfile=async(name,location,dob,gender,email,mobile,about)=>{
                let data={
                        name:name,
                        dob:dob,
                        gender:gender,
                        mobile:mobile,
                        locations:location,
                        userAbout:about,
                        email:email,
                }
                setLoading(true)
                try {
                        const res=await axios.post(conf.apiBaseUrl+'basic/profileUpdate/'+userID,data)
                        toast.success(res.data,{
                                position: "top-right",
                                autoClose: 3000,
                        })
                        console.log(res.data)
                        return true
                } catch (error) {
                        toast.error(error.response.data.message,{
                                position: "top-right",
                                autoClose: 3000,
                        })
                        return false
                } finally{
                        setLoading(false)
                }
                
        }
  return{loading,updateProfile,fetching,profile}
}
