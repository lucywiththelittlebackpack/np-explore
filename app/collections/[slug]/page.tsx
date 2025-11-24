
import { getCollectionBySlug, getCollections } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ParkCard from '@/components/ui/ParkCard';
import SaveButton from '@/components/ui/SaveButton';
import Hero from '@/components/ui/Hero';
import SectionHeader from '@/components/ui/SectionHeader';
import { ArrowLeft, Mountain } from 'lucide-react';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const collections = getCollections();
    return collections.map((c) => ({
        slug: c.slug,
    }));
}

export default async function CollectionPage({ params }: PageProps) {
    const { slug } = await params;
    const collection = getCollectionBySlug(slug);

    if (!collection) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background">
            <Hero
                title={collection.title}
                subtitle={collection.subTitle}
                backgroundImage={collection.coverImage}
                size="large"
                backLink={
                    <Link href="/collections" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors hover:-translate-x-1 duration-300">
                        <ArrowLeft size={20} /> Back to Collections
                    </Link>
                }
                tags={
                    <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-brand-primary/20">
                        <Mountain size={14} /> {collection.vibe}
                    </span>
                }
                actions={
                    <SaveButton className="w-14 h-14 !p-0 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20" />
                }
            />

            <div className="container mx-auto px-4 py-16">
                <div className="prose prose-lg max-w-none mb-16 text-slate-600">
                    <SectionHeader title="About this Collection" />
                    <p className="leading-relaxed text-lg">{collection.description}</p>
                </div>

                <div>
                    <SectionHeader title="Featured Parks" subtitle={`Explore the ${collection.parks.length} national parks in this collection.`} />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {collection.parks.map((park) => (
                            <ParkCard key={park.id} park={park} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}


