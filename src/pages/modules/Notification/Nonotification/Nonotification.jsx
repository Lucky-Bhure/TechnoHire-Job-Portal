import React from 'react'
import nonotification from "../../../../assets/img/No-notification.png"

const Nonotification = () => {
  return (
    <div className="max-w-5xl mx-auto w-full mt-4 mb-40" >
        <div className='flex items-center justify-between ' ><h1 className='font-inter font-semibold text-2xl text-[#000]'>  Notification</h1>
            <h1 className='font-inter text-xl text-[#666666] font-normal' >Settings</h1>
            </div >
            <div className='w-[600px] mt-16 mx-[170px] h-[400px] object-contain flex flex-col justify-center  gap-12 '  >
            <img   src={nonotification} alt='nonotification-pic' />
            <h1 className='text-center font-inter text-xl text-[#666666] font-normal' >No Notification</h1>

            </div>

    </div>
  )
}

export default Nonotification