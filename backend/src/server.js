import http from 'node:http';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

import { connectDB } from './config/db.js';
import { initSocket } from './realtime/socket.js';
import { errorHandler, notFound } from './middleware/error-handler.js';
import authRoutes from './modules/auth/auth.routes.js';
import productRoutes from './modules/products/product.routes.js';
import orderRoutes from './modules/orders/order.routes.js';
import paymentRoutes from './modules/payments/payment.routes.js';

dotenv.config();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 4000;

app.use(helmet());
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));
app.use(
  cors({
    origin: (process.env.ALLOWED_ORIGINS || '').split(','),
    credentials: true
  })
);
app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 200 }));

app.get('/health', (_req, res) => {
  res.status(200).json({ service: 'fresh-basket-api', status: 'ok' });
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/payments', paymentRoutes);

app.use(notFound);
app.use(errorHandler);

async function boot() {
  await connectDB();
  initSocket(server);
  server.listen(PORT, () => {
    console.log(`Fresh Basket API running at :${PORT}`);
  });
}

boot();
