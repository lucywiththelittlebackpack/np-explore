'use client';

import { useState, useMemo, Suspense, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { getParks } from '@/lib/data';
import ParkCard from '@/components/ui/ParkCard';
import FilterBar from '@/components/ui/FilterBar';
import Hero from '@/components/ui/Hero';
import { Map as MapIcon, List } from 'lucide-react';
import { useDebounce } from '@/lib/hooks';

// Dynamically import Map to avoid SSR issues with Leaflet
const Map = dynamic(() => import('@/components/map/Map'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-slate-100 animate-pulse rounded-xl flex items-center justify-center text-slate-400">Loading Map...</div>
});

function ExploreContent() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Get current values from URL
    const currentActivity = searchParams.get('activity') || '';
    const currentSeason = searchParams.get('season') || '';
    const urlQuery = searchParams.get('q') || '';

    const [viewMode, setViewMode] = useState<'map' | 'list'>('map');

    // Local state for search input to allow immediate typing
    const [searchQuery, setSearchQuery] = useState(urlQuery);
    const debouncedQuery = useDebounce(searchQuery, 300);

    // Sync URL with debounced search query
    useEffect(() => {
        if (debouncedQuery === urlQuery) return;

        const params = new URLSearchParams(searchParams.toString());
        if (debouncedQuery) {
            params.set('q', debouncedQuery);
        } else {
            params.delete('q');
        }
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, [debouncedQuery, pathname, router, searchParams, urlQuery]);

    // Sync local state with URL query
    useEffect(() => {
        if (urlQuery !== searchQuery) {
            setSearchQuery(urlQuery);
        }
    }, [urlQuery]);

    const handleFilterChange = (newFilters: { activity: string; season: string }) => {
        const params = new URLSearchParams(searchParams.toString());

        if (newFilters.activity) params.set('activity', newFilters.activity);
        else params.delete('activity');

        if (newFilters.season) params.set('season', newFilters.season);
        else params.delete('season');

        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const parks = getParks();

    const filteredParks = useMemo(() => {
        return parks.filter(park => {
            const query = debouncedQuery.toLowerCase();
            const matchesSearch =
                park.name.toLowerCase().includes(query) ||
                park.location.toLowerCase().includes(query) ||
                park.wildlife.some(w => w.name.toLowerCase().includes(query));

            const matchesActivity = !currentActivity || park.activities?.includes(currentActivity);
            const matchesSeason = !currentSeason || park.bestSeason.includes(currentSeason);

            return matchesSearch && matchesActivity && matchesSeason;
        });
    }, [parks, debouncedQuery, currentActivity, currentSeason]);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Hero
                title="Explore Destinations"
                subtitle={`Find your perfect getaway from ${parks.length} curated locations`}
                backgroundImage="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1600"
                size="default"
            />

            <div className="container mx-auto px-4 py-8 -mt-20 relative z-20">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                    <div className="hidden md:block">
                        {/* Spacer or additional info if needed */}
                    </div>

                    <div className="flex bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm self-start md:self-auto ml-auto">
                        <button
                            onClick={() => setViewMode('map')}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${viewMode === 'map' ? 'bg-brand-primary text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            <MapIcon size={18} /> Map
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${viewMode === 'list' ? 'bg-brand-primary text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            <List size={18} /> List
                        </button>
                    </div>
                </div>

                <FilterBar
                    query={searchQuery}
                    activity={currentActivity}
                    season={currentSeason}
                    onSearch={setSearchQuery}
                    onFilterChange={handleFilterChange}
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
                                        onClick={() => {
                                            setSearchQuery('');
                                            handleFilterChange({ activity: '', season: '' });
                                        }}
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
