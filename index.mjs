import express from 'express';
import path from 'path';
import dotenvv from 'dotenv';
import bcrypt from 'bcryptjs';
import {User,Product, Cart} from './models/database.mjs';
import session from 'express-session';
import passport, {ensureAuthenticated, forwardAuthenticated} from './config/passport.mjs';
import { seedCricketProducts } from './models/cricketProducts.mjs';
import { seedFootballProducts } from './models/footballProducts.mjs';


dotenvv.config();

const port=process.env.PORT;
const app = express();
app.use(express.json());
app.use(express.static('views'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.locals.isAuthenticated = req.isAuthenticated();
    next();
  });

app.set('view engine', 'ejs');
app.get('/', async (req, res) => {
    try {
        const cricketProducts = await Product.find({ category: 'cricket' }).lean();
        const footballProducts = await Product.find({ category: 'football' }).lean();
        res.render('homepage', { cricketProducts, footballProducts });
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
app.get('/profile', (req,res)=>{
    res.render('profile');
});

app.post('/signup', forwardAuthenticated, async (req, res) => {
    const {name, email, password,  phnum} = req.body;
    const newUser = new User({
        name,
        email,
        password,
        phnum
    });
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);
    await newUser.save();
    res.redirect('/login');
    console.log('USER CREATED, THANK YOU BOSS');
});
app.post('/login', forwardAuthenticated, passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
}), async (req, res) => {
    // Merge session cart with user's database cart
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
        req.session.cart = []; // Clear session cart after merging
    }

    res.redirect('/cart');
});
app.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
}), async (req, res) => {
    // Merge session cart with user's database cart
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
        req.session.cart = []; // Clear session cart after merging
    }

    res.redirect('/cart');
});


app.get('/homepage', ensureAuthenticated, async (req, res) => {
    try {
      const cricketProducts = await Product.find({ category: 'cricket' });
      const footballProducts = await Product.find({ category: 'football' });
  
      res.render('homepage', {
        user: req.user,
        cricketProducts,
        footballProducts,
        isAuthenticated: true
      });
    } catch (err) {
      res.status(500).send('Error fetching products');
    }});
app.get('/logout', ensureAuthenticated, (req, res) => {
    req.logout(err => {
      if (err) {
        return next(err);
      }
      res.redirect('/login');
      console.log('User logged out successfully');
    });
  });

  async function seedDatabase() {
    try {
        await seedCricketProducts();
        await seedFootballProducts();
        console.log('Database seeding complete.');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}
seedDatabase();

app.get('/cricket-products', async (req, res) => {
    try {
        const cricketProducts = await Product.find({ category: 'cricket' });
        res.render('cricket-products', { products: cricketProducts });
    } catch (error) {
        console.error('Error fetching cricket products:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/football-products', async (req, res) => {
    try {
        const footballProducts = await Product.find({ category: 'football' });
        res.render('football-products', { products: footballProducts });
    } catch (error) {
        console.error('Error fetching football products:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/cart/add', async (req, res) => {
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
        // User is logged in, merge with database cart immediately
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
        req.session.cart = []; // Clear session cart after merging
    }

    res.status(200).json({ message: 'Product added to cart' });
});

// View cart (session-based for unauthenticated users)
app.get('/cart', async (req, res) => {
    let cart;
    if (req.isAuthenticated()) {
        // User is logged in, load cart from the database
        const userId = req.user._id;
        try {
            cart = await Cart.findOne({ userId }).populate('items.productId');
        } catch (error) {
            console.error('Error fetching cart:', error);
            return res.status(500).json({ message: 'Error fetching cart' });
        }
    } else {
        // User is not logged in, use session cart
        const sessionCart = req.session.cart || [];
        const products = await Product.find({ '_id': { $in: sessionCart.map(item => item.productId) } });

        cart = {
            items: sessionCart.map(item => ({
                productId: products.find(p => p._id.equals(item.productId)),
                quantity: item.quantity
            }))
        };
    }

    // Calculate total items and total amount
    let totalItems = 0;
    let totalAmount = 0;
    if (cart && cart.items.length > 0) {
        totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
        totalAmount = cart.items.reduce((sum, item) => sum + item.quantity * item.productId.price, 0);
    }

    res.render('cart', { cart, totalItems, totalAmount });
});

// Remove product from cart
app.post('/cart/remove', async (req, res) => {
    const { productId } = req.body;

    if (req.isAuthenticated()) {
        // User is logged in, remove from database cart
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
        // User is not logged in, remove from session cart
        req.session.cart = req.session.cart.filter(item => item.productId !== productId);
        res.status(200).json({ message: 'Product removed from cart' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});