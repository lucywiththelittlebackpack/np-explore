import { Trip } from '../types';
import { parks } from './parks';

// Helper to get parks by ID
const getParks = (ids: string[]) => parks.filter(p => ids.includes(p.id));

export const trips: Trip[] = [
    {
        id: 'c1',
        slug: 'bird-watchers-paradise',
        title: 'Bird Watcher\'s Paradise',
        subTitle: 'Chasing Feathers Across Continents',
        description: 'A journey through the world\'s most diverse avian habitats. From the cloud forests of Costa Rica to the evolutionary wonders of the Galápagos.',
        coverImage: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=800',
        parks: getParks(['p1', 'p4', 'p5']), // Monteverde, Amazon, Galapagos
        duration: '12-14 Days',
        vibe: 'Wildlife',
        itinerary: [
            { day: 'Day 1-4', title: 'Monteverde Cloud Forest', description: 'Search for the Resplendent Quetzal in the misty canopy.', parkId: 'p1', activity: 'Guided Bird Walk' },
            { day: 'Day 5-9', title: 'Amazon Rainforest', description: 'Boat expeditions to spot Macaws and Harpy Eagles.', parkId: 'p4', activity: 'River Cruise' },
            { day: 'Day 10-14', title: 'Galápagos Islands', description: 'Endemic species like the Blue-footed Booby and Darwin\'s Finches.', parkId: 'p5', activity: 'Island Hopping' }
        ]
    },
    {
        id: 'c2',
        slug: 'big-game-safari',
        title: 'Big Game Safari',
        subTitle: 'Giants of the Earth',
        description: 'Experience the thrill of seeing the world\'s largest land mammals in their natural habitats.',
        coverImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800',
        parks: getParks(['p3', 'p_serengeti', 'p2']), // Kruger, Serengeti, Yellowstone
        duration: '14 Days',
        vibe: 'Adventure',
        itinerary: [
            { day: 'Day 1-5', title: 'Kruger National Park', description: 'The ultimate Big 5 safari experience in South Africa.', parkId: 'p3', activity: 'Game Drives' },
            { day: 'Day 6-10', title: 'Serengeti', description: 'Witness the Great Migration.', parkId: 'p_serengeti', activity: 'Balloon Safari' },
            { day: 'Day 11-14', title: 'Yellowstone', description: 'Tracking Bison and Wolves in America.', parkId: 'p2', activity: 'Wildlife Spotting' }
        ]
    },
    {
        id: 'c3',
        slug: 'mountain-majesties',
        title: 'Mountain Majesties',
        subTitle: 'Peaks and Valleys',
        description: 'Explore the most stunning mountain landscapes on the planet.',
        coverImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
        parks: getParks(['p_banff', 'p_torres', 'p_yosemite', 'p_zhangjiajie']),
        duration: '21 Days',
        vibe: 'Adventure',
        itinerary: [
            { day: 'Day 1-5', title: 'Banff', description: 'Turquoise lakes and rocky peaks.', parkId: 'p_banff', activity: 'Hiking' },
            { day: 'Day 6-10', title: 'Yosemite', description: 'Granite cliffs and waterfalls.', parkId: 'p_yosemite', activity: 'Climbing' },
            { day: 'Day 11-15', title: 'Torres del Paine', description: 'Patagonian wilderness.', parkId: 'p_torres', activity: 'Trekking' },
            { day: 'Day 16-21', title: 'Zhangjiajie', description: 'Floating mountains.', parkId: 'p_zhangjiajie', activity: 'Sightseeing' }
        ]
    },
    {
        id: 'c4',
        slug: 'island-escapes',
        title: 'Island Escapes',
        subTitle: 'Sun, Sand, and Sea',
        description: 'Discover the unique ecosystems of the world\'s most beautiful islands.',
        coverImage: 'https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?auto=format&fit=crop&q=80&w=800',
        parks: getParks(['p5', 'p_barrier_reef', 'p_komodo']),
        duration: '14 Days',
        vibe: 'Relaxed',
        itinerary: [
            { day: 'Day 1-5', title: 'Galápagos', description: 'Evolutionary wonders.', parkId: 'p5', activity: 'Snorkeling' },
            { day: 'Day 6-10', title: 'Great Barrier Reef', description: 'Underwater kaleidoscope.', parkId: 'p_barrier_reef', activity: 'Diving' },
            { day: 'Day 11-14', title: 'Komodo', description: 'Dragons and pink beaches.', parkId: 'p_komodo', activity: 'Boat Tour' }
        ]
    },
    {
        id: 'c5',
        slug: 'unesco-world-heritage',
        title: 'UNESCO Gems',
        subTitle: 'World Heritage Wonders',
        description: 'Protected sites recognized for their outstanding universal value to humanity.',
        coverImage: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&q=80&w=800',
        parks: getParks(['p2', 'p4', 'p5', 'p_fuji']),
        duration: '18 Days',
        vibe: 'Family',
        itinerary: [
            { day: 'Day 1-4', title: 'Yellowstone', description: 'Geology and history.', parkId: 'p2', activity: 'Educational Tours' },
            { day: 'Day 5-9', title: 'Amazon', description: 'Lungs of the earth.', parkId: 'p4', activity: 'Eco-tours' },
            { day: 'Day 10-14', title: 'Galápagos', description: 'Evolution in action.', parkId: 'p5', activity: 'Snorkeling' },
            { day: 'Day 15-18', title: 'Mt Fuji', description: 'Cultural icon.', parkId: 'p_fuji', activity: 'Cultural Tour' }
        ]
    }
];
