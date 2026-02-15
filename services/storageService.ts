
import { SiteConfig } from '../types';
import { INITIAL_CONFIG } from '../constants';

const STORAGE_KEY = 'will_grigsby_site_config';

export const storageService = {
  saveConfig: (config: SiteConfig) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  },
  loadConfig: (): SiteConfig => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return INITIAL_CONFIG;
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Failed to parse saved config", e);
      return INITIAL_CONFIG;
    }
  }
};
