import express from 'express';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import session from 'express-session';
import passport from 'passport';
import bodyparser from 'body-parser';
import paypal from '@paypal/checkout-server-sdk';
import paypalClient from './paypalClient.mjs';
import { User, Product, Cart, Order } from './models/database.mjs';
import { seedCricketProducts } from './models/cricketProducts.mjs';
import { seedFootballProducts } from './models/footballProducts.mjs';
import { seedbasketballProducts } from './models/basketballproducts.mjs';
import { seedboxingProducts } from './models/boxingProducts.mjs';
import {seedtabletennisProducts} from './models/tabletennisProducts.mjs';
import {seedbadmintonProducts} from './models/badmintonProducts.mjs';
import { forwardAuthenticated, ensureAuthenticated } from './config/passport.mjs';
import cartRoutes from './Routes/cartRoutes.mjs';
import productRoutes from './Routes/productRoutes.mjs';
import PasswordRoutes from './Routes/PasswordRoutes.mjs';
import flash from 'connect-flash';

dotenv.config();

const port = process.env.PORT;
const app = express();

// Middleware
app.use(express.json());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 1 } 
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cartRoutes);
app.use(productRoutes);
app.use(PasswordRoutes);
app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

// View engine setup
app.set('view engine', 'ejs');
app.use(express.static('public'));

// middleware for authentication views
app.use((req, res, next) => {
    res.locals.isAuthenticated = req.isAuthenticated();
    res.locals.user = req.user;
    next();
});

app.get('/', async (req, res) => {
    try {
        const cricketProducts = await Product.aggregate([
            { $match: { category: 'cricket' } },
            { $group: { _id: "$type", product: { $first: "$$ROOT" } } }
        ]);
        const simplifiedCricketProducts = cricketProducts.map(item => item.product);

        const footballProducts = await Product.aggregate([
            { $match: { category: 'football' } },
            { $group: { _id: "$type", product: { $first: "$$ROOT" } } }
        ]);
        const simplifiedfootball= footballProducts.map(item => item.product);

        const basketballProducts = await Product.aggregate([
            { $match: { category: 'basketball' } },
            { $group: { _id: "$type", product: { $first: "$$ROOT" } } }
        ]);
        const simplifiedbasketball= basketballProducts.map(item => item.product);

        const boxingProducts = await Product.aggregate([
            { $match: { category: 'boxing' } },
            { $group: { _id: "$type", product: { $first: "$$ROOT" } } }
        ]);
        const simplifiedboxing= boxingProducts.map(item => item.product);

        const tabletennisProducts = await Product.aggregate([
            { $match: { category: 'tabletennis' } },
            { $group: { _id: "$type", product: { $first: "$$ROOT" } } }
        ]);
        const simplifiedtt= tabletennisProducts.map(item => item.product);

        const badmintonProducts = await Product.aggregate([
            { $match: { category: 'badminton' } },
            { $group: { _id: "$type", product: { $first: "$$ROOT" } } }
        ]);
        const simplifiedbadminton= badmintonProducts.map(item => item.product);

        res.render('homepage', { cricketProducts:simplifiedCricketProducts, footballProducts:simplifiedfootball, basketballProducts:simplifiedbasketball, boxingProducts:simplifiedboxing, tabletennisProducts:simplifiedtt, badmintonProducts:simplifiedbadminton});
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Error fetching products');
    }
});
app.get('/search', async (req, res) => {
    const { query } = req.query;
    try {
        const products = await Product.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { brand: { $regex: query, $options: 'i' } },
                { $text: { $search: query } }
            ]
        });
        res.render('search', { products, query });
    } catch (error) {
        console.error('Error searching products:', error);
        res.status(500).send('Error searching products');
    }
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/profile', ensureAuthenticated, (req, res) => {
    res.render('profile');
});

app.get('/checkout', ensureAuthenticated, (req, res) => {
    res.render('checkout');
});

app.get('/pay',ensureAuthenticated, async (req, res) => {
    res.render('pay', {paypalClientId: process.env.PAYPAL_CLIENT_ID});
});
app.get('/confirmation', ensureAuthenticated, (req, res) => {
    res.render('confirmation', { message: 'Your payment was successful!' });
});
app.get('/products-by-brand/:brandName', async (req, res) => {
    res.render('productsByBrand');
});
app.get('/navproducts/:type', async (req, res) => {
    res.render('navproducts');
});
app.get('/forgot-password', async(req, res) => {
    res.render('forgotpassword');
});
// Homepage route
app.get('/homepage',ensureAuthenticated, async (req, res) => {
    try {
        const cricketProducts = await Product.aggregate([
            { $match: { category: 'cricket' } },
            { $group: { _id: "$type", product: { $first: "$$ROOT" } } }
        ]);
        const simplifiedCricketProducts = cricketProducts.map(item => item.product);

        const footballProducts = await Product.aggregate([
            { $match: { category: 'football' } },
            { $group: { _id: "$type", product: { $first: "$$ROOT" } } }
        ]);
        const simplifiedfootball= footballProducts.map(item => item.product);

        const basketballProducts = await Product.aggregate([
            { $match: { category: 'basketball' } },
            { $group: { _id: "$type", product: { $first: "$$ROOT" } } }
        ]);
        const simplifiedbasketball= basketballProducts.map(item => item.product);

        const boxingProducts = await Product.aggregate([
            { $match: { category: 'boxing' } },
            { $group: { _id: "$type", product: { $first: "$$ROOT" } } }
        ]);
        const simplifiedboxing= boxingProducts.map(item => item.product);

        const tabletennisProducts = await Product.aggregate([
            { $match: { category: 'tabletennis' } },
            { $group: { _id: "$type", product: { $first: "$$ROOT" } } }
        ]);
        const simplifiedtt= tabletennisProducts.map(item => item.product);

        const badmintonProducts = await Product.aggregate([
            { $match: { category: 'badminton' } },
            { $group: { _id: "$type", product: { $first: "$$ROOT" } } }
        ]);
        const simplifiedbadminton= badmintonProducts.map(item => item.product);

        res.render('homepage', { cricketProducts:simplifiedCricketProducts, footballProducts:simplifiedfootball, basketballProducts:simplifiedbasketball, boxingProducts:simplifiedboxing, tabletennisProducts:simplifiedtt, badmintonProducts:simplifiedbadminton});
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Error fetching products');
    }
});

//Signup Route
app.post('/signup', forwardAuthenticated, async (req, res) => {
    const { name, email, password, phnum } = req.body;

    try {
        const newUser = new User({ name, email, password, phnum });
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);
        await newUser.save();
        console.log('User created boss');
        req.login(newUser, function (err) {
            if (err) {
                return res.status(500).send('Error during login after signup');
            }
            res.redirect('/login');
        });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Error creating user');
    }
});

//Login Route
app.post('/login', forwardAuthenticated, passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
}),async (req, res) => {
    const userId = req.user._id;
    const sessionCart = req.session.cart || [];
    if (sessionCart.length > 0) {
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId, items: [] });
        }

        for (const sessionItem of sessionCart) {
            const existingItem = cart.items.find(item => item.productId.equals(sessionItem.productId));
            if (existingItem) {
                existingItem.quantity += sessionItem.quantity;
            } else {
                cart.items.push({ productId: sessionItem.productId, quantity: sessionItem.quantity });
            }
        }
        await cart.save();
        req.session.cart = [];
    }
    res.redirect('/homepage');
});

//Logout Route
app.get('/logout', ensureAuthenticated, (req, res) => {
    req.logout(err => {
      if (err) {
        return next(err);
      }
      res.redirect('/login');
      console.log('User logged out successfully');
    });
  });

  app.post('/profile', ensureAuthenticated, async (req, res) => {
    const userId = req.user._id;
    const { name, email, password, gender, phnum } = req.body;
    try {
        await User.findByIdAndUpdate (userId, { name, email, phnum, gender });
        res.redirect('/profile');
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send('Error updating user');
    }
});

// Cart Checkout Routes
app.get('/checkout', ensureAuthenticated, async (req, res) => {
    const userId = req.user._id;
    let cart;

    try {
        cart = await Cart.findOne({ userId }).populate('items.productId');
    } catch (error) {
        console.error('Error fetching cart:', error);
        return res.status(500).send('Error fetching cart');
    }

    if (!cart || cart.items.length === 0) {
        return res.redirect('/cart');
    }

    res.render('checkout');
});

app.post('/checkout', ensureAuthenticated, async (req, res) => {
    try {
        const userId = req.user._id;
        const { name, address, email, locality, pincode, phone } = req.body;

        // Fetch cart for the authenticated user
        const cart = await Cart.findOne({ userId }).populate('items.productId');
        
        // Check if cart is empty
        if (!cart || cart.items.length === 0) {
            return res.redirect('/cart');
        }

        // Construct order items
        const orderItems = cart.items.map(item => ({
            productId: item.productId._id,
            quantity: item.quantity,
            price: item.productId.price
        }));

        // Calculate total amount
        const totalAmount = orderItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

        // Create new order instance
        const order = new Order({
            userId,
            items: orderItems,
            name,
            address,
            email,
            locality,
            pincode,
            phone,
            totalAmount
        });

        // Save order to database
        await order.save();

        // Delete cart after successful checkout
        await Cart.findOneAndDelete({ userId });

        // Redirect to payment or confirmation page
        res.redirect('/pay');
    } catch (error) {
        console.error('Error during checkout:', error);
        res.status(500).send('Error during checkout');
    }
});

app.post('/create-order', ensureAuthenticated, async (req, res) => {
    const { totalAmount } = req.body;

    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'USD',
                value: totalAmount
            }
        }]
    });

    try {
        const order = await paypalClient.client().execute(request);
        res.status(201).json({ id: order.result.id });
    } catch (err) {
        console.error('Error creating PayPal order:', err);
        res.status(500).send('Error creating PayPal order');
    }
});

// Capture PayPal order
app.post('/capture-order', ensureAuthenticated, async (req, res) => {
    const { orderId } = req.body;

    const request = new paypal.orders.OrdersCaptureRequest(orderId);
    request.requestBody({});

    try {
        const capture = await paypalClient.client().execute(request);
        res.status(200).json(capture.result);
    } catch (err) {
        console.error('Error capturing PayPal order:', err);
        res.status(500).send('Error capturing PayPal order');
    }
});


// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Seed the database
async function seedDatabase() {
    try {
        await seedCricketProducts();
        await seedFootballProducts();
        await seedbasketballProducts();
        await seedboxingProducts();
        await seedtabletennisProducts();
        await seedbadmintonProducts();
        console.log('Database seeding complete.');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}
seedDatabase();

