'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/layout.module.css';
import { Compass } from 'lucide-react';

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <Compass size={32} color="var(--primary)" />
                    NP<span>Explore</span>
                </Link>

                <div className={styles.navLinks}>
                    <Link
                        href="/"
                        className={`${styles.navLink} ${isActive('/') ? styles.navLinkActive : ''}`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/search"
                        className={`${styles.navLink} ${isActive('/search') ? styles.navLinkActive : ''}`}
                    >
                        Find Parks
                    </Link>
                    <Link
                        href="/wildlife"
                        className={`${styles.navLink} ${isActive('/wildlife') ? styles.navLinkActive : ''}`}
                    >
                        Wildlife
                    </Link>
                    <Link
                        href="/collections"
                        className={`${styles.navLink} ${isActive('/collections') ? styles.navLinkActive : ''}`}
                    >
                        Inspiration
                    </Link>
                    <Link
                        href="/accommodation"
                        className={`${styles.navLink} ${isActive('/accommodation') ? styles.navLinkActive : ''}`}
                    >
                        Accommodation
                    </Link>
                    <Link
                        href="/about"
                        className={`${styles.navLink} ${isActive('/about') ? styles.navLinkActive : ''}`}
                    >
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}
