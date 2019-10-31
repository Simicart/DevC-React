import React from 'react';
import logo from './logo.svg';
import DemoForm from './DemoForm';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
      </header>
      <div className="demo-form">
        <DemoForm />
      </div>
    </div>
  );
}

export default App;
