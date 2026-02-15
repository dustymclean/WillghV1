
import React from 'react';
import { Mail, Phone, Instagram, Send, ShieldCheck, MapPin } from 'lucide-react';
import { SiteConfig } from '../types';

interface BookNowProps {
  config: SiteConfig;
}

const BookNow: React.FC<BookNowProps> = ({ config }) => {
  return (
    <div className="min-h-screen pl-20 bg-[#0A0E1A]">
      <div className="max-w-6xl mx-auto px-12 lg:px-24 py-24">
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-block px-3 py-1 bg-[#FF2D55] text-white text-[10px] font-bold uppercase tracking-widest">
              Project Initiation
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8">{config.booking.title}</h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
            {config.booking.description}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <form className="space-y-8 bg-white/[0.02] p-10 rounded-3xl border border-white/5">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-3">
                 <label className="text-[10px] text-gray-500 uppercase font-extrabold tracking-widest">Full Name</label>
                 <input className="w-full bg-black/40 border border-white/10 p-5 rounded-2xl outline-none focus:border-[#FFD700] transition-all" placeholder="Enter name" />
               </div>
               <div className="space-y-3">
                 <label className="text-[10px] text-gray-500 uppercase font-extrabold tracking-widest">Email Address</label>
                 <input className="w-full bg-black/40 border border-white/10 p-5 rounded-2xl outline-none focus:border-[#FFD700] transition-all" placeholder="Enter email" />
               </div>
             </div>

             <div className="space-y-3">
               <label className="text-[10px] text-gray-500 uppercase font-extrabold tracking-widest">Project Discipline</label>
               <select className="w-full bg-black/40 border border-white/10 p-5 rounded-2xl outline-none focus:border-[#FFD700] transition-all appearance-none">
                 <option>CONCERT PERFORMANCE</option>
                 <option>FINE ART BOUDOIR</option>
                 <option>DOCUMENTARY STREET</option>
                 <option>HIGH-END COMMERCIAL</option>
               </select>
             </div>

             <div className="space-y-3">
               <label className="text-[10px] text-gray-500 uppercase font-extrabold tracking-widest">Narrative Scope</label>
               <textarea className="w-full bg-black/40 border border-white/10 p-5 rounded-2xl outline-none focus:border-[#FFD700] transition-all h-40 resize-none" placeholder="Describe the intent of the story..." />
             </div>

             <button className="w-full py-6 bg-[#FF2D55] text-white font-extrabold rounded-2xl flex items-center justify-center gap-4 hover:bg-[#ff466a] transition-all shadow-xl shadow-[#FF2D55]/20 uppercase tracking-widest text-sm">
               {config.booking.ctaText} <Send size={18} />
             </button>
          </form>

          <div className="space-y-12">
             <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl space-y-8">
                <h3 className="text-xs text-gray-500 uppercase font-extrabold tracking-widest flex items-center gap-2">
                  <ShieldCheck size={16} /> Direct Access Protocols
                </h3>
                <ul className="space-y-8">
                  <li className="flex items-center gap-6 group">
                    <div className="p-4 bg-white/5 rounded-2xl text-gray-500 group-hover:text-[#FFD700] transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-600 uppercase font-bold tracking-widest">Email</p>
                      <a href={`mailto:${config.identity.email}`} className="text-lg font-bold text-white group-hover:underline">{config.identity.email}</a>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 group">
                    <div className="p-4 bg-white/5 rounded-2xl text-gray-500 group-hover:text-[#FFD700] transition-colors">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-600 uppercase font-bold tracking-widest">Phone</p>
                      <p className="text-lg font-bold text-white">{config.identity.phone}</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 group">
                    <div className="p-4 bg-white/5 rounded-2xl text-gray-500 group-hover:text-[#FFD700] transition-colors">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-600 uppercase font-bold tracking-widest">Location</p>
                      <p className="text-lg font-bold text-white">{config.identity.location}</p>
                    </div>
                  </li>
                </ul>
             </div>

             <div className="p-10 bg-gradient-to-br from-[#FF2D55] to-purple-600 rounded-3xl shadow-2xl">
                <h4 className="text-xl font-extrabold text-white mb-4 tracking-tight">Sovereign Artistry.</h4>
                <p className="text-sm text-white/80 leading-relaxed italic">
                  "Every frame is treated as a high-value digital asset. Managed via a proprietary pipeline with end-to-end encryption."
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
