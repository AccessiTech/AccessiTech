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
    it('shows navigation on home page', () => {
      renderWithRouter(<Header />, '/');
      expect(screen.getByLabelText('Main navigation')).toBeInTheDocument();
    });

    it('shows navigation on other pages', () => {
      renderWithRouter(<Header />, '/blog');
      expect(screen.getByLabelText('Main navigation')).toBeInTheDocument();
    });

    it('applies active class to current page link', () => {
      renderWithRouter(<Header />, '/blog');
      const blogLink = screen.getByText('Blog');
      expect(blogLink).toHaveClass('active');
      expect(screen.getByText('Learn')).not.toHaveClass('active');
    });

    it('contains correct top-level navigation links', () => {
      renderWithRouter(<Header />, '/blog');
      expect(screen.getByText('Blog').getAttribute('href')).toBe('/blog');
      expect(screen.getByText('Learn').getAttribute('href')).toBe('/wcag');
      expect(screen.getByText('Contact').getAttribute('href')).toBe('/contact');
    });

    it('renders Services as first nav item and Contact as last', () => {
      renderWithRouter(<Header />, '/blog');
      expect(screen.getByText('Services')).toBeInTheDocument();
      expect(screen.getByText('Contact')).toBeInTheDocument();
      // Select only direct children of the top-level ul (not dropdown sub-items)
      const topNav = screen.getByLabelText('Main navigation');
      const topItems = topNav.querySelectorAll(':scope > ul > li > a');
      const texts = Array.from(topItems).map(el => el.textContent?.trim());
      expect(texts[0]).toBe('Services');
      expect(texts[texts.length - 1]).toBe('Contact');
    });
  });

  describe('Services dropdown', () => {
    it('renders Services as a top-level link to /services', () => {
      renderWithRouter(<Header />, '/blog');
      expect(screen.getByText('Services').getAttribute('href')).toBe('/services');
    });

    it('renders dropdown sub-links for Consulting and Mentorship', () => {
      renderWithRouter(<Header />, '/blog');
      expect(screen.getByText('Consulting').getAttribute('href')).toBe('/services/consulting');
      expect(screen.getByText('Mentorship').getAttribute('href')).toBe('/services/mentorship');
    });

    it('renders indented consulting sub-page links', () => {
      renderWithRouter(<Header />, '/blog');
      expect(screen.getByText('ASaaPs').getAttribute('href')).toBe('/services/consulting/asaaps');
      expect(screen.getByText('AI Integration').getAttribute('href')).toBe(
        '/services/consulting/ai-integration'
      );
      expect(screen.getByText('QA').getAttribute('href')).toBe('/services/consulting/qa');
    });

    it('marks Consulting active on any /services/consulting* path', () => {
      renderWithRouter(<Header />, '/services/consulting/asaaps');
      expect(screen.getByText('Consulting')).toHaveClass('active');
    });

    it('marks the ASaaPs sub-item active on its route', () => {
      renderWithRouter(<Header />, '/services/consulting/asaaps');
      expect(screen.getByText('ASaaPs')).toHaveClass('active');
      expect(screen.getByText('AI Integration')).not.toHaveClass('active');
      expect(screen.getByText('QA')).not.toHaveClass('active');
    });

    it('marks the AI Integration sub-item active on its route', () => {
      renderWithRouter(<Header />, '/services/consulting/ai-integration');
      expect(screen.getByText('AI Integration')).toHaveClass('active');
    });

    it('marks the QA sub-item active on its route', () => {
      renderWithRouter(<Header />, '/services/consulting/qa');
      expect(screen.getByText('QA')).toHaveClass('active');
    });

    it('consulting sub-items have dropdown-sub-item class on their li', () => {
      renderWithRouter(<Header />, '/blog');
      const asaapsLink = screen.getByText('ASaaPs');
      expect(asaapsLink.closest('li')).toHaveClass('dropdown-sub-item');
      expect(screen.getByText('AI Integration').closest('li')).toHaveClass('dropdown-sub-item');
      expect(screen.getByText('QA').closest('li')).toHaveClass('dropdown-sub-item');
    });

    it('renders indented mentorship sub-page links', () => {
      renderWithRouter(<Header />, '/blog');
      expect(screen.getByText('Courses & Content').getAttribute('href')).toBe(
        '/services/mentorship/cccs'
      );
      expect(screen.getByText('Coaching').getAttribute('href')).toBe(
        '/services/mentorship/coaching'
      );
      expect(screen.getByText('OpenClassrooms').getAttribute('href')).toBe(
        '/services/mentorship/openclassrooms'
      );
      expect(screen.getByText('SOTC').getAttribute('href')).toBe('/services/mentorship/sotc');
    });

    it('marks Mentorship active on any /services/mentorship* path', () => {
      renderWithRouter(<Header />, '/services/mentorship/coaching');
      expect(screen.getByText('Mentorship')).toHaveClass('active');
    });

    it('marks each mentorship sub-item active on its own route', () => {
      renderWithRouter(<Header />, '/services/mentorship/cccs');
      expect(screen.getByText('Courses & Content')).toHaveClass('active');
      expect(screen.getByText('Coaching')).not.toHaveClass('active');
    });

    it('marks Coaching active on its route', () => {
      renderWithRouter(<Header />, '/services/mentorship/coaching');
      expect(screen.getByText('Coaching')).toHaveClass('active');
    });

    it('marks OpenClassrooms active on its route', () => {
      renderWithRouter(<Header />, '/services/mentorship/openclassrooms');
      expect(screen.getByText('OpenClassrooms')).toHaveClass('active');
    });

    it('marks SOTC active on its route', () => {
      renderWithRouter(<Header />, '/services/mentorship/sotc');
      expect(screen.getByText('SOTC')).toHaveClass('active');
    });

    it('mentorship sub-items have dropdown-sub-item class on their li', () => {
      renderWithRouter(<Header />, '/blog');
      expect(screen.getByText('Courses & Content').closest('li')).toHaveClass('dropdown-sub-item');
      expect(screen.getByText('Coaching').closest('li')).toHaveClass('dropdown-sub-item');
      expect(screen.getByText('OpenClassrooms').closest('li')).toHaveClass('dropdown-sub-item');
      expect(screen.getByText('SOTC').closest('li')).toHaveClass('dropdown-sub-item');
    });

    it('applies active class to Services link on /services', () => {
      renderWithRouter(<Header />, '/services');
      expect(screen.getByText('Services')).toHaveClass('active');
    });

    it('does not apply active class to Services link on other pages', () => {
      renderWithRouter(<Header />, '/blog');
      expect(screen.getByText('Services')).not.toHaveClass('active');
    });
  });

  describe('Products dropdown', () => {
    it('renders Products as a top-level link to /products', () => {
      renderWithRouter(<Header />, '/blog');
      expect(screen.getByText('Products').getAttribute('href')).toBe('/products');
    });

    it('renders dropdown sub-links for each product page', () => {
      renderWithRouter(<Header />, '/blog');
      expect(screen.getByText('WCAG Series').getAttribute('href')).toBe('/products/wcag-series');
      expect(screen.getByText('OSS & ASaaPs').getAttribute('href')).toBe('/products/oss-asaaps');
      expect(screen.getByText('Curriculum & Content').getAttribute('href')).toBe('/products/cccs');
    });

    it('product sub-links have dropdown-sub-item class on their li', () => {
      renderWithRouter(<Header />, '/blog');
      expect(screen.getByText('WCAG Series').closest('li')).toHaveClass('dropdown-sub-item');
      expect(screen.getByText('OSS & ASaaPs').closest('li')).toHaveClass('dropdown-sub-item');
      expect(screen.getByText('Curriculum & Content').closest('li')).toHaveClass(
        'dropdown-sub-item'
      );
    });

    it('marks the WCAG Series dropdown item active on /products/wcag-series', () => {
      renderWithRouter(<Header />, '/products/wcag-series');
      expect(screen.getByText('WCAG Series')).toHaveClass('active');
    });

    it('marks the OSS dropdown item active on /products/oss-asaaps', () => {
      renderWithRouter(<Header />, '/products/oss-asaaps');
      expect(screen.getByText('OSS & ASaaPs')).toHaveClass('active');
    });

    it('marks the CCCs dropdown item active on /products/cccs', () => {
      renderWithRouter(<Header />, '/products/cccs');
      expect(screen.getByText('Curriculum & Content')).toHaveClass('active');
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
