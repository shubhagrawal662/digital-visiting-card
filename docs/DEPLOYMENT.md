# Deployment Guide

## Recommended cloud topology

- **Backend**: AWS ECS / GCP Cloud Run / Render
- **Database**: MongoDB Atlas (multi-region)
- **Admin panel**: Vercel / Netlify
- **Mobile builds**: EAS Build / CI runners
- **Realtime**: Socket.io with sticky sessions or Redis adapter

## Backend deployment steps

1. Provision managed MongoDB.
2. Configure environment variables from `backend/.env.example`.
3. Build Docker image:
   ```bash
   docker build -t fresh-basket-api ./backend
   ```
4. Deploy with autoscaling (CPU + request based).

## Admin deployment

1. Build app: `npm run build`
2. Upload `dist/` to hosting provider.
3. Set `VITE_API_BASE_URL` to production API URL.

## Mobile release

- Android first: configure Play signing + release tracks.
- iOS ready: prepare provisioning and App Store Connect metadata.

## Observability

- Add uptime checks on `/health`.
- Add alerting for payment failures and order status lag.
