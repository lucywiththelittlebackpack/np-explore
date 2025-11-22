import Link from 'next/link';
import Image from 'next/image';
import { Collection } from '@/lib/types';
import SaveButton from '@/components/ui/SaveButton';
import { Calendar, MapPin } from 'lucide-react';

interface CollectionCardProps {
    collection: Collection;
    featured?: boolean;
}

export default function CollectionCard({ collection, featured = false }: CollectionCardProps) {
    return (
        <Link
            href={`/collections/${collection.slug}`}
            className={`group relative block overflow-hidden rounded-3xl ${featured ? 'md:col-span-2 md:row-span-2 h-[500px]' : 'h-[400px]'}`}
        >
            <Image
                src={collection.coverImage}
                alt={collection.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute top-4 right-4 z-20 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <SaveButton />
            </div>

            <div className="absolute top-4 left-4 z-20 flex gap-2">
                <span className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10 flex items-center gap-1">
                    <Calendar size={12} /> {collection.duration}
                </span>
                <span className="bg-brand-green/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10 uppercase tracking-wider">
                    {collection.vibe}
                </span>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="flex items-center gap-2 mb-2 text-slate-300 text-xs font-bold uppercase tracking-widest">
                        <MapPin size={12} />
                        {collection.parks.length} Destinations
                    </div>
                    <h3 className={`${featured ? 'text-3xl md:text-5xl' : 'text-2xl'} font-display font-bold text-white mb-2 leading-tight`}>
                        {collection.title}
                    </h3>
                    <p className="text-slate-200 text-sm md:text-base line-clamp-2 opacity-90 font-light">
                        {collection.subTitle}
                    </p>
                </div>
            </div>
        </Link>
    );
}
