import React from 'react';

const MessageList = ({ messages, onMessageSelect }) => {
  return (
    <div className="w-[435px] h-[783px] border-r p-6 overflow-y-auto">
      <ul className="space-y-4">
        {messages.map((message, index) => (
          <li
            key={index}
            className="cursor-pointer p-2 rounded"
            onClick={() => onMessageSelect(message)}
          >
            <div className='flex gap-6 justify-start items-center border-b-2 p-2  w-[400px]'>
                <img className='w-[68px] h-[68px]' src={message.image} alt="" />
                <div>
                   <div className='flex justify-start gap-11 items-center'>
                     <div className='w-52'>
                     <h3 className='text-[21px] font-500 font-inter leading-[28px] mr-10'>{message.name}</h3>
                     </div>
                    {message.isUnread && (
                <span className="text-[14px] flex justify-center items-center bg-[#7900BA80] rounded-full w-[24px] h-[24px] text-[#FFFFFF]">1</span> // Display "New" label for unread messages
              )}
                   </div>
                    <p className='text-[17px] text-[#5E6670] font-medium'>{message.content.split(' ').slice(0, 5).join(' ')}{message.content.split(' ').length > 10 ? '...' : ''}</p> 

                </div>
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;

