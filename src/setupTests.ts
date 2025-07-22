// This file is automatically included by Vitest when running tests
// Add any custom setup here

// Import jest-dom for custom matchers
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { expect } from 'vitest';
import { toHaveNoViolations } from 'jest-axe';

// Add type declaration for window.ENV
declare global {
  interface Window {
    ENV: {
      VITE_PUBLIC_URL: string;
      VITE_SITE_HOST: string;
      VITE_IMAGES_URL: string;
    };
  }
}

// Extend matchers
expect.extend(toHaveNoViolations);

// Mock environment variables that would come from Vite
window.ENV = {
  VITE_PUBLIC_URL: '',
  VITE_SITE_HOST: 'localhost',
  VITE_IMAGES_URL: '/assets/images',
};

// Mock SCSS imports better
vi.mock('*.scss', () => {
  return {
    default: {},
  };
});

// Fix paths in SCSS files
vi.mock('./src/scss/variables.scss', () => {
  return {
    default: {},
  };
});

// Set up local storage mock
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});
