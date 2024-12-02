// src/App.js
import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import ChatFeed from "./components/ChatFeed/ChatFeed";
import CustomerDetails from "./components/CustomerDetails/CustomerDetails";
import ActionLauncher from "./components/ActionLauncher/ActionLauncher";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-layout">
          <CustomerDetails />
          <ChatFeed  />
          <ActionLauncher />
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
