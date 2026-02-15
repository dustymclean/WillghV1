
import React, { useState, useEffect, useMemo } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Portal from './pages/Portal';
import Lab from './pages/Lab';
import Admin from './pages/Admin';
import PressKit from './pages/PressKit';
import BookNow from './pages/BookNow';
import { Photo, SiteConfig, CategoryBranding } from './types';
import { INITIAL_CONFIG } from './constants';
import PhotoCard from './components/PhotoCard';
import { storageService } from './services/storageService';

// Generic Gallery Page
const GalleryPage: React.FC<{ brand: CategoryBranding, photos: Photo[] }> = ({ brand, photos }) => {
  const filteredPhotos = useMemo(() => 
    photos.filter(p => p.category === brand.id), 
  [photos, brand.id]);

  return (
    <div className="min-h-screen pl-20 bg-[#0A0E1A] pt-24 pb-24">
      <div className="px-12 lg:px-24 mb-12 relative animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="absolute -left-12 top-0 w-24 h-24 blur-[80px] opacity-20" style={{ background: brand.color }}></div>
        <span className="text-[10px] font-bold uppercase tracking-[.3em] mb-4 block" style={{ color: brand.color }}>{brand.id} Exhibition</span>
        <h1 className="text-6xl font-extrabold tracking-tighter uppercase">{brand.title}</h1>
        <p className="text-gray-500 mt-4 max-w-xl">{brand.description}</p>
      </div>
      <div className="px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPhotos.map(photo => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
        {filteredPhotos.length === 0 && (
          <p className="col-span-full text-center py-24 text-gray-500 uppercase tracking-widest border border-dashed border-white/5 rounded-3xl">No assets registered in the {brand.title} collection.</p>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [config, setConfig] = useState<SiteConfig>(INITIAL_CONFIG);

  useEffect(() => {
    const loaded = storageService.loadConfig();
    setConfig(loaded);
  }, []);

  const handleConfigUpdate = (newConfig: SiteConfig) => {
    setConfig(newConfig);
  };

  return (
    <Router>
      <div className="flex bg-[#0A0E1A] min-h-screen text-white selection:bg-[#FF2D55] selection:text-white">
        <Navigation />
        <main className="flex-1 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home config={config} />} />
            <Route path="/portal" element={<Portal config={config} />} />
            <Route path="/lab" element={<Lab config={config} />} />
            <Route path="/press" element={<PressKit config={config} />} />
            <Route path="/book" element={<BookNow config={config} />} />
            <Route path="/admin" element={<Admin config={config} onUpdate={handleConfigUpdate} />} />
            
            {/* Dynamic Gallery Routes */}
            {config.categoryBranding.map(brand => (
              <Route 
                key={brand.id}
                path={`/${brand.id === 'Concert' ? 'stage' : brand.id === 'Boudoir' ? 'sanctuary' : brand.id === 'Street' ? 'pavement' : brand.id === 'Commercial' ? 'commercial' : brand.id.toLowerCase()}`} 
                element={<GalleryPage brand={brand} photos={config.photos} />} 
              />
            ))}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
