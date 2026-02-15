import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION } from '../constants';

const Navigation: React.FC = () => {
  const location = useLocation();

  const playShutter = () => {
    const audio = new Audio('https://www.soundjay.com/mechanical/camera-shutter-click-08.mp3');
    audio.volume = 0.2;
    audio.play().catch(() => {});
  };

  return (
    <nav className="fixed left-0 top-0 h-full w-20 bg-[#0A0E1A] border-r border-white/5 flex flex-col items-center py-8 z-50">
      <Link to="/" onClick={playShutter} className="mb-12 group relative">
        <div className="w-12 h-12 bg-[#0A0E1A] rounded-full border-2 border-[#FFD700] flex items-center justify-center transition-all group-hover:scale-110 group-hover:border-[#FF2D55] group-hover:shadow-[0_0_15px_rgba(255,45,85,0.4)]">
          <span className="text-[#FFD700] font-extrabold text-lg tracking-tighter group-hover:text-white transition-colors">WG</span>
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[10px] text-[#FFD700] font-bold uppercase">
          WILLGH
        </div>
      </Link>

      <div className="flex flex-col gap-6 flex-1">
        {NAVIGATION.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={playShutter}
              className={`p-3 rounded-xl transition-all relative group ${
                isActive ? 'text-[#FF2D55] bg-white/5 shadow-[0_0_15px_rgba(255,45,85,0.3)]' : 'text-gray-500 hover:text-white'
              }`}
            >
              {item.icon}
              <span className="absolute left-16 bg-[#FF2D55] text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest font-bold">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>

      <div className="mt-auto flex flex-col items-center gap-6">
        <div className="text-[10px] rotate-180 font-signature text-gray-600 tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>
          Will Grigsby Photography
        </div>
      </div>
    </nav>
  );
};

export default Navigation;