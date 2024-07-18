import { Product } from './database.mjs';

export const boxingProducts = [
    {
        name: 'Boxing Gloves',
        description: 'High-quality boxing gloves for training and matches.',
        price: 6999,
        category: 'boxing',
        brand: 'Everlast',
        type: 'Boxing Gloves',
        image: 'https://m.media-amazon.com/images/I/91m7N9xNjTL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        name: 'Punching Bag',
        description: 'Heavy-duty punching bag for boxing practice.',
        price: 14999,
        category: 'boxing',
        brand: 'Title Boxing',
        type: 'Punching Bag',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr_bgAK7TMVsE-wdxL8aPr487JQJjHDSlxHA&s'
    },
    {
        name: 'Boxing Headgear',
        description: 'Protective headgear for boxing training and sparring.',
        price: 9999,
        category: 'boxing',
        brand: 'Cleto Reyes',
        type: 'Headgear',
        image: 'https://cletoreyesboxing.com/wp-content/uploads/2022/01/E380N-600px.png'
    },
    {
        name: 'Hand Wraps',
        description: 'Essential hand wraps for wrist and hand protection in boxing.',
        price: 2499,
        category: 'boxing',
        brand: 'Everlast',
        type: 'Hand Wraps',
        image: 'https://m.media-amazon.com/images/I/71xNQDJeFUL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        name: 'Skipping Rope',
        description: 'Speed skipping rope for cardio and agility in boxing.',
        price: 1999,
        category: 'boxing',
        brand: 'Title Boxing',
        type: 'Skipping Rope',
        image: 'https://www.titleboxing.com/cdn/shop/products/ajrp_1.jpg?v=1671768165'
    },
    {
        name: 'Mouthguard',
        description: 'Protective mouthguard for boxing matches and sparring.',
        price: 1499,
        category: 'boxing',
        brand: 'Cleto Reyes',
        type: 'Mouthguard',
        image: 'https://www.geezersboxing.co.uk/media/catalog/product/cache/20940c474ab826e8f954b8aa09694d47/c/r/cr1115-a.jpg'
    },
    {
        name: 'Groin Protector',
        description: 'Groin protector for added safety during boxing training.',
        price: 2999,
        category: 'boxing',
        brand: 'Ringside',
        type: 'Groin Protector',
        image: 'https://www.fightequipmentuk.com/cdn/shop/files/ringside-alpha-elite-groin-guard-ringside-boxing.jpg?v=1711687282'
    },
    {
        name: 'Training Mitts',
        description: 'Mitts for training sessions and sparring in boxing.',
        price: 3999,
        category: 'boxing',
        brand: 'Grant',
        type: 'Training Mitts',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQheLUT9ja1BT-NSi-m0gDQoEJhYtrqcs08fQ&s'
    },
    {
        name: 'Heavy Bag Stand',
        description: 'Sturdy stand for heavy bags in boxing gyms.',
        price: 9999,
        category: 'boxing',
        brand: 'Everlast',
        type: 'Heavy Bag Stand',
        image: 'https://images-cdn.ubuy.co.in/646e4ed2bf1a6f11043287ca-three-station-heavy-duty-punching-bag.jpg'
    },
    {
        name: 'Double End Bag',
        description: 'Double end bag for reflex training in boxing.',
        price: 6999,
        category: 'boxing',
        brand: 'Title Boxing',
        type: 'Double End Bag',
        image: 'https://www.titleboxing.com/cdn/shop/products/deb6-gd_1.jpg?v=1690396958'
    },
    {
        name: 'Speed Bag',
        description: 'Speed bag for speed and accuracy training in boxing.',
        price: 3999,
        category: 'boxing',
        brand: 'Cleto Reyes',
        type: 'Speed Bag',
        image: 'https://cletoreyesboxing.com/wp-content/uploads/2022/01/E575N-600px.png'
    },
    {
        name: 'Cornerman Kit',
        description: 'Essential kit for boxing cornermen during matches.',
        price: 5999,
        category: 'boxing',
        brand: 'Ringside',
        type: 'Cornerman Kit',
        image: 'https://cletoreyesboxing.com/wp-content/uploads/2022/01/E575N-600px.png'
    },
    {
        name: 'Punch Mitts',
        description: 'Mitts for coaches during boxing training sessions.',
        price: 2999,
        category: 'boxing',
        brand: 'Grant',
        type: 'Punch Mitts',
        image: 'https://fight2finish.com/cdn/shop/products/redsilver1grant.jpg?v=1667255523&width=1200'
    },
    {
        name: 'Boxing Kit',
        description: 'Complete boxing kit for beginners and advanced boxers.',
        price: 19999,
        category: 'boxing',
        brand: 'Everlast',
        type: 'Kit bag',
        image:'https://images-cdn.ubuy.co.in/653eefee8397ef05dd782399-everlast-100-lb-vintage-heavy-bag-kit.jpg'
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
