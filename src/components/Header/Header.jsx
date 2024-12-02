// src/components/Header.jsx
import React from "react";
import {House, Settings, LogOut, MessagesSquare} from 'lucide-react'
import '../Header/Header.css'

const agents = [
  { initials: 'CB', name: 'Cheyenne Bergson' },
  { initials: 'CB', name: 'Jonathan Higgins' },
  { initials: 'CB', name: 'Capt. Trunk' },
  { initials: 'CB', name: 'Hannibal Smith' },
  { initials: 'CB', name: 'Capt Trunk' },
  { initials: 'CB', name: 'Hannibal Smith' },
];

const Header = () => {
  return (
    <>
    <div className="header">
      <span>Chat/ Feed Chat</span>
      <div className="user-info">
        <House size={18} color="#8A8EA6" />
        <span className="span1">Process Owner HOD</span>
        <span className="span2">Admin</span>
        <div className="user-profile">
          <span>Palak Bansal</span>
          <img src="https://res.cloudinary.com/dfpz92ddp/image/upload/v1733041511/98ac8b5440b32e95a31a25f0b7d349ac_mvhzk0.jpg" alt="User" className="profile-pic" />
        </div>
        <div className="logout">
          <Settings size={18} color="#8A8EA6" />
          <LogOut size={18} color="#8A8EA6" />
          <span >Logout</span>
        </div>
      </div>
    </div>

  
  <nav className="agent-navbar">
    {agents.map(agent=>(
      <div className="agent-container">
        <span className="initial">{agent.initials}</span>
        <span>{agent.name}</span>
      </div>
    ))}
    <div className="message-container">
        <MessagesSquare size={18} color="#FFFFFF" className="initial2" />
        <span>Messaging</span>
      </div>
  </nav>
  </>
  );
};
export default Header;
