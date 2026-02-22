import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    name: String,
    quantityKg: Number,
    price: Number,
    total: Number
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    orderNo: { type: String, unique: true, index: true },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
    riderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
    items: [orderItemSchema],
    subtotal: Number,
    discount: Number,
    deliveryFee: Number,
    total: Number,
    paymentMode: { type: String, enum: ['razorpay', 'cod'] },
    paymentStatus: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
    status: {
      type: String,
      enum: ['confirmed', 'packed', 'out_for_delivery', 'arriving_soon', 'delivered', 'cancelled'],
      default: 'confirmed'
    },
    deliverySlot: String,
    address: {
      line1: String,
      city: String,
      pincode: String,
      location: { lat: Number, lng: Number }
    }
  },
  { timestamps: true }
);

export default mongoose.model('Order', orderSchema);
