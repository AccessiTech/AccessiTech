import { IMAGES_URL } from './env';

// Splash Background Image
export const SPLASH_BG_URL = `${IMAGES_URL}/splashBG.webp`;

// About Purpose Image
export const PURPOSE_PIC_URL_480 = `${IMAGES_URL}/hands_480.webp`;
export const PURPOSE_PIC_URL_800 = `${IMAGES_URL}/hands_800.webp`;
export const PURPOSE_PIC_URL_1024 = `${IMAGES_URL}/hands_1024.webp`;

export const PURPOSE_PIC_SRCSET = `${PURPOSE_PIC_URL_480} 480w,
  ${PURPOSE_PIC_URL_800} 800w`;

export const PURPOSE_PIC_SMALL = 'calc(100vw - 24px)';
export const PURPOSE_PIC_LARGE = 'calc((100vw - (1.625rem + 4.5vw)) * ((41 + (2/3)) / 100))';
export const PURPOSE_PIC_SIZES = `(max-width: 767px) ${PURPOSE_PIC_SMALL}, ${PURPOSE_PIC_LARGE}`;
