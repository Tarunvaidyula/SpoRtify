import {Product} from "./database.mjs";

export const basketBallProducts = [
    {
        name: 'Basketball',
        description: 'High-quality basketball for professional use.',
        price: 29.99,
        category: 'basketball',
        imageUrl: 'https://example.com/basketball.jpg'
    },
    {
        name: 'Basketball Hoop',
        description: 'Durable basketball hoop for outdoor courts.',
        price: 199.99,
        category: 'basketball',
        imageUrl: 'https://example.com/basketball-hoop.jpg'
    },
    {
        name: 'Basketball Shoes',
        description: 'Comfortable basketball shoes for players.',
        price: 79.99,
        category: 'basketball',
        imageUrl: 'https://example.com/basketball-shoes.jpg'
    },
];
    export async function seedbasketBallProducts() {
        try {
            for (const product of basketBallProducts) {
                for (const product of basketBallProducts) {
                    await Product.updateOne({ name: product.name }, { $setOnInsert: product }, { upsert: true });
                    console.log(`BasketBall Products: ${product.name}`);
                }
            }
        } catch (error) {
            console.error('Error saving basketBall products:', error);
        }
    }