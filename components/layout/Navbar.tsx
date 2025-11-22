'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const isActive = (path: string) => pathname === path;

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/explore', label: 'Explore' },
        { path: '/collections', label: 'Collections' },
        { path: '/accommodation', label: 'Stays' },
        { path: '/about', label: 'About' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="font-display text-2xl font-bold text-brand-dark flex items-center gap-2 relative z-50">
                    <Globe size={32} className="text-brand-primary" />
                    <span className={scrolled || isOpen ? 'text-brand-dark' : 'text-white mix-blend-difference'}>GreenPlanet</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`text-sm font-bold transition-colors duration-200 ${isActive(link.path)
                                ? 'text-brand-primary'
                                : scrolled ? 'text-slate-600 hover:text-brand-primary' : 'text-white/90 hover:text-white'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/explore"
                        className={`px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg ${scrolled
                            ? 'bg-brand-primary text-white hover:bg-brand-secondary shadow-brand-primary/20'
                            : 'bg-white text-brand-primary hover:bg-slate-100'
                            }`}
                    >
                        Plan Trip
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`md:hidden relative z-50 p-2 ${scrolled || isOpen ? 'text-slate-800' : 'text-white'}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <div
                className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-8 transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        href={link.path}
                        className={`text-3xl font-display font-bold ${isActive(link.path) ? 'text-brand-primary' : 'text-slate-800'
                            }`}
                    >
                        {link.label}
                    </Link>
                ))}
                <Link
                    href="/explore"
                    className="mt-4 bg-brand-primary text-white px-8 py-4 rounded-full text-xl font-bold shadow-xl shadow-brand-primary/20"
                >
                    Plan Your Trip
                </Link>
            </div>
        </nav>
    );
}
