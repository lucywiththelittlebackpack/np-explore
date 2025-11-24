import { Collection } from '../types';
import { parks } from './parks';

// Helper to get parks by ID
const getParks = (ids: string[]) => parks.filter(p => ids.includes(p.id));

export const collections: Collection[] = [
    {
        id: 'col1',
        slug: 'bird-watchers-paradise',
        title: 'Bird Watcher\'s Paradise',
        subTitle: 'Feathered Friends',
        description: 'Discover the best parks for bird watching, from the Amazon to the cloud forests.',
        coverImage: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=800',
        parks: getParks(['p1', 'p4', 'p5']), // Monteverde, Amazon, Galapagos
        vibe: 'Wildlife'
    },
    {
        id: 'col2',
        slug: 'island-escapes',
        title: 'Island Escapes',
        subTitle: 'Tropical Paradises',
        description: 'Explore the world\'s most beautiful island national parks.',
        coverImage: 'https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?auto=format&fit=crop&q=80&w=800',
        parks: getParks(['p5', 'p_barrier_reef', 'p_komodo']), // Galapagos, Barrier Reef, Komodo
        vibe: 'Relaxed'
    },
    {
        id: 'col3',
        slug: 'mountain-peaks',
        title: 'Mountain Peaks',
        subTitle: 'Reach for the Sky',
        description: 'Majestic peaks and breathtaking views for the adventurous soul.',
        coverImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
        parks: getParks(['p_banff', 'p_yosemite', 'p_torres', 'p_zhangjiajie', 'p_fuji']),
        vibe: 'Adventure'
    },
    {
        id: 'col4',
        slug: 'african-safari',
        title: 'African Safari',
        subTitle: 'The Big Five',
        description: 'Witness the raw power of nature in Africa\'s legendary game reserves.',
        coverImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800',
        parks: getParks(['p3', 'p_serengeti']), // Kruger, Serengeti
        vibe: 'Wildlife'
    }
];
