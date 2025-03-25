// import React, { useState } from "react";
import "./styling/Chatbot.css";
// import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

// function Chatbot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { text: "Hello! How can I assist you today? 😊", sender: "bot" }
//   ]);
//   const [input, setInput] = useState("");

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };

//   const sendMessage = () => {
//     if (input.trim()) {
//       setMessages([...messages, { text: input, sender: "user" }]);
//       setTimeout(() => {
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { text: "That's interesting! Tell me more.", sender: "bot" }
//         ]);
//       }, 1000);
//       setInput("");
//     }
//   };

//   return (
//     <div className="chat-container">
//       {/* Floating Chat Toggle */}
//       {!isOpen && (
//         <div className="chat-toggle" onClick={toggleChat}>
//           <img src="logo.png" alt="" style={{width: "100px", height: "100%"}}/>
//           {/* <FaRobot color="white" size={24} /> */}
//         </div>
//       )}

//       {/* Chat Box */}
//       <div className={`chat-box ${isOpen ? "open" : ""}`}>
//         {/* Chat Header */}
//         <div className="chat-header">
//           Chat Assistant 🤖
//           <button onClick={toggleChat}>
//             <FaTimes />
//           </button>
//         </div>

//         {/* Chat Body */}
//         <div className="chat-body">
//           {messages.map((msg, index) => (
//             <div key={index} className={`message ${msg.sender}`}>
//               {msg.text}
//             </div>
//           ))}
//         </div>

//         {/* Chat Footer */}
//         <div className="chat-footer">
//           <input
//             type="text"
//             placeholder="Type a message..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//           />
//           <button onClick={sendMessage}>
//             <FaPaperPlane />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Chatbot;

import React, { useState } from "react";
import { FaTimes, FaPaperPlane } from "react-icons/fa";

function ChatComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showNotification, setShowNotification] = useState(true);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowNotification(false); // Hide notification permanently once chat is opened
  };

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  return (
    <div className="chat-container">
      {/* Floating Chat Toggle */}
      {!isOpen && (
        <>
          <div className="chat-toggle" onClick={toggleChat}>
            <img src="logo.png" alt="Chat Icon" />
          </div>
          {/* Persistent Floating Notification */}
          <div className="chat-notification" onClick={toggleChat}>
            👋 Hi, I'm here to help you!
          </div>
        </>
      )}
  
      {/* Chat Box */}
      <div className={`chat-box ${isOpen ? "open" : ""}`}>
        {/* Chat Header */}
        <div className="chat-header">
          Chat Assistant 🤖
          <button onClick={toggleChat}>
            <FaTimes />
          </button>
        </div>
  
        {/* Chat Body */}
        <div className="chat-body">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
  
        {/* Chat Footer */}
        <div className="chat-footer">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );  
}

export default ChatComponent;

