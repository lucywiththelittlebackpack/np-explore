import { Compass, Heart, BookOpen, Users } from 'lucide-react';

export default function AboutPage() {
    return (
        <main>
            {/* Hero */}
            <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden bg-surface">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center opacity-20" />
                <div className="relative z-10 container mx-auto px-4">
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient mb-6">About WildLens</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Our mission is to connect people with nature through responsible tourism and wildlife conservation.
                    </p>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl font-display font-bold mb-6 text-foreground">Who We Are</h2>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            WildLens was founded by a group of wildlife photographers and nature enthusiasts who wanted to make it easier for people to find the perfect destination for their next adventure. We believe that experiencing nature firsthand is the best way to foster a love for our planet and a desire to protect it.
                        </p>
                    </div>

                    <h2 className="text-3xl font-display font-bold mb-12 text-foreground">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 text-brand-primary">
                                <Heart size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-2">Conservation First</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    We prioritize parks and accommodations that are committed to sustainability and wildlife protection.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 text-brand-primary">
                                <Users size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-2">Community</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    We support local communities by promoting locally-owned businesses and guides.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 text-brand-primary">
                                <BookOpen size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-2">Education</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    We provide detailed information about wildlife and ecosystems to help travelers learn before they go.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 text-brand-primary">
                                <Compass size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-2">Accessibility</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    We believe nature is for everyone and strive to highlight accessible trails and facilities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
