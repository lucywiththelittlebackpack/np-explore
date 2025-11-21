import Link from 'next/link';
import Image from 'next/image';
import { getCollections } from '@/lib/data';

export default function CollectionsIndex() {
    const collections = getCollections();

    return (
        <main className="container mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
                    Trip Inspiration
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Curated collections of the world's most spectacular national parks.
                    Find your perfect adventure based on what you love.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {collections.map((collection) => (
                    <Link key={collection.id} href={`/collections/${collection.slug}`} className="group relative h-[400px] rounded-2xl overflow-hidden block">
                        <Image
                            src={collection.coverImage}
                            alt={collection.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                        <div className="absolute bottom-0 left-0 w-full p-8">
                            <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">{collection.title}</h2>
                            <p className="text-slate-300 text-sm mb-4 line-clamp-2">{collection.description}</p>
                            <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/30">
                                {collection.parks.length} Parks
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
