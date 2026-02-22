import { Router } from 'express';
import jwt from 'jsonwebtoken';
import User from '../users/user.model.js';

const router = Router();

router.post('/firebase-otp', async (req, res) => {
  const { phone, name } = req.body;
  if (!phone) return res.status(400).json({ message: 'Phone required' });

  let user = await User.findOne({ phone });
  if (!user) user = await User.create({ phone, name });

  const token = jwt.sign({ sub: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  });

  res.json({ token, user });
});

export default router;
