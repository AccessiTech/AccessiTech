import { vi } from 'vitest';

// Mock all .scss files
vi.mock('../scss/index.scss', () => ({}));
vi.mock('../components/SplashSocials/SplashSocials.scss', () => ({}));
vi.mock('../components/SectionHeader/SectionHeader.scss', () => ({}));
vi.mock('react-bootstrap/scss/bootstrap.scss', () => ({}));

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
