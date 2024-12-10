import React from 'react';

const MessageDetails = ({ message }) => {
    if (!message) {
        return (
            <div className="w-[435px] p-6">
                <h2 className="text-2xl font-bold mb-4">Message Details</h2>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-gray-700">Select a message to see the details here.</p>
                </div>
            </div>
        );
    }

    return (
        <div className='w-[435px] border-t-2 border-[#00000033] p-4 h-[955px] bg-[#f3f1f1]'>
            <div className='w-[400px] h-[496px] bg-white border-2 rounded-lg overflow-x-hidden overflow-y-auto'>
                <div className='flex gap-6 justify-start border-b-2 p-3  w-[399px] h-[110px]'>
                    <img className='w-[68px] h-[68px]' src={message.image} alt="" />
                    <div>
                        <h3 className='text-[21px] font-500 font-inter leading-[28px]'>{message.name}</h3>
                        <p className='text-[17px] text-[#5E6670] font-medium'>{message.position}</p>
                    </div>
                </div>
                <div className="w-[265px] h-[588px]  p-4">
                    <p className="text-[18px] text-[#000000] font-inter font-normal leading-[28px]">
                        {message.content}
                    </p>
                </div>
            </div>

            <div>
               <input className='border-2 w-[380px] h-[142px] mt-4 rounded-lg border-[#00000033] outline-none pl-2' placeholder='Write a message' type="text" />
               <button className=' bg-[#7900BA] text-[#FFFFFF] rounded-[10px] pt-2 pb-2 p-10 outline-none  ml-32 mt-4'>Send</button>
            </div>
           

        </div>
    );
};

export default MessageDetails;
