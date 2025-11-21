import { Park, Wildlife, Accommodation, Collection } from './types';

// --- Wildlife Data ---
const wildlifeData: Wildlife[] = [
    // Birds (Expanded for Bird Watcher Flow)
    {
        id: 'w1',
        name: 'Resplendent Quetzal',
        scientificName: 'Pharomachrus mocinno',
        type: 'Bird',
        rarity: 'Rare',
        description: 'A vibrant bird found in the cloud forests of Central America, known for its long tail feathers.',
        image: 'https://images.unsplash.com/photo-1480044965905-02098d419e96?auto=format&fit=crop&q=80&w=800',
        bestTime: 'Breeding season (March-June)',
        seenAt: ['p1'],
    },
    {
        id: 'w2',
        name: 'Scarlet Macaw',
        scientificName: 'Ara macao',
        type: 'Bird',
        rarity: 'Uncommon',
        description: 'One of the largest and most colorful parrots in the world.',
        image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb8?auto=format&fit=crop&q=80&w=800',
        bestTime: 'Year-round, early morning',
        seenAt: ['p1', 'p4'],
    },
    {
        id: 'w3',
        name: 'Keel-billed Toucan',
        scientificName: 'Ramphastos sulfuratus',
        type: 'Bird',
        rarity: 'Common',
        description: 'Known for its colorful beak, this toucan is a symbol of the tropical rainforest.',
        image: 'https://images.unsplash.com/photo-1551893478-d726eaf0442c?auto=format&fit=crop&q=80&w=800',
        bestTime: 'Morning and late afternoon',
        seenAt: ['p1'],
    },
    {
        id: 'w4',
        name: 'Harpy Eagle',
        scientificName: 'Harpia harpyja',
        type: 'Bird',
        rarity: 'Endangered',
        description: 'The most powerful eagle in the Americas, hunting sloths and monkeys.',
        image: 'https://images.unsplash.com/photo-1508556497405-ed7dcd94acfc?auto=format&fit=crop&q=80&w=800',
        bestTime: 'Mid-day thermals',
        seenAt: ['p4'],
    },
    // Mammals
    {
        id: 'w5',
        name: 'Jaguar',
        scientificName: 'Panthera onca',
        type: 'Mammal',
        rarity: 'Endangered',
        description: 'The largest cat species in the Americas and the third-largest in the world.',
        image: 'https://images.unsplash.com/photo-1615963244664-5b845b2025ee?auto=format&fit=crop&q=80&w=800',
        bestTime: 'Dawn and Dusk',
        seenAt: ['p1', 'p4'],
    },
    {
        id: 'w6',
        name: 'African Elephant',
        scientificName: 'Loxodonta africana',
        type: 'Mammal',
        rarity: 'Vulnerable',
        description: 'The largest land animal, known for its intelligence and strong social bonds.',
        image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&q=80&w=800',
        bestTime: 'Dry season at waterholes',
        seenAt: ['p3'],
    },
    {
        id: 'w7',
        name: 'Lion',
        scientificName: 'Panthera leo',
        type: 'Mammal',
        rarity: 'Vulnerable',
        description: 'The king of beasts, living in prides in the African savannah.',
        image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&q=80&w=800',
        bestTime: 'Early morning or night',
        seenAt: ['p3'],
    },
    // Reptiles
    {
        id: 'w8',
        name: 'Galápagos Giant Tortoise',
        scientificName: 'Chelonoidis niger',
        type: 'Reptile',
        rarity: 'Vulnerable',
        description: 'The largest living species of tortoise, native to the Galápagos Islands.',
        image: 'https://images.unsplash.com/photo-1551732998-957e29ec95d5?auto=format&fit=crop&q=80&w=800',
        bestTime: 'Cooler parts of the day',
        seenAt: ['p5'],
    },
];

// --- Accommodation Data ---
const accommodationData: Accommodation[] = [
    {
        id: 'a1',
        name: 'Cloud Forest Lodge',
        type: 'Lodge',
        priceRange: 'High',
        description: 'Eco-friendly lodge nestled in the heart of the cloud forest with private trails.',
        amenities: ['WiFi', 'Restaurant', 'Guided Tours', 'Private Balcony'],
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800',
        parkId: 'p1',
        distance: '0.5 km from entrance',
        rating: 4.8,
    },
    {
        id: 'a2',
        name: 'Old Faithful Inn',
        type: 'Hotel',
        priceRange: 'High',
        description: 'Historic log hotel located within view of the famous Old Faithful Geyser.',
        amenities: ['Restaurant', 'Gift Shop', 'Lobby Fireplace', 'Tours'],
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
        parkId: 'p2',
        distance: 'Inside Park',
        rating: 4.6,
    },
    {
        id: 'a3',
        name: 'Savannah Tented Camp',
        type: 'Campsite',
        priceRange: 'Luxury',
        description: 'Luxury glamping experience with direct views of the wildlife plains.',
        amenities: ['All-inclusive', 'Game Drives', 'Pool', 'Bar'],
        image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=800',
        parkId: 'p3',
        distance: 'Inside Park',
        rating: 4.9,
    },
    {
        id: 'a4',
        name: 'Rainforest Eco-Cabins',
        type: 'Cabin',
        priceRange: 'Medium',
        description: 'Rustic cabins immersed in the Amazon rainforest sounds.',
        amenities: ['Kitchenette', 'Hammocks', 'River Access'],
        image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800',
        parkId: 'p4',
        distance: '5 km by boat',
        rating: 4.5,
    },
];

// --- Parks Data ---
const parks: Park[] = [
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
        wildlife: [wildlifeData[0], wildlifeData[2], wildlifeData[4]], // Quetzal, Toucan, Jaguar
        accommodation: [accommodationData[0]],
        highlights: ['Hanging Bridges', 'Quetzal sightings', 'Night walks'],
        bestSeason: 'Dry Season (Dec-April)',
        activities: ['Birding', 'Hiking', 'Photography'],
    },
    {
        id: 'p2',
        slug: 'yellowstone',
        name: 'Yellowstone National Park',
        location: 'USA',
        coordinates: { lat: 44.42, lng: -110.58 },
        description: 'The first national park in the world, known for its wildlife and geothermal features.',
        heroImage: 'https://images.unsplash.com/photo-1573459807204-0357dbe972d3?auto=format&fit=crop&q=80&w=1600',
        gallery: [
            'https://images.unsplash.com/photo-1490260400179-d656f04de422?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1518098268026-4e1877433665?auto=format&fit=crop&q=80&w=800'
        ],
        wildlife: [], // Add bears/wolves if needed
        accommodation: [accommodationData[1]],
        highlights: ['Old Faithful', 'Grand Prismatic Spring', 'Bison herds'],
        bestSeason: 'Summer (June-Aug)',
        activities: ['Hiking', 'Camping', 'Geology'],
    },
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
        wildlife: [wildlifeData[5], wildlifeData[6]], // Elephant, Lion
        accommodation: [accommodationData[2]],
        highlights: ['Big 5 Safari', 'Bush walks', 'Sunset drives'],
        bestSeason: 'Dry Season (May-Sept)',
        activities: ['Safari', 'Photography', 'Birding'],
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
        wildlife: [wildlifeData[1], wildlifeData[3], wildlifeData[4]], // Macaw, Harpy Eagle, Jaguar
        accommodation: [accommodationData[3]],
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
        wildlife: [wildlifeData[7]], // Tortoise
        accommodation: [],
        highlights: ['Marine iguanas', 'Blue-footed boobies', 'Snorkeling'],
        bestSeason: 'Warm Season (Dec-May)',
        activities: ['Snorkeling', 'Birding', 'Photography'],
    },
];

// --- Collections Data ---
const collections: Collection[] = [
    {
        id: 'c1',
        slug: 'bird-watchers-paradise',
        title: 'Bird Watcher\'s Paradise',
        description: 'Top destinations for spotting rare and exotic birds.',
        coverImage: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=800',
        parks: [parks[0], parks[3], parks[4]], // Monteverde, Amazon, Galapagos
    },
    {
        id: 'c2',
        slug: 'big-game-safari',
        title: 'Big Game Safari',
        description: 'Experience the thrill of seeing the world\'s largest land mammals.',
        coverImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800',
        parks: [parks[2], parks[1]], // Kruger, Yellowstone
    },
    {
        id: 'c3',
        slug: 'tropical-escapes',
        title: 'Tropical Escapes',
        description: 'Immerse yourself in the lush greenery of the world\'s rainforests.',
        coverImage: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800',
        parks: [parks[0], parks[3]], // Monteverde, Amazon
    },
];

// --- Helper Functions ---
export function getParks(): Park[] {
    return parks;
}

export function getParkBySlug(slug: string): Park | undefined {
    return parks.find((park) => park.slug === slug);
}

export function getWildlife(): Wildlife[] {
    return wildlifeData;
}

export function getWildlifeById(id: string): Wildlife | undefined {
    return wildlifeData.find((w) => w.id === id);
}

export function getCollections(): Collection[] {
    return collections;
}

export function getCollectionBySlug(slug: string): Collection | undefined {
    return collections.find((c) => c.slug === slug);
}

export function getAccommodations(): Accommodation[] {
    return accommodationData;
}

export function searchParks(query: string): Park[] {
    const lowerQuery = query.toLowerCase();
    return parks.filter((park) =>
        park.name.toLowerCase().includes(lowerQuery) ||
        park.location.toLowerCase().includes(lowerQuery) ||
        park.wildlife.some(w => w.name.toLowerCase().includes(lowerQuery)) ||
        park.activities?.some(a => a.toLowerCase().includes(lowerQuery))
    );
}
