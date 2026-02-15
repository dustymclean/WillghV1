
export type Category = 'Concert' | 'Boudoir' | 'Street' | 'Macro' | 'Astro' | 'Commercial';

export interface Photo {
  id: string;
  url: string;
  category: Category;
  title: string;
  isPublic: boolean;
  metadata?: {
    iso: string;
    shutter: string;
    aperture: string;
    lens: string;
  };
  uploadedAt: string;
  artistNote?: string;
}

export interface GearItem {
  id: string;
  label: string;
  progress: number;
}

export interface ClientGallery {
  id: string;
  name: string;
  password: string;
  photoIds: string[];
}

export interface CategoryBranding {
  id: Category;
  title: string;
  description: string;
  color: string;
  isActiveOnHome: boolean;
  displayOrder: number;
}

export interface SiteConfig {
  identity: {
    email: string;
    phone: string;
    instagram: string;
    location: string;
    domain: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroImage: string;
    bioText: string;
    featuredPhotoId?: string;
    showFeaturedSection: boolean;
    featuredSectionTitle: string;
  };
  pressKit: {
    shortBio: string;
    longBio: string;
    technicalStatement: string;
    pressImage: string;
    downloadablePhotoIds: string[];
  };
  booking: {
    title: string;
    description: string;
    ctaText: string;
    active: boolean;
  };
  categoryBranding: CategoryBranding[];
  lab: {
    description: string;
    gearItems: GearItem[];
  };
  photos: Photo[];
  clientGalleries: ClientGallery[];
}
