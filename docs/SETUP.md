# Setup Guide (Local Development)

## Prerequisites

- Node.js 20+
- npm 10+
- MongoDB Atlas or local MongoDB
- Android Studio (for Android builds)
- Xcode (for iOS builds)
- Firebase project
- Razorpay merchant keys
- Google Maps API key

## 1) Clone and prepare env files

```bash
cp backend/.env.example backend/.env
cp apps/mobile/.env.example apps/mobile/.env
cp apps/admin/.env.example apps/admin/.env
cp apps/delivery/.env.example apps/delivery/.env
```

Update all keys before running apps.

## 2) Install dependencies

```bash
cd backend && npm install
cd ../apps/mobile && npm install
cd ../admin && npm install
cd ../delivery && npm install
```

## 3) Run services

```bash
cd backend && npm run dev
cd apps/admin && npm run dev
cd apps/mobile && npm run android
cd apps/delivery && npm run android
```

## 4) Firebase OTP auth

- Configure phone auth in Firebase Console.
- Use Firebase SDK in RN app and exchange verified phone token with `/api/v1/auth/firebase-otp`.

## 5) Production hardening checklist

- Add full zod schema validation per endpoint.
- Add centralized logging (Winston + cloud log sink).
- Add Redis cache for product feeds and coupons.
- Add CI tests for API, UI, and E2E.
