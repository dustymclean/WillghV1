
import React from 'react';
import { Settings, FlaskConical, BarChart3, Heart } from 'lucide-react';
import { SiteConfig } from '../types';

interface LabProps {
  config: SiteConfig;
}

const Lab: React.FC<LabProps> = ({ config }) => {
  return (
    <div className="min-h-screen pl-20 bg-[#0A0E1A]">
      <header className="py-24 px-12 lg:px-24">
        <div className="flex items-center gap-4 mb-8">
           <FlaskConical size={32} className="text-[#FFD700]" />
           <span className="text-[10px] text-[#FFD700] font-bold uppercase tracking-[.3em]">The Tech Lab</span>
        </div>
        <h1 className="text-6xl font-extrabold mb-8 tracking-tighter">Science in <br /> Motion.</h1>
        <p className="max-w-xl text-gray-500 text-lg leading-relaxed font-light">
          {config.lab.description}
        </p>
      </header>

      <div className="px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-3 gap-12 pb-24">
        {/* Gear Fund Tracker */}
        <div className="lg:col-span-2 p-10 bg-[#1F2937]/30 border border-white/5 rounded-3xl shadow-2xl">
          <div className="flex justify-between items-center mb-10">
             <h3 className="text-2xl font-extrabold flex items-center gap-3 tracking-tight">
               <Settings size={24} className="text-[#FF2D55]" />
               Technical Gear Pipeline
             </h3>
             <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest border border-white/10 px-3 py-1 rounded-full">Manual Tracking</span>
          </div>

          <div className="space-y-10">
            {config.lab.gearItems.map((item) => (
              <div key={item.id} className="group">
                <div className="flex justify-between text-xs mb-3 font-bold uppercase tracking-widest">
                   <span className="text-gray-400 group-hover:text-white transition-colors">{item.label}</span>
                   <span className="text-[#FFD700]">{item.progress}% Acquisition</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-gradient-to-r from-[#FFD700] to-yellow-600 rounded-full transition-all duration-1000" style={{ width: `${item.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-black/40 border border-white/5 rounded-2xl flex items-start gap-6">
             <Heart size={28} className="text-[#FF2D55] shrink-0" />
             <div>
               <h4 className="text-lg font-bold mb-3 tracking-tight">Support the Experiment</h4>
               <p className="text-sm text-gray-400 leading-relaxed italic">
                 Contributing to the gear pipeline ensures the continued production of high-fidelity macro and astrophotography assets.
               </p>
             </div>
          </div>
        </div>

        {/* Sidebar Analytics */}
        <div className="space-y-8">
          <div className="p-8 bg-[#1F2937]/30 border border-white/5 rounded-3xl shadow-xl">
            <h4 className="text-[10px] font-bold mb-8 flex items-center gap-3 uppercase tracking-[.3em] text-gray-500">
              <BarChart3 size={16} /> Asset Metrics
            </h4>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 group hover:border-[#FF2D55]/30 transition-all">
                <div className="text-4xl font-extrabold text-[#FF2D55] tracking-tighter">{(config.photos.filter(p => p.category === 'Concert').length || 1) * 400}+</div>
                <div className="text-[10px] text-gray-500 uppercase mt-2 font-bold tracking-widest">Stage Actuations</div>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 group hover:border-[#FFD700]/30 transition-all">
                <div className="text-4xl font-extrabold text-[#FFD700] tracking-tighter">{config.photos.length}</div>
                <div className="text-[10px] text-gray-500 uppercase mt-2 font-bold tracking-widest">Total Master Assets</div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-[#FF2D55] to-purple-600 rounded-3xl shadow-2xl group cursor-pointer hover:scale-[1.02] transition-transform">
             <h4 className="text-xl font-extrabold text-white mb-3 tracking-tight">Direct Contributions</h4>
             <p className="text-sm text-white/70 mb-8 leading-relaxed">Invest in the next phase of optical exploration. Receive private access to technical workshops.</p>
             <button className="w-full py-4 bg-white text-black text-xs font-extrabold rounded-2xl hover:bg-black hover:text-white transition-all uppercase tracking-[.2em] shadow-lg">
               Initialize Deposit
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lab;
