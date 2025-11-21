'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { getParks } from '@/lib/data';
import ParkCard from '@/components/ui/ParkCard';
import FilterBar from '@/components/ui/FilterBar';
import { Map as MapIcon, List } from 'lucide-react';

// Dynamically import Map to avoid SSR issues with Leaflet
const Map = dynamic(() => import('@/components/map/Map'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-slate-100 animate-pulse rounded-xl flex items-center justify-center text-slate-400">Loading Map...</div>
});

function ExploreContent() {
    const searchParams = useSearchParams();
    const initialActivity = searchParams.get('activity') || '';

    const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({ activity: initialActivity, season: '' });

    const parks = getParks();

    const filteredParks = useMemo(() => {
        return parks.filter(park => {
            const matchesSearch =
                park.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                park.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                park.wildlife.some(w => w.name.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesActivity = !filters.activity || park.activities?.includes(filters.activity);
            const matchesSeason = !filters.season || park.bestSeason.includes(filters.season);

            return matchesSearch && matchesActivity && matchesSeason;
        });
    }, [parks, searchQuery, filters]);

    return (
        <div className="container mx-auto px-4 pt-24 pb-8 min-h-screen flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                <div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-2">Explore Destinations</h1>
                    <p className="text-slate-500">Find your perfect getaway from {parks.length} curated locations</p>
                </div>

                <div className="flex bg-slate-100 p-1.5 rounded-xl border border-slate-200 self-start md:self-auto">
                    <button
                        onClick={() => setViewMode('map')}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${viewMode === 'map' ? 'bg-white text-brand-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        <MapIcon size={18} /> Map
                    </button>
                    <button
                        onClick={() => setViewMode('list')}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${viewMode === 'list' ? 'bg-white text-brand-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        <List size={18} /> List
                    </button>
                </div>
            </div>

            <FilterBar
                onSearch={setSearchQuery}
                onFilterChange={setFilters}
            />

            <div className="flex-grow flex gap-8 overflow-hidden relative h-[600px] md:h-[calc(100vh-180px)]">
                {/* List Side */}
                <div className={`${viewMode === 'list' ? 'w-full' : 'hidden lg:block lg:w-1/3'} overflow-y-auto pr-2 custom-scrollbar pb-20`}>
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">{filteredParks.length} Results</span>
                    </div>

                    <div className={`grid gap-8 ${viewMode === 'list' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                        {filteredParks.map(park => (
                            <ParkCard key={park.id} park={park} />
                        ))}

                        {filteredParks.length === 0 && (
                            <div className="col-span-full text-center py-24 text-slate-400 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                                <p className="text-lg font-medium mb-2">No destinations found</p>
                                <p className="text-sm mb-4">Try adjusting your filters or search terms</p>
                                <button
                                    onClick={() => { setSearchQuery(''); setFilters({ activity: '', season: '' }); }}
                                    className="text-brand-primary font-bold hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Map Side */}
                <div className={`${viewMode === 'map' ? 'w-full lg:w-2/3' : 'hidden'} h-full rounded-3xl overflow-hidden relative shadow-2xl border border-slate-200`}>
                    <Map parks={filteredParks} />

                    {/* Mobile Toggle Overlay */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:hidden z-[1000]">
                        <button
                            onClick={() => setViewMode('list')}
                            className="bg-brand-dark text-white px-8 py-4 rounded-full shadow-2xl font-bold flex items-center gap-3 hover:scale-105 transition-transform"
                        >
                            <List size={20} /> Show List ({filteredParks.length})
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ExplorePage() {
    return (
        <Suspense fallback={<div className="h-screen flex items-center justify-center bg-slate-50 text-brand-primary font-bold">Loading Green Planet...</div>}>
            <ExploreContent />
        </Suspense>
    );
}
