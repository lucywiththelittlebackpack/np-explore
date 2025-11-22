import { getWildlifeById, getWildlife, getParks } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, Info, Calendar } from 'lucide-react';

interface PageProps {
    params: {
        id: string;
    };
}

export async function generateStaticParams() {
    const wildlife = getWildlife();
    return wildlife.map((animal) => ({
        id: animal.id,
    }));
}

export default function WildlifePage({ params }: PageProps) {
    const animal = getWildlifeById(params.id);
    const parks = getParks().filter(p => p.wildlife.some(w => w.id === params.id));

    if (!animal) {
        notFound();
    }

    return (
        <main className="pb-24">
            <div className="relative h-[50vh] w-full">
                <Image
                    src={animal.image}
                    alt={animal.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="container mx-auto">
                        <Link href="/wildlife" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors">
                            <ArrowLeft size={20} /> Back to Index
                        </Link>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="bg-brand-green/20 text-brand-green px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider border border-brand-green/30">
                                {animal.type}
                            </span>
                            <span className="bg-brand-gold/20 text-brand-gold px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider border border-brand-gold/30">
                                {animal.rarity}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white drop-shadow-lg">{animal.name}</h1>
                        <p className="text-xl text-slate-300 mt-4 italic">{animal.scientificName}</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                    <section className="bg-surface p-8 rounded-2xl border border-slate-800">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Info className="text-brand-green" /> About
                        </h2>
                        <p className="text-slate-300 leading-relaxed text-lg">{animal.description}</p>

                        <div className="mt-6 pt-6 border-t border-slate-700 flex items-center gap-3 text-slate-300">
                            <Calendar className="text-brand-green" />
                            <span className="font-medium">Best Time to Spot:</span>
                            <span>{animal.bestTime}</span>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">Where to Find Them</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {parks.map(park => (
                                <Link key={park.id} href={`/parks/${park.slug}`} className="group flex items-center gap-4 bg-surface p-4 rounded-xl border border-slate-800 hover:border-brand-green transition-colors">
                                    <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                                        <Image src={park.heroImage} alt={park.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground group-hover:text-brand-green transition-colors">{park.name}</h3>
                                        <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                                            <MapPin size={12} /> {park.location}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
