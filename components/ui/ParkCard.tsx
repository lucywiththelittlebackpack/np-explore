import Link from 'next/link';
import Image from 'next/image';
import { Park } from '@/lib/types';
import styles from './ParkCard.module.css';
import { Bird, MapPin } from 'lucide-react';

interface ParkCardProps {
    park: Park;
}

export default function ParkCard({ park }: ParkCardProps) {
    return (
        <Link href={`/parks/${park.slug}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={park.heroImage}
                    alt={park.name}
                    width={400}
                    height={240}
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.location}>
                    <MapPin size={14} style={{ display: 'inline', marginRight: '4px' }} />
                    {park.location}
                </div>
                <h3 className={styles.title}>{park.name}</h3>
                <p className={styles.description}>{park.description}</p>
                <div className={styles.footer}>
                    <div className={styles.wildlifeCount}>
                        <Bird size={16} />
                        <span>{park.wildlife.length} Species</span>
                    </div>
                    <span>{park.bestSeason}</span>
                </div>
            </div>
        </Link>
    );
}
