import { Product } from './database.mjs';

export const tabletennisProducts = [
    {
        name: 'Butterfly Table Tennis Racket',
        description: 'High-performance table tennis racket from Butterfly.',
        price: 5999,
        category: 'tabletennis',
        brand: 'Butterfly',
        type: 'Racket',
        image: 'https://m.media-amazon.com/images/I/61OuTufLqCL._AC_UF894,1000_QL80_.jpg'
    },
    {
        name: 'Stiga Table Tennis Table',
        description: 'Premium table tennis table for indoor use.',
        price: 150000,
        category: 'tabletennis',
        brand: 'Stiga',
        type: 'Table',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8eRmLHlqHpuZ2seBVneAOO3ZmwYOxWKF3oQ&s'
    },
    {
        name: 'DHS Table Tennis Balls',
        description: 'Pack of high-quality table tennis balls from DHS.',
        price: 999,
        category: 'tabletennis',
        brand: 'DHS',
        type: 'Balls',
        image: 'https://rukminim2.flixcart.com/image/850/1000/k62i5jk0/ball/d/e/h/2-77-standard-3-d40-3-star-abs-seam-10-dhs2710-table-tennis-ball-original-imafzm256rse5keg.jpeg?q=90&crop=false'
    },
    {
        name: 'Yasaka Table Tennis Rubber',
        description: 'Table tennis rubber for enhancing paddle performance.',
        price: 2999,
        category: 'tabletennis',
        brand: 'Yasaka',
        type: 'Rubber',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-m9iDNT98iB5ztSXQVRZe1rVCGatmrDJmw&s'
    },
    {
        name: 'Donic Table Tennis Net',
        description: 'Durable table tennis net for matches.',
        price: 1999,
        category: 'tabletennis',
        brand: 'Donic',
        type: 'Net',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9CzOU5edMiLABVQJA1HG_CRg38QvKwJHSIA&s'
    },
    {
        name: 'Killerspin Table Tennis Paddle',
        description: 'Premium table tennis paddle from Killerspin.',
        price: 3999,
        category: 'tabletennis',
        brand: 'Killerspin',
        type: 'Paddle',
        image: 'https://images-cdn.ubuy.co.in/65604ea9af20dd428c06e9b7-killerspin-jet-black-combo.jpg'
    },
    {
        name: 'Tibhar Table Tennis Blade',
        description: 'High-quality table tennis blade from Tibhar.',
        price: 3999,
        category: 'tabletennis',
        brand: 'Tibhar',
        type: 'Blade',
        image: 'https://m.media-amazon.com/images/I/41JQn24gP3L.jpg'
    },
    {
        name: 'Cornilleau Table Tennis Cover',
        description: 'Table tennis table cover for protection.',
        price: 1499,
        category: 'tabletennis',
        brand: 'Cornilleau',
        type: 'Table Cover',
        image: 'https://images-cdn.ubuy.co.in/636777d59d5120015f53be04-sogudio-table-tennis-cover-65in.jpg'
    },
    {
        name: 'Butterfly Table Tennis Bag',
        description: 'Spacious table tennis bag from Butterfly.',
        price: 2999,
        category: 'tabletennis',
        brand: 'Butterfly',
        type: 'Bag',
        image: 'https://images-cdn.ubuy.ae/658c04ddff04675d7f1d8312-butterfly-table-tennis-raffines-tour-bag.jpg'
    },
    {
        name: 'Table tennis Kit',
        description: 'Table tennis kit for beginners and intermediate players.',
        price: 9999,
        category: 'tabletennis',
        brand: 'Generic',
        type: 'Kit bag',
        image: 'https://m.media-amazon.com/images/I/711H-8d-sjL._AC_UF894,1000_QL80_.jpg' 
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
