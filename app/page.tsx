import Link from 'next/link';
import { getAllParks } from '@/lib/data';
import ParkCard from '@/components/ui/ParkCard';
import styles from '@/styles/home.module.css';
import { Search } from 'lucide-react';

export default function Home() {
  const parks = getAllParks();

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} text-gradient animate-fade-in`}>
            Discover the Wild
          </h1>
          <p className={`${styles.heroSubtitle} animate-fade-in`}>
            The world's premier guide to national parks, wildlife photography, and eco-friendly accommodation.
          </p>
          <Link href="/search" className="btn btn-primary animate-fade-in">
            <Search size={20} />
            Find Your Next Adventure
          </Link>
        </div>
      </section>

      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Parks</h2>
          <Link href="/search" className="btn btn-secondary">
            View All Parks
          </Link>
        </div>
        <div className={styles.grid}>
          {parks.map((park) => (
            <ParkCard key={park.id} park={park} />
          ))}
        </div>
      </section>
    </main>
  );
}
