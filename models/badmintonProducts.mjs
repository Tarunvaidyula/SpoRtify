import {Product} from "./database.mjs";

export const badmintonProducts = [
    {
        name: 'Badminton Racket',
        description: 'Professional badminton racket for players.',
        price: 49.99,
        category: 'badminton',
        imageUrl: 'https://example.com/badminton-racket.jpg'
    },
    {
        name: 'Badminton Shuttlecocks',
        description: 'Pack of 6 badminton shuttlecocks for practice.',
        price: 9.99,
        category: 'badminton',
        imageUrl: 'https://example.com/badminton-shuttlecocks.jpg'
    },
    {
        name: 'Badminton Net',
        description: 'Adjustable badminton net for home play.',
        price: 19.99,
        category: 'badminton',
        imageUrl: 'https://example.com/badminton-net.jpg'
    },
    {
        name: 'Badminton Shoes',
        description: 'Lightweight badminton shoes for agility.',
        price: 59.99,
        category: 'badminton',
        imageUrl: 'https://example.com/badminton-shoes.jpg'
    },
    {
        name: 'Badminton Kit Bag',
        description: 'Spacious badminton kit bag for equipment.',
        price: 29.99,
        category: 'badminton',
        imageUrl: 'https://example.com/badminton-kit-bag.jpg'
    },
    {
        name: 'Badminton Grip Tape',
        description: 'Anti-slip badminton grip tape for rackets.',
        price: 4.99,
        category: 'badminton',
        imageUrl: 'https://example.com/badminton-grip-tape.jpg'
    },
    {
        name: 'Badminton Scoreboard',
        description: 'Portable badminton scoreboard for matches.',
        price: 24.99,
        category: 'badminton',
        imageUrl: 'https://example.com/badminton-scoreboard.jpg'
    },
    {
        name: 'Badminton Shuttlecock Feeder',
        description: 'Automatic badminton shuttlecock feeder for practice.',
        price: 199.99,
        category: 'badminton',
        imageUrl: 'https://example.com/badminton-shuttlecock-feeder.jpg'
    },
];

export async function seedbadmintonProducts() {
    try {
        for (const product of badmintonProducts) {
            for (const product of badmintonProducts) {
                await Product.updateOne({ name: product.name }, { $setOnInsert: product }, { upsert: true });
                console.log(`Badminton Products: ${product.name}`);
            }
        }
    } catch (error) {
        console.error('Error saving Badminton products:', error);
    }
}