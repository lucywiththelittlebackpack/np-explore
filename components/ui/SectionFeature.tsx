import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SectionFeatureProps {
    title: string;
    subtitle: string;
    action: string;
    link: string;
}

export default function SectionFeature({
    title,
    subtitle,
    action,
    link,
}: SectionFeatureProps) {
    return (
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-3">{title}</h2>
            <p className="text-slate-500 text-lg">{subtitle}</p>
          </div>
          <Link href={link} className="group flex items-center gap-2 text-brand-primary font-bold hover:text-brand-secondary transition-colors px-6 py-3 bg-brand-primary/5 rounded-full hover:bg-brand-primary/10">
            {action} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
    );
}
