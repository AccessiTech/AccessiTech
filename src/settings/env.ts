// Define static environment variables for both development and testing
const defaultEnv = {
  VITE_PUBLIC_URL: '',
  VITE_SITE_HOST: 'localhost',
  VITE_IMAGES_URL: '/assets/images',
  PROD: false,
  DEV: true,
  MODE: 'development',
};

// For Vite runtime, use import.meta.env
// For testing, use the default values
export const env = typeof import.meta !== 'undefined' ? import.meta.env : defaultEnv;
export const PUBLIC_URL = env?.VITE_PUBLIC_URL || '';
export const ASSETS_URL = `${PUBLIC_URL}/assets`;
export const IMAGES_URL = `${ASSETS_URL}/images`;
export const SITE_HOST = env?.VITE_SITE_HOST || (env?.PROD ? 'accessi.tech' : 'localhost');
