import Link from 'next/link';
import styles from '@/styles/layout.module.css';
import { Compass, Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerGrid}>
                    <div className={styles.footerBrand}>
                        <div className={styles.logo}>
                            <Compass size={24} color="var(--primary)" />
                            NP<span>Explore</span>
                        </div>
                        <p>
                            The world's #1 resource for planning national park adventures.
                            Specializing in wildlife photography and eco-friendly travel.
                        </p>
                    </div>

                    <div>
                        <h4 className={styles.footerTitle}>Explore</h4>
                        <div className={styles.footerLinks}>
                            <Link href="/search" className={styles.footerLink}>Find Parks</Link>
                            <Link href="/wildlife" className={styles.footerLink}>Wildlife Index</Link>
                            <Link href="/collections" className={styles.footerLink}>Trip Collections</Link>
                            <Link href="/accommodation" className={styles.footerLink}>Accommodation</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className={styles.footerTitle}>Company</h4>
                        <div className={styles.footerLinks}>
                            <Link href="/about" className={styles.footerLink}>About Us</Link>
                            <Link href="#" className={styles.footerLink}>Contact</Link>
                            <Link href="#" className={styles.footerLink}>Privacy Policy</Link>
                            <Link href="#" className={styles.footerLink}>Terms of Service</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className={styles.footerTitle}>Connect</h4>
                        <div className={styles.footerLinks} style={{ flexDirection: 'row', gap: '1rem' }}>
                            <a href="#" className={styles.footerLink}><Twitter size={20} /></a>
                            <a href="#" className={styles.footerLink}><Instagram size={20} /></a>
                            <a href="#" className={styles.footerLink}><Github size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className={styles.copyright}>
                    © {new Date().getFullYear()} National Parks Explorer. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
