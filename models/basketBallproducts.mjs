import { Product } from './database.mjs';

export const basketballProducts = [
    {
        name: 'Spalding NBA Basketball',
        description: 'Official NBA basketball from Spalding.',
        price: 6999,
        category: 'basketball',
        brand: 'Spalding',
        type: 'Basketball',
        image: 'https://example.com/spalding-nba-basketball.jpg'
    },
    {
        name: 'Wilson Basketball Hoop',
        description: 'High-quality basketball hoop from Wilson.',
        price: 14999,
        category: 'basketball',
        brand: 'Wilson',
        type: 'Basketball Hoop',
        image: 'https://example.com/wilson-basketball-hoop.jpg'
    },
    {
        name: 'Nike Basketball Shoes',
        description: 'Performance basketball shoes from Nike.',
        price: 9999,
        category: 'basketball',
        brand: 'Nike',
        type: 'Basketball Shoes',
        image: 'https://example.com/nike-basketball-shoes.jpg'
    },
    {
        name: 'Adidas Basketball Jersey',
        description: 'Official NBA jersey from Adidas.',
        price: 7999,
        category: 'basketball',
        brand: 'Adidas',
        type: 'Jersey',
        image: 'https://example.com/adidas-basketball-jersey.jpg'
    },
    {
        name: 'Under Armour Basketball Shorts',
        description: 'Comfortable basketball shorts from Under Armour.',
        price: 4999,
        category: 'basketball',
        brand: 'Under Armour',
        type: 'Shorts',
        image: 'https://example.com/under-armour-basketball-shorts.jpg'
    },
    {
        name: 'Spalding Basketball Backboard',
        description: 'Durable basketball backboard from Spalding.',
        price: 24999,
        category: 'basketball',
        brand: 'Spalding',
        type: 'Backboard',
        image: 'https://example.com/spalding-basketball-backboard.jpg'
    },
    {
        name: 'Wilson Basketball Training Aid',
        description: 'Training aid for basketball players from Wilson.',
        price: 3999,
        category: 'basketball',
        brand: 'Wilson',
        type: 'Training Aid',
        image: 'https://example.com/wilson-basketball-training-aid.jpg'
    },
    {
        name: 'Nike Basketball Ball Bag',
        description: 'Ball bag for basketballs from Nike.',
        price: 1999,
        category: 'basketball',
        brand: 'Nike',
        type: 'Ball Bag',
        image: 'https://example.com/nike-basketball-ball-bag.jpg'
    },
    {
        name: 'Adidas Basketball Socks',
        description: 'Moisture-wicking basketball socks from Adidas.',
        price: 1499,
        category: 'basketball',
        brand: 'Adidas',
        type: 'Socks',
        image: 'https://example.com/adidas-basketball-socks.jpg'
    },
    {
        name: 'Under Armour Compression Arm Sleeve',
        description: 'Compression arm sleeve for basketball players from Under Armour.',
        price: 999,
        category: 'basketball',
        brand: 'Under Armour',
        type: 'Arm Sleeve',
        image: 'https://example.com/under-armour-basketball-arm-sleeve.jpg'
    },
    {
        name: 'Spalding Digital Scoreboard',
        description: 'Digital scoreboard for basketball courts from Spalding.',
        price: 49999,
        category: 'basketball',
        brand: 'Spalding',
        type: 'Scoreboard',
        image: 'https://example.com/spalding-basketball-scoreboard.jpg'
    },
    {
        name: 'Wilson Basketball Net',
        description: 'Durable basketball net from Wilson.',
        price: 1999,
        category: 'basketball',
        brand: 'Wilson',
        type: 'Net',
        image: 'https://example.com/wilson-basketball-net.jpg'
    },
    {
        name: 'Nike Basketball Headband',
        description: 'Absorbent headband for basketball players from Nike.',
        price: 699,
        category: 'basketball',
        brand: 'Nike',
        type: 'Headband',
        image: 'https://example.com/nike-basketball-headband.jpg'
    },
    {
        name: 'Adidas Referee Whistle',
        description: 'Whistle for basketball referees from Adidas.',
        price: 299,
        category: 'basketball',
        brand: 'Adidas',
        type: 'Referee Whistle',
        image: 'https://example.com/adidas-basketball-referee-whistle.jpg'
    },
    {
        name: 'Under Armour Elbow Pad',
        description: 'Protective elbow pad for basketball players from Under Armour.',
        price: 899,
        category: 'basketball',
        brand: 'Under Armour',
        type: 'Elbow Pad',
        image: 'https://example.com/under-armour-basketball-elbow-pad.jpg'
    }
];

export async function seedbasketballProducts() {
    try {
        for (const product of basketballProducts) {
            await Product.updateOne({ name: product.name }, { $setOnInsert: product }, { upsert: true });
        }
    } catch (error) {
        console.error('Error saving basketball products:', error);
    }
}
