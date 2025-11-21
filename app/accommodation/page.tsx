import Image from 'next/image';
import { getAllAccommodation } from '@/lib/data';
import styles from '@/styles/wildlife.module.css'; // Reusing grid styles
import { Check, DollarSign } from 'lucide-react';

export default function AccommodationIndex() {
    const accommodations = getAllAccommodation();

    return (
        <main className="container" style={{ paddingTop: '2rem' }}>
            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    Stay in the Wild
                </h1>
                <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
                    Discover eco-friendly lodges, rustic cabins, and luxury camps nestled in the heart of nature.
                </p>
            </div>

            <div className={styles.grid}>
                {accommodations.map((place) => (
                    <div key={place.id} className={styles.card} style={{ height: 'auto', display: 'flex', flexDirection: 'column' }}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={place.image}
                                alt={place.name}
                                width={400}
                                height={300}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.content} style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                                <h2 className={styles.name}>{place.name}</h2>
                                <span style={{
                                    fontSize: '0.75rem',
                                    padding: '0.25rem 0.5rem',
                                    borderRadius: '1rem',
                                    background: 'var(--surface-hover)',
                                    color: '#cbd5e1'
                                }}>
                                    {place.type}
                                </span>
                            </div>

                            <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '1rem', lineHeight: '1.5' }}>
                                {place.description}
                            </p>

                            <div style={{ marginTop: 'auto' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--accent)', fontWeight: '600', marginBottom: '0.75rem' }}>
                                    <DollarSign size={16} />
                                    {place.priceRange}
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                                    {place.amenities.slice(0, 3).map(amenity => (
                                        <span key={amenity} style={{ fontSize: '0.75rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                            <Check size={12} color="var(--primary)" /> {amenity}
                                        </span>
                                    ))}
                                </div>

                                <button className="btn btn-secondary" style={{ width: '100%' }}>
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
