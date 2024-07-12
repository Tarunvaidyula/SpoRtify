import { Product } from './database.mjs';

export const cricketProducts = [
    {
        name: 'Nike Cricket Bat',
        description: 'High-quality cricket bat for professional use.',
        price: 14999,
        category: 'cricket',
        brand: 'Nike',
        type: 'Bat',
        image: 'https://example.com/nike-cricket-bat.jpg'
    },
    {
        name: 'Adidas Cricket Gloves',
        description: 'Durable cricket gloves for players.',
        price: 3999,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Gloves',
        image: 'https://example.com/adidas-cricket-gloves.jpg'
    },
    {
        name: 'Puma Cricket Ball',
        description: 'High-quality cricket ball for matches.',
        price: 2999,
        category: 'cricket',
        brand: 'Puma',
        type: 'Ball',
        image: 'https://example.com/puma-cricket-ball.jpg'
    },
    {
        name: 'Nike Cricket Helmet',
        description: 'Protective cricket helmet for batsmen.',
        price: 5499,
        category: 'cricket',
        brand: 'Nike',
        type: 'Helmet',
        image: 'https://example.com/nike-cricket-helmet.jpg'
    },
    {
        name: 'Adidas Cricket Pads',
        description: 'Comfortable cricket pads for leg protection.',
        price: 4499,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Pads',
        image: 'https://example.com/adidas-cricket-pads.jpg'
    },
    {
        name: 'Puma Cricket Kit Bag',
        description: 'Spacious cricket kit bag for equipment.',
        price: 6999,
        category: 'cricket',
        brand: 'Puma',
        type: 'Kit Bag',
        image: 'https://example.com/puma-cricket-kit-bag.jpg'
    },
    {
        name: 'Nike Cricket Shoes',
        description: 'Lightweight cricket shoes for players.',
        price: 5999,
        category: 'cricket',
        brand: 'Nike',
        type: 'Shoes',
        image: 'https://example.com/nike-cricket-shoes.jpg'
    },
    {
        name: 'Adidas Cricket Thigh Guard',
        description: 'Protective cricket thigh guard for batsmen.',
        price: 1999,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Thigh Guard',
        image: 'https://example.com/adidas-cricket-thigh-guard.jpg'
    },
    {
        name: 'Puma Cricket Arm Guard',
        description: 'Cricket arm guard for protection while batting.',
        price: 1499,
        category: 'cricket',
        brand: 'Puma',
        type: 'Arm Guard',
        image: 'https://example.com/puma-cricket-arm-guard.jpg'
    },
    {
        name: 'Nike Cricket Cap',
        description: 'Stylish cricket cap for sun protection.',
        price: 1299,
        category: 'cricket',
        brand: 'Nike',
        type: 'Cap',
        image: 'https://example.com/nike-cricket-cap.jpg'
    },
    {
        name: 'Adidas Cricket Wicket Keeping Gloves',
        description: 'Specialized gloves for wicket keepers in cricket.',
        price: 2999,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Wicket Keeping Gloves',
        image: 'https://example.com/adidas-cricket-wicket-keeping-gloves.jpg'
    },
    {
        name: 'Puma Cricket Bat Grip',
        description: 'Cricket bat grip for better handling and control.',
        price: 799,
        category: 'cricket',
        brand: 'Puma',
        type: 'Bat Grip',
        image: 'https://example.com/puma-cricket-bat-grip.jpg'
    },
    {
        name: 'Nike Cricket Thigh Pad',
        description: 'Thigh pad for protection during cricket matches.',
        price: 999,
        category: 'cricket',
        brand: 'Nike',
        type: 'Thigh Pad',
        image: 'https://example.com/nike-cricket-thigh-pad.jpg'
    },
    {
        name: 'Adidas Cricket Stumps',
        description: 'Durable cricket stumps for matches.',
        price: 1599,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Stumps',
        image: 'https://example.com/adidas-cricket-stumps.jpg'
    },
    {
        name: 'Puma Cricket Thigh Guard',
        description: 'Cricket thigh guard for protection while batting.',
        price: 1799,
        category: 'cricket',
        brand: 'Puma',
        type: 'Thigh Guard',
        image: 'https://example.com/puma-cricket-thigh-guard.jpg'
    },
    {
        name: 'Nike Cricket Wicket Keeping Pads',
        description: 'Wicket keeping pads for cricket matches.',
        price: 3999,
        category: 'cricket',
        brand: 'Nike',
        type: 'Wicket Keeping Pads',
        image: 'https://example.com/nike-cricket-wicket-keeping-pads.jpg'
    },
    {
        name: 'Adidas Cricket Elbow Guard',
        description: 'Elbow guard for protection during cricket matches.',
        price: 1499,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Elbow Guard',
        image: 'https://example.com/adidas-cricket-elbow-guard.jpg'
    },
    {
        name: 'Puma Cricket Batting Gloves',
        description: 'Batting gloves for cricket players.',
        price: 2499,
        category: 'cricket',
        brand: 'Puma',
        type: 'Batting Gloves',
        image: 'https://example.com/puma-cricket-batting-gloves.jpg'
    },
    {
        name: 'Nike Cricket Abdominal Guard',
        description: 'Abdominal guard for cricket protection.',
        price: 799,
        category: 'cricket',
        brand: 'Nike',
        type: 'Abdominal Guard',
        image: 'https://example.com/nike-cricket-abdominal-guard.jpg'
    },
    {
        name: 'Adidas Cricket Fielding Sleeves',
        description: 'Sleeves for fielders in cricket matches.',
        price: 899,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Fielding Sleeves',
        image: 'https://example.com/adidas-cricket-fielding-sleeves.jpg'
    },
    {
        name: 'Puma Cricket Boundary Cones',
        description: 'Boundary cones for marking boundaries in cricket.',
        price: 599,
        category: 'cricket',
        brand: 'Puma',
        type: 'Boundary Cones',
        image: 'https://example.com/puma-cricket-boundary-cones.jpg'
    },
    {
        name: 'Nike Cricket Bowling Marker',
        description: 'Bowling marker for cricket matches.',
        price: 299,
        category: 'cricket',
        brand: 'Nike',
        type: 'Bowling Marker',
        image: 'https://example.com/nike-cricket-bowling-marker.jpg'
    },
    {
        name: 'Adidas Cricket Scorebook',
        description: 'Scorebook for recording cricket scores.',
        price: 499,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Scorebook',
        image: 'https://example.com/adidas-cricket-scorebook.jpg'
    },
    {
        name: 'Puma Cricket Fielding Hat',
        description: 'Hat for fielders in cricket matches.',
        price: 699,
        category: 'cricket',
        brand: 'Puma',
        type: 'Fielding Hat',
        image: 'https://example.com/puma-cricket-fielding-hat.jpg'
    },
    {
        name: 'Nike Cricket Umpire Counter',
        description: 'Counter for cricket umpires.',
        price: 399,
        category: 'cricket',
        brand: 'Nike',
        type: 'Umpire Counter',
        image: 'https://example.com/nike-cricket-umpire-counter.jpg'
    },
    {
        name: 'Adidas Cricket Bat Mallet',
        description: 'Bat mallet for cricket bat preparation.',
        price: 199,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Bat Mallet',
        image: 'https://example.com/adidas-cricket-bat-mallet.jpg'
    },
    {
        name: 'Puma Cricket Sun Hat',
        description: 'Sun hat for cricket matches.',
        price: 299,
        category: 'cricket',
        brand: 'Puma',
        type: 'Sun Hat',
        image: 'https://example.com/puma-cricket-sun-hat.jpg'
    },
    {
        name: 'Nike Cricket Grip Cone',
        description: 'Grip cone for cricket bat grips.',
        price: 99,
        category: 'cricket',
        brand: 'Nike',
        type: 'Grip Cone',
        image: 'https://example.com/nike-cricket-grip-cone.jpg'
    },
    {
        name: 'Adidas Cricket Boundary Flags',
        description: 'Boundary flags for marking boundaries in cricket.',
        price: 399,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Boundary Flags',
        image: 'https://example.com/adidas-cricket-boundary-flags.jpg'
    },
    {
        name: 'Puma Cricket Scoring Pads',
        description: 'Scoring pads for cricket scorers.',
        price: 299,
        category: 'cricket',
        brand: 'Puma',
        type: 'Scoring Pads',
        image: 'https://example.com/puma-cricket-scoring-pads.jpg'
    },
    {
        name: 'Nike Cricket Umpire Hat',
        description: 'Umpire hat for cricket matches.',
        price: 199,
        category: 'cricket',
        brand: 'Nike',
        type: 'Umpire Hat',
        image: 'https://example.com/nike-cricket-umpire-hat.jpg'
    },
    {
        name: 'Adidas Cricket Wicket Cover',
        description: 'Cover for cricket wickets.',
        price: 599,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Wicket Cover',
        image: 'https://example.com/adidas-cricket-wicket-cover.jpg'
    },
    {
        name: 'Puma Cricket Fielding Gloves',
        description: 'Fielding gloves for cricket fielders.',
        price: 499,
        category: 'cricket',
        brand: 'Puma',
        type: 'Fielding Gloves',
        image: 'https://example.com/puma-cricket-fielding-gloves.jpg'
    },
    {
        name: 'Nike Cricket Bails',
        description: 'Cricket bails for wickets.',
        price: 199,
        category: 'cricket',
        brand: 'Nike',
        type: 'Bails',
        image: 'https://example.com/nike-cricket-bails.jpg'
    },
    {
        name: 'Adidas Cricket Pitch Marker',
        description: 'Pitch marker for cricket pitches.',
        price: 999,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Pitch Marker',
        image: 'https://example.com/adidas-cricket-pitch-marker.jpg'
    },
    {
        name: 'Puma Cricket Batting Pads',
        description: 'Batting pads for cricket players.',
        price: 2499,
        category: 'cricket',
        brand: 'Puma',
        type: 'Batting Pads',
        image: 'https://example.com/puma-cricket-batting-pads.jpg'
    },
    {
        name: 'Nike Cricket Arm Sleeves',
        description: 'Arm sleeves for cricket players.',
        price: 599,
        category: 'cricket',
        brand: 'Nike',
        type: 'Arm Sleeves',
        image: 'https://example.com/nike-cricket-arm-sleeves.jpg'
    },
    {
        name: 'Adidas Cricket Scoreboard',
        description: 'Electronic scoreboard for cricket matches.',
        price: 29999,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Scoreboard',
        image: 'https://example.com/adidas-cricket-scoreboard.jpg'
    },
    {
        name: 'Puma Cricket Coaching Stumps',
        description: 'Coaching stumps for cricket coaches.',
        price: 1499,
        category: 'cricket',
        brand: 'Puma',
        type: 'Coaching Stumps',
        image: 'https://example.com/puma-cricket-coaching-stumps.jpg'
    },
    {
        name: 'Nike Cricket Pitch Roller',
        description: 'Pitch roller for cricket pitch maintenance.',
        price: 29999,
        category: 'cricket',
        brand: 'Nike',
        type: 'Pitch Roller',
        image: 'https://example.com/nike-cricket-pitch-roller.jpg'
    },
    {
        name: 'Adidas Cricket Boundary Ropes',
        description: 'Boundary ropes for marking cricket boundaries.',
        price: 999,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Boundary Ropes',
        image: 'https://example.com/adidas-cricket-boundary-ropes.jpg'
    },
    {
        name: 'Puma Cricket Stump Gauge',
        description: 'Stump gauge for checking cricket stumps alignment.',
        price: 399,
        category: 'cricket',
        brand: 'Puma',
        type: 'Stump Gauge',
        image: 'https://example.com/puma-cricket-stump-gauge.jpg'
    },
    {
        name: 'Nike Cricket Umpire Counter',
        description: 'Umpire counter for cricket umpires.',
        price: 399,
        category: 'cricket',
        brand: 'Nike',
        type: 'Umpire Counter',
        image: 'https://example.com/nike-cricket-umpire-counter.jpg'
    },
    {
        name: 'Adidas Cricket Helmet Cage',
        description: 'Helmet cage for attaching to cricket helmets.',
        price: 1999,
        category: 'cricket',
        brand: 'Adidas',
        type: 'Helmet Cage',
        image: 'https://example.com/adidas-cricket-helmet-cage.jpg'
    },
    {
        name: 'Puma Cricket Umpire Hat',
        description: 'Umpire hat for cricket matches.',
        price: 299,
        category: 'cricket',
        brand: 'Puma',
        type: 'Umpire Hat',
        image: 'https://example.com/puma-cricket-umpire-hat.jpg'
    },
    {
        name: 'Reebok Cricket Bat',
        description: 'High-performance cricket bat for professional players.',
        price: 13499,
        category: 'cricket',
        brand: 'Reebok',
        type: 'Bat',
        image: 'https://example.com/reebok-cricket-bat.jpg'
    },
    {
        name: 'Reebok Cricket Gloves',
        description: 'Comfortable and durable cricket gloves.',
        price: 3499,
        category: 'cricket',
        brand: 'Reebok',
        type: 'Gloves',
        image: 'https://example.com/reebok-cricket-gloves.jpg'
    },
    {
        name: 'Reebok Cricket Ball',
        description: 'High-quality cricket ball for match play.',
        price: 2799,
        category: 'cricket',
        brand: 'Reebok',
        type: 'Ball',
        image: 'https://example.com/reebok-cricket-ball.jpg'
    },
    {
        name: 'Reebok Cricket Helmet',
        description: 'Protective helmet with excellent comfort.',
        price: 4999,
        category: 'cricket',
        brand: 'Reebok',
        type: 'Helmet',
        image: 'https://example.com/reebok-cricket-helmet.jpg'
    },
    {
        name: 'Reebok Cricket Pads',
        description: 'Lightweight and protective cricket pads.',
        price: 3999,
        category: 'cricket',
        brand: 'Reebok',
        type: 'Pads',
        image: 'https://example.com/reebok-cricket-pads.jpg'
    },
    {
        name: 'Reebok Cricket Kit Bag',
        description: 'Spacious and durable cricket kit bag.',
        price: 6499,
        category: 'cricket',
        brand: 'Reebok',
        type: 'Kit Bag',
        image: 'https://example.com/reebok-cricket-kit-bag.jpg'
    },
    {
        name: 'Reebok Cricket Shoes',
        description: 'High-performance cricket shoes for enhanced agility.',
        price: 5499,
        category: 'cricket',
        brand: 'Reebok',
        type: 'Shoes',
        image: 'https://example.com/reebok-cricket-shoes.jpg'
    },
    {
        name: 'Reebok Cricket Thigh Guard',
        description: 'Thigh guard for optimal protection.',
        price: 1799,
        category: 'cricket',
        brand: 'Reebok',
        type: 'Thigh Guard',
        image: 'https://example.com/reebok-cricket-thigh-guard.jpg'
    },
    {
        name: 'Reebok Cricket Arm Guard',
        description: 'Arm guard for added protection while batting.',
        price: 1399,
        category: 'cricket',
        brand: 'Reebok',
        type: 'Arm Guard',
        image: 'https://example.com/reebok-cricket-arm-guard.jpg'
    },
    {
        name: 'Reebok Cricket Cap',
        description: 'Stylish cap for cricket players.',
        price: 999,
        category: 'cricket',
        brand: 'Reebok',
        type: 'Cap',
        image: 'https://example.com/reebok-cricket-cap.jpg'
    },
    {
        name: 'Reebok Cricket Wicket Keeping Gloves',
        description: 'Gloves designed for wicket keepers.',
        price: 2699,
        category: 'cricket',
        brand: 'Reebok',
        type: 'Wicket Keeping Gloves',
        image: 'https://example.com/reebok-cricket-wicket-keeping-gloves.jpg'
    },
    {
        name: 'Reebok Cricket Bat Grip',
        description: 'Cricket bat grip for improved handling.',
        price: 699,
        category: 'cricket',
        brand: 'Reebok',
        type: 'Bat Grip',
        image: 'https://example.com/reebok-cricket-bat-grip.jpg'
    },
    {
        name: 'Reebok Cricket Thigh Pad',
        description: 'Protective thigh pad for batting.',
        price: 899,
        category: 'cricket',
        brand: 'Reebok',
        type: 'Thigh Pad',
        image: 'https://example.com/reebok-cricket-thigh-pad.jpg'
    },
    {
        name: 'Reebok Cricket Stumps',
        description: 'Durable cricket stumps for practice and matches.',
        price: 1399,
        category: 'cricket',
        brand: 'Reebok',
        type: 'Stumps',
        image: 'https://example.com/reebok-cricket-stumps.jpg'
    },
    {
        name: 'Reebok Cricket Elbow Guard',
        description: 'Elbow guard for enhanced protection.',
        price: 1299,
        category: 'cricket',
        brand: 'Reebok',
        type: 'Elbow Guard',
        image: 'https://example.com/reebok-cricket-elbow-guard.jpg'
    },
    {
        name: 'Reebok Cricket Batting Gloves',
        description: 'High-quality batting gloves for comfort and grip.',
        price: 2199,
        category: 'cricket',
        brand: 'Reebok',
        type: 'Batting Gloves',
        image: 'https://example.com/reebok-cricket-batting-gloves.jpg'
    }
];

export async function seedCricketProducts() {
    try {
        for (const product of cricketProducts) {
            await Product.updateOne({ name: product.name }, { $setOnInsert: product }, { upsert: true });
            console.log(`Cricket product added: ${product.name}`);
        }
    } catch (error) {
        console.error('Error saving cricket products:', error);
    }
}
