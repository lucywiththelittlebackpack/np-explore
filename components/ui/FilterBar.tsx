'use client';

import { Search, SlidersHorizontal, X } from 'lucide-react';
import { useState } from 'react';

interface FilterBarProps {
    onSearch: (query: string) => void;
    onFilterChange: (filters: { activity: string; season: string }) => void;
}

export default function FilterBar({ onSearch, onFilterChange }: FilterBarProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [query, setQuery] = useState('');
    const [activity, setActivity] = useState('');
    const [season, setSeason] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setQuery(val);
        onSearch(val);
    };

    const handleFilter = (type: 'activity' | 'season', val: string) => {
        const newActivity = type === 'activity' ? val : activity;
        const newSeason = type === 'season' ? val : season;

        if (type === 'activity') setActivity(val);
        if (type === 'season') setSeason(val);

        onFilterChange({ activity: newActivity, season: newSeason });
    };

    const clearFilters = () => {
        setActivity('');
        setSeason('');
        onFilterChange({ activity: '', season: '' });
    };

    const activities = ['Birding', 'Hiking', 'Photography', 'Safari', 'Snorkeling'];
    const seasons = ['Dry Season', 'Summer', 'Winter', 'Spring'];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 mb-8 overflow-hidden">
            {/* Search Input Area */}
            <div className="p-2 flex items-center gap-2">
                <div className="relative flex-grow">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search destinations..."
                        value={query}
                        onChange={handleSearch}
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-xl text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
                    />
                </div>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`p-3 rounded-xl transition-colors ${isExpanded || activity || season
                            ? 'bg-brand-primary text-white'
                            : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                        }`}
                >
                    <SlidersHorizontal size={20} />
                </button>
            </div>

            {/* Expandable Filters */}
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 border-t border-slate-100 space-y-6">

                    {/* Activities - Horizontal Scroll on Mobile */}
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-3">Activity</label>
                        <div className="flex flex-wrap gap-2">
                            {activities.map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => handleFilter('activity', activity === opt ? '' : opt)}
                                    className={`text-sm px-4 py-2 rounded-full border transition-all ${activity === opt
                                            ? 'bg-brand-primary text-white border-brand-primary shadow-md shadow-brand-primary/20'
                                            : 'bg-white text-slate-600 border-slate-200 hover:border-brand-primary hover:text-brand-primary'
                                        }`}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Seasons */}
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-3">Best Season</label>
                        <div className="flex flex-wrap gap-2">
                            {seasons.map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => handleFilter('season', season === opt ? '' : opt)}
                                    className={`text-sm px-4 py-2 rounded-full border transition-all ${season === opt
                                            ? 'bg-brand-primary text-white border-brand-primary shadow-md shadow-brand-primary/20'
                                            : 'bg-white text-slate-600 border-slate-200 hover:border-brand-primary hover:text-brand-primary'
                                        }`}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Clear Button */}
                    {(activity || season) && (
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
