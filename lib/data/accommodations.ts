import { Accommodation } from '../types';

export const accommodationData: Accommodation[] = [
    // Costa Rica
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
    // Yellowstone
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
    // Kruger
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
    // Amazon
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
    // Yosemite
    {
        id: 'a_yosemite_lodge',
        name: 'Yosemite Valley Lodge',
        type: 'Hotel',
        priceRange: 'High',
        description: 'Glass and wood architecture blending into the surroundings near Yosemite Falls.',
        amenities: ['Pool', 'Restaurant', 'Bike Rentals'],
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800', // Placeholder or find better
        parkId: 'p_yosemite',
        distance: 'Inside Valley',
        rating: 4.4,
    },
    // Banff
    {
        id: 'a_banff_springs',
        name: 'Fairmont Banff Springs',
        type: 'Hotel',
        priceRange: 'Luxury',
        description: 'The "Castle in the Rockies", a historic railway hotel with stunning mountain views.',
        amenities: ['Spa', 'Golf Course', 'Fine Dining', 'Pools'],
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800', // Placeholder
        parkId: 'p_banff',
        distance: '1km from town',
        rating: 4.9,
    },
    // Torres del Paine
    {
        id: 'a_torres_camp',
        name: 'EcoCamp Patagonia',
        type: 'Campsite',
        priceRange: 'Luxury',
        description: 'Sustainable geodesic domes in the heart of Torres del Paine.',
        amenities: ['Yoga', 'Guided Treks', 'Community Domes'],
        image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=800',
        parkId: 'p_torres',
        distance: 'Inside Park',
        rating: 4.8,
    },
    // Great Barrier Reef
    {
        id: 'a_reef_resort',
        name: 'Lizard Island Resort',
        type: 'Hotel',
        priceRange: 'Luxury',
        description: 'Exclusive island resort located directly on the Great Barrier Reef.',
        amenities: ['Private Beaches', 'Diving Centre', 'Spa'],
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800',
        parkId: 'p_barrier_reef',
        distance: 'On Island',
        rating: 5.0,
    },
    // Serengeti
    {
        id: 'a_serengeti_lodge',
        name: 'Four Seasons Safari Lodge',
        type: 'Lodge',
        priceRange: 'Luxury',
        description: 'Deep in the Serengeti, featuring an infinity pool overlooking a watering hole.',
        amenities: ['Infinity Pool', 'Spa', 'Game Drives'],
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80&w=800',
        parkId: 'p_serengeti',
        distance: 'Inside Park',
        rating: 4.9,
    },
    // Fuji
    {
        id: 'a_fuji_ryokan',
        name: 'Gora Kadan',
        type: 'Hotel',
        priceRange: 'Luxury',
        description: 'Traditional Japanese Ryokan with private hot spring baths.',
        amenities: ['Onsen', 'Kaiseki Dining', 'Zen Garden'],
        image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92a3a8?auto=format&fit=crop&q=80&w=800',
        parkId: 'p_fuji',
        distance: 'Hakone Area',
        rating: 4.8,
    }
];
