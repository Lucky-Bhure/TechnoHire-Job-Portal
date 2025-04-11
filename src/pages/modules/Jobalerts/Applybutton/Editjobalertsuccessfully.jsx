import React, { useEffect, useState } from 'react'
import EditJobAlert from "../../../../assets/img/EditJobAlerts.png"
import Jobalerts from "../Jobalerts"

const Editjobalertsuccessfully = ({active ,onclose , handelClose}) => {
    if(!active) return null;


  return (
    <>    
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'id='wraper' onClick={handelClose}>
        <div className='w-[750px]  bg-white  flex flex-col justify-start' >
             <button className='text-black text-xl place-self-end *'
                 onClick={()=>onclose()}>X</button>
                <div className='bg-white p-2 rounded flex justify-center'>
                    <h1 className='mb-4 text-xl text-center text-[#191F33] font-medium text-gray' >
                        Job Alert Set Successfully
                    </h1>
                </div>
                <div className='h-[400px] w-full'>
                    <img src={EditJobAlert}  className='h-full w-full object-cover' alt='Job alert Successfully Pic' />
                </div>
                <div className='flex justify-center items-center mb-6 mt-6' >
                <h1 className='text-xl font-inter font-normal text-[#636A80]' >You'll receive notification whenever a new job <br/> <span className='ml-10'>matching your perferences is posted</span>
                </h1>
                </div>
                <button  onClick={()=>onclose()}
                 className='bg-blue-600 py-5 px-6 font-semibold text-xl text-white mx-6 mb-3' >Go to Job Alert</button>

        </div>
    </div>
</>

  )
}

export default Editjobalertsuccessfully;