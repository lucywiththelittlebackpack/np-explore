import { Park, Wildlife, Accommodation, Collection } from './types';

const wildlifeData: Wildlife[] = [
    // Birds
    {
        id: 'w1',
        name: 'Resplendent Quetzal',
        scientificName: 'Pharomachrus mocinno',
        type: 'Bird',
        rarity: 'Rare',
        description: 'A vibrant bird found in the cloud forests of Central America, known for its long tail feathers.',
        image: 'https://images.unsplash.com/photo-1596574427666-9f43e24d6954?auto=format&fit=crop&q=80&w=800',
        bestTime: 'Breeding season (March-June)',
    },
    {
        id: 'w3',
        name: 'Bald Eagle',
        scientificName: 'Haliaeetus leucocephalus',
        type: 'Bird',
        rarity: 'Common',
        description: 'A bird of prey found in North America. A sea eagle, it has two known subspecies and forms a species pair with the white-tailed eagle.',
        image: 'https://images.unsplash.com/photo-1589952283406-b53a7d1347e8?auto=format&fit=crop&q=80&w=800',
        bestTime: 'Winter',
    },
    {
        id: 'w5',
        name: 'Blue-footed Booby',
        scientificName: 'Sula nebouxii',
        type: 'Bird',
        rarity: 'Uncommon',
        description: 'A marine bird native to subtropical and tropical regions of the Pacific Ocean. It is one of six species of the genus Sula.',
        image: 'https://images.unsplash.com/photo-1551902783-255186746162?auto=format&fit=crop&q=80&w=800',
        bestTime: 'Year-round',
    },
    {
        id: 'w6',
        name: 'Lilac-breasted Roller',
        scientificName: 'Coracias caudatus',
        type: 'Bird',
        rarity: 'Common',
        description: 'Widely distributed in sub-Saharan Africa, this bird is known for its colorful plumage.',
        image: 'https://images.unsplash.com/photo-1544555029-5f2b594d54e2?auto=format&fit=crop&q=80&w=800',
        bestTime: 'Year-round',
    },
    // Mammals
    {
        id: 'w2',
        name: 'Jaguar',
        scientificName: 'Panthera onca',
        type: 'Mammal',
        rarity: 'Endangered',
        description: 'The largest cat species in the Americas, a solitary and opportunistic stalk-and-ambush predator.',
        image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&q=80&w=800',
        bestTime: 'Dry season, Early Morning',
    },
    {
        id: 'w4',
        name: 'Grizzly Bear',
        scientificName: 'Ursus arctos horribilis',
        type: 'Mammal',
        rarity: 'Uncommon',
        description: 'A large population of brown bear living in North America.',
        image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=800',
        bestTime: 'Summer, Early Morning',
    },
    {
        id: 'w7',
        name: 'African Elephant',
        scientificName: 'Loxodonta',
        type: 'Mammal',
        rarity: 'Vulnerable',
        description: 'The largest living land animal. Both male and female African elephants have tusks.',
        image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&q=80&w=800',
        bestTime: 'Dry Season (June-October)',
    },
    {
        id: 'w8',
        name: 'Marine Iguana',
        scientificName: 'Amblyrhynchus cristatus',
        type: 'Reptile',
        rarity: 'Vulnerable',
        description: 'An iguana found only on the Galápagos Islands that has the ability, unique among modern lizards, to forage in the sea.',
        image: 'https://images.unsplash.com/photo-1516820347238-026c6c6d2c66?auto=format&fit=crop&q=80&w=800',
        bestTime: 'Year-round',
    },
];

const accommodationData: Accommodation[] = [
    {
        id: 'a1',
        name: 'Cloud Forest Lodge',
        type: 'Lodge',
        priceRange: 'High',
        description: 'Eco-friendly lodge nestled in the heart of the cloud forest, perfect for birdwatching right from your balcony.',
        amenities: ['WiFi', 'Restaurant', 'Guided Tours', 'Balcony'],
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 'a2',
        name: 'Glacier View Cabins',
        type: 'Cabin',
        priceRange: 'Medium',
        description: 'Rustic cabins with stunning views of the glaciers and mountains.',
        amenities: ['Kitchenette', 'Heating', 'Fireplace'],
        image: 'https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 'a3',
        name: 'Savanna Tented Camp',
        type: 'Lodge',
        priceRange: 'Luxury',
        description: 'Experience the African bush in style with luxury tents overlooking a watering hole.',
        amenities: ['Pool', 'All-inclusive', 'Game Drives', 'Spa'],
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 'a4',
        name: 'Island Eco-Resort',
        type: 'Hotel',
        priceRange: 'High',
        description: 'Sustainable resort located on the beachfront, offering snorkeling and diving tours.',
        amenities: ['Beach Access', 'Dive Center', 'Restaurant'],
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800',
    },
];

export const parks: Park[] = [
    {
        id: 'p1',
        slug: 'monteverde-cloud-forest',
        name: 'Monteverde Cloud Forest Reserve',
        location: 'Costa Rica',
        coordinates: { lat: 10.30, lng: -84.80 },
        description: 'A biological reserve located along the Cordillera de Tilarán within the Puntarenas and Alajuela provinces. Famous for its biodiversity and the Resplendent Quetzal.',
        heroImage: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1600',
        gallery: [
            'https://images.unsplash.com/photo-1518182170546-0766bc6f9213?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800'
        ],
        wildlife: [wildlifeData[0], wildlifeData[4]], // Quetzal, Jaguar
        accommodation: [accommodationData[0]],
        highlights: ['Hanging Bridges', 'Quetzal sightings', 'Night walks'],
        bestSeason: 'Dry Season (Dec-April)',
    },
    {
        id: 'p2',
        slug: 'yellowstone',
        name: 'Yellowstone National Park',
        location: 'USA (Wyoming, Montana, Idaho)',
        coordinates: { lat: 44.42, lng: -110.58 },
        description: 'A nearly 3,500-sq.-mile wilderness recreation area atop a volcanic hot spot. Mostly in Wyoming, the park spreads into parts of Montana and Idaho too.',
        heroImage: 'https://images.unsplash.com/photo-1548588627-f978862b85e1?auto=format&fit=crop&q=80&w=1600',
        gallery: [
            'https://images.unsplash.com/photo-1574786198875-49f5d0996987?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1618506557292-ec1862b3c506?auto=format&fit=crop&q=80&w=800'
        ],
        wildlife: [wildlifeData[1], wildlifeData[5]], // Bald Eagle, Grizzly
        accommodation: [accommodationData[1]],
        highlights: ['Old Faithful', 'Grand Prismatic Spring', 'Wildlife watching'],
        bestSeason: 'Summer (June-August)',
    },
    {
        id: 'p3',
        slug: 'kruger-national-park',
        name: 'Kruger National Park',
        location: 'South Africa',
        coordinates: { lat: -23.98, lng: 31.55 },
        description: 'One of Africa’s largest game reserves. Its high density of wild animals includes the Big 5: lions, leopards, rhinos, elephants and buffalos.',
        heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1600',
        gallery: [
            'https://images.unsplash.com/photo-1534177616072-ef7dc12044f9?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&q=80&w=800'
        ],
        wildlife: [wildlifeData[6], wildlifeData[3]], // Elephant, Lilac-breasted Roller
        accommodation: [accommodationData[2]],
        highlights: ['Big 5 Safari', 'Birding', 'Bush Walks'],
        bestSeason: 'Dry Season (May-September)',
    },
    {
        id: 'p4',
        slug: 'galapagos-islands',
        name: 'Galápagos National Park',
        location: 'Ecuador',
        coordinates: { lat: -0.95, lng: -90.96 },
        description: 'A volcanic archipelago in the Pacific Ocean. It’s considered one of the world’s foremost destinations for wildlife-viewing.',
        heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1600',
        gallery: [
            'https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800'
        ],
        wildlife: [wildlifeData[2], wildlifeData[7]], // Blue-footed Booby, Marine Iguana
        accommodation: [accommodationData[3]],
        highlights: ['Snorkeling', 'Giant Tortoises', 'Darwin Research Station'],
        bestSeason: 'Dec-May (Warm/Wet), June-Nov (Cool/Dry)',
    },
];

export const collections: Collection[] = [
    {
        id: 'c1',
        slug: 'bird-watchers-paradise',
        title: 'Bird Watcher\'s Paradise',
        description: 'The ultimate destinations for spotting rare and exotic bird species.',
        coverImage: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=800',
        parks: [parks[0], parks[2], parks[3]], // Monteverde, Kruger, Galapagos
    },
    {
        id: 'c2',
        slug: 'big-game-safari',
        title: 'Big Game Safari',
        description: 'Experience the thrill of seeing large mammals in their natural habitat.',
        coverImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800',
        parks: [parks[2], parks[1]], // Kruger, Yellowstone
    },
    {
        id: 'c3',
        slug: 'tropical-escapes',
        title: 'Tropical Wildlife Escapes',
        description: 'Explore lush rainforests and pristine islands teeming with life.',
        coverImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800',
        parks: [parks[0], parks[3]], // Monteverde, Galapagos
    },
];

// Helper Functions

export function getAllParks(): Park[] {
    return parks;
}

export function getParkBySlug(slug: string): Park | undefined {
    return parks.find((p) => p.slug === slug);
}

export function searchParks(query: string): Park[] {
    const lowerQuery = query.toLowerCase();
    return parks.filter((p) =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.location.toLowerCase().includes(lowerQuery) ||
        p.wildlife.some(w => w.name.toLowerCase().includes(lowerQuery))
    );
}

export function getAllWildlife(): Wildlife[] {
    return wildlifeData;
}

export function getWildlifeById(id: string): Wildlife | undefined {
    return wildlifeData.find((w) => w.id === id);
}

export function getAllCollections(): Collection[] {
    return collections;
}

export function getCollectionBySlug(slug: string): Collection | undefined {
    return collections.find((c) => c.slug === slug);
}

export function getAllAccommodation(): Accommodation[] {
    return accommodationData;
}
