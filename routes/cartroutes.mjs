// cartRoutes.mjs
import express from 'express';
import { ensureAuthenticated } from '../config/passport.mjs'; // Adjust the path as necessary
import { Product, Cart } from '../models/database.mjs';

const router = express.Router();

// Add product to cart


export default router;
