# Fresh Basket Monorepo

Fresh Basket is a production-oriented starter ecosystem for a premium hyperlocal farm-fresh delivery startup in India.

## What is included

- **Customer Mobile App** (React Native, Android-first + iOS-ready)
- **Delivery Partner App Module** (React Native)
- **Backend API** (Node.js + Express + MongoDB + Socket.io)
- **Admin Dashboard** (React + Tailwind)
- **Shared Package** (types/constants)
- **Docs**: setup, deployment, API, architecture, branding

## Repository structure

```txt
apps/
  mobile/      # Customer app
  admin/       # Admin dashboard
  delivery/    # Rider app
backend/       # Express API + realtime
packages/
  shared/      # shared contracts/types
docs/          # setup, deployment, API docs
branding/      # logo and visual identity assets
```

## Quick start

1. Copy all `.env.example` files to `.env` and update keys.
2. Start MongoDB (Atlas/local).
3. Install dependencies in each app:
   - `cd backend && npm install`
   - `cd apps/mobile && npm install`
   - `cd apps/admin && npm install`
   - `cd apps/delivery && npm install`
4. Run services:
   - Backend: `npm run dev`
   - Admin: `npm run dev`
   - Mobile/Delivery: `npm run android`

See [`docs/SETUP.md`](docs/SETUP.md) and [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for full instructions.
