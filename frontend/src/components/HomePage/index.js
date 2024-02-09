// src/components/HomePage.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class HomePage extends Component {
  render() {
    return (
      <div className="home-container">
        <h2>Welcome to the Home Page</h2>
        {/* <Link to="/login">Go to Login Page</Link> */}
        <Link to="/login" className="button">
          Create Your Account &#8594;
        </Link>
      </div>
    );
  }
}

export default HomePage;
