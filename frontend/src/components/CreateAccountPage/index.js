// src/components/CreateAccountPage.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateAccountPage extends Component {
  render() {
    return (
      <div className="account-created-container">
        <h2>Account Created Successfully</h2>
        <p>Congratulations! Your account has been created successfully.</p>
        <div className="success-icon">&#10004;</div>
        <Link to="/create-post" className="button">
          Create Your First Post
        </Link>
      </div>
    );
  }
}

export default CreateAccountPage;