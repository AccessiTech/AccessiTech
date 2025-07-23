import { vi } from 'vitest';

import '@testing-library/jest-dom';

// Explicitly mock all SCSS files used by Header and its dependencies
vi.mock('../components/Header/Header.scss', () => ({}));
vi.mock('../components/SplashSocials/SplashSocials.scss', () => ({}));
vi.mock('../components/SectionHeader/SectionHeader.scss', () => ({}));
vi.mock('../components/Services/Services.scss', () => ({}));
vi.mock('../scss/index.scss', () => ({}));
vi.mock('react-bootstrap/scss/bootstrap.scss', () => ({}));
vi.mock('bootstrap/scss/bootstrap.scss', () => ({}));
vi.mock('../../scss/variables.scss', () => ({}));

// Mock browser APIs

// Mock browser APIs
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
