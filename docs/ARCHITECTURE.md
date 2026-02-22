# Fresh Basket Architecture

## High-level

- Mobile and delivery apps communicate with REST + Socket endpoints.
- Admin dashboard consumes same backend with role-based access.
- Backend is modular (auth/products/orders/payments/etc.).
- MongoDB stores multi-city data with pincode-ready schemas.
- Socket.io handles live order status and rider location events.

## Scalability strategy

- Stateless APIs for horizontal autoscaling.
- MongoDB indexing on phone/orderNo/customerId/category.
- CDN-ready static assets and image URLs.
- Redis-ready caching layer (to add in `src/shared/cache`).
- Queue-ready notifications (`notifications` module placeholder).

## Security baseline

- Helmet + CORS + rate limiting.
- JWT auth and role middleware.
- Input validation should be added via zod per route.
- Secrets managed via `.env` + cloud secret manager.
