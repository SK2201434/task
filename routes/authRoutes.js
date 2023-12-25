// authRoutes.js

const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = authController.loginUser(username, password);

  if (user) {
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

router.post('/signup', (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).json({ error: 'Username, password, and role are required for signup' });
  }

  const existingUser = authController.loginUser(username, password);
  if (existingUser) {
    return res.status(400).json({ error: 'User with the same username already exists' });
  }

  const newUser = authController.signupUser(username, password, role);
  res.json({ message: 'Signup successful', newUser });
});

module.exports = router;
