// src/components/OtpPage.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreateAccountPage from './CreateAccountPage';
import './index.css';

class OtpPage extends Component {
  state = {
    otp: '',
    isVerified: false,
  };

  handleInputChange = (e) => {
    this.setState({ otp: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // For simplicity, assuming OTP is verified successfully
    this.setState({ isVerified: true });
  };

  render() {
    const { isVerified } = this.state;

    if (isVerified) {
      // If OTP is verified, navigate to CreateAccountPage
      return <CreateAccountPage />;
    }

    return (
      <div className="otp-container">
        <h2>Verify Your Email</h2>
        <p>We have sent an OTP to your provided email. Please enter the OTP to continue.</p>
        <form onSubmit={this.handleSubmit}>
          <label>OTP:</label>
          <input
            type="text"
            name="otp"
            value={this.state.otp}
            onChange={this.handleInputChange}
          />
          <br />
          <button type="submit" className="button">
            Continue &#8594;
          </button>
        </form>
      </div>
    );
  }
}

export default OtpPage;
