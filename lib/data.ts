import { Park, Wildlife, Accommodation, Collection, Trip } from './types';
import { parks } from './data/parks';
import { wildlifeData } from './data/wildlife';
import { accommodationData } from './data/accommodations';
import { collections } from './data/collections';
import { trips } from './data/trips';

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

export function getTrips(): Trip[] {
    return trips;
}

export function getTripBySlug(slug: string): Trip | undefined {
    return trips.find((t) => t.slug === slug);
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
