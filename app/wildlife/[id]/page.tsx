import { getWildlifeById, getAllWildlife, getAllParks } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/wildlife.module.css';
import ParkCard from '@/components/ui/ParkCard';
import { ArrowLeft, Calendar } from 'lucide-react';

interface PageProps {
    params: {
        id: string;
    };
}

export async function generateStaticParams() {
    const wildlife = getAllWildlife();
    return wildlife.map((w) => ({
        id: w.id,
    }));
}

export default function WildlifePage({ params }: PageProps) {
    const animal = getWildlifeById(params.id);

    if (!animal) {
        notFound();
    }

    // Find parks where this animal is found
    const parks = getAllParks().filter(park =>
        park.wildlife.some(w => w.id === animal.id)
    );

    return (
        <main>
            <div className={styles.hero}>
                <Image
                    src={animal.image}
                    alt={animal.name}
                    fill
                    className={styles.heroImage}
                    priority
                />
                <div className={styles.overlay} />
                <div className={`${styles.heroContent} container`}>
                    <Link href="/wildlife" className="btn btn-secondary" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                        <ArrowLeft size={16} /> Back to Index
                    </Link>
                    <h1 className={`${styles.title} text-gradient`}>{animal.name}</h1>
                    <p className={styles.subtitle}>{animal.scientificName}</p>
                </div>
            </div>

            <div className={`${styles.detailGrid} container`}>
                <div>
                    <section className={styles.infoBox}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>About</h2>
                        <p style={{ lineHeight: '1.8', color: '#cbd5e1' }}>{animal.description}</p>
                    </section>

                    <section style={{ marginTop: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Where to Find Them</h2>
                        {parks.length > 0 ? (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
                                {parks.map(park => (
                                    <ParkCard key={park.id} park={park} />
                                ))}
                            </div>
                        ) : (
                            <p style={{ color: '#94a3b8' }}>No parks listed for this species yet.</p>
                        )}
                    </section>
                </div>

                <aside>
                    <div className={styles.infoBox}>
                        <div style={{ marginBottom: '1rem' }}>
                            <div className={styles.label}>Type</div>
                            <div className={styles.value}>{animal.type}</div>
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <div className={styles.label}>Rarity</div>
                            <div className={styles.value} style={{
                                color: animal.rarity === 'Endangered' ? '#ef4444' :
                                    animal.rarity === 'Rare' ? '#f59e0b' : 'inherit'
                            }}>
                                {animal.rarity}
                            </div>
                        </div>
                        <div>
                            <div className={styles.label}>Best Time to See</div>
                            <div className={styles.value} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Calendar size={16} />
                                {animal.bestTime}
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}
