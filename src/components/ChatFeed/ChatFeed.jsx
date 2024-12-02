// src/components/ChatFeed.jsx
import React from "react";
import '../ChatFeed/ChatFeed.css'


const messages = [
  { id: 1, sender: "user", text: "Hello, I need assistance with my account." },
  { id: 2, sender: "agent", text: "Sure, how can I help you today?" },
];

const ChatFeed = () => {
  return (
    <div className="chat-feed">
      <h3>Conversation</h3>
      <div className="messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatFeed;
