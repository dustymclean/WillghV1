
import React from 'react';
import { Camera, Music, Heart, Map, FlaskConical, Newspaper, Settings, Briefcase, Calendar } from 'lucide-react';
import { SiteConfig } from './types';

export const COLORS = {
  NAVY: '#0A0E1A',
  PINK: '#FF2D55',
  GOLD: '#FFD700',
  CHARCOAL: '#1F2937',
};

export const NAVIGATION = [
  { path: '/', label: 'Narrative', icon: <Camera size={20} /> },
  { path: '/stage', label: 'Stage', icon: <Music size={20} /> },
  { path: '/sanctuary', label: 'Sanctuary', icon: <Heart size={20} /> },
  { path: '/pavement', label: 'Pavement', icon: <Map size={20} /> },
  { path: '/commercial', label: 'Commercial', icon: <Briefcase size={20} /> },
  { path: '/press', label: 'Press Kit', icon: <Newspaper size={20} /> },
  { path: '/book', label: 'Book Now', icon: <Calendar size={20} /> },
  { path: '/lab', label: 'The Lab', icon: <FlaskConical size={20} /> },
  { path: '/admin', label: 'Admin', icon: <Settings size={20} /> },
];

export const INITIAL_CONFIG: SiteConfig = {
  identity: {
    email: "will@willgh.com",
    phone: "(601) 831-4678",
    instagram: "@WillGhrigsbyPhotography",
    location: "Oxford, Mississippi",
    domain: "willgh.com"
  },
  home: {
    heroTitle: "The Observed Narrative.",
    heroSubtitle: "Fine-art commercial photography exploring the friction between stillness and chaos. Capturing high-fidelity moments with sovereign artistry.",
    heroImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2070",
    bioText: "Will Grigsby's work is an exercise in intentional observation. Every frame captured is an asset of enduring value, protecting the integrity of the subject and the intent of the story.",
    showFeaturedSection: true,
    featuredPhotoId: '1',
    featuredSectionTitle: 'The Focal Point'
  },
  pressKit: {
    shortBio: "Capturing the friction between stillness and chaos. Oxford, MS.",
    longBio: "A Legacy in Light. Capturing the raw energy of Oxford's music, the architecture of the human form, and the silent geometry of the street. Photography that moves beyond service into the realm of fine art.",
    technicalStatement: "More than a camera. A proprietary media pipeline built for the modern digital landscape. Automated licensing, end-to-end encryption, and a visual legacy owned by you.",
    pressImage: "https://picsum.photos/id/1012/800/1000",
    downloadablePhotoIds: ['1']
  },
  booking: {
    title: "Secure Your Legacy.",
    description: "Initialize your project within the proprietary pipeline. Will Grigsby accepts a limited number of commissions per quarter to ensure sovereign quality for every frame.",
    ctaText: "Initialize Session",
    active: true
  },
  categoryBranding: [
    { id: 'Concert', title: 'Concert Performance', description: 'High-energy visual acoustics.', color: '#FF2D55', isActiveOnHome: true, displayOrder: 0 },
    { id: 'Boudoir', title: 'Fine Art Boudoir', description: 'Intimate narratives and shadow play.', color: '#FFD700', isActiveOnHome: true, displayOrder: 1 },
    { id: 'Street', title: 'Documentary Street', description: 'The silent geometry of the pavement.', color: '#6366f1', isActiveOnHome: true, displayOrder: 2 },
    { id: 'Commercial', title: 'High-End Commercial', description: 'Technical precision for high-value assets.', color: '#ffffff', isActiveOnHome: true, displayOrder: 3 },
    { id: 'Macro', title: 'Technical Macro', description: 'The architecture of the minute.', color: '#10b981', isActiveOnHome: false, displayOrder: 4 },
    { id: 'Astro', title: 'Celestial Depth', description: 'Astro-imaging from the deep south.', color: '#8b5cf6', isActiveOnHome: false, displayOrder: 5 }
  ],
  lab: {
    description: "The Lab is a proprietary pipeline where every frame is treated as a high-value digital asset. 8K native resolution and surgical technical precision.",
    gearItems: [
      { id: '1', label: 'Macro Lens (90mm f/2.8)', progress: 75 },
      { id: '2', label: 'Star Tracker (Sky-Watcher Adventurer)', progress: 40 }
    ]
  },
  photos: [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=1200',
      category: 'Concert',
      title: 'Neon Pulse',
      isPublic: true,
      uploadedAt: new Date().toISOString(),
      metadata: { iso: '3200', shutter: '1/250', aperture: 'f/2.8', lens: '24-70mm' },
      artistNote: "Intentional observation of light and chaos."
    }
  ],
  clientGalleries: []
};
