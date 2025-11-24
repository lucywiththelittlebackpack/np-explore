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
        { path: '/trips', label: 'Trips' },
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
            {/* Mobile Nav Overlay & Drawer */}
            {/* Mobile Nav Overlay & Drawer */}
            <div
                className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${isOpen ? 'visible' : 'invisible pointer-events-none'}`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsOpen(false)}
                />

                {/* Drawer */}
                <div
                    className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col p-6 transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="flex justify-between items-center mb-8">
                        <Link href="/" className="font-display text-2xl font-bold text-brand-dark flex items-center gap-2" onClick={() => setIsOpen(false)}>
                            <Globe size={32} className="text-brand-primary" />
                            <span className="text-brand-dark">GreenPlanet</span>
                        </Link>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 text-slate-500 hover:text-slate-800 transition-colors"
                            aria-label="Close menu"
                        >
                            <X size={28} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`text-xl font-bold transition-colors ${isActive(link.path) ? 'text-brand-primary' : 'text-slate-800 hover:text-brand-primary'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/explore"
                            className="mt-4 bg-brand-primary text-white px-6 py-4 rounded-full text-center text-lg font-bold shadow-lg shadow-brand-primary/20 hover:bg-brand-secondary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Plan Your Trip
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
