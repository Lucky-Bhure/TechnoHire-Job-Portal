import React, { useState } from 'react';
import InboxImg_1 from "../../../assets/InboxImg-1.png"
import messageSideImage from "../../../assets/messageSideImg.png"
import InboxImg_2 from "../../../assets/InboxImg-2.png"
import InboxImg_3 from "../../../assets/InboxImg-3.png"
import { FaSearch } from "react-icons/fa";
import MessageList from './MessageList';
import MessageDetails from './MessageDetails';

const Inbox = () => {
  const [messages, setMessages] = useState([
    {
      name: "Alex Cary",
      image: InboxImg_1,
      position: "Software Engineer",
      content: "Dear Employer, Are you tired of the endless search for the perfect candidate? Stop wasting time! Our revolutionary platform connects you with top-tier professionals tailored to your needs. 💼 Key Features: Access to over 10 million verified resumes AI-powered candidate matching Affordable subscription plans Act now and receive a FREE trial to see the difference for yourself. 👉 Don’t wait—your dream team is just a click away! Best regards,",
      isUnread: true,
      isSpam: false, // Marking as not spam initially
      isStarred: false, // Marking as not spam initially
    },
    {
      name: "Kevin Peterson",
      image: InboxImg_2,
      position: "UX Designer",
      content: "Hi, Good Afternoon",
      isUnread: true,
      isSpam: true,
      isStarred: false,
    },
    {
      name: "Harsh Agarwal",
      image: InboxImg_3,
      position: "Product Manager",
      content: "Hi, Good Night",
      isUnread: true,
      isSpam: false,
      isStarred: false,
    },
    {
      name: "Harsh Agarwal",
      image: InboxImg_3,
      position: "Product Manager",
      content: "Hi, Good Night",
      isUnread: false,
      isSpam: false,
      isStarred: true,
    },
   
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showUnread, setShowUnread] = useState(false);
  const [showSpam, setShowSpam] = useState(false); // State for spam filter
  const [showStarred, setShowStarred] = useState(false); // State for spam filter

  // Filter messages based on unread, spam, or all
  const filteredMessages = messages.filter((message) => {
    if (showUnread && showSpam && showStarred) {
      // Show both Spam and Unread messages
      return message.isUnread || message.isSpam;
    } else if (showUnread) {
      // Show only Unread messages
      return message.isUnread && !message.isSpam;
    } else if (showSpam) {
      // Show only Spam messages
      return message.isSpam;
    } else if (showStarred)
       // Show only Starred messages
      return message.isStarred;
    // Default case: Show all messages
    return true;
  });
  const handleMessageSelect = (message) => {
    setMessages(prevMessages =>
      prevMessages.map(msg =>
        msg === message ? { ...msg, isUnread: false } : msg
      )
    );
    setSelectedMessage(message);
  };
  


  return (
    <div className="flex gap-4 justify-center items-center ml-16 mt-20">
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

          <div className="flex justify-center gap-12">
            <button className={`w-[112px] h-[42px] border-2 ${!showUnread && !showSpam && !showStarred ? 'bg-[#7900BA] text-[#FFFFFF]' : 'border-[#939393] text-[#3A3434]'} rounded-[10px]`} onClick={() => { setShowUnread(false); setShowSpam(false); setShowStarred(false); }}>
              All
            </button>
            <button className={`w-[112px] h-[42px] border-2 ${showUnread ? 'bg-[#7900BA] text-[#FFFFFF]' : 'border-[#939393] text-[#3A3434]'} rounded-[10px]`} onClick={() => { setShowUnread(true); setShowSpam(false); setShowStarred(false) }}>
              Unread
            </button>
            <button className={`w-[112px] h-[42px]  border-2 ${showStarred ? 'bg-[#7900BA] text-[#FFFFFF]' : 'border-[#939393] text-[#3A3434]'} rounded-[10px]`} onClick={() => { setShowStarred(!showStarred); setShowSpam(false); setShowUnread(false) }}>
              Starred
            </button>
            <button className={`w-[112px] h-[42px]  border-2 ${showSpam ?  'bg-[#7900BA] text-[#FFFFFF]' : 'border-[#939393] text-[#3A3434]'} rounded-[10px]`} onClick={() => { setShowSpam(!showSpam); setShowUnread(false);  setShowStarred(false) }}>
              Spam
            </button>
          </div>

          <hr className='border-t-2 border-[#00000033] pb-10' />
        </div>

        <div>
          <div className="flex h-screen">
            <MessageList messages={filteredMessages} onMessageSelect={handleMessageSelect} />
            <MessageDetails message={selectedMessage} />
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-24'>
        <div className="border-2  w-[380px] h-[248px] rounded-xl flex justify-center items-center relative shadow-lg">
          <img className="w-[380px] h-[248px] rounded-xl" src={messageSideImage} alt="Image" />
          <div className=''>
            <button className="absolute bottom-14 w-[175px] h-[42px] left-0 bg-[#F6C57D] text-[#323F4E] py-2 rounded-l-none rounded-lg text-[18px]">
              <span className='font-bold'>S</span>ee Who's hiring
            </button>
            <button className="absolute bottom-2 w-[150px] h-[42px] left-0 bg-[#F6C57D] text-[#323F4E]  py-2 rounded-l-none rounded-lg text-[18px]">
              <span className='font-bold'>O</span>n Technohire
            </button>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='border-2 w-[380px] h-[341px]  p-4 rounded-lg'>
            <h4 className='text-[18px] text-[#000000] font-inter font-bold leading-[28px]'>Get hire faster with Premium</h4>
            <p className='text-[18px] leading-[28px] font-medium text-[#615C5C]'>Premium InMail is 4.6x more effective in hearing back than cold email.</p>
            <div>
              <div>
                <div className='flex gap-3 mb-5 mt-5'>
                  <img className='w-10 h-10' src={InboxImg_1} alt="" />
                  <img className='w-10 h-10 -ml-7' src={InboxImg_2} alt="" />
                  <img className='w-10 h-10 -ml-8' src={InboxImg_3} alt="" />
                  <p className='font-normal text-[15px] font-inter leading-[28px]'>Rekha and millions of other <br /> members use Premium</p>
                </div>
                <button className=' ml-14 flex p-4 mb-5  font-bold bg-[#F6C57D] rounded-full text-[#323F4E] text-[20px]' type='button'>Try Premium for</button>
                <p className='text-[#00000080] text-[13px]'>1-month free trial. We’ll send you a reminder 7 days <br />before your trial ends</p>
              </div>
            </div>
          </div>
          <div className='flex gap-8 text-[16px] pt-10  text-[#00000080] '>
            <p>Help Center</p>
            <p>Privacy & Term</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;

