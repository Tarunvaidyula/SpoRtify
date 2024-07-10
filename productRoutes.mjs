import express from "express";
import dotenv from "dotenv";
import { Product } from "./models/database.mjs";
dotenv.config();

const router=express.Router();

router.get('/football-products', async (req, res) => {
    try {
        const footballProducts = await Product.find({ category: 'football' });
        res.render('football-products', { footballProducts });
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
router.get('/basketBall-products', async (req, res) => {
    try {
        const basketBallProducts = await Product.find({ category: 'basketball' });
        res.render('basketBall-products', { basketBallProducts });
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



export default router;