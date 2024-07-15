import {Product} from './database.mjs';

export const badmintonProducts = [
    {
        name: 'Yonex Badminton Racket',
        description: 'High-performance badminton racket from Yonex.',
        price: 7999,
        category: 'badminton',
        brand: 'Yonex',
        type: 'Racket',
        image: 'https://example.com/yonex-badminton-racket.jpg'
    },
    {
        name: 'Li-Ning Badminton Shuttlecock',
        description: 'Premium badminton shuttlecocks from Li-Ning.',
        price: 2999,
        category: 'badminton',
        brand: 'Li-Ning',
        type: 'Shuttlecock',
        image: 'https://example.com/li-ning-badminton-shuttlecock.jpg'
    },
    {
        name: 'Victor Badminton Shoes',
        description: 'Professional badminton shoes from Victor.',
        price: 4999,
        category: 'badminton',
        brand: 'Victor',
        type: 'Shoes',
        image: 'https://example.com/victor-badminton-shoes.jpg'
    },
    {
        name: 'Yonex Badminton Grip',
        description: 'Durable badminton grip tape from Yonex.',
        price: 499,
        category: 'badminton',
        brand: 'Yonex',
        type: 'Grip',
        image: 'https://example.com/yonex-badminton-grip.jpg'
    },
    {
        name: 'Li-Ning Badminton Bag',
        description: 'Spacious badminton bag from Li-Ning.',
        price: 3999,
        category: 'badminton',
        brand: 'Li-Ning',
        type: 'Bag',
        image: 'https://example.com/li-ning-badminton-bag.jpg'
    },
    {
        name: 'Yonex Badminton String',
        description: 'High-quality badminton string from Yonex.',
        price: 999,
        category: 'badminton',
        brand: 'Yonex',
        type: 'String',
        image: 'https://example.com/yonex-badminton-string.jpg'
    },
    {
        name: 'Victor Badminton Grip Powder',
        description: 'Grip powder for badminton players from Victor.',
        price: 299,
        category: 'badminton',
        brand: 'Victor',
        type: 'Grip Powder',
        image: 'https://example.com/victor-badminton-grip-powder.jpg'
    },
    {
        name: 'Yonex Badminton Shirt',
        description: 'Comfortable badminton shirt from Yonex.',
        price: 1999,
        category: 'badminton',
        brand: 'Yonex',
        type: 'Shirt',
        image: 'https://example.com/yonex-badminton-shirt.jpg'
    },
    {
        name: 'Li-Ning Badminton Shorts',
        description: 'Durable badminton shorts from Li-Ning.',
        price: 1499,
        category: 'badminton',
        brand: 'Li-Ning',
        type: 'Shorts',
        image: 'https://example.com/li-ning-badminton-shorts.jpg'
    },
    {
        name: 'Victor Badminton Socks',
        description: 'Comfortable badminton socks from Victor.',
        price: 499,
        category: 'badminton',
        brand: 'Victor',
        type: 'Socks',
        image: 'https://example.com/victor-badminton-socks.jpg'
    },
    {
        name: 'Yonex Badminton Wristband',
        description: 'Wristband for badminton players from Yonex.',
        price: 299,
        category: 'badminton',
        brand: 'Yonex',
        type: 'Wristband',
        image: 'https://example.com/yonex-badminton-wristband.jpg'
    },
    {
        name: 'Li-Ning Badminton Cap',
        description: 'Cap for badminton players from Li-Ning.',
        price: 499,
        category: 'badminton',
        brand: 'Li-Ning',
        type: 'Cap',
        image: 'https://example.com/li-ning-badminton-cap.jpg'
    },
    {
        name: 'Victor Badminton Towel',
        description: 'Towel for badminton players from Victor.',
        price: 399,
        category: 'badminton',
        brand: 'Victor',
        type: 'Towel',
        image: 'https://example.com/victor-badminton-towel.jpg'
    },
    {
        name: 'Yonex Badminton Sling Bag',
        description: 'Sling bag for badminton equipment from Yonex.',
        price: 2999,
        category: 'badminton',
        brand: 'Yonex',
        type: 'Sling Bag',
        image: 'https://example.com/yonex-badminton-sling-bag.jpg'
    },
    {
        name: 'Li-Ning Badminton Wrist Support',
        description: 'Wrist support for badminton players from Li-Ning.',
        price: 999,
        category: 'badminton',
        brand: 'Li-Ning',
        type: 'Wrist Support',
        image: 'https://example.com/li-ning-badminton-wrist-support.jpg'
    }
];

export async function seedbadmintonProducts() {
    try {
        for (const product of badmintonProducts) {
            await Product.updateOne({ name: product.name }, { $setOnInsert: product }, { upsert: true });
        }
    } catch (error) {
        console.error('Error saving badminton products:', error);
    }
}
