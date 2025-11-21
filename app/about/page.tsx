import Image from 'next/image';
import styles from '@/styles/home.module.css';

export default function AboutPage() {
    return (
        <main>
            <section className={styles.hero} style={{ height: '50vh' }}>
                <div className={styles.heroContent}>
                    <h1 className={`${styles.heroTitle} text-gradient`}>About NPExplore</h1>
                    <p className={styles.heroSubtitle}>
                        Our mission is to connect people with nature through responsible tourism and wildlife conservation.
                    </p>
                </div>
            </section>

            <div className="container" style={{ padding: '4rem 0' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Who We Are</h2>
                    <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
                        National Parks Explorer was founded by a group of wildlife photographers and nature enthusiasts who wanted to make it easier for people to find the perfect destination for their next adventure. We believe that experiencing nature firsthand is the best way to foster a love for our planet and a desire to protect it.
                    </p>

                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Our Values</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Conservation First</h3>
                            <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                                We prioritize parks and accommodations that are committed to sustainability and wildlife protection.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Community</h3>
                            <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                                We support local communities by promoting locally-owned businesses and guides.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Education</h3>
                            <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                                We provide detailed information about wildlife and ecosystems to help travelers learn before they go.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Accessibility</h3>
                            <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                                We believe nature is for everyone and strive to highlight accessible trails and facilities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
