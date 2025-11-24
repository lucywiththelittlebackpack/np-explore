import { getTrips } from '@/lib/data';
import TripCard from '@/components/trips/TripCard';
import Hero from '@/components/ui/Hero';

export default function TripsIndex() {
    const trips = getTrips();
    const featuredTrip = trips[0];
    const otherTrips = trips.slice(1);

    return (
        <main className="min-h-screen bg-background">
            <Hero
                title="Curated Trips"
                subtitle="Expertly designed journeys through the world's most spectacular national parks. Choose your vibe, pack your bags, and go."
                backgroundImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000"
                tags={
                    <span className="inline-block text-brand-sand bg-brand-sand/10 backdrop-blur-md border border-brand-sand/20 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                        Hand-Picked Itineraries
                    </span>
                }
                size="default"
            />

            <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <div className="md:col-span-2 lg:col-span-2 row-span-2">
                        <TripCard trip={featuredTrip} featured />
                    </div>

                    {otherTrips.map((trip) => (
                        <TripCard key={trip.id} trip={trip} />
                    ))}
                </div>
            </div>
        </main>
    );
}
