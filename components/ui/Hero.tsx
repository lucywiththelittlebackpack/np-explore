import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HeroProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
    tags?: React.ReactNode;
    actions?: React.ReactNode;
    backLink?: React.ReactNode;
    className?: string;
    size?: 'default' | 'large' | 'full';
}

export default function Hero({
    title,
    subtitle,
    backgroundImage,
    tags,
    actions,
    backLink,
    className,
    size = 'default'
}: HeroProps) {
    const heightClass = {
        default: 'h-[50vh] md:h-[60vh]',
        large: 'h-[70vh] md:h-[85vh]',
        full: 'h-screen'
    }[size];

    return (
        <div className={cn("relative flex items-end pb-16 overflow-hidden", heightClass, className)}>
            <Image
                src={backgroundImage}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 bg-black/20" />

            <div className="relative z-10 container mx-auto px-4">
                {backLink && (
                    <div className="mb-8 animate-fade-in-up">
                        {backLink}
                    </div>
                )}

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                    <div className="max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        {tags && (
                            <div className="flex flex-wrap gap-3 mb-4">
                                {tags}
                            </div>
                        )}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 drop-shadow-2xl leading-tight">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed max-w-2xl">
                                {subtitle}
                            </p>
                        )}
                    </div>

                    {actions && (
                        <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            {actions}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
