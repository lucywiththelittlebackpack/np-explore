import { cn } from '@/lib/utils';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    className?: string;
    children?: React.ReactNode;
}

export default function SectionHeader({
    title,
    subtitle,
    centered = false,
    className,
    children
}: SectionHeaderProps) {
    return (
        <div className={cn("mb-12", centered && "text-center", className)}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
            {children}
        </div>
    );
}
