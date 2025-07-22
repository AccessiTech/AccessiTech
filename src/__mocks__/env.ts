const mockEnv = {
  VITE_PUBLIC_URL: '',
  VITE_SITE_HOST: 'localhost',
  VITE_IMAGES_URL: '/assets/images',
  PROD: false,
  DEV: true,
  MODE: 'test',
};

export const env = mockEnv;
export const PUBLIC_URL = mockEnv.VITE_PUBLIC_URL;
export const ASSETS_URL = `/assets`;
export const IMAGES_URL = `/assets/images`;
export const SITE_HOST = mockEnv.VITE_SITE_HOST;
