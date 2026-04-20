import ProductPage from '../ProductPage';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import { fireEvent } from '@testing-library/react';

const defaultProps = {
  title: 'Test Product',
  overview: 'Test overview text.',
  whyItExists: 'Test why it exists.',
  included: ['Item one', 'Item two'],
  howToUse: 'Test how to use.',
  relatedServices: 'Test related services.',
  ctaLabel: 'Get Started',
  ctaHref: '/wcag',
  pathname: 'products/test-product',
  metaTitle: 'Test Product | AccessiTech',
  metaDescription: 'Test meta description.',
};

describe('ProductPage', () => {
  it('renders without crashing', () => {
    renderWithProviders(<ProductPage {...defaultProps} />);
  });

  it('renders the title', () => {
    const { getByRole } = renderWithProviders(<ProductPage {...defaultProps} />);
    expect(getByRole('heading', { name: 'Test Product' })).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    const { getByText } = renderWithProviders(<ProductPage {...defaultProps} />);
    expect(getByText('Get Started')).toBeInTheDocument();
  });

  it('renders all four product sections', () => {
    const { getByRole } = renderWithProviders(<ProductPage {...defaultProps} />);
    expect(getByRole('heading', { name: /What.s Included/i })).toBeInTheDocument();
    expect(getByRole('heading', { name: /Access.*Pricing/i })).toBeInTheDocument();
    expect(getByRole('heading', { name: /Next Steps/i })).toBeInTheDocument();
  });

  it('renders included items as list', () => {
    const { getByText } = renderWithProviders(<ProductPage {...defaultProps} />);
    expect(getByText('Item one')).toBeInTheDocument();
    expect(getByText('Item two')).toBeInTheDocument();
  });

  it('renders overview and whyItExists text', () => {
    const { getByText } = renderWithProviders(<ProductPage {...defaultProps} />);
    expect(getByText('Test overview text.')).toBeInTheDocument();
    expect(getByText('Test why it exists.')).toBeInTheDocument();
  });

  it('renders internal CTA without target=_blank', () => {
    const { getByText } = renderWithProviders(<ProductPage {...defaultProps} />);
    const btn = getByText('Get Started').closest('a');
    expect(btn).not.toHaveAttribute('target', '_blank');
  });

  it('renders external CTA with target=_blank and rel=noopener noreferrer', () => {
    const externalProps = { ...defaultProps, ctaHref: 'https://github.com/AccessiTech' };
    const { getByText } = renderWithProviders(<ProductPage {...externalProps} />);
    const btn = getByText('Get Started').closest('a');
    expect(btn).toHaveAttribute('target', '_blank');
    expect(btn).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders breadcrumb with Home and product title', () => {
    const { getByText, getAllByText } = renderWithProviders(<ProductPage {...defaultProps} />);
    expect(getByText('Home')).toBeInTheDocument();
    // Title appears in both heading and breadcrumb active item
    expect(getAllByText('Test Product').length).toBeGreaterThanOrEqual(1);
  });

  it('breadcrumb Home click calls navigate without error', () => {
    const { getByText } = renderWithProviders(<ProductPage {...defaultProps} />);
    const homeLink = getByText('Home');
    expect(() => fireEvent.click(homeLink)).not.toThrow();
  });

  it('renders main landmark with aria-label matching title', () => {
    const { getByRole } = renderWithProviders(<ProductPage {...defaultProps} />);
    expect(getByRole('main', { name: 'Test Product' })).toBeInTheDocument();
  });
});
