import express from 'express';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import session from 'express-session';
import passport from 'passport';
import twilio from 'twilio';
import { User, Product, Cart, Order } from './models/database.mjs';
import { seedCricketProducts } from './models/cricketProducts.mjs';
import { seedFootballProducts } from './models/footballProducts.mjs';
import { seedbasketBallProducts } from './models/basketBallproducts.mjs';
import { seedboxingProducts } from './models/boxingProducts.mjs';
import {seedtabletennisProducts} from './models/tabletennisProducts.mjs';
import {seedbadmintonProducts} from './models/badmintonProducts.mjs';
import { forwardAuthenticated, ensureAuthenticated } from './config/passport.mjs';
import cartRoutes from './cartRoutes.mjs';
import productRoutes from './productRoutes.mjs';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Middleware
app.use(express.json());
app.use(express.static('views'));
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

// View engine setup
app.set('view engine', 'ejs');
app.use(express.static('views'));

// middleware for authentication views
app.use((req, res, next) => {
    res.locals.isAuthenticated = req.isAuthenticated();
    next();
});

// Routes
app.get('/', async (req, res) => {
    try {
        const cricketProducts = await Product.find({ category: 'cricket' }).lean();
        const footballProducts = await Product.find({ category: 'football' }).lean();
        const basketBallProducts = await Product.find({ category: 'basketball' }).lean();
        const boxingProducts = await Product.find({ category: 'boxing' }).lean();
        const tabletennisProducts = await Product.find({ category: 'tabletennis' }).lean();
        const badmintonProducts = await Product.find({ category: 'badminton' }).lean();
        res.render('homepage', { cricketProducts, footballProducts, basketBallProducts, boxingProducts, tabletennisProducts, badmintonProducts});
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Error fetching products');
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
    res.render('pay');
});
app.get('/confirmation',ensureAuthenticated, async (req, res) => {
    res.render('confirmation');
});


app.get('/homepage',ensureAuthenticated, async (req, res) => {
    try {
        const cricketProducts = await Product.find({ category: 'cricket' }).lean();
        const footballProducts = await Product.find({ category: 'football' }).lean();
        const basketBallProducts = await Product.find({ category: 'basketball' }).lean();
        const boxingProducts = await Product.find({ category: 'boxing' }).lean();
        const tabletennisProducts = await Product.find({ category: 'tabletennis' }).lean();
        const badmintonProducts = await Product.find({ category: 'badminton' }).lean();
        res.render('homepage', { user: req.user, cricketProducts, footballProducts, basketBallProducts, boxingProducts, tabletennisProducts, badmintonProducts });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Error fetching products');
    }
});

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

app.get('/logout', ensureAuthenticated, (req, res) => {
    req.logout(err => {
      if (err) {
        return next(err);
      }
      res.redirect('/login');
      console.log('User logged out successfully');
    });
  });


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
    if ( req.session.cart.length === 0){
        return res.redirect('/cart');
    }
    try {
        const userId = req.user._id;
        const { name, address, email, locality, pincode, phone } = req.body;

        const cart = await Cart.findOne({ userId }).populate('items.productId');
        if (!cart || cart.items.length === 0) {
            return res.redirect('/cart');
        }

        const orderItems = cart.items.map(item => ({
            productId: item.productId._id,
            quantity: item.quantity,
            price: item.productId.price
        }));

        const order = new Order({
            userId,
            items: orderItems,
            name,
            address,
            email,
            locality,
            pincode,
            phone,
            totalAmount: orderItems.reduce((sum, item) => sum + item.quantity * item.price, 0)
        });

        await order.save();
        await Cart.findOneAndDelete({ userId });

        res.redirect('/pay');
    } catch (error) {
        console.error('Error during checkout:', error);
        res.status(500).send('Error during checkout');
    }
});

app.post('/pay', ensureAuthenticated, async (req, res) => {
    const { cardNumber } = req.body;
    const userId = req.user._id;

    try {
        // Update user document with cardNumber
        await User.findByIdAndUpdate(userId, { cardNumber });

        // Fetch user details to send SMS
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Send SMS confirmation
        const message = `Dear ${user.name}, your order has been placed successfully`;
        await client.messages.create({
            body: message,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: user.phnum
        });

        // Redirect to confirmation page after successful update and SMS
        res.redirect('/confirmation');
    } catch (error) {
        console.error('Error saving card number and sending SMS:', error);
        res.status(500).json({ message: 'Error saving card number and sending SMS' });
    }
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
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
        await seedbasketBallProducts();
        await seedboxingProducts();
        await seedtabletennisProducts();
        await seedbadmintonProducts();
        console.log('Database seeding complete.');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}
seedDatabase();