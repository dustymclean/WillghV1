
import React, { useState } from 'react';
import { Download, ShieldCheck, Target } from 'lucide-react';
import { Photo } from '../types';

interface PhotoCardProps {
  photo: Photo;
  showMetadata?: boolean;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, showMetadata = true }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden group rounded-sm bg-[#0A0E1A] border border-white/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Viewfinder Corners */}
      <div className={`absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/40 transition-opacity duration-500 z-20 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className={`absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/40 transition-opacity duration-500 z-20 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className={`absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/40 transition-opacity duration-500 z-20 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className={`absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/40 transition-opacity duration-500 z-20 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

      <img 
        src={photo.url} 
        alt={photo.title}
        className="w-full aspect-[4/5] object-cover transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
      />
      
      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent transition-opacity duration-500 z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="text-[10px] text-[#FF2D55] font-extrabold uppercase tracking-[.4em] mb-3">{photo.category}</p>
              <h3 className="text-2xl font-extrabold text-white tracking-tighter mb-2">{photo.title}</h3>
              <p className="text-sm text-gray-400 font-signature italic">Will Grigsby</p>
            </div>
            
            <button className="p-3 bg-white/10 hover:bg-[#FF2D55] text-white rounded-full transition-all hover:scale-110">
              <Download size={20} />
            </button>
          </div>

          {showMetadata && photo.metadata && (
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex gap-6 text-[9px] text-gray-500 font-mono font-bold uppercase tracking-widest">
                <div>ISO <span className="text-[#FFD700] ml-1">{photo.metadata.iso}</span></div>
                <div>SPD <span className="text-[#FFD700] ml-1">{photo.metadata.shutter}</span></div>
                <div>APT <span className="text-[#FFD700] ml-1">{photo.metadata.aperture}</span></div>
              </div>
              
              {photo.artistNote && (
                <div className="flex gap-3 items-start p-3 bg-white/5 rounded-lg border border-white/5">
                  <Target size={14} className="text-[#FF2D55] mt-0.5 shrink-0" />
                  <p className="text-[10px] text-gray-400 leading-relaxed font-mono italic">
                    {photo.artistNote}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Signature Watermark */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[10px] text-white/5 font-mono uppercase tracking-[2em] select-none pointer-events-none group-hover:opacity-0 transition-opacity">
        GRIGSBY
      </div>
      
      {/* Security Token */}
      <div className="absolute top-6 left-6 z-30">
        <ShieldCheck size={14} className="text-[#FFD700] opacity-20 group-hover:opacity-80 transition-all" />
      </div>
    </div>
  );
};

export default PhotoCard;
