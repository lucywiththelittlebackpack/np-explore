import Link from 'next/link';
import Image from 'next/image';
import { getAllWildlife } from '@/lib/data';
import styles from '@/styles/wildlife.module.css';

export default function WildlifeIndex() {
    const wildlife = getAllWildlife();

    return (
        <main className="container" style={{ paddingTop: '2rem' }}>
            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                    Wildlife Index
                </h1>
                <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
                    Explore the diverse species found in national parks around the world.
                    From rare birds to majestic mammals.
                </p>
            </div>

            <div className={styles.grid}>
                {wildlife.map((animal) => (
                    <Link key={animal.id} href={`/wildlife/${animal.id}`} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={animal.image}
                                alt={animal.name}
                                width={400}
                                height={300}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.name}>{animal.name}</h2>
                            <p className={styles.scientificName}>{animal.scientificName}</p>
                            <div className={styles.meta}>
                                <span>{animal.type}</span>
                                <span style={{
                                    color: animal.rarity === 'Endangered' ? '#ef4444' :
                                        animal.rarity === 'Rare' ? '#f59e0b' : '#cbd5e1'
                                }}>
                                    {animal.rarity}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
