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

  it('renders Services section', () => {
    renderWithProviders(<Home />);
    expect(screen.getByTestId('services')).toBeInTheDocument();
  });

  it('renders the main landmark', () => {
    renderWithProviders(<Home />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders Products section with two product card buttons', () => {
    renderWithProviders(<Home />);
    expect(screen.getByText(PRODUCTS_HEADER)).toBeInTheDocument();
    expect(screen.getByTestId('product-card-btn-wcag')).toBeInTheDocument();
    expect(screen.getByTestId('product-card-btn-oss')).toBeInTheDocument();
  });

  it('renders contact section with Calendly and message button', () => {
    renderWithProviders(<Home />);
    const calendlyButtons = screen.getAllByTestId('calendly-button');
    expect(calendlyButtons.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByTestId('home-hub-message-btn')).toBeInTheDocument();
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
  });

  it('has no basic accessibility violations', async () => {
    const { container } = renderWithProviders(<Home />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
