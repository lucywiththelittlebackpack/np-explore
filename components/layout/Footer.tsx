import Link from 'next/link';
import { Compass, Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-surface border-t border-slate-800 pt-16 pb-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="font-display text-xl font-bold text-foreground flex items-center gap-2 mb-4">
                            <Compass size={24} className="text-brand-green" />
                            Wild<span>Lens</span>
                        </div>
                        <p className="text-slate-400 max-w-xs leading-relaxed">
                            The world's #1 resource for planning national park adventures.
                            Specializing in wildlife photography and eco-friendly travel.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-base font-semibold mb-6 text-foreground">Explore</h4>
                        <div className="flex flex-col gap-3">
                            <Link href="/search" className="text-slate-400 text-sm hover:text-brand-green transition-colors">Find Parks</Link>
                            <Link href="/wildlife" className="text-slate-400 text-sm hover:text-brand-green transition-colors">Wildlife Index</Link>
                            <Link href="/collections" className="text-slate-400 text-sm hover:text-brand-green transition-colors">Trip Collections</Link>
                            <Link href="/accommodation" className="text-slate-400 text-sm hover:text-brand-green transition-colors">Accommodation</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-base font-semibold mb-6 text-foreground">Company</h4>
                        <div className="flex flex-col gap-3">
                            <Link href="/about" className="text-slate-400 text-sm hover:text-brand-green transition-colors">About Us</Link>
                            <Link href="#" className="text-slate-400 text-sm hover:text-brand-green transition-colors">Contact</Link>
                            <Link href="#" className="text-slate-400 text-sm hover:text-brand-green transition-colors">Privacy Policy</Link>
                            <Link href="#" className="text-slate-400 text-sm hover:text-brand-green transition-colors">Terms of Service</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-base font-semibold mb-6 text-foreground">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="text-slate-400 hover:text-brand-green transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-brand-green transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-brand-green transition-colors"><Github size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="text-center pt-8 border-t border-slate-800 text-slate-500 text-sm">
                    © 2005-{new Date().getFullYear()} WildLens. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
