import React, { useState } from 'react';

import InboxImg_1 from "../../../assets/InboxImg-1.png"
import messageSideImage from "../../../assets/messageSideImg.png"
import InboxImg_2 from "../../../assets/InboxImg-2.png"
import InboxImg_3 from "../../../assets/InboxImg-3.png"

import { FaSearch } from "react-icons/fa";
import MessageList from './MessageList';
import MessageDetails from './MessageDetails';

const Inbox = () => {
  const messages = [
    {
      name: "Alex Cary",
      image: InboxImg_1,
      position: "Software Enginner",
      content: "Dear Employer, Are you tired of the endless search for the perfect candidate? Stop wasting time! Our revolutionary platform connects you with top-tier professionals tailored to your needs. 💼 Key Features: Access to over 10 million verified resumes AI-powered candidate matching Affordable subscription plans Act now and receive a FREE trial to see the difference for yourself. 👉 Don’t wait—your dream team is just a click away! Best regards,"
    },

    {
      name: "Kevin Peterson",
      image: InboxImg_2,
      position: "UX Designer",
      content: "Hi Good Afternoon"
    },

    {
      name: "Harsh Agarwal",
      image: InboxImg_3,
      position: "Product Manager",
      content: "Hi Good Night"
    },
    {
      name: "Harsh Agarwal",
      image: InboxImg_3,
      position: "Product Manager",
      content: "Hi Good Night"
    },

    {
      name: "Harsh Agarwal",
      image: InboxImg_3,
      position: "Product Manager",
      content: "Hi Good Night"
    },

    {
      name: "Harsh Agarwal",
      image: InboxImg_3,
      position: "Product Manager",
      content: "Hi Good Night"
    },


  ];
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleMessageSelect = (message) => {
    setSelectedMessage(message);
  };

  return (
    <div className="flex  gap-10 justify-center items-center ml-16 mt-20">
      <div className=" w-[870px] h-[920px] overflow-hidden rounded-[10px] border-2">
        <div className="flex gap-6 flex-col bg-[#C9C5C51A] h-[165px]" >
          <div className='flex gap-10 items-center pl-6 pr-6 pt-6'>
            <h5 className='font-medium font-inter text-[#00000060]  text-[21px]'>Inbox</h5>
            <div className='relative'>
              <FaSearch className='absolute top-1/2 left-3 transform -translate-y-1/2 w-[17.42px] h-[18.01px] text-[#000000] opacity-[31%]' />
              <input
                className='bg-[#FFFFFF4A] border-2 border-[#000000] rounded-[10px] h-[51px] w-[700px] pl-10 placeholder-[#00000063]'
                type="text"
                placeholder="search"
              />
            </div>
          </div>
          {/* button */}
          <div className="flex justify-center gap-12">
            <button className="w-[112px] h-[42px] border-2 border-[#939393] bg-[#7900BA] rounded-[10px] size-[16px] text-[#FFFFFF]">
              All
            </button>
            <button className="w-[112px] h-[42px]  border-2 border-[#939393] rounded-[10px] size-[16px] text-[#3A3434]">
              Unread
            </button>
            <button className="w-[112px] h-[42px]  border-2 border-[#939393] rounded-[10px] size-[16px] text-[#3A3434]">
              Starred
            </button>
            <button className="w-[112px] h-[42px]  border-2 border-[#939393] rounded-[10px] size-[16px] text-[#3A3434]">
              Spam
            </button>
          </div>
          <hr className='border-t-2 border-[#00000033] pb-10' />


        </div>

        <div>
          <div className="flex h-screen">
            <MessageList messages={messages} onMessageSelect={handleMessageSelect} />
            <MessageDetails message={selectedMessage} />
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-10 mb-44'>
        <div className="border-2 w-[340px] h-[248px] rounded-lg flex justify-center items-center relative">
          <img className="w-[340px] h-[248px] rounded-lg" src={messageSideImage} alt="Image" />

          {/* Button 1 */}
         <div className=''>
         <button className="absolute bottom-14 w-[175px] h-[42px] left-0 bg-[#F6C57D] text-[#323F4E] py-2 rounded-l-none rounded-lg text-[18px]">
              <span className='font-bold'>S</span>ee Who's hiring
          </button>

          {/* Button 2 */}
          <button className="absolute bottom-2 w-[150px] h-[42px] left-0 bg-[#F6C57D] text-[#323F4E]  py-2 rounded-l-none rounded-lg text-[18px]">
          <span className='font-bold'>O</span>n Technohire
          </button>
         </div>
        </div>
        <div className='border-2 w-[340px] h-[248px] rounded-lg'>
          <h4 className='text-[18px] text-[#000000] font-inter font-normal leading-[28px]'>Get hire faster with Premium</h4>
             <p>Premium InMail is 4.6x more effective in hearing back than cold email.</p>
             <div>
              <div>
                <div>
                    <img src={InboxImg_1} alt="" />
                    <p>Rekha and millions of other members use Premium</p>
                </div>
                <button>Try Premium for</button>
                <p>1-month free trial. We’ll send you a reminder 7 days <br />before your trial ends</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};


export default Inbox;
