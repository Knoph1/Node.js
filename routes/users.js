// routes/users.js
import express from 'express';
import users from '../data/users.js';

const router = express.Router();

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// POST a new user
router.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }

  const newUser = {
    id: users.length + 1,
    name
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

export default router;
