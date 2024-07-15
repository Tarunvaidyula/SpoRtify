import { Product } from './database.mjs';

export const footballProducts = [
    {
        name: 'Nike Football',
        description: 'Official size and weight football for matches.',
        price: 3999,
        category: 'football',
        brand: 'Nike',
        type: 'Football',
        image: 'https://wallpaper.forfun.com/fetch/21/21e068cb55217b1d387d28e894c4becb.jpeg'
    },
    {
        name: 'Adidas Goalkeeper Gloves',
        description: 'Professional goalkeeper gloves for football.',
        price: 4499,
        category: 'football',
        brand: 'Adidas',
        type: 'Goalkeeper Gloves',
        image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/5a0ca8c64141485885bcf560a3224fa1_9366/Predator_Pro_Goalkeeper_Gloves_Black_IQ4034_HM1.jpg'
    },
    {
        name: 'Football Net',
        description: 'Durable football net for training and matches.',
        price: 2999,
        category: 'football',
        brand: 'Puma',
        type: 'Football Net',
        image: 'https://w0.peakpx.com/wallpaper/222/329/HD-wallpaper-white-black-football-touching-net-football.jpg'
    },
    {
        name: 'Nike Shin Guards',
        description: 'High-quality shin guards for football players.',
        price: 1999,
        category: 'football',
        brand: 'Nike',
        type: 'Shin Guards',
        image: 'https://www.sportsdirect.com/images/products/81808730_l.jpg'
    },
    {
        name: 'Adidas Corner Flags',
        description: 'Set of corner flags for marking football fields.',
        price: 1499,
        category: 'football',
        brand: 'Adidas',
        type: 'Corner Flags',
        image: 'https://m.media-amazon.com/images/I/61xvzqul-7L._AC_UF350,350_QL80_.jpg'
    },
    {
        name: 'Nike Football Jersey',
        description: 'Official football jersey for matches.',
        price: 2999,
        category: 'football',
        brand: 'Nike',
        type: 'Jersey',
        image: 'https://w7.pngwing.com/pngs/376/343/png-transparent-t-shirt-jersey-nike-uniform-football-soccer-jerseys-purple-tshirt-blue.png'
    },
    {
        name: 'Puma Football Socks',
        description: 'Comfortable football socks for players.',
        price: 999,
        category: 'football',
        brand: 'Puma',
        type: 'Socks',
        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/705313/04/fnd/EEA/fmt/png/teamFINAL-Men-s-Football-Socks'
    },
    {
        name: 'Adidas Football Pump',
        description: 'High-pressure football pump for inflating balls.',
        price: 699,
        category: 'football',
        brand: 'Adidas',
        type: 'Pump',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/38ec11835a264748bab0a92300ef45a1_9366/Air_Pump_Black_CZ9556_01_standard.jpg'
    },
    {
        name: 'Nike Agility Ladder',
        description: 'Agility ladder for football training drills.',
        price: 1499,
        category: 'football',
        brand: 'Nike',
        type: 'Training Equipment',
        image: 'https://thumblr.uniid.it/product/69283/ebff9244c784.jpg'
    },
    {
        name: 'Puma Captain Armband',
        description: 'Captain armband for football team leaders.',
        price: 499,
        category: 'football',
        brand: 'Puma',
        type: 'Armband',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PVgjtKE1V6FeaD-CgF-OUWwQZXt9kjphOA&s'
    },
    {
        name: 'Adidas Football Whistle',
        description: 'Referee whistle for football matches.',
        price: 299,
        category: 'football',
        brand: 'Adidas',
        type: 'Whistle',
        image: 'https://soccerandrugby.com/media/catalog/product/cache/6720d8d2e437f32796a564e9fc7f40ee/5133972-zcloseup1.jpg'
    },
    {
        name: 'Nike Goalkeeper Jersey',
        description: 'Specialized goalkeeper jersey for football matches.',
        price: 3999,
        category: 'football',
        brand: 'Nike',
        type: 'Goalkeeper Jersey',
        image: 'https://images.media-arocam.com/IWJToa_cWLNNzxmAsoBEy6pr8b8=/fit-in/1000x1000/W28515/TQK/kRjBTfTh_TQK.png'
    },
    {
        name: 'Puma Football Cones',
        description: 'Training cones for football practice sessions.',
        price: 799,
        category: 'football',
        brand: 'Puma',
        type: 'Cones',
        image: 'https://shop.shakhtar.com/images/detailed/15/puma_52825-01.jpg'
    },
    {
        name: 'Adidas Football Shin Socks',
        description: 'Combined shin guards and socks for football players.',
        price: 2499,
        category: 'football',
        brand: 'Adidas',
        type: 'Shin Socks',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/398412fc8648479da185a7f500adf499_9366/Sock_Guard_Black_AH7764_01_standard.jpg'
    },
    {
        name: 'Nike Football Captain Band',
        description: 'Captain band for football team leaders.',
        price: 799,
        category: 'football',
        brand: 'Nike',
        type: 'Captain Band',
        image: 'https://en-ae.sssports.com/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw3d236360/sss/SSS2/8/4/5/8/4/SSS2_845840053577_1.jpg?sw=700&sh=700&sm=fit'
    }
];

export async function seedFootballProducts() {
    try {
        for (const product of footballProducts) {
            await Product.updateOne({ name: product.name }, { $setOnInsert: product }, { upsert: true });
        }
    } catch (error) {
        console.error('Error saving football products:', error);
    }
}
