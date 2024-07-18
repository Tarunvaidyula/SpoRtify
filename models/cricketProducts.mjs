import { Product } from './database.mjs';

export const cricketProducts = [
    {
        name: 'Cricket Bat',
        description: 'High-quality cricket bat for professional use.',
        price: 14999,
        category: 'cricket',
        brand: 'Nike',
        type: 'Bat',
        image: 'https://m.media-amazon.com/images/I/31QQhDuSsXL.jpg'
    },
    {
        name: 'Cricket Helmet',
        description: 'Protective cricket helmet for batsmen.',
        price: 5499,
        category: 'cricket',
        brand: 'Nike',
        type: 'Helmet',
        image: 'https://5.imimg.com/data5/SELLER/Default/2020/11/OF/VT/EX/117112039/cricket-helmates.jpg'
    },
    {
        name: 'Cricket Gloves',
        description: 'Durable cricket gloves for players.',
        price: 3999,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Gloves',
        image: 'https://5.imimg.com/data5/EB/IQ/TE/SELLER-3903635/s4c-australian-style-baggy-cap-500x500.jpg'
    },
    {
        name: 'Cricket Thigh Guard',
        description: 'Cricket thigh guard for protection while batting.',
        price: 1999,
        category: 'cricket',
        brand: 'Puma',
        type: 'Thigh Guard',
        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/030913/03/fnd/IND/fmt/png/Puma-Future-1-Cricket-Thigh-Pad'
    },
    {
        name: 'Cricket Ball',
        description: 'High-quality cricket ball for matches.',
        price: 2999,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Ball',
        image: 'https://rukminim2.flixcart.com/image/850/1000/ball/7/p/t/adidas-cricket-ball-st-county-original-imadkj53kmmbr6cc.jpeg?q=90&crop=false'
    },
    {
        name: 'Cricket Batting Gloves',
        description: 'Batting gloves for cricket players.',
        price: 2499,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Batting Gloves',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvYD7WmfHQztWxfmcRLI0k-UWmFJjhrf-2Ig&s'
    },
    {
        name: 'Cricket Stumps',
        description: 'Durable cricket stumps for matches.',
        price: 1599,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Stumps',
        image: 'https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/1280x1280/products/76381/12565/01__90796.1676021474.jpg?c=1'
    },
    {
        name: 'Cricket Helmet',
        description: 'Protective cricket helmet for players.',
        price: 1999,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Helmet',
        image: 'https://ayrtekcricket.wordpress.com/wp-content/uploads/2013/08/129374_cricket-helmet_02_front.jpg?w=300'
    },
    {
        name: 'Cricket Kit Bag',
        description: 'Spacious cricket kit bag for equipment.',
        price: 6999,
        category: 'cricket',
        brand: 'Puma',
        type: 'Kit bag',
        image: 'https://www.kdclick.com/s/637763a5ea78e200824eb640/64929efd2c5560003e421e2f/puma-cricket-kit-1--480x480.jpeg'
    },
    {
        name: 'Cricket Bat Grip',
        description: 'Cricket bat grip for better handling and control.',
        price: 799,
        category: 'cricket',
        brand: 'Puma',
        type: 'Bat Grip',
        image: 'https://rukminim2.flixcart.com/image/750/900/xif0q/grip/x/m/v/future-cricket-bat-grip-future-puma-original-imagvuzschjqhcfb.jpeg?q=20&crop=false'
    },
    {
        name: 'Cricket Arm Guard',
        description: 'Cricket arm guard for protection while batting.',
        price: 1499,
        category: 'cricket',
        brand: 'Puma',
        type: 'Arm Guard',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrDE5eVPE4qX2mUYAgqHS2HzoFQ4bwegzsnQ&s'
    },
    {
        name: 'Cricket Cap',
        description: 'Stylish cricket cap for sun protection.',
        price: 1299,
        category: 'cricket',
        brand: 'Puma',
        type: 'Cap',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrC-27xqL4mflxWpm-7caiuIsYoTzm9Z-ILA&s'
    },
    {
        name: 'Cricket Wicket Keeping Gloves',
        description: 'Specialized gloves for wicket keepers in cricket.',
        price: 2999,
        category: 'cricket',
        brand: 'Puma',
        type: 'Wicket Keeping Gloves',
        image: 'https://5.imimg.com/data5/LI/XP/HI/SELLER-1399525/puma-wicket-keeping-gloves.jpg'
    },
    {
        name: 'Cricket Bat',
        description: 'High-performance cricket bat for professional players.',
        price: 13499,
        category: 'cricket',
        brand: 'Reebok',
        type: 'Bat',
        image: 'https://www.tcscricket.com/wp-content/uploads/2023/10/REEBOK-PLAYERS-EDITION-PRO-ENGLISH-WILLOW-CRICKET-BAT-1.jpg'
    },
    {
        name: 'Cricket Gloves',
        description: 'Comfortable and durable cricket gloves.',
        price: 3499,
        category: 'cricket',
        brand: 'Reebok',
        type: 'Gloves',
        image: 'https://5.imimg.com/data5/ANDROID/Default/2023/9/346243829/OX/XB/CY/153249831/product-jpeg.jpg'
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
