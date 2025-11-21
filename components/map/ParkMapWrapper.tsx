'use client';

import dynamic from 'next/dynamic';
import { Park } from '@/lib/types';

const Map = dynamic(() => import('@/components/map/Map'), {
    ssr: false,
    loading: () => <div className="w-full h-64 bg-slate-100 animate-pulse rounded-xl"></div>
});

interface ParkMapWrapperProps {
    park: Park;
}

export default function ParkMapWrapper({ park }: ParkMapWrapperProps) {
    return (
        <Map parks={[park]} center={[park.coordinates.lat, park.coordinates.lng]} zoom={8} />
    );
}
