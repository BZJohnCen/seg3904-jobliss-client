import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  let [userQuery, setUserQuery] = useState("")
  let [userCity, setUserCity] = useState("")

  return (
    <div className="App">
      <div className="App-header">
        <h1 style={{ marginTop: "-3em" }}>jobliss.</h1>
        <div id="homepage-searchbar">
          <input type="text" placeholder="Enter Job Position, Title, Role, etc"></input>
          <input id="cityInput" type="text" placeholder="City/State"></input>
          <button id="searchSubmitBtn">Search</button>
        </div>
      </div>
    </div>
  );
}

export default App;
