import { Router } from 'express';
import Order from './order.model.js';
import { requireAuth, requireRole } from '../../middleware/auth.js';
import { emitOrderStatus } from '../../realtime/socket.js';

const router = Router();

router.post('/', requireAuth, async (req, res) => {
  const orderNo = `FB-${Date.now()}`;
  const order = await Order.create({ ...req.body, orderNo, customerId: req.user.sub });
  res.status(201).json(order);
});

router.get('/mine', requireAuth, async (req, res) => {
  const orders = await Order.find({ customerId: req.user.sub }).sort({ createdAt: -1 });
  res.json(orders);
});

router.patch('/:id/status', requireAuth, requireRole('admin', 'rider'), async (req, res) => {
  const { status, riderLocation } = req.body;
  const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
  emitOrderStatus(order._id.toString(), { status, riderLocation });
  res.json(order);
});

export default router;
