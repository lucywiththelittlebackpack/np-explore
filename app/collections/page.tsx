import Link from 'next/link';
import Image from 'next/image';
import { getAllCollections } from '@/lib/data';
import styles from '@/styles/collections.module.css';

export default function CollectionsIndex() {
    const collections = getAllCollections();

    return (
        <main className="container" style={{ paddingTop: '2rem' }}>
            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    Trip Inspiration
                </h1>
                <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
                    Curated collections of the world's most spectacular national parks.
                    Find your perfect adventure based on what you love.
                </p>
            </div>

            <div className={styles.grid}>
                {collections.map((collection) => (
                    <Link key={collection.id} href={`/collections/${collection.slug}`} className={styles.card}>
                        <Image
                            src={collection.coverImage}
                            alt={collection.title}
                            fill
                            className={styles.image}
                        />
                        <div className={styles.overlay} />
                        <div className={styles.content}>
                            <h2 className={styles.title}>{collection.title}</h2>
                            <p className={styles.description}>{collection.description}</p>
                            <span className={styles.count}>{collection.parks.length} Parks</span>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
