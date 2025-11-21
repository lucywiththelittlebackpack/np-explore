'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Park } from '@/lib/types';
import L from 'leaflet';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Fix for Leaflet's default icon issues in Next.js
const createCustomIcon = () => {
    return L.divIcon({
        className: 'custom-marker',
        html: `<div class="w-8 h-8 bg-brand-primary rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
           </div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });
};

interface MapProps {
    parks: Park[];
    center?: [number, number];
    zoom?: number;
}

export default function Map({ parks, center = [20, 0], zoom = 2 }: MapProps) {
    return (
        <div className="h-full w-full rounded-xl overflow-hidden shadow-lg border border-slate-200 z-0">
            <MapContainer
                center={center}
                zoom={zoom}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />
                {parks.map((park) => (
                    <Marker
                        key={park.id}
                        position={[park.coordinates.lat, park.coordinates.lng]}
                        icon={createCustomIcon()}
                    >
                        <Popup className="custom-popup">
                            <div className="min-w-[200px]">
                                <div className="h-24 w-full relative mb-2 rounded-md overflow-hidden">
                                    <img src={park.heroImage} alt={park.name} className="object-cover w-full h-full" />
                                </div>
                                <h3 className="font-display font-bold text-brand-dark text-lg mb-1">{park.name}</h3>
                                <p className="text-xs text-slate-500 mb-2">{park.location}</p>
                                <Link
                                    href={`/parks/${park.slug}`}
                                    className="inline-flex items-center text-xs font-bold text-brand-primary hover:text-brand-secondary"
                                >
                                    Explore <ArrowRight size={12} className="ml-1" />
                                </Link>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
