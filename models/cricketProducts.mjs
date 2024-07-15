import { Product } from './database.mjs';

export const cricketProducts = [
    {
        name: 'Cricket Bat',
        description: 'High-quality cricket bat for professional use.',
        price: 14999,
        category: 'cricket',
        brand: 'Nike',
        type: 'Bat',
        image: 'https://example.com/nike-cricket-bat.jpg'
    },
    {
        name: 'Cricket Helmet',
        description: 'Protective cricket helmet for batsmen.',
        price: 5499,
        category: 'cricket',
        brand: 'Nike',
        type: 'Helmet',
        image: 'https://example.com/nike-cricket-helmet.jpg'
    },
    {
        name: 'Cricket Gloves',
        description: 'Durable cricket gloves for players.',
        price: 3999,
        category: 'cricket',
        brand: 'Nike',
        type: 'Gloves',
        image: 'https://example.com/nike-cricket-gloves.jpg'
    },
    {
        name: 'Cricket Thigh Guard',
        description: 'Cricket thigh guard for protection while batting.',
        price: 1999,
        category: 'cricket',
        brand: 'Nike',
        type: 'Thigh Guard',
        image: 'https://example.com/nike-cricket-thigh-guard.jpg'
    },
    {
        name: 'Cricket Ball',
        description: 'High-quality cricket ball for matches.',
        price: 2999,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Ball',
        image: 'https://example.com/adidas-cricket-ball.jpg'
    },
    {
        name: 'Cricket Batting Gloves',
        description: 'Batting gloves for cricket players.',
        price: 2499,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Batting Gloves',
        image: 'https://example.com/adidas-cricket-batting-gloves.jpg'
    },
    {
        name: 'Cricket Stumps',
        description: 'Durable cricket stumps for matches.',
        price: 1599,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Stumps',
        image: 'https://example.com/adidas-cricket-stumps.jpg'
    },
    {
        name: 'Cricket Helmet',
        description: 'Protective cricket helmet for players.',
        price: 1999,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Helmet',
        image: 'https://example.com/adidas-cricket-helmet.jpg'
    },
    {
        name: 'Cricket Kit Bag',
        description: 'Spacious cricket kit bag for equipment.',
        price: 6999,
        category: 'cricket',
        brand: 'Puma',
        type: 'Kit Bag',
        image: 'https://example.com/puma-cricket-kit-bag.jpg'
    },
    {
        name: 'Cricket Shoes',
        description: 'Lightweight cricket shoes for players.',
        price: 5999,
        category: 'cricket',
        brand: 'Puma',
        type: 'Shoes',
        image: 'https://example.com/puma-cricket-shoes.jpg'
    },
    {
        name: 'Cricket Bat Grip',
        description: 'Cricket bat grip for better handling and control.',
        price: 799,
        category: 'cricket',
        brand: 'Puma',
        type: 'Bat Grip',
        image: 'https://example.com/puma-cricket-bat-grip.jpg'
    },
    {
        name: 'Cricket Arm Guard',
        description: 'Cricket arm guard for protection while batting.',
        price: 1499,
        category: 'cricket',
        brand: 'Puma',
        type: 'Arm Guard',
        image: 'https://example.com/puma-cricket-arm-guard.jpg'
    },
    {
        name: 'Cricket Cap',
        description: 'Stylish cricket cap for sun protection.',
        price: 1299,
        category: 'cricket',
        brand: 'Puma',
        type: 'Cap',
        image: 'https://example.com/puma-cricket-cap.jpg'
    },
    {
        name: 'Cricket Wicket Keeping Gloves',
        description: 'Specialized gloves for wicket keepers in cricket.',
        price: 2999,
        category: 'cricket',
        brand: 'Puma',
        type: 'Wicket Keeping Gloves',
        image: 'https://example.com/puma-cricket-wicket-keeping-gloves.jpg'
    },
    {
        name: 'Cricket Bat',
        description: 'High-performance cricket bat for professional players.',
        price: 13499,
        category: 'cricket',
        brand: 'Reebok',
        type: 'Bat',
        image: 'https://example.com/reebok-cricket-bat.jpg'
    },
    {
        name: 'Cricket Gloves',
        description: 'Comfortable and durable cricket gloves.',
        price: 3499,
        category: 'cricket',
        brand: 'Reebok',
        type: 'Gloves',
        image: 'https://example.com/reebok-cricket-gloves.jpg'
    }
];

export async function seedCricketProducts() {
    try {
        for (const product of cricketProducts) {
            await Product.updateOne({ name: product.name }, { $setOnInsert: product }, { upsert: true });
        }
    } catch (error) {
        console.error('Error saving cricket products:', error);
    }
}
