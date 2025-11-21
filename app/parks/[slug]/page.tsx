import { getParkBySlug, getAllParks } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/park.module.css';
import { MapPin, Bird, Home, ArrowLeft } from 'lucide-react';

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    const parks = getAllParks();
    return parks.map((park) => ({
        slug: park.slug,
    }));
}

export default function ParkPage({ params }: PageProps) {
    const park = getParkBySlug(params.slug);

    if (!park) {
        notFound();
    }

    return (
        <main>
            <div className={styles.hero}>
                <Image
                    src={park.heroImage}
                    alt={park.name}
                    fill
                    className={styles.heroImage}
                    priority
                />
                <div className={styles.overlay} />
                <div className={`${styles.heroContent} container`}>
                    <Link href="/" className="btn btn-secondary" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                    <h1 className={`${styles.title} text-gradient`}>{park.name}</h1>
                    <div className={styles.location}>
                        <MapPin size={20} />
                        {park.location}
                    </div>
                </div>
            </div>

            <div className={`${styles.grid} container`}>
                <div className={styles.mainContent}>
                    <section>
                        <h2 className={styles.sectionTitle}>Overview</h2>
                        <p className={styles.description}>{park.description}</p>
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                            <div className="btn btn-secondary">
                                Best Season: {park.bestSeason}
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className={styles.sectionTitle}>Wildlife Highlights</h2>
                        <div className={styles.wildlifeGrid}>
                            {park.wildlife.map((animal) => (
                                <div key={animal.id} className={styles.wildlifeCard}>
                                    <img src={animal.image} alt={animal.name} className={styles.wildlifeImage} />
                                    <div className={styles.wildlifeInfo}>
                                        <h3 className={styles.wildlifeName}>{animal.name}</h3>
                                        <div className={styles.wildlifeMeta}>
                                            {animal.rarity} • {animal.type}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <aside className={styles.sidebar}>
                    <h2 className={styles.sectionTitle}>Accommodation</h2>
                    {park.accommodation.map((place) => (
                        <div key={place.id} className={styles.accommodationCard}>
                            <img src={place.image} alt={place.name} className={styles.accommodationImage} />
                            <h3 className={styles.wildlifeName}>{place.name}</h3>
                            <span className={styles.price}>Price: {place.priceRange}</span>
                            <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginTop: '0.5rem' }}>
                                {place.description}
                            </p>
                            <div className={styles.amenities}>
                                {place.amenities.map((amenity) => (
                                    <span key={amenity} className={styles.amenity}>
                                        {amenity}
                                    </span>
                                ))}
                            </div>
                            <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                                Check Availability
                            </button>
                        </div>
                    ))}
                </aside>
            </div>
        </main>
    );
}
