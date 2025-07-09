export const env = await import.meta.env;
export const PUBLIC_URL = env?.VITE_PUBLIC_URL || '';
export const ASSETS_URL = `${PUBLIC_URL}/assets`;
export const IMAGES_URL = `${ASSETS_URL}/images`;
export const SITE_HOST = env?.VITE_SITE_HOST || env.PROD ? 'accessi.tech' : 'localhost';
