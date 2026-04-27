import ProductPage from '../ProductPage';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import { fireEvent, screen } from '@testing-library/react';

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

  it('renders GetStartedSection with default copy when no custom props provided', () => {
    renderWithProviders(<ProductPage {...defaultProps} />);
    // GetStartedSection defaults include "Ready to explore" text
    expect(screen.getByText(/Ready to explore how this could work for you/i)).toBeInTheDocument();
  });

  it('renders GetStartedSection with custom copy when props provided', () => {
    const propsWithCustomCopy = {
      ...defaultProps,
      getStartedLeftParagraph: 'Custom left paragraph text',
      getStartedRightParagraph: 'Custom right paragraph text',
    };
    renderWithProviders(<ProductPage {...propsWithCustomCopy} />);
    expect(screen.getByText('Custom left paragraph text')).toBeInTheDocument();
    expect(screen.getByText('Custom right paragraph text')).toBeInTheDocument();
  });

  it('renders product content sections', () => {
    const { getByRole } = renderWithProviders(<ProductPage {...defaultProps} />);
    expect(getByRole('heading', { name: /What.s Included/i })).toBeInTheDocument();
    expect(getByRole('heading', { name: /Access.*Pricing/i })).toBeInTheDocument();
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

  it('renders relatedServices text in the DOM', () => {
    renderWithProviders(<ProductPage {...defaultProps} />);
    expect(screen.getByText('Test related services.')).toBeInTheDocument();
  });

  it('renders CTA as an external link when ctaHref starts with https://', () => {
    const props = { ...defaultProps, ctaLabel: 'Visit Site', ctaHref: 'https://example.com' };
    renderWithProviders(<ProductPage {...props} />);
    // react-bootstrap Button renders <a role="button">, so query by text then traverse to anchor
    const anchor = screen.getByText('Visit Site').closest('a');
    expect(anchor).toHaveAttribute('href', 'https://example.com');
    expect(anchor).toHaveAttribute('target', '_blank');
    expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders CTA as an internal link when ctaHref is a relative path', () => {
    const props = { ...defaultProps, ctaLabel: 'Learn More', ctaHref: '/wcag' };
    renderWithProviders(<ProductPage {...props} />);
    // react-bootstrap Button renders <a role="button">, so query by text then traverse to anchor
    const anchor = screen.getByText('Learn More').closest('a');
    expect(anchor).toHaveAttribute('href', '/wcag');
    expect(anchor).not.toHaveAttribute('target');
  });
});
