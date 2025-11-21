'use client';

import { useState } from 'react';
import { searchParks, getAllParks } from '@/lib/data';
import ParkCard from '@/components/ui/ParkCard';
import styles from '@/styles/search.module.css';
import { Search as SearchIcon } from 'lucide-react';

export default function SearchPage() {
    const [query, setQuery] = useState('');
    const allParks = getAllParks();
    const results = query ? searchParks(query) : allParks;

    return (
        <main>
            <div className={styles.searchHeader}>
                <div className="container">
                    <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Find Your Park
                    </h1>
                    <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
                        <SearchIcon
                            size={20}
                            style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}
                        />
                        <input
                            type="text"
                            placeholder="Search by name, location, or wildlife..."
                            className={styles.searchInput}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            style={{ paddingLeft: '3.5rem' }}
                        />
                    </div>
                </div>
            </div>

            <div className={`${styles.results} container`}>
                {results.length > 0 ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                        {results.map((park) => (
                            <ParkCard key={park.id} park={park} />
                        ))}
                    </div>
                ) : (
                    <div className={styles.noResults}>
                        No parks found matching "{query}"
                    </div>
                )}
            </div>
        </main>
    );
}
