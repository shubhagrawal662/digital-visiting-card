# API Documentation (v1)

Base URL: `/api/v1`

## Auth

### `POST /auth/firebase-otp`
Creates or logs in user after Firebase verification.

Request:
```json
{ "phone": "+919999999999", "name": "Asha" }
```

Response: JWT token + user profile.

## Products

### `GET /products?category=fruits&city=delhi`
Fetch active products with optional filters.

### `POST /products` (admin)
Create product.

## Orders

### `POST /orders`
Create order.

### `GET /orders/mine`
Get customer order history.

### `PATCH /orders/:id/status` (admin/rider)
Update order status and broadcast via sockets.

## Payments

### `POST /payments/razorpay/order`
Create Razorpay order for UPI/cards/wallet flow.

### `POST /payments/cod/confirm`
Confirm COD mode.

## Realtime events

- Client emit: `join-order-room` with `orderId`
- Server emit: `order-status-updated`
