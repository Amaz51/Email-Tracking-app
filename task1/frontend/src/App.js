// src/App.js
import React from "react";
import "./App.css";
import EmailForm from "./components/EmailForm";
import EmailStatusList from "./components/EmailStatusList";

function App() {
  return (
    <div className="app-container">
      <h1 className="a">Email Tracking App</h1>
      <EmailForm />
      <EmailStatusList />
    </div>
  );
}

export default App;

