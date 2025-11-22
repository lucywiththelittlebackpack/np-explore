'use client';

import { Search, SlidersHorizontal, X } from 'lucide-react';
import { useState } from 'react';

interface AccommodationFilterProps {
    query: string;
    type: string;
    priceRange: string;
    onSearch: (query: string) => void;
    onFilterChange: (filters: { type: string; priceRange: string }) => void;
}

export default function AccommodationFilter({ query, type, priceRange, onSearch, onFilterChange }: AccommodationFilterProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };

    const handleFilter = (filterType: 'type' | 'priceRange', val: string) => {
        const newType = filterType === 'type' ? val : type;
        const newPrice = filterType === 'priceRange' ? val : priceRange;
        onFilterChange({ type: newType, priceRange: newPrice });
    };

    const clearFilters = () => {
        onFilterChange({ type: '', priceRange: '' });
    };

    const types = ['Lodge', 'Hotel', 'Campsite', 'Cabin', 'Resort'];
    const prices = ['Low', 'Medium', 'High', 'Luxury'];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 mb-12 overflow-hidden">
            <div className="p-2 flex items-center gap-2">
                <div className="relative flex-grow">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by name, location, or amenity..."
                        value={query}
                        onChange={handleSearch}
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-xl text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
                    />
                </div>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`p-3 rounded-xl transition-colors ${isExpanded || type || priceRange
                        ? 'bg-brand-primary text-white'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                        }`}
                >
                    <SlidersHorizontal size={20} />
                </button>
            </div>

            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 border-t border-slate-100 space-y-6">
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-3">Accommodation Type</label>
                        <div className="flex flex-wrap gap-2">
                            {types.map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => handleFilter('type', type === opt ? '' : opt)}
                                    className={`text-sm px-4 py-2 rounded-full border transition-all ${type === opt
                                        ? 'bg-brand-primary text-white border-brand-primary shadow-md shadow-brand-primary/20'
                                        : 'bg-white text-slate-600 border-slate-200 hover:border-brand-primary hover:text-brand-primary'
                                        }`}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-3">Price Range</label>
                        <div className="flex flex-wrap gap-2">
                            {prices.map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => handleFilter('priceRange', priceRange === opt ? '' : opt)}
                                    className={`text-sm px-4 py-2 rounded-full border transition-all ${priceRange === opt
                                        ? 'bg-brand-primary text-white border-brand-primary shadow-md shadow-brand-primary/20'
                                        : 'bg-white text-slate-600 border-slate-200 hover:border-brand-primary hover:text-brand-primary'
                                        }`}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>

                    {(type || priceRange) && (
                        <div className="flex justify-end pt-2">
                            <button
                                onClick={clearFilters}
                                className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1 font-bold px-4 py-2 hover:bg-red-50 rounded-lg transition-colors"
                            >
                                <X size={16} /> Clear All Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
