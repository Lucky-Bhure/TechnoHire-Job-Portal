import React, { useState } from "react";  
import { FaRegUser } from "react-icons/fa";  
import { MdVideocam, MdPhone } from "react-icons/md";   
import { BsArrowRight } from "react-icons/bs";   

const Chat = () => {  
  const [messages, setMessages] = useState([  
    { from: "service", text: "Hi, how are you today?" },  
    { from: "user", text: "Doing good, I need help how can I apply for a job" },  
    { from: "service", text: "Set up your account first." },  
    { from: "user", text: "Done setting up my account. What's next?" },  
    { from: "service", text: "Go to browse jobs." },  
    { from: "user", text: "Yes, got it on the desktop page." },  
    { from: "service", text: "Hit the search button and apply." },  
    { from: "user", text: "Done! Thanks for helping me." },  
  ]);  

  const [input, setInput] = useState("");  

  const handleSend = () => {  
    if (input.trim() === "") return;  
    setMessages([...messages, { from: "user", text: input }]);  
    setInput("");  
  };  

  return (  
    <div className="flex flex-col h-screen bg-gray-100">  

      <div className="flex items-center justify-between p-4 bg-white shadow">  
        <div className="flex items-center gap-2">  
          <button className="text-gray-600">&larr;</button>  
          <h1 className="font-semibold text-lg text-gray-900">Customer Service</h1>  
        </div>  
        <div className="flex gap-4 text-gray-600">  
          <button>  
            <MdVideocam className="text-xl" />   
          </button>  
          <button>  
            <MdPhone className="text-xl" />  
          </button>  
        </div>  
      </div>  

       
      <div className="flex-1 overflow-y-auto p-4 space-y-4">  
        {messages.map((msg, idx) => (  
          <div key={idx} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>  
            {msg.from === "service" && (  
              <div className="flex items-start gap-2">  
                <div className="text-blue-400 text-lg">  
                  <FaRegUser />  
                </div>  
                <div className="bg-gray-200 text-gray-900 px-4 py-2 rounded-2xl rounded-bl-none max-w-[70%] shadow">  
                  {msg.text}  
                </div>  
              </div>  
            )}  
            {msg.from === "user" && (  
              <div className="flex items-start gap-2">  
                <div className="bg-purple-500 text-white px-4 py-2 rounded-2xl rounded-br-none max-w-[70%] shadow">  
                  {msg.text}  
                </div>  
                <div className="text-purple-400 text-lg">  
                  <FaRegUser /> 
                </div>  
              </div>  
            )}  
          </div>  
        ))}  
      </div>  

      
      <div className="p-4 bg-white shadow-inner flex items-center gap-2">  
        <input  
          type="text"  
          className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"  
          placeholder="Enter your message..."  
          value={input}  
          onChange={(e) => setInput(e.target.value)}  
          onKeyDown={(e) => e.key === "Enter" && handleSend()}  
        />  
        <button className="text-gray-500 text-xl">  
        
          <BsArrowRight /> 
        </button>  
        <button  
          onClick={handleSend}  
          className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full"  
        >  
          <BsArrowRight /> 
        </button>  
      </div>  
    </div>  
  );  
};  

export default Chat;  