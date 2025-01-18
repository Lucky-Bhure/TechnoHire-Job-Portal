import React,{useState} from 'react'
import Editjobalertsuccessfully from './Editjobalertsuccessfully'


const ApplyButton = ({ isVisible , onclose}) => {

    const [editSuccessfully, setEditSuccessfully] = useState(false)


    if(!isVisible) return null;

    const handelClose = (e)=>{
        if(e.target.id ==="wraper" ) onclose();
    }



  return (
    <>
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
        flex justify-center items-center ' id='wraper' onClick={handelClose}>
            <div className='w-[600px]  flex flex-col ' >
                <button className='text-white text-xl place-self-end *'
                onClick={()=>onclose()} >X</button>
                <div className='bg-white p-2 rounded'>
                    <h1 className='mb-4 text-xl text-center font-medium text-gray' >
                        Edit Job alerts
                    </h1>
                    <form className='space-y-5 px-4' >
                        <h1>Job Type</h1>
                            <div className='w-full flex items-center  justify-between'>
                            <labe><input type='checkbox'/> Full time</labe>
                             <labe>   <input type='checkbox'/> Part Time</labe>
                             <labe>   <input type='checkbox'/> Internship</labe>
                             <labe>   <input type='checkbox'/> Freelancing</labe>

                            </div>
                            <div className='w-full'>
                                <input type='text' name='name' id='name' className='bg-[#DCBDED] border border-gray-100
                                text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-full py-4 p-2.5
                                 ' required
                                placeholder='Perferred Designation' />
                            </div>
                            <div className='w-full'>
                                <input type='text' name='name' id='name' className='bg-[#DCBDED] border border-gray-100
                                text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-full py-4 p-2.5
                                 ' required
                                placeholder='Perferred Location' />

                            </div>
                              <div>  
                                <label for="">Desired Salary</label> 
                                    <div className='w-full   flex gap-2'>
                                    <input type='number' name='name' id='name' className='bg-[#DCBDED] border border-gray-100
                                    text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-1/2 py-4 p-2.5
                                    ' required
                                    placeholder='Min Salary' />

                                    <input type='number' name='name' id='name' className='bg-[#DCBDED] border border-gray-100
                                    text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-1/2 py-4 p-2.5
                                    ' required
                                    placeholder='Max Salary' />

                            </div>
                            </div>

                            <div className='w-full'>
                                <button  onClick={()=> setEditSuccessfully(true)}
                                type="" name='' id='name' className='w-full bg-blue-700 space-y-7 py-3 px-9 text-white text-xl font-semibold mb-2'  
                                 > Save Changes</button>

                            </div>
                    </form>
                </div>
            </div>
        </div>
        <Editjobalertsuccessfully  active={editSuccessfully}   onclose={onclose}  handelClose={handelClose}/>

    </>
  )
}

export default ApplyButton;