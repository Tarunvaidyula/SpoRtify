import express from "express";
import dotenv from "dotenv";
import { Product } from "./models/database.mjs";
dotenv.config();

const router=express.Router();
const category= Product.distinct('category');

router.get('/football-products', async (req, res) => {
    try {
        let filter = { category: 'football' };

        // Apply filters if provided in query params
        if (req.query.brand) {
            filter.brand = { $in: req.query.brand.split(',') };
        }
        if (req.query.type) {
            filter.type = { $in: req.query.type.split(',') };
        }
        if (req.query.priceRange) {
            const [minPrice, maxPrice] = req.query.priceRange.split('-');
            filter.price = { $gte: parseInt(minPrice), $lte: parseInt(maxPrice) };
        }

        const footballProducts = await Product.find(filter);
        res.render('football-products', { footballProducts});
    } catch (error) {
        console.error('Error fetching football products:', error);
        res.status(500).send('Error fetching football products');
    }
});

router.get('/cricket-products', async (req, res) => {
    try {
        const cricketProducts = await Product.find({ category: 'cricket' });
        res.render('cricket-products', { cricketProducts });
    } catch (error) {
        console.error('Error fetching cricket products:', error);
        res.status(500).send('Error fetching cricket products');
    }
});


router.get('/basketball-products', async (req, res) => {
    try {
        const basketballProducts = await Product.find({ category: 'basketball' });
        res.render('basketball-products', { basketballProducts });
    } catch (error) {
        console.error('Error fetching basketball products:', error);
        res.status(500).send('Error fetching basketball products');
    }
});


router.get('/boxing-products', async (req, res) => {
    try {
        const boxingProducts = await Product.find({ category: 'boxing' });
        res.render('boxing-products', { boxingProducts });
    } catch (error) {
        console.error('Error fetching boxing products:', error);
        res.status(500).send('Error fetching boxing products');
    }
});


router.get('/tabletennis-products', async (req, res) => {
    try {
        const tabletennisProducts = await Product.find({ category: 'tabletennis' });
        res.render('tabletennis-products', { tabletennisProducts });
    } catch (error) {
        console.error('Error fetching tabletennis products:', error);
        res.status(500).send('Error fetching tabletennis products');
    }
    
});

router.get('/badminton-products', async (req, res) => {
    try {
        const badmintonProducts = await Product.find({ category: 'badminton' });
        res.render('badminton-products', { badmintonProducts });
    } catch (error) {
        console.error('Error fetching badminton products:', error);
        res.status(500).send('Error fetching badminton products');
    }
});
router.get('/products-by-brand/:brandName', async (req, res) => {
    const { brandName } = req.params;

    try {
        const products = await Product.find({ brand: brandName });
        res.render('productsByBrand', { brandName, products });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Error fetching products');
    }
});
router.get('/navproducts/:type', async (req, res) => {
    const { type } = req.params;

    try {
        const products = await Product.find({ type: type });
        res.render('navproducts', { type, products });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Error fetching products');
    }
});

router.get('/kit/:category/:type', async (req, res) => {
    const { category, type } = req.params;

    try {
        const products = await Product.find({ category: category, type: type });
        res.render('navproducts', { category, type, products });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Error fetching products');
    }
}); 

export default router;
