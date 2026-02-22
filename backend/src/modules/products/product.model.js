import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, index: true },
    slug: { type: String, unique: true, index: true },
    category: {
      type: String,
      enum: ['leafy', 'root', 'exotic', 'fruits', 'organic'],
      required: true
    },
    description: String,
    images: [String],
    pricePerKg: Number,
    discountPercent: Number,
    stockKg: Number,
    freshnessScore: Number,
    farmSource: String,
    nutrition: String,
    cityAvailability: [String],
    seasonalTag: String,
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
