import Image from 'next/image';
import { Accommodation } from '@/lib/types';
import { MapPin, Star, Wifi, Coffee, Utensils, ArrowRight } from 'lucide-react';

interface AccommodationCardProps {
    accommodation: Accommodation;
}

export default function AccommodationCard({ accommodation }: AccommodationCardProps) {
    const getAmenityIcon = (amenity: string) => {
        const lower = amenity.toLowerCase();
        if (lower.includes('wifi')) return <Wifi size={14} />;
        if (lower.includes('coffee') || lower.includes('breakfast')) return <Coffee size={14} />;
        if (lower.includes('restaurant') || lower.includes('dining')) return <Utensils size={14} />;
        return <Star size={14} />;
    };

    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={accommodation.image}
                    alt={accommodation.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-dark shadow-sm">
                    {accommodation.type}
                </div>
                {accommodation.rating && (
                    <div className="absolute top-4 right-4 bg-brand-primary text-white px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm">
                        <Star size={12} fill="currentColor" /> {accommodation.rating}
                    </div>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display font-bold text-xl text-brand-dark group-hover:text-brand-primary transition-colors">
                        {accommodation.name}
                    </h3>
                </div>

                <p className="text-slate-500 text-sm mb-4 flex items-center gap-1.5">
                    <MapPin size={14} className="text-brand-primary" />
                    {accommodation.distance || 'Near Park'}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                    {accommodation.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {accommodation.amenities.slice(0, 3).map((amenity) => (
                        <span key={amenity} className="inline-flex items-center gap-1 text-xs bg-slate-50 text-slate-600 px-2.5 py-1 rounded-md border border-slate-100">
                            {getAmenityIcon(amenity)} {amenity}
                        </span>
                    ))}
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                    <div>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-0.5">Price Range</p>
                        <p className="font-bold text-brand-dark">{accommodation.priceRange}</p>
                    </div>
                    <a
                        href={`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(accommodation.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-dark text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-brand-primary transition-colors flex items-center gap-2 shadow-lg shadow-brand-dark/10"
                    >
                        Check Availability <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </div>
    );
}
