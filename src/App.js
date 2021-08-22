import { BrowserRouter as Router } from 'react-router-dom'
import React from "react";
import "./App.css";
import logo from "./logo.jpg"
import Profile from "./Components/Profile";

function App() {
    return ( 
      <Router>
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Profile />
    </div>
      </Router>
     );
     }
      export default App;
