import React from 'react';
import io from 'socket.io-client';
import logo from './logo.svg';
import './App.css';
import Inventory from './components/inventory.js';
const socket = io('http://localhost:3000');

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Inventory socket={socket}/>
        </p>
      </header>
    </div>
  );
}

export default App;
