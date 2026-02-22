import { Router } from 'express';
import Razorpay from 'razorpay';
import { requireAuth } from '../../middleware/auth.js';

const router = Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

router.post('/razorpay/order', requireAuth, async (req, res) => {
  const { amount, currency = 'INR' } = req.body;
  const order = await razorpay.orders.create({ amount, currency, receipt: `fresh-${Date.now()}` });
  res.json(order);
});

router.post('/cod/confirm', requireAuth, async (_req, res) => {
  res.json({ success: true, method: 'cod' });
});

export default router;
