
import { getTripBySlug, getTrips } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ParkCard from '@/components/ui/ParkCard';
import SaveButton from '@/components/ui/SaveButton';
import Hero from '@/components/ui/Hero';
import TripStats from '@/components/trips/TripStats';
import SectionHeader from '@/components/ui/SectionHeader';
import { ArrowLeft, Map, Mountain, Clock } from 'lucide-react';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const trips = getTrips();
    return trips.map((t) => ({
        slug: t.slug,
    }));
}

export default async function TripPage({ params }: PageProps) {
    const { slug } = await params;
    const trip = getTripBySlug(slug);

    if (!trip) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background">
            <Hero
                title={trip.title}
                subtitle={trip.subTitle}
                backgroundImage={trip.coverImage}
                size="large"
                backLink={
                    <Link href="/trips" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors hover:-translate-x-1 duration-300">
                        <ArrowLeft size={20} /> Back to Trips
                    </Link>
                }
                tags={
                    <>
                        <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-brand-primary/20">
                            <Mountain size={14} /> {trip.vibe}
                        </span>
                        <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2 border border-white/20">
                            <Clock size={14} /> {trip.duration}
                        </span>
                    </>
                }
                actions={
                    <>
                        <button className="bg-white text-brand-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                            Start Planning
                        </button>
                        <SaveButton className="w-14 h-14 !p-0 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20" />
                    </>
                }
            />

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Left Column: Itinerary & Description */}
                    <div className="lg:col-span-2">
                        <div className="prose prose-lg max-w-none mb-16 text-slate-600">
                            <SectionHeader title="About this Trip" />
                            <p className="leading-relaxed text-lg">{trip.description}</p>
                        </div>

                        <div className="mb-16">
                            <SectionHeader title="Trip Itinerary">
                                <div className="flex items-center gap-2 text-brand-primary font-bold mt-2">
                                    <Map size={20} />
                                    <span>Day by Day Breakdown</span>
                                </div>
                            </SectionHeader>

                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200">
                                {trip.itinerary?.map((item, index) => (
                                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-brand-primary text-white shadow-lg z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                            <span className="font-bold text-sm">{index + 1}</span>
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-brand-primary font-bold text-sm uppercase tracking-wider">{item.day}</span>
                                                {item.activity && <span className="text-slate-500 text-xs bg-slate-100 px-2 py-1 rounded-full font-medium">{item.activity}</span>}
                                            </div>
                                            <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <SectionHeader title="Destinations Included" subtitle="The national parks you'll visit on this journey." />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {trip.parks.map((park) => (
                                    <ParkCard key={park.id} park={park} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sticky Summary */}
                    <div className="lg:col-span-1">
                        <TripStats trip={trip} />
                    </div>
                </div>
            </div>
        </main>
    );
}
