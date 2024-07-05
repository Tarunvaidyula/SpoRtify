import { Product } from "./database.mjs";

export const cricketProducts = [
    {
        name: 'Cricket Bat',
        description: 'High-quality cricket bat for professional use.',
        price: 199.99,
        category: 'cricket',
        imageUrl: 'https://example.com/cricket-bat.jpg'
    },
    {
        name: 'Cricket Ball',
        description: 'Standard cricket ball for matches.',
        price: 29.99,
        category: 'cricket',
        imageUrl: 'https://example.com/cricket-ball.jpg'
    },
    {
        name: 'Cricket Gloves',
        description: 'Comfortable cricket gloves for players.',
        price: 49.99,
        category: 'cricket',
        imageUrl: 'https://example.com/cricket-gloves.jpg'
    },
    {
        name: 'Cricket Helmet',
        description: 'Protective cricket helmet for batsmen.',
        price: 79.99,
        category: 'cricket',
        imageUrl: 'https://example.com/cricket-helmet.jpg'
    },
    {
        name: 'Cricket Pads',
        description: 'Durable cricket pads for leg protection.',
        price: 59.99,
        category: 'cricket',
        imageUrl: 'https://example.com/cricket-pads.jpg'
    },
    {
        name: 'Cricket Stumps',
        description: 'Set of cricket stumps for matches.',
        price: 39.99,
        category: 'cricket',
        imageUrl: 'https://example.com/cricket-stumps.jpg'
    },
    {
        name: 'Cricket Kit Bag',
        description: 'Spacious cricket kit bag for equipment.',
        price: 99.99,
        category: 'cricket',
        imageUrl: 'https://example.com/cricket-kit-bag.jpg'
    },
    {
        name: 'Cricket Shoes',
        description: 'Lightweight cricket shoes for players.',
        price: 69.99,
        category: 'cricket',
        imageUrl: 'https://example.com/cricket-shoes.jpg'
    },
    {
        name: 'Cricket Thigh Guard',
        description: 'Protective cricket thigh guard for batsmen.',
        price: 19.99,
        category: 'cricket',
        imageUrl: 'https://example.com/cricket-thigh-guard.jpg'
    },
    {
        name: 'Cricket Wicket Keeping Gloves',
        description: 'Specialized cricket gloves for wicket keepers.',
        price: 49.99,
        category: 'cricket',
        imageUrl: 'https://example.com/cricket-wicket-keeping-gloves.jpg'
    },
    {
        name: 'Cricket Wicket Keeping Pads',
        description: 'Wicket keeping pads for cricket matches.',
        price: 39.99,
        category: 'cricket',
        imageUrl: 'https://example.com/cricket-wicket-keeping-pads.jpg'
    },
    {
        name: 'Cricket Arm Guard',
        description: 'Cricket arm guard for protection while batting.',
        price: 29.99,
        category: 'cricket',
        imageUrl: 'https://example.com/cricket-arm-guard.jpg'
    },
];

export async function seedCricketProducts() {
    try {
        for (const product of cricketProducts) {
            for (const product of cricketProducts) {
                await Product.updateOne({ name: product.name }, { $setOnInsert: product }, { upsert: true });
                console.log(`Cricket product saved: ${product.name}`);
            }
        }
    } catch (error) {
        console.error('Error saving cricket products:', error);
    }
}
