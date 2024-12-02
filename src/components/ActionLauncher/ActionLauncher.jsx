// src/components/ActionLauncher.jsx
import React from "react";
import { Mail, SendHorizontal, Eye, Copy, Pin } from "lucide-react";
import '../ActionLauncher/ActionLauncher.css'


const ActionLauncher = () => {
  return (
    <div className="right-content">
      <div className="ask-catura">
        <div className="ask">
          <h4>Ask Catura</h4>
          <div className="mail">
          <span><Mail size={16} />Whatsapp</span><select><option></option></select>
          <span><Mail size={16} />Greetings</span><select><option></option></select>
          
          </div>
          
        </div>
        
        <div className="greeting-template">
          <div className="hide">
            <p>Greeting Template</p>
            <button><Copy size={18} />Copy to Send</button>
            <button ><Eye size={18} />Preview</button>
          </div>

          <div className="send">
            <input type="text" placeholder="Type a message"/>
            <button><SendHorizontal size={18} /></button>
          </div>
        </div>
      </div>

      <div className="action-launcher">
        <h3>Action Launcher</h3>
        <input type="search" placeholder="Search actions" />
        <div className="actions">
        <button>Add Action</button>
        <p>Fee Reversal</p>
        <p>Retail Onboarding</p>
        <p>Address Update</p>
        </div>
        
      </div>

      <div className="case-favorites">
        <h3><Pin size={18} className="pin" />Case Favorites</h3>

          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Photo</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
  
      </div>
    </div>
  );
};


export default ActionLauncher;
