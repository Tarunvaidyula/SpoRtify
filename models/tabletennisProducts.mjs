import { Product } from './database.mjs';

export const tabletennisProducts = [
    {
        name: 'Butterfly Table Tennis Racket',
        description: 'High-performance table tennis racket from Butterfly.',
        price: 5999,
        category: 'tabletennis',
        brand: 'Butterfly',
        type: 'Racket',
        image: 'https://example.com/butterfly-table-tennis-racket.jpg'
    },
    {
        name: 'Stiga Table Tennis Table',
        description: 'Premium table tennis table for indoor use.',
        price: 29999,
        category: 'tabletennis',
        brand: 'Stiga',
        type: 'Table',
        image: 'https://example.com/stiga-table-tennis-table.jpg'
    },
    {
        name: 'DHS Table Tennis Balls',
        description: 'Pack of high-quality table tennis balls from DHS.',
        price: 999,
        category: 'tabletennis',
        brand: 'DHS',
        type: 'Balls',
        image: 'https://example.com/dhs-table-tennis-balls.jpg'
    },
    {
        name: 'Yasaka Table Tennis Rubber',
        description: 'Table tennis rubber for enhancing paddle performance.',
        price: 2999,
        category: 'tabletennis',
        brand: 'Yasaka',
        type: 'Rubber',
        image: 'https://example.com/yasaka-table-tennis-rubber.jpg'
    },
    {
        name: 'Donic Table Tennis Net',
        description: 'Durable table tennis net for matches.',
        price: 1999,
        category: 'tabletennis',
        brand: 'Donic',
        type: 'Net',
        image: 'https://example.com/donic-table-tennis-net.jpg'
    },
    {
        name: 'Killerspin Table Tennis Paddle',
        description: 'Premium table tennis paddle from Killerspin.',
        price: 3999,
        category: 'tabletennis',
        brand: 'Killerspin',
        type: 'Paddle',
        image: 'https://example.com/killerspin-table-tennis-paddle.jpg'
    },
    {
        name: 'Andro Table Tennis Shoes',
        description: 'Comfortable table tennis shoes for players.',
        price: 4999,
        category: 'tabletennis',
        brand: 'Andro',
        type: 'Shoes',
        image: 'https://example.com/andro-table-tennis-shoes.jpg'
    },
    {
        name: 'Tibhar Table Tennis Blade',
        description: 'High-quality table tennis blade from Tibhar.',
        price: 3999,
        category: 'tabletennis',
        brand: 'Tibhar',
        type: 'Blade',
        image: 'https://example.com/tibhar-table-tennis-blade.jpg'
    },
    {
        name: 'Cornilleau Table Tennis Cover',
        description: 'Table tennis table cover for protection.',
        price: 1499,
        category: 'tabletennis',
        brand: 'Cornilleau',
        type: 'Table Cover',
        image: 'https://example.com/cornilleau-table-tennis-cover.jpg'
    },
    {
        name: 'Butterfly Table Tennis Bag',
        description: 'Spacious table tennis bag from Butterfly.',
        price: 2999,
        category: 'tabletennis',
        brand: 'Butterfly',
        type: 'Bag',
        image: 'https://example.com/butterfly-table-tennis-bag.jpg'
    }
];

export async function seedtabletennisProducts() {
    try {
        for (const product of tabletennisProducts) {
            await Product.updateOne({ name: product.name }, { $setOnInsert: product }, { upsert: true });
        }
    } catch (error) {
        console.error('Error saving table tennis products:', error);
    }
}
