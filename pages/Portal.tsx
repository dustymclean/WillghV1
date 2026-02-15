
import React, { useState } from 'react';
import { Lock, Eye, EyeOff, ShieldCheck, ChevronRight, AlertCircle } from 'lucide-react';
import PhotoCard from '../components/PhotoCard';
import { SiteConfig, Photo } from '../types';

interface PortalProps {
  config: SiteConfig;
}

const Portal: React.FC<PortalProps> = ({ config }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [activeGalleryPhotos, setActiveGalleryPhotos] = useState<Photo[]>([]);
  const [activeGalleryName, setActiveGalleryName] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Search galleries in config for the password
    const gallery = config.clientGalleries.find(g => g.password === password);
    
    if (gallery) {
      const photos = config.photos.filter(p => gallery.photoIds.includes(p.id));
      setActiveGalleryPhotos(photos);
      setActiveGalleryName(gallery.name);
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid Access Key. Please check the credentials provided by Will.');
    }
  };

  if (isAuthenticated) {
    return (
      <div className="min-h-screen pl-20 pt-12 pb-24 bg-[#0A0E1A]">
        <header className="px-12 mb-12 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 mb-4">
               <ShieldCheck size={20} className="text-[#FFD700]" />
               <span className="text-[10px] text-[#FFD700] font-bold uppercase tracking-widest">Client Secure Session</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight">{activeGalleryName}</h1>
            <p className="text-gray-500 mt-2">Private Portfolio Delivery • Oxford, MS</p>
          </div>
          <div className="text-right">
             <button 
              onClick={() => {
                setIsAuthenticated(false);
                setPassword('');
              }}
              className="text-xs text-gray-500 hover:text-[#FF2D55] transition-colors"
             >
               Terminate Session
             </button>
          </div>
        </header>

        <div className="px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeGalleryPhotos.length > 0 ? (
            activeGalleryPhotos.map(photo => (
              <PhotoCard key={photo.id} photo={photo} />
            ))
          ) : (
            <div className="col-span-full py-24 text-center">
              <p className="text-gray-500 uppercase tracking-widest text-sm">No images assigned to this vault yet.</p>
            </div>
          )}
        </div>

        <div className="mx-12 mt-12 p-6 bg-white/5 border border-white/10 rounded-xl max-w-3xl">
          <h3 className="text-sm font-bold text-[#FFD700] mb-2">Delivery Agreement</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            These images are delivered for private viewing and use as per your contract. High-resolution downloads are enabled via the download icon. 
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pl-20 bg-[#0A0E1A] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover opacity-10 blur-sm scale-110" alt="bg" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-12">
           <div className="inline-block p-4 rounded-full bg-white/5 border border-white/10 mb-6">
             <Lock size={32} className="text-[#FF2D55]" />
           </div>
           <h2 className="text-3xl font-extrabold mb-2">The Vault</h2>
           <p className="text-gray-500 text-sm">Enter the access key provided by Will to view your album.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <input 
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Vault Access Key"
              className={`w-full bg-[#1F2937] border-2 py-4 px-6 rounded-xl outline-none transition-all text-white placeholder:text-gray-600 ${
                error ? 'border-[#FF2D55]' : 'border-white/5 focus:border-[#FFD700]'
              }`}
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-[#FF2D55] text-xs font-bold animate-pulse">
              <AlertCircle size={14} />
              {error}
            </div>
          )}

          <button 
            type="submit"
            className="w-full bg-[#FF2D55] hover:bg-[#ff466a] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-[0_10px_20px_rgba(255,45,85,0.2)]"
          >
            Access Vault <ChevronRight size={20} />
          </button>
        </form>

        <p className="mt-12 text-center text-[10px] text-gray-600 uppercase tracking-widest font-bold">
          Will Grigsby Photography • Oxford, MS
        </p>
      </div>
    </div>
  );
};

export default Portal;
