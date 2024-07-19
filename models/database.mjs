import mongoose from "mongoose";
import dotenv from "dotenv";
import validator from "validator";

dotenv.config();

const mongoURI = process.env.MONGO_DB_URI;
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true,
    validate: [validator.isEmail, 'Invalid email address']
  },
  password: { type: String, required: true },
  phnum: { type: String, validate: /^[0-9]{10}$/ },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  cardNumber: { type: String, validate: validator.isCreditCard }
}, { timestamps: true });

const ProductSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, unique: true, index: true },
  price: { type: Number, required: true, min: 0 },
  category: String,
  description: String,
  type: String,
  gender: { type: String, enum: ['Male', 'Female', 'Unisex'] },
  stock: { type: Number, default: 0, min: 0 },
  image: String,
  brand: { type: String, index: true },
}, { timestamps: true });

ProductSchema.index({ name: 'text', brand: 'text' });

const CartItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, default: 1, min: 1 }
});

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [CartItemSchema]
}, { timestamps: true });

const OrderItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true, min: 0 }
});

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [OrderItemSchema],
  name: String,
  address: String,
  email: { type: String, validate: [validator.isEmail, 'Invalid email address'] },
  locality: String,
  pincode: { type: String, validate: /^[0-9]{6}$/ },
  phone: { type: String, validate: /^[0-9]{10}$/, required: true },
  totalAmount: { type: Number, default: 0, min: 0 },
  createdAt: { type: Date, default: Date.now }
});

export const Order = mongoose.model('Order', OrderSchema);
export const Cart = mongoose.model('Cart', CartSchema);
export const Product = mongoose.model('Product', ProductSchema);
export const User = mongoose.model('User', UserSchema);
