import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import Header, { HEADER, GenericHeaderRow, HeaderRow, HomeHeaderRow } from '../Header';
import { SKIP_TO_MAIN_CONTENT } from '../../../pages/Home/Home';
import { COMPANY_TITLE, ROOT } from '../../../settings/strings';
import { IMAGES_URL } from '../../../settings/env';

// No need to mock SCSS files - they are handled by Vitest configuration

// Mock A11Y component
vi.mock('../../A11Y/A11Y', () => ({
  default: () => <div data-testid="a11y-component">A11Y Component</div>,
}));

// Mock router
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useLocation: vi.fn(),
  };
});

// Mock utils
vi.mock('../../../settings/utils', () => ({
  getPageFromPath: (path: string) => path.replace('/', '') || 'home',
}));

describe('Header Component', () => {
  const mockLocation = (pathname: string) => {
    vi.mocked(useLocation).mockReturnValue({
      pathname,
      search: '',
      hash: '',
      state: null,
      key: 'default',
    });
  };

  const renderWithRouter = (component: React.ReactNode, initialPath = '/') => {
    mockLocation(initialPath);
    return render(<MemoryRouter initialEntries={[initialPath]}>{component}</MemoryRouter>);
  };

  describe('Basic Rendering', () => {
    it('renders with correct aria-label', () => {
      renderWithRouter(<Header />);
      expect(screen.getByLabelText(HEADER)).toBeInTheDocument();
    });

    it('renders skip link', () => {
      renderWithRouter(<Header />);
      const skipLink = screen.getByText(SKIP_TO_MAIN_CONTENT);
      expect(skipLink).toBeInTheDocument();
      expect(skipLink.getAttribute('href')).toBe('#main');
    });

    it('renders logo with correct attributes', () => {
      renderWithRouter(<Header />);
      const logoLink = screen.getByTitle(COMPANY_TITLE);
      expect(logoLink).toBeInTheDocument();
      expect(logoLink.getAttribute('href')).toBe(ROOT);

      const logo = screen.getByRole('heading', { level: 1 });
      expect(logo).toBeInTheDocument();
      expect(logo.getAttribute('style')).toContain(`${IMAGES_URL}/TypeLogo_White_HC.svg`);
    });

    it('renders A11Y component', () => {
      renderWithRouter(<Header />);
      expect(screen.getByTestId('a11y-component')).toBeInTheDocument();
    });
  });

  describe('Navigation', () => {
    it('hides navigation on home page', () => {
      renderWithRouter(<Header />, '/');
      expect(screen.queryByLabelText('Main navigation')).not.toBeInTheDocument();
    });

    it('shows navigation on other pages', () => {
      renderWithRouter(<Header />, '/blog');
      expect(screen.getByLabelText('Main navigation')).toBeInTheDocument();
    });

    it('applies active class to current page link', () => {
      renderWithRouter(<Header />, '/blog');
      const blogLink = screen.getByText('Blog');
      expect(blogLink).toHaveClass('active');
      expect(screen.getByText('WCAG Explained')).not.toHaveClass('active');
    });

    it('contains correct navigation links', () => {
      renderWithRouter(<Header />, '/blog');
      expect(screen.getByText('Blog').getAttribute('href')).toBe('/blog');
      expect(screen.getByText('WCAG Explained').getAttribute('href')).toBe('/wcag');
    });
  });

  describe('Header Row Variants', () => {
    it('renders GenericHeaderRow with custom col props', () => {
      const colProps = { xs: 12 };
      render(
        <MemoryRouter>
          <GenericHeaderRow colProps={colProps} />
        </MemoryRouter>
      );
      expect(screen.getByLabelText(HEADER)).toBeInTheDocument();
    });

    it('renders HeaderRow with default col props', () => {
      render(
        <MemoryRouter>
          <HeaderRow />
        </MemoryRouter>
      );
      expect(screen.getByLabelText(HEADER)).toBeInTheDocument();
    });

    it('renders HomeHeaderRow with empty col props', () => {
      render(
        <MemoryRouter>
          <HomeHeaderRow />
        </MemoryRouter>
      );
      expect(screen.getByLabelText(HEADER)).toBeInTheDocument();
    });
  });

  describe('Page State Updates', () => {
    it('updates page class when location changes', () => {
      const { rerender } = renderWithRouter(<Header />, '/blog');
      let header = screen.getByLabelText(HEADER);
      expect(header).toHaveClass('blog');

      mockLocation('/wcag');
      rerender(
        <MemoryRouter initialEntries={['/wcag']}>
          <Header />
        </MemoryRouter>
      );
      header = screen.getByLabelText(HEADER);
      expect(header).toHaveClass('wcag');
    });
  });
});
