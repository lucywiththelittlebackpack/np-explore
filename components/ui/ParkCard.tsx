import Link from 'next/link';
import Image from 'next/image';
import { Park } from '@/lib/types';
import { MapPin, ArrowUpRight } from 'lucide-react';

interface ParkCardProps {
    park: Park;
}

export default function ParkCard({ park }: ParkCardProps) {
    return (
        <Link href={`/parks/${park.slug}`} className="group block relative h-[400px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
            {/* Image Background */}
            <Image
                src={park.heroImage}
                alt={park.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 text-brand-sand text-xs font-bold uppercase tracking-wider mb-2">
                        <MapPin size={14} />
                        {park.location}
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white mb-2 leading-tight">
                        {park.name}
                    </h3>

                    <p className="text-slate-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {park.description}
                    </p>

                    <div className="flex items-center gap-2 text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        Explore Park <ArrowUpRight size={16} />
                    </div>
                </div>
            </div>

            {/* Top Badge */}
            {park.activities && park.activities.length > 0 && (
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full text-xs font-bold text-white">
                    {park.activities[0]}
                </div>
            )}
        </Link>
    );
}
