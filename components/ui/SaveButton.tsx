'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SaveButtonProps {
    className?: string;
    initialSaved?: boolean;
}

export default function SaveButton({ className, initialSaved = false }: SaveButtonProps) {
    const [isSaved, setIsSaved] = useState(initialSaved);

    const toggleSave = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsSaved(!isSaved);
    };

    return (
        <button
            onClick={toggleSave}
            className={cn(
                "p-2 rounded-full transition-all duration-300 active:scale-90 backdrop-blur-sm",
                isSaved
                    ? "bg-red-500/10 text-red-500 hover:bg-red-500/20"
                    : "bg-black/20 text-white hover:bg-white hover:text-black",
                className
            )}
            aria-label={isSaved ? "Remove from saved" : "Save collection"}
        >
            <Heart
                size={20}
                className={cn(
                    "transition-all duration-300",
                    isSaved && "fill-current scale-110"
                )}
            />
        </button>
    );
}
