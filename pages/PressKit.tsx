
import React from 'react';
import { Download, Mail, Instagram, Phone, ShieldCheck, Cpu, FileText } from 'lucide-react';
import { SiteConfig } from '../types';
import PhotoCard from '../components/PhotoCard';

interface PressKitProps {
  config: SiteConfig;
}

const PressKit: React.FC<PressKitProps> = ({ config }) => {
  const downloadablePhotos = config.photos.filter(p => config.pressKit.downloadablePhotoIds.includes(p.id));

  return (
    <div className="min-h-screen pl-20 bg-[#0A0E1A]">
      <header className="py-24 px-12 lg:px-24 border-b border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
            <span className="text-[10px] text-[#FF2D55] font-extrabold uppercase tracking-[.5em] mb-4 block">Official Media Kit</span>
            <h1 className="text-7xl font-extrabold tracking-tighter mb-8 leading-none uppercase">The <br/> Observed <br/> Legacy.</h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-12 italic border-l-2 border-[#FFD700] pl-6">
              "{config.pressKit.shortBio}"
            </p>
            <div className="flex flex-wrap gap-4">
               <a href={`mailto:${config.identity.email}`} className="px-8 py-4 bg-white text-black font-extrabold rounded-sm flex items-center gap-3 hover:bg-[#FF2D55] hover:text-white transition-all uppercase text-xs tracking-widest">
                  Media Inquiries <Mail size={16} />
               </a>
               <a href="#assets" className="px-8 py-4 bg-white/5 text-white border border-white/10 font-extrabold rounded-sm flex items-center gap-3 hover:bg-white/10 transition-all uppercase text-xs tracking-widest">
                  View Assets <Cpu size={16} />
               </a>
            </div>
          </div>
          <div className="relative animate-in fade-in scale-in-95 duration-1000">
             <div className="absolute -inset-4 bg-[#FF2D55]/10 blur-3xl rounded-full"></div>
             <img src={config.pressKit.pressImage} className="w-full h-[600px] object-cover rounded-sm border border-white/10 relative z-10 grayscale shadow-2xl" alt="Will Grigsby Portrait" />
             <div className="absolute bottom-8 right-8 z-20 bg-black/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl">
                <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mb-1">Status</p>
                <p className="text-lg font-bold text-white uppercase tracking-tighter">SOVEREIGN ARTIST</p>
             </div>
          </div>
        </div>
      </header>

      {/* Narrative Section */}
      <section className="py-24 px-12 lg:px-24">
         <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
               <div className="lg:col-span-2 space-y-16">
                  <div className="space-y-6">
                     <h3 className="text-xs text-gray-500 uppercase font-extrabold tracking-[.3em] flex items-center gap-2">
                        <FileText size={14} /> Artist Narrative
                     </h3>
                     <p className="text-2xl text-gray-300 leading-relaxed font-light">
                        {config.pressKit.longBio}
                     </p>
                  </div>

                  <div className="p-12 bg-white/[0.02] border border-white/5 rounded-3xl space-y-8 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-[#FF2D55]/10 transition-colors">
                        <Cpu size={120} />
                     </div>
                     <h3 className="text-xs text-[#FF2D55] uppercase font-extrabold tracking-[.3em] flex items-center gap-2">
                        <Cpu size={14} /> The Proprietary Pipeline
                     </h3>
                     <p className="text-lg text-gray-400 leading-relaxed font-light relative z-10">
                        {config.pressKit.technicalStatement}
                     </p>
                     <div className="grid grid-cols-2 gap-8 relative z-10 pt-8 border-t border-white/5">
                        <div className="space-y-1">
                           <p className="text-[10px] text-gray-600 uppercase font-bold tracking-widest">Base Resolution</p>
                           <p className="text-xl font-mono text-white">8K NATIVE</p>
                        </div>
                        <div className="space-y-1">
                           <p className="text-[10px] text-gray-600 uppercase font-bold tracking-widest">Data Security</p>
                           <p className="text-xl font-mono text-white">E2E ENCRYPTED</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="space-y-12">
                  <div className="p-10 bg-[#1F2937]/30 border border-white/5 rounded-3xl shadow-xl">
                     <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-8">Contact Identity</h4>
                     <ul className="space-y-8">
                        <li className="flex items-center gap-4 group">
                           <div className="p-3 bg-white/5 rounded-xl text-gray-500 group-hover:text-[#FFD700] transition-colors">
                              <Mail size={18} />
                           </div>
                           <div>
                              <p className="text-[10px] text-gray-600 uppercase font-bold">Email</p>
                              <p className="text-sm font-bold text-white tracking-wide">{config.identity.email}</p>
                           </div>
                        </li>
                        <li className="flex items-center gap-4 group">
                           <div className="p-3 bg-white/5 rounded-xl text-gray-500 group-hover:text-[#FFD700] transition-colors">
                              <Instagram size={18} />
                           </div>
                           <div>
                              <p className="text-[10px] text-gray-600 uppercase font-bold">Social</p>
                              <p className="text-sm font-bold text-white tracking-wide">{config.identity.instagram}</p>
                           </div>
                        </li>
                        <li className="flex items-center gap-4 group">
                           <div className="p-3 bg-white/5 rounded-xl text-gray-500 group-hover:text-[#FFD700] transition-colors">
                              <Phone size={18} />
                           </div>
                           <div>
                              <p className="text-[10px] text-gray-600 uppercase font-bold">Direct</p>
                              <p className="text-sm font-bold text-white tracking-wide">{config.identity.phone}</p>
                           </div>
                        </li>
                     </ul>
                  </div>

                  <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl shadow-xl">
                     <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-8">Disciplines</h4>
                     <div className="flex flex-col gap-4">
                        {config.categoryBranding.filter(c => c.displayOrder < 4).map(spec => (
                           <div key={spec.id} className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full" style={{ background: spec.color }}></div>
                              <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">{spec.title}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Downloadable Assets Section */}
      <section id="assets" className="py-24 px-12 lg:px-24 border-t border-white/5 bg-black/40">
        <div className="max-w-6xl mx-auto">
           <div className="flex justify-between items-end mb-16">
              <div>
                <span className="text-[10px] text-[#FF2D55] font-extrabold uppercase tracking-[.5em] mb-4 block">Asset Library</span>
                <h2 className="text-5xl font-extrabold tracking-tighter uppercase">Media Resources</h2>
              </div>
              <p className="text-gray-500 text-sm max-w-[200px] leading-relaxed uppercase tracking-tighter font-bold">
                High-resolution authorized assets for press and publication.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {downloadablePhotos.map(photo => (
                <PhotoCard key={photo.id} photo={photo} />
              ))}
              {downloadablePhotos.length === 0 && (
                <div className="col-span-full py-24 text-center border border-dashed border-white/10 rounded-3xl">
                   <p className="text-gray-600 uppercase tracking-widest text-xs">No media assets released for this cycle.</p>
                </div>
              )}
           </div>
        </div>
      </section>

      <footer className="py-32 px-12 lg:px-24 text-center border-t border-white/5 bg-[#0A0E1A]">
         <p className="text-[10px] text-gray-600 uppercase tracking-[2em] mb-4">Oxford • Mississippi</p>
         <div className="font-signature text-4xl text-[#FFD700]">Will Grigsby</div>
         <p className="mt-8 text-[10px] text-gray-800 font-mono italic">"Every frame is a high-value digital asset."</p>
      </footer>
    </div>
  );
};

export default PressKit;
