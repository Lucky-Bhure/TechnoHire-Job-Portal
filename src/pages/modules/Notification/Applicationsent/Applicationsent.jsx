import React from 'react'
import Applicationsentnotification from "../../../../assets/img/Applicationsentnotification.png"

const Applicationsent = () => {
  return (
    <div className='flex  mx-[330px] items-start mx- border bg-white hover:bg-[#E5E5E5]  shadow-lg hover:shadow-2xl rounded-2xl mt-[26px] p-4 gap-1 hover:border-blue-600 hover:rounded-l  cursor-pointer focus:bg-blue-700 ' >  
          <div className=' h-full w-14   flex items-center justify-center'>
            <img src={Applicationsentnotification } className='h-full w-full object-contain' alt='notification-application-pic' />
          </div>

          <div className='px-4  flex flex-col text-wrap flex-wrap '  >
              <h1 className='text-[#191F33] font-inter font-medium text-[20px]/[32px] '>Application sent</h1>
              <p className=' text-[#636A80]  font-inter font-normal text-lg' >Application for Google Companies have entered for 
                company review 
              </p>
              <div className='flex items-center gap-36  mt-2 ' >
              <h4 className='text-[#636A80]  font-inter font-normal w-52 ' >25 Minutes ago</h4>
              <button className='text-black  hover:bg-red-400 hover:text-black  hover:rounded-xl px-2 py-2 m-0' >Delete</button>
              </div>
          </div>
          <div>
           
          </div>
        </div>
  )
}

export default Applicationsent