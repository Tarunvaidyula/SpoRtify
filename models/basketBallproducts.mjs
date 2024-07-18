import { Product } from './database.mjs';

export const basketballProducts = [
    {
        name: 'Spalding NBA Basketball',
        description: 'Official NBA basketball from Spalding.',
        price: 6999,
        category: 'basketball',
        brand: 'Spalding',
        type: 'Basketball',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7F2fA6BDH5O_FOblvnseOIhPQ6mqG33NBcA&s'
    },
    {
        name: 'Wilson Basketball Hoop',
        description: 'High-quality basketball hoop from Wilson.',
        price: 14999,
        category: 'basketball',
        brand: 'Wilson',
        type: 'Basketball Hoop',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKuEDMqpCKrWt4aDSm8oVHh0bkAn-Iq3tCA&s'
    },
    {
        name: 'Spalding Basketball Backboard',
        description: 'Durable basketball backboard from Spalding.',
        price: 24999,
        category: 'basketball',
        brand: 'Spalding',
        type: 'Backboard',
        image: 'https://images-cdn.ubuy.co.in/66187853480a355faf7d3687-spalding-eco-composite-32-inch.jpg'
    },
    {
        name: 'Nike Basketball Ball Bag',
        description: 'Ball bag for basketballs from Nike.',
        price: 1999,
        category: 'basketball',
        brand: 'Nike',
        type: 'Ball Bag',
        image: 'https://images-cdn.ubuy.co.in/66717126c6c17939f2274f72-nike-hoops-elite-backpack-white.jpg'
    },
    {
        name: 'Adidas Basketball Socks',
        description: 'Moisture-wicking basketball socks from Adidas.',
        price: 1499,
        category: 'basketball',
        brand: 'Adidas',
        type: 'Socks',
        image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/b0ce147330d74c4a9a20ad0f0120ac1a_9366/Basketball_Crew_Socks_3_Pairs_Black_GU4382_03_standard.jpg'
    },
    {
        name: 'Under Armour Compression Arm Sleeve',
        description: 'Compression arm sleeve for basketball players from Under Armour.',
        price: 999,
        category: 'basketball',
        brand: 'Under Armour',
        type: 'Arm Sleeve',
        image: 'https://m.media-amazon.com/images/I/61M5egHHyaL._AC_UY1100_.jpg'
    },
    {
        name: 'Spalding Digital Scoreboard',
        description: 'Digital scoreboard for basketball courts from Spalding.',
        price: 49999,
        category: 'basketball',
        brand: 'Spalding',
        type: 'Scoreboard',
        image: 'https://m.media-amazon.com/images/I/81v7ZegloHL.jpg'
    },
    {
        name: 'Wilson Basketball Net',
        description: 'Durable basketball net from Wilson.',
        price: 1999,
        category: 'basketball',
        brand: 'Wilson',
        type: 'Net',
        image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/116f3ca0-cc50-46e6-983f-e0504ad7834d.__CR0,0,300,400_PT0_SX300_V1___.jpg'
    },
    {
        name: 'Nike Basketball Headband',
        description: 'Absorbent headband for basketball players from Nike.',
        price: 699,
        category: 'basketball',
        brand: 'Nike',
        type: 'Headband',
        image: 'https://m.media-amazon.com/images/I/41Zxm-183ML._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_PIStarRatingFOURANDHALF%2CBottomLeft%2C360%2C-6_SR600%2C315_ZA25%252C212%2C445%2C290%2C400%2C400%2CAmazonEmberBold%2C12%2C4%2C0%2C0%2C5_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg'
    },
    {
        name: 'Adidas Referee Whistle',
        description: 'Whistle for basketball referees from Adidas.',
        price: 299,
        category: 'basketball',
        brand: 'Adidas',
        type: 'Referee Whistle',
        image: 'https://images-cdn.ubuy.co.in/63554f31e6e87b77d1444b8c-molten-valkeen-whistle-with-flip-grip.jpg'
    },
    {
        name: 'Under Armour Elbow Pad',
        description: 'Protective elbow pad for basketball players from Under Armour.',
        price: 899,
        category: 'basketball',
        brand: 'Under Armour',
        type: 'Elbow Pad',
        image: 'https://m.media-amazon.com/images/I/71-IUfDYG2L._AC_UF1000,1000_QL80_.jpg'
    },
    {
        name:'Basketball Kit',
        description:'Basketball kit for beginners',
        price: 19999,
        category: 'basketball',
        brand: 'Nike',
        type: 'Kit bag',
        image: 'https://rukminim2.flixcart.com/image/850/1000/kmqn3bk0/sport-bag/2/t/2/standard-champion-soccer-basketball-volleyball-kit-bag-9009-original-imagfket8ynnu2y9.jpeg?q=90&crop=false'
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
