import { Server } from 'socket.io';

let io;

export function initSocket(server) {
  io = new Server(server, {
    cors: {
      origin: (process.env.ALLOWED_ORIGINS || '').split(','),
      credentials: true
    }
  });

  io.on('connection', socket => {
    socket.on('join-order-room', orderId => socket.join(`order:${orderId}`));
    socket.on('disconnect', () => {});
  });
}

export function emitOrderStatus(orderId, payload) {
  if (!io) return;
  io.to(`order:${orderId}`).emit('order-status-updated', payload);
}
