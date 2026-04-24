import { vi } from 'vitest';

vi.mock('../../../components/GetStartedSection/GetStartedSection', () => ({
  __esModule: true,
  default: ({
    leftParagraph,
    rightParagraph,
  }: {
    leftParagraph?: string;
    rightParagraph?: string;
  }) => (
    <section data-testid="get-started-section">
      <h3>Get Started</h3>
      {leftParagraph && <p>{leftParagraph}</p>}
      {rightParagraph && <p>{rightParagraph}</p>}
    </section>
  ),
}));

vi.mock('../../../components/Metadata/Metadata', () => ({
  __esModule: true,
  default: () => null,
}));

import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import About from '../About';

describe('About', () => {
  it('renders without crashing', () => {
    renderWithProviders(<About />, { route: '/about' });
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('main element has aria-label "About the Founder"', () => {
    renderWithProviders(<About />, { route: '/about' });
    expect(screen.getByRole('main', { name: 'About the Founder' })).toBeInTheDocument();
  });

  it('renders The 18-Year Pattern heading', () => {
    renderWithProviders(<About />, { route: '/about' });
    expect(screen.getByRole('heading', { name: 'The 18-Year Pattern' })).toBeInTheDocument();
  });

  it('renders Education & Career Breadth heading', () => {
    renderWithProviders(<About />, { route: '/about' });
    expect(screen.getByRole('heading', { name: 'Education & Career Breadth' })).toBeInTheDocument();
  });

  it('renders The Turning Point heading', () => {
    renderWithProviders(<About />, { route: '/about' });
    expect(screen.getByRole('heading', { name: 'The Turning Point' })).toBeInTheDocument();
  });

  it('renders Nothing About Us Without Us heading', () => {
    renderWithProviders(<About />, { route: '/about' });
    expect(
      screen.getByRole('heading', { name: 'Nothing About Us Without Us' })
    ).toBeInTheDocument();
  });

  it('renders Why AccessiTech heading', () => {
    renderWithProviders(<About />, { route: '/about' });
    expect(screen.getByRole('heading', { name: 'Why AccessiTech' })).toBeInTheDocument();
  });

  it('renders both pull-quote blockquote elements', () => {
    renderWithProviders(<About />, { route: '/about' });
    const blockquotes = screen.getAllByRole('blockquote');
    expect(blockquotes.length).toBeGreaterThanOrEqual(2);
  });

  it('renders the founder signature containing "conor kelly"', () => {
    renderWithProviders(<About />, { route: '/about' });
    expect(screen.getByText(/conor kelly/i)).toBeInTheDocument();
  });

  it('renders the GetStartedSection component', () => {
    renderWithProviders(<About />, { route: '/about' });
    expect(screen.getByTestId('get-started-section')).toBeInTheDocument();
  });

  it('renders breadcrumb with Home link and active About item', () => {
    renderWithProviders(<About />, { route: '/about' });
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
