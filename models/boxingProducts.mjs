import { Product } from './database.mjs';

export const boxingProducts = [
    {
        name: 'Boxing Gloves',
        description: 'High-quality boxing gloves for training and matches.',
        price: 6999,
        category: 'boxing',
        brand: 'Everlast',
        type: 'Boxing Gloves',
        image: 'https://example.com/everlast-boxing-gloves.jpg'
    },
    {
        name: 'Punching Bag',
        description: 'Heavy-duty punching bag for boxing practice.',
        price: 14999,
        category: 'boxing',
        brand: 'Title Boxing',
        type: 'Punching Bag',
        image: 'https://example.com/title-boxing-punching-bag.jpg'
    },
    {
        name: 'Boxing Headgear',
        description: 'Protective headgear for boxing training and sparring.',
        price: 9999,
        category: 'boxing',
        brand: 'Cleto Reyes',
        type: 'Headgear',
        image: 'https://example.com/cleto-reyes-boxing-headgear.jpg'
    },
    {
        name: 'Boxing Shoes',
        description: 'Lightweight and durable boxing shoes for agility.',
        price: 7999,
        category: 'boxing',
        brand: 'Ringside',
        type: 'Boxing Shoes',
        image: 'https://example.com/ringside-boxing-shoes.jpg'
    },
    {
        name: 'Hand Wraps',
        description: 'Essential hand wraps for wrist and hand protection in boxing.',
        price: 2499,
        category: 'boxing',
        brand: 'Everlast',
        type: 'Hand Wraps',
        image: 'https://example.com/everlast-boxing-hand-wraps.jpg'
    },
    {
        name: 'Skipping Rope',
        description: 'Speed skipping rope for cardio and agility in boxing.',
        price: 1999,
        category: 'boxing',
        brand: 'Title Boxing',
        type: 'Skipping Rope',
        image: 'https://example.com/title-boxing-skipping-rope.jpg'
    },
    {
        name: 'Mouthguard',
        description: 'Protective mouthguard for boxing matches and sparring.',
        price: 1499,
        category: 'boxing',
        brand: 'Cleto Reyes',
        type: 'Mouthguard',
        image: 'https://example.com/cleto-reyes-boxing-mouthguard.jpg'
    },
    {
        name: 'Groin Protector',
        description: 'Groin protector for added safety during boxing training.',
        price: 2999,
        category: 'boxing',
        brand: 'Ringside',
        type: 'Groin Protector',
        image: 'https://example.com/ringside-boxing-groin-protector.jpg'
    },
    {
        name: 'Training Mitts',
        description: 'Mitts for training sessions and sparring in boxing.',
        price: 3999,
        category: 'boxing',
        brand: 'Grant',
        type: 'Training Mitts',
        image: 'https://example.com/grant-boxing-training-mitts.jpg'
    },
    {
        name: 'Heavy Bag Stand',
        description: 'Sturdy stand for heavy bags in boxing gyms.',
        price: 9999,
        category: 'boxing',
        brand: 'Everlast',
        type: 'Heavy Bag Stand',
        image: 'https://example.com/everlast-boxing-heavy-bag-stand.jpg'
    },
    {
        name: 'Double End Bag',
        description: 'Double end bag for reflex training in boxing.',
        price: 6999,
        category: 'boxing',
        brand: 'Title Boxing',
        type: 'Double End Bag',
        image: 'https://example.com/title-boxing-double-end-bag.jpg'
    },
    {
        name: 'Speed Bag',
        description: 'Speed bag for speed and accuracy training in boxing.',
        price: 3999,
        category: 'boxing',
        brand: 'Cleto Reyes',
        type: 'Speed Bag',
        image: 'https://example.com/cleto-reyes-boxing-speed-bag.jpg'
    },
    {
        name: 'Cornerman Kit',
        description: 'Essential kit for boxing cornermen during matches.',
        price: 5999,
        category: 'boxing',
        brand: 'Ringside',
        type: 'Cornerman Kit',
        image: 'https://example.com/ringside-boxing-cornerman-kit.jpg'
    },
    {
        name: 'Punch Mitts',
        description: 'Mitts for coaches during boxing training sessions.',
        price: 2999,
        category: 'boxing',
        brand: 'Grant',
        type: 'Punch Mitts',
        image: 'https://example.com/grant-boxing-punch-mitts.jpg'
    },
    {
        name: 'Boxing Kit',
        description: 'Complete boxing kit for beginners and advanced boxers.',
        price: 19999,
        category: 'boxing',
        brand: 'Everlast',
        type: 'Kit bag',
    }
];

export async function seedboxingProducts() {
    try {
        for (const product of boxingProducts) {
            await Product.updateOne({ name: product.name }, { $setOnInsert: product }, { upsert: true });
        }
    } catch (error) {
        console.error('Error saving boxing products:', error);
    }
}
