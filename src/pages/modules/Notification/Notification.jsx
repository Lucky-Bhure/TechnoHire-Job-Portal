import React from 'react'
import Header from '../../../components/header/Header'
import notificationapplication from "../../../assets/img/Notificationapplication.png"
import Applicationsent from './Applicationsent/Applicationsent'
import Yourjobnotification from './Yourjobnotification/Yourjobnotification'
import Applicationsentdetails from './Applicationsentdetails/Applicationsentdetails'
import Newmessage from './Newmessage/Newmessage'
const Notification = () => {
  return (
    <>
      <Header/>
      <div className='w-full mt-3 p-0.5 flex flex-col mb-36 ' >
        <div className='flex items-center justify-around  ' >
            <h1>Notifications</h1>
            <h1 className='text-[#636A80]  font-inter font-normal text-s' >Mark all as read</h1>
        </div>
        <Applicationsent/>
        <Yourjobnotification/>
        <Applicationsentdetails/>
        <Newmessage/>
       
      </div>

   </>  
  )
}

export default Notification