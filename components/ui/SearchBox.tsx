'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Search } from 'lucide-react';

export default function SearchBox() {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        if (searchQuery.trim()) {
            router.push(`/explore?q=${encodeURIComponent(searchQuery.trim())}`);
        } else {
            router.push('/explore');
        }
    };

    return (
        <form
            onSubmit={handleSearch}
            className="bg-white p-3 rounded-2xl shadow-2xl max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-2 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
        >
            <div className="flex-grow w-full md:w-auto px-4 py-2 text-left">
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1 tracking-wider">Where to?</label>
                <input
                    type="text"
                    placeholder="Try 'Costa Rica' or 'Yellowstone'"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full text-slate-900 text-lg font-bold focus:outline-none placeholder:text-slate-300 placeholder:font-normal"
                />
            </div>
            <div className="hidden md:block w-px h-12 bg-slate-100" />
            <div className="w-full md:w-auto">
                <button
                    type="submit"
                    className="w-full md:w-auto bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2"
                >
                    <Search size={20} />
                    <span>Search</span>
                </button>
            </div>
        </form>
    );
}
