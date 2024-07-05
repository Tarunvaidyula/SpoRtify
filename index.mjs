import express from 'express';
import path from 'path';
import dotenvv from 'dotenv';
import bcrypt from 'bcryptjs';
import {User,Product} from './models/database.mjs';
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
app.get('/', async(req,res)=>{
  try {
  const cricketProducts = await Product.find({ category: 'cricket' });
  const footballProducts = await Product.find({ category: 'football' });
  res.render('homepage', { cricketProducts, footballProducts });
} catch (err) {
  res.status(500).send('Error fetching products');
}});

app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/signup', (req, res) => {
    res.render('signup');
});
app.get('/cart', (req,res)=>{
    res.render('cart');
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
    successRedirect: '/homepage',
    failureRedirect: '/login',
    failureFlash: true
}));

app.get('/homepage',ensureAuthenticated, async (req, res) => {
  try {
    const cricketProducts = await Product.find({ category: 'cricket' }).limit(4);
    const footballProducts = await Product.find({ category: 'football' }).limit(4);
    res.render('homepage', { cricketProducts, footballProducts },  { user: req.user});
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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});