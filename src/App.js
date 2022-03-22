import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";


function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:3000/auth/login',{
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: "user", password: "secret"})
    }).then(res=>res.json())
    .then(data=>{
      console.log('data', data);
    })
    .catch((e)=>{
      console.log('errr', e);
    })
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
