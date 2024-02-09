// src/components/LoginPage.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class LoginPage extends Component {
  render() {
    return (
      <div className="login-container">
        <h2>Login</h2>
        <label>Name:</label>
        <input type="text" name="name" />
        <br />
        <label>Email:</label>
        <input type="email" name="email" />
        <br />
        <Link to="/otp" className="button">
          Continue &#8594;
        </Link>
      </div>
    );
  }
}

export default LoginPage;
