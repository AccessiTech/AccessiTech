import { vi } from 'vitest';
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return { ...actual, useNavigate: () => mockNavigate };
});
vi.mock('/Users/conor/Sites/AccessiTech/src/components/SplashSocials/SplashSocials', () => ({
  __esModule: true,
  default: () => {
    console.log('MOCKED SplashSocials RENDERED');
    return <div data-testid="splash-socials" />;
  },
}));
vi.mock('/Users/conor/Sites/AccessiTech/src/components/Metadata/Metadata', () => ({
  __esModule: true,
  default: () => <div data-testid="metadata" />,
}));
vi.mock('/Users/conor/Sites/AccessiTech/src/components/Services/Services', () => ({
  __esModule: true,
  default: () => <div data-testid="services" />,
}));

import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

describe('Home', () => {
  let Home: React.FC, TAGLINE: string, VISION_P3: string;
  beforeEach(async () => {
    vi.resetModules();
    // Re-import Home and constants after resetting modules
    const mod = await import('../Home');
    Home = mod.default;
    TAGLINE = mod.TAGLINE;
    VISION_P3 = mod.VISION_P3;
    mockNavigate.mockClear();
  });

  it('renders the tagline and vision', () => {
    renderWithProviders(<Home />);
    expect(screen.getByText(TAGLINE)).toBeInTheDocument();
    expect(screen.getByText(VISION_P3)).toBeInTheDocument();
  });

  it('renders blog and wcag CTAs', () => {
    renderWithProviders(<Home />);
    expect(screen.getByRole('button', { name: /browse the blog/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /start the series/i })).toBeInTheDocument();
  });

  it('renders SplashSocials, Metadata, and Services', () => {
    renderWithProviders(<Home />);
    expect(screen.getByTestId('splash-socials')).toBeInTheDocument();
    expect(screen.getByTestId('metadata')).toBeInTheDocument();
    expect(screen.getByTestId('services')).toBeInTheDocument();
  });

  it('renders the main landmark and blockquote', () => {
    renderWithProviders(<Home />);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByText(VISION_P3)).toBeInTheDocument();
    expect(screen.getByText(VISION_P3).closest('blockquote')).toBeInTheDocument();
  });

  describe('navigation', () => {
    it('navigates to /blog when blog CTA is clicked', () => {
      renderWithProviders(<Home />);
      const blogBtn = screen.getByRole('button', { name: /browse the blog/i });
      fireEvent.click(blogBtn);
      expect(mockNavigate).toHaveBeenCalledWith('/blog');
    });
    it('navigates to /wcag when wcag CTA is clicked', () => {
      renderWithProviders(<Home />);
      const wcagBtn = screen.getByRole('button', { name: /start the series/i });
      fireEvent.click(wcagBtn);
      expect(mockNavigate).toHaveBeenCalledWith('/wcag');
    });
  });

  it('has no basic accessibility violations', async () => {
    const { container } = renderWithProviders(<Home />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
