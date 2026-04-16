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
vi.mock('../../../components/Services/Services', () => ({
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
    PRODUCTS_HEADER: string;

  beforeEach(async () => {
    vi.resetModules();
    const mod = await import('../Home');
    Home = mod.default;
    TAGLINE = mod.TAGLINE;
    WHO_HEADER = mod.WHO_HEADER;
    WHY_HEADER = mod.WHY_HEADER;
    PRODUCTS_HEADER = mod.PRODUCTS_HEADER;
    mockNavigate.mockClear();
  });

  it('renders the tagline', () => {
    renderWithProviders(<Home />);
    expect(screen.getByText(TAGLINE)).toBeInTheDocument();
  });

  it('renders WHO and WHY sections', () => {
    renderWithProviders(<Home />);
    expect(screen.getByText(WHO_HEADER)).toBeInTheDocument();
    expect(screen.getByText(WHY_HEADER)).toBeInTheDocument();
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

  it('renders Products section with three product card buttons', () => {
    renderWithProviders(<Home />);
    expect(screen.getByText(PRODUCTS_HEADER)).toBeInTheDocument();
    expect(screen.getByTestId('product-card-btn-wcag')).toBeInTheDocument();
    expect(screen.getByTestId('product-card-btn-oss')).toBeInTheDocument();
    expect(screen.getByTestId('product-card-btn-cccs')).toBeInTheDocument();
  });

  it('renders Explore all services button', () => {
    renderWithProviders(<Home />);
    expect(screen.getByTestId('explore-services-btn')).toBeInTheDocument();
  });

  it('renders contact section with Calendly and Contact Us buttons', () => {
    renderWithProviders(<Home />);
    expect(screen.getByTestId('calendly-button')).toBeInTheDocument();
    expect(screen.getByTestId('contact-us-btn')).toBeInTheDocument();
  });

  it('renders Explore all products button', () => {
    renderWithProviders(<Home />);
    expect(screen.getByTestId('explore-products-btn')).toBeInTheDocument();
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
    it('navigates to /services from Explore all services button', () => {
      renderWithProviders(<Home />);
      fireEvent.click(screen.getByTestId('explore-services-btn'));
      expect(mockNavigate).toHaveBeenCalledWith('/services');
    });
    it('navigates to /contact from Contact Us button', () => {
      renderWithProviders(<Home />);
      fireEvent.click(screen.getByTestId('contact-us-btn'));
      expect(mockNavigate).toHaveBeenCalledWith('/contact');
    });

    it('navigates to /products from Explore all products button', () => {
      renderWithProviders(<Home />);
      fireEvent.click(screen.getByTestId('explore-products-btn'));
      expect(mockNavigate).toHaveBeenCalledWith('/products');
    });
  });

  it('has no basic accessibility violations', async () => {
    const { container } = renderWithProviders(<Home />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
