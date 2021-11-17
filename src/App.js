import './App.css';
import React from 'react';
import Beranda from './components/beranda/Beranda';
import Login from './components/Login';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Beranda />
      <Login />
      <LoginPage/>
    </div>
  );
}

export default App;
