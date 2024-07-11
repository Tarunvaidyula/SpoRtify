import { Product } from './database.mjs';

export const boxingProducts = [
    {
        name: 'Everlast Boxing Gloves',
        description: 'High-quality boxing gloves from Everlast.',
        price: 6999,
        category: 'boxing',
        brand: 'Everlast',
        type: 'Boxing Gloves',
        image: 'https://example.com/everlast-boxing-gloves.jpg'
    },
    {
        name: 'Title Boxing Punching Bag',
        description: 'Heavy-duty punching bag from Title Boxing.',
        price: 14999,
        category: 'boxing',
        brand: 'Title Boxing',
        type: 'Punching Bag',
        image: 'https://example.com/title-boxing-punching-bag.jpg'
    },
    {
        name: 'Cleto Reyes Boxing Headgear',
        description: 'Protective headgear for boxing from Cleto Reyes.',
        price: 9999,
        category: 'boxing',
        brand: 'Cleto Reyes',
        type: 'Headgear',
        image: 'https://example.com/cleto-reyes-boxing-headgear.jpg'
    },
    {
        name: 'Ringside Boxing Shoes',
        description: 'Lightweight boxing shoes from Ringside.',
        price: 7999,
        category: 'boxing',
        brand: 'Ringside',
        type: 'Boxing Shoes',
        image: 'https://example.com/ringside-boxing-shoes.jpg'
    },
    {
        name: 'Grant Boxing Shorts',
        description: 'Premium boxing shorts from Grant.',
        price: 4999,
        category: 'boxing',
        brand: 'Grant',
        type: 'Boxing Shorts',
        image: 'https://example.com/grant-boxing-shorts.jpg'
    },
    {
        name: 'Everlast Boxing Hand Wraps',
        description: 'Hand wraps for boxing from Everlast.',
        price: 2499,
        category: 'boxing',
        brand: 'Everlast',
        type: 'Hand Wraps',
        image: 'https://example.com/everlast-boxing-hand-wraps.jpg'
    },
    {
        name: 'Title Boxing Skipping Rope',
        description: 'Speed skipping rope from Title Boxing.',
        price: 1999,
        category: 'boxing',
        brand: 'Title Boxing',
        type: 'Skipping Rope',
        image: 'https://example.com/title-boxing-skipping-rope.jpg'
    },
    {
        name: 'Cleto Reyes Boxing Mouthguard',
        description: 'Protective mouthguard for boxing from Cleto Reyes.',
        price: 1499,
        category: 'boxing',
        brand: 'Cleto Reyes',
        type: 'Mouthguard',
        image: 'https://example.com/cleto-reyes-boxing-mouthguard.jpg'
    },
    {
        name: 'Ringside Boxing Groin Protector',
        description: 'Groin protector for boxing from Ringside.',
        price: 2999,
        category: 'boxing',
        brand: 'Ringside',
        type: 'Groin Protector',
        image: 'https://example.com/ringside-boxing-groin-protector.jpg'
    },
    {
        name: 'Grant Boxing Training Mitts',
        description: 'Training mitts for boxing from Grant.',
        price: 3999,
        category: 'boxing',
        brand: 'Grant',
        type: 'Training Mitts',
        image: 'https://example.com/grant-boxing-training-mitts.jpg'
    },
    {
        name: 'Everlast Boxing Heavy Bag Stand',
        description: 'Sturdy heavy bag stand from Everlast.',
        price: 9999,
        category: 'boxing',
        brand: 'Everlast',
        type: 'Heavy Bag Stand',
        image: 'https://example.com/everlast-boxing-heavy-bag-stand.jpg'
    },
    {
        name: 'Title Boxing Double End Bag',
        description: 'Double end bag for boxing from Title Boxing.',
        price: 6999,
        category: 'boxing',
        brand: 'Title Boxing',
        type: 'Double End Bag',
        image: 'https://example.com/title-boxing-double-end-bag.jpg'
    },
    {
        name: 'Cleto Reyes Boxing Speed Bag',
        description: 'Speed bag for boxing from Cleto Reyes.',
        price: 3999,
        category: 'boxing',
        brand: 'Cleto Reyes',
        type: 'Speed Bag',
        image: 'https://example.com/cleto-reyes-boxing-speed-bag.jpg'
    },
    {
        name: 'Ringside Boxing Cornerman Kit',
        description: 'Cornerman kit for boxing from Ringside.',
        price: 5999,
        category: 'boxing',
        brand: 'Ringside',
        type: 'Cornerman Kit',
        image: 'https://example.com/ringside-boxing-cornerman-kit.jpg'
    },
    {
        name: 'Grant Boxing Punch Mitts',
        description: 'Punch mitts for boxing from Grant.',
        price: 2999,
        category: 'boxing',
        brand: 'Grant',
        type: 'Punch Mitts',
        image: 'https://example.com/grant-boxing-punch-mitts.jpg'
    },
    {
        name: 'Everlast Boxing Speed Bag Platform',
        description: 'Speed bag platform from Everlast.',
        price: 5999,
        category: 'boxing',
        brand: 'Everlast',
        type: 'Speed Bag Platform',
        image: 'https://example.com/everlast-boxing-speed-bag-platform.jpg'
    },
    {
        name: 'Title Boxing Medicine Ball',
        description: 'Medicine ball for boxing training from Title Boxing.',
        price: 3999,
        category: 'boxing',
        brand: 'Title Boxing',
        type: 'Medicine Ball',
        image: 'https://example.com/title-boxing-medicine-ball.jpg'
    },
    {
        name: 'Cleto Reyes Boxing Ring Bell',
        description: 'Boxing ring bell from Cleto Reyes.',
        price: 999,
        category: 'boxing',
        brand: 'Cleto Reyes',
        type: 'Ring Bell',
        image: 'https://example.com/cleto-reyes-boxing-ring-bell.jpg'
    },
    {
        name: 'Ringside Boxing Timer',
        description: 'Timer for boxing rounds from Ringside.',
        price: 1499,
        category: 'boxing',
        brand: 'Ringside',
        type: 'Timer',
        image: 'https://example.com/ringside-boxing-timer.jpg'
    },
    {
        name: 'Grant Boxing Hand Target',
        description: 'Hand target for boxing training from Grant.',
        price: 2499,
        category: 'boxing',
        brand: 'Grant',
        type: 'Hand Target',
        image: 'https://example.com/grant-boxing-hand-target.jpg'
    },
    {
        name: 'Everlast Boxing Mouthpiece',
        description: 'Mouthpiece for boxing from Everlast.',
        price: 999,
        category: 'boxing',
        brand: 'Everlast',
        type: 'Mouthpiece',
        image: 'https://example.com/everlast-boxing-mouthpiece.jpg'
    },
    {
        name: 'Title Boxing Abdominal Guard',
        description: 'Abdominal guard for boxing from Title Boxing.',
        price: 1999,
        category: 'boxing',
        brand: 'Title Boxing',
        type: 'Abdominal Guard',
        image: 'https://example.com/title-boxing-abdominal-guard.jpg'
    },
    {
        name: 'Cleto Reyes Boxing Hand Protector',
        description: 'Hand protector for boxing from Cleto Reyes.',
        price: 1299,
        category: 'boxing',
        brand: 'Cleto Reyes',
        type: 'Hand Protector',
        image: 'https://example.com/cleto-reyes-boxing-hand-protector.jpg'
    },
    {
        name: 'Ringside Boxing Corner Pad',
        description: 'Corner pad for boxing ring from Ringside.',
        price: 4999,
        category: 'boxing',
        brand: 'Ringside',
        type: 'Corner Pad',
        image: 'https://example.com/ringside-boxing-corner-pad.jpg'
    },
    {
        name: 'Grant Boxing Gym Bag',
        description: 'Durable gym bag for boxing gear from Grant.',
        price: 3999,
        category: 'boxing',
        brand: 'Grant',
        type: 'Gym Bag',
        image: 'https://example.com/grant-boxing-gym-bag.jpg'
    },
    {
        name: 'Everlast Boxing Speed Rope',
        description: 'Speed rope for boxing training from Everlast.',
        price: 999,
        category: 'boxing',
        brand: 'Everlast',
        type: 'Speed Rope',
        image: 'https://example.com/everlast-boxing-speed-rope.jpg'
    },
    {
        name: 'Title Boxing Coaching Mitt',
        description: 'Coaching mitt for boxing from Title Boxing.',
        price: 1999,
        category: 'boxing',
        brand: 'Title Boxing',
        type: 'Coaching Mitt',
        image: 'https://example.com/title-boxing-coaching-mitt.jpg'
    },
    {
        name: 'Cleto Reyes Boxing Training Vest',
        description: 'Training vest for boxing from Cleto Reyes.',
        price: 2999,
        category: 'boxing',
        brand: 'Cleto Reyes',
        type: 'Training Vest',
        image: 'https://example.com/cleto-reyes-boxing-training-vest.jpg'
    },
    {
        name: 'Ringside Boxing Ab Wheel',
        description: 'Ab wheel for core training in boxing from Ringside.',
        price: 1499,
        category: 'boxing',
        brand: 'Ringside',
        type: 'Ab Wheel',
        image: 'https://example.com/ringside-boxing-ab-wheel.jpg'
    },
    {
        name: 'Grant Boxing Chest Protector',
        description: 'Chest protector for boxing from Grant.',
        price: 4999,
        category: 'boxing',
        brand: 'Grant',
        type: 'Chest Protector',
        image: 'https://example.com/grant-boxing-chest-protector.jpg'
    },
    {
        name: 'Everlast Boxing Floor Anchor',
        description: 'Floor anchor for heavy bags from Everlast.',
        price: 1999,
        category: 'boxing',
        brand: 'Everlast',
        type: 'Floor Anchor',
        image: 'https://example.com/everlast-boxing-floor-anchor.jpg'
    },
    {
        name: 'Title Boxing Speed Ball Swivel',
        description: 'Speed ball swivel for boxing from Title Boxing.',
        price: 999,
        category: 'boxing',
        brand: 'Title Boxing',
        type: 'Speed Ball Swivel',
        image: 'https://example.com/title-boxing-speed-ball-swivel.jpg'
    },
    {
        name: 'Cleto Reyes Boxing Ring Stool',
        description: 'Ring stool for boxing corner from Cleto Reyes.',
        price: 2999,
        category: 'boxing',
        brand: 'Cleto Reyes',
        type: 'Ring Stool',
        image: 'https://example.com/cleto-reyes-boxing-ring-stool.jpg'
    },
    {
        name: 'Ringside Boxing Foam Roller',
        description: 'Foam roller for recovery in boxing from Ringside.',
        price: 2499,
        category: 'boxing',
        brand: 'Ringside',
        type: 'Foam Roller',
        image: 'https://example.com/ringside-boxing-foam-roller.jpg'
    },
    {
        name: 'Grant Boxing Speed Bag Platform',
        description: 'Speed bag platform for boxing from Grant.',
        price: 5999,
        category: 'boxing',
        brand: 'Grant',
        type: 'Speed Bag Platform',
        image: 'https://example.com/grant-boxing-speed-bag-platform.jpg'
    },
    {
        name: 'Everlast Boxing Corner Pad',
        description: 'Corner pad for boxing ring from Everlast.',
        price: 3999,
        category: 'boxing',
        brand: 'Everlast',
        type: 'Corner Pad',
        image: 'https://example.com/everlast-boxing-corner-pad.jpg'
    }
];

export async function seedboxingProducts() {
    try {
        for (const product of boxingProducts) {
            await Product.updateOne({ name: product.name }, { $setOnInsert: product }, { upsert: true });
            console.log(`Boxing product added: ${product.name}`);
        }
    } catch (error) {
        console.error('Error saving boxing products:', error);
    }
}
