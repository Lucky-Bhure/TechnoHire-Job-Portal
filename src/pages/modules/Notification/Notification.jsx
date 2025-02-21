import React from 'react'
import Header from '../../../components/header/Header'
// import notificationapplication from "../../../assets/img/Notificationapplication.png"
import Applicationsent from './Applicationsent/Applicationsent'
import Yourjobnotification from './Yourjobnotification/Yourjobnotification'
import Applicationsentdetails from './Applicationsentdetails/Applicationsentdetails'
import Newmessage from './Newmessage/Newmessage'
import Nonotification from './Nonotification/Nonotification'
const Notification = () => {
  return (
    <>
      <Header/>
        <Applicationsent/>
        <Yourjobnotification/>
        <Applicationsentdetails/>
        <Newmessage/>

        {/* <Nonotification/> */}
       

   </>  
  )
}

export default Notification