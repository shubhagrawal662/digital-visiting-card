import { Router } from 'express';
import Product from './product.model.js';
import { requireAuth, requireRole } from '../../middleware/auth.js';

const router = Router();

router.get('/', async (req, res) => {
  const { category, city } = req.query;
  const filter = { isActive: true };
  if (category) filter.category = category;
  if (city) filter.cityAvailability = city;

  const products = await Product.find(filter).sort({ createdAt: -1 }).limit(200);
  res.json(products);
});

router.post('/', requireAuth, requireRole('admin'), async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
});

router.patch('/:id', requireAuth, requireRole('admin'), async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
});

export default router;
