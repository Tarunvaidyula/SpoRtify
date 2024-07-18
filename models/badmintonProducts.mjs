import {Product} from './database.mjs';

export const badmintonProducts = [
    {
        name: 'Yonex Badminton Racket',
        description: 'High-performance badminton racket from Yonex.',
        price: 7999,
        category: 'badminton',
        brand: 'Yonex',
        type: 'Racket',
        image: 'https://m.media-amazon.com/images/I/61qYCfbe6EL._AC_UF894,1000_QL80_.jpg'
    },
    {
        name: 'Li-Ning Badminton Shuttlecock',
        description: 'Premium badminton shuttlecocks from Li-Ning.',
        price: 2999,
        category: 'badminton',
        brand: 'Li-Ning',
        type: 'Shuttlecock',
        image: 'https://www.asiansports.in/cdn/shop/files/li-ning-champ-76-1.png?v=1683709638'
    },
    {
        name: 'Yonex Badminton Grip',
        description: 'Durable badminton grip tape from Yonex.',
        price: 499,
        category: 'badminton',
        brand: 'Yonex',
        type: 'Grip',
        image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/RG/VH/GY/111519400/badminton-grip-yonex-500x500.jpg'
    },
    {
        name: 'Li-Ning Badminton Bag',
        description: 'Spacious badminton bag from Li-Ning.',
        price: 3999,
        category: 'badminton',
        brand: 'Li-Ning',
        type: 'Bag',
        image: 'https://m.media-amazon.com/images/I/61jgAvmFg9L.jpg'
    },
    {
        name: 'Yonex Badminton String',
        description: 'High-quality badminton string from Yonex.',
        price: 999,
        category: 'badminton',
        brand: 'Yonex',
        type: 'String',
        image: 'https://www.yonex.com/media/catalog/product/b/g/bgas_011_ex_pac.png?quality=80&fit=bounds&height=819&width=600&canvas=600:819'
    },
    {
        name: 'Victor Badminton Grip Powder',
        description: 'Grip powder for badminton players from Victor.',
        price: 299,
        category: 'badminton',
        brand: 'Victor',
        type: 'Grip Powder',
        image: 'https://images-eu.ssl-images-amazon.com/images/I/4117XTb8LpL._AC_UL750_SR750,750_.jpg'
    },
    {
        name: 'Victor Badminton Socks',
        description: 'Comfortable badminton socks from Victor.',
        price: 499,
        category: 'badminton',
        brand: 'Victor',
        type: 'Socks',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSmxtdC3LUBDET3KiruNQbksR0YCTsgEhPig&s'
    },
    {
        name: 'Yonex Badminton Wristband',
        description: 'Wristband for badminton players from Yonex.',
        price: 299,
        category: 'badminton',
        brand: 'Yonex',
        type: 'Wristband',
        image: 'https://5.imimg.com/data5/AM/QK/OB/SELLER-37667346/yonex-ac489ex-wrist-band.jpg'
    },
    {
        name: 'Li-Ning Badminton Cap',
        description: 'Cap for badminton players from Li-Ning.',
        price: 499,
        category: 'badminton',
        brand: 'Li-Ning',
        type: 'Cap',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8yqMfD3dgW_VlMkc1lBdJNzb3JHQVMZeAVQ&s'
    },
    {
        name: 'Yonex Badminton Sling Bag',
        description: 'Sling bag for badminton equipment from Yonex.',
        price: 2999,
        category: 'badminton',
        brand: 'Yonex',
        type: 'Sling Bag',
        image: 'https://m.media-amazon.com/images/I/9119dF8LQQL.jpg'
    },
    {
        name: 'Li-Ning Badminton Wrist Support',
        description: 'Wrist support for badminton players from Li-Ning.',
        price: 999,
        category: 'badminton',
        brand: 'Li-Ning',
        type: 'Wrist Support',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBo_vTQN9EeCwAL7I-yNmeSORRywA16pU8AQ&s'
    },
    {
        name: 'Yonex Badminton Kit',
        description: 'Kitbag for badminton equipment from Yonex.',
        price: 5999,
        category: 'badminton',
        brand: 'Yonex',
        type: 'Kit bag',
        image: 'https://rukminim2.flixcart.com/image/850/1000/jsoyrgw0/sport-bag/d/h/h/l-9829lx-tour-edition-badminton-kit-bag-9829lx-yonex-70-original-imafe6wzdqpzvzj4.jpeg?q=90&crop=false'
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
