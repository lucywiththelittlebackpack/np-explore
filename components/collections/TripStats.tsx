import { Calendar, MapPin, Mountain } from 'lucide-react';
import { Collection } from '@/lib/types';

interface TripStatsProps {
    collection: Collection;
}

export default function TripStats({ collection }: TripStatsProps) {
    return (
        <div className="sticky top-8 p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">Trip Summary</h3>

            <div className="space-y-6">
                <div className="flex items-start gap-4 pb-6 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-brand-sand/10 flex items-center justify-center text-brand-sand">
                        <Calendar size={20} />
                    </div>
                    <div>
                        <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Duration</div>
                        <div className="text-foreground font-bold text-lg">{collection.duration}</div>
                    </div>
                </div>

                <div className="flex items-start gap-4 pb-6 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                        <Mountain size={20} />
                    </div>
                    <div>
                        <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Vibe</div>
                        <div className="text-foreground font-bold text-lg">{collection.vibe}</div>
                    </div>
                </div>

                <div className="flex items-start gap-4 pb-6 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                        <MapPin size={20} />
                    </div>
                    <div>
                        <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Stops</div>
                        <div className="text-foreground font-bold text-lg">{collection.parks.length} National Parks</div>
                    </div>
                </div>
            </div>

            <button className="w-full mt-8 bg-brand-primary hover:bg-brand-secondary text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2 hover:-translate-y-0.5">
                Customize Trip
            </button>
        </div>
    );
}
