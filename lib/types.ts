export interface Wildlife {
  id: string;
  name: string;
  scientificName: string;
  type: 'Bird' | 'Mammal' | 'Reptile' | 'Amphibian' | 'Insect';
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Vulnerable' | 'Endangered';
  description: string;
  image: string;
  bestTime: string; // e.g., "Early Morning", "Spring"
}

export interface Accommodation {
  id: string;
  name: string;
  type: 'Lodge' | 'Campsite' | 'Hotel' | 'Cabin';
  priceRange: 'Low' | 'Medium' | 'High' | 'Luxury';
  description: string;
  amenities: string[];
  image: string;
  bookingUrl?: string;
}

export interface Park {
  id: string;
  slug: string;
  name: string;
  location: string; // Country, Region
  coordinates: { lat: number; lng: number };
  description: string;
  heroImage: string;
  gallery: string[];
  wildlife: Wildlife[];
  accommodation: Accommodation[];
  highlights: string[];
  bestSeason: string;
}

export interface Collection {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  parks: Park[];
}
