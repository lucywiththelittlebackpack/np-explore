import { Park } from '../types';
import { wildlifeData } from './wildlife';
import { accommodationData } from './accommodations';

// Helper to find wildlife by ID
const getWildlife = (ids: string[]) => wildlifeData.filter(w => ids.includes(w.id));
const getAccommodations = (ids: string[]) => accommodationData.filter(a => ids.includes(a.id));

export const parks: Park[] = [
    // --- North America ---
    {
        id: 'p2',
        slug: 'yellowstone',
        name: 'Yellowstone National Park',
        location: 'USA',
        coordinates: { lat: 44.42, lng: -110.58 },
        description: 'The first national park in the world, known for its wildlife and geothermal features.',
        heroImage: 'https://images.unsplash.com/photo-1570470276043-874a41ad9b40?auto=format&fit=crop&q=80&w=1600',
        gallery: [
            'https://images.unsplash.com/photo-1618123069712-9547f645126d?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1570470276043-874a41ad9b40?auto=format&fit=crop&q=80&w=800'
        ],
        wildlife: getWildlife(['w_bison', 'w_grizzly', 'w_wolf', 'w_bald_eagle']),
        accommodation: getAccommodations(['a2']),
        highlights: ['Old Faithful', 'Grand Prismatic Spring', 'Bison herds'],
        bestSeason: 'Summer (June-Aug)',
        activities: ['Hiking', 'Camping', 'Geology'],
    },
    {
        id: 'p_yosemite',
        slug: 'yosemite',
        name: 'Yosemite National Park',
        location: 'USA',
        coordinates: { lat: 37.8651, lng: -119.5383 },
        description: 'Famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.',
        heroImage: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?auto=format&fit=crop&q=80&w=1600',
        gallery: [
            'https://images.unsplash.com/photo-1484366688190-bc82d6066dbd?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&q=80&w=800'
        ],
        wildlife: getWildlife(['w_bald_eagle', 'w_grizzly']), // Note: Grizzlies are extirpated from CA, but keeping for demo or replacing with Black Bear if strict accuracy needed. Sticking to available IDs.
        accommodation: getAccommodations(['a_yosemite_lodge']),
        highlights: ['Half Dome', 'El Capitan', 'Yosemite Falls'],
        bestSeason: 'Spring (May-June)',
        activities: ['Climbing', 'Hiking', 'Photography'],
    },
    {
        id: 'p_banff',
        slug: 'banff',
        name: 'Banff National Park',
        location: 'Canada',
        coordinates: { lat: 51.4968, lng: -115.9281 },
        description: 'Canada\'s oldest national park, located in the Rocky Mountains. Known for its turquoise glacial lakes.',
        heroImage: 'https://images.unsplash.com/photo-1561134643-668f9057cce4?auto=format&fit=crop&q=80&w=1600',
        gallery: [
            'https://images.unsplash.com/photo-1609863528735-f547215190d4?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1561134643-668f9057cce4?auto=format&fit=crop&q=80&w=800'
        ],
        wildlife: getWildlife(['w_grizzly', 'w_wolf', 'w_bald_eagle']),
        accommodation: getAccommodations(['a_banff_springs']),
        highlights: ['Lake Louise', 'Moraine Lake', 'Icefields Parkway'],
        bestSeason: 'Summer (July-Aug) or Winter for Skiing',
        activities: ['Hiking', 'Skiing', 'Canoeing'],
    },

    // --- South America ---
    {
        id: 'p1',
        slug: 'monteverde-cloud-forest',
        name: 'Monteverde Cloud Forest',
        location: 'Costa Rica',
        coordinates: { lat: 10.30, lng: -84.80 },
        description: 'A biological reserve located along the Cordillera de Tilarán. Famous for its biodiversity and the Resplendent Quetzal.',
        heroImage: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1600',
        gallery: [
            'https://images.unsplash.com/photo-1518182170546-0766bc6f9213?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800'
        ],
        wildlife: getWildlife(['w1', 'w3', 'w5', 'w2']), // Quetzal, Toucan, Jaguar, Macaw
        accommodation: getAccommodations(['a1']),
        highlights: ['Hanging Bridges', 'Quetzal sightings', 'Night walks'],
        bestSeason: 'Dry Season (Dec-April)',
        activities: ['Birding', 'Hiking', 'Photography'],
    },
    {
        id: 'p4',
        slug: 'amazon-rainforest',
        name: 'Amazon Rainforest',
        location: 'Brazil/Peru',
        coordinates: { lat: -3.46, lng: -62.21 },
        description: 'The world\'s largest tropical rainforest, famed for its biodiversity.',
        heroImage: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&q=80&w=1600',
        gallery: [
            'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800'
        ],
        wildlife: getWildlife(['w2', 'w4', 'w5']), // Macaw, Harpy Eagle, Jaguar
        accommodation: getAccommodations(['a4']),
        highlights: ['River cruises', 'Jungle treks', 'Indigenous culture'],
        bestSeason: 'Low Water Season (July-Dec)',
        activities: ['Birding', 'Adventure', 'Culture'],
    },
    {
        id: 'p5',
        slug: 'galapagos-islands',
        name: 'Galápagos Islands',
        location: 'Ecuador',
        coordinates: { lat: -0.95, lng: -90.96 },
        description: 'A volcanic archipelago in the Pacific Ocean. Its isolated terrain shelters a diversity of plant and animal species.',
        heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1600',
        gallery: [
            'https://images.unsplash.com/photo-1501854140884-074bf64cad1c?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800'
        ],
        wildlife: getWildlife(['w8', 'w_blue_footed_booby', 'w_marine_iguana', 'w_sea_turtle']),
        accommodation: [], // Often boat based
        highlights: ['Marine iguanas', 'Blue-footed boobies', 'Snorkeling'],
        bestSeason: 'Warm Season (Dec-May)',
        activities: ['Snorkeling', 'Birding', 'Photography'],
    },
    {
        id: 'p_torres',
        slug: 'torres-del-paine',
        name: 'Torres del Paine',
        location: 'Chile',
        coordinates: { lat: -50.9423, lng: -73.4068 },
        description: 'Known for its soaring mountains, bright blue icebergs that cleave from glaciers and golden pampas (grasslands).',
        heroImage: 'https://images.unsplash.com/photo-1558517286-6b7b81953cb5?auto=format&fit=crop&q=80&w=1600',
        gallery: [
            'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=800'
        ],
        wildlife: getWildlife(['w_guanaco', 'w_condor']),
        accommodation: getAccommodations(['a_torres_camp']),
        highlights: ['The Towers', 'Grey Glacier', 'W Trek'],
        bestSeason: 'Summer (Dec-Feb)',
        activities: ['Trekking', 'Photography', 'Climbing'],
    },

    // --- Africa ---
    {
        id: 'p3',
        slug: 'kruger-national-park',
        name: 'Kruger National Park',
        location: 'South Africa',
        coordinates: { lat: -23.98, lng: 31.55 },
        description: 'One of Africa\'s largest game reserves. High density of wild animals including the Big 5.',
        heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1600',
        gallery: [
            'https://images.unsplash.com/photo-1534177616072-ef7dc12044f9?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80&w=800'
        ],
        wildlife: getWildlife(['w6', 'w7']), // Elephant, Lion
        accommodation: getAccommodations(['a3']),
        highlights: ['Big 5 Safari', 'Bush walks', 'Sunset drives'],
        bestSeason: 'Dry Season (May-Sept)',
        activities: ['Safari', 'Photography', 'Birding'],
    },
    {
        id: 'p_serengeti',
        slug: 'serengeti',
        name: 'Serengeti National Park',
        location: 'Tanzania',
        coordinates: { lat: -2.1540, lng: 34.6857 },
        description: 'Famous for its massive annual migration of wildebeest and zebra.',
        heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1600', // Reusing safari image or find new
        gallery: [
            'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800'
        ],
        wildlife: getWildlife(['w6', 'w7']),
        accommodation: getAccommodations(['a_serengeti_lodge']),
        highlights: ['Great Migration', 'Hot Air Balloon Safari', 'Ngorongoro Crater nearby'],
        bestSeason: 'June-Oct (Migration)',
        activities: ['Safari', 'Ballooning'],
    },

    // --- Asia & Oceania ---
    {
        id: 'p_fuji',
        slug: 'fuji-hakone-izu',
        name: 'Fuji-Hakone-Izu',
        location: 'Japan',
        coordinates: { lat: 35.3606, lng: 138.7274 },
        description: 'Includes Mount Fuji, the Five Lakes, Hakone, the Izu Peninsula, and the Izu Islands.',
        heroImage: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&q=80&w=1600',
        gallery: [
            'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800'
        ],
        wildlife: [], // Japan wildlife not in current list, maybe add macaque later
        accommodation: getAccommodations(['a_fuji_ryokan']),
        highlights: ['Mt Fuji Views', 'Onsens', 'Lake Ashi'],
        bestSeason: 'Spring (Cherry Blossoms) or Autumn',
        activities: ['Hiking', 'Hot Springs', 'Sightseeing'],
    },
    {
        id: 'p_zhangjiajie',
        slug: 'zhangjiajie',
        name: 'Zhangjiajie National Forest Park',
        location: 'China',
        coordinates: { lat: 29.3151, lng: 110.4340 },
        description: 'Famous for its pillar-like formations that inspired the floating mountains in Avatar.',
        heroImage: 'https://images.unsplash.com/photo-1514920735211-8c697444a248??auto=format&fit=crop&q=80&w=1600',
        gallery: [
            'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1474401915596-2c5788dfc97c?auto=format&fit=crop&q=80&w=800'
        ],
        wildlife: getWildlife(['w_panda']), // Illustrative
        accommodation: [],
        highlights: ['Avatar Mountains', 'Glass Bridge', 'Tianmen Mountain'],
        bestSeason: 'April-Oct',
        activities: ['Hiking', 'Photography'],
    },
    {
        id: 'p_komodo',
        slug: 'komodo-national-park',
        name: 'Komodo National Park',
        location: 'Indonesia',
        coordinates: { lat: -8.5797, lng: 119.4854 },
        description: 'Founded to protect the Komodo dragon, the world\'s largest lizard.',
        heroImage: 'https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?auto=format&fit=crop&q=80&w=1600',
        gallery: [
            'https://images.unsplash.com/photo-1570691079236-4bca6c45d440?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=800'
        ],
        wildlife: getWildlife(['w_komodo', 'w_sea_turtle', 'w_clownfish']),
        accommodation: [], // Boat based usually
        highlights: ['Pink Beach', 'Komodo Dragons', 'Padar Island Viewpoint'],
        bestSeason: 'Dry Season (April-Dec)',
        activities: ['Diving', 'Trekking', 'Sailing'],
    },
    {
        id: 'p_barrier_reef',
        slug: 'great-barrier-reef',
        name: 'Great Barrier Reef',
        location: 'Australia',
        coordinates: { lat: -18.2871, lng: 147.6992 },
        description: 'The world\'s largest coral reef system, composed of over 2,900 individual reefs.',
        heroImage: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=1600',
        gallery: [
            'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1582967788606-a171f1080ca8?auto=format&fit=crop&q=80&w=800'
        ],
        wildlife: getWildlife(['w_sea_turtle', 'w_clownfish', 'w_kangaroo']), // Kangaroo on islands/coast
        accommodation: getAccommodations(['a_reef_resort']),
        highlights: ['Heart Reef', 'Whitehaven Beach', 'Marine Life'],
        bestSeason: 'June-Oct',
        activities: ['Diving', 'Snorkeling', 'Helicopter Tours'],
    },
];
