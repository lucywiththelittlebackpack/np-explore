import Link from 'next/link';
import Image from 'next/image';
import { getParks, getCollections } from '@/lib/data';
import ParkCard from '@/components/ui/ParkCard';
import { Search, Map, ArrowRight, Bird, Camera, Binoculars, Tent, Globe } from 'lucide-react';

export default function Home() {
  const featuredParks = getParks().slice(0, 3);
  const collections = getCollections();

  const categories = [
    { name: 'Birding', icon: Bird, color: 'bg-green-100 text-green-700' },
    { name: 'Safari', icon: Binoculars, color: 'bg-amber-100 text-amber-700' },
    { name: 'Photography', icon: Camera, color: 'bg-blue-100 text-blue-700' },
    { name: 'Camping', icon: Tent, color: 'bg-orange-100 text-orange-700' },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            fill
            className="object-cover brightness-[0.65] scale-105 animate-ken-burns"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-slate-50/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-sm font-bold mb-6 animate-fade-in-up">
            <Globe size={16} className="text-brand-sand" />
            <span>Discover Earth's Greatest Treasures</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sand to-yellow-200">Wild</span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Explore national parks, spot rare wildlife, and book eco-friendly stays in the world's most beautiful places.
          </p>

          {/* Floating Search Box */}
          <div className="bg-white p-3 rounded-2xl shadow-2xl max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex-grow w-full md:w-auto px-4 py-2 text-left">
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1 tracking-wider">Where to?</label>
              <input
                type="text"
                placeholder="Try 'Costa Rica' or 'Yellowstone'"
                className="w-full text-slate-900 text-lg font-bold focus:outline-none placeholder:text-slate-300 placeholder:font-normal"
              />
            </div>
            <div className="hidden md:block w-px h-12 bg-slate-100" />
            <div className="w-full md:w-auto">
              <Link
                href="/explore"
                className="w-full md:w-auto bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2"
              >
                <Search size={20} />
                <span>Search</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 -mt-20 relative z-20 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, idx) => (
            <Link
              key={cat.name}
              href={`/explore?activity=${cat.name}`}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center gap-4 border border-slate-50 group"
            >
              <div className={`p-4 rounded-full ${cat.color} group-hover:scale-110 transition-transform duration-300`}>
                <cat.icon size={32} />
              </div>
              <span className="font-bold text-slate-700 text-lg">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Parks */}
      <section className="container mx-auto px-4 py-12 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-3">Trending Now</h2>
            <p className="text-slate-500 text-lg">Most visited destinations this season</p>
          </div>
          <Link href="/explore" className="group flex items-center gap-2 text-brand-primary font-bold hover:text-brand-secondary transition-colors px-6 py-3 bg-brand-primary/5 rounded-full hover:bg-brand-primary/10">
            View all destinations <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredParks.map((park) => (
            <ParkCard key={park.id} park={park} />
          ))}
        </div>
      </section>

      {/* Collections */}
      <section className="bg-brand-dark py-24 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-sand font-bold uppercase tracking-widest text-sm mb-2 block">Curated For You</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Travel Collections</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Hand-picked itineraries for every type of traveler. From dense rainforests to open savannahs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.slug}`}
                className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
              >
                <Image
                  src={collection.coverImage}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-3xl font-bold mb-3 leading-tight">{collection.title}</h3>
                  <p className="text-slate-300 text-base mb-6 line-clamp-2 opacity-90">
                    {collection.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-brand-sand font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                    Explore Collection <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-32 text-center">
        <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-[3rem] p-12 md:p-24 shadow-2xl shadow-brand-primary/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
              Ready to start your journey?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-12 text-xl font-light leading-relaxed">
              Join thousands of nature enthusiasts discovering the world's most beautiful protected areas.
            </p>
            <Link
              href="/explore"
              className="inline-flex items-center gap-3 bg-white text-brand-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-sand hover:text-white transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <Map size={24} />
              Explore Interactive Map
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
