import { IMAGES_URL } from "./env";

export const SPLASH_BG_URL = `${IMAGES_URL}/splashBG.jpg`;
export const PURPOSE_PIC_URL = `${IMAGES_URL}/hands.jpg`;
export const PURPOSE_PIC_URL_1024 = `${IMAGES_URL}/hands_1024.jpg`;
export const PURPOSE_PIC_URL_800 = `${IMAGES_URL}/hands_800.jpg`;
export const PURPOSE_PIC_URL_480 = `${IMAGES_URL}/hands_480.jpg`;

export const PURPOSE_PIC_SRCSET = `${PURPOSE_PIC_URL_1024} 1024w,
  ${PURPOSE_PIC_URL_800} 800w,
  ${PURPOSE_PIC_URL_480} 480w`;
export const PURPOSE_PIC_SIZES = '(max-width: 767px) calc(100vw - 24px), ' +
  'calc((100vw - (1.625rem + 4.5vw)) * ((41 + (2/3)) / 100))';
