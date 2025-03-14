import express from 'express';
import { getUsers, createUser } from '../services/userService';

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

router.post('/', async (req, res) => {
  const { name, email } = req.body;
  const user = await createUser(name, email);
  res.status(201).json(user);
});

export default router;