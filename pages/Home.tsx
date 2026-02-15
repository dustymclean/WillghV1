
import React, { useMemo } from 'react';
import { ArrowRight, Sparkles, Target, Camera, ShieldCheck, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SiteConfig } from '../types';

interface HomeProps {
  config: SiteConfig;
}

const Home: React.FC<HomeProps> = ({ config }) => {
  const featuredPhoto = useMemo(() => {
    return config.photos.find(p => p.id === config.home.featuredPhotoId);
  }, [config.photos, config.home.featuredPhotoId]);

  const activeCategories = useMemo(() => {
    return [...config.categoryBranding]
      .filter(c => c.isActiveOnHome)
      .sort((a, b) => a.displayOrder - b.displayOrder);
  }, [config.categoryBranding]);

  return (
    <div className="min-h-screen pl-20 bg-[#0A0E1A]">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center px-12 lg:px-24">
        <div className="absolute inset-0 overflow-hidden z-0">
          <img 
            src={config.home.heroImage} 
            className="w-full h-full object-cover opacity-20 transition-all duration-1000 grayscale hover:grayscale-0"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E1A] via-[#0A0E1A]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-block px-3 py-1 bg-[#FF2D55] text-white text-[10px] font-bold uppercase tracking-widest">
              {config.identity.location}
            </span>
            <div className="flex items-center gap-2 text-[#FFD700] text-[10px] font-mono uppercase tracking-widest">
              <ShieldCheck size={12} />
              Proprietary Media Pipeline • 8K Native
            </div>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-extrabold leading-none tracking-tighter mb-8">
            {config.home.heroTitle.split(' ').map((word, i) => (
              word === 'Observed' ? <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFD700]">Observed </span> : word + ' '
            ))}
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-xl leading-relaxed font-light">
            {config.home.heroSubtitle}
          </p>
          <div className="flex gap-6">
            <Link to="/portal" className="px-10 py-5 bg-white text-black font-bold flex items-center gap-4 hover:bg-[#FF2D55] hover:text-white transition-all group rounded-sm shadow-xl shadow-black/50">
              OPEN THE VAULT <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <a href={`mailto:${config.identity.email}`} className="px-10 py-5 bg-white/5 text-white font-bold flex items-center gap-4 hover:bg-white/10 transition-all border border-white/10 rounded-sm uppercase tracking-widest text-xs">
              Direct Contact <Mail size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Masterpiece Section */}
      {config.home.showFeaturedSection && featuredPhoto && (
        <section className="py-32 px-12 lg:px-24 border-t border-white/5 bg-black/40 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
               <div className="absolute -inset-4 bg-[#FFD700]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <img 
                 src={featuredPhoto.url} 
                 className="w-full h-[600px] object-cover rounded-sm border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" 
                 alt="Featured Work" 
               />
               <div className="absolute top-8 right-8 p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-full">
                  <Target size={24} className="text-[#FF2D55] animate-pulse" />
               </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                 <Sparkles size={16} className="text-[#FFD700]" />
                 <span className="text-[10px] font-bold uppercase tracking-[.5em] text-[#FFD700]">{config.home.featuredSectionTitle}</span>
              </div>
              <h2 className="text-5xl font-extrabold tracking-tighter">{featuredPhoto.title}</h2>
              <div className="p-8 bg-white/5 border-l-2 border-[#FFD700] rounded-r-2xl shadow-xl">
                <p className="text-lg text-gray-400 font-light italic leading-relaxed">
                  "{featuredPhoto.artistNote || "Intentional observation."}"
                </p>
              </div>
              <div className="grid grid-cols-3 gap-8">
                 <div className="space-y-1">
                   <p className="text-[10px] text-gray-500 uppercase font-bold">ISO</p>
                   <p className="text-xl font-mono text-white">{featuredPhoto.metadata?.iso || '100'}</p>
                 </div>
                 <div className="space-y-1">
                   <p className="text-[10px] text-gray-500 uppercase font-bold">Shutter</p>
                   <p className="text-xl font-mono text-white">{featuredPhoto.metadata?.shutter || '1/250'}</p>
                 </div>
                 <div className="space-y-1">
                   <p className="text-[10px] text-gray-500 uppercase font-bold">Aperture</p>
                   <p className="text-xl font-mono text-white">{featuredPhoto.metadata?.aperture || 'f/2.8'}</p>
                 </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Dynamic Series Grid */}
      <section className="py-24 px-12 lg:px-24 border-t border-white/5">
        <div className={`grid gap-1 grid-cols-1 ${activeCategories.length >= 3 ? 'md:grid-cols-3' : activeCategories.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
          {activeCategories.map((brand, i) => (
            <Link 
              key={brand.id} 
              to={`/${brand.id === 'Concert' ? 'stage' : brand.id === 'Boudoir' ? 'sanctuary' : brand.id === 'Street' ? 'pavement' : brand.id === 'Commercial' ? 'commercial' : brand.id.toLowerCase()}`} 
              className="group block p-12 bg-[#1F2937]/10 hover:bg-white/[0.02] border border-white/5 transition-all relative overflow-hidden aspect-square flex flex-col justify-end"
            >
               <div className="absolute top-12 right-12 font-mono text-white/5 text-8xl font-bold group-hover:text-white/10 transition-all">{i + 1}</div>
               <span className="text-[10px] font-bold uppercase tracking-[.4em] mb-4 block" style={{ color: brand.color }}>{brand.id}</span>
               <h3 className="text-4xl font-extrabold mb-4 tracking-tighter">{brand.title}</h3>
               <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-[200px]">{brand.description}</p>
               <div className="flex items-center gap-2 text-white/30 group-hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                  Series Access <ArrowRight size={14} />
               </div>
               <div className="absolute bottom-0 left-0 h-1 transition-all duration-500 group-hover:w-full w-0" style={{ background: brand.color }}></div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sovereign Artistry Statement */}
      <section className="py-32 px-12 lg:px-24 bg-black/60 text-center border-t border-white/5">
         <div className="max-w-4xl mx-auto">
            <h4 className="text-[10px] font-bold text-[#FFD700] uppercase tracking-[1em] mb-12">Sovereign Artistry</h4>
            <p className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-16">
              "Fine-art commercial photography exploring the friction between stillness and chaos."
            </p>
            <div className="h-px w-24 bg-white/10 mx-auto mb-16"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
               <div>End-to-End Encryption</div>
               <div>Automated Licensing</div>
               <div>8K Native Resolution</div>
               <div>Intentional Observation</div>
            </div>
         </div>
      </section>

      {/* Bio / Signature */}
      <section className="py-32 px-12 lg:px-24 bg-white/[0.02] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF2D55]/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="w-32 h-32 mx-auto mb-12 rounded-full border border-white/10 p-2 overflow-hidden bg-black flex items-center justify-center">
             <img src={config.pressKit.pressImage} alt="Will" className="w-full h-full object-cover rounded-full grayscale opacity-80" />
          </div>
          <h2 className="text-5xl font-extrabold mb-10 tracking-tight">Capturing the <br/> observed world.</h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-16 font-light italic">
            "{config.home.bioText}"
          </p>
          <div className="font-signature text-6xl text-[#FFD700]">Will Grigsby</div>
          <div className="mt-8 text-[10px] text-gray-600 font-mono tracking-[1em] uppercase">{config.identity.location} • OXFORD</div>
          <div className="mt-4 text-[10px] text-gray-700 font-mono">{config.identity.email}</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
