
import React, { useState } from 'react';
import { 
  Save, 
  Plus, 
  Trash2, 
  Layout, 
  Image as ImageIcon, 
  FlaskConical, 
  Lock, 
  ChevronRight,
  ShieldCheck,
  User,
  Key,
  LogOut,
  Target,
  Palette,
  Newspaper,
  Globe,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { SiteConfig, Photo, ClientGallery, CategoryBranding } from '../types';
import { storageService } from '../services/storageService';

interface AdminProps {
  config: SiteConfig;
  onUpdate: (newConfig: SiteConfig) => void;
}

const Admin: React.FC<AdminProps> = ({ config, onUpdate }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'home' | 'identity' | 'curation' | 'branding' | 'press' | 'booking' | 'galleries' | 'photos' | 'lab'>('home');
  const [localConfig, setLocalConfig] = useState<SiteConfig>(config);
  const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.toLowerCase() === 'will' && password === 'milo') {
      setIsAuthenticated(true);
    } else {
      alert('Authentication Failed: Unrecognized credentials.');
    }
  };

  const handleSave = () => {
    storageService.saveConfig(localConfig);
    onUpdate(localConfig);
    setStatus({ type: 'success', msg: 'Core Configuration Deployed.' });
    setTimeout(() => setStatus(null), 3000);
  };

  const updateBranding = (id: string, updates: Partial<CategoryBranding>) => {
    const newBranding = localConfig.categoryBranding.map(c => 
      c.id === id ? { ...c, ...updates } : c
    );
    setLocalConfig({ ...localConfig, categoryBranding: newBranding });
  };

  const addPhoto = () => {
    const newPhoto: Photo = {
      id: Date.now().toString(),
      url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4',
      category: 'Street',
      title: 'New Capture',
      isPublic: true,
      uploadedAt: new Date().toISOString(),
      metadata: { iso: '100', shutter: '1/125', aperture: 'f/2.8', lens: '50mm' }
    };
    setLocalConfig({ ...localConfig, photos: [newPhoto, ...localConfig.photos] });
  };

  const togglePressAsset = (photoId: string) => {
    const current = localConfig.pressKit.downloadablePhotoIds;
    const next = current.includes(photoId) 
      ? current.filter(id => id !== photoId)
      : [...current, photoId];
    setLocalConfig({ ...localConfig, pressKit: { ...localConfig.pressKit, downloadablePhotoIds: next }});
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pl-20 bg-[#0A0E1A] flex items-center justify-center p-6">
        <div className="w-full max-w-md p-10 bg-[#1F2937]/20 border border-white/5 rounded-3xl backdrop-blur-xl">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-[#FF2D55]/10 border border-[#FF2D55]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="text-[#FF2D55]" size={32} />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight uppercase">Mission Control</h2>
            <p className="text-[10px] text-gray-500 mt-3 uppercase tracking-widest font-bold">Identity Verification Required</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-black/40 border border-white/10 py-5 px-6 rounded-2xl outline-none focus:border-[#FF2D55] transition-all font-mono text-sm uppercase"
              placeholder="USERNAME"
            />
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/40 border border-white/10 py-5 px-6 rounded-2xl outline-none focus:border-[#FF2D55] transition-all font-mono text-sm uppercase"
              placeholder="PASSKEY"
            />
            <button className="w-full py-5 bg-[#FF2D55] font-extrabold rounded-2xl flex items-center justify-center gap-2 hover:bg-[#ff466a] transition-all shadow-lg uppercase tracking-widest">
              INITIALIZE SYSTEM <ChevronRight size={20} />
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pl-20 bg-[#0A0E1A] flex flex-col">
      <header className="px-12 py-8 border-b border-white/5 flex justify-between items-center bg-[#0A0E1A] sticky top-0 z-20">
        <div className="flex items-center gap-6">
          <div className="p-2 bg-[#FFD700]/10 rounded-lg border border-[#FFD700]/20">
            <ShieldCheck className="text-[#FFD700]" size={20} />
          </div>
          <h1 className="text-xl font-extrabold tracking-tight uppercase">Artist Suite v4.0</h1>
        </div>
        <div className="flex items-center gap-6">
          {status && <span className="text-[10px] uppercase font-bold text-green-400">{status.msg}</span>}
          <button onClick={handleSave} className="px-8 py-3 bg-[#FF2D55] text-white rounded-xl font-extrabold hover:scale-105 transition-all shadow-lg uppercase text-xs tracking-widest">
            <Save size={18} /> Commit Configuration
          </button>
          <button onClick={() => setIsAuthenticated(false)} className="p-3 text-gray-500 hover:text-white transition-colors">
            <LogOut size={20} />
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <aside className="w-72 border-r border-white/5 p-8 space-y-4 shrink-0 bg-black/20 overflow-y-auto">
          <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest px-4 mb-2">Sovereign Management</p>
          <button onClick={() => setActiveTab('home')} className={`w-full p-4 rounded-2xl flex items-center gap-4 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'home' ? 'bg-[#FF2D55] text-white' : 'text-gray-500 hover:bg-white/5'}`}>
            <Layout size={18} /> Hero Context
          </button>
          <button onClick={() => setActiveTab('identity')} className={`w-full p-4 rounded-2xl flex items-center gap-4 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'identity' ? 'bg-[#FF2D55] text-white' : 'text-gray-500 hover:bg-white/5'}`}>
            <Globe size={18} /> Direct Identity
          </button>
          <button onClick={() => setActiveTab('press')} className={`w-full p-4 rounded-2xl flex items-center gap-4 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'press' ? 'bg-[#FF2D55] text-white' : 'text-gray-500 hover:bg-white/5'}`}>
            <Newspaper size={18} /> Press Kit
          </button>
          <button onClick={() => setActiveTab('booking')} className={`w-full p-4 rounded-2xl flex items-center gap-4 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'booking' ? 'bg-[#FF2D55] text-white' : 'text-gray-500 hover:bg-white/5'}`}>
            <Calendar size={18} /> Commission Control
          </button>
          <div className="h-px bg-white/5 my-4"></div>
          <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest px-4 mb-2">Exhibition Tools</p>
          <button onClick={() => setActiveTab('curation')} className={`w-full p-4 rounded-2xl flex items-center gap-4 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'curation' ? 'bg-[#FF2D55] text-white' : 'text-gray-500 hover:bg-white/5'}`}>
            <Target size={18} /> Focal Point
          </button>
          <button onClick={() => setActiveTab('branding')} className={`w-full p-4 rounded-2xl flex items-center gap-4 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'branding' ? 'bg-[#FF2D55] text-white' : 'text-gray-500 hover:bg-white/5'}`}>
            <Palette size={18} /> Visual Identity
          </button>
          <button onClick={() => setActiveTab('galleries')} className={`w-full p-4 rounded-2xl flex items-center gap-4 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'galleries' ? 'bg-[#FF2D55] text-white' : 'text-gray-500 hover:bg-white/5'}`}>
            <ShieldCheck size={18} /> Client Vaults
          </button>
          <button onClick={() => setActiveTab('photos')} className={`w-full p-4 rounded-2xl flex items-center gap-4 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'photos' ? 'bg-[#FF2D55] text-white' : 'text-gray-500 hover:bg-white/5'}`}>
            <ImageIcon size={18} /> Library
          </button>
        </aside>

        <main className="flex-1 p-16 overflow-y-auto bg-[#0A0E1A] custom-scrollbar">
          {activeTab === 'press' && (
            <div className="max-w-4xl space-y-12">
               <h2 className="text-4xl font-extrabold tracking-tighter">Media Kit Configuration</h2>
               <div className="space-y-8">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase text-gray-500 font-extrabold tracking-widest">Press Hook</label>
                      <input className="w-full bg-white/[0.03] border border-white/10 p-5 rounded-2xl outline-none" value={localConfig.pressKit.shortBio} onChange={(e) => setLocalConfig({...localConfig, pressKit: {...localConfig.pressKit, shortBio: e.target.value}})} />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase text-gray-500 font-extrabold tracking-widest">Long Narrative</label>
                      <textarea className="w-full bg-white/[0.03] border border-white/10 p-5 rounded-2xl h-48 outline-none" value={localConfig.pressKit.longBio} onChange={(e) => setLocalConfig({...localConfig, pressKit: {...localConfig.pressKit, longBio: e.target.value}})} />
                    </div>
                  </div>

                  <div className="pt-10 border-t border-white/5 space-y-8">
                     <h3 className="text-xl font-bold uppercase tracking-widest">Manage Released Media Assets</h3>
                     <p className="text-sm text-gray-500">Toggle which photos from your master library are available for press download.</p>
                     <div className="grid grid-cols-4 gap-4 p-8 bg-white/[0.02] border border-white/5 rounded-3xl">
                        {localConfig.photos.map(photo => {
                           const isReleased = localConfig.pressKit.downloadablePhotoIds.includes(photo.id);
                           return (
                             <button 
                               key={photo.id} 
                               onClick={() => togglePressAsset(photo.id)}
                               className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${isReleased ? 'border-[#FFD700] scale-105' : 'border-transparent opacity-40'}`}
                             >
                               <img src={photo.url} className="w-full h-full object-cover" alt="select" />
                               {isReleased && <CheckCircle2 size={16} className="absolute top-2 right-2 text-[#FFD700] bg-black rounded-full" />}
                             </button>
                           );
                        })}
                     </div>
                  </div>
               </div>
            </div>
          )}

          {activeTab === 'booking' && (
            <div className="max-w-3xl space-y-12">
               <h2 className="text-4xl font-extrabold tracking-tighter">Commission Pipeline</h2>
               <div className="space-y-6">
                  <div className="flex items-center gap-4 p-6 bg-white/[0.03] border border-white/10 rounded-2xl">
                     <label className="text-xs font-bold uppercase tracking-widest">Enable Public Inquiries</label>
                     <input type="checkbox" checked={localConfig.booking.active} onChange={(e) => setLocalConfig({...localConfig, booking: {...localConfig.booking, active: e.target.checked}})} className="w-6 h-6 accent-[#FF2D55] cursor-pointer" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase text-gray-500 font-extrabold tracking-widest">Booking Page Headline</label>
                    <input className="w-full bg-white/[0.03] border border-white/10 p-5 rounded-2xl outline-none" value={localConfig.booking.title} onChange={(e) => setLocalConfig({...localConfig, booking: {...localConfig.booking, title: e.target.value}})} />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase text-gray-500 font-extrabold tracking-widest">Booking Description</label>
                    <textarea className="w-full bg-white/[0.03] border border-white/10 p-5 rounded-2xl h-32 outline-none" value={localConfig.booking.description} onChange={(e) => setLocalConfig({...localConfig, booking: {...localConfig.booking, description: e.target.value}})} />
                  </div>
               </div>
            </div>
          )}

          {activeTab === 'home' && (
            <div className="max-w-3xl space-y-12">
              <h2 className="text-4xl font-extrabold tracking-tighter">Main Narrative</h2>
              <div className="space-y-6">
                <input className="w-full bg-white/[0.03] border border-white/10 p-5 rounded-2xl outline-none" value={localConfig.home.heroTitle} onChange={(e) => setLocalConfig({...localConfig, home: {...localConfig.home, heroTitle: e.target.value}})} />
                <textarea className="w-full bg-white/[0.03] border border-white/10 p-5 rounded-2xl h-40 outline-none" value={localConfig.home.bioText} onChange={(e) => setLocalConfig({...localConfig, home: {...localConfig.home, bioText: e.target.value}})} />
              </div>
            </div>
          )}

          {activeTab === 'identity' && (
            <div className="max-w-3xl space-y-12">
               <h2 className="text-4xl font-extrabold tracking-tighter">Contact Identity</h2>
               <div className="grid grid-cols-2 gap-8">
                  <input className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl outline-none" placeholder="Email" value={localConfig.identity.email} onChange={(e) => setLocalConfig({...localConfig, identity: {...localConfig.identity, email: e.target.value}})} />
                  <input className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl outline-none" placeholder="Phone" value={localConfig.identity.phone} onChange={(e) => setLocalConfig({...localConfig, identity: {...localConfig.identity, phone: e.target.value}})} />
                  <input className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl outline-none" placeholder="Instagram" value={localConfig.identity.instagram} onChange={(e) => setLocalConfig({...localConfig, identity: {...localConfig.identity, instagram: e.target.value}})} />
                  <input className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl outline-none" placeholder="Location" value={localConfig.identity.location} onChange={(e) => setLocalConfig({...localConfig, identity: {...localConfig.identity, location: e.target.value}})} />
               </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Admin;
