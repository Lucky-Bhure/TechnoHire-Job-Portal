import React from 'react'
import Findjobsfilterheader from '../../../pages/modules/Findajob/Findjobsfilterheader/Findjobsfilterheader';

const Findjobfilterpop = ({onclose}) => {

    const handelClose = (e)=>{
        if(e.target.id ==="wraper" ) onclose();
    }


  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
        flex justify-center items-center ' id='wraper' onClick={handelClose}>
            <div className=' flex flex-col ' >
                <button className='text-white text-xl place-self-end *'
                onClick={()=>onclose()} >X</button>
                <div className='bg-white p-2 rounded'>
                    <Findjobsfilterheader/>
                   <form action="#">
                    <div>
                        <div className='mx-32 border mt-4 border-l-0 border-t-blue-500 border-b-0  w-full mb-12 flex ' >
                          <div className='flex flex-col  w-[12%] border-[0.5px] border-l-0 border-t-0 border-b-0   border-r-blue-700' >  
                           <h1 className='mt-3' > Experience </h1> 
                           <div className='mt-3 flex flex-col justify-center  ' >
                           <label className='mt-2' > <input type='radio' value=""/> - Fresher</label>

                             <label className='mt-2' > <input type='radio' value=""/> 1 Years - 2 Years</label>
                              <label className='mt-2' > <input type='radio' value=""/>  2 Years - 4 Years</label>
                              <label className='mt-2' > <input type='radio' value=""/> 4 Years - 6 Years</label>
                              <label className='mt-2' > <input type='radio' value=""/> 6 Years - 8 Years</label>
                              <label className='mt-2' > <input type='radio' value=""/> 8 Years - 10 Years</label>
                              <label className='mt-2' > <input type='radio' value=""/> 10 Years - 15 Years</label>
                              <label className='mt-2' > <input type='radio' value=""/> 15 + Years </label>
                           </div>
                           </div>

                           <div className='flex flex-col ml-4  w-[12%] border-[0.5px] border-l-0 border-t-0 border-b-0   border-r-blue-700' >  
                           <h1 className='mt-3' > Experience </h1> 
                           <div className='mt-3 flex flex-col justify-center  ' >
                           <label className='mt-2' > <input type='radio' value=""/> - Fresher</label>

                             <label className='mt-2' > <input type='radio' value=""/> 1 Years - 2 Years</label>
                              <label className='mt-2' > <input type='radio' value=""/>  2 Years - 4 Years</label>
                              <label className='mt-2' > <input type='radio' value=""/> 4 Years - 6 Years</label>
                              <label className='mt-2' > <input type='radio' value=""/> 6 Years - 8 Years</label>
                              <label className='mt-2' > <input type='radio' value=""/> 8 Years - 10 Years</label>
                              <label className='mt-2' > <input type='radio' value=""/> 10 Years - 15 Years</label>
                              <label className='mt-2' > <input type='radio' value=""/> 15 + Years </label>
                           </div>
                           </div>
                        </div>
                    </div>
                   </form>
                </div>
            </div>
     </div>
  )
}

export default Findjobfilterpop