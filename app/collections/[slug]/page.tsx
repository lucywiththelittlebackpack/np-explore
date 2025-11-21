import { getCollectionBySlug, getCollections } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ParkCard from '@/components/ui/ParkCard';
import { ArrowLeft } from 'lucide-react';

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    const collections = getCollections();
    return collections.map((c) => ({
        slug: c.slug,
    }));
}

export default function CollectionPage({ params }: PageProps) {
    const collection = getCollectionBySlug(params.slug);

    if (!collection) {
        notFound();
    }

    return (
        <main>
            <div className="relative h-[50vh] flex items-center justify-center text-center">
                <Image
                    src={collection.coverImage}
                    alt={collection.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 container mx-auto px-4">
                    <Link href="/collections" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                        <ArrowLeft size={16} /> Back to Collections
                    </Link>
                    <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4 drop-shadow-xl">{collection.title}</h1>
                    <p className="text-xl text-slate-200 max-w-2xl mx-auto">{collection.description}</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="flex items-center gap-4 mb-12 pb-4 border-b border-slate-800">
                    <h2 className="text-3xl font-display font-bold text-foreground">Featured Parks</h2>
                    <span className="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-bold">
                        {collection.parks.length} Destinations
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collection.parks.map((park) => (
                        <ParkCard key={park.id} park={park} />
                    ))}
                </div>
            </div>
        </main>
    );
}
