import { vi } from 'vitest';
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return { ...actual, useNavigate: () => mockNavigate };
});
vi.mock('../../components/SplashSocials/SplashSocials', () => ({
  __esModule: true,
  default: () => {
    console.log('MOCKED SplashSocials RENDERED');
    return <div data-testid="splash-socials" />;
  },
}));
vi.mock('../../components/Services/Services', () => ({
  __esModule: true,
  default: () => <div data-testid="services" />,
}));

import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

describe('Home', () => {
  let Home: React.FC,
    TAGLINE: string,
    WHO_HEADER: string,
    WHY_HEADER: string,
    CTA_HEADER: string,
    PRODUCTS_HEADER: string,
    CONTACT_HEADER: string;

  beforeEach(async () => {
    vi.resetModules();
    const mod = await import('../Home');
    Home = mod.default;
    TAGLINE = mod.TAGLINE;
    WHO_HEADER = mod.WHO_HEADER;
    WHY_HEADER = mod.WHY_HEADER;
    CTA_HEADER = mod.CTA_HEADER;
    PRODUCTS_HEADER = mod.PRODUCTS_HEADER;
    CONTACT_HEADER = mod.CONTACT_HEADER;
    mockNavigate.mockClear();
  });

  it('renders the tagline', () => {
    renderWithProviders(<Home />);
    expect(screen.getByText(TAGLINE)).toBeInTheDocument();
  });

  it('renders WHO, WHY, CTA, and Contact sections', () => {
    renderWithProviders(<Home />);
    expect(screen.getByText(WHO_HEADER)).toBeInTheDocument();
    expect(screen.getByText(WHY_HEADER)).toBeInTheDocument();
    expect(screen.getByText(CTA_HEADER)).toBeInTheDocument();
    expect(screen.getByText(CONTACT_HEADER)).toBeInTheDocument();
  });

  it('renders SplashSocials, Metadata, and Services', () => {
    renderWithProviders(<Home />);
    expect(screen.getByTestId('splash-socials')).toBeInTheDocument();
    expect(screen.getByTestId('services')).toBeInTheDocument();
  });

  it('renders the main landmark', () => {
    renderWithProviders(<Home />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders Products section with four product card buttons', () => {
    renderWithProviders(<Home />);
    expect(screen.getByText(PRODUCTS_HEADER)).toBeInTheDocument();
    expect(screen.getByTestId('product-card-btn-wcag')).toBeInTheDocument();
    expect(screen.getByTestId('product-card-btn-oss')).toBeInTheDocument();
    expect(screen.getByTestId('product-card-btn-cccs')).toBeInTheDocument();
    expect(screen.getByTestId('product-card-btn-blog')).toBeInTheDocument();
  });

  it('renders CTA section with Calendly and contact buttons', () => {
    renderWithProviders(<Home />);
    expect(screen.getByText(CTA_HEADER)).toBeInTheDocument();
    // CalendlyButton renders as <a role="button">
    expect(screen.getByTestId('calendly-button')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send us a message/i })).toBeInTheDocument();
  });

  it('renders Contact section with form link', () => {
    renderWithProviders(<Home />);
    expect(screen.getByText(CONTACT_HEADER)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /contact form/i })).toBeInTheDocument();
  });

  describe('navigation', () => {
    it('navigates to /products/wcag-series from WCAG product button', () => {
      renderWithProviders(<Home />);
      fireEvent.click(screen.getByTestId('product-card-btn-wcag'));
      expect(mockNavigate).toHaveBeenCalledWith('/products/wcag-series');
    });
    it('navigates to /products/oss-asaaps from OSS product button', () => {
      renderWithProviders(<Home />);
      fireEvent.click(screen.getByTestId('product-card-btn-oss'));
      expect(mockNavigate).toHaveBeenCalledWith('/products/oss-asaaps');
    });
    it('navigates to /products/cccs from CCCs product button', () => {
      renderWithProviders(<Home />);
      fireEvent.click(screen.getByTestId('product-card-btn-cccs'));
      expect(mockNavigate).toHaveBeenCalledWith('/products/cccs');
    });
    it('navigates to /blog from Blog product button', () => {
      renderWithProviders(<Home />);
      fireEvent.click(screen.getByTestId('product-card-btn-blog'));
      expect(mockNavigate).toHaveBeenCalledWith('/blog');
    });
    it('navigates to /contact from CTA section button', () => {
      renderWithProviders(<Home />);
      const btn = screen.getByRole('button', { name: /send us a message/i });
      fireEvent.click(btn);
      expect(mockNavigate).toHaveBeenCalledWith('/contact');
    });
    it('navigates to /contact from Contact section button', () => {
      renderWithProviders(<Home />);
      const btn = screen.getByRole('button', { name: /contact form/i });
      fireEvent.click(btn);
      expect(mockNavigate).toHaveBeenCalledWith('/contact');
    });
  });

  it('has no basic accessibility violations', async () => {
    const { container } = renderWithProviders(<Home />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
