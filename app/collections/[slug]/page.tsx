import { getCollectionBySlug, getAllCollections } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/collections.module.css';
import ParkCard from '@/components/ui/ParkCard';
import { ArrowLeft } from 'lucide-react';

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    const collections = getAllCollections();
    return collections.map((c) => ({
        slug: c.slug,
    }));
}

export default function CollectionPage({ params }: PageProps) {
    const collection = getCollectionBySlug(params.slug);

    if (!collection) {
        notFound();
    }

    return (
        <main>
            <div className={styles.hero}>
                <Image
                    src={collection.coverImage}
                    alt={collection.title}
                    fill
                    className={styles.image}
                    priority
                />
                <div className={styles.overlay} />
                <div className={`${styles.content} container`}>
                    <Link href="/collections" className="btn btn-secondary" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
                        <ArrowLeft size={16} /> Back to Collections
                    </Link>
                    <h1 className={styles.heroTitle}>{collection.title}</h1>
                    <p className={styles.heroDesc}>{collection.description}</p>
                </div>
            </div>

            <div className="container" style={{ paddingBottom: '4rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                    Featured Parks
                </h2>
                <div className={styles.parkGrid}>
                    {collection.parks.map((park) => (
                        <ParkCard key={park.id} park={park} />
                    ))}
                </div>
            </div>
        </main>
    );
}
