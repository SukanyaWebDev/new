// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 5000;

// Mock database for storing OTPs and user details
const otpDatabase = {};
const userDatabase = {};

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Utility functions for OTP and user operations
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

const sendOTP = (email, otp) => {
  // Email sending logic...
};

const verifyOTP = (email, enteredOTP) => {
  // Verification logic...
};

const addUser = async (name, email, password) => {
  // Hash the password before storing
  const hashedPassword = await bcrypt.hash(password, 10);
  userDatabase[email] = { name, email, password: hashedPassword };
};

// Routes
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Generate and send OTP
    const otp = generateOTP();
    sendOTP(email, otp);

    // Save user details in the mock database
    await addUser(name, email, password);

    res.status(200).json({ message: 'User registered successfully', otpSent: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/otp/verify', async (req, res) => {
  try {
    const { email, otp } = req.body;
    const isVerified = verifyOTP(email, otp);

    if (isVerified) {
      res.status(200).json({ message: 'OTP verified successfully', verified: true });
    } else {
      res.status(400).json({ error: 'Invalid OTP' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Additional route to fetch user details by email
app.get('/api/users/:email', (req, res) => {
  try {
    const email = req.params.email;
    const user = userDatabase[email];

    if (user) {
      res.status(200).json({ name: user.name, email: user.email });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});