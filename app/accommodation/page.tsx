'use client';

import { useState, useMemo } from 'react';
import Hero from '@/components/ui/Hero';
import AccommodationCard from '@/components/accommodation/AccommodationCard';
import AccommodationFilter from '@/components/accommodation/AccommodationFilter';
import { accommodationData } from '@/lib/data/accommodations';
import { Info } from 'lucide-react';

export default function AccommodationPage() {
    const [query, setQuery] = useState('');
    const [filters, setFilters] = useState({
        type: '',
        priceRange: '',
    });

    const filteredAccommodations = useMemo(() => {
        return accommodationData.filter((item) => {
            const matchesQuery =
                item.name.toLowerCase().includes(query.toLowerCase()) ||
                item.description.toLowerCase().includes(query.toLowerCase()) ||
                item.amenities.some((a) => a.toLowerCase().includes(query.toLowerCase()));
            const matchesType = filters.type ? item.type === filters.type : true;
            const matchesPrice = filters.priceRange ? item.priceRange === filters.priceRange : true;

            return matchesQuery && matchesType && matchesPrice;
        });
    }, [query, filters]);

    const handleFilterChange = (newFilters: { type: string; priceRange: string }) => {
        setFilters(newFilters);
    };

    return (
        <main className="bg-slate-50 min-h-screen pb-24">
            <Hero
                title="Stay in the Wild"
                subtitle="Discover eco-lodges, luxury camps, and historic hotels in the world's most spectacular national parks."
                backgroundImage="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=1600"
                size="default"
            />

            <div className="container mx-auto px-4 -mt-8 relative z-10">
                <AccommodationFilter
                    query={query}
                    type={filters.type}
                    priceRange={filters.priceRange}
                    onSearch={setQuery}
                    onFilterChange={handleFilterChange}
                />

                {filteredAccommodations.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredAccommodations.map((item) => (
                            <AccommodationCard key={item.id} accommodation={item} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm">
                        <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Info className="text-slate-400" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-2">No accommodations found</h3>
                        <p className="text-slate-500">Try adjusting your filters or search terms.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
