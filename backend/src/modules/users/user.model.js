import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema(
  {
    label: String,
    line1: String,
    line2: String,
    city: String,
    state: String,
    pincode: String,
    location: {
      lat: Number,
      lng: Number
    }
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    phone: { type: String, unique: true, index: true },
    name: String,
    email: String,
    language: { type: String, default: 'en' },
    role: {
      type: String,
      enum: ['customer', 'admin', 'rider', 'farmer'],
      default: 'customer'
    },
    walletBalance: { type: Number, default: 0 },
    loyaltyPoints: { type: Number, default: 0 },
    addresses: [addressSchema]
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
