import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoURI= process.env.MONGO_DB_URI;
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phnum: Number,
    bday: Date,
    gender: String,
    billing: String,
    lastorder: Date,
    redeem: Number,
  });
  const productSchema= new mongoose.Schema({
    name: {type: String, unique: true},
    price: Number,
    category: String,
    description: String,
    stock: Number,
    image: String,
  });

export const Product = mongoose.model('Product', productSchema);
export const User = mongoose.model('User', UserSchema);