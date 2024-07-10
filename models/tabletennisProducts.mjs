import { Product } from "./database.mjs";

export const tabletennisProducts = [
    {
        name: 'Table Tennis Racket',
        description: 'Professional table tennis racket for players.',
        price: 49.99,
        category: 'tabletennis',
        imageUrl: 'https://example.com/table-tennis-racket.jpg'
    },
    {
        name: 'Table Tennis Balls',
        description: 'Pack of 6 table tennis balls for practice.',
        price: 9.99,
        category: 'tabletennis',
        imageUrl: 'https://example.com/table-tennis-balls.jpg'
    },
    {
        name: 'Table Tennis Net',
        description: 'Adjustable table tennis net for home play.',
        price: 19.99,
        category: 'tabletennis',
        imageUrl: 'https://example.com/table-tennis-net.jpg'
    },
    {
        name: 'Table Tennis Table',
        description: 'Foldable table tennis table for indoor use.',
        price: 299.99,
        category: 'tabletennis',
        imageUrl: 'https://example.com/table-tennis-table.jpg'
    },
    {
        name: 'Table Tennis Shoes',
        description: 'Lightweight table tennis shoes for agility.',
        price: 59.99,
        category: 'tabletennis',
        imageUrl: 'https://example.com/table-tennis-shoes.jpg'
    },
    {
        name: 'Table Tennis Bat Case',
        description: 'Protective case for table tennis rackets.',
        price: 14.99,
        category: 'tabletennis',
        imageUrl: 'https://example.com/table-tennis-bat-case.jpg'
    },
    {
        name: 'Table Tennis Robot',
        description: 'Automatic table tennis robot for practice.',
        price: 499.99,
        category: 'tabletennis',
        imageUrl: 'https://example.com/table-tennis-robot.jpg'
    },
    {
        name: 'Table Tennis Scoreboard',
        description: 'Portable table tennis scoreboard for matches.',
        price: 29.99,
        category: 'tabletennis',
        imageUrl: 'https://example.com/table-tennis-scoreboard.jpg'
    },
    {
        name: 'Table Tennis Grip Tape',
        description: 'Non-slip table tennis grip tape for rackets.',
        price: 4.99,
        category: 'tabletennis',
        imageUrl: 'https://example.com/table-tennis-grip-tape.jpg'
    },
];

export async function seedtabletennisProducts() {
    try {
        for (const product of tabletennisProducts) {
            for (const product of tabletennisProducts) {
                await Product.updateOne({ name: product.name }, { $setOnInsert: product }, { upsert: true });
                console.log(`Table Tennis Products: ${product.name}`);
            }
        }
    } catch (error) {
        console.error('Error saving tabletennis products:', error);
    }
}