import {Product} from "./database.mjs";

export const boxingProducts = [
    {
        name: 'Boxing Gloves',
        description: 'High-quality boxing gloves for professional use.',
        price: 99.99,
        category: 'boxing',
        imageUrl: 'https://example.com/boxing-gloves.jpg',
        brand: 'Everlast'
    },
    {
        name: 'Boxing Shorts',
        description: 'Comfortable boxing shorts for fighters.',
        price: 49.99,
        category: 'boxing',
        imageUrl: 'https://example.com/boxing-shorts.jpg',
        brand: 'Everlast'
    },
    {
        name: 'Boxing Shoes',
        description: 'Lightweight boxing shoes for boxers.',
        price: 79.99,
        category: 'boxing',
        imageUrl: 'https://example.com/boxing-shoes.jpg',
        brand: 'Everlast'
    },
    {
        name: 'Boxing Punching Bag',
        description: 'Durable boxing punching bag for training.',
        price: 199.99,
        category: 'boxing',
        imageUrl: 'https://example.com/boxing-punching-bag.jpg',
         brand: 'Everlast'
    },
    {
        name: 'Boxing Headgear',
        description: 'Protective boxing headgear for sparring.',
        price: 59.99,
        category: 'boxing',
        imageUrl: 'https://example.com/boxing-headgear.jpg',
         brand: 'Everlast'
    },
    {
        name: 'Boxing Kit Bag',
        description: 'Spacious boxing kit bag for equipment.',
        price: 129.99,
        category: 'boxing',
        imageUrl: 'https://example.com/boxing-kit-bag.jpg',
         brand: 'Everlast'
    },
    {
        name: 'Boxing Mouthguard',
        description: 'Custom-fit boxing mouthguard for protection.',
        price: 19.99,
        category: 'boxing',
        imageUrl: 'https://example.com/boxing-mouthguard.jpg',
        brand: 'Everlast'
    },
    {
        name: 'Skipping Rope',
        description: 'Adjustable boxing skipping rope for workouts.',
        price: 9.99,
        category: 'boxing',
        imageUrl: 'https://example.com/boxing-skipping-rope.jpg',
        brand: ''
    },
    {
        name: 'Boxing Hand Wraps',
        description: 'Elastic boxing hand wraps for wrist support.',
        price: 14.99,
        category: 'boxing',
        imageUrl: 'https://example.com/boxing-hand-wraps.jpg',
        brand: 'Everlast'
    },
    {
        name: 'Boxing Speed Bag',
        description: 'Compact boxing speed bag for speed training.',
        price: 39.99,
        category: 'boxing',
        imageUrl: 'https://example.com/boxing-speed-bag.jpg',
        brand: 'Everlast'
    },
    {
        name: 'Boxing Focus Mitts',
        description: 'Padded boxing focus mitts for target practice.',
        price: 29.99,
        category: 'boxing',
        imageUrl: 'https://example.com/boxing-focus-mitts.jpg',
        brand: 'Everlast'
    },
    {
        name: 'Boxing Heavy Bag Stand',
        description: 'Sturdy boxing heavy bag stand for home gyms.',
        price: 149.99,
        category: 'boxing',
        imageUrl: 'https://example.com/boxing-heavy-bag-stand.jpg',
        brand: 'Everlast'
    },
];
    export async function seedboxingProducts() {
        try {
            for (const product of boxingProducts) {
                for (const product of boxingProducts) {
                    await Product.updateOne({ name: product.name }, { $setOnInsert: product }, { upsert: true });
                    console.log(`Boxing Products: ${product.name}`);
                }
            }
        } catch (error) {
            console.error('Error saving boxing products:', error);
        }
    }