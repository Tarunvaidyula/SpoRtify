import express from 'express';
import {Product, Cart} from '../models/database.mjs';

const router = express.Router();

router.use((req, res, next) => {
    res.locals.isAuthenticated = req.isAuthenticated();
    next();
});

router.get('/cart', async (req, res) => {
    let cart;
    if (req.isAuthenticated()) {
        const userId = req.user._id;
        try {
            cart = await Cart.findOne({ userId }).populate('items.productId');
        } catch (error) {
            console.error('Error fetching cart:', error);
            return res.status(500).send('Error fetching cart');
        }
    } else {
        const sessionCart = req.session.cart || [];
        const productIds = sessionCart.map(item => item.productId);
        
        try {
            const products = await Product.find({ _id: { $in: productIds } });
            
            cart = {
                items: sessionCart.map(item => {
                    const product = products.find(p => p._id.equals(item.productId));
                    return {
                        productId: product,
                        quantity: item.quantity
                    };
                })
            };
        } catch (error) {
            console.error('Error fetching products for session cart:', error);
            return res.status(500).send('Error fetching products for session cart');
        }
    }

    let totalItems = 0;
    let totalAmount = 0;
    if (cart && cart.items.length > 0) {
        totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
        totalAmount = cart.items.reduce((sum, item) => {
            if (item.productId) { // Ensure productId is not null before accessing price
                return sum + item.quantity * item.productId.price;
            } else {
                console.warn(`Product ID ${item.productId} is missing or invalid`);
                return sum;
            }
        }, 0);
    }

    res.render('cart', { cart, totalItems, totalAmount });
});


router.post('/cart/add', async (req, res) => {
    const { productId, quantity } = req.body;

    if (!req.session.cart) {
        req.session.cart = [];
    }

    const existingItem = req.session.cart.find(item => item.productId === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        req.session.cart.push({ productId, quantity });
    }

    if (req.isAuthenticated()) {
        const userId = req.user._id;
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId, items: [] });
        }

        for (const sessionItem of req.session.cart) {
            const existingDbItem = cart.items.find(item => item.productId.equals(sessionItem.productId));
            if (existingDbItem) {
                existingDbItem.quantity += sessionItem.quantity;
            } else {
                cart.items.push({ productId: sessionItem.productId, quantity: sessionItem.quantity });
            }
        }
        await cart.save();
        req.session.cart = [];
    }

    res.status(200).json({ message: 'Product added to cart' });
});

router.post('/cart/remove', async (req, res) => {
    const { productId } = req.body;

    if (req.isAuthenticated()) {
        const userId = req.user._id;
        try {
            let cart = await Cart.findOne({ userId });
            if (cart) {
                cart.items = cart.items.filter(item => !item.productId.equals(productId));
                await cart.save();
            }
            res.status(200).json({ message: 'Product removed from cart' });
        } catch (error) {
            console.error('Error removing product from cart:', error);
            res.status(500).json({ message: 'Error removing product from cart' });
        }
    } else {
        req.session.cart = req.session.cart.filter(item => item.productId !== productId);
        res.status(200).json({ message: 'Product removed from cart' });
    }
});

// POST route to update quantity of a product in the cart
router.post('/cart/updateQuantity', async (req, res) => {
    const { productId, quantity } = req.body;
    try {
        if (req.isAuthenticated()) {
            const userId = req.user._id;
            let cart = await Cart.findOne({ userId });
            if (!cart) {
                cart = new Cart({ userId, items: [] });
            }

            const existingItem = cart.items.find(item => item.productId.equals(productId));
            if (existingItem) {
                existingItem.quantity = quantity;
            } else {
                cart.items.push({ productId, quantity });
            }

            await cart.save();
            res.status(200).json({ message: 'Quantity updated successfully' });
        } else {
            // For non-authenticated users, manage cart data in session
            let sessionCart = req.session.cart || [];
            const existingItem = sessionCart.find(item => item.productId === productId);
            if (existingItem) {
                existingItem.quantity = quantity;
            } else {
                sessionCart.push({ productId, quantity });
            }
            req.session.cart = sessionCart;
            res.status(200).json({ message: 'Quantity updated successfully' });
        }
    } catch (error) {
        console.error('Error updating quantity:', error);
        res.status(500).json({ message: 'Error updating quantity' });
    }
});


export default router;