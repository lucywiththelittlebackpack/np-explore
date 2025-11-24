import { getCollections } from '@/lib/data';
import CollectionCard from '@/components/collections/CollectionCard';
import Hero from '@/components/ui/Hero';

export default function CollectionsIndex() {
    const collections = getCollections();

    return (
        <main className="min-h-screen bg-background">
            <Hero
                title="Park Collections"
                subtitle="Discover curated groups of national parks based on your interests. From bird watching to island hopping."
                backgroundImage="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=2000"
                tags={
                    <span className="inline-block text-brand-sand bg-brand-sand/10 backdrop-blur-md border border-brand-sand/20 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                        Themed Adventures
                    </span>
                }
                size="default"
            />

            <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {collections.map((collection) => (
                        <CollectionCard key={collection.id} collection={collection} />
                    ))}
                </div>
            </div>
        </main>
    );
}
