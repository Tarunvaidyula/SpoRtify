import {Product} from './database.mjs';

export const footballProducts = [
    {
        name: 'Football',
        description: 'Official size and weight football for matches.',
        price: 39.99,
        category: 'football',
        imageUrl: 'https://example.com/football.jpg'
    },
    {
        name: 'Football Boots',
        description: 'High-quality football boots for players.',
        price: 89.99,
        category: 'football',
        imageUrl: 'https://example.com/football-boots.jpg'
    },
    {
        name: 'Football Gloves',
        description: 'Warm football gloves for goalkeepers.',
        price: 19.99,
        category: 'football',
        imageUrl: 'https://example.com/football-gloves.jpg'
    },
    {
        name: 'Football Kit',
        description: 'Complete football kit with jersey and shorts.',
        price: 59.99,
        category: 'football',
        imageUrl: 'https://example.com/football-kit.jpg'
    },
];

export async function seedFootballProducts() {
    try {
        for (const product of footballProducts) {
            for (const product of footballProducts) {
                await Product.updateOne({ name: product.name }, { $setOnInsert: product }, { upsert: true });
                console.log(`FootBall products: ${product.name}`);
            }
        }
    } catch (error) {
        console.error('Error saving football products:', error);
    }}
