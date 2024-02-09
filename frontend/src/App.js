// src/App.js
import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomePage from './components/HomePage'
import CreateAccountPage from './components/CreateAccountPage'
import LoginPage from './components/LoginPage'
import OtpPage from './components/OtpPage'


class App extends Component {
  render() {
    return (
      
      <Router>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/otp" element={<OtpPage />} />
            <Route path="/account-created" element={<CreateAccountPage/>} />
            
          </Routes>
          
      </Router>
    );
  }
}

export default App;
