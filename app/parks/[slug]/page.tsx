import { getParkBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ParkMapWrapper from '@/components/map/ParkMapWrapper';
import { MapPin, Calendar, Camera, CheckCircle, Star, ArrowRight, Info } from 'lucide-react';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ParkPage({ params }: PageProps) {
    const { slug } = await params;
    const park = getParkBySlug(slug);

    if (!park) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 pb-24">
            {/* Parallax Hero */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <Image
                    src={park.heroImage}
                    alt={park.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 text-white">
                    <div className="container mx-auto">
                        <div className="flex items-center gap-2 text-brand-sand font-bold uppercase tracking-widest text-sm mb-4 animate-fade-in-up">
                            <MapPin size={16} />
                            {park.location}
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            {park.name}
                        </h1>
                        <p className="text-lg md:text-2xl text-slate-200 max-w-3xl font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            {park.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Quick Facts Cards */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-wrap gap-8 items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-50 p-3 rounded-2xl text-brand-primary"><Calendar size={24} /></div>
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Best Season</p>
                                    <p className="font-bold text-brand-dark text-lg">{park.bestSeason}</p>
                                </div>
                            </div>
                            <div className="w-px h-12 bg-slate-100 hidden md:block" />
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-50 p-3 rounded-2xl text-blue-600"><Camera size={24} /></div>
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Top Activity</p>
                                    <p className="font-bold text-brand-dark text-lg">{park.activities?.[0] || 'Sightseeing'}</p>
                                </div>
                            </div>
                            <div className="w-px h-12 bg-slate-100 hidden md:block" />
                            <div className="flex items-center gap-4">
                                <div className="bg-amber-50 p-3 rounded-2xl text-amber-500"><Star size={24} /></div>
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Rating</p>
                                    <p className="font-bold text-brand-dark text-lg">4.9/5.0</p>
                                </div>
                            </div>
                        </div>

                        {/* Wildlife Checklist */}
                        <section>
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-3xl font-display font-bold text-brand-dark">Wildlife Checklist</h2>
                                <span className="bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full text-sm font-bold">
                                    {park.wildlife.length} Species Found
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {park.wildlife.map((animal) => (
                                    <Link key={animal.id} href={`/wildlife/${animal.id}`} className="flex items-center gap-5 bg-white p-4 rounded-2xl hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-primary/30 group">
                                        <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                                            <Image src={animal.image} alt={animal.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="font-bold text-lg text-brand-dark group-hover:text-brand-primary transition-colors">{animal.name}</h3>
                                            <p className="text-xs text-slate-500 italic mb-2">{animal.scientificName}</p>
                                            <span className={`text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-wide ${animal.rarity === 'Rare' ? 'bg-red-50 text-red-600' :
                                                animal.rarity === 'Endangered' ? 'bg-red-50 text-red-600' :
                                                    'bg-green-50 text-green-600'
                                                }`}>
                                                {animal.rarity}
                                            </span>
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                                            <ArrowRight size={20} className="text-brand-primary" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>

                        {/* Accommodation */}
                        <section>
                            <h2 className="text-3xl font-display font-bold text-brand-dark mb-8">Where to Stay</h2>
                            <div className="space-y-6">
                                {park.accommodation.map((stay) => (
                                    <div key={stay.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 group flex flex-col md:flex-row">
                                        <div className="relative h-64 md:h-auto md:w-2/5">
                                            <Image src={stay.image} alt={stay.name} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill className="object-cover" />
                                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold text-brand-dark shadow-sm">
                                                {stay.type}
                                            </div>
                                        </div>
                                        <div className="p-8 md:w-3/5 flex flex-col justify-center">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-bold text-2xl text-brand-dark">{stay.name}</h3>
                                                <span className="text-brand-primary font-bold text-sm bg-brand-primary/5 px-3 py-1 rounded-full">{stay.priceRange}</span>
                                            </div>
                                            <p className="text-slate-500 mb-6 flex items-center gap-2 text-sm">
                                                <MapPin size={14} /> {stay.distance}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {stay.amenities.slice(0, 3).map((amenity) => (
                                                    <span key={amenity} className="text-xs bg-slate-50 text-slate-600 px-3 py-1.5 rounded-lg border border-slate-100">
                                                        {amenity}
                                                    </span>
                                                ))}
                                            </div>
                                            <a
                                                href={`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(stay.name)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-full py-4 bg-brand-dark text-white font-bold rounded-xl hover:bg-brand-primary transition-colors shadow-lg shadow-brand-dark/20 text-center"
                                            >
                                                Check Availability
                                            </a>
                                        </div>
                                    </div>
                                ))}
                                {park.accommodation.length === 0 && (
                                    <div className="p-12 text-center bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 text-slate-500">
                                        <Info size={32} className="mx-auto mb-4 text-slate-400" />
                                        <p>No specific accommodations listed for this park yet.</p>
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8 lg:sticky lg:top-24 h-fit">
                        {/* Map Card */}
                        <div className="bg-white p-4 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                            <h3 className="font-bold text-brand-dark mb-4 flex items-center gap-2 px-2">
                                <MapPin size={20} className="text-brand-primary" /> Location
                            </h3>
                            <div className="h-64 rounded-2xl overflow-hidden mb-6 relative z-0 shadow-inner">
                                <ParkMapWrapper park={park} />
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center px-1">
                                    <span className="text-sm font-bold text-slate-500">Est. Return Flight</span>
                                    <span className="text-lg font-bold text-brand-dark">$300 - $500</span>
                                </div>
                                <a
                                    href={`https://www.google.com/travel/flights?q=Flights+to+${park.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-brand-primary text-white font-bold py-4 rounded-xl hover:bg-brand-secondary transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/20"
                                >
                                    Book Flights <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Highlights */}
                        <div className="bg-brand-dark text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            <h3 className="font-bold text-xl mb-6 relative z-10">Park Highlights</h3>
                            <ul className="space-y-4 relative z-10">
                                {park.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex items-start gap-4 group">
                                        <div className="mt-1 bg-brand-primary/20 p-1.5 rounded-full group-hover:bg-brand-primary transition-colors">
                                            <CheckCircle size={14} className="text-brand-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-slate-200 font-medium">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
