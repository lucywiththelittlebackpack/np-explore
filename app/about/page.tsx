import { Compass, Heart, BookOpen, Users, Award, Globe, ShieldCheck } from 'lucide-react';
import Hero from '@/components/ui/Hero';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <main className="bg-white">
            {/* Hero */}
            <Hero
                title="20 Years of Wild Adventures"
                subtitle="Since 2005, GreenPlanet has been the world's #1 trusted resource for wildlife tourism, connecting over 10 million travelers with nature's greatest spectacles."
                backgroundImage="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000"
                size="large"
            />

            {/* Stats Section */}
            <section className="py-12 border-b border-slate-100 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-display font-bold text-brand-primary mb-2">10M+</div>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Happy Travelers</div>
                        </div>
                        <div>
                            <div className="text-4xl font-display font-bold text-brand-primary mb-2">500+</div>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">National Parks</div>
                        </div>
                        <div>
                            <div className="text-4xl font-display font-bold text-brand-primary mb-2">120</div>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Countries</div>
                        </div>
                        <div>
                            <div className="text-4xl font-display font-bold text-brand-primary mb-2">#1</div>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Wildlife Platform</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-6">Pioneering Responsible Travel</h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            What started as a small journal by two biologists in 2005 has grown into the global standard for ethical wildlife exploration. For two decades, we've defined what it means to travel with purpose.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800"
                                alt="Founders in the field"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-brand-dark">Our Legacy</h3>
                            <p className="text-slate-600 leading-relaxed">
                                GreenPlanet wasn't built in a boardroom. It was born in the rainforests of Borneo and the savannahs of Kenya. We realized that travelers lacked a trustworthy source for finding authentic, ethical wildlife experiences.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Today, we are proud to be the industry leader, setting the benchmark for conservation-focused tourism. Our "GreenCheck" certification is now the gold standard for eco-lodges worldwide.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <Award className="text-brand-primary" size={32} />
                                <Globe className="text-brand-primary" size={32} />
                                <ShieldCheck className="text-brand-primary" size={32} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">Meet the Experts</h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                            Our team consists of world-renowned biologists, conservationists, and travel experts dedicated to curating the perfect journey for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                name: 'Dr. Sarah Chen',
                                role: 'Chief Conservation Officer',
                                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
                                bio: 'Former lead researcher at WWF with 15 years of field experience.'
                            },
                            {
                                name: 'Marcus Thorne',
                                role: 'Head of Expeditions',
                                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
                                bio: 'National Geographic photographer and certified safari guide.'
                            },
                            {
                                name: 'Elena Rodriguez',
                                role: 'Sustainability Director',
                                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
                                bio: 'Pioneered our "GreenCheck" eco-certification system.'
                            },
                            {
                                name: 'James Wilson',
                                role: 'CEO & Co-Founder',
                                image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
                                bio: 'Founded GreenPlanet to bridge the gap between tourism and conservation.'
                            }
                        ].map((member) => (
                            <div key={member.name} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="relative h-80 overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-brand-dark mb-1">{member.name}</h3>
                                    <p className="text-brand-primary font-medium text-sm mb-4 uppercase tracking-wide">{member.role}</p>
                                    <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-brand-dark">Why the World Trusts Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="flex gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 text-brand-primary">
                                <ShieldCheck size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-dark mb-2">Vetted Experiences</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Every park and lodge on our platform undergoes a rigorous 50-point inspection to ensure safety, quality, and ethical standards.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 text-brand-primary">
                                <Users size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-dark mb-2">24/7 Global Support</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    With offices in London, Nairobi, and Costa Rica, our team is always awake to assist you, wherever your journey takes you.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 text-brand-primary">
                                <BookOpen size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-dark mb-2">Expert Knowledge</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We don't just aggregate data; we create it. Our guides are written by local experts who know the land better than anyone.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 text-brand-primary">
                                <Heart size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-dark mb-2">Impact Driven</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    1% of every booking goes directly to our "WildFuture" fund, supporting anti-poaching units and habitat restoration.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
