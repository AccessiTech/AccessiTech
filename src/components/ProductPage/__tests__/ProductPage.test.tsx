import ProductPage from '../ProductPage';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';

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
});
