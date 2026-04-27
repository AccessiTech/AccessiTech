import { vi } from 'vitest';
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return { ...actual, useNavigate: () => mockNavigate };
});
vi.mock('../../components/Metadata/Metadata', () => ({
  __esModule: true,
  default: () => <div data-testid="metadata" />,
}));

import { screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import ProductsHub from '../ProductsHub';
import { PRODUCTS_HEADER, WCAG_SERIES_TITLE, OSS_TITLE, CCCS_TITLE } from '../../Home/Home';
import { ENDOGENAI_HUB_TITLE } from '../ProductsHub';

describe('ProductsHub Page', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders the products heading', () => {
    renderWithProviders(<ProductsHub />, { route: '/products' });
    expect(screen.getByRole('heading', { level: 2, name: PRODUCTS_HEADER })).toBeInTheDocument();
  });

  it('renders all product cards including EndogenAI', () => {
    renderWithProviders(<ProductsHub />, { route: '/products' });
    expect(screen.getByText(WCAG_SERIES_TITLE)).toBeInTheDocument();
    expect(screen.getByText(ENDOGENAI_HUB_TITLE)).toBeInTheDocument();
    expect(screen.getByText(OSS_TITLE)).toBeInTheDocument();
    expect(screen.getByText(CCCS_TITLE)).toBeInTheDocument();
  });

  it('renders all product card buttons including EndogenAI', () => {
    renderWithProviders(<ProductsHub />, { route: '/products' });
    expect(screen.getByTestId('products-card-wcag-series-learn-more-btn')).toBeInTheDocument();
    expect(screen.getByTestId('products-card-endogenai-learn-more-btn')).toBeInTheDocument();
    expect(screen.getByTestId('products-card-oss-asaaps-learn-more-btn')).toBeInTheDocument();
    expect(screen.getByTestId('products-card-cccs-learn-more-btn')).toBeInTheDocument();
    expect(screen.getByTestId('products-card-blog-learn-more-btn')).toBeInTheDocument();
  });

  it('renders main landmark', () => {
    renderWithProviders(<ProductsHub />, { route: '/products' });
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  describe('navigation', () => {
    it('navigates to /products/wcag-series from WCAG card button', () => {
      renderWithProviders(<ProductsHub />, { route: '/products' });
      fireEvent.click(screen.getByTestId('products-card-wcag-series-learn-more-btn'));
      expect(mockNavigate).toHaveBeenCalledWith('/products/wcag-series');
    });

    it('navigates to /products/endogenai from EndogenAI card button', () => {
      renderWithProviders(<ProductsHub />, { route: '/products' });
      fireEvent.click(screen.getByTestId('products-card-endogenai-learn-more-btn'));
      expect(mockNavigate).toHaveBeenCalledWith('/products/endogenai');
    });

    it('navigates to /products/oss-asaaps from OSS card button', () => {
      renderWithProviders(<ProductsHub />, { route: '/products' });
      fireEvent.click(screen.getByTestId('products-card-oss-asaaps-learn-more-btn'));
      expect(mockNavigate).toHaveBeenCalledWith('/products/oss-asaaps');
    });

    it('navigates to /products/cccs from CCCs card button', () => {
      renderWithProviders(<ProductsHub />, { route: '/products' });
      fireEvent.click(screen.getByTestId('products-card-cccs-learn-more-btn'));
      expect(mockNavigate).toHaveBeenCalledWith('/products/cccs');
    });

    it('navigates to /blog from Blog card button', () => {
      renderWithProviders(<ProductsHub />, { route: '/products' });
      fireEvent.click(screen.getByTestId('products-card-blog-learn-more-btn'));
      expect(mockNavigate).toHaveBeenCalledWith('/blog');
    });
  });
});
